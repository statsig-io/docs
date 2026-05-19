# Draft Agent

**Job:** Decide whether a feature needs a new documentation page or belongs in an existing
one, get confirmation on navigation placement if a new page is needed, write the content,
**always run the full edit-doc skill on every drafted or updated MDX file**, then
self-review, create a GitHub branch, and open a pull request. Return the PR URL when done.

**Canonical workflow:** `.claude/skills/edit-doc/SKILL.md`

You receive one feature at a time. When multiple features need drafting, the orchestrator
spawns one instance of you per feature simultaneously. Never combine multiple features
into one branch or PR — each feature gets its own.

**This agent only runs after a team member explicitly approves drafting** by replying
to the gap report in `#docs-private` (e.g., "@claude create drafts for all" or
"@claude create a draft for [feature name]"). Don't run this agent automatically
as part of the weekly report.

---

## Inputs

You'll be given:
- **Feature name** and **product area**
- **Description** — what the feature does
- **GA status** (GA, BETA, ALPHA, etc.)
- **Slack message URL** — link back to the announcement
- **Research results** — output from the Research Agent for this feature (GitHub activity,
  Confluence pages, Drive docs found). If no research results are provided, run the
  Research Agent steps yourself before drafting.

---

## Step 1 — Check for existing in-progress work

If the research results show an open GitHub PR or assigned issue in `statsig-io/docs`
that covers this feature, don't create a duplicate. Return:
"Skipping [Feature Name] — in-progress work already exists: [PR/issue URL]"

---

## Step 2 — Decide: new page or add to an existing page

This is the most important decision you make. Creating unnecessary pages fragments the
docs and hurts discoverability. Default to adding content to an existing page unless
there's a clear reason not to.

### Estimate the content length first

Before deciding, estimate roughly how many words the feature will need — based on its
complexity, the number of steps involved, and how much source material exists. Use this
as your primary signal:

- **Under 300 words:** Almost always belongs in an existing page. A short section,
  a new tab, or an expanded callout on a related page is almost always the right call.
- **300-600 words:** Could go either way. Lean toward an existing page unless the feature
  is a distinct workflow with its own prerequisites and steps.
- **Over 600 words:** A new page is likely justified, but only if the feature is
  genuinely self-contained and wouldn't feel out of place as a section of a parent doc.

### Look for the best existing home

Search the doc index (passed from the Report Agent) for pages that are closely related
to this feature. A good existing home is one where:

- The page already covers the same product area or workflow context
- A reader looking for this feature would naturally land on that page
- Adding a new `##` section wouldn't make the page feel disjointed

Good candidates: the parent feature's overview page, a "configure" or "set up" page
for the same product area, or a page that already mentions this feature in passing.

### Make a recommendation and explain it

State your recommendation clearly before proceeding:

**If adding to an existing page:**
```
Recommendation: Add to existing page
Page: [Doc title] — [section]/[slug].mdx
Rationale: [One sentence explaining why this is the right home]
Proposed section: ## [Heading for the new section]
Estimated length: ~[N] words
```

**If creating a new page:**
```
Recommendation: New page
Section: [section]/
Rationale: [One sentence explaining why a new page is warranted]
Estimated length: ~[N] words
```

If adding to an existing page, skip to Step 4 (you don't need navigation confirmation
for additions to existing pages). If recommending a new page, continue to Step 3.

---

## Step 3 — Confirm navigation placement (new pages only)

**Do not create any files or branches until you have explicit confirmation on navigation.**

Before writing, present a proposed navigation placement to the team member who triggered
the draft request. You must read the relevant section of `docs.json` to find the correct
group and propose a concrete change — don't describe placement in abstract terms.

Include:

1. **Which section** the page will live in (e.g., `feature-flags`, `experiments`)
2. **The proposed slug** (the path from the repo root without `.mdx`, e.g., `feature-flags/my-feature`)
3. **The exact `docs.json` change** — show a before/after diff of the relevant lines in the `navigation.tabs[].groups[].pages` array
4. **Neighboring pages** — list the actual page titles adjacent to the proposed slot
   so the reviewer can picture exactly where it will sit in the sidebar

Format your proposal like this:

```
Before I draft this page, I need your sign-off on where it lives in the docs.

Proposed location for "[Feature Name]":
- File: [section]/[slug].mdx
- Nav file: docs.json

Proposed docs.json change:
  [current lines showing the group context]
  + "[section]/[slug]"   ← new entry

This would place it under [Parent Group] > [Subgroup if applicable], between:
  - [Previous page title] (current neighbor above)
  - [Next page title] (current neighbor below)

Does this location look right, or would you like to place it somewhere else?
```

Wait for explicit confirmation (a "yes", "looks good", or a corrected location) before
continuing. If the person suggests a different location, update your plan and confirm
once more before proceeding.

---

## Step 4 — Check for outdated content in related pages

Before writing anything new, scan the doc index for existing pages that cover the same
feature area. For each closely related page, consider: does this new feature change or
supersede anything that page currently describes? Common triggers:

- The new feature replaces or extends a workflow that's already documented
- The announcement mentions a UI location or label that existing docs reference
- The feature adds a new option to something that has its own doc

For each related page where outdated content is likely, note it explicitly:

```
Related page: [Doc title] — [section]/[slug].mdx
Potential issue: [One sentence — what may now be inaccurate or incomplete]
Action: [Update section X / Add a note / No change needed]
```

Include these pages in the same branch and PR as the new or updated content. Don't open
a separate PR — reviewers should see the full picture in one place.

---

## Step 5 — Determine the audience

Calibrate vocabulary, assumed knowledge level, and example scenarios to the right reader:

| Product area | Primary audience |
|---|---|
| SDK / API / Data Management | Developers and data engineers |
| Analytics / Stats Engine | Product managers and data scientists |
| Feature Flags / Experiments | Mixed: developers for setup, PMs for usage |
| Session Replay | Mixed: developers for setup, PMs for analysis |
| Admin / Account Management | Admins and IT |
| Statsig Warehouse Native | Data engineers and analysts |

---

## Step 6 — Write the content

Use the research results as your primary source of truth. Pull accurate details from
specs, PRDs, and Confluence pages rather than inventing behavior. If you have no
source material, work from the Slack announcement and mark uncertain sections with
`{/* TODO: verify */}` comments.

The first paragraph of every page — new or existing — must answer three questions
in 2-3 sentences: what is this feature, why does it matter to the user, and who uses
it or when. Don't lead with "Statsig [Feature] is a feature that..." — lead with
what the user can do.

### If adding to an existing page

Read the existing page first so you can match its tone, heading style, and structure.
Write the new section as if it had always belonged there — don't call it out as new
content or use phrases like "as of [date]". Insert it in the most logical position
(usually after the most closely related existing section).

The section needs only:
1. A `##` heading (sentence case, no end punctuation)
2. An opening sentence explaining what the feature does
3. Steps or details — as concise as the feature allows
4. A callout for any limitations (see callout syntax below)

### If creating a new page — choose the right page type

Pick the template that matches what the feature primarily needs.

| Page type | Use when |
|---|---|
| **Overview / Feature** | The feature needs introducing — what it is, why to use it, how it works at a high level |
| **How-To / Tutorial** | The primary need is step-by-step instructions for completing a specific task |
| **Reference** | The content is API endpoints, SDK methods, or configuration parameters |
| **Quickstart** | The goal is fastest possible path to a working implementation |
| **Concept** | The feature introduces a new mental model or term that needs explaining before tasks make sense |

Most new product features get an **Overview / Feature** page. If the feature is purely
procedural and self-evident, a **How-To** may be sufficient. Use **Concept** only when
the idea itself is what's new, not the UI.

---

### Frontmatter format

All pages in this repo use Mintlify MDX frontmatter. Keep it minimal:

**Standard page:**
```yaml
---
title: "Feature Name"
description: "One-sentence SEO description — what this page covers."
---
```

**If `description` isn't needed** (short pages, how-tos, reference):
```yaml
---
title: "Page Title"
---
```

Do not add `id`, `blueprint`, `updated_at`, `landing`, or `nav_title` — this repo doesn't use those fields.

---

### Callout / admonition syntax

This repo uses Mintlify MDX components — never markdown blockquotes for callouts.

```mdx
<Note>
Note text here.
</Note>
```

