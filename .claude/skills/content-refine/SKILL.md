---
name: content-refine
description: Refines documentation content for translatability, LLM consumption, and reading clarity. Identifies and fixes verbose prose, ambiguous language, translation anti-patterns (idioms, colloquialisms, ambiguous pronouns, gendered language, concatenated strings that assume English word order), and LLM readability issues. Designed to run as part of an agent pipeline against individual files or small subsets of documentation. Use when asked to "refine this doc", "make this translatable", "optimize for translation", "reduce verbosity", "make this LLM-friendly", "improve readability", or when running batch content quality passes. Does not replace /edit-doc — apply /edit-doc first for style rule violations, then use this skill for the deeper content quality pass.
---

# Content refine

Improves documentation quality across three dimensions: content reduction, translatability, and LLM readability. Designed to be run by an agent against individual files or small document subsets.

This skill is additive to `/edit-doc`. Apply `/edit-doc` first if the document hasn't received a style pass — this skill targets issues that style rules don't cover.

## Multi-file mode

When the user provides 2 or more files, dispatch one subagent per file in parallel rather than processing files sequentially.

### Decision

| Files provided | Mode |
|---|---|
| 1 | Process inline — continue to the Workflow section |
| 2 or more | Dispatch subagents — use this section, then stop |

### Dispatch

Send all subagents in a single message (one `Agent` tool call per file). Each agent receives a self-contained prompt — do not assume it has access to this session's context or loaded skills.

Use this template for each subagent (replace `[FILE_PATH]` and `[REPO_ROOT]`):

```
Run a content refinement pass on `[FILE_PATH]`. This is an MDX documentation file in the Statsig docs repository at `[REPO_ROOT]`.

Setup — read these two files before starting:
- [REPO_ROOT]/.claude/skills/content-refine/references/translatability.md
- [REPO_ROOT]/.claude/skills/content-refine/references/llm-patterns.md

Step 0.5 — Structural read (do this before any editing):
Read the entire document and build a section map: for each heading (H2–H4), write a one-line summary of the unique information that section contributes. Use the map to identify: (a) sections whose content fully duplicates another section, (b) sections with no unique contribution, (c) consecutive paragraphs that all serve the same single point. Do not output the map — use it to inform edits and the report.

Phase 1 — Content reduction (sentence and paragraph level):
- Shorten sentences over 30 words. Target: under 25 words per sentence.
- Remove verbose phrases: "it is important to note that", "as you can see", "it should be noted that", "in the event that" → "if", "due to the fact that" → "because", "at this point in time" → "now", "in the near future" → "soon".
- Remove within-file duplication: identical sentences in different sections, prerequisites restated mid-procedure, concepts explained twice. Keep the clearest instance.
- Remove list restatements: if prose immediately before or after a list restates what the list items say, reduce the prose to a single orienting sentence or remove it. Apply clarity-preservation test first: only remove if a reader skipping to that section would still understand the content without the prose.
- Remove transitional summaries: paragraphs whose only purpose is to summarize the previous section before naming the next one. Remove if both the previous and next headings already provide that orientation.
- Flag (do not remove) single-example over-elaboration: three or more consecutive paragraphs all serving to explain the same single point, where each paragraph restates rather than adds. Include line ranges in the report.
- Cross-linking after context removal: when removing a parenthetical explanation or inline definition of a named concept, search `[REPO_ROOT]` for a file whose title or filename matches the concept name. If found, add a cross-link on the first occurrence of the concept name in the current section using format `[concept name](/[section]/[slug])`, and flag it under "Cross-links inserted" in the report for human URL verification. If no matching doc is found, keep the inline explanation and flag it.

Phase 2 — Translatability (see translatability.md for full pattern list):
- Replace idioms and colloquialisms with literal equivalents: "out of the box" → "by default", "under the hood" → "internally", "on the fly" → "dynamically", "spin up" → "start", "simply"/"just" → remove, "straightforward" → remove or rewrite, "keep in mind" → "note that".
- Resolve ambiguous pronoun references — "it", "this", "they", and "that" must have an explicit, unambiguous referent within one sentence. Replace with the noun if unclear.
- Use gender-neutral language throughout: "their API key" not "his or her API key".
- Rewrite concatenated string patterns: don't embed placeholders mid-sentence in fixed English phrases. Either name the value explicitly or describe it generically.

Phase 3 — LLM optimization (see llm-patterns.md for full pattern list):
- Replace backward references with explicit restatements: "As mentioned above..." → state the fact directly; "Following from the previous step..." → "After you configure X...".
- Replace vague headings: "## Overview" → "## How [feature] works"; "## Notes" → specific topic; "## More information" → "## Related resources".
- Convert prose parameter lists to Markdown tables (parameter name, type, required, description columns).
- Make logical relationships explicit: state cause, sequence, and dependency rather than letting the reader infer them.

Phase 4 — Preferred wording (apply in prose only, not inside code blocks or frontmatter):
- `once` (temporal use: "once you do X") → `after` or `when`. Do not change `once` when it means a single occurrence.
- `via` → `through` or `using`
- `desired` / `desire` → `want` or `need`
- `first-class` → `primary` or `default`
- `blacklist` → `block list` or `deny list`
- `blackout period` → `moratorium`
- `cripple` → `hinder`, `slow down`, or `impede`
- `dummy` → `placeholder`, `mock`, `stub`, or `sample`
- `grandfathered` / `grandfather` → `legacy` or `exempt`
- `grayed-out` → `disabled` or `inactive`
- `kill` (non-literal) → `end`, `cancel`, or `stop`
- `sanity-check` → `validate` or `final check`
- `see` (directing readers to other docs, e.g. "See the API reference") → `go to`, `navigate to`, or `refer to`. Do not change `see` in other contexts (e.g. "you can see this in the chart").
- `terminate` → `end`, `cancel`, or `stop`
- `abort` → `end`, `cancel`, or `stop`

Constraints:
- Do not apply active voice, tense, or contraction rules — those belong to a separate style pass.
- Do not change code, API endpoints, parameter names, or product names.
- Do not modify YAML frontmatter fields.
- Do not add content — reduce and clarify only. Flag incomplete concepts in the report.
- Do not modify content inside fenced code blocks.
- Do not add bold or italic formatting for emphasis. Bold is only for interactive UI elements (buttons, input fields, tabs). Italics are only for orientation elements (page names, navigation paths, section titles). Never bold a term to emphasize it or define it — remove the formatting if it serves emphasis only.
- Do not use em dashes (—) anywhere. When reformatting list items, use a colon to separate a term from its description, not an em dash.
- Make all changes directly to the file. Do not ask for confirmation.

After editing the file, return a report in this exact format:

## Content refine report: [filename]

### ⚠ Action required: flagged for human review
**Review and resolve the following before merging.**

- [List issues that couldn't be resolved automatically — ambiguous pronouns where the referent isn't clear, duplications where it's unclear which instance is canonical, inline explanations kept because no matching doc was found, structural changes that need verification.]
- **Cross-links requiring URL verification:** [list each: term → inserted URL → source file. Verify each URL resolves before merging.]

If nothing requires review, write: *No items flagged.*
```

