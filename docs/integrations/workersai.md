---
title: Cloudflare Workers AI
sidebar_label: Cloudflare Workers AI
keywords:
  - owner:tore
last_update:
  date: 2025-07-03
---

## Statsig Cloudflare Workers AI Integration

By integrating Statsig with Cloudflare Workers AI, you can easily conduct experiments on different prompts and models, and gather real-time analytics on model performance and usage. Statsig provides the tools to dynamically control variations, measure success metrics, and gain insights into your AI deployments at the edge.

For generic setup of Statsig with Cloudflare Workers (including KV namespace configuration and SDK installation), please refer to our [Cloudflare Workers Integration documentation](/integrations/cloudflare).

For setting up Workers AI itself, please refer to the [Cloudflare Workers AI documentation](https://developers.cloudflare.com/workers-ai/).

### Vision

When you deploy a Cloudflare Worker running AI code, Statsig can automatically inject lightweight instrumentation to capture inference requests and responses. Statsig can track the key metadata for each request (models, latency, token usage), but you can include any others you find valuable (success rates, user interactions, etc).

This integration empowers developers to:

  * **Experimentation:** Easily set up experiments (e.g., prompt “A” vs. prompt “B”, llama vs deepseek models) and define success metrics (conversion, quality rating, user retention). Statsig dynamically determines which variation each request should use, ensuring statistically valid traffic splits.
  * **Real-time Analytics:** The integrated Statsig SDK sends anonymized event data (model outputs, user interactions, metrics) back to Statsig’s servers in real time. Data is gathered at the edge with minimal overhead, then streamed to Statsig for fast analysis.

### Use Case 1: Prompt and/or Model Experiments

This use case demonstrates how to use Statsig experiments to test different prompts and AI models within your Cloudflare Worker.  For the sake of this example, we have 4 groups in our experiment.  A control, with our default prompt and llama model, and then each possible variant switching to a different prompt and/or model (deepseek, in this case).

#### Sample Experiment Setup in Statsig Console

![prompt and model experiment](https://github.com/user-attachments/assets/e5ed3e92-60af-4dc6-95a6-0f99eeae5152)

See the sample code below for the experiment implementation in a Cloudflare Worker with AI.

### Use Case 2: Model Analytics

Beyond experiments, the logging mechanism illustrated below provides valuable insights into your AI model's performance and usage patterns.  You could keep the default parameters for models and prompts and still get insights from the metadata you log to Statsig.

#### What to track for Model Analytics:

  * **Latency (`ai_inference_ms`):** Crucial for understanding user experience. You can monitor average, P90, P99 latencies in Statsig.
  * **Model Usage (e.g., `prompt_tokens`, `completion_tokens`):** If your AI provider returns token counts, logging these allows you to track cost and efficiency.
  * **Error Rates:** Log events when the AI model returns an error or an unexpected response.
  * **Output Quality (via custom events):**
      * **User Feedback:** If your application allows users to rate the AI's response (e.g., thumbs up/down), log these as Statsig events.
      * **Downstream Metrics:** Track how the AI's output influences key business metrics (e.g., conversion rates if the AI is generating product descriptions, or user engagement if it's a chatbot).

#### How to view Model Analytics in Statsig

By consistently logging these metrics, you can create custom dashboards in Statsig to monitor the health and effectiveness of your AI models in real-time. This allows you to identify performance bottlenecks, cost inefficiencies, and areas for improvement.

For instance, within minutes of adding the logging from the example below to your function, you can start to see the breakdown of latency per model with a query like this:

![metrics explorer](https://github.com/user-attachments/assets/c18ffb62-ff91-4fec-b5e4-64eaab63d528)


#### Example Worker Code for Prompt/Model Experimentation and Analytics

```typescript
import { CloudflareKVDataAdapter } from 'statsig-node-cloudflare-kv';
import Statsig from 'statsig-node';
import { StatsigUser } from 'statsig-node';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    await initStatsig(env);

    // ideally, use a logged in userid.  In this example, I have the RayID from cloudflare
    const rayID = request.headers.get('cf-ray') || '';
    const user = {
        userID: rayID,
    };

    const promptExp = Statsig.getExperimentSync(
        user,
        "workers_ai_experiment", // Name of your experiment in Statsig Console
    );
    // fetch the prompt and model to use for this ray ID
    // providing default values in case of failure to initialize statsig from the kv store
    const prompt = promptExp.get("prompt", "What is the origin of the phrase Hello, World");
    const model = promptExp.get("model", "@cf/meta/llama-3.1-8b-instruct");

    const start = performance.now();
    const response = await env.AI.run(model, {
        prompt,
    });
    const end = performance.now();
    const aiInferenceMs = end - start;

    logUsageToStatsig(user, model, response, aiInferenceMs);
    ctx.waitUntil(Statsig.flush(1000));
    return new Response(JSON.stringify(response.response));
  },
} satisfies ExportedHandler<Env>;

/**
 * Logs AI model usage and performance metrics to Statsig.
 * @param user The StatsigUser object.
 * @param model The name of the AI model used.
 * @param response The response object from the AI model (expected to contain a 'usage' field).
 * @param aiInferenceMs The time taken for AI inference in milliseconds.
 */
function logUsageToStatsig(user: StatsigUser, model: string, response: any, aiInferenceMs?: number) {
  const metadata = {
    ...(response?.usage || {}),
    ai_inference_ms: aiInferenceMs,
  };
  
  Statsig.logEvent(user, "cloudflare_ai", model, metadata);
}

/**
 * Initializes the Statsig SDK.
 * Make sure you have the right bindings configured for the KV, and a secret for the Statsig API key
 * Refer to https://docs.statsig.com/integrations/cloudflare for more details on integrating Statsig with Cloudflare workers
 * @param env The Workers environment variables.
 */
async function initStatsig(env: Env) {
    const dataAdapter = new CloudflareKVDataAdapter(env.STATSIG_KV, 'statsig-YOUR_STATSIG_PROJECT_ID'); // Replace with your actual project ID
    await Statsig.initialize(
        env.STATSIG_SERVER_API_KEY, // Your Statsig secret key
        { 
            dataAdapter: dataAdapter,
            postLogsRetryLimit: 0,
            initStrategyForIDLists: 'none',
            initStrategyForIP3Country: 'none',
            disableIdListsSync: true,
            disableRulesetsSync: true, // Optimizations for fast initialization in Cloudflare Workers
        },
    );  
}
```

**Explanation:**

1.  **`initStatsig(env)`**: This function initializes the Statsig SDK using the `CloudflareKVDataAdapter` to fetch configurations from Cloudflare KV, ensuring low-latency access to your experiment setups. Make sure to replace `'statsig-YOUR_STATSIG_PROJECT_ID'` with your actual Statsig project ID and configure `STATSIG_SERVER_API_KEY` and `STATSIG_KV` as environment variables in your Worker.
2.  **`Statsig.getExperimentSync(...)`**: This is the core of the experimentation. It retrieves the assigned experiment variant for the current user (based on `rayID`) for the `workers_ai_experiment` experiment. The `get()` method then safely retrieves the `prompt` and `model` parameters defined in your Statsig experiment, falling back to default values if the experiment or parameter is not found.
3.  **`env.AI.run(model, { prompt })`**: This executes the AI model provided by Cloudflare Workers AI with the dynamically chosen `model` and `prompt`.
4.  **Latency Measurement**: `performance.now()` is used to capture the start and end times of the AI inference, allowing you to track the `ai_inference_ms` metric.
5.  **`logUsageToStatsig(...)`**: This function logs a custom event (`cloudflare_ai`) to Statsig. It includes the `model` used as the event value and attaches metadata such as `ai_inference_ms` and any `usage` information (e.g., token counts) returned by the AI model. This data is crucial for analyzing model performance and cost.
6.  **`ctx.waitUntil(Statsig.flush(1000))`**: This ensures that all logged events are asynchronously sent to Statsig before the Worker's execution context is terminated, without blocking the response to the user.

### Other Use Cases enabled by this Integration

  * **Prompt Tuning:** An e-commerce app running on Workers AI tries two different prompt styles for product descriptions. Statsig tracks cart conversion and time on site, revealing which prompt yields higher sales.
  * **Model Selection:** A developer tests GPT-3.5 vs. GPT-4 within Cloudflare Workers AI. Statsig shows which model, combined with specific temperature or frequency penalty values, generates more accurate or user-satisfying results.
  * **Response Latency vs. Quality:** By varying max token length and frequency penalties within an experiment, Statsig helps optimize for speed without sacrificing accuracy, crucial for user-facing chat applications.
  * **Cost Optimization:** Monitor `prompt_tokens` and `completion_tokens` by model and prompt variant to identify the most cost-effective AI configurations.
