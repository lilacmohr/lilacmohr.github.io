# You Just Promoted Every Engineer on Your Team

*They didn't get new titles. They didn't get a raise. They got AI agents... and a fundamentally different job. You probably haven't told them that yet.*

---

I've been speculating about a future where the responsibility of writing code sits almost entirely on teams of autonomous AI agents. Most of the engineering organizations I've talked to see this as a futuristic vision - they are still struggling with adoption and trust. That's what made a conversation a few weeks ago so striking. I sat across from an engineering leader who told me her team had already made the shift. Agents were reading specs, writing code, and opening pull requests. Her engineers were still accountable for the outcomes, but they weren't writing most of the code anymore. They were reviewing it, directing it, and developing agentic workflows to optimize not only for volume, but also for quality, security, and reliability.

"How's the team handling it?" I asked.

She shrugged. "Honestly? We're all just winging it."

That shrug is why I'm writing this.

We are in the middle of one of the most significant shifts in how software gets built and most engineering leaders are navigating it with the same playbook they've always used. The metrics don't fit. The coaching frameworks don't quite apply. The org charts definitely haven't caught up.

The shift is visible to anyone paying attention: software development is moving from an activity centered on writing code to one grounded in orchestrating agents that write code. The engineers who used to write every line are increasingly responsible for architecture, strategy, and evaluation. Engineers are beginning to describe it as a move from implementer to orchestrator.

I call it a promotion nobody announced.

This article is for leaders at every stage of that transition - whether your team is still building familiarity with AI tools, actively optimizing how engineers and agents work together, or already running autonomous agent workflows. The shift is coming for everyone at a different pace, and the coaching work starts well before the first agent opens a pull request. What follows covers three things:

- How to recognize what actually changed about the job
- How to coach engineers through an identity shift they didn't sign up for
- How to build the operational infrastructure - specs, decision logs, verification layers, and observability - that makes increasing agent autonomy sustainable and responsible

---

## Where this fits in the AI development journey

There's a useful way to think about where teams are on the AI adoption arc. Early stages are about meaningful engagement - getting beyond compliance and theater into actual practice. The middle stage is about optimizing the partnership: finding the behaviors and flow states that actually get better outcomes.

This article is about what comes after that.

This stage assumes the partnership is working. It asks: what happens when agents start doing the implementation work autonomously, and engineers become the supervisors of that output? What does leadership look like then?

Even if your team isn't there yet, the coaching work described here starts earlier than you might think - the identity shift, the spec discipline, and the accountability culture all take time to build. The leaders who navigate this well started that work before they needed it.

One thing I want to be clear about: this isn't a reason to skip the earlier work. The [2025 DORA State of DevOps report](https://dora.dev/research/2025/dora-report/) found that AI amplifies what already exists in an organization. Teams with strong fundamentals - healthy review culture, small batch disciplines, clear accountability - benefited from AI adoption. Teams without those foundations saw their weaknesses magnified.

Autonomous agent workflows are not a shortcut past the earlier stages. They're what the earlier stages make possible.

---

## The promotion nobody announced

When any engineer joins my team - junior or senior - I don't hand them a feature and walk away. Even someone with decades of experience won't have context on how this codebase is structured, what decisions were made and why, how this team works, or what we're actually trying to build. So I give them that context. I define scope carefully. I make sure someone is checking in, pairing on the hard parts, and reviewing their work not just to approve it, but to help them operate effectively.

That is exactly how you onboard an AI agent, with one key difference: agents can operate at a breadth and speed that no individual engineer can match - running multiple workstreams in parallel, reasoning through complex problems at depth, flagging ambiguities and surfacing tradeoffs when given the right setup. The bottleneck isn't the agent's capability. It's the quality of the context and constraints you give it, and the verification infrastructure you build around it.

Anthropic's own internal research makes this visible. In their [December 2025 study of how engineers at Anthropic use Claude](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic), researchers found that employees use AI in roughly 60% of their work and achieve real productivity gains - but they also report being able to "fully delegate" only 0-20% of tasks. As the researchers describe it, AI serves as a "constant collaborator," but using it effectively requires thoughtful setup, active supervision, validation, and human judgment - especially for high-stakes work. The constraint isn't model capability. It's the investment in context, delegation structure, and quality gates that makes higher autonomy possible.