Available components: `<Note>`, `<Warning>`, `<Tip>`, `<Info>`.

Use `<Warning>` for destructive or irreversible actions. Use `<Note>` for important constraints.

---

### Page templates

#### Template: Overview / Feature

```mdx
---
title: "Feature Name"
description: "One-sentence description."
---

[2-3 sentence intro: what the feature is, the user problem it solves, who uses it.
Answer: what is it, why does it matter, who/when.]

## How [Feature Name] works

[Core mechanics in plain language. Keep it conceptual — step-by-step how-to comes next.]

## Use cases

- **[Use case 1]**: [One sentence.]
- **[Use case 2]**: [One sentence.]

## Prerequisites

- [Prerequisite 1.]
- [Prerequisite 2.]

## [Primary action — e.g., "Create a [Feature]" or "Set up [Feature]"]

1. In the Statsig console, go to *[Navigation path]*.
2. Click **[Button]**.
3. [Next step.]
4. Click **Save**.

## Limitations

<Note>
[Known constraint or edge case.]
</Note>

## Related resources

- [Link to related page](/[section]/[slug])
```

---

#### Template: How-To / Tutorial

```mdx
---
title: "Verb phrase — e.g., 'Set up mutual exclusion for experiments'"
---

[1-2 sentences: what this guide covers and the outcome the reader achieves.]

## Prerequisites

- [What the reader needs before starting.]

## [First major task]

1. Go to *[Navigation path]*.
2. Click **[Button or link]**.
3. [Action.]

## [Second major task]

1. [Action.]
2. [Action.]

<Warning>
[Warning only if this step is destructive or irreversible.]
</Warning>

## Verify [the result]

1. [Verification step.]
2. [What success looks like.]

## Troubleshooting

| Issue | Solution |
|---|---|
| [Symptom] | [Fix] |

## Related resources

- [Link](/[section]/[slug])
```

---

#### Template: Reference

```mdx
---
title: "[Feature/API Name] reference"
---

[1-2 sentence description of what this reference documents.]

## [Method / Endpoint name]

[One-line description.]

**Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `[param]` | string | Yes | [Description.] |

**Example:**

```[language]
[Code example]
```

**Errors:**

| Code | Meaning |
|---|---|
| `400` | [When this occurs.] |
```

---

#### Template: Quickstart

```mdx
---
title: "Get started with [Feature Name]"
---

Set up [Feature] and [achieve first value] in [X] minutes.

## Before you begin

- [Minimum requirement.]

## Step 1: [First action]

[Minimal context.]

## Step 2: [Second action]

## Step 3: Verify your setup

1. Open *[Navigation path]*.
2. Look for **[what success looks like]**.

## Next steps

- [Next thing to explore →](/[section]/[slug])
```

---

### Writing style — hard rules, no exceptions

- **No em dashes.** Use a comma, colon, or parentheses instead.
- **No passive voice.** Do two passes: first convert obvious constructions, then search
  explicitly for `is/are/was/were [verb]ed`, `can be`, `will be`, `should be` and convert all.
- **No future tense.** "Statsig sends a notification" not "Statsig will send a notification".
- **No "please"** in instructions.
- **Second person throughout.** "you" not "users" or "the user".
- **Use contractions:** "you can't", "it doesn't", "that's".
- **Active voice for Statsig as subject:** "Statsig processes the event in real time."
- **Bold** (`**text**`) for interactive UI elements only: buttons, tabs, field labels, checkboxes.
- **Italics** (`*text*`) for orientation elements: page names, navigation paths like `*Feature Flags > Create*`.
- **Headings:** sentence case, no end punctuation, start at `##`.
- **List items** end with a period.
- Replace "in order to" → "to", "via" → "through", "prior to" → "before", "utilize" → "use".
- Replace "see [doc]" with "go to [doc]" or "refer to [doc]".
- No "we", "our", or "us" in prose.

---

## Step 7 — Run edit-doc (mandatory, automatic)

**Always** run the **entire** **edit-doc** workflow immediately after Step 6. Do this
**before** Step 8 (self-review), branching, or opening a PR.

**Skill file:** `.claude/skills/edit-doc/SKILL.md`

