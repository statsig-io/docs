# Statsig Docs — AI Instructions

This repo is the source for **https://docs.statsig.com**, powered by [Mintlify](https://mintlify.com). All content is `.mdx` files. There is no build step or server-side code to run other than the Mintlify dev server.

---

## Local development

```bash
npm i -g mintlify   # one-time install
mintlify dev        # starts on localhost:3000
```

If the dev server won't start, run `mintlify install` to reinstall dependencies.

---

## Repo structure

```
/                        ← repo root (also where docs.json lives)
├── docs.json            ← Mintlify config: nav, redirects, theme, integrations
├── snippets/            ← reusable MDX partials (the ONLY place for shared content)
├── styles/
│   └── config/vocabularies/Mintlify/accept.txt  ← spellcheck allowlist
├── scripts/
│   ├── kapa.js          ← AI search widget (DO NOT MODIFY)
│   └── statsig.js       ← analytics/session replay tracking (DO NOT MODIFY)
├── images/              ← static assets
├── .github/
│   └── pull_request_template.md
│
│   Content directories (each maps to a docs section):
├── access-management/   ← orgs, projects, teams, API keys, SSO, SCIM, pricing
├── ai-evals/            ← AI evaluation (prompts, offline/online evals, node/python SDKs)
├── autotune/            ← bandit experiments (MAB, CMAB/contextual)
├── client/              ← client SDK docs (JS, React, Next, iOS, Android, etc.)
├── compliance/          ← privacy, data deletion, AI governance
├── console-api/         ← Console API reference
├── control-panel/       ← control panel overview
├── data-warehouse-ingestion/  ← warehouse data ingestion
├── dynamic-config/      ← dynamic config feature
├── experiments/         ← A/B experiments, stats engine, variance reduction, etc.
├── faq.mdx              ← top-level FAQ
├── feature-flags/       ← feature gates/flags
├── guides/              ← tutorials, migration guides, how-tos
├── http-api/            ← HTTP API reference
├── infra-analytics/     ← infrastructure analytics (traces, logs)
├── infrastructure/      ← networking, IP ranges, API proxies, reliability
├── integrations/        ← third-party integrations (Slack, Datadog, Vercel, etc.)
├── messages/            ← messages feature
├── metrics/             ← metrics creation and management
├── product-analytics/   ← product analytics, funnels, dashboards
├── release-pipeline/    ← release pipeline feature
├── sdks/                ← SDK overview, concepts, quickstarts
├── segments/            ← audience segments
├── server/              ← legacy server SDK docs
├── server-core/         ← current server SDK docs (Node, Python, Go, Java, etc.)
├── session-replay/      ← session replay feature
├── stats-engine/        ← stats engine methodology
├── statsig-warehouse-native/  ← Warehouse Native product
├── statsigcli/          ← Statsig CLI
└── webanalytics/        ← web analytics, autocapture
```

---

## Content files (.mdx)

### File extension
Always `.mdx`. Never `.md`.

### Frontmatter

```yaml
---
title: "Page Title"                          # required
description: "One-sentence SEO summary."     # recommended
sidebarTitle: "Shorter sidebar title"        # optional — use when title is too long for sidebar
keywords:                                    # optional
  - owner:brock
last_update:                                 # optional
  date: 2025-10-02
---
```

- `title` is required and must be non-empty.
- `description` is used for SEO meta tags and social previews — include it on all new pages.
- `sidebarTitle` overrides the displayed sidebar label without changing the `<title>` or `<h1>`. Use it when the full title is too long.
- Do **not** add `id`, `blueprint`, `updated_at`, `landing`, or `nav_title` — those are not used in this repo.

### Internal links
Use root-relative paths with no `.mdx` extension:
```markdown
[Feature Flags](/feature-flags/overview)
[Create an experiment](/experiments/create-new)
```
Never use relative paths (`../`) or include `.mdx`.

### Images
Images live in `/images/`. Reference them from the root:
```mdx
<Frame>
  <img src="/images/experiments-hero.png" alt="Experiments hero" />
</Frame>
```

---

## MDX components

This repo uses **Mintlify MDX** components. Do not use Markdoc syntax (`{% %}`), old Docusaurus syntax (`:::note`), or raw HTML divs for callouts.

### Callouts
```mdx
<Note>Informational note.</Note>
<Info>Supplementary context.</Info>
<Tip>Best practice or helpful shortcut.</Tip>
<Warning>Destructive or irreversible action warning.</Warning>
```

### Images
```mdx
<Frame>
  <img src="/images/path/to/image.png" alt="Description" />
</Frame>
```

### Tabs
```mdx
<Tabs>
  <Tab title="JavaScript">
    ```js
    statsig.checkGate(user, "my_gate");
    ```
  </Tab>
  <Tab title="Python">
    ```python
    statsig.check_gate(user, "my_gate")
    ```
  </Tab>
</Tabs>
```