The engineers who are thriving in this model are the ones who already thought like leads. They decompose problems naturally. They can review across multiple workstreams without losing the thread. They know how to give feedback that actually changes the next output. [The Pragmatic Engineer's Gergely Orosz](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built) has observed the same pattern: senior and staff engineers are adapting to the parallel-agent workflow faster than junior ones - because they were already doing lead-like work. The agents just gave that work a new surface.

The engineers who struggle fall into two camps, and they fail in opposite directions. The first group treats agents like a faster version of autocomplete - staying in the loop on every line, reviewing at the granularity of individual statements, never stepping back to evaluate output as a whole. That's not supervision. That's just slower coding with more steps. These engineers will be outpaced, not because they aren't working hard, but because they never made the shift to a higher level of abstraction.

The second group goes too far the other way: they delegate broadly and skip supervision almost entirely, trusting agent output without building the verification layer that makes that trust warranted. This is where the real risk lives: not in agents being incapable, but in engineers abdicating the oversight role before the infrastructure exists to replace it. You'll end up with code that no one reviewed, security decisions that no one validated, and architectural choices that no one captured. The vulnerabilities don't announce themselves. They ship quietly, in PRs that passed all the tests the agent wrote for itself.

The core competency of the agent era is knowing what to delegate, at what granularity, and with what verification checkpoints in place. That's a leadership skill - and for most engineers, nobody has ever taught them how to do it.

---

## Coaching your engineers into the lead role

I've promoted a lot of senior and staff+ engineers into people management roles over the years. The hardest part of that transition was never technical credibility. The hardest part was letting go of the code.

Some of them struggled for months. "I miss writing code" would surface in almost every 1:1. Without quite realizing it, they'd solve thorny architectural problems all by themselves, take on critical-path features, and pick up whatever implementation work felt meaningful - because that type of hands-on work felt familiar, and because that is where their identity still lived. I had to help these new leaders see something uncomfortable: if you're doing development work on the critical path, you're not in a leadership role, you're a bottleneck wearing a leadership title.

The reframe that worked was force multiplication. A great engineer has exactly one unit of leverage - their own output. A great leader who can raise the floor of every engineer on their team, unblock five people instead of shipping one ticket, create conditions where the team runs faster in their absence than in their presence - that person's impact doesn't add, it compounds. The ones who embraced their role as multipliers stopped opening 1:1s with "I miss writing code" and started with "let me tell you what my team shipped this week." That shift in how they talked about their work was almost always the tell that they'd turned a corner.

I'm watching the same transition play out now, just at a different level. The engineers thriving in this agentic model aren't the ones with the most advanced prompting skills. They're the ones who've made the deeper identity shift: they've stopped grounding their value in "I write good code" and started thinking of themselves as leaders who solve complex problems and deliver business value with a capable AI team. The trust in the agents to handle implementation is inseparable from that shift.

A few weeks ago, a former colleague reached out - someone I'd led through an AI transformation at a previous company. He proudly announced that he closed 82 tickets in the past week using agents for spec refinement, planning, implementation, and testing. The rest of his team, who still used AI as a coding assistant, had closed about 50 combined. He wasn't picking easy tickets. The first thing he said wasn't "look how productive I am." It was: "How do I make sure my team can do what I'm doing?"

That's the multiplier mentality. We talked about documenting his process, building templates his teammates could actually use, and carving out time to mentor and pair with the engineers around him rather than just running more agents himself. The individual productivity was real, but it was also fragile - one person's practice, not a team capability. Getting to team capability requires the same thing it always has: a leader who sees their job as growing others, not outperforming them.

Before you get there, you'll need to get through some resistance. The objections I hear most often are worth taking seriously, because they're not irrational - they're just rooted in a moment that's already passing.

**"AI coding agents aren't there yet. If I shift to this model I'll be introducing garbage into the codebase."** A year ago, I'd have largely agreed. The quality of what today's frontier models produce is genuinely different - not perfect, but meaningfully more capable than what most engineers' mental model of "AI-generated code" is based on. The answer here isn't to dismiss the concern; it's to show what responsible adoption actually looks like. Running as many agents as possible simultaneously isn't the goal. Building a team with defined roles - including quality assurance built into the workflow, not bolted on at the end - is. The engineer I mentioned closed 82 tickets in a week not by removing quality gates but by utilizing review agents to own that layer. The fear of incidents is valid, but the answer is architecture, not abstinence.

**"If I do this, I won't understand my own code."** This one is real, and I've written about it directly - it's the [cognitive drain problem](/articles/cognitive-drain-problem.html), and it doesn't resolve itself. I keep coming back to researcher [Margaret-Anne Storey's work on cognitive debt](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/), which I covered in that series: student development teams who prioritized speed over comprehension for just a few weeks became completely unable to make simple changes - not because the code was too complex, but because no one could explain why design decisions had been made. That's the risk made concrete, and it legitimizes what engineers are worried about. The root cause, though, isn't the agents. It's the identity issue: when engineers define themselves by the code they write, they feel the loss of that connection acutely when agents take over implementation. Engineers who've made the identity shift - who see themselves as problem-solvers and architects rather than code authors - don't report this the same way. The code is still theirs. They designed it, scoped it, specified it, and own it. The implementation path just changed. The concern also points to a real practice: letting agents produce code that no one on the team could reconstruct or explain is a genuine risk. Building in comprehension checkpoints - not just correctness reviews - is part of what the supervision role actually means.

