# Before/After Example

This example shows a document with multiple style violations and the corrected version.

## Before (Multiple Violations)

```markdown
# Configuration

Please navigate to the settings page where you will be able to configure
your API keys. Currently, you can utilize the blacklist feature in order
to block unwanted events. This feature was designed by our team.

- Configure the API endpoint
- Set up authentication
- Enable real-time processing
```

## After (All Rules Applied)

```markdown
## Configuration

Navigate to the settings page to configure your API keys. Use the block
list feature to block unwanted events. Statsig designed this feature to
help you filter data.

- Configure the API endpoint.
- Set up authentication.
- Enable real-time processing.
```

## Changes Made

1. `#` → `##` — No H1 in document body; use H2 or lower.
2. "Please navigate" → "Navigate" — No "please" in instructions.
3. "will be able to configure" → "to configure" — Present tense, concise.
4. "Currently," → Removed — Temporal qualifiers are redundant.
5. "utilize" → "Use" — Concise language.
6. "blacklist" → "block list" — Inclusive terminology.
7. "in order to" → "to" — Concise language.
8. "was designed by our team" → "Statsig designed" — Active voice, removes first person plural.
9. Added ending periods to all list items — List punctuation rule.

## Passive Voice Patterns to Search Explicitly

These are frequently missed. Search for them by name during the second active voice pass:

```
is assigned | are assigned
is removed | are removed
is granted | are granted
is created | are created
is available | are available
is processed | is processed
is sent | are sent
can be configured | can be accessed
will be displayed | will be shown
should be checked | should be verified
was assigned | were assigned
```
