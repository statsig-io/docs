# Autotune
Autotune automatically finds the winning variant for you among a group of candidates, optimized for a metric of your choice.   

## How Autotune works 
Autotune executes a Bayesian multi-armed bandit algorithm to find a winning variant that optimizes for a target metric. At a high level, the multi-armed bandit algorithm works by adding more users to a treatment as soon as it recognizes that it is clearly better in maximizing the reward (the target metric). Throughout the process, higher performing treatments are allocated more traffic whereas underperforming treatments are allocated less traffic. When the winning treatment beats the second best treatment by enough margin, the process terminates. 

## When to use Autotune
The main advantage of using Autotune over a regular A/B test is that Autotune generally terminates earlier than an A/B test because it requires a much smaller sample size. Autotune also suffers from fewer mistakes than A/B testing. A balanced A/B test sends 50% of traffic to each group whereas Autotune sends lesser and lesser traffic to the losing treatment. However, you want to weight the advantage of using a smaller sample size against a possibly higher false positive rate with Autotune. 
Statsig recommends using Autotune in the following scenarios:
1. The cost of exposing users to a losing treatment is high. For example, sending users to a landing page that is inferior may result in lost revenue. While this may be a one-time loss, testing two user registration flows may result in users that never sign up. In this case, Autotune avoids permanently losing users.  
2. When the product has limited user traffic, Autotune works better as it requires a smaller sample size and terminates earlier. In this case, Autotune is a faster and simpler option than an A/B test. 
3. Autotune is ideal when there are more than two variants to test. It’s common to use Autotune to test 4-8 variants at a time whereas A/B tests are limited to two variants per test.

## How to use Autotune	
1. To create a new Autotune experiment, navigate to the Autotune section on the Statsig console: https://console.statsig.com/ 
2. Click the Create New button and enter the name and description of the Autotune experiment that you want to create. 
3. Enter the variants that you want to test in the Autotune experiment as shown below.

![image](https://user-images.githubusercontent.com/1315028/131385189-5f0c1d93-ba87-4159-8995-3c30991587a0.png)

4. Select the success metric that you want to optimize in the Autotune experiment as shown below.

![image](https://user-images.githubusercontent.com/1315028/131385239-5a76d253-022b-457e-a370-f9ee7ce566a1.png)

5. As the Autotune experiment runs, it automatically converges on the winning variant as shown below.

![image](https://user-images.githubusercontent.com/1315028/131384977-144dd868-787b-45ad-9ff1-fc9afbd4c769.png)
