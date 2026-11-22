---
title: Your telemetry belongs next to the rest of your data
summary: Mission control archives are built for operators. Engineering, finance and customers need the same data in a place they can query.
date: 2026-11-10
author: Max Barrios
---

Mission control software keeps a telemetry archive, and it is very good at what operators need: replaying a pass, plotting a parameter over the last day, checking what a value was when an alarm fired. It is not built for the questions the rest of the company asks:

- Which battery cells across the fleet are degrading fastest?
- How much of last month's imaging capacity went to which customers?
- Did the attitude control change in the last software update reduce slew times?

Answering those means joining telemetry with the schedule, the ground station contacts, the customer orders and the software versions. Those live in different systems, and the usual answer is an engineer exporting files on demand.

## Copy telemetry out, keep the archive in charge

We do not replace the mission control archive. Operators keep using it as the system of record for operations. Alongside it, we stream decoded telemetry into a lakehouse, where it lands in open table formats next to everything else:

1. **Raw:** decoded parameters exactly as received, partitioned by spacecraft and day.
2. **Cleaned:** de-duplicated, with units and calibrations applied, and gaps marked rather than hidden.
3. **Modeled:** tables shaped around questions, such as per-pass summaries, per-subsystem daily statistics, and fleet-level trends.

## Keep the meaning with the numbers

Telemetry is useless without its definitions. The command and telemetry database already describes every parameter: its units, limits, calibration and subsystem. We load those definitions as tables too, so anyone querying a value can see what it means and which limits apply.

## Start with one question

The fastest way to get value is to pick one question that someone asks every week and currently answers by hand. Build the pipeline for the data that question needs, publish the answer as a dashboard, and grow from there. Within a quarter, the lakehouse usually becomes the place engineering goes first.

Read more about our [space data engineering](/services/space-data-engineering/) work.
