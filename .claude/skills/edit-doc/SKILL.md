---
name: edit-doc
description: This skill should be used when the user asks to "apply style rules", "fix style issues", "edit this doc", "make this follow Statsig style", "clean up this document", or wants systematic style corrections applied to existing Statsig documentation. Supports minimal mode for developer-authored release notes with `edit_doc: minimal`.
version: 0.1.0
---

# Edit Doc

Apply all Statsig documentation style rules systematically to an existing document.

## About This Skill

This skill performs a priority-ordered review of documentation to ensure it meets all Statsig style standards. It reports all findings before making changes, applies fixes by category, and verifies the result.

## Phase 0: Mode Detection

Before Phase 1, read the target document's frontmatter and check `edit_doc`.

- If `edit_doc` is absent or set to `full`, continue to Phase 1 and run the full style pass.
- If `edit_doc: minimal`, announce minimal mode, run only the checklist in this section, and stop. Skip Phases 1-3 entirely.

Minimal mode is for developer-authored changelogs, release notes, and similar files where terse engineering phrasing is intentional.

**Minimal-mode checklist:**

1. Full-sentence prose lines end with a terminal mark (`.`, `!`, or `?`). Terse bullet entries that intentionally omit punctuation don't need terminal marks.
2. The first word of any full sentence is capitalized.
3. No stray characters left from editing: trailing whitespace, double spaces in prose, doubled punctuation such as `..` or `,,`, unmatched `[` or `(`, or accidental backticks.
4. No frontmatter changes while running the review.

Minimal mode doesn't touch passive voice, future tense, contractions, "please", "see", wordy phrases, first-person plural, bold-vs-italics, heading case, or list punctuation on terse bullets.

## Phase 1: Pattern-Based Search

Before making any edits, search for these patterns to identify all issues. Document findings with line numbers.

**Search for, in this priority order:**

1. **Passive voice (highest priority):** `is/are/was/were [verb]ed`, `can be`, `will be`, `should be`, `is assigned`, `are granted`, `is removed`, `is created`, `is available`, `is processed`, `is sent`, `is configured`.
2. **Future tense:** `will`, `will be`, `will allow`, `will enable`, `would be`, `going to`.
3. **Missing contractions:** `cannot`, `are not`, `is not`, `does not`, `do not`, `has not`, `have not`, `was not`, `were not`, `should not`, `could not`, `would not`, `will not`.
4. **"Please" in instructions:** `please` (case-insensitive).
5. **Wordy phrases:** `in order to`, `via`, `prior to`, `desired`, `currently`, `due to the fact that`, `has the ability to`.
6. **Ableist navigation terms:** `see` when used to refer readers to other documentation or sections (for example, "See the API reference"). Replace with `go to`, `refer to`, or `navigate to`. This is an inclusive terminology rule — "see" excludes users with visual impairments.
7. **First person plural:** `we`, `our`, `us` (in prose, not URLs).
8. **List items without ending punctuation:** Bulleted and numbered list items missing periods or other end marks.
9. **Bold navigation paths:** `**[text]** >` patterns (navigation paths should use italics, not bold).
10. **Heading issues:** Headings ending with `.`, `?`, `!`, or `:`; headings using `#` (should start at `##`); title case instead of sentence case.

Report all findings before proceeding. Go to `references/report-templates.md` for the findings report format.

## Phase 2: Apply Fixes Systematically

Work through issues by category, not line-by-line. Apply all related changes together for efficiency.

**Fix in this priority order:**

1. Active voice (first pass)
2. Present tense
3. Contractions
4. Direct instructions (remove "please")
5. Concise language
6. Inclusive terminology (replace "see" with "go to", "refer to", or "navigate to")
7. Second person (remove "we/our/us")
8. UI formatting (bold vs italics)
9. List punctuation
10. Headings
11. **Active voice (second pass — mandatory)**

## Phase 3: Second Active Voice Pass (Mandatory)

After completing all other fixes, search again explicitly for remaining passive patterns:

```
is assigned | are assigned | is removed | are removed |
is granted | are granted | is created | are created |
is available | are available | was assigned | were assigned |
is sent | are sent | can be configured | can be accessed |
will be displayed | will be shown | should be checked
```

Convert all remaining instances. This second pass is critical — passive voice is easily missed when fixing other issues.

## Phase 4: Verification

After all fixes:

- Re-run passive voice search and confirm zero results.
- Verify changes are semantically correct and don't alter technical meaning.
- Confirm all list items have ending punctuation.
- Confirm all headings follow rules (no end punctuation, sentence case, starts at `##`).
- Confirm UI elements use the correct formatting (bold for interactive elements, italics for navigation paths).

## Completion Summary

When complete, provide a summary of all changes made with before/after examples and counts by category. Go to `references/report-templates.md` for the summary format.

## Special Considerations

**Preserve technical accuracy:**

- Don't change technical terms, code, API endpoints, or product names.
- Don't alter meaning — ensure corrections are semantically equivalent.
- Be careful with code examples inside markdown code fences.
- Preserve links and image references.

**UI element formatting:**

- Bold (`**text**`) = interactive elements only: buttons, clickable tabs, input field labels, checkboxes, menu items.
- Italics (`*text*`) = orientation elements: page names, navigation paths, section titles.
- Navigation paths always use italics with angle brackets: `*Settings > API Keys*`.

**When to use "Statsig" as subject:**
When the actor in a passive construction is the system or product, use "Statsig" as the subject:

- "Data is processed in real time" → "Statsig processes data in real time"
- "Permissions are granted at the organization level" → "Statsig grants permissions at the organization level"

**Performance:**

- For files over 500 lines, report progress by section.
- Group similar fixes to minimize edit operations.
- Show before/after examples for clarity.

## Stop Conditions

A document is complete when:

- Zero passive voice constructions (verified with two searches).
- Zero future tense.
- All contractions applied.
- No "please" in instructions.
- All wordy phrases replaced.
- No ableist navigation terms ("see" replaced with "go to", "refer to", or "navigate to").
- Second person used consistently.
- All list items have ending punctuation.
- All headings follow conventions.
- UI elements formatted correctly.

## Additional Resources

### Reference Files

- **`references/report-templates.md`** — Findings report and completion summary templates with examples.
- **`references/before-after-example.md`** — A full before/after document transformation example.

### Related Skills

- **`feature-comparison`** — Check docs coverage after applying style corrections.