### After dispatch

When all subagents return, display their reports together:

```
## Content refine: batch complete ([N] files)

[Report from subagent 1]

---

[Report from subagent 2]

...
```

---

## Workflow

```
Step 0   — Multi-file check (dispatch subagents if 2+ files, then stop)
Step 0.5 — Structural read (build section map before editing)
Phase 1  — Content reduction (sentence + paragraph level)
Phase 2  — Translatability
Phase 3  — LLM optimization
Phase 4  — Preferred wording
Phase 5  — Output report
```

Read `references/translatability.md` for the complete pattern reference before starting Phase 2.
Read `references/llm-patterns.md` for the complete pattern reference before starting Phase 3.

---

## Step 0.5: Structural read

Before making any edits, read the entire document and build a section map. For each heading (H2–H4), write a one-line summary of the unique information that section contributes. Do not start editing until this map is complete.

Use the map to answer three questions:

1. **Does any section's content fully duplicate another section's content?** If yes, one of them is a candidate for removal or consolidation. Flag in the report.
2. **Does any section have no unique contribution?** If a section's summary is entirely captured by adjacent sections or by the heading itself, it is structural scaffolding. Apply the clarity-preservation test before removing.
3. **Are there consecutive paragraphs that all serve the same single point?** This signals over-elaboration. Flag the line range in the report.

The section map is a working tool — do not include it in the report or output.

---

## Phase 1: Content reduction

Find and fix verbosity and within-file duplication at the sentence and paragraph level.

### Long sentences

Target: under 25 words per sentence. Any sentence over 30 words almost certainly contains a compound thought, a subordinate clause, or a stacked condition that can be broken apart.

**Patterns to split:**

- Multiple `and` or `but` clauses → two sentences
- Long conditionals (`if ... and ... and ...`) → prerequisites section or steps
- Parenthetical asides → separate sentence or admonition

**Example:**

Before: "When you configure the API endpoint in the settings file, you need to ensure that you have the correct credentials and that the endpoint URL is properly formatted, otherwise the connection will fail."

After: "Configure the API endpoint in the settings file. Ensure you have the correct credentials and a properly formatted endpoint URL. Otherwise, the connection fails."

### Verbosity patterns

Remove these constructions and replace with the direct equivalent:

