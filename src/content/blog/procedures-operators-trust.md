---
title: Writing procedures operators trust at 3 a.m.
summary: A procedure is only as good as its worst moment of use. Five rules we follow when we write standard operating procedures.
date: 2026-11-03
author: Trevor Goodchild
---

Standard operating procedures get written during calm design reviews and used during anomalies, at night, by someone who has been awake too long. We write them for the second situation.

## 1. One action per step

"Verify the battery voltage and, if nominal, enable the heater" is two steps hiding in one. Split them. Each step should have one action and one expected result, so the operator always knows whether the step succeeded.

## 2. Say what you expect to see

Every command step names the telemetry that confirms it worked, with the expected value or range. If the operator cannot see the confirmation, the procedure says what to do next instead of leaving them to improvise.

## 3. Branch explicitly

Contingencies belong inside the procedure as clear branches: "If the value is above 30 °C, go to step 14." Never write "use engineering judgment" without naming who to call and what information they will need.

## 4. Test it like code

A procedure that has never been run is a draft. We run every procedure against a simulator or engineering model before it is approved, and we record the run. When the spacecraft software or the ground system changes, the affected procedures are re-run.

## 5. Keep it under change control

Procedures are versioned, reviewed and released, just like flight software. Operators should never wonder whether the copy in front of them is current.

## The result

Good procedures shorten training, reduce errors and make handovers routine. They also let a small team run a larger fleet, because the knowledge lives in the procedure instead of in one person's head.

We write, test and maintain procedures as part of our [operations readiness and training](/services/readiness-and-training/) work.
