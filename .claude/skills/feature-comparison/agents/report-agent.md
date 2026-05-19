# Report Agent

**Job:** Run the weekly docs coverage check. Read Slack, build the doc index, identify
gaps, kick off Research Agents in parallel for each uncertain or undocumented feature,
collect results, and post the gap report to `#docs-private`.

This agent runs the full weekly workflow end to end. It does not draft documentation —
that's the Draft Agent's job, triggered separately after team approval.

---

## Step 1 — Verify the docs repo

Confirm that the `statsig-io/docs` repo root exists at the workspace root and contains
section directories (`feature-flags/`, `sdks/`, `experiments/`, etc.). If it doesn't,
stop and ask the user to open the `docs` repo folder before continuing.

Use the repo root as `$DOCS_ROOT` for all subsequent steps.

---

## Step 2 — Build the documentation index

The doc index is a list of every published doc's title, path, and section. You need it
to check whether each feature announcement already has coverage.

Scan `$DOCS_ROOT` for all `.mdx` files (excluding `.claude/` and `.cursor/` directories)
and extract `title:` from frontmatter:

```python
import os, re, json
results = []
docs_root = os.environ.get("DOCS_ROOT", ".")
skip_dirs = {".claude", ".cursor", ".git", "images", "scripts"}
for root, dirs, files in os.walk(docs_root):
    dirs[:] = [d for d in dirs if d not in skip_dirs]
    for fname in files:
        if not fname.endswith(".mdx"):
            continue
        filepath = os.path.join(root, fname)
        with open(filepath, "r", errors="ignore") as f:
            content = f.read(2000)
        if not content.startswith("---"):
            continue
        end = content.find("---", 3)
        if end == -1:
            continue
        frontmatter = content[3:end]
        title_m = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', frontmatter, re.MULTILINE)
        if not title_m:
            continue
        rel = os.path.relpath(filepath, docs_root)
        slug = os.path.splitext(rel)[0]
        section = slug.split(os.sep)[0]
        results.append({
            "title": title_m.group(1).strip().strip('"\''),
            "slug": slug.replace(os.sep, "/"),
            "section": section,
        })
print(json.dumps(results))
```

Each entry looks like:
```json
{"title": "Create a Feature Flag", "slug": "feature-flags/create", "section": "feature-flags"}
```

Hold the resulting list in memory as the **doc index**.

---

## Step 3 — Read recent feature releases from Slack

Read `#feature-releases` for the past 7 days. Set `oldest` to current unix time minus
604800 seconds. Use the configured channel ID (see `SKILL.md`).

**Filter aggressively — this channel is noisy.** Keep only genuine feature announcements:

- A real announcement has a bold bracketed title like `*[GA] [Product Area] Feature Name*`
- It has structured body sections: "What:", "Where:", "When:", or "Pillar:"
- It confirms availability ("Available for everyone", "Live now")

Discard: join/leave messages, metrics posts, conversion updates, thread replies, shoutouts
with no new feature content.

For each announcement you keep, extract:
- **Feature name** — from inside the brackets in the title
- **Product area** — from the Pillar or product area mentioned
- **Description** — one sentence summary of what it does
- **Slack message timestamp** — you'll need this to build the archive URL
- **GA status** — GA, BETA, ALPHA, or similar

---

## Step 4 — Identify documentation gaps

For each feature announcement, decide whether the doc index covers it.

The Slack title won't always match the doc title exactly — use semantic judgment.
A post about "Edit guide positions in Preview mode" might be covered by
"Configure Guides and Surveys". That counts as documented.

**DOCUMENTED:** A doc title clearly covers this feature, or the feature is an incremental
improvement to something well-documented (note which parent doc covers it).

**UNCERTAIN:** You genuinely can't tell — the feature might be buried in a broader doc,
or the doc index titles are ambiguous.

**UNDOCUMENTED:** No doc title clearly covers this feature, and it's a meaningful new
capability (not a trivial UI label change).

Note the product area for each UNCERTAIN or UNDOCUMENTED feature — this helps route
the work to the right writer.

---

## Step 5 — Spawn Research and Beta→GA Agents in parallel

Launch all of the following simultaneously — don't wait for any one to finish before
starting the others. This is the core parallelism that keeps the weekly report fast.

**Research Agents — one per UNDOCUMENTED or UNCERTAIN feature:**
Spawn one Research Agent per gap found in Step 4. Pass each one:
- The feature name
- The product area
- A one-sentence description of what the feature does
- The GA status (GA, BETA, etc.)
- The doc index (so it can check for related pages)

Instructions: `agents/research-agent.md`

**Beta→GA Agent — one instance, always:**
Spawn one Beta→GA Agent regardless of what the 7-day check found. Pass it:
- The doc index

Instructions: `agents/beta-to-ga-agent.md`

Wait for all agents to complete before proceeding to Step 6.

---

## Step 6 — Post the gap report to #docs-private

Post to `#docs-private`. Use the configured channel ID directly — never search by name.

### Report format

Follow this template exactly. Certain characters cause Slack to reject the message.
Omit any section that has zero items — don't include an empty section header.

```
:clipboard: *Weekly Docs Coverage Report* - Week of [DATE RANGE]

*:red_circle: Undocumented ([count])*
- [Feature Name] `[GA/BETA]` [Slack post URL]
  Sources: [Confluence page title + URL, or "No sources found"]

*:large_yellow_circle: Uncertain ([count])*
- [Feature Name] `[GA/BETA]` [Slack post URL] - possibly covered by [Doc Title]
  Sources: [Confluence page title + URL, or "No sources found"]

*:large_blue_circle: Beta to GA - docs need updating ([count])*
- [Feature Name] `GA` [GA Slack post URL] - [Doc title] needs GA update [file path]
- [Feature Name] `GA` [GA Slack post URL] - no doc found

To create drafts, reply to this thread: *@claude create drafts for all* or *@claude create a draft for [feature name]*
```

If there are zero items across all three sections, post this instead:

```
:white_check_mark: *Weekly Docs Coverage Report* - Week of [DATE RANGE]
All [N] features released this week are documented, and no Beta to GA transitions need attention. Nothing to action.
```

### Slack formatting rules — follow exactly

These rules prevent `invalid_blocks` errors:

- **Bold:** `*text*` (single asterisks only, never `**text**`)
- **Emoji:** `:emoji_name:` codes (`:red_circle:`, `:large_yellow_circle:`, `:clipboard:`)
- **Links:** Raw URLs only — never `<URL|text>` mrkdwn syntax. Slack auto-unfurls raw URLs.
- **Dividers:** Never use `---` horizontal rules
- **Quotes:** Straight ASCII double quotes (`"`) only — never curly quotes
- **Dashes:** Plain hyphen-space (` - `) as separator — never em dashes

### Constructing Slack post URLs

Strip the `.` from the message timestamp and append to the channel archive URL.

Example: timestamp `1775241196.864929` for channel `C_CHANNEL_ID` becomes:
`https://statsig.slack.com/archives/C_CHANNEL_ID/p1775241196864929`

---

## Error handling

- **Repo root not found:** Stop and ask the user to open the `docs` repo.
- **Slack read fails:** Include a note in the report that Slack data may be incomplete.
- **No announcements found:** Post a brief note confirming no features were released this week.
- **A Research Agent fails:** Include "Research unavailable" for that feature in the report — don't block the whole report.
- **Google Drive unavailable:** Note "Drive search unavailable" per affected feature.
- **GitHub search unavailable:** Note "GitHub search unavailable" per affected feature.
- **Confluence search unavailable:** Note "Confluence search unavailable" per affected feature.
