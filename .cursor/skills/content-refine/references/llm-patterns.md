# LLM optimization patterns

Patterns that make technical documentation easier for language models to parse, retrieve, and cite accurately. LLMs often retrieve individual sections rather than full articles — every section should make sense on its own.

---

## Self-contained sections

Replace all backward references with explicit restatements. When an LLM retrieves a section, it doesn't have the context from sections above it.

**Patterns to replace:**

| Backward reference | Fix |
|---|---|
| "As mentioned above..." | Restate the key point in one sentence |
| "See the previous step..." | Name the step: "After you configure the API key..." |
| "Following from what we discussed..." | Restate the relevant fact |
| "This" or "it" referring to something defined several paragraphs back | Name the thing explicitly |
| "Once you've done this..." | "After you [specific action]..." |
| "As noted earlier..." | Restate the note inline |

**Before**: "Once you've done this, you can proceed to the next step."
**After**: "After you configure the API key, you can create your first event."

---

## Explicit logical relationships

State cause, sequence, and dependency explicitly. LLMs inferring logical relationships from proximity get them wrong.

| Relationship | Implicit (avoid) | Explicit (use) |
|---|---|---|
| Cause | "High latency can affect event delivery." | "High latency causes events to queue, which delays delivery." |
| Requirement | "You need a project before tracking events." | "You must create a project before you can track events." |
| Contrast | "Cohorts and segments work differently." | "Cohorts are saved user groups; segments are dynamic filters applied at query time." |
| Sequence | "Configure X. Then set up Y." | "Configure X first, because Y depends on the project ID that X generates." |
| Condition | "If authentication fails, check the key." | "If authentication fails, the API key may be expired or invalid. Verify the key in *Settings > API Keys*." |

---

## Descriptive headings

Headings are the primary index entries for semantic search and retrieval. Vague headings like "Overview" or "Notes" produce low-quality matches.

**Rule**: A heading should answer "What is this section about?" with enough specificity to distinguish it from every other section in the documentation.

| Generic (avoid) | Specific (use) |
|---|---|
| `## Overview` | `## How [feature name] works` |
| `## Notes` | `## Known limitations` or `## Important considerations` |
| `## More information` | `## Related resources` |
| `## Next steps` | `## [Specific next action]` — or name the guides |
| `## Introduction` | `## What [feature name] does` |
| `## Details` | The specific topic covered in the section |
| `## Configuration` | `## Configure [specific thing]` |
| `## Usage` | `## [Specific task]` |

---

## Structured data

Present comparative, tabular, or parametric information as tables, not dense prose.

**Convert to tables when prose describes:**
- API parameters and their types, requirements, or defaults
- Configuration options
- Feature comparisons
- Supported values for an enum or dropdown
- Error codes and their meanings

**Before**: "The API accepts three parameters: the event name, which is a required string; the user ID, which is an optional string; and the timestamp, which is an optional integer in milliseconds."

**After**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `event_name` | String | Yes | Name of the event |
| `user_id` | String | No | The user's unique identifier |
| `timestamp` | Integer | No | Event time in milliseconds (Unix epoch) |

**Also convert**: Long bulleted lists of term + description pairs where each item is more than one clause — use a two-column table instead.

---

## Consistent terminology

One concept = one term, used identically every time. Synonym variation is sometimes used to make prose feel less repetitive, but it actively harms retrieval accuracy — an LLM matching on "event properties" won't reliably match on "event attributes" or "event metadata."

**Common inconsistencies to standardize:**

| Inconsistent variants | Use |
|---|---|
| "properties" / "attributes" / "metadata" (for event data) | "event properties" |
| "user" / "person" / "visitor" | "user" |
| "send" / "fire" / "trigger" / "emit" (for events) | "send" |
| "key" / "token" / "credential" (for API auth) | "API key" |
| "dashboard" / "workspace" / "console" | Use the specific Statsig product term for each |
| "configure" / "set up" / "set" (as a verb) | "configure" (prefer the single word) |

When an article uses the same concept with multiple terms, standardize to the canonical term throughout.

---

## Explicit prerequisites

State what the reader needs before they start. Unstated assumptions cause retrieval systems to return incomplete answers.

**Pattern to use**: A `## Before you begin` section immediately after the intro, listing:
- Required access or permissions
- Software or accounts that must already exist
- Related configuration that must be complete first

**Example**:

```markdown
## Before you begin

- You need Manager or Admin access to the Statsig organization.
- You must have at least one project configured.
- Install Statsig Browser SDK version 2.0 or later.
```

**If no prerequisites exist**: Omit the section entirely. Don't write "No prerequisites are needed."

---

## Prose nesting depth

Flat, shallow hierarchy is easier for LLMs to parse than deeply nested structures.

**Avoid:**
- Bullet lists nested more than two levels deep
- Tables embedded inside list items
- Long paragraphs that each cover multiple distinct points

**Fix:**
- Convert dense prose lists to bullet points or tables
- Break paragraphs that cover more than one point into separate paragraphs
- Limit nesting to two levels maximum: top-level bullets with one level of sub-bullets

**Before** (nested, hard to parse):
- Configure your project
  - Set the API key
    - You can find this in Settings
      - Navigate to *Settings > API Keys*

**After** (flat):
1. Navigate to *Settings > API Keys*.
2. Copy your API key.
3. Set the `api_key` value in your configuration.
