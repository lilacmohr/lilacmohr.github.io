# Cognitive Drain: The Silent Risk of AI-Assisted Development

*Part one of a three-part series. Part two: [What Just Happened? Capturing Engineering Decisions in the Age of AI](/articles/what-just-happened.html). Part three: [Building the Memory Layer: Scaling Decision Capture Across Your Organization](/articles/building-the-memory-layer.html).*

An engineer told me recently: "I enjoy working with a coding agent, but after a while I feel like I don't know my own code anymore... and that scares me."

I could relate to that feeling. My thoughts immediately went to a recent experience — I'm sure you have one, too — where I realized that a memory I thought was ingrained was simply gone. I wasn't able to identify when or how I'd lost it, and *that* scared me the most. That kind of loss — gradual, invisible, and impossible to timestamp — is the hardest kind to prepare for. You don't see it coming or notice it leaving; one day you reach for something and it simply isn't there.

The same thing happens to teams, just distributed across every engineer and far slower to surface.

Picture a pool that's slowly losing water — not from a visible leak or a dramatic rupture, but seeping steadily through a hairline crack somewhere in the foundation. The water level drops a fraction of an inch every day. The pool still looks fine, people are still swimming, and your metrics say everything is normal. And then one morning, without any single event you can point to, the water is too shallow to dive in.

That's what AI coding agents are doing to your team's system knowledge right now. Engineers aren't losing their skills or becoming less capable overnight. They're shipping more than ever. But every time a coding agent writes a solution that an engineer accepts without fully reconstructing the reasoning, a small amount of system understanding fails to form. Every time a PR merges because tests passed and the AI flagged it as low risk — without anyone articulating why the approach was chosen over alternatives — a small piece of design rationale goes uncaptured. Multiply that across multiple teams, across months, and you get an organization that is objectively shipping faster while quietly losing its collective ability to understand, extend, and confidently change what it's building.

There's a term for this phenomenon — cognitive debt, or cognitive drain. Like reaching for a memory and finding nothing there, most engineering leaders won't notice the loss until the water is already too low.

---

## The Old Risk Had a Face

Even before the prevalence of AI in software development, institutional or tribal knowledge lived in the heads of engineers. It's the type of knowledge that can't be downloaded: the accumulation of experiences building an organization's systems, solving problems, and making mistakes. It's also a well-known risk — one that leaders have been working to mitigate for years, under the label 'bus factor' (or 'win the lottery factor', as I like to reframe it).

I experienced the acute version of this firsthand. When a principal engineer on my team announced he was leaving, the panic was immediate and unanimous. Everyone understood what was walking out the door with him. The question "what does this code do?" wasn't the concern — AI could help us with that. What we feared losing was the deeper tacit knowledge built over years in the trenches: why the service boundary between two components was drawn where it was, which integration assumptions had quietly become load-bearing, and what had been tried before the current architecture and why it failed. We scrambled to organize knowledge transfer sessions and record brain dumps. It helped, but it was reactive and fragile, triggered by a departure date and dependent on asking the right questions before the wrong moment.

The traditional 'bus factor' risk is real, but it has one property that makes it navigable: it is visible. There is a face attached to it, a calendar event, and a clear moment of loss that you can point to and organize a response around.

What AI coding agents are introducing is categorically different. There's no departure, no trigger event, and no single moment you can point to and say "that's when we lost it." The drain is gradual, distributed across every engineer on the team, and invisible to every metric most organizations are currently tracking. Velocity is up, deployment frequency is up, and incidents haven't spiked. But somewhere underneath all of that, your team's shared understanding of its own system is getting shallower every sprint.

---

## Why AI Accelerates the Drain

To understand why AI specifically accelerates organizational knowledge loss, we need to look at how engineers built system knowledge before agents existed. It wasn't from documentation — most engineers will tell you documentation is always out of date. It was from the act of writing and debugging code itself: struggling through a problem, making decisions, encountering failure, and building a mental model through direct engagement with the system. That process was slow and sometimes frustrating, but it was also how understanding formed and accumulated. When onboarding new engineers, I don't want them to spend weeks reading through documentation; I want them to jump right into the code and solve problems. They'll struggle at first, but that's how they'll begin building system knowledge.