**"I have a master's in computer science. I don't want to be a babysitter to agents."** This is the identity objection in its sharpest form, and it deserves a real answer, not a reassurance. The colleague I described wasn't reviewing AI-generated PRs all day. He was operating at a level of product engineering he hadn't had access to before - deciding how to frame problems, designing the framework for solving them, and evaluating architecture rather than making syntax decisions. He built review agents to handle the QA layer so he could stay at the higher level. What he described wasn't diminished; it was expanded. Your job as a leader is to make that picture visible before the engineer decides the answer is no. If they can only see the babysitting version of the role, they'll resist it - and they'll be right to.

### Building the operational infrastructure

The practical mechanics of that coaching have a new shape. The most important skill to teach right now is spec clarity.

I learned early as a manager that the quality of what I got back was almost entirely a function of the quality of what I put in. Vague assignments produced surprising results. Overly prescriptive ones produced engineers who stopped thinking. Working with agents follows the same principle, taken to an extreme. Practitioners are building what some call a "smart spec" or an AGENTS.md file - a context document that tells the agent what the codebase does, what conventions to follow, what files to touch and what to leave alone, and what done actually looks like. Think of it as an onboarding doc for a very capable new hire who will interpret your instructions directly - and fill in the gaps with their own judgment when something isn't explicit.

Teaching engineers to write good specs is where I'd focus first. That doesn't mean turning engineers into product managers or technical writers. A few practices that compound quickly:

- **Start with a recorded conversation.** Talk through the problem, the proposed solution, and the key architectural decisions - then use AI to turn the transcript into a first draft of the spec. Run a few iteration loops to make sure it accurately reflects what you're trying to build. You end up with a working spec produced through conversation rather than documentation by hand.
- **Require the spec before the agent touches the work.** Run exercises where this is the rule. The discipline of decomposing a task into explicit success criteria is valuable regardless of what the agent produces.
- **Build shared templates.** Externalize the architectural decisions and conventions that currently live in senior engineers' heads. That knowledge benefits the whole team, not just the agents.
- **Run a short retrospective after each agent-driven PR.** Not just "did it pass review," but "what would a better spec have prevented?" That's how supervision skills compound over time, and how you build shared intuition about which classes of tasks are agent-ready versus which still need a human in the driver's seat.

Spec writing is the input discipline. Decision capture is the output discipline - and it's equally important. When an agent makes a meaningful architectural choice, selects one approach over another, or hits an ambiguity and resolves it unilaterally, that reasoning needs to be captured somewhere other than the agent's context window, which doesn't persist. I've written about this in depth in [Building the Memory Layer](/articles/building-the-memory-layer.html): the teams that run into trouble aren't the ones whose agents make bad decisions - they're the ones whose agents make decisions that no human can later explain or reconstruct. Maintaining decision logs, AGENTS.md context files, and lightweight architectural records is now part of the job description for an engineer leading agentic workflows. It's the difference between a system your team can debug and evolve, and a black box that works until it doesn't.