### Code groups (multi-language)
```mdx
<CodeGroup>
  ```bash npm
  npm install statsig-js
  ```
  ```bash yarn
  yarn add statsig-js
  ```
</CodeGroup>
```

### Accordions
```mdx
<AccordionGroup>
  <Accordion title="First item">
    Content here.
  </Accordion>
  <Accordion title="Second item">
    Content here.
  </Accordion>
</AccordionGroup>
```

### Cards
```mdx
<CardGroup cols={2}>
  <Card title="Feature Flags" icon="flag" href="/feature-flags/overview">
    Roll out features safely.
  </Card>
  <Card title="Experiments" icon="flask" href="/experiments/overview">
    Run A/B tests at scale.
  </Card>
</CardGroup>
```

### Steps
```mdx
<Steps>
  <Step title="Install the SDK">
    Run `npm install statsig-js`.
  </Step>
  <Step title="Initialize">
    Call `statsig.initialize(CLIENT_KEY, user)`.
  </Step>
</Steps>
```

---

## Snippets (reusable content)

Shared content **must** live in `/snippets/`. Snippets cannot be placed in content directories.

```mdx
import MySnippet from '/snippets/path/to/snippet.mdx'

<MySnippet />
```

Existing snippets are organized under `/snippets/sdks/`, `/snippets/server/`, `/snippets/client/`, `/snippets/whn/`, `/snippets/pulse/`, `/snippets/stats-methods/`, etc.

---

## Navigation (docs.json)

All navigation is in `docs.json` under `navigation.tabs[].groups[].pages[]`.

Pages are referenced by their slug relative to the repo root, with no `.mdx` extension:
```json
{
  "tab": "Product Docs",
  "groups": [
    {
      "group": "Feature Management",
      "pages": [
        {
          "group": "Feature Flags",
          "pages": [
            "feature-flags/overview",
            "feature-flags/create"
          ]
        }
      ]
    }
  ]
}
```

When adding a new page:
1. Create the `.mdx` file in the correct section directory.
2. Add its slug to the correct `pages` array in `docs.json`.
3. Pages not listed in `docs.json` are not accessible from the sidebar (they can still be linked to directly).

### Redirects
Defined in `docs.json` under `redirects`:
```json
"redirects": [
  { "source": "/old-path", "destination": "/new-path" }
]
```
Add a redirect when renaming or moving a page to avoid broken links.

---

## Writing style

Apply these rules to all content. For a systematic automated pass, invoke the `/edit-doc` skill (`.claude/skills/edit-doc/SKILL.md`).

### Minimal mode exception

If a file has `edit_doc: minimal` in its frontmatter (used for developer-authored release notes and changelogs), skip all style rules below except: full-sentence prose ends with terminal punctuation, first word of each sentence is capitalized, no stray characters or doubled punctuation, and no frontmatter changes.

---

### 1. Active voice (highest priority — two passes required)

Rewrite passive constructions so the actor is the subject. When the system is the actor, use "Statsig" as the subject.

| Passive (avoid) | Active (use) |
|---|---|
| "Users can be assigned to groups" | "You can assign users to groups" |
| "Events are sent to the API" | "The SDK sends events to the API" |
| "Data is processed in real time" | "Statsig processes data in real time" |
| "Permissions are granted at the org level" | "Statsig grants permissions at the org level" |

**Run a second pass explicitly after fixing everything else.** These patterns are easy to miss:

```
is assigned | are assigned | is removed | are removed
is granted | are granted | is created | are created
is available | are available | was assigned | were assigned
is sent | are sent | can be configured | can be accessed
will be displayed | will be shown | should be checked
```

---

### 2. Present tense

Remove all future tense. The docs describe how the product works now.

| Future (avoid) | Present (use) |
|---|---|
| "This feature will allow you to..." | "This feature lets you..." |
| "The modal will open" | "The modal opens" |
| "Statsig will send a notification" | "Statsig sends a notification" |

Search for: `will`, `will be`, `will allow`, `will enable`, `would be`, `going to`.

---

### 3. Contractions (always required)

Use contractions in all prose. Omitting them makes docs feel formal and stiff.

| Expand (avoid) | Contraction (use) |
|---|---|
| cannot | can't |
| are not | aren't |
| is not | isn't |
| does not | doesn't |
| do not | don't |
| has not | hasn't |
| have not | haven't |
| was not / were not | wasn't / weren't |
| should not | shouldn't |
| could not | couldn't |
| would not | wouldn't |
| will not | won't |

---

### 4. No "please" in instructions

Remove "please" from all instructional text. It adds no information and makes steps feel tentative.

Before: "Please navigate to *Settings > API Keys*."
After: "Navigate to *Settings > API Keys*."

---

### 5. Concise language

Replace wordy phrases with their direct equivalents:

