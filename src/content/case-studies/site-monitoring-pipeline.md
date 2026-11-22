---
title: Turning satellite imagery into a weekly site-activity report
summary: How we would build an automated monitoring pipeline for a customer that buys imagery but lacks the team to analyze it.
industry: Energy, climate and agriculture
services: [Geospatial AI, Space data engineering]
order: 3
---

## The situation

An energy company buys satellite imagery of its facilities and its competitors' sites. Analysts review images by hand, so most images are never looked at, and reports arrive weeks late.

## What we would do

1. **Land the data.** Pull new imagery and metadata automatically into the customer's lakehouse as it is delivered.
2. **Train for their sites.** Fine-tune detection models on labeled examples from their own facilities, and measure accuracy against analyst-checked ground truth.
3. **Report changes.** Run every new image through the models and publish a weekly report of activity changes, with links to the source imagery.
4. **Keep analysts in charge.** Route uncertain detections to analysts for review, and feed their corrections back into training.

## What changes

Every image gets analyzed within hours of delivery, analysts spend their time on the changes that matter, and the models improve with each review.