The other thing worth establishing explicitly as a team - especially early - is where agents are authorized to operate without close human oversight. Treat this as a starting point, not a permanent boundary. The goal isn't human gatekeeping; it's **responsible autonomy**: continuously expanding what agents can handle safely by building the verification infrastructure that makes expanded autonomy trustworthy.

The right question isn't "is this task too important for an agent?" It's: "do we have the review mechanisms in place to catch it when the agent gets it wrong?" A team that has built robust automated testing, security scanning agents, and architectural review checkpoints can safely delegate work that would be reckless to hand off without those systems. A team that hasn't built that layer yet needs a human in the loop - not because agents can't do the work, but because the safety net isn't there yet.

A practical way to start - without waiting until you've built everything - is to map your current engineering workflow and label each step. Which parts are human-owned right now? Which are already agent-assisted? For each step that's still human-owned, ask one question: what would we need to build to hand this to an agent responsibly?

That exercise converts a static capability picture into a roadmap. Well-defined, repetitive work - writing tests, generating documentation, setting up scaffolding - is where most teams find their first agent-owned steps, because the verification is straightforward and the blast radius of an error is small. The important thing isn't where you start. It's whether each step you hand to an agent comes with a clear answer to what verification needs to exist before the next step moves over. Teams that stall are the ones who treat the early wins as a ceiling rather than a foundation.

The engineers who are ahead aren't asking "can the agent handle this?" They're asking "what do I need to build so I can confidently let the agent handle this?" That shift turns readiness from a prerequisite into a practice.

A great AI manager's job isn't to hold the line. It's to keep moving it - responsibly, with quality and security as the constants, and human judgment deployed where the verification infrastructure doesn't yet exist.

---

## Measuring productivity when you didn't write the code

