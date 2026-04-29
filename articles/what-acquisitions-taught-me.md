# What Two Acquisitions Taught Me

When the GitPrime acquisition was announced, everyone in the Zoom call cheered but I stayed quiet. My first thought was: *I just lost my job.*

As a Director of Engineering, I wasn't part of the acquisition discussions - the announcement was the first I'd heard of it. The horror stories were everywhere - talent walks out, products get sunset, cultures get absorbed and flattened. I didn't know what to think. So I sat quietly while everyone else celebrated, running through the scenarios in my head.

What I couldn't have known then: I would stay with that same product for almost eight years. The acquisition would give me career growth opportunities I couldn't have imagined, and those years would teach me more about engineering leadership than the previous twenty years of my software engineering career combined.

There were lessons to learn, too - some of them expensive.

---

## The Integration Trap

The statistics on acquisition failure are sobering. Research by NYU Stern professors Baruch Lev and Feng Gu, [analyzing 40,000 M&A deals over 40 years](https://fortune.com/2024/11/13/we-analyzed-40000-mergers-acquisitions-ma-deals-over-40-years-why-70-75-percent-fail-leadership-finance/), found that 70–75% fail to deliver expected value - and that failure rate has been rising, not falling. Harvard Business Review puts the range at [70–90%](https://hbr.org/2020/03/dont-make-this-common-ma-mistake). The primary culprit, across nearly every study: integration difficulties.

Most explanations stop there, but I've spent years thinking a level deeper by asking *which* integration decisions cause the damage, and why they're so hard to get right in the moment.

When a larger company acquires a smaller one, there's a natural and understandable impulse to make things consistent: the same design library, the same architecture, the same processes.

The problem is that not all integration creates value for the customer. Some of it just creates conformity for the organization, and when you're building software, those two things are not the same.

After GitPrime became Pluralsight Flow, we faced exactly this pressure - and we didn't always push back on the right things.

---

## The Reskin That Wasn't

One of our first major integration projects was converting our frontend to use the Pluralsight Design Library and move all pages to dark mode.

Leadership framed it as a reskin, and at the time, that seemed reasonable. The engineers closest to the front-end codebase had concerns early, but the full complexity only became clear once we were in it. Six months of engineering time later, it was obvious why.

A true reskin swaps colors and fonts. What we actually faced was a rewriting effort - rebuilding component logic, rethinking interaction patterns, reconciling design systems that had evolved in different directions. The customer experience changed and the engineering investment was substantial. At the end of it, however, we had a product that looked more like Pluralsight but didn't work better for the people who used it every day.

That wasn't nothing - brand cohesion has real value, and customers care about a consistent experience across a platform. We went in thinking it was a paint job and discovered it was a renovation. The gap between those two things cost us months that could have been spent on new features.

**The lesson:** Before committing to any integration work, ask whether the outcome creates value for the customer or consistency for the organization. Sometimes the answer is both. Sometimes it's only one. Know which one you're solving for before you start.

---

## The Architecture That Worked Everywhere Except Here

Pluralsight had a mature Domain-Driven Design architecture - bounded contexts with clearly defined ownership, independent deployability, and clean separation of concerns. It worked well for them and was genuinely good engineering.

We were encouraged to implement the same model on Flow's monolithic system.

The concept was sound, and it solved real problems: a growing team stepping on each other in the same monolithic repo and a code-freeze deployment process instead of continuous delivery. Independent deployment and clearly bounded domains were things we wanted. One aspect of that architecture - maintaining a copy of the database in every bounded context - turned out to be the wrong fit for our specific customer base.

Flow had on-premises, self-hosted customers. For them, eventual consistency wasn't an abstract architectural trade-off. We implemented change data capture with Debezium, which worked most of the time, but when things went wrong, eventual consistency was measured in days - that's not eventual as in seconds or minutes - that's eventual as in your data might catch up by the end of the week. To be fair to Domain-Driven Design: you're not supposed to copy the entire database into every bounded context, just the relevant tables. The tight coupling in our monolithic database, however, made that impractical, which is part of why the failure mode was so severe.

That's not an architecture problem. That's a context problem. The pattern was right for Pluralsight's deployment environment. It was wrong for ours. Because we didn't think that through before committing to the migration, we spent months on infrastructure work that yielded mixed results. Some of it was genuinely valuable - organizing teams around domains and enabling continuous independent deployments. The rest we had to abandon: we rolled back to a single database, and all the work on CDC and synchronization was thrown away.

The DORA research on software delivery performance is instructive here. [DORA's multi-year findings](https://dora.dev/guides/dora-metrics/) consistently show that deployment frequency and lead time for changes are among the strongest predictors of organizational performance - and that these metrics degrade quickly when teams take on large, undifferentiated infrastructure work that doesn't map to customer outcomes. We were experiencing that degradation in real time, without the vocabulary to name it.

**The lesson:** Good architecture is context-dependent. Before adopting the parent company's technical patterns, map them against your specific constraints: your deployment model, your customer profile, your data requirements. The question isn't whether the pattern is good. It's whether it's good *here*.

---

## What to Integrate, and What to Leave Alone

These two experiences gave me a framework I've used in every acquisition context since: **distinguish between integration that creates shared value and integration that creates organizational symmetry.**

Authentication integration, for example, was exactly right. A customer using multiple Pluralsight products shouldn't have to manage separate credentials. That integration directly reduced friction for real users. The engineering investment mapped to customer value.

The design library conversion and the architecture migration were different. They made the organization feel more cohesive. They satisfied internal stakeholders. The customer benefit was indirect at best, and the cost to engineering velocity was concrete and immediate.

The test I now apply before any integration decision: *If we didn't have a parent company asking for this, would we build it?* If the answer is no, that's not a reason to refuse - there are legitimate organizational benefits to integration beyond direct customer value. It is, however, a reason to be honest about what you're trading and why.

McKinsey's research on technical debt puts a useful frame around the cost of getting this wrong: companies that allow integration-driven technical debt to accumulate can find engineers spending [up to 75% of their time](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity) servicing that debt rather than building new value. Even where the architecture migration delivered value - better team boundaries, continuous deployments - the portions we had to unwind cost us months we hadn't planned to spend, against a deployment model we hadn't fully thought through.

---

## The Culture Problem Is Harder Than the Technical Problem

The technical mistakes were expensive. The cultural ones would have been more so.

After the acquisition, I made a deliberate choice: I wanted the Flow team to be *part* of Pluralsight, not a foreign object inside it. That meant showing up - joining company-wide guilds, participating in book clubs, engaging with the mentorship program, making sure our engineers had relationships across the broader organization. Acquisitions fail when the acquired team stays siloed, resents the parent company, or waits to see what happens before committing. I didn't want that.

I also wanted to protect something: the agility that had made GitPrime worth acquiring in the first place.

Startups move fast because decisions are made by small groups of people who are close to the problem. They ship quickly because there's no approval chain between an idea and a deploy. They stay scrappy because there's no bureaucracy to absorb the impact of every change. That's not incidental to a startup's value - it often *is* the value. An acquirer who absorbs all of that into their existing process can inadvertently destroy what they paid for.

The model that worked for us: **a startup within a larger organization.** Flow ran as its own business unit. We maintained our own roadmap, our own decision-making cadence, our own ways of working. We were part of Pluralsight - culturally, socially, organizationally - but we operated with the autonomy of a team that still had something to prove.

There's a name for this in the management research literature. Organizational theorists Charles O'Reilly and Michael Tushman at Harvard and Stanford call it the [ambidextrous organization](https://hbr.org/2004/04/the-ambidextrous-organization) - the ability to simultaneously exploit existing capabilities (the parent company's stability, resources, and distribution) while exploring new ones (the startup's agility and product focus). In their study of 35 attempts at breakthrough innovation, more than 90% of efforts structured as ambidextrous - separate units with their own processes and cultures, integrated at the senior leadership level - succeeded, compared to 25% or fewer for teams embedded directly into the parent's operating structure.

That gave our engineers the best of both: the stability, benefits, and professional network of a large company; the speed, ownership, and directness of a startup. I've seen this model work well enough in practice that I'd advocate for it in almost any acquisition context where the acquired product needs to continue executing independently.

---

## What I Did Differently the Second Time

When Pluralsight Flow was later acquired by Appfire, I was Head of Engineering - the most senior technical leadership role at Flow - and was involved in the acquisition process from the beginning. I had the benefit of having made the expensive mistakes already, and this time I had a seat at the table to do something about it.

The first question I asked was not *how do we integrate* but *what actually needs to connect?* I was specific about integration points that created real value, and skeptical of integration work that was primarily about organizational aesthetics. I was more willing to push back when the answer to "why are we doing this?" was "because that's how we do it here."

The clearest example of that came early. Appfire's existing portfolio was tightly integrated into the Atlassian ecosystem - every product they owned was Jira-native. Flow, by contrast, was a standalone application with data integrations across a large number of vendors. The gravitational pull toward a Jira-only focus was real and understandable: it would have made Flow look more like everything else in the portfolio.

It also would have destroyed much of what made Flow valuable. A significant portion of our customers weren't Atlassian shops, and a Jira-only roadmap would have meant walking away from them. Senior leadership agreed, and we made the call explicitly: Flow would continue running as an independent business unit, maintaining its own product and technical roadmap. Rather than focusing on technology integration between Flow and Appfire's existing product line, the priority shifted to cross-selling and building stronger customer relationships across both bases. The integration that made sense was commercial, not architectural.

I was also more intentional about protecting delivery velocity during the transition. Acquisitions create uncertainty, and uncertainty makes teams slow down - waiting for direction, avoiding risk, holding off on long-term investments. The most important thing a leader can do in that period is keep the team shipping - not because the work won't change, but because momentum is easier to maintain than to rebuild.

Appfire also did something early that I've thought about since: shortly after the acquisition was announced, their leadership organized an offsite so the Flow team could meet Appfire leadership and team members in person. It wasn't a strategy session or an integration planning meeting. It was an investment in belonging - giving people on both sides a chance to become real to each other before the hard work of merging two organizations began. That kind of gesture doesn't show up in any integration plan, but its impact on how the team experienced the transition was immediate and lasting. It's the kind of thing an acquirer can do that costs very little and prevents an enormous amount of cultural damage.

---

## What This Means for Any Acquired Engineering Team

These lessons come from a specific kind of acquisition - one where the goal was to add a distinct product to a portfolio and keep it running. Acqui-hires, team consolidations, and capability rollups have different dynamics, and some of this will apply more directly than others.

If you're an engineering leader stepping into an acquisition - either as the acquired or the acquirer - a few things I'd put in front of you:

**Map integration decisions against customer value, not organizational symmetry.** Some integration is genuinely good for customers. Some is good for internal stakeholders. Some is just habit. Know which one you're doing.

**Respect context before adopting patterns.** Good architecture from the parent company may be the wrong architecture for your product, your customers, or your deployment model. Understand the constraints before you commit.

**Protect what made the product worth acquiring.** Agility, directness, and speed of decision-making are not soft perks. They're often the source of the value that justified the acquisition. Be deliberate about what you preserve.

**Make the team part of the larger culture without making them disappear into it.** Integration and absorption are different things. Flow engineers joined Pluralsight guilds, participated in mentorship programs, and built relationships across the broader organization - and they did all of that while still maintaining their own roadmap, their own decision-making cadence, and their own ways of working. That's what integration looked like. Absorption would have meant losing those things. You want the first. The second often destroys what you were trying to integrate.

---

The room cheered when the GitPrime acquisition was announced. I sat there quietly, convinced my job was over.

What I didn't understand yet: the acquisition wasn't an ending. It was an accelerant - for my career, for the product, and eventually for the lessons that would make me better at every transition that came after.

Every acquired engineering team is going to face pressure to look more like the parent. The job of engineering leadership is knowing which pressures to absorb, which to push back on, and which architectural decisions will cost you a year of competitive momentum.

That judgment doesn't come from a framework. It comes from having made the expensive mistakes first - and being honest enough to name them. After two acquisitions, the lesson reduces to this: protect the thing they paid for. Everything else is negotiable.