| Verbose phrase | Replace with |
|---|---|
| "it is important to note that" | Remove — state the point directly |
| "as you can see" | Remove |
| "it should be noted that" | Remove |
| "needless to say" | Remove |
| "for all intents and purposes" | Remove or restate plainly |
| "the fact that" | Rewrite the sentence around it |
| "in the event that" | "if" |
| "due to the fact that" | "because" |
| "at this point in time" | "now" |
| "in the near future" | "soon" |

### Within-file duplication

Scan for content that repeats in the same document: identical sentences in different sections, prerequisites restated mid-procedure, or concepts explained twice in different words. Keep the clearest instance; remove or link the others.

### Cross-linking after context removal

When removing a parenthetical explanation, inline definition, or clarifying clause that describes a named concept, compensate by cross-linking the concept to its documentation:

1. Search the repo root directories for a file whose title, filename, or frontmatter `title` field matches the concept name.
2. If a match exists, add a cross-link on the **first occurrence** of the concept name in the current section using the format: `[concept name](/[section]/[slug])`. Derive the path from the directory and file slug.
3. Flag every inserted cross-link in the report under **Cross-links inserted** — include the term, the inserted URL, and the filename used to derive the path. A human should verify that the URL resolves correctly before merging.
4. If no matching doc exists, do not remove the inline explanation. Keep it intact and flag it in the report.

### Paragraph-level redundancy

Apply the **clarity-preservation test** before removing any paragraph: "Would a reader who skipped directly to this section understand the procedure or concept without this paragraph?" If removing the paragraph would leave a concept unexplained or a procedure ambiguous, do not remove it — flag it in the report instead.

The following patterns are structurally deterministic and safe to remove automatically when the clarity-preservation test passes:

**List restatement** — Prose immediately before or after a bulleted or numbered list that restates what the list items say. The list is the canonical form; prose that duplicates it can be removed or reduced to a single orienting sentence.

Before:
> "There are three ways to send data to Statsig. The first option is an SDK. The second option is the HTTP API. The third option is a third-party integration."
> - SDK
> - HTTP API
> - Third-party integration

After:
> "Statsig supports three data ingestion methods:"
> - SDK
> - HTTP API
> - Third-party integration

**Transitional summaries** — A paragraph whose only function is to summarize the section just completed before introducing the next one. Remove if the previous section's heading already names what was covered and the next section's heading already names what comes next.

Before: "Now that you've configured the SDK, you're ready to start tracking events. In the next section, you'll learn how to send your first event."
After: *(remove entirely — the headings provide this orientation)*

The following pattern should be **flagged for human review** rather than auto-removed, because the right fix often requires judgment about which content is canonical:

**Single-example over-elaboration** — Three or more consecutive paragraphs all serving to explain the same single point or example, where each paragraph restates what the previous one established rather than adding new information. Flag the line range and describe what the paragraphs repeat. Do not remove automatically.

---

## Phase 2: Translatability

Rewrite content that translates poorly. The goal is source text that produces accurate, natural translations regardless of target language.

Detailed patterns and examples are in `references/translatability.md`. The four categories to address:

### Idioms and colloquialisms

Replace idiomatic expressions with literal equivalents. Common examples:

| Idiom | Replace with |
|---|---|
| "out of the box" | "by default" |
| "under the hood" | "internally" or "in the background" |
| "on the fly" | "dynamically" or "in real time" |
| "spin up" | "start" or "create" |
| "heads up" | Remove — state the point directly |
| "keep in mind" | "note that" |
| "simply" / "just" | Remove |
| "straightforward" | Remove or rewrite |
| "handy" | "useful" |

For a full list including culturally specific metaphors, puns, and slang, see `references/translatability.md`.

### Ambiguous pronoun references

"It," "this," "they," and "that" must have an explicit, unambiguous referent. If a pronoun could refer to more than one noun, or requires reading more than one sentence back, replace it with the noun.

Before: "After you configure the SDK, it starts sending events. This can take a few seconds."

After: "After you configure the SDK, the SDK starts sending events. The first event may take a few seconds to appear."

### Gendered language

Use gender-neutral forms throughout.

- `his or her API key` → `their API key`
- `If the developer needs help, he can...` → `If developers need help, they can...`
- `the user...she` → `the user...they` or rewrite in plural

### Concatenated string patterns

Documentation that embeds a dynamic value in a fixed English phrase creates untranslatable segments.

Before: "Click the **[button name]** button to continue."
After: "Select **Continue** to proceed." (if the name is known), or: "Select the button to proceed." (if generic)

---

## Phase 3: LLM optimization

Make content easier for language models to parse, retrieve, and cite accurately. The complete pattern set is in `references/llm-patterns.md`. Key areas:

### Self-contained sections

Replace backward references with explicit restatements. LLMs often retrieve individual sections rather than full articles.

