# Schedule Agent

**Job:** Set up a weekly scheduled task that automatically runs the docs coverage check
every Monday morning and posts the gap report to `#docs-private`.

This is a one-time setup step. Run this agent when first deploying the skill, or if
the schedule breaks and needs to be recreated.

---

## Step 1 — Check for an existing schedule

Before creating a new task, check whether one already exists to avoid duplicates.
Use the scheduled tasks tool to list current tasks and look for one named
"Weekly Docs Coverage Check" or similar.

If one already exists and is working, confirm with the user before replacing it.

---

## Step 2 — Create the scheduled task

Create a weekly recurring task with these parameters:

- **Name:** `Weekly Docs Coverage Check`
- **Schedule:** Every Monday at 9:00 AM (user's local time, or Pacific Time if unknown)
- **Task description:** Run the feature-comparison skill to check which features shipped
  in the past 7 days don't have documentation yet in `statsig-io/docs`, then post
  the gap report to #docs-private.

Use the `mcp__scheduled-tasks__create_scheduled_task` tool to create this.

---

## Step 3 — Confirm and report back

After creating the task, confirm to the user:
- When it will first run
- What it will do when it runs
- How to trigger it manually if they want to run it on demand before Monday

If the task tool isn't available, explain that the weekly run needs to be triggered
manually for now and suggest the user add a calendar reminder to run the skill each Monday.