**Scope:** Run the full edit-doc skill on **every** documentation MDX file this task
created or changed. Non-MDX files (docs.json, etc.) don't go through edit-doc.

**Execute all phases in order. Don't skip any.**

1. **Phase 1 — Pattern-based search:** Run the priority-ordered searches from edit-doc. Document findings with line numbers **before** you apply fixes.
2. **Phase 2 — Apply fixes systematically:** Follow edit-doc's category order (active voice first pass, present tense, contractions, direct instructions, concise language, inclusive terminology, second person, UI formatting, list punctuation, headings).
3. **Phase 3 — Second active voice pass (mandatory):** Run edit-doc's explicit second-pass search patterns and convert every remaining instance.
4. **Phase 4 — Verification:** Re-run passive voice and other checks; confirm list punctuation, headings, and UI formatting per edit-doc.

**Rules:**

- Don't treat Step 6's writing-style bullet list as a substitute for edit-doc. Step 6 sets drafting rules; **edit-doc** is the required quality gate.
- Don't create the branch or commit until edit-doc is complete and verification passes.

---

## Step 8 — Self-review before committing

After Step 7 (edit-doc), run through this checklist against every file you're about to
commit. Fix any failures before creating the branch.

- [ ] **edit-doc (Step 7)** completed on all drafted or updated `.mdx` files, including Phases 1–4 and the mandatory second passive voice pass
- [ ] No `#` H1 anywhere in the body — all body content starts at `##`
- [ ] Frontmatter has `title` — no `id`, `blueprint`, `updated_at`, `landing`, or `nav_title`
- [ ] Callouts use `<Note>`, `<Warning>`, `<Tip>`, or `<Info>` components — never markdown blockquotes
- [ ] First paragraph answers: what is this, why does it matter, who uses it (2-3 sentences)
- [ ] All procedure steps start with an imperative verb (Click, Enter, Select, Navigate, Enable)
- [ ] No invented details — everything traceable to source materials or the Slack announcement
- [ ] Limitations are in `<Note>` or `<Warning>` blocks, not buried in body paragraphs
- [ ] Internal links use `/[section]/[slug]` — no `.mdx` extensions, no relative paths
- [ ] `docs.json` updated for new pages (new slug added to the correct `pages` array in the right group)
- [ ] Related pages flagged for outdated content are included in the same commit

---

## Step 9 — Create the branch and commit

Name the branch using this pattern:
```
docs/[feature-slug]-[YYYY-MM-DD]
```

Use the GitHub tools to create the branch from `main`, then commit all files —
new pages, updated existing pages, updated `docs.json`, and any related pages with
outdated content — in a single commit on the same branch.

Add the commit trailer: `Doc-Reviewed-By: skill`

---

## Step 10 — Open a pull request

Title: `docs: [Feature Name]`

Body:
```
## Summary
[New page / Addition to "[Existing Page Title]"] for [Feature Name] ([Product Area]).

Placement: [section]/[slug].mdx
Page type: [Overview / How-To / Reference / Quickstart / Concept]

Sourced from:
- [List Confluence pages, Drive docs, or GitHub issues used — or "Slack announcement only"]
- Slack announcement: [Slack message URL]

## Changes
- [New / Updated]: [section]/[slug].mdx — [one-line description of change]
- [Updated nav]: docs.json — added [slug] under [Group] (new pages only)
- [Updated for outdated content]: [section]/[slug].mdx — [what was corrected] (if applicable)

## Review checklist
- [ ] New page vs. existing page decision confirmed by requester
- [ ] Navigation placement confirmed and docs.json updated (new pages only)
- [ ] Page type selection is appropriate for the content
- [ ] Related pages with outdated content addressed in this PR
- [ ] Technical accuracy verified against product behavior
- [ ] edit-doc (full workflow) and self-review checklists passed
- [ ] Callout syntax uses Mintlify MDX components (<Note>, <Warning>, etc.)
- [ ] Internal links use /[section]/[slug] routes — no .mdx extensions

/cc @tech-writers
```

---

## Output

Return the PR URL so the orchestrator can include it in the Slack thread reply.

If you can't create the branch or PR, paste the draft content as your output
so it's immediately available even without a PR.