- `"As mentioned above, you need an API key."` → `"You need an API key."`
- `"Following from the previous step..."` → `"After you configure the SDK..."`
- `"This"` or `"it"` referring to something defined paragraphs back → name it

### Descriptive headings

Vague headings return poor results in semantic search. Replace generic headings with specific ones.

| Generic | Specific |
|---|---|
| `## Overview` | `## How [feature] works` |
| `## Notes` | `## Known limitations` or the specific topic |
| `## More information` | `## Related resources` |
| `## Next steps` | Name the actual next action |

### Prose parameter lists → tables

When prose describes multiple parameters, options, or values, convert to a table.

Before: "The API accepts three parameters: the event name, which is a required string; the user ID, which is an optional string; and the timestamp, which is an optional integer in milliseconds."

After:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `event_name` | String | Yes | Name of the event |
| `user_id` | String | No | The user's unique identifier |
| `timestamp` | Integer | No | Event time in milliseconds (Unix epoch) |

### Explicit logical relationships

State cause, sequence, and dependency explicitly. Don't expect the reader or an LLM to infer them.

- `"Configure X. Then set up Y."` → `"Configure X first, because Y depends on the project ID that X generates."`
- `"High latency can affect delivery."` → `"High latency causes events to queue, delaying delivery."`

---

## Phase 4: Preferred wording

Apply preferred wording substitutions in prose (not inside code blocks or frontmatter):

| ❌ Avoid | ✅ Use instead |
|---|---|
| `once` (temporal: "once you configure X") | `after` or `when` |
| `via` | `through` or `using` |
| `desired` / `desire` | `want` or `need` |
| `first-class` | `primary` or `default` |
| `blacklist` | `block list` or `deny list` |
| `blackout period` | `moratorium` |
| `cripple` | `hinder`, `slow down`, or `impede` |
| `dummy` | `placeholder`, `mock`, `stub`, or `sample` |
| `grandfathered` / `grandfather` | `legacy` or `exempt` |
| `grayed-out` | `disabled` or `inactive` |
| `kill` (non-literal) | `end`, `cancel`, or `stop` |
| `sanity-check` | `validate` or `final check` |
| `see` (directing readers to other docs) | `go to`, `navigate to`, or `refer to` |
| `terminate` | `end`, `cancel`, or `stop` |
| `abort` | `end`, `cancel`, or `stop` |

**Note on `once`:** Only replace the temporal use ("once you do X, then Y happens"). Do not replace `once` when it means a single occurrence ("run this command once").

**Note on `see`:** Only replace when directing readers to documentation ("See the API reference"). Do not replace in other contexts ("you can see this in the chart").

---

## Phase 5: Report

After all four phases, output a structured report:

```markdown
## Content refine report: [filename]

### ⚠ Action required: flagged for human review
**Review and resolve the following before merging.**

- [List issues that couldn't be resolved automatically — ambiguous pronouns where the referent isn't clear, duplications where it's unclear which instance is canonical, inline explanations kept because no matching doc was found, structural changes that need verification.]
- **Cross-links requiring URL verification:** [list each: term → inserted URL → source file. Verify each URL resolves before merging.]

If nothing requires review, write: *No items flagged.*
```

---

## Constraints

- **Don't duplicate `/edit-doc` work.** This skill doesn't re-apply active voice, tense, or contraction rules. If those issues exist, note them in the report under "Flagged for human review" rather than fixing them here. Exception: Preferred Wording substitutions (Phase 4) are applied here because they must be consistent regardless of whether `/edit-doc` has run.
- **Preserve technical accuracy.** Don't change code, API endpoints, parameter names, or product names.
- **Preserve frontmatter.** Never modify YAML frontmatter fields.
- **Don't add content.** Reduce and clarify only. If a concept seems incomplete, flag it in the report rather than inventing an explanation.
- **Don't modify code blocks.** Content inside fenced code blocks is off-limits.
- **Don't add bold or italic for emphasis.** Bold is reserved for interactive UI elements only (buttons, clickable tabs, input field labels). Italics are reserved for orientation elements only (page names, navigation paths, section titles). Never apply bold or italic to a term simply to define or emphasize it. If existing text uses bold or italic for emphasis rather than for a UI element, remove the formatting.
- **No em dashes.** Never use em dashes (—) anywhere in the output. When reformatting list items, use a colon to separate a term from its description, not an em dash.
- **Agent mode.** This skill runs without interactive confirmation. Make all changes and output the report. Flag anything uncertain in the "Flagged for human review" section rather than asking.

## Reference files

- **`references/translatability.md`** — Complete pattern set for idioms, cultural references, pronouns, and string patterns. Read before Phase 2.
- **`references/llm-patterns.md`** — Complete pattern set for LLM readability. Read before Phase 3.