Coding agents short-circuit that process — they don't eliminate the work so much as they change its nature, and how much depends on how much autonomy the agent has.

In the AI-assisted model that most teams use today, engineers still drive problem-solving but at a higher level of abstraction, delegating implementation decisions to the agent. That's often a genuine improvement where engineers spend less time on boilerplate code and more time on design. But it also means engineers are increasingly removed from the lower-level implementation decisions where system knowledge actually forms. In fully agentic systems, the shift goes further: the engineer becomes a reviewer and approver, distanced from both the reasoning and the result. Most organizations are at the first stage today, though the second is arriving quickly.

In both cases, reviewing AI-generated code does not produce the same depth of system understanding that writing it does — especially when that review is optimized for correctness rather than comprehension.

For years I told junior engineers that reviewing pull requests was one of the best ways to learn a codebase. A front-end engineer who wanted to understand the backend should start reviewing backend PRs — read the code, ask questions, and build a mental model through repeated exposure. It worked, because that advice assumed the reviewer was engaging with decisions a human made, with reasoning that could be surfaced by asking "why did you do it this way?" Reviewing AI-generated code for correctness doesn't work the same way. The questions are different, the reasoning trail is thinner, and the review is optimized for "does this work and is it safe to ship?" — not "do I understand why this system is shaped this way?" Those are different cognitive activities, which is why the industry's current response to this problem — engineers still own and must carefully review all AI-generated code — is necessary but not sufficient. Accountability and comprehension are not the same thing.

![How your engagement with AI shapes system understanding](images/ai-engagement-and-understanding.png)

