# Translatability reference

Complete pattern set for making documentation translation-ready. Covers idioms, cultural references, ambiguous pronouns, gendered language, and concatenated string patterns.

---

## Idioms and colloquialisms

Replace all idiomatic expressions with literal equivalents. These phrases have no direct translation in most target languages.

**Product name exception:** If a phrase like "out of the box" or "under the hood" is used as a proper product or feature name (capitalized mid-sentence, or used as a grammatical subject referring to a named product), do not replace it. Replace only all-lowercase idiomatic uses or sentence-initial modifying clauses (e.g., "Out of the box, you can track events." → "By default, you can track events.").

When in doubt, check whether the phrase is acting as a noun/proper name or as a descriptive modifier. Proper names are capitalized mid-sentence; modifiers are not.

| Avoid | Use instead |
|---|---|
| "out of the box" (idiomatic — see detection logic above) | "by default" |
| "under the hood" (idiomatic — see detection logic above) | "internally" or "in the background" |
| "on the fly" | "dynamically" or "in real time" |
| "spin up" | "start" or "create" |
| "hit the ground running" | "get started quickly" |
| "kick off" | "start" or "begin" |
| "long story short" | Remove — state the point |
| "ballpark" | "approximate" or "estimated" |
| "heads up" | Remove — state the point |
| "keep in mind" | "note that" |
| "handy" | "useful" |
| "straightforward" | Remove or rewrite |
| "simply" / "just" | Remove — also minimizes complexity |
| "at the end of the day" | Remove or rewrite |
| "in a nutshell" | Remove — state the point |
| "bear in mind" | "note that" |
| "moving forward" | Remove or state the actual change |
| "touch base" | "connect" or "contact" |
| "circle back" | "return to" or "revisit" |
| "deep dive" | "detailed look" or "in-depth review" |
| "leverage" (as in "leverage the API") | "use" |
| "empower" | Rewrite to describe the actual capability |
| "seamless" | Describe the actual behavior |

---

## Culturally specific references

Avoid examples, metaphors, humor, or comparisons that only work in specific cultural contexts.

### Metaphors to avoid

| Avoid | Use instead |
|---|---|
| "secret sauce" | "key feature" or "central mechanism" |
| "thinking outside the box" | "approaching the problem differently" |
| "elephant in the room" | "the main issue" |
| "reinventing the wheel" | "duplicating existing functionality" |
| "ballpark figure" | "approximate value" |

**Rule**: If the metaphor requires the reader to know an idiom, a sport, a cultural practice, or a pop culture reference, replace it with a literal description.

### Avoid humor and sarcasm

Humor doesn't translate. Sarcasm actively misleads.

Before: "Congratulations — you've just created your third duplicate event. Again."
After: "Duplicate events affect data accuracy. Review your tracking plan to avoid duplicates."

### Locale-specific examples

- Don't use US-centric date formats (`12/31/2024`). Use ISO 8601 (`2024-12-31`) or spell out the month.
- Don't use dollar amounts as examples without context. Use a generic number or make the currency explicit.
- Don't use US phone number formats, zip codes, or regional service examples.

---

## Ambiguous pronoun references

"It," "this," "they," and "that" must always have an explicit, unambiguous referent. Flag any pronoun that:

- Could refer to more than one noun in the preceding sentence
- Requires reading more than one sentence back to find the referent
- Appears at the start of a sentence after a paragraph that introduced multiple concepts

**Resolution**: Replace the pronoun with the noun it refers to.

### Common problem patterns

**"This" at sentence start:**

Before: "Configure the API key in your settings file. This ensures events are sent correctly."
After: "Configure the API key in your settings file. The API key ensures events are sent correctly."

**"It" after multiple nouns:**

Before: "The SDK uses the API key to authenticate with the server. If it expires, authentication fails."
After: "The SDK uses the API key to authenticate with the server. If the API key expires, authentication fails."

**"They" with ambiguous referent:**

Before: "Statsig processes events and stores them in the data warehouse. They are available within 60 seconds."
After: "Statsig processes events and stores them in the data warehouse. Events are available within 60 seconds."

**Dangling "this" or "it" after a clause:**

Before: "When you enable real-time processing, it changes the batching behavior."
After: "When you enable real-time processing, Statsig changes how it batches events."

---

## Gendered language

Use gender-neutral forms throughout.

### Pronouns

| Gendered | Gender-neutral |
|---|---|
| "his or her API key" | "their API key" |
| "If the developer needs help, he can..." | "If developers need help, they can..." |
| "the user...she" or "the user...he" | "the user...they" or rewrite in plural |
| "If he has the Admin role..." | "If the user has the Admin role..." or "Admins can..." |

**Preferred approach**: Rewrite in plural ("developers," "users," "administrators") to avoid the singular they when it feels awkward.

### Role names

| Gendered | Gender-neutral |
|---|---|
| "chairman" | "chair" |
| "manpower" | "resources," "staff," or "capacity" |
| "man-hours" | "person-hours" or "hours of work" |

---

## Concatenated string patterns

Prose that embeds a variable in the middle of a fixed English phrase creates translation problems. Translation memory systems split sentences at variable boundaries, leaving fragments that lose grammatical context.

### The problem in documentation

Even when documentation doesn't contain actual code concatenation, the same pattern appears as prose that describes a UI action using a variable name embedded in a fixed phrase.

**Problematic patterns:**

- `"Click the [button name] button to continue."` — word order assumes English noun position
- `"The [event name] event fires when..."` — article + variable + noun doesn't translate
- `"Navigate to the [section name] section."` — same problem
- `"Use the [feature name] feature to..."` — redundant and variable-dependent

### How to fix

**Option 1 — Name it explicitly** (when the name is known and stable):

Before: "Click the **[Save changes]** button to continue."
After: "Select **Save changes** to continue."

**Option 2 — Describe it generically** (when the name varies):

Before: "Click the **[button name]** button to proceed."
After: "Select the button to proceed."

**Option 3 — Restructure the sentence** to avoid the mid-sentence variable:

Before: "The [event name] event is now tracked in Statsig."
After: "Statsig now tracks the event." (if context makes the event clear) or: "The `Purchase Completed` event is now tracked in Statsig." (if you can name it)

### Why this matters for documentation

Translation memory systems reuse previously translated sentence segments. A sentence like `"Navigate to the Settings section."` can be stored and reused. But `"Navigate to the [section name] section."` creates a unique segment every time the variable changes — defeating the memory entirely, and often leaving translators with grammatically broken fragments.

Write prose that is either fully generic ("Navigate to the section") or fully explicit ("Navigate to *Settings*").

---

## Structural issues that affect translation

### Gerund-heavy openings

Gerund phrases at sentence starts are frequently mistranslated.

Before: "Configuring the API endpoint requires setting up credentials first."
After: "To configure the API endpoint, set up credentials first."

### Negation chains

Multiple negatives are hard to translate accurately.

Before: "You can't not configure this unless you don't need the feature."
After: "Configure this only if you need the feature."

### Formatting markup mid-sentence

Bold, italics, and backtick formatting that splits a sentence creates translation segments that don't make sense on their own.

Before: "Select the **Save** button to **save your changes** to the project."
After: "Select **Save** to save your changes."

**Rule**: Format only the noun or term being called out, not surrounding words.

### Parallel list structure

Translators work segment by segment. Non-parallel list items appear to be different types of content.

Before:
- Configure your API key.
- The event properties should be set.
- Verifying your setup.

After:
- Configure your API key.
- Set your event properties.
- Verify your setup.