[I've written separately](/articles/your-ai-metrics-are-lying-to-you.html) about the broader problem of AI metrics - why acceptance rates and lines-of-code statistics mislead more than they reveal, and what to track instead. That article covers the foundational measurement questions. This section is narrower: what signals are specific to agent supervision, and what do they tell you about whether your engineers are actually leading well?

The signals you're watching for change depending on where the team is on the maturity arc, and conflating the two stages is a common mistake.

In the early stages of working with agents, high human supervision signals are what you want to see: engineers interrupting frequently, meaningful back-and-forth between human and agent before output is accepted, human review gates on agent-authored PRs. [Anthropic's own research on Claude Code](https://www.anthropic.com/research/measuring-agent-autonomy) found that experienced users interrupt agents *more* often than newer ones - they've developed calibrated judgment about where human intervention actually changes the outcome. At this stage, I'd be wary of an engineer doing the opposite: single-shotting agent outputs with no human in the loop, high acceptance rates on everything, no visible friction in the workflow. That's not efficiency. That's the absence of oversight dressed up as confidence.

As the organization matures, the pattern you're looking for shifts - but not by removing oversight. By systematizing it. The human review gates get replaced by agent review gates: automated security scanning, architectural consistency checks, test suites that exist before the code does. What you're tracking isn't whether supervision is happening. It's *who or what* is doing it. In a mature agentic workflow, human code rewrites decline not because quality expectations dropped, but because verification moved earlier in the pipeline and agents are catching each other's errors before a human ever sees them.

The engineers you want to worry about are the ones whose human supervision signals decline without a corresponding investment in that automated verification layer - who are handing off more because they're trusting more, not because they've built the infrastructure that earns that trust. Low human intervention is a destination. It only means what you want it to mean if you can point to what replaced it.

![The Supervision Maturity Signal](images/supervision-maturity-signal.png)

Three other signals are worth building visibility into, even if your current tooling makes them hard to capture cleanly:

- **Rework rate on agent-authored PRs.** What percentage merge without significant human intervention? High rework points to unclear specs or insufficient verification; very low rework might mean the tasks were scoped too narrowly to be meaningful.
- **PR size.** Are agent-authored PRs staying within your team's normal size norms? AI-assisted PRs tend to run larger than human-written ones, and larger PRs correlate directly with worse delivery stability - the same problem it's always been, just with a new source.
- **Code churn.** Are you tracking reverts and rewrites specifically for agent-authored code? [Research shows](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) AI-generated code is reverted or substantially modified at nearly double the rate of human-written code within two weeks. Acceptance rate at merge time misses this entirely.

None of these are clean metrics yet, but asking these questions in a team retrospective is a real temperature check - and it surfaces the supervision gaps that no dashboard will show you.

This points to a responsibility that few engineering orgs have assigned yet: building the observability layer for agentic workflows. Most of the dashboards teams rely on today were designed to track human and code activity - commits, PRs, deploy frequency, ticket throughput. They go partially blind in agent-to-agent pipelines, where a significant portion of the work happens in inter-agent communication that never surfaces in a pull request or a standup. An engineer who has built a well-functioning agentic team shouldn't just be running it - they should be instrumenting it: capturing what each agent was asked to do, what it decided, where it handed off, and where it failed silently. That traceability is what makes the pipeline auditable, debuggable, and improvable over time. Building that visibility is new engineering work, and it belongs to someone. In the agent-era org, it belongs to the engineer running the workflow.

---

## What Agile learned that still applies

There are already documented cases of AI agents deleting production databases, overwriting code they were told to preserve, and confidently reporting that rollback was impossible when it wasn't. What keeps surfacing in the aftermath is a phrase that should alarm every engineering leader: "It's not my code."

Accountability erosion is quiet. It shows up as deferred refactoring, slower incident response, technical debt that nobody owns - and once the culture accepts "the agent did it," it's very hard to walk back.

The software industry has navigated this kind of accountability gap before. The Agile movement emerged, in part, as a response to systems where the people writing requirements were separated from the people writing code - where "handoff" was a process step rather than a shared understanding. The Agile Manifesto was signed 25 years ago. The core insight behind it - that the people writing requirements can't be separated from the people accountable for outcomes - applies directly here. Among the practices that Agile produced, test-driven development turns out to be the most important one to carry into the agent era.

The reason is precise: TDD prevents agents from writing tests that verify broken behavior. When the tests exist before the code, agents can't cheat by writing tests that confirm incorrect implementations - or by deleting tests that surface their errors. [Kent Beck](https://tidyfirst.substack.com/), who invented TDD, has been writing about why the practice becomes more important in the AI era, not less, for exactly this reason.

In practice, teams are now using AI agents to review AI-generated output - analyzing code for security vulnerabilities, architectural consistency, and quality issues. Agentic quality control is becoming standard. Quality control, though, only catches problems - it doesn't prevent the incentive structures that cause them. TDD prevents them.

Beyond TDD, the Agile principles worth deliberately applying in agent workflows are these:

**Small batch sizes.** The [Thoughtworks Technology Radar](https://www.thoughtworks.com/radar/techniques) flagged a real risk in spec-driven development: detailed upfront specs for agents can recreate waterfall antipatterns if you're not careful. The mitigation is the same one Agile prescribes for human work - decompose into the smallest deliverable increment, ship it, learn from it, spec the next piece. An agent PR over 200 lines should trigger the same conversation it would for a human developer.

**Retrospectives on agent output.** What specs produced clean output? What classes of tasks kept coming back for rework? Where did the agent confidently produce something wrong? This is how a team's supervision skills improve. It's also how you catch emerging patterns before they become systemic problems.

**WIP limits.** [Anthropic's internal research](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic) describes engineers orchestrating multiple agents in parallel - running many Claude instances simultaneously to explore different approaches - and it's genuinely exciting as a capability. The constraint isn't agent generation speed. It's verification capacity: human or automated. An engineer who has built solid agent-checking-agent pipelines can sustain far more parallel work than one who is reviewing every output manually. The right expansion path is to build the verification layer, then let the agent count follow. Running more agents than your oversight infrastructure can cover just multiplies work in progress without multiplying throughput.

**Clear use case definitions.** Define where agents are authorized to operate with or without human oversight - and revisit those definitions regularly. The boundary isn't set by task type; it's set by the verification infrastructure your team has actually built. A team with robust automated security scanning and pre-existing test suites can safely run agents on work that would be reckless to delegate without those systems in place. This is about matching the risk profile of the task to the verification capacity of the team - and continuously building more capacity.

There's one accountability question the industry still hasn't resolved: when an agent writes a bug, a human approves the PR, and it reaches production - whose defect is it?

The answer is the human's. Full stop. An engineer who approves a PR owns what's in it, regardless of who generated the first draft. Establishing this norm early - before an incident makes it necessary - is the single most important cultural intervention a leader can make right now.

---

## The questions we don't have answers to yet

The most intellectually honest thing I can say about this moment is that we're still writing the playbook. The capabilities are moving faster than our governance frameworks. The frameworks are moving faster than our cultural norms. Engineering leaders are navigating a gap between what the tools can do and what we know how to manage responsibly.

That's not a reason to wait. It's a reason to instrument carefully, stay close to the evidence, and be skeptical of both the hype and the fear.

Here are the questions I'm sitting with - and I don't have clean answers to any of them:

- **How do engineers maintain deep technical judgment when they're writing less code?** The concern is real: developers who stop writing code lose the calibration that makes their code review consequential. The field has no reliable answer to this yet.

- **What does career development look like when the work shifts from technical execution to technical direction?** The staff engineer who excels at agent supervision is doing something genuinely different from the staff engineer who excels at systems design. Are they on the same track? Should they be?

- **How do we hire for what actually matters now?** Spec clarity, delegation judgment, verification discipline, accountability orientation - none of these appear in a typical technical interview loop. We're still interviewing for the old job.

- **When does the organizational benefit actually kick in?** Real adoption data shows meaningful gains - [TELUS reported](https://claude.com/customers/telus) their engineering teams shipping code 30% faster and saving over 500,000 hours. The [METR randomized controlled trial](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), however, found experienced developers on complex, familiar codebases were 19% slower with AI tools than without - while believing they were 20% faster. The gap between individual experience and organizational outcome may matter more than either number alone.

The companies that navigate this well won't be the ones that move fastest toward autonomous coding without the infrastructure to support it. They'll be the ones that build the verification layer, the accountability culture, and the measurement systems that make higher and higher autonomy sustainable - and keep moving the line deliberately from there.

---

## The leadership this moment requires

When I was in graduate school in Denver, students could buy $5 tickets to the Colorado Symphony on the morning of a performance. I went almost weekly. I'd sit in the nosebleed section and lean over the balcony railing to see the stage - the musicians arranged in their sections, the conductor at the center, baton in hand, arms moving like a magician summoning something that didn't exist yet.

I watched the conductor more than I listened to the music. There was something magnetic about the role: holding all of it together through gesture alone, translating intention into collective sound.

In one performance, I saw something I've never forgotten. Mid-piece, the conductor lowered his arms. He stepped back from the podium, crossed them across his chest, and began walking slowly toward the wings. The orchestra didn't stop. The music continued - full, complex, exactly right.

My first thought was confusion. Was his role ornamental? Did any of it matter?

Then I understood. He wasn't demonstrating that he was unnecessary. He was demonstrating the opposite. He had built an orchestra that could sustain its own coherence - not because each musician was simply talented, but because of what his leadership had created: the shared understanding, the internalized standards, the trust between sections. The baton was never really the point. The empty podium was the proof of everything the baton had done.

Years later, when I wrote a personal leadership statement for a workshop, I came back to that image. I wrote that success, for a leader, looks as simple as an empty conductor's stand - knowing you can step away and the orchestra will play on.

I was writing about people leadership then. I keep returning to that image now, in a different context entirely.

The engineers on your team didn't apply for a management job. They applied to build things.

Some of them will find this transition energizing - the ones who already think like leads, who like holding context across multiple workstreams, who find the review and direction work satisfying. Some will resist it, not because they're incapable, but because it genuinely isn't the job they signed up for. Both reactions are valid. Your job is to coach both groups.

For the ones who resist - who feel like stepping back from the code means losing the thing that made them good - the conductor is a useful frame. Stepping away from implementation isn't the absence of contribution. It's what contribution looks like at this level. If your agent pipeline can execute cleanly without you becoming the bottleneck, that's not evidence that you've been made redundant. That's evidence that you built something worth having. The empty podium isn't failure. It's the whole point.

Helping engineers make that shift is an AI enablement problem - one that belongs to you.

The promotion happened whether or not anyone announced it. Your engineers are leading AI agent teams right now. The question isn't whether they're ready. It's whether you've given them what they need to lead well.