Early research on cognitive engagement during AI-assisted work tells a sobering story. A [2025 MIT Media Lab study](https://www.media.mit.edu/publications/your-brain-on-chatgpt/) used EEG to measure brain activity while participants completed writing tasks with and without AI assistance. Participants using LLMs showed the weakest neural connectivity overall, with notably lower engagement in prefrontal areas associated with deep reasoning and decision-making, compared to those using search engines or no tools at all. The work felt productive and the output looked correct, but the comprehension simply wasn't forming at the same depth.

I want to be honest about the limits of that evidence: the MIT study was initially published as a preprint, and the research is still early. What I'm drawing on is the intersection of that research and a couple of years of watching for this pattern deliberately in postmortems, in code reviews, and in conversations with engineering leaders who have started asking the same questions. The data isn't definitive, but the pattern shows up often enough that I've stopped treating it as theoretical.

The clearest illustration I have came from analyzing my own behavior. I recently built a tool to analyze my own Copilot interaction logs, with a goal of visualizing the flow of work and understanding collaboration behavior. One aspect of this tool is using an LLM to infer prompt intent, to tell the story of what I was trying to accomplish in each session. When I looked at my data, the majority of my prompts weren't aimed at writing new features or fixing bugs, as I would have expected. They were questions about my own code: *What script runs the pipeline? What is this function doing? Where is the logic that handles X? Why was this decision made?*

I had worked closely with my AI coding assistant throughout the project, acting as orchestrator and project manager. I understood what I'd built conceptually, but I was completely detached from the execution details — asking questions about code I'd nominally authored as if I were a new hire onboarding to someone else's system. The project was a low-stakes prototype, so the consequences were manageable, but the pattern was not reassuring. On a team working with AI on production code — even one where engineers are reviewing AI-generated pull requests for correctness and risk — this same detachment doesn't stay theoretical for long.

The effect compounds in a way that technical debt doesn't. Technical debt is a property of the code — even if no one fixes it, it's still there to be found. Cognitive drain is a property of people's understanding, and unlike code, understanding cannot be recovered by simply reading the commit history.

The pattern that emerges in practice points in one direction: teams that hit critical cognitive drain don't just slow down — they reach a point of genuine paralysis, unable to make confident architectural decisions, unsure how to diagnose unexpected behavior, or quietly avoiding changes that feel too risky to make. Researcher Margaret-Anne Storey [describes student development teams](https://margaretstorey.com/blog/2026/02/09/cognitive-debt/) who, after just weeks of prioritizing speed over comprehension, were completely unable to make simple changes — not because the code was too complex, but because no one could explain why design decisions had been made or how different parts of the system were supposed to work together. The code was still there, but the theory behind it had drained away.

Every team reaches this point on a different timeline, but the dynamic is the same.

There's an assumption embedded in how most teams think about this risk: that even if engineers aren't retaining system knowledge as deeply as they used to, the AI is. That the reasoning is *somewhere* — in the model, in the chat history, retrievable if you need it. It isn't. AI coding agent sessions are stateless by default. The back-and-forth your engineer had with the agent to arrive at an architectural decision — the alternatives that were considered, the constraints that shaped the approach, the assumptions baked into the final choice — disappears when the session closes. It was never written down or committed — it lived in a conversation window, and then it didn't. The knowledge isn't shifting from human brains to AI brains; it's evaporating. Cognitive drain isn't a transfer problem. It's a loss problem.

![Cognitive drain isn't a transfer problem. It's a loss problem.](images/cognitive-drain-transfer-quote.png)

---

## What Cognitive Drain Looks Like Before You Name It

Part of what makes this risk hard to manage is that it doesn't produce an immediate incident — the signals are softer, earlier, and easy to rationalize as other things.

The most diagnostic signal I've found is what happens in incident postmortems. When cognitive drain has taken hold, the team can describe what happened but struggles to explain why the system was designed to behave that way. "I'm not sure why it does that" in an incident review isn't a performance problem — it's a comprehension signal, and it surfaces there before it surfaces anywhere else.

A subtler tell is escalation creep. Mid-level engineers start routing "is this the right approach?" questions to Staff+ for decisions that should be within their existing context. It can look like healthy mentorship, but what's actually happening is that the ambient shared knowledge engineers would normally draw on quietly isn't there anymore, and the questions migrate upward to fill the gap.

Then there are pull requests that cross service boundaries or touch shared contracts with no annotation of the dependency reasoning. You can read every line of the diff and still not know why the change was made this way — what the alternative was, what constraint ruled it out, or whether the engineer who wrote it understood the contract they were modifying. Tests pass, the AI risk summary looks fine, and it ships. The decision rationale exists nowhere in the codebase — not in the PR description, not in a commit message, not anywhere.

If you're seeing any of this on your team, the drain is already underway.

---

## The Question Underneath the Metrics

For most teams right now, the shared understanding built up before AI arrived is still doing its job. The question is how long that holds.

The question worth sitting with isn't whether you're shipping — it's whether your team understands what it has built well enough to change it with confidence. Those are different questions, and for the last several years, the answer to the first one has been standing in for the answer to the second.

![The question worth sitting with is not 'are we shipping?' It's 'do we understand what we've built well enough to change it with confidence?'](images/cognitive-drain-understanding-quote.png)

AI-assisted development makes that substitution more dangerous, because it widens the gap between output and comprehension faster than anything that came before it.

The metrics will catch up eventually, and the question is whether you start measuring comprehension alongside output now, or after the first engineer surfaces from a two-week incident unable to explain why the system behaved the way it did.

Naming the risk is the first step. The next two articles in this series cover what to do about it: [What Just Happened?](/articles/what-just-happened.html) addresses the individual practices for capturing decisions before their reasoning evaporates, and [Building the Memory Layer](/articles/building-the-memory-layer.html) covers how to scale those practices across an organization and prepare for the governance demands of autonomous agents. But you can't build those practices until you've accepted that the drain is real, that it's already happening, and that your current measurement system isn't set up to show it to you.

The pool still looks fine. That's the problem.
