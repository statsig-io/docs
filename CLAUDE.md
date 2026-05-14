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

Apply these rules to all content:

- **Active voice.** "Statsig processes the event" not "The event is processed."
- **Present tense.** "Statsig sends a notification" not "Statsig will send a notification."
- **Second person.** "You can configure..." not "Users can configure..." or "We can configure..."
- **Contractions.** "you can't", "it doesn't", "that's" — always.
- **No "please"** in instructions.
- **Sentence-case headings.** No end punctuation on headings. Body content starts at `##` — never use `#` in page body.
- **Bold** (`**text**`) for interactive UI elements: buttons, tabs, field labels, checkboxes.
- **Italics** (`*text*`) for navigation paths: `*Feature Flags > Create*`.
- **List items** end with a period.
- Replace "in order to" → "to", "via" → "through", "utilize" → "use", "see [doc]" → "go to [doc]".
- No "we", "our", or "us" in prose.

Use the `/edit-doc` skill (`.claude/skills/edit-doc/SKILL.md`) for a systematic style pass on any file.

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
