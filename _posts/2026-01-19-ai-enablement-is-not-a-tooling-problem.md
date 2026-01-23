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

In 2022, the software industry was buzzing with promises of 10× productivity from AI coding tools. The leaders of my company at the time were excited about the potential and moved quickly, setting an OKR to put GitHub Copilot into every engineer’s IDE. I was curious too, but more reserved. My career began in the late ’90s, and I’d seen enough “transformations” to know that tools alone rarely deliver change without shifts in how teams work.

Engineers complied with the Copilot mandate, and the OKR was marked green: a success. Leadership moved on to other organizational goals. A couple of months later, a GitHub CSM produced a report showing that around 30% of our code was now being written by Copilot. This surprised me, since Copilot was just an autocomplete tool at the time (prior to the introduction of chat). I looked at the metrics our team was tracking - cycle time, PR throughput, change failure rate, and others - and nothing had moved. The work didn’t feel meaningfully different. The system wasn’t behaving differently. We had achieved installation, not enablement.

Working for a company in the Software Engineering Intelligence (SEI) space, I should have known better. Just as lines of code is not a good metric for telling the story of a software engineering team’s contributions, the same applies to AI coding: **activity is not the same thing as impact**.

AI enablement isn’t a tooling problem, it’s a holistic problem that starts with culture and values, is supported by principles and training, and ultimately leads to behavior change that drives outcomes - not vanity metrics, but real results.

---

## Installation is not adoption

It’s tempting to treat AI like any other developer tool, because in many ways it looks like one. Engineers love trying new things like new libraries, open source projects, better editors, and even fancy keyboards. When a tool genuinely removes friction, I’ve seen developers run with it. From the outside, it’s logical to assume AI will follow the same pattern: give engineers access, step out of the way, and let productivity take care of itself. 

AI doesn't work the same way.

After the OKR was marked green but the results didn’t show up, I wanted to understand what was actually happening on the ground. I pulled together a small, cross-team focus group to talk about how engineers were using Copilot in their daily work.

The feedback was surprisingly consistent. At the time, Copilot didn’t feel meaningfully better than the autocomplete already built into their IDEs. It made some things faster at the margins, but it wasn’t changing how they approached problems or how the work flowed. That context matters as this was early, well before chat-based workflows made AI feel more conversational and more capable.

What stood out to me wasn’t disappointment with the tool. It was that engineers had access, but not much guidance. They hadn’t been given shared examples, best practices, or even a common understanding of what “using Copilot well” meant. So they did what good engineers always do: they tried it, evaluated it quickly, and moved on.

That focus group made something click for me. AI enablement wasn’t failing because the technology wasn’t ready, it was failing because we had treated it like every other developer tool. We had installed it, but we hadn’t taught people how to work differently with it.

---

## What we found when we stopped counting usage and started defining outcomes

Once the patterns from the focus group were clear, the next step wasn’t more rollout—it was alignment. If “percent of code written by AI” wasn’t telling us anything useful, we needed to be explicit about what better actually looked like.

Ten-times productivity was never a realistic goal. What we were looking for was something more grounded: fewer tedious tasks, smoother reviews, and less friction in everyday work. We wanted engineers spending more time thinking and less time fighting the mechanics of the code.

With that in mind, the focus group shifted from whether Copilot was being used to how it was being used. We stopped asking about adoption and started talking about outcomes. Where did it help? Where did it slow things down? What felt safer? What didn’t?

A small group of curious engineers became informal champions. They experimented in low-risk areas, shared what worked, and were candid about what didn’t. Over time, patterns emerged—not in usage numbers, but in behavior. Pull requests became easier to review. Certain classes of work moved faster. Engineers were more confident about when to lean on AI and when to ignore it.

Those weren’t headline-worthy metrics, but they were real. They reflected changes in judgment, workflow, and trust—things that don’t show up in an adoption dashboard, but actually move the system.

That’s when it became clear that measuring AI impact required a different lens. Not “how much was used,” but whether the work itself was getting better.
---

## Champions Emerged

As the focus group shifted toward outcomes and learning, a small set of champions began to emerge organically. One of them realized that Copilot, at the time, wasn’t quite meeting his needs and decided to try Cursor instead. The important part wasn’t the tool switch—it was the way he approached it: thoughtfully, with clear criteria for what he was trying to improve, and a willingness to share what he learned.

He didn’t just change tools and move on. He came back to the group, talked through the tradeoffs, and hosted a lunch-and-learn to walk through his workflow. His excitement was contagious—not because everyone should use the same tool, but because it modeled something powerful: engineers having the agency to evaluate tools critically and bring informed recommendations back to the organization.

That experience reinforced a lesson I’ve seen play out many times. Enablement doesn’t come from locking in a tool and hoping for adoption. It comes from creating space for experimentation, setting clear guardrails around security and cost, and letting trusted engineers help lead the learning.

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
