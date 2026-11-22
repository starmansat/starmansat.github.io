---
title: What a conjunction data message actually tells you
summary: A CDM arrives with a probability of collision on it. Here is how to read the rest of the message before you decide whether to maneuver.
date: 2026-11-18
author: Alex Barreto
---

Every operator in low Earth orbit gets conjunction data messages (CDMs): notices that your spacecraft and another object are predicted to pass close to each other. Most teams look at one number, the probability of collision, and compare it with a threshold. That number matters, but it is the end of a calculation, and the inputs tell you how much to trust it.

## Start with the miss distance and its geometry

The CDM gives the predicted miss distance and splits it into radial, in-track and cross-track components. Radial separation is the most stable of the three, because it depends mostly on altitude, which is well determined. A conjunction with a large radial separation and a small in-track one is usually safer than the total distance suggests. One with a small radial separation deserves attention even if the total looks comfortable.

## Then look at the covariance

Each object comes with a covariance: the uncertainty of its predicted position. The probability of collision depends heavily on it.

- **Small covariance, small miss distance:** the classic high-risk case. Both positions are well known, and they are close.
- **Large covariance:** the probability can look low simply because the uncertainty spreads it out. That does not make the event safe. It means the prediction is not yet good enough to tell.

Check how old the orbit determination behind each covariance is. A secondary object tracked days ago will produce a different picture once fresh tracking arrives.

## Watch the trend, not the single message

A single CDM is a snapshot. As time of closest approach gets closer, updates should converge: miss distance stabilizes and the covariance shrinks. We plot every update for an event on one chart. An event whose probability keeps rising while the covariance shrinks is the one that ends in a maneuver.

## Decide early enough to act

Maneuver decisions have a deadline set by your operations, not by the physics. You need time to plan the burn, check it against other conjunctions, upload it, and confirm it executed. Work backward from closest approach to set a decision point, and agree in advance what evidence you need by then.

## What good looks like

A healthy conjunction process is boring:

1. Every CDM is screened automatically within minutes of arrival.
2. Events above a watch threshold get a named owner and a trend chart.
3. Maneuver decisions are made at a planned decision point, with the reasoning written down.
4. After a maneuver, the post-burn orbit is checked against the conjunction it was meant to avoid, and against any new ones it might create.

If your team is doing most of this by hand, our [Conjunction watch](/solutions/conjunction-watch/) service can take it on.
