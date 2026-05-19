# Report Templates

## Findings Report Template

Use this format to report all issues found before making any edits.

```markdown
## Style Issues Found in [filename]

### Critical: Active Voice
- Line 23: "Users can be assigned to groups"
- Line 45: "Events are sent to the API endpoint"
- Line 67: "The configuration is created by the system"
[Total: X instances]

### Future Tense
- Line 12: "This feature will allow you to"
- Line 34: "The modal will open"
[Total: X instances]

### Missing Contractions
- Line 18: "cannot" → "can't"
- Line 29: "does not" → "doesn't"
- Line 41: "is not" → "isn't"
[Total: X instances]

### "Please" in Instructions
- Line 56: "Please navigate to Settings"
- Line 78: "Please save your changes"
[Total: X instances]

### Wordy Phrases
- Line 15: "in order to configure"
- Line 27: "via the API"
- Line 39: "currently available"
[Total: X instances]

### First Person Plural
- Line 19: "We recommend using"
- Line 44: "Let's configure"
[Total: X instances]

### List Punctuation
- Lines 30-35: List items missing ending periods
[Total: X items]

### Navigation Formatting
- Line 51: "**Settings** > **API Keys**" (should use italics)
[Total: X instances]

### Heading Issues
- Line 8: Heading ends with ":"
- Line 65: Heading ends with "?"
[Total: X issues]

---
**Total issues found:** X
**Priority order:** Active voice → Future tense → Contractions → Direct instructions → Concise language → Second person → UI formatting → Lists → Headings
```

## Completion Summary Template

Use this format after all fixes have been applied.

```markdown
## Style Corrections Applied to [filename]

### Changes Made

#### 1. Active Voice (Priority #1)
**First Pass:**
- Line 23: "Users can be assigned" → "You can assign users"
- Line 45: "Events are sent" → "Send events" / "The SDK sends events"
- Line 67: "is created by the system" → "the system creates"

**Second Pass (Critical):**
- Line 89: "is removed from" → "you remove from"
- Line 102: "can be configured" → "you can configure"

**Total active voice fixes:** X

#### 2. Present Tense
- Line 12: "will allow" → "lets"
- Line 34: "will open" → "opens"

**Total future tense fixes:** X

#### 3. Contractions
- Line 18: "cannot" → "can't"
- Line 29: "does not" → "doesn't"

**Total contraction fixes:** X

#### 4. Direct Instructions
- Line 56: Removed "Please" from "Please navigate to Settings"

**Total "please" removals:** X

#### 5. Concise Language
- Line 15: "in order to configure" → "to configure"
- Line 27: "via the API" → "through the API"
- Line 39: Removed "currently" from "currently available"

**Total wordy phrase fixes:** X

#### 6. Second Person
- Line 19: "We recommend" → "Statsig recommends"
- Line 44: "Let's configure" → "Configure"

**Total first person fixes:** X

#### 7. UI Formatting
- Line 51: "**Settings** > **API Keys**" → "*Settings > API Keys*"

**Total UI formatting fixes:** X

#### 8. List Punctuation
- Lines 30-35: Added ending periods to list items

**Total list punctuation fixes:** X items

#### 9. Headings
- Line 8: Removed ":" from heading
- Line 65: Removed "?" and rephrased heading

**Total heading fixes:** X

---

### Summary Statistics
- **Total changes:** X
- **Lines modified:** X
- **Most common issue:** [Category name] (X instances)
- **Critical issue resolved:** Active voice (X instances, verified with two-pass check)

### Rules Referenced
All changes follow Statsig documentation style standards:
- Active voice (two-pass verification completed)
- Present tense
- Contractions required
- Second person
- Direct instructions (no "please")
- Concise language
- Grammar and punctuation
- UI element formatting
- Heading conventions

The document now meets Statsig documentation standards.
```