| Wordy (avoid) | Concise (use) |
|---|---|
| in order to | to |
| prior to | before |
| due to the fact that | because |
| has the ability to | can |
| currently | remove (almost always redundant) |
| desired / desire | want or need |
| utilize | use |
| via | through or using |

---

### 6. Inclusive navigation terms

Replace `see` when it directs readers to other documentation. This is an accessibility rule — "see" excludes users with visual impairments.

| Avoid | Use instead |
|---|---|
| "See the API reference." | "Go to the API reference." |
| "See [Configuring the SDK]." | "Refer to [Configuring the SDK]." |
| "See below for details." | "Navigate to the section below." |

**Exception:** Do not replace `see` in non-navigational contexts: "you can see this in the chart", "as you can see".

---

### 7. Second person — no first-person plural

Write to the reader using "you". Remove "we", "our", and "us" from prose (except in URLs).

| Avoid | Use |
|---|---|
| "We recommend using..." | "Statsig recommends using..." |
| "Let's configure the SDK." | "Configure the SDK." |
| "Our platform supports..." | "Statsig supports..." |
| "In this guide, we'll show you..." | "This guide shows you..." |

---

### 8. UI element formatting

| Element type | Formatting | Example |
|---|---|---|
| Interactive elements (buttons, tabs, field labels, checkboxes, menu items) | **Bold** | Click **Save**. Select the **Metrics** tab. |
| Navigation paths and page names | *Italics* | Go to *Feature Flags > Create*. |
| Code, parameters, values | `Backticks` | Set `api_key` to your project key. |

Navigation paths always use italics — never bold:
- Correct: Go to *Settings > API Keys*.
- Incorrect: Go to **Settings** > **API Keys**.

---

### 9. List punctuation

All bulleted and numbered list items end with a period, including single-word and short-phrase items.

---

### 10. Headings

- Sentence case only — capitalize the first word and proper nouns; lowercase everything else.
- No end punctuation (no `.`, `?`, `!`, or `:`).
- Body content starts at `##`. Never use a single `#` in the page body.
- Don't use title case.

Correct: `## Configure your API key`
Incorrect: `## Configure Your API Key.`

---

### Preferred wording substitutions

Apply these everywhere in prose (not inside code blocks or frontmatter):

| Avoid | Use instead |
|---|---|
| `once` (temporal: "once you configure X") | `after` or `when` — don't change `once` meaning "a single time" |
| `first-class` | `primary` or `default` |
| `blacklist` | `block list` or `deny list` |
| `blackout period` | `moratorium` |
| `cripple` | `hinder`, `slow down`, or `impede` |
| `dummy` | `placeholder`, `mock`, `stub`, or `sample` |
| `grandfathered` / `grandfather` | `legacy` or `exempt` |
| `grayed-out` | `disabled` or `inactive` |
| `kill` (non-literal) | `end`, `cancel`, or `stop` |
| `sanity-check` | `validate` or `final check` |
| `terminate` | `end`, `cancel`, or `stop` |
| `abort` | `end`, `cancel`, or `stop` |

---

### What style rules do NOT cover

Do not change: code, API endpoints, parameter names, product names, or content inside fenced code blocks. Do not alter technical meaning when rewriting for style.

---

## AI skills in this repo

Three skills are available for common doc tasks:

| Skill | File | Use when |
|---|---|---|
| `edit-doc` | `.claude/skills/edit-doc/SKILL.md` | Applying Statsig style rules to an existing doc |
| `content-refine` | `.claude/skills/content-refine/SKILL.md` | Improving translatability, reducing verbosity, LLM readability |
| `feature-comparison` | `.claude/skills/feature-comparison/SKILL.md` | Weekly audit of undocumented features; drafting missing docs |

Cursor rules mirroring these skills live in `.cursor/rules/`.

---

## PR checklist

Use `.github/pull_request_template.md`. Key checks:

- [ ] Deleted and redirected old pages (if applicable) — add to `docs.json` redirects
- [ ] Updated any internal links affected by the change
- [ ] Updated screenshots if UI changed
- [ ] New page added to `docs.json` navigation

For review questions, reach out to Brock or Logan on Slack.

---

## Spellcheck

Unknown words cause CI to fail. Add new technical terms to:
```
styles/config/vocabularies/Mintlify/accept.txt
```

---

## What NOT to do

- **Do not modify** `scripts/kapa.js` or `scripts/statsig.js` — analytics/tracking scripts.
- **Do not modify** `docs.json` theme, colors, logo, font, or integration settings unless explicitly asked.
- **Do not use** `.md` extensions — always `.mdx`.
- **Do not use** Markdoc syntax (`{% callout %}`, `{% tabs %}`).
- **Do not use** old Docusaurus callout syntax (`:::note`).
- **Do not place** reusable content outside `/snippets/`.
- **Do not use** relative paths (`../`) in links — always use root-relative `/section/slug`.
- **Do not add** React named exports or complex JSX — Mintlify has limited React support.
