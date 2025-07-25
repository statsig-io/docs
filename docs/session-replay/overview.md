---
title: Session Replay Overview
sidebar_label: Overview
slug: /session-replay/overview
keywords:
  - owner:akin
last_update:
  date: 2025-07-25
---

# Session Replay Overview

Session Replay allows you to record users using your website or product, and play back those recorded sessions. This allows you to better understand how users use your service or website, diagnose problems, and uncover insights that help improve conversion and the overall user experience.

A session recording plays back like a video in the Statsig Console, but is actually a serialized representation of your website and all of the events and interactions that occurred while the user was interacting with it. The recordings are captured using the [rrweb open source recording library](https://github.com/rrweb-io/rrweb). Recordings using this strategy are performant and space efficient, with options to apply user privacy filters to what is happening on screen.

![image](/img/session_replay/overall_ui.png)

# Playlists

Playlists allow you to organize and group related session recordings for easier analysis and collaboration. Instead of searching through individual sessions, you can create curated collections of recordings that focus on specific user behaviors, issues, or research questions.

## Key Features
- Organized Collections: Create named playlists to group related session recordings together. This makes it easier to focus on specific user journeys, bug reports, or research topics without getting lost in a sea of individual sessions.
- Collaborative Analysis: Share playlists with your team members to collaborate on user experience analysis. Team members can view the same curated set of recordings to discuss findings and insights together.
- Persistent Organization: Unlike temporary filters, playlists persist your organizational structure, making it easy to return to specific sets of recordings for ongoing analysis or follow-up research.
- Seamless Integration: Playlists integrate seamlessly with the existing session replay interface. When you open a playlist, you can view all the recordings within it using the same powerful replay player and analysis tools.
