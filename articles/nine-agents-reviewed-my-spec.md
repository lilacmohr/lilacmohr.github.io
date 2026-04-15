# I Had 9 AI Agents Review My Spec. Here's What They Found That I Couldn't.

*How a multi-agent review protocol caught a factual error, a library trap, and an architectural contradiction  -  before a single line of code was written.*

---

Every engineer I've talked to who gets serious productivity gains from AI coding assistants says some version of the same thing: the quality of what comes out is determined almost entirely by the quality of what goes in. Not the model, not the prompts  -  the requirements.

This matches what research is starting to show. Studies in 2025 and 2026 on what's being called Specification-Driven Development suggest top-performing teams have flipped the traditional effort model, spending the majority of their time on requirements and only a fraction reviewing generated code. The reason is fundamental: AI agents are hyper-literal. They don't have the intuition a human developer uses to fill gaps. When a spec is ambiguous, an agent makes a plausible assumption and proceeds  -  silently, often wrongly. By the time you find the mismatch, there's code to unwind, not just words to fix.

I build these projects deliberately - it's how I develop and pressure-test practices before recommending them to the engineering organizations I work with. I'd been doing spec-driven development for my personal project, [ai-radar](https://github.com/lilacmohr/ai-radar) - a Python pipeline that ingests AI content from Gmail newsletters, ArXiv, RSS feeds, and Hacker News, filters it for relevance using LLMs, and produces a structured daily digest. I'd spent real time getting the spec right. I'd had Claude question me until it was at least 90% confident we were on the same page before it drafted anything. I thought the spec was solid.

Then I ran nine AI reviewer agents against it. They found things I could not have caught myself.

---

## The Setup

The idea came from noticing a gap in how spec review is typically done. Open-source frameworks like GitHub's [spec-kit](https://github.com/github/spec-kit) have pushed the conversation forward on what good requirements look like for AI-assisted development  -  but spec review itself tends to be a single pass, a single reviewer, a single lens.

The problem with a single lens is the same as the problem with self-review: you read what you meant to write, not what you wrote. And different readers catch completely different things. A security reviewer notices things an architect doesn't. An operator  -  someone responsible for the system at 7am when it fails  -  sees things a developer writing in the happy path never imagines.

My hypothesis: running multiple AI reviewer personas independently, each with a specialized lens, and then synthesizing their findings, would surface a qualitatively different set of issues than any single reviewer would catch.

I tested it against the ai-radar spec. Here's what happened.

---

## The Nine Reviewers

Each persona ran in its own Claude Code session, reading only the spec PR  -  not each other's comments. The isolation was intentional. Reviewers that see each other's comments anchor to prior findings and stop producing independent signal.

The nine personas, and what each one was looking for:

| Persona | Lens |
|---|---|
| 🏗️ Architect | Module boundaries, interface contracts, contradictions between spec sections |
| 🔍 Skeptic | Runtime failure modes, optimistic assumptions, what happens when things go wrong |
| 📦 OSS Adoptability | First-install experience, missing setup steps, undocumented secrets |
| 🔒 Security | Credential handling, OAuth scope, third-party data exposure |
| ✂️ MVP Scope | Scope creep, over-engineering, hidden post-MVP complexity |
| 🔬 Domain Expert | Library behavior, API quirks, real-world data messiness |
| ⚖️ Legal & Compliance | Content rights, terms of service, data retention |
| 🔧 Operator | Silent failures, missing recovery procedures, what the system looks like at 7am |
| 🧪 Test Strategy | Testability of acceptance criteria, mock strategies, how to verify LLM outputs |

Each reviewer posted structured comments to the PR using a shared label taxonomy: `[BLOCKING]`, `[AMBIGUITY]`, `[FALSE PRECISION]`, `[SUGGESTION]`, `[NIT]`. A synthesis agent then read all comments, identified overlap and conflict, and produced a single prioritized action list.

Total output across nine reviewers: 104 structured comments.

---

## What They Found

### The finding that surprised me most: a factual error

The Architect and Skeptic both independently caught something I hadn't noticed: the spec claimed the system could "swap LLM backends with one config line." But Anthropic's SDK is not OpenAI-compatible. It uses a different package, different authentication, and a different request/response shape. The spec would have silently broken Anthropic support if implemented as written.

This is the kind of error that's easy to miss when you wrote the spec  -  you know what you meant, so you read past the contradiction. Two independent reviewers with no coordination between them both caught it.

### The hardest finding to catch yourself

The Domain Expert flagged that `trafilatura`  -  a specific library named in the spec for content extraction  -  is designed for web article pages and performs poorly on newsletter HTML. Multi-column layouts, image-heavy formatting, and tracked-link wrappers all cause it to extract garbage with no visible error. For a pipeline ingesting AI newsletters as a primary source, this would have produced bad output that looked fine from the outside.

This isn't something that shows up in the library's documentation. It's specific knowledge about real-world behavior that you'd only know from having used it on the wrong kind of content. Without the Domain Expert persona, it wouldn't have been discovered until weeks into implementation.

Similarly, the Architect caught that GitHub Actions runners are ephemeral  -  the compute environment is wiped between runs. The spec used SQLite for deduplication caching. In a CI environment, that cache would be destroyed after every run, silently breaking the core deduplication logic. You'd only discover this after deploying.

### The internal contradiction I'd written myself

Section 3.2 of the spec described the preprocessing pipeline in this order: Truncate → Pre-filter. Section 4.2's data flow diagram showed the opposite: Pre-filter → Truncator. 

These aren't just different orderings  -  they're structurally different pipelines with different cost implications. One throws away content before filtering; the other filters first and only extracts full content for relevant articles. The Architect flagged it as an `[AMBIGUITY]`. I'd written both sections at different times and read them independently. I never saw the contradiction.

### The second-order risk nobody mentioned

Security flagged something I hadn't thought through at the right level of abstraction: committing LLM-summarized newsletter content to a public GitHub repository could expose paid or private content from subscriptions. The spec had a buried disclaimer about this. Security pushed for `commit_digests: false` as the default configuration  -  requiring an explicit opt-in to public commits rather than making privacy the harder choice. That's a meaningful design shift with real-world implications for anyone who open-sources this kind of tool.

### What consensus looked like

Two issues were flagged independently by all five of the initial reviewers without any coordination: the Gmail OAuth problem in GitHub Actions, and unlabeled placeholder values in the config. Getting five independent reviewers to converge on the same finding without communication is a strong signal  -  it's the kind of thing a solo reviewer might second-guess ("am I being too picky?"), but multiple independent voices validate it as a real problem.

---

## Did the Spec Actually Improve?

I built a scoring system to answer this question  -  an AI-Readiness Score (ARS) that evaluates a spec across nine weighted dimensions, from unambiguity (25%) to failure mode coverage (3%). The scorer runs before and after the review cycle so you have a measurable delta, not just a gut feeling.

Here's what the numbers looked like for ai-radar, going from the first draft (v0.1) to the post-review revision (v0.3):

| Dimension | Before | After | Change |
|---|---|---|---|
| Unambiguity (25%) | 5.5 | 7.5 | +2.0 |
| Completeness (20%) | 4.5 | 7.0 | +2.5 |
| Consistency (15%) | 5.0 | 8.5 | +3.5 |
| Verifiability (15%) | 4.0 | 6.5 | +2.5 |
| Implementation Guidance (10%) | 5.5 | 7.5 | +2.0 |
| Forward Traceability (5%) | 6.5 | 7.5 | +1.0 |
| Singularity (5%) | 5.0 | 6.5 | +1.5 |
| Failure Mode Coverage (3%) | 2.5 | 7.5 | +5.0 |
| Interface Contracts (2%) | 4.0 | 7.0 | +3.0 |
| **Weighted Total** | **4.91** | **7.34** | **+2.43** |

The biggest gains were in Failure Mode Coverage (+5.0), Consistency (+3.5), and Interface Contracts (+3.0)  -  which map directly to what the reviewers found. The Operator caught that failure modes were almost entirely unspecified. The Architect caught the pipeline ordering contradiction that was driving the Consistency gap. The data model definitions and Section 3.7 failure handling that came out of the review fixed the Interface Contracts score.

Verifiability (6.5) is the weakest remaining high-weight dimension  -  the spec still needs per-module acceptance criteria and prompt templates for Pass 1 and Pass 2. That's the known gap going into implementation.

A score of 7.34 is "nearly ready" on the scale I use  -  short of the 8.5 implementation-ready threshold, but a meaningful improvement from a 4.91 first draft that was squarely in "needs significant revision" territory. The three remaining improvements before implementation are concrete and targeted, not a vague "write better specs."

---

## Is Nine Agents Worth It?

The question I actually care about is a layer up: what does this look like when you roll it out across a team, or as a gate in a delivery workflow? That starts with understanding where the value concentrates, which a single run can tell you.

The honest answer: it depends on what you're building, and you don't need nine to get most of the value.

The data from this run showed clear diminishing returns  -  the curve of net-new blocking and ambiguity findings started to flatten around reviewer 7 or 8. But the more interesting finding was that the second batch of reviewers (Domain Expert, Legal, Operator, Test Strategy) didn't just add more of the same findings. They found categorically different things.

The original five covered the obvious: structural contradictions, missing data models, OAuth documentation gaps. These are issues a careful human engineering review would also catch  -  things that are visibly missing when you look for them.

The four new reviewers found what I didn't know I didn't know: newsletter terms-of-service compliance, no test strategy for non-deterministic LLM outputs, silent pipeline failures with no notification mechanism. These are the issues that would have surfaced weeks into implementation.

Based on what I learned, here's how I'd think about which reviewers to run:

**If you have 45-60 minutes:** Run Architect, Domain Expert, Operator, and Test Strategy. These four cover the dimensions most likely to be missed  -  technical correctness, library-specific behavior, operational reality, and testability. This set captured about two-thirds of the unique blocking and ambiguity findings in my run.

**If you have 90 minutes:** Add Skeptic and Security. Skeptic is the only persona systematically asking "what does this do when X goes wrong?" Security is essential any time you're handling third-party credentials or data.

**If you're building something new, LLM-based, or intended to be open-sourced:** Run all nine. The marginal value per reviewer actually went up in the second batch, not down  -  because the new personas covered genuinely new territory.

---

## What Didn't Work

I want to be honest about the failure modes, because they're instructive.

All five initial reviewers flagged the Gmail OAuth issue in GitHub Actions  -  even though the spec had it listed in an explicit Open Questions section as an unresolved architectural decision. The protocol had no mechanism to prevent reviewers from echoing known open questions back without adding resolution. I've since added a check to the base instructions: before posting any finding, check whether it already appears in the Open Questions section. Only include it if you have a concrete resolution the spec lacks.

Three of five reviewers also used `[LABEL]` in plain text instead of `**[LABEL]**` in bold, which broke GitHub rendering. The fix was straightforward  -  making the format requirement explicit with correct and incorrect examples rather than just saying "follow this structure." Agents follow explicit format requirements reliably when the requirement is stated unambiguously.

One reviewer session accidentally posted its review twice. Small thing, but worth noting.

---

## The Takeaway

The meta-insight from running this twice is about what kind of problems different reviewers catch.

A spec can be architecturally coherent, internally consistent, and well-documented and still produce an implementation that violates its publisher's terms of service, fails silently every morning, and ships with a test suite that passes while the pipeline is producing wrong outputs. The reviewers that prevented those outcomes weren't the ones reviewing the spec's internal structure. They were the ones asking: "Will this be legal?" "Will I know when it breaks?" "Can I actually verify it works?"

The 90 minutes you invest in spec review before a 2-4 week implementation project is not overhead. It's the cheapest testing you'll ever do.

---

## Try It Yourself

Everything in this framework is in my public repository: [ai-engineering-playbook/01-spec-review](https://github.com/lilacmohr/ai-engineering-playbook/tree/main/01-spec-review). This includes the persona prompts, base instructions, synthesis agent, and scorecard template.

Start at Level 1: manually combine `base-instructions.md` with a single persona file, paste into a Claude Code session, and have it review your spec PR. You don't need nine reviewers to see whether this produces value. Run the Skeptic alone and see what it finds.

The project this was tested against is also public: [ai-radar](https://github.com/lilacmohr/ai-radar).

