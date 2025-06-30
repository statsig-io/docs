---
title: Session Replay Overview
sidebar_label: Overview
slug: /session-replay/overview
keywords:
  - owner:akin
last_update:
  date: 2025-06-30
---
# Session Replay Overview

Session Replay allows you to record users using your website or product, and play back those recorded sessions. This allows you to better understand how users use your service or website, diagnose problems, and uncover insights that help improve conversion and the overall user experience.

A session recording plays back like a video in the Statsig Console, but is actually a serialized representation of your website and all of the events and interactions that occurred while the user was interacting with it. The recordings are captured using the [rrweb open source recording library](https://github.com/rrweb-io/rrweb). Recordings using this strategy are performant and space efficient, with options to apply user privacy filters to what is happening on screen.

<img width="1493" alt="Screenshot 2025-06-30 at 11 05 11 AM" src="https://github.com/user-attachments/assets/f21a0b86-62ee-42bd-abe8-53805776344e" />
