---
title: Making collision avoidance a process instead of a fire drill
summary: How we would replace ad-hoc conjunction handling with screening, trending and planned decisions.
industry: Satellite communications
services: [Flight dynamics and collision avoidance]
order: 2
---

## The situation

A communications operator receives conjunction data messages by email. An engineer reads them when they can. High-risk events surface late, and maneuver decisions are made under time pressure with little written down.

## What we would do

1. **Screen automatically.** Ingest every message as it arrives, compute risk with the operator's chosen method, and flag events above a watch threshold.
2. **Trend each event.** Track miss distance, covariance and probability across every update on one chart per event.
3. **Plan decisions.** Set a decision point for each event based on the time needed to plan, upload and verify a maneuver.
4. **Close the loop.** After every maneuver, screen the new orbit against existing and new conjunctions.

## What changes

The team sees risky events days earlier, makes maneuver decisions at a planned time with the evidence in hand, and has a written record for insurers and regulators.
