# Beta-to-GA Agent

**Job:** Scan the past 3 months of `#feature-releases` for features that have transitioned
from Beta to GA, then check whether their docs reflect that change. Return a structured
list of findings for the Report Agent to include in the weekly gap report.

This agent runs in parallel with the Report Agent's 7-day Slack read — it doesn't block
the main workflow and doesn't post to Slack itself. The Report Agent handles the posting.

---

## Step 1 — Read 3 months of #feature-releases

Read the `#feature-releases` channel (use the configured channel ID from `SKILL.md`)
with `oldest` set to current unix time minus 7,776,000 seconds (90 days). Fetch in
batches if needed — the channel will have significantly more messages than the 7-day window.

---

## Step 2 — Identify Beta→GA transitions

A Beta→GA transition is a post that announces a feature is now generally available after
previously being in beta. Filter for messages that match any of these patterns:

**Strong signals — treat as confirmed transitions:**
- A `*[GA]*` titled post where the feature name or description explicitly references prior
  beta availability ("previously in beta", "now GA", "graduating from beta", "beta → GA")
- A `*[GA]*` post for a feature name that also appeared in a prior `*[BETA]*` post within
  the same 90-day window

**Weaker signals — flag as probable transitions:**
- A `*[GA]*` post for a feature you recognize from a `*[BETA]*` announcement anywhere in
  the channel history, even if the wording doesn't call it out
- Posts using phrases like "now available for all", "out of beta", "generally available"
  for something that was previously scoped to limited access

Discard posts that are purely new GA launches with no prior beta history in the channel.
The goal is transitions, not first-time GA releases (those are caught by the 7-day check).

For each confirmed or probable transition, extract:
- **Feature name** — canonical name from the GA announcement
- **Product area** — from the Pillar or product area mentioned
- **Slack post URL** — constructed from the GA announcement timestamp
  (strip `.` from timestamp and append to the channel archive URL)
- **Prior beta announcement URL** — if you found the original BETA post, include its URL too

---

## Step 3 — Check docs for each transition

For each Beta→GA transition, search the doc index for the feature's existing documentation.

**If a doc exists:**
- Note the doc title and file path
- Flag it as needing a GA update — beta docs typically contain language that needs
  updating: beta availability notices, beta callout blocks, limited-access caveats,
  or wording that implies the feature isn't fully released

**If no doc exists:**
- Flag it as undocumented — it was presumably undocumented in beta and is still undocumented
  now that it's GA. This is higher priority than a beta gap.

---

## Step 4 — Return structured results

Return a list in this format for the Report Agent to embed in the Slack report:

```
BETA_TO_GA_RESULTS:

- feature: [Feature Name]
  status: NEEDS_GA_UPDATE
  product_area: [area]
  ga_slack_url: [URL]
  beta_slack_url: [URL or "not found"]
  existing_doc: [Doc title] — [file path]

- feature: [Feature Name]
  status: UNDOCUMENTED
  product_area: [area]
  ga_slack_url: [URL]
  beta_slack_url: [URL or "not found"]
  existing_doc: none

TOTAL: [N] transitions found — [X] need GA doc updates, [Y] have no doc at all
```

If no transitions are found in the 90-day window, return:
```
BETA_TO_GA_RESULTS: none found in past 90 days
```

---

## Error handling

- **Slack read fails or times out:** Return `BETA_TO_GA_RESULTS: Slack read failed — skipping Beta→GA section`
- **Doc index not passed:** Do a best-effort search using feature name keywords; note
  any uncertainty in the result
