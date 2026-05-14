---
name: feature-comparison
description: >
  Weekly audit that compares feature releases in Slack's #feature-releases channel
  against the statsig-io/docs documentation repo, then posts a gap report to #docs-private.
  For each undocumented feature, also searches Google Drive, GitHub, and Confluence for
  existing specs, briefs, or in-progress PRs, then drafts a documentation page on its own
  dedicated branch and opens a PR for review.
  Use this skill when asked to: check documentation coverage, find undocumented features,
  audit what shipped this week vs what's documented, draft missing docs, or run the weekly
  docs gap report.
---

# Statsig Docs Coverage — Orchestrator

This skill answers: **"Which features shipped this week that don't have docs yet?"**

It coordinates a team of specialized agents so that research and drafting for multiple
features can run in parallel rather than one at a time. Each agent has a focused job and
a lean context — making the overall workflow faster and more reliable than a single agent
trying to do everything.

## Agent map

All agent instructions live in the `agents/` folder next to this file.

| Agent | File | Job |
|---|---|---|
| Report Agent | `agents/report-agent.md` | Reads Slack, builds doc index, identifies gaps, spawns Research and Beta→GA Agents, posts to #docs-private |
| Research Agent | `agents/research-agent.md` | Searches GitHub, Confluence, and Drive for one feature — run one per feature in parallel |
| Beta→GA Agent | `agents/beta-to-ga-agent.md` | Scans 90 days of #feature-releases for Beta→GA transitions and checks doc coverage — runs in parallel with the 7-day check |
| Draft Agent | `agents/draft-agent.md` | Creates branch, writes doc, opens PR for one feature — run one per feature in parallel |
| Schedule Agent | `agents/schedule-agent.md` | Sets up the weekly scheduled task |

## Known configuration

- **Feature releases channel:** `#feature-releases` — [CONFIGURE: set the channel ID before first run]
- **Report destination:** `#docs-private` — [CONFIGURE: set the channel ID before first run, always use ID directly, never search by name]
- **Docs content path:** repo root (content lives in section directories: `feature-flags/`, `sdks/`, `experiments/`, etc.)
- **Lookback window:** 7 days
- **Docs GitHub repo:** `statsig-io/docs`

## When to run which agent

**Running the weekly report** (most common — someone says "run the docs check" or similar):
Read `agents/report-agent.md` and follow its instructions. The Report Agent handles
everything through posting the gap report, including spawning Research Agents in parallel.

**Setting up the weekly schedule** (first-time setup or if the schedule breaks):
Read `agents/schedule-agent.md` and follow its instructions.

**Drafting docs after approval** (a team member replied "create drafts" in #docs-private):
Read `agents/draft-agent.md`. Spawn one Draft Agent per requested feature simultaneously —
never combine multiple features into one agent. Each feature needs its own branch and PR.

**Researching a single feature manually** (ad-hoc lookup):
Read `agents/research-agent.md` and run it for that one feature.

## Error handling

If any agent fails, don't fail silently. Post a brief note to `#docs-private`
explaining what couldn't run and why, so the docs team knows to follow up manually.

---

## Reference: Slack report and PR templates

### Slack permalink from timestamp

Channel archive base: `https://statsig.slack.com/archives/<CHANNEL_ID>/p<MESSAGE_TS_NO_DOT>`

Example: timestamp `1775241196.864929` → append without the `.` between seconds and microseconds.

### Report message template (#docs-private)

For Slack **mrkdwn** (if your posting tool accepts it):

- **Bold:** `*text*` (single asterisks), not `**`.
- **Emoji:** `:clipboard:`, `:red_circle:`, `:large_yellow_circle:`, `:white_check_mark:`.
- **Links:** Many Slack Block Kit APIs reject `<URL|label>`. Prefer raw URLs on the same line as the feature name so Slack can unfurl.
- **Avoid:** `---` horizontal rules and curly/smart quotes in tool payloads if you get `invalid_blocks` errors.
- **Separators:** use ` - ` (hyphen spaces), not em dashes, in fragile Block payloads.

#### Gaps-only rule

**Do not** include a "Confirmed documented" section, links to public docs for shipped features, or any list of releases you classified as DOCUMENTED. Readers only need **Undocumented**, **Uncertain**, and optional aggregate context (for example "Reviewed 5 announcements in window" with **no feature names** for the documented ones).

#### When there are gaps

```
:clipboard: *Weekly Docs Coverage Report* - Week of [DATE RANGE]

Reviewed [N] feature announcements in the window (gaps only below).

*:red_circle: Undocumented ([count])*
- [Feature Name] `[GA/BETA/LIMITED]` [raw Slack archive URL]
  - Enrichment: [GitHub / Drive / Confluence, or unavailable]
...

*:large_yellow_circle: Uncertain ([count])*
- [Feature Name] `[GA/BETA/LIMITED]` [raw Slack archive URL] - possibly covered by [Doc Title]
  - Enrichment: ...
...

To request doc drafts, say which features to draft (one PR per feature).
```

#### All-clear

Use only when **Undocumented** and **Uncertain** are both zero. Still **do not** list documented features by name.

```
:white_check_mark: *Weekly Docs Coverage Report* - [Week of DATE]
Reviewed [N] feature announcements. No documentation gaps flagged. Nothing to action.
```

### Pull request body template

```markdown
## Summary
Draft documentation for [Feature Name] ([Product Area]).

Sourced from:
- [GitHub PRs/issues, Drive docs, Confluence pages, or "None"]

## Review checklist
- [ ] Technical accuracy verified against product behavior
- [ ] Style rules applied (active voice, present tense, contractions, edit-doc skill)
- [ ] Internal links use `/[section]/[slug]` routes only — no `.mdx` extensions
- [ ] docs.json updated if a new page was added
- [ ] Doc-Reviewed-By: skill commit trailer present

/cc @tech-writers
```
