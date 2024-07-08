---
title: Feature Flag Best Practices
sidebar_label: Best Practices
slug: /feature-flags/best-practices
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

Statsig classifies the best practices for using feature gates into four categories: implementation, development, collaboration, and governance.

## Implementation

1. **Manage for ease and maintainability** – Use simple if/else gate checks for short lived gates that you can quickly clean up after the release. Use configuration parameters for longer lived gates to avoid nesting multiple gates and growing complexity in your code over time.
2. **Select the gating decision point** – Implement client-side feature gates to select users where most context is available and/or when the feature is primarily developed in the presentation layer (e.g. user registration flow). Implement server-side feature gates when most context is available with the application server and/or when the feature is primarily related to backend system behavior (e.g. new cache layer for better performance). Localizing these gating decisions within the service whose behavior is being changed is the best option in these cases.
3. **Focus on one feature** – Using one feature gate to control multiple features at a time can be confusing and can make troubleshooting issues difficult. If there are multiple parts of a feature that must work together, create a master feature gate to control child feature gates for these individual parts.

## Development

1. **Speed up development** – Shipping new functionality behind a feature gate ensures that the code path is not activated until you’re ready to integrate with your dependencies. This enables you to ship service components faster without being blocked by any dependencies.
2. **Always be testing** - Use feature gates to ensure that in-development features remain inactive in production while continuing to test new functionality in staging or pre-prod environments.
3. **Progressive delivery** – Ship code for in-development features early and often. Shipping code as part of the main branch that can be deployed to production at any time avoids painful merging of long-lived branches at a later point.
4. **Validate functionality with trusted users** – Use features gates to only expose new functionality to trusted and friendly users such as teammates, company employees, and beta customers before launching publicly. Verify that the new functionality is working as expected.
5. **Set up a phased canary release** – Use feature gates to progressively expose new functionality to a small percentage of users, validate user experience, and monitor production system health before launching broadly. In the initial stages, scale up slowly. We recommend the following rollout strategy, which increases by the same multiplier each time, increasing the bucket of new users exposed to the experiment by a larger margin each time: 0% -> 2% -> 10% -> 50% -> 100%
6. **Validate user and system impact** - Compare key user and system metrics against the default behavior. Common user metrics to test include daily and weekly active users, weekly retention, and conversion rates for key user actions. Common system metrics include error response rates, application crash rates, p50/p90/p99 request-response latency, and CPU utilization. You can create a metric for any key user or system behavior by logging the event that best proxies that behavior with Statsig.
7. **Ramp up or roll back** – Identify issues, and negative impact on users early. Use metric-based evidence to decide whether to release the feature more broadly. If you decide to launch, ramp up deployment (e.g. 10% -> 50% -> 100%).
8. **Clean-up after releases** – Once the release is complete, remove unnecessary gates from code. Once they are no longer checked, you are free to turn them off/delete them.

## Collaboration

1. Scoped Access - Invite verified teammates to create, review, and approve feature gates for a specific project.
2. Role-based Access Control (RBAC) - Ensure that only project members with the appropriate privileges can create and edit feature gate configurations with role-based access control.

## Governance

1. **Audit and record** - Set up audit logs for any changes that your team makes to any feature gates.
2. **Monitor and automate** - Set up automated health monitoring and alerts to improve visibility of your feature gates, reduce response times for any issues, and create automated workflows for common response patterns.
