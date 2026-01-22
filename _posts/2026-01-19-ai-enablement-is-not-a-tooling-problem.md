---
layout: post
title: "AI Enablement Is Not a Tooling Problem"
subtitle: "Why real progress comes from behavior change, not tool adoption"
date: 2026-01-19
categories: [AI Enablement, Engineering Leadership]
tags:
  - AI
  - Engineering Culture
  - Developer Experience
  - DORA
  - SPACE
  - Software Engineering Intelligence
description: >
  AI enablement is not a tooling rollout problem. It’s a behavior and systems
  challenge that requires trust, learning loops, and better measurement.
image:
  path: /assets/img/posts/ai-enablement-not-tooling/hero.png
  alt: "Editorial illustration showing humans and AI collaborating thoughtfully"
accent_color: "#6B5B95"
accent_image:
  background: "#F6F4FB"
---

# AI Enablement Is Not a Tooling Problem

In 2022, the software industry was buzzing as articles predicted 10× productivity from AI coding tools. The leaders of my company at the time were excited about the potential and moved quickly, setting an OKR to put GitHub Copilot into every engineer’s IDE. I was curious too, but more reserved. My career began in the late ’90s, and I’d seen enough “transformations” to know that tools alone rarely deliver change without shifts in how teams work.

Engineers complied with the Copilot mandate, and the OKR was marked green: a success. Leadership moved on to other organizational goals. A couple of months later, a GitHub CSM produced a report showing that around 30% of our code was now being written by Copilot. This surprised me, since Copilot was just an autocomplete tool at the time (prior to the introduction of chat). I looked at the metrics our team was tracking - cycle time, PR throughput, change failure rate, and others - and nothing had moved. The work didn’t feel meaningfully different. The system wasn’t behaving differently. We had achieved installation, not enablement.

Working for a company in the Software Engineering Intelligence (SEI) space, I should have known better. Just as lines of code is not a good metric for telling the story of a software engineering team’s contributions, the same applies to AI coding: **activity is not the same thing as impact**.

AI enablement isn’t a tooling problem, it’s a holistic problem that starts with culture and values, is supported by principles and training, and ultimately leads to behavior change that drives not vanity metrics, but real results.

---

## Installation is not adoption

It’s tempting to treat AI like every other developer tool: buy seats, announce the rollout, publish a few tips, and expect the productivity curve to lift.

We all know how this story is supposed to go. A platform shift arrives. Early adopters surge ahead. The rest catch up. Leadership celebrates. The organization becomes “AI-first.”

You’ve probably seen the public versions of this narrative. Leaders sharing the percentage of code “written by AI” or the percentage of engineers using AI editors as proof of progress.

Those numbers tell us **that something happened** — not whether it mattered.

If those announcements leave you with a quiet follow-up question —  
*okay, but did anything actually get better?* — that discomfort is worth listening to.

Because installation is easy to mandate.  
**Behavior change is not.**

---

## What we found when we stopped mandating and started observing

After the metrics didn’t budge, we could have pushed harder. We could have mandated training, required usage, or published adoption dashboards.

We didn’t.

Instead, I partnered with product and engineering leaders to form a **voluntary Copilot focus group** across teams. The goal wasn’t compliance. It was curiosity:

*How is the tool actually being used? What’s helping? What’s getting in the way?*

At the time, Copilot felt mostly like autocomplete. Many engineers didn’t see it as materially better than their IDE. As we listened, three groups emerged:

- **Skeptics** who didn’t want to ship code they didn’t understand  
- **Wait-and-see adopters** who were open but unconvinced  
- **Curious engineers** who wanted to learn but lacked techniques and safety  

That third group became the fulcrum.

We focused on creating **psychological safety around experimentation** — no productivity pressure, no forced adoption. Engineers started with low-risk use cases like schema updates and unit tests, then progressed to more complex refactors and feature work.

Not because the tool suddenly improved —  
but because **judgment and confidence did**.

That’s enablement.

---

## Why “AI-first” can quietly mislead

Most “AI-first” declarations are made in good faith. Leaders want to signal urgency and commitment.

The problem isn’t ambition — it’s definition.

When AI enablement is defined as a tooling problem, success gets measured in the easiest available ways:

- licenses provisioned  
- usage rates  
- prompts executed  
- lines of code generated  

Those metrics aren’t wrong. They’re just shallow.

AI doesn’t just change how fast code is written.  
It changes **where effort lives** — often shifting work from implementation into review, verification, and coordination.

If you don’t look for those shifts, you’ll miss them entirely.

---

## Measurement is not control — it’s curiosity at scale

Over the last several years, I led teams building **Software Engineering Intelligence** products. That experience fundamentally changed how I think about metrics.

What I learned — sometimes the hard way — is that **outcomes move last**.

Behavior moves first.

Lines of code and output volume tell you very little about the behaviors that actually lead to high-quality, maintainable, fast software delivery. They’re lagging indicators, and often misleading ones.

Frameworks like **DORA**, **SPACE**, and **Developer Thriving** matter because they force leaders to look at delivery, experience, and sustainability together.

But even those tend to move *after* the real change has already started.

---

## Where AI’s impact shows up first: pull requests

If there’s one place I’ve learned to look for early signals of change, it’s **pull requests**.

PRs sit at the boundary where AI-generated code meets human judgment.

Rather than treating PR metrics as targets, I encourage leaders to ask a few questions:

- Are AI-assisted PRs small enough to review meaningfully?
- Are review comments thoughtful — or increasingly shallow?
- As more code is generated, is PR cycle time improving, or just shifting effort into review?

These signals show up **long before** changes appear in deployment or incident metrics.

This isn’t an argument for more dashboards.  
It’s an argument for paying attention to **where cognitive load is moving**.

(I go deeper on this in a companion playbook.)

---

## Scale doesn’t happen through evangelism

Once our focus group gained momentum, the next challenge was scale.

I didn’t want AI knowledge living in a few people’s heads or a single guild. That doesn’t scale — it creates dependency.

So we embedded AI context directly into the **engineering system**:
- repository-level architecture and domain instructions  
- shared, version-controlled prompt libraries  
- learning loops that fed insights back into the system  

One of the biggest inflection points wasn’t top-down at all. It was peer-led. An engineer ran a lunch-and-learn showing how they were using AI effectively. That moment normalized experimentation.

Over time, AI stopped being an initiative and became part of how teams approached work.

---

## A more useful definition of AI enablement

Here’s the definition I wish I’d had earlier:

> **AI enablement is the ongoing work of helping engineering teams use AI to improve outcomes — without degrading quality, trust, or sustainability.**

Tools matter.  
But tools don’t create judgment.  
Tools don’t create trust.  
Tools don’t create learning systems.

Organizations do.

---

## What I’d hold onto as a leader

If you’re responsible for AI enablement across an engineering organization:

- Start with baseline data  
- Measure the system, not the slogan  
- Expect bottlenecks to move  
- Watch behavior before outcomes  
- Create learning conditions before applying pressure  
- Embed knowledge into systems so it scales  

AI can be real leverage — if we lead it thoughtfully.

Enablement isn’t a rollout.  
It’s a sustained commitment to how teams learn and deliver.
