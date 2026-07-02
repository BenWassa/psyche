// GENERATED FILE — do not edit by hand.
// Source: content/nodes/**/*.md · Rebuild with `npm run content`.
import type { ContentNode } from '@/types';

export const CONTENT_NODES: Record<string, ContentNode> = {
  "cbt": {
    "id": "cbt",
    "domain": "cognition",
    "theory": "Cognitive Behavioral Model",
    "title": "Cognitive Behavioral Model",
    "tier": "cornerstone",
    "grammar": "Loop / Triangle",
    "summary": "Thoughts, feelings, and behaviors form a loop — each shapes and reinforces the others, bidirectionally. The loop can be entered and revised at any corner. The bedrock of evidence-based psychotherapy.",
    "bullets": [
      "Thoughts ↔ Feelings ↔ Behaviors: a triangle of mutual influence, not a one-way chain",
      "Situations are interpreted, not directly experienced — the interpretation drives the response",
      "Two main intervention points: restructure the thought, or activate the behavior",
      "Beck's model; the most consistently supported psychotherapy framework across meta-analyses"
    ],
    "bridges": [
      {
        "target": "cbt-automatic-thoughts",
        "description": "The loop's raw input: fast evaluations of self, world, and future."
      },
      {
        "target": "cbt-distortions",
        "description": "Predictable ways automatic thoughts go wrong."
      },
      {
        "target": "cbt-restructuring",
        "description": "The audit-and-reframe intervention."
      },
      {
        "target": "cbt-behavioral-activation",
        "description": "The action-first intervention."
      },
      {
        "target": "appraisal",
        "description": "Both frameworks agree: situations are appraised, not directly experienced."
      },
      {
        "target": "dual-process",
        "description": "Automatic thoughts are System 1; restructuring is System 2."
      }
    ],
    "sources": [
      "Beck (1979). Cognitive Therapy and the Emotional Disorders.",
      "Hofmann et al. (2012). The efficacy of cognitive behavioral therapy (meta-analytic review)."
    ]
  },
  "cbt-automatic-thoughts": {
    "id": "cbt-automatic-thoughts",
    "domain": "cognition",
    "theory": "Cognitive Behavioral Model",
    "title": "Automatic thoughts",
    "tier": "cornerstone",
    "grammar": "Loop / Component",
    "summary": "Fast, involuntary evaluations about the self, the world, and the future that arrive fully formed — and feel like facts.",
    "bullets": [
      "System 1 output: rapid, effortless, below deliberate control",
      "Often distorted under stress — speed is bought with accuracy",
      "The skill is noticing them as thoughts rather than experiencing them as reality",
      "First step of restructuring: catch the thought and write it down"
    ],
    "bridges": [
      {
        "target": "dual-process-system1",
        "description": "Automatic thoughts are System 1 running on personal content."
      }
    ],
    "sources": [
      "Beck (1979). Cognitive Therapy and the Emotional Disorders."
    ]
  },
  "cbt-distortions": {
    "id": "cbt-distortions",
    "domain": "cognition",
    "theory": "Cognitive Behavioral Model",
    "title": "Cognitive distortions",
    "tier": "cornerstone",
    "grammar": "Loop / Catalog",
    "summary": "Predictable thinking errors that automatic thoughts fall into — the clinical cousins of the bias catalog.",
    "bullets": [
      "Catastrophizing: assuming the worst outcome is the likely one",
      "All-or-nothing: one flaw means total failure",
      "Mind-reading: being certain what others think, without evidence",
      "Personalization: taking responsibility for events outside your control",
      "Filtering: registering the one negative amid ten positives"
    ],
    "bridges": [
      {
        "target": "heuristics",
        "description": "The same machinery as judgment biases, framed clinically."
      }
    ],
    "sources": [
      "Burns (1980). Feeling Good: The New Mood Therapy."
    ],
    "note": "Each distortion pairs with a reframing question — \"what's the realistic outcome?\", \"what would I tell a friend?\", \"what's the evidence for the mind-read?\""
  },
  "cbt-restructuring": {
    "id": "cbt-restructuring",
    "domain": "cognition",
    "theory": "Cognitive Behavioral Model",
    "title": "Cognitive restructuring",
    "tier": "cornerstone",
    "grammar": "Loop / Intervention",
    "summary": "The audit-and-reframe operation: catch the automatic thought, test it against evidence, and replace the distortion with a defensible alternative.",
    "bullets": [
      "Catch it (write the thought down) → check it (what's the evidence?) → change it (what's more accurate?)",
      "Not positive thinking — the goal is accuracy, not optimism",
      "Effortful at first; with practice, the corrected appraisal becomes the automatic one"
    ],
    "bridges": [
      {
        "target": "dual-process-system2",
        "description": "Restructuring is deliberate System 2 auditing."
      },
      {
        "target": "reappraisal",
        "description": "The same mechanism the emotion literature calls cognitive reappraisal."
      }
    ],
    "sources": [
      "Beck (2011). Cognitive Behavior Therapy: Basics and Beyond."
    ]
  },
  "cbt-behavioral-activation": {
    "id": "cbt-behavioral-activation",
    "domain": "cognition",
    "theory": "Cognitive Behavioral Model",
    "title": "Behavioral activation",
    "tier": "cornerstone",
    "grammar": "Loop / Intervention",
    "summary": "Enter the loop through behavior: act first, and let thought and feeling follow.",
    "bullets": [
      "Action changes evidence — doing the avoided thing disconfirms the catastrophic thought",
      "Especially effective for low mood, where thought-first work stalls",
      "Schedule the behavior, not the motivation; motivation usually arrives after starting"
    ],
    "bridges": [
      {
        "target": "goal-setting",
        "description": "Activation borrows goal-setting machinery: specific, scheduled, feedback-visible action."
      },
      {
        "target": "efficacy-mastery",
        "description": "Completed action is a mastery experience — the strongest efficacy source."
      }
    ],
    "sources": [
      "Jacobson et al. (1996). A component analysis of cognitive-behavioral treatment for depression."
    ]
  },
  "dual-process": {
    "id": "dual-process",
    "domain": "cognition",
    "theory": "Dual Process Theory",
    "title": "Dual Process Theory",
    "tier": "cornerstone",
    "grammar": "Paired duality",
    "summary": "Two modes of thought run the mind: System 1 — fast, automatic, associative — and System 2 — slow, deliberate, effortful. System 1 operates by default; System 2 audits it, sometimes.",
    "bullets": [
      "System 1 generates impressions continuously; System 2 endorses, corrects, or overrides them",
      "Cognitive load shifts reliance toward System 1 — tired minds default to shortcuts",
      "Expertise moves tasks from System 2 to System 1: the practiced becomes automatic",
      "The organizing frame for the rest of this domain — biases are System 1 output, restructuring is System 2 work"
    ],
    "bridges": [
      {
        "target": "dual-process-system1",
        "description": "The fast, automatic default."
      },
      {
        "target": "dual-process-system2",
        "description": "The slow, deliberate auditor."
      },
      {
        "target": "heuristics",
        "description": "Heuristics and biases are System 1's shortcuts made visible."
      },
      {
        "target": "cbt",
        "description": "CBT is applied dual-process work: automatic thoughts audited by deliberate restructuring."
      },
      {
        "target": "reappraisal",
        "description": "Reappraisal requires deliberate System 2 engagement."
      }
    ],
    "sources": [
      "Kahneman (2011). Thinking, Fast and Slow.",
      "Evans & Stanovich (2013). Dual-process theories of higher cognition."
    ],
    "note": "Strong as a framework, weaker as neuroscience: there are not literally two brain systems, and several specific demonstrations in Thinking, Fast and Slow (notably the priming chapter) failed replication. Kahneman publicly acknowledged the weakness."
  },
  "dual-process-system1": {
    "id": "dual-process-system1",
    "domain": "cognition",
    "theory": "Dual Process Theory",
    "title": "System 1",
    "tier": "cornerstone",
    "grammar": "Paired duality / System",
    "summary": "Fast, automatic, and effortless. Operates by default, pattern-matching from experience.",
    "bullets": [
      "Parallel processing — handles multiple inputs simultaneously",
      "Source of heuristics, emotional reactions, and intuition",
      "Generates quick answers; hands off to System 2 only when challenged",
      "Cognitive load pushes behavior further toward System 1"
    ],
    "bridges": [
      {
        "target": "heuristics",
        "description": "The shortcuts System 1 runs on."
      },
      {
        "target": "cbt-automatic-thoughts",
        "description": "Automatic thoughts are System 1 outputs about self, world, and future."
      },
      {
        "target": "attribution-theory",
        "description": "The Fundamental Attribution Error is a System 1 heuristic for explaining people."
      }
    ],
    "sources": [
      "Kahneman (2011). Thinking, Fast and Slow."
    ],
    "note": "System 1 is not irrational — it is optimized for speed. Most decisions are System 1, and most are fine."
  },
  "dual-process-system2": {
    "id": "dual-process-system2",
    "domain": "cognition",
    "theory": "Dual Process Theory",
    "title": "System 2",
    "tier": "cornerstone",
    "grammar": "Paired duality / System",
    "summary": "Slow, deliberate, and effortful. Monitors System 1 output and intervenes when the stakes are high.",
    "bullets": [
      "Sequential processing — one complex problem at a time",
      "Required for logic, planning, and overriding intuition",
      "Limited capacity — cognitive load depletes System 2 availability",
      "Expertise moves tasks from System 2 back to System 1"
    ],
    "bridges": [
      {
        "target": "cbt-restructuring",
        "description": "Cognitive restructuring is System 2 auditing System 1."
      },
      {
        "target": "reappraisal",
        "description": "Deliberate reinterpretation is System 2 work applied to emotion."
      }
    ],
    "sources": [
      "Evans & Stanovich (2013). Dual-process theories of higher cognition."
    ],
    "note": "A strong organizing metaphor, not a literal two-brain model. Parts of the priming research popularized alongside it failed replication."
  },
  "heuristics": {
    "id": "heuristics",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Heuristics & Biases",
    "tier": "cornerstone",
    "grammar": "Catalog / Card deck",
    "summary": "A catalog of the mind's shortcuts and their predictable errors. Not a hierarchy — each bias is a self-contained pattern you can learn to recognize.",
    "bullets": [
      "Heuristics are System 1 shortcuts that are usually right and occasionally systematically wrong",
      "The catalog below is the core set: robustly replicated and high in everyday applicability",
      "Knowing a bias exists rarely eliminates it — design your environment, don't just try harder",
      "The full literature lists 100+ biases; most are fragile or redundant. Parsimony is the curation"
    ],
    "bridges": [
      {
        "target": "dual-process-system1",
        "description": "Biases are System 1 shortcuts made visible."
      },
      {
        "target": "cbt-distortions",
        "description": "Cognitive distortions are the clinical framing of the same machinery."
      },
      {
        "target": "attribution-theory",
        "description": "Attribution errors are heuristics for explaining behavior."
      }
    ],
    "sources": [
      "Tversky & Kahneman (1974). Judgment under uncertainty: heuristics and biases."
    ],
    "note": "The core biases (anchoring, availability, framing) remain strongly supported; some specific 1970s demonstrations replicate weakly. Teach them as bounded tendencies, not universal irrationality."
  },
  "anchoring": {
    "id": "anchoring",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Anchoring",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "The first number you encounter disproportionately influences all subsequent estimates.",
    "bullets": [
      "The effect holds even when anchors are arbitrary or obviously irrelevant",
      "Resistant to explicit warnings — knowing about it does not eliminate it",
      "Shows up in negotiation, medical diagnosis, and legal sentencing",
      "Debiasing tactic: generate your own estimate before seeing anyone else's number"
    ],
    "bridges": [],
    "sources": [
      "Tversky & Kahneman (1974). Judgment under uncertainty."
    ]
  },
  "availability": {
    "id": "availability",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Availability",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "Easily recalled examples feel more frequent than they are.",
    "bullets": [
      "Vivid, recent, or emotionally loaded events feel more probable",
      "Explains overestimating dramatic risks (plane crashes) and underestimating common ones (car accidents)",
      "Media exposure amplifies availability effects at population scale",
      "Debiasing tactic: ask for the base rate, not the memorable case"
    ],
    "bridges": [],
    "sources": [
      "Tversky & Kahneman (1973). Availability: a heuristic for judging frequency."
    ]
  },
  "representativeness": {
    "id": "representativeness",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Representativeness",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "Judging probability by resemblance to a stereotype while ignoring how common the categories actually are.",
    "bullets": [
      "\"Looks like a librarian\" beats \"there are 50× more farmers\" in intuitive judgment",
      "Drives the conjunction fallacy — detailed stories feel more probable than their components",
      "Debiasing tactic: state the base rate out loud before judging the resemblance"
    ],
    "bridges": [
      {
        "target": "base-rate-neglect",
        "description": "Representativeness is the engine; base-rate neglect is the crash."
      }
    ],
    "sources": [
      "Kahneman & Tversky (1972). Subjective probability: a judgment of representativeness."
    ]
  },
  "base-rate-neglect": {
    "id": "base-rate-neglect",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Base-rate neglect",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "Underweighting prior probabilities in the face of vivid, case-specific evidence.",
    "bullets": [
      "A positive test for a rare condition usually still means the condition is unlikely — intuition says otherwise",
      "Explains why anecdotes beat statistics in persuasion",
      "Debiasing tactic: write the prior down first; update from it, don't replace it"
    ],
    "bridges": [],
    "sources": [
      "Bar-Hillel (1980). The base-rate fallacy in probability judgments."
    ]
  },
  "framing": {
    "id": "framing",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Framing",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "Identical information feels different depending on how it is presented.",
    "bullets": [
      "\"90% survival rate\" vs \"10% mortality rate\" — same fact, different emotional weight",
      "Loss frames trigger stronger responses than gain frames",
      "One of the most robustly replicated effects in judgment research",
      "Debiasing tactic: restate the choice in the opposite frame before deciding"
    ],
    "bridges": [
      {
        "target": "loss-aversion",
        "description": "Framing works because losses loom larger than gains."
      }
    ],
    "sources": [
      "Tversky & Kahneman (1981). The framing of decisions and the psychology of choice."
    ]
  },
  "confirmation-bias": {
    "id": "confirmation-bias",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Confirmation bias",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "We seek, interpret, and remember evidence that confirms what we already believe.",
    "bullets": [
      "Operates at the level of search (what we look for) and interpretation (how we read it)",
      "Strengthened by identity-linked beliefs — the more a belief defines us, the stronger the bias",
      "Dissonance is often resolved via confirmation rather than belief revision",
      "Debiasing tactic: ask \"what would change my mind?\" and go look for that specifically"
    ],
    "bridges": [
      {
        "target": "cognitive-dissonance",
        "description": "Selective attention to confirming evidence is a standard dissonance-resolution path."
      }
    ],
    "sources": [
      "Nickerson (1998). Confirmation bias: a ubiquitous phenomenon in many guises."
    ]
  },
  "loss-aversion": {
    "id": "loss-aversion",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Loss aversion",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "Losses feel approximately twice as powerful as equivalent gains.",
    "bullets": [
      "Explains status quo bias — defaults benefit from the asymmetry",
      "Drives risk aversion in gain frames and risk-seeking in loss frames",
      "Core mechanism of Prospect Theory (Kahneman & Tversky)",
      "Debiasing tactic: evaluate the end state, not the change from where you stand"
    ],
    "bridges": [],
    "sources": [
      "Kahneman & Tversky (1979). Prospect theory: an analysis of decision under risk."
    ]
  },
  "hindsight-bias": {
    "id": "hindsight-bias",
    "domain": "cognition",
    "theory": "Heuristics & Biases",
    "title": "Hindsight bias",
    "tier": "cornerstone",
    "grammar": "Heuristic / Bias",
    "summary": "\"I knew it all along\" — past events feel more predictable in retrospect than they were in prospect.",
    "bullets": [
      "Memory silently rewrites prior uncertainty once the outcome is known",
      "Corrodes learning: outcomes get judged as obvious, so process errors go unexamined",
      "Debiasing tactic: write predictions down before outcomes arrive; grade the prediction, not the memory"
    ],
    "bridges": [],
    "sources": [
      "Fischhoff (1975). Hindsight ≠ foresight: the effect of outcome knowledge."
    ]
  },
  "cognitive-dissonance": {
    "id": "cognitive-dissonance",
    "domain": "cognition",
    "theory": "Included frameworks",
    "title": "Cognitive Dissonance",
    "tier": "include",
    "grammar": "Process loop",
    "summary": "Holding two conflicting cognitions creates psychological discomfort — usually resolved by rationalizing rather than by changing the belief or the behavior.",
    "bullets": [
      "Three resolution paths: change a belief (rare), change a behavior (sometimes), rationalize (System 1's preferred route)",
      "Everyday forms: self-justification, selective attention to confirming evidence, effort justification (\"I worked hard, so it must be worth it\")",
      "The tension-then-resolution shape makes this a process loop, not a static claim"
    ],
    "bridges": [
      {
        "target": "confirmation-bias",
        "description": "Dissonance is often resolved through confirmation rather than revision."
      },
      {
        "target": "attribution-theory",
        "description": "Dissonance about others is often resolved by dispositional attribution."
      },
      {
        "target": "self-concept",
        "description": "Self-justification protects the self-image — dissonance frequently involves self-concept threat."
      }
    ],
    "sources": [
      "Festinger (1957). A Theory of Cognitive Dissonance.",
      "Vaidis et al. (2024). A multilab replication of the induced-compliance paradigm."
    ],
    "note": "The construct survives; the classic paradigm did not. Vaidis et al. (2024), a 39-lab replication, failed to support the 1959 induced-compliance design. Teach the phenomenon — rationalization is everyday-observable — not the original study."
  },
  "attribution-theory": {
    "id": "attribution-theory",
    "domain": "cognition",
    "theory": "Included frameworks",
    "title": "Attribution Theory & the FAE",
    "tier": "include",
    "grammar": "Hierarchy / Errors",
    "summary": "We explain behavior by attributing it to the person or to the situation — and systematically over-attribute other people's behavior to their disposition.",
    "bullets": [
      "Fundamental Attribution Error: their lateness is character; mine is traffic",
      "Self-Serving Bias: my successes are me; my failures are circumstances",
      "Actor–Observer Asymmetry: my behavior is situational; yours is dispositional",
      "In-group/Out-group Asymmetry: our failures are situational; theirs are dispositional"
    ],
    "bridges": [
      {
        "target": "dual-process-system1",
        "description": "The FAE is a System 1 heuristic for person-perception."
      },
      {
        "target": "attachment",
        "description": "Insecure attachment amplifies dispositional attribution toward partners."
      },
      {
        "target": "heuristics",
        "description": "Attribution errors belong to the same shortcut family as judgment biases."
      }
    ],
    "sources": [
      "Ross (1977). The intuitive psychologist and his shortcomings.",
      "Malle (2006). The actor–observer asymmetry in attribution (meta-analysis)."
    ],
    "note": "The FAE is robust but its magnitude varies more than the canonical framing suggests: East Asian samples show smaller effects, and Malle's 2006 meta-analysis substantially reduced the actor–observer estimate."
  },
  "appraisal": {
    "id": "appraisal",
    "domain": "emotion",
    "theory": "Appraisal Theory",
    "title": "Appraisal Theory",
    "tier": "cornerstone",
    "grammar": "Branching / Flow",
    "summary": "Emotion follows evaluation, not the event itself. The same situation produces different emotions in different people because they appraise it differently — which is exactly what makes reappraisal possible.",
    "bullets": [
      "The chain: event → primary appraisal (is this relevant? good or bad?) → secondary appraisal (can I cope?) → emotion and coping response",
      "Specific appraisal patterns map to specific emotions — anger, anxiety, guilt, and pride each have a signature evaluation",
      "Lazarus's framework; the cognitive foundation beneath both CBT and modern emotion regulation"
    ],
    "bridges": [
      {
        "target": "appraisal-primary",
        "description": "Is this relevant to me, and is it good or bad?"
      },
      {
        "target": "appraisal-secondary",
        "description": "Can I handle this?"
      },
      {
        "target": "appraisal-themes",
        "description": "The signature evaluations behind specific emotions."
      },
      {
        "target": "cbt",
        "description": "CBT formalizes appraisal-change for clinical use."
      },
      {
        "target": "constructed-emotion",
        "description": "Both argue emotion is built from interpretation, not directly inflicted."
      }
    ],
    "sources": [
      "Lazarus (1991). Emotion and Adaptation.",
      "Moors et al. (2013). Appraisal theories of emotion: state of the art."
    ]
  },
  "appraisal-primary": {
    "id": "appraisal-primary",
    "domain": "emotion",
    "theory": "Appraisal Theory",
    "title": "Primary Appraisal",
    "tier": "cornerstone",
    "grammar": "Appraisal / Stage",
    "summary": "The first evaluation: is this event relevant to me, and is it good or bad?",
    "bullets": [
      "Three outcomes: irrelevant (no emotion), benign/positive (positive emotion), or stressful (proceed to secondary appraisal)",
      "Operates rapidly, often below awareness — System 1 does the first pass",
      "Same event, different appraisal, different emotion — relevance is personal"
    ],
    "bridges": [
      {
        "target": "dual-process-system1",
        "description": "The fast pass that decides whether emotion starts at all."
      }
    ],
    "sources": [
      "Lazarus (1991). Emotion and Adaptation."
    ]
  },
  "appraisal-secondary": {
    "id": "appraisal-secondary",
    "domain": "emotion",
    "theory": "Appraisal Theory",
    "title": "Secondary Appraisal",
    "tier": "cornerstone",
    "grammar": "Appraisal / Stage",
    "summary": "The evaluation of coping capacity: can I handle this?",
    "bullets": [
      "Threat: potential harm, low perceived coping → fear, anxiety",
      "Challenge: demanding but manageable → eagerness, drive",
      "Harm/Loss: damage already done → sadness, anger",
      "Benefit: things turned out well → relief, gratitude"
    ],
    "bridges": [
      {
        "target": "reappraisal",
        "description": "The regulation strategy that rewrites this appraisal."
      },
      {
        "target": "self-efficacy",
        "description": "Capability beliefs feed the coping evaluation directly."
      }
    ],
    "sources": [
      "Lazarus (1991). Emotion and Adaptation."
    ],
    "note": "This is what cognitive reappraisal changes. CBT restructuring targets the appraisal, not the event — and self-efficacy is a standing input to the \"can I cope?\" question."
  },
  "appraisal-themes": {
    "id": "appraisal-themes",
    "domain": "emotion",
    "theory": "Appraisal Theory",
    "title": "Core relational themes",
    "tier": "cornerstone",
    "grammar": "Appraisal / Catalog",
    "summary": "Each major emotion has a signature appraisal — a core relational theme that, once seen, makes the emotion legible.",
    "bullets": [
      "Anger: a demeaning offense against me and mine",
      "Anxiety: facing uncertain, existential threat",
      "Sadness: irrevocable loss",
      "Guilt: having transgressed a moral imperative",
      "Shame: failing to live up to an ego ideal",
      "Pride: identity enhanced by a valued achievement",
      "Gratitude: appreciating an altruistic gift",
      "Compassion: being moved by another's suffering"
    ],
    "bridges": [
      {
        "target": "constructed-emotion",
        "description": "Emotion granularity: finer vocabulary, finer-grained experience."
      },
      {
        "target": "self-concept",
        "description": "Self-discrepancies produce the guilt and shame themes predictably."
      }
    ],
    "sources": [
      "Lazarus (1991). Emotion and Adaptation."
    ],
    "note": "Naming the theme is itself regulatory — precise emotion vocabulary is the granularity that constructionist accounts also prize."
  },
  "constructed-emotion": {
    "id": "constructed-emotion",
    "domain": "emotion",
    "theory": "Constructed Emotion Theory",
    "title": "Constructed Emotion Theory",
    "tier": "include",
    "grammar": "Perspective card",
    "summary": "Barrett's claim: emotions are not hard-wired responses waiting to be triggered. The brain constructs them, moment by moment, from interoception, past experience, cultural concepts, and context.",
    "bullets": [
      "The recipe: raw bodily signals + what this felt like before + the concepts your culture gave you + what would fit this situation",
      "Emotion granularity: a more precise emotion vocabulary produces finer-grained emotional experience",
      "\"Anxious\" and \"excited\" can be the same physiological state, differently constructed",
      "Practical implication: body awareness and vocabulary are trainable inputs to what you feel"
    ],
    "bridges": [
      {
        "target": "appraisal",
        "description": "Both frameworks agree: interpretation builds the emotion."
      },
      {
        "target": "appraisal-themes",
        "description": "Granularity in practice — naming precisely changes the experience."
      },
      {
        "target": "sc-mindfulness",
        "description": "Naming emotions precisely is part of mindful self-awareness."
      }
    ],
    "sources": [
      "Barrett (2017). How Emotions Are Made.",
      "Lindquist et al. (2012). The brain basis of emotion: a meta-analytic review."
    ],
    "note": "Live theoretical debate — presented here as one perspective, not settled science. Meta-analyses fail to find unique neural fingerprints for specific emotions, which favors the constructionist account; critics counter that the theory is hard to falsify. This node teaches how science looks when serious theories genuinely disagree."
  },
  "emotion-regulation": {
    "id": "emotion-regulation",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Emotion Regulation Process Model",
    "tier": "cornerstone",
    "grammar": "Timeline / Strategies",
    "summary": "Emotion unfolds over time — situation, attention, appraisal, response — and can be regulated at five points along that timeline. Where you intervene matters more than how hard you try.",
    "bullets": [
      "Five intervention points, ordered: situation selection → situation modification → attentional deployment → cognitive change (reappraisal) → response modulation",
      "The key finding: earlier interventions systematically outperform later ones",
      "Reappraisal is the best-supported strategy; suppression the least effective, with physiological, cognitive, and relational costs",
      "Gross's model — the dominant framework in emotion-regulation research"
    ],
    "bridges": [
      {
        "target": "er-situation-selection",
        "description": "Choose the situation before the emotion begins."
      },
      {
        "target": "er-situation-modification",
        "description": "Reshape the situation you're in."
      },
      {
        "target": "er-attentional-deployment",
        "description": "Steer attention within the situation."
      },
      {
        "target": "reappraisal",
        "description": "Reinterpret what the situation means."
      },
      {
        "target": "suppression",
        "description": "The late-stage strategy — and why it backfires."
      },
      {
        "target": "neuroticism",
        "description": "High trait Neuroticism predicts reliance on late, maladaptive strategies."
      },
      {
        "target": "attachment",
        "description": "Attachment pattern predicts strategy: hyperactivation vs deactivation."
      }
    ],
    "sources": [
      "Gross (1998). The emerging field of emotion regulation.",
      "Webb, Miles & Sheeran (2012). Dealing with feeling (meta-analysis of ER strategies)."
    ]
  },
  "er-situation-selection": {
    "id": "er-situation-selection",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Situation Selection",
    "tier": "cornerstone",
    "grammar": "Timeline / Stage 1",
    "summary": "Choose which situations to enter or avoid based on their likely emotional impact — the earliest and often the most effective intervention point.",
    "bullets": [
      "Requires knowing your own emotional patterns before the situation begins",
      "Examples: declining the dinner with a hostile colleague; scheduling hard conversations for peak energy",
      "The failure mode is chronic avoidance — selection in service of growth, not escape"
    ],
    "bridges": [
      {
        "target": "withdrawal",
        "description": "When threat-default runs selection, it becomes avoidance."
      }
    ],
    "sources": [
      "Gross (2015). Emotion regulation: current status and future prospects."
    ]
  },
  "er-situation-modification": {
    "id": "er-situation-modification",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Situation Modification",
    "tier": "cornerstone",
    "grammar": "Timeline / Stage 2",
    "summary": "Change the situation itself to alter its emotional trajectory — you stay in it, but reshape it.",
    "bullets": [
      "More flexible than avoidance; requires some agency over conditions",
      "Examples: moving a difficult conversation to a private setting; breaking an overwhelming task into pieces",
      "A motivational act as much as an emotional one — this is where regulation meets goal pursuit"
    ],
    "bridges": [
      {
        "target": "goal-setting",
        "description": "Modification is goal-setting machinery applied to emotional stakes."
      }
    ],
    "sources": [
      "Gross (2015). Emotion regulation: current status and future prospects."
    ]
  },
  "er-attentional-deployment": {
    "id": "er-attentional-deployment",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Attentional Deployment",
    "tier": "cornerstone",
    "grammar": "Timeline / Stage 3",
    "summary": "Direct attention within the situation — toward or away from emotionally charged elements.",
    "bullets": [
      "Distraction: effective short-term for mild negative emotion",
      "Concentration: sustained focus on neutral or workable aspects",
      "Rumination is this strategy gone wrong — sustained focus on negative content amplifies distress"
    ],
    "bridges": [
      {
        "target": "attachment-anxious",
        "description": "Rumination and reassurance-scanning are attentional deployment under hyperactivation."
      }
    ],
    "sources": [
      "Gross (2015). Emotion regulation: current status and future prospects."
    ]
  },
  "reappraisal": {
    "id": "reappraisal",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Cognitive Reappraisal",
    "tier": "cornerstone",
    "grammar": "Timeline / Stage 4",
    "summary": "Change how you interpret the situation and the emotion changes with it — the most empirically supported regulation strategy.",
    "bullets": [
      "Intervenes before the emotional response consolidates",
      "Lower physiological and relational cost than suppression",
      "Examples: nerves as excitement; a hard conversation as a relationship investment",
      "Trainable — the skill improves with deliberate practice"
    ],
    "bridges": [
      {
        "target": "appraisal-secondary",
        "description": "What reappraisal actually changes: the coping appraisal."
      },
      {
        "target": "cbt-restructuring",
        "description": "The clinical protocol for the same move."
      },
      {
        "target": "dual-process-system2",
        "description": "The deliberate system doing the reinterpreting."
      }
    ],
    "sources": [
      "Gross & John (2003). Individual differences in two emotion regulation processes."
    ],
    "note": "Reappraisal requires deliberate System 2 engagement, and it is the formal target of CBT's cognitive restructuring — the two literatures describe the same mechanism."
  },
  "suppression": {
    "id": "suppression",
    "domain": "emotion",
    "theory": "Emotion Regulation Process Model",
    "title": "Suppression",
    "tier": "cornerstone",
    "grammar": "Timeline / Stage 5",
    "summary": "Inhibiting the outward expression of emotion after it has emerged — the least effective strategy, with documented costs.",
    "bullets": [
      "Physiological: arousal continues internally despite the hidden expression",
      "Cognitive: increases load and impairs memory of the interaction",
      "Relational: partners of suppressors report feeling less close and less understood"
    ],
    "bridges": [
      {
        "target": "attachment-dismissing",
        "description": "The signature strategy of attachment deactivation."
      },
      {
        "target": "neuroticism",
        "description": "High-N responders default here most — and pay the most for it."
      }
    ],
    "sources": [
      "Gross & John (2003). Individual differences in two emotion regulation processes."
    ],
    "note": "Suppression is not composure. Choosing when and how to express is regulation; blanket inhibition is the strategy that backfires."
  },
  "broaden-and-build": {
    "id": "broaden-and-build",
    "domain": "emotion",
    "theory": "Popular but revised",
    "title": "Broaden-and-Build Theory",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "Fredrickson's claim that positive emotions broaden cognition and build lasting resources. The correlation survives; the signature mechanism and the famous ratio do not.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Brown, Sokal & Friedman (2013). The complex dynamics of wishful thinking.",
      "Roth et al. (2024). Network analysis of the broaden-and-build model."
    ],
    "evidence": {
      "status": "revised",
      "knownFor": "Positive emotions broaden thought-action repertoires and, over time, build psychological, social, and physical resources — popularized alongside the \"3:1 positivity ratio\" for flourishing.",
      "shows": "The 3:1 positivity ratio was mathematically refuted (Brown, Sokal & Friedman 2013) and the underlying paper partially retracted. Roth et al. (2024) network analysis finds the broadening mechanism does not operate as hypothesized, and the build hypothesis replicates inconsistently.",
      "instead": "Appraisal Theory plus the Gross Process Model plus Self-Compassion give a more robust framework for cultivating wellbeing — mechanisms that survived scrutiny.",
      "year": "1998",
      "survives": "Positive emotions do correlate with wellbeing, and some experimental support for momentary cognitive broadening exists."
    }
  },
  "maslow": {
    "id": "maslow",
    "domain": "motivation",
    "theory": "Popular but revised",
    "title": "Maslow's Hierarchy of Needs",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "The famous pyramid — physiological needs before safety, before love, esteem, and self-actualization. The need content survives; the ordering does not.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Tay & Diener (2011). Needs and subjective well-being around the world."
    ],
    "evidence": {
      "status": "revised",
      "knownFor": "A five-level pyramid in which lower needs must be met before higher ones become motivating, culminating in self-actualization.",
      "shows": "Tay & Diener (2011), using Gallup data from 123 countries, found needs operate largely in parallel, not sequentially — people report meaning and belonging even when basic needs are unmet. Cross-cultural tests reject the ordering. Maslow himself never drew a pyramid; the strict hierarchy is a management-textbook artifact.",
      "instead": "Self-Determination Theory — autonomy, competence, relatedness — is more parsimonious, cross-culturally replicated, and specifies mechanisms rather than a stack.",
      "year": "1943",
      "survives": "The content of the needs as a useful list — humans genuinely care about safety, belonging, esteem, and meaning. As a taxonomy, it still orients."
    }
  },
  "grit": {
    "id": "grit",
    "domain": "motivation",
    "theory": "Popular but revised",
    "title": "Grit",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "\"Passion plus perseverance\" as the secret of long-term success. The perseverance part is real — and already measured by Conscientiousness.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Credé, Tynan & Harms (2017). Much ado about grit (meta-analysis)."
    ],
    "evidence": {
      "status": "revised",
      "knownFor": "Duckworth's claim that grit predicts success beyond talent and IQ, popularized through a bestselling book and one of the most-viewed TED talks.",
      "shows": "Credé, Tynan & Harms (2017), meta-analyzing 88 studies, found grit is statistically indistinguishable from the perseverance (industriousness) facet of Conscientiousness; the \"passion\" component adds little, and incremental validity over existing traits is small.",
      "instead": "Conscientiousness in the Big Five — the same construct with sixty years of validation behind it.",
      "year": "2007",
      "survives": "Perseverance does predict outcomes. The underlying observation — sustained effort matters — is sound."
    }
  },
  "goal-setting": {
    "id": "goal-setting",
    "domain": "motivation",
    "theory": "Goal-Setting Theory",
    "title": "Goal-Setting Theory",
    "tier": "cornerstone",
    "grammar": "Process / Flow",
    "summary": "Specific, challenging goals with feedback reliably outperform \"do your best\" — one of the most replicated findings in applied psychology, with effect sizes of 0.4–0.8.",
    "bullets": [
      "The flow: goal characteristics → mediating mechanisms → performance, moderated by context",
      "Specificity and difficulty are the active ingredients; vague goals give the mind nothing to steer by",
      "Feedback closes the loop — goals without progress signals decay",
      "Locke & Latham; the process half of the motivation domain, complementing SDT's needs"
    ],
    "bridges": [
      {
        "target": "goal-characteristics",
        "description": "What makes a goal effective."
      },
      {
        "target": "goal-mediators",
        "description": "How goals change performance."
      },
      {
        "target": "goal-moderators",
        "description": "When goals work best."
      },
      {
        "target": "conscientiousness",
        "description": "The trait basis of persistent goal pursuit."
      },
      {
        "target": "self-efficacy",
        "description": "The belief that mediates whether hard goals energize or intimidate."
      }
    ],
    "sources": [
      "Locke & Latham (2002). Building a practically useful theory of goal setting."
    ]
  },
  "goal-characteristics": {
    "id": "goal-characteristics",
    "domain": "motivation",
    "theory": "Goal-Setting Theory",
    "title": "Goal characteristics",
    "tier": "cornerstone",
    "grammar": "Process / Stage",
    "summary": "The input side of the loop: what a goal needs to be before it can drive performance.",
    "bullets": [
      "Specificity: a concrete target, not \"do your best\"",
      "Difficulty: challenging but attainable — difficulty raises performance until commitment breaks",
      "Commitment: the goal must be accepted, not merely assigned",
      "Importance: alignment with values sustains commitment when difficulty bites"
    ],
    "bridges": [],
    "sources": [
      "Locke & Latham (2002). Building a practically useful theory of goal setting."
    ]
  },
  "goal-mediators": {
    "id": "goal-mediators",
    "domain": "motivation",
    "theory": "Goal-Setting Theory",
    "title": "Mediators",
    "tier": "cornerstone",
    "grammar": "Process / Stage",
    "summary": "The mechanisms through which goals change performance.",
    "bullets": [
      "Direction: goals focus attention on goal-relevant activity",
      "Effort: harder goals mobilize more intensity",
      "Persistence: deadlines and targets extend duration of effort",
      "Strategy: goals prompt discovery and use of task-relevant strategies"
    ],
    "bridges": [
      {
        "target": "industriousness",
        "description": "Persistence has a trait basis — the industriousness facet of Conscientiousness."
      }
    ],
    "sources": [
      "Locke & Latham (2002). Building a practically useful theory of goal setting."
    ]
  },
  "goal-moderators": {
    "id": "goal-moderators",
    "domain": "motivation",
    "theory": "Goal-Setting Theory",
    "title": "Moderators",
    "tier": "cornerstone",
    "grammar": "Process / Stage",
    "summary": "The conditions that determine whether goal effects appear at all.",
    "bullets": [
      "Self-efficacy: hard goals energize only when you believe effort can succeed",
      "Feedback: without progress information, goals lose their grip",
      "Task complexity: for complex tasks, learning goals beat performance goals early on"
    ],
    "bridges": [
      {
        "target": "self-efficacy",
        "description": "The primary moderator — and the bridge into Self & Identity."
      }
    ],
    "sources": [
      "Locke & Latham (2002). Building a practically useful theory of goal setting."
    ]
  },
  "regulatory-focus": {
    "id": "regulatory-focus",
    "domain": "motivation",
    "theory": "Included frameworks",
    "title": "Regulatory Focus Theory",
    "tier": "include",
    "grammar": "Single dimension",
    "summary": "People pursue goals with a promotion orientation (growth, gains, aspirations) or a prevention orientation (security, obligations, loss-avoidance) — a single bipolar dimension with distinct strategies at each pole.",
    "bullets": [
      "Promotion: eagerness strategies, exploration, higher risk tolerance; failing feels like dejection",
      "Prevention: vigilance strategies, caution, thoroughness; failing feels like agitation",
      "Regulatory fit: performance and satisfaction improve when goal framing matches orientation",
      "Most people use both orientations contextually — a tendency, not a type"
    ],
    "bridges": [
      {
        "target": "appraisal",
        "description": "Promotion vs prevention shapes whether demands read as challenge or threat."
      },
      {
        "target": "goal-setting",
        "description": "A framing layer on top of the goal-performance loop."
      }
    ],
    "sources": [
      "Higgins (1997). Beyond pleasure and pain."
    ],
    "note": "The best entry point for \"how do I reframe my goals\": recast the same goal in promotion terms (what I gain) or prevention terms (what I protect) and notice which one moves you."
  },
  "expectancy-theory": {
    "id": "expectancy-theory",
    "domain": "motivation",
    "theory": "Included frameworks",
    "title": "Expectancy Theory",
    "tier": "include",
    "grammar": "Formula",
    "summary": "Motivation = Expectancy × Instrumentality × Valence. Multiplicative — if any factor is zero, motivation is zero. Use it as a diagnostic for where motivation breaks down.",
    "bullets": [
      "Expectancy: \"Can my effort produce good performance?\" — a self-efficacy question",
      "Instrumentality: \"Will good performance actually lead to outcomes?\"",
      "Valence: \"Do I value those outcomes?\"",
      "Because the terms multiply, the weakest factor is the binding constraint"
    ],
    "bridges": [
      {
        "target": "self-efficacy",
        "description": "Expectancy is the efficacy judgment wearing a different name."
      },
      {
        "target": "sdt-continuum",
        "description": "Valence connects to where the outcome sits on your value continuum."
      }
    ],
    "sources": [
      "Vroom (1964). Work and Motivation."
    ],
    "note": "When motivation fails, identify which factor is closest to zero — that is the lever to work on. Effort-confidence problems, broken reward links, and hollow rewards need different fixes."
  },
  "sdt": {
    "id": "sdt",
    "domain": "motivation",
    "theory": "Self-Determination Theory",
    "title": "Self-Determination Theory",
    "tier": "cornerstone",
    "grammar": "Needs / Bento",
    "summary": "Three basic psychological needs — autonomy, competence, and relatedness — sit behind sustained motivation and wellbeing. When environments satisfy them, motivation is autonomous and durable; when they starve them, motivation turns brittle and controlled.",
    "bullets": [
      "Three co-equal needs: not steps or stages but concurrent conditions",
      "Motivation quality runs on a continuum from intrinsic (for its own sake) to external (for reward/punishment) to amotivation",
      "The strongest applied evidence base in motivation science — education, work, health, sport, cross-culturally",
      "Need satisfaction predicts wellbeing; need frustration predicts ill-being, not just absence of motivation"
    ],
    "bridges": [
      {
        "target": "sdt-autonomy",
        "description": "Acting in alignment with your values."
      },
      {
        "target": "sdt-competence",
        "description": "Feeling capable and effective."
      },
      {
        "target": "sdt-relatedness",
        "description": "Feeling connected to people who matter."
      },
      {
        "target": "sdt-continuum",
        "description": "The quality spectrum from intrinsic to amotivated."
      },
      {
        "target": "maslow",
        "description": "The evidence-backed replacement for the pyramid."
      }
    ],
    "sources": [
      "Deci & Ryan (2000). The \"what\" and \"why\" of goal pursuits.",
      "Ryan & Deci (2017). Self-Determination Theory (comprehensive statement)."
    ]
  },
  "sdt-autonomy": {
    "id": "sdt-autonomy",
    "domain": "motivation",
    "theory": "Self-Determination Theory",
    "title": "Autonomy",
    "tier": "cornerstone",
    "grammar": "SDT / Need",
    "summary": "Acting in alignment with your own values — feeling that actions originate from the self.",
    "bullets": [
      "Not independence — autonomy is compatible with accepting guidance from others",
      "Controlling environments (surveillance, contingent rewards, deadlines-as-threats) undermine it",
      "Intrinsic motivation depends on perceived autonomy",
      "Supporting it: offer rationale, acknowledge feelings, provide choice where real choice exists"
    ],
    "bridges": [],
    "sources": [
      "Deci & Ryan (2000). The \"what\" and \"why\" of goal pursuits."
    ]
  },
  "sdt-competence": {
    "id": "sdt-competence",
    "domain": "motivation",
    "theory": "Self-Determination Theory",
    "title": "Competence",
    "tier": "cornerstone",
    "grammar": "SDT / Need",
    "summary": "Feeling capable and effective — the need to master challenges and produce intended outcomes.",
    "bullets": [
      "Optimal challenge is the key condition: too easy breeds boredom, too hard breeds threat",
      "Informational (not controlling) positive feedback supports it",
      "Conceptually identical to Self-Efficacy — the same idea from two research traditions"
    ],
    "bridges": [
      {
        "target": "self-efficacy",
        "description": "Same construct, two names — Bandura's tradition calls it self-efficacy."
      }
    ],
    "sources": [
      "Deci & Ryan (2000). The \"what\" and \"why\" of goal pursuits."
    ]
  },
  "sdt-relatedness": {
    "id": "sdt-relatedness",
    "domain": "motivation",
    "theory": "Self-Determination Theory",
    "title": "Relatedness",
    "tier": "cornerstone",
    "grammar": "SDT / Need",
    "summary": "Feeling cared for and caring for others — connection to people who matter.",
    "bullets": [
      "Quality of connection matters more than quantity",
      "Relatedness supports internalization — values transmit through relationships that feel safe",
      "Insecure attachment directly starves this need"
    ],
    "bridges": [
      {
        "target": "attachment",
        "description": "Secure bonds satisfy relatedness; insecurity starves motivation at the root."
      }
    ],
    "sources": [
      "Baumeister & Leary (1995). The need to belong."
    ]
  },
  "sdt-continuum": {
    "id": "sdt-continuum",
    "domain": "motivation",
    "theory": "Self-Determination Theory",
    "title": "Motivation continuum",
    "tier": "cornerstone",
    "grammar": "SDT / Continuum",
    "summary": "Motivation varies in quality, not just quantity — from intrinsic through internalized forms down to external pressure and amotivation.",
    "bullets": [
      "Intrinsic: doing it for its own sake — the most durable form",
      "Identified: doing it because it aligns with your values",
      "Introjected: doing it to avoid guilt or protect self-worth — internalized pressure",
      "External: doing it for rewards or to avoid punishment — evaporates when the contingency does",
      "Amotivation: not acting at all — no perceived link between action and outcome"
    ],
    "bridges": [],
    "sources": [
      "Ryan & Deci (2000). Intrinsic and extrinsic motivations: classic definitions and new directions."
    ],
    "note": "The practical move is rarely \"find intrinsic motivation\" — it is shifting one step up the continuum, usually from introjected toward identified, by connecting the task to a value you actually hold."
  },
  "big-five": {
    "id": "big-five",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Big Five (OCEAN)",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait model",
    "summary": "Five broad, continuous dimensions describe most of the stable variation in human personality: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Each trait splits into two facets (DeYoung), giving the model a clean two-level hierarchy.",
    "bullets": [
      "The most replicated structure in psychology — recovered across languages, cultures, and instruments",
      "Traits are continuous dimensions, not types; everyone sits somewhere on all five",
      "Each trait divides into two correlated but distinct facets (10 facets total)",
      "Scores are descriptive tendencies, not verdicts — they say how you tend to respond, not who you are allowed to be"
    ],
    "bridges": [
      {
        "target": "hexaco",
        "description": "HEXACO extends the model with a sixth dimension, Honesty-Humility."
      },
      {
        "target": "attachment",
        "description": "Trait-level anxiety (Neuroticism) relates to attachment anxiety in relationships."
      },
      {
        "target": "self-concept",
        "description": "Traits become incorporated into self-schemas — the vocabulary you use about yourself."
      }
    ],
    "sources": [
      "Goldberg (1993). The structure of phenotypic personality traits.",
      "DeYoung, Quilty & Peterson (2007). Between facets and domains: 10 aspects of the Big Five.",
      "Soto & John (2017). The next Big Five Inventory (BFI-2)."
    ],
    "note": "Trait scores describe averages across situations. Behavior in any single moment is driven by context at least as much as by trait."
  },
  "openness": {
    "id": "openness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Openness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait",
    "summary": "Appreciation for ideas, aesthetics, curiosity, and breadth of experience. High scorers seek novelty and pattern; low scorers prefer the familiar and concrete.",
    "bullets": [
      "Facets: Intellect (ideas) and Aesthetic Openness (art, beauty, experience)",
      "Predicts engagement with art, science, and unconventional viewpoints",
      "The two facets can diverge — an engineer high in Intellect may be low in Aesthetic Openness, and vice versa"
    ],
    "bridges": [
      {
        "target": "intellect",
        "description": "Engagement with abstract ideas and problem-solving."
      },
      {
        "target": "aesthetic-openness",
        "description": "Sensitivity to beauty, art, and inner experience."
      }
    ],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "conscientiousness": {
    "id": "conscientiousness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Conscientiousness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait",
    "summary": "The tendency to be organized, dependable, and persistent in goal pursuit. The strongest trait predictor of academic and job performance after cognitive ability.",
    "bullets": [
      "Facets: Industriousness (persistent effort) and Orderliness (structure, routine)",
      "Reliably predicts health behaviors, longevity, and follow-through",
      "What pop culture calls \"grit\" is psychometrically this trait's perseverance component"
    ],
    "bridges": [
      {
        "target": "industriousness",
        "description": "Persistent effort and follow-through."
      },
      {
        "target": "orderliness",
        "description": "Preference for structure and routine."
      },
      {
        "target": "goal-setting",
        "description": "The trait basis of sustained, persistent goal pursuit."
      },
      {
        "target": "self-efficacy",
        "description": "Trait foundation of agentic action — belief plus disposition."
      },
      {
        "target": "grit",
        "description": "Grit is statistically indistinguishable from this trait's perseverance facet."
      }
    ],
    "sources": [
      "Roberts et al. (2007). The power of personality.",
      "Credé, Tynan & Harms (2017). Much ado about grit."
    ]
  },
  "extraversion": {
    "id": "extraversion",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Extraversion",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait",
    "summary": "Energy, positive affect, sociability, and drive toward the external world. More about reward sensitivity than mere talkativeness.",
    "bullets": [
      "Facets: Enthusiasm (warmth, positive affect) and Assertiveness (dominance, drive)",
      "High scorers experience more frequent positive emotion — the trait most tied to positive affect",
      "Warmth and dominance are separable: a warm non-assertive person and a driven cold one are both \"extraverted\" in different ways"
    ],
    "bridges": [
      {
        "target": "enthusiasm",
        "description": "Warmth, sociability, and positive affect."
      },
      {
        "target": "assertiveness",
        "description": "Dominance, drive, and leadership emergence."
      }
    ],
    "sources": [
      "Depue & Collins (1999). Neurobiology of the structure of personality."
    ]
  },
  "agreeableness": {
    "id": "agreeableness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Agreeableness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait",
    "summary": "A compassionate, cooperative, and conflict-sensitive interpersonal style. Distinguishes care for others from respect for norms.",
    "bullets": [
      "Facets: Compassion (concern for others' wellbeing) and Politeness (respect for norms)",
      "Low agreeableness maps to friction, antagonism, and exploitative styles",
      "The Dark Triad traits are largely the low pole of this dimension plus low Honesty-Humility"
    ],
    "bridges": [
      {
        "target": "compassion",
        "description": "Emotional concern for others' wellbeing."
      },
      {
        "target": "politeness",
        "description": "Respect for norms and conflict avoidance."
      },
      {
        "target": "dark-triad",
        "description": "Dark traits are largely low Agreeableness and low Honesty-Humility, not a separate species."
      }
    ],
    "sources": [
      "Graziano & Tobin (2002). Agreeableness: dimension of personality or social desirability?"
    ]
  },
  "neuroticism": {
    "id": "neuroticism",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Neuroticism",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Trait",
    "summary": "Sensitivity to threat, stress, and negative emotion. High scores mean stronger and more frequent negative emotional responses — reactivity, not dysfunction.",
    "bullets": [
      "Facets: Withdrawal (anxiety, risk-aversion) and Volatility (moodiness, reactivity)",
      "The single strongest trait predictor of emotional-health outcomes",
      "High Neuroticism is common and workable — regulation skills buffer trait effects"
    ],
    "bridges": [
      {
        "target": "withdrawal",
        "description": "Anxiety, risk-aversion, and disengagement."
      },
      {
        "target": "volatility",
        "description": "Moodiness and emotional reactivity."
      },
      {
        "target": "emotion-regulation",
        "description": "High Neuroticism predicts maladaptive regulation strategies — skills can buffer the trait."
      },
      {
        "target": "appraisal",
        "description": "High Neuroticism produces more frequent threat appraisals of the same events."
      },
      {
        "target": "attachment",
        "description": "Trait anxiety amplifies attachment anxiety."
      }
    ],
    "sources": [
      "Lahey (2009). Public health significance of neuroticism.",
      "Barlow et al. (2014). The nature, diagnosis, and treatment of neuroticism."
    ],
    "note": "High values do not imply dysfunction, only reactivity. The trait sets the baseline; regulation skills set the ceiling."
  },
  "intellect": {
    "id": "intellect",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Intellect",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Openness facet oriented toward ideas: abstract reasoning, intellectual engagement, and enjoyment of complex problems.",
    "bullets": [
      "Correlates with (but is distinct from) measured intelligence",
      "Predicts preference for debate, theory, and conceptual play",
      "Pairs with Aesthetic Openness under the Openness trait"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "aesthetic-openness": {
    "id": "aesthetic-openness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Aesthetic Openness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Openness facet oriented toward experience: sensitivity to beauty, art, fantasy, and emotional depth.",
    "bullets": [
      "Predicts absorption in music, art, and nature",
      "Linked to fantasy proneness and rich inner experience",
      "Can be high in people with little interest in abstract argument — the facets are separable"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "industriousness": {
    "id": "industriousness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Industriousness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Conscientiousness facet behind persistent effort: working hard, finishing what you start, and resisting distraction.",
    "bullets": [
      "The facet that actually carries the \"grit\" construct",
      "Predicts achievement outcomes more strongly than Orderliness",
      "Low industriousness with high standards is the classic procrastination profile"
    ],
    "bridges": [
      {
        "target": "goal-setting",
        "description": "Persistence is a core mediator of the goal–performance link."
      }
    ],
    "sources": [
      "Credé, Tynan & Harms (2017). Much ado about grit."
    ]
  },
  "orderliness": {
    "id": "orderliness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Orderliness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Conscientiousness facet behind structure: preference for routine, planning, tidiness, and rule-following.",
    "bullets": [
      "Predicts organization and reliability more than raw output",
      "Very high orderliness shades into rigidity and perfectionism",
      "Separable from Industriousness — a messy desk and relentless follow-through can coexist"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "enthusiasm": {
    "id": "enthusiasm",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Enthusiasm",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Extraversion facet of warmth and positive affect: sociability, friendliness, and easily activated joy.",
    "bullets": [
      "The facet most tied to experienced positive emotion",
      "Predicts social connection and approachability",
      "Distinct from Assertiveness — warmth without dominance is common"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "assertiveness": {
    "id": "assertiveness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Assertiveness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Extraversion facet of agency and drive: taking charge, speaking up, and pushing toward goals.",
    "bullets": [
      "Predicts leadership emergence and social influence",
      "Can read as dominance when Agreeableness is low",
      "Distinct from Enthusiasm — drive without warmth is common"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "compassion": {
    "id": "compassion",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Compassion",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Agreeableness facet of emotional concern: feeling and acting on others' wellbeing.",
    "bullets": [
      "The \"care\" half of Agreeableness — empathy, tenderness, helping",
      "Predicts prosocial behavior more strongly than Politeness",
      "Distinct from norm-respect: one can care deeply and still break rules for people"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "politeness": {
    "id": "politeness",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Politeness",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Agreeableness facet of norm-respect: deference, courtesy, and avoidance of confrontation.",
    "bullets": [
      "The \"restraint\" half of Agreeableness — suppressing aggressive and exploitative impulses",
      "Low politeness predicts confrontational and antagonistic styles",
      "Separable from Compassion: rule-following without warmth is common"
    ],
    "bridges": [],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "withdrawal": {
    "id": "withdrawal",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Withdrawal",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Neuroticism facet of anxious avoidance: worry, risk-aversion, and pulling back from potential threat.",
    "bullets": [
      "The anticipatory side of negative emotion — distress before the event",
      "Predicts avoidance behaviors and rumination",
      "Pairs with Volatility under the Neuroticism trait"
    ],
    "bridges": [
      {
        "target": "er-situation-selection",
        "description": "Chronic avoidance is situation selection running on threat default."
      }
    ],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "volatility": {
    "id": "volatility",
    "domain": "personality",
    "theory": "Big Five",
    "title": "Volatility",
    "tier": "cornerstone",
    "grammar": "Hierarchy / Facet",
    "summary": "The Neuroticism facet of reactive negative emotion: irritability, mood swings, and being easily provoked.",
    "bullets": [
      "The reactive side of negative emotion — distress in the event",
      "Predicts anger and emotional lability under stress",
      "High volatility makes late-stage emotion regulation strategies especially costly"
    ],
    "bridges": [
      {
        "target": "suppression",
        "description": "Volatile responders lean on suppression — the least effective strategy."
      }
    ],
    "sources": [
      "DeYoung, Quilty & Peterson (2007). Between facets and domains."
    ]
  },
  "mbti": {
    "id": "mbti",
    "domain": "personality",
    "theory": "Popular but revised",
    "title": "MBTI",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "The Myers-Briggs Type Indicator sorts people into 16 types from four dichotomies. Culturally enormous; scientifically discredited as a measurement instrument.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Pittenger (2005). Cautionary comments regarding the Myers-Briggs Type Indicator."
    ],
    "evidence": {
      "status": "superseded",
      "knownFor": "Sixteen four-letter types (INTJ, ENFP...) built from four either/or dichotomies. Decades of corporate workshops and self-discovery marketing made it the world's best-known personality test.",
      "shows": "Test-retest reliability is poor: 39–76% of people receive a different type within five weeks. The dichotomous scoring has no empirical basis — the underlying scores are normally distributed, so cutting them in half puts near-identical people in \"opposite\" boxes. It predicts outcomes worse than trait measures.",
      "instead": "The Big Five: continuous, replicated, and predictive. It preserves everything MBTI gets at, without inventing types.",
      "year": "1944",
      "survives": "The underlying dimensions loosely track real traits — introversion/extraversion maps onto Extraversion, intuition/sensing onto Openness. The appetite for self-understanding it serves is legitimate."
    }
  },
  "type-a-b": {
    "id": "type-a-b",
    "domain": "personality",
    "theory": "Popular but revised",
    "title": "Type A / Type B",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "The claim that hard-driving \"Type A\" personalities face elevated heart-disease risk. Refuted at scale — and its origins were compromised by tobacco-industry funding.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Petticrew, Lee & McKee (2012). Type A behavior and coronary heart disease: Philip Morris's \"crown jewel\"."
    ],
    "evidence": {
      "status": "superseded",
      "knownFor": "Type A (competitive, urgent, hostile) versus Type B (relaxed, easygoing), with Type A behavior said to cause coronary heart disease.",
      "shows": "Meta-analysis spanning 74,326 participants found a near-zero association between Type A behavior and coronary heart disease. Archival research revealed the original research program was substantially funded by the tobacco industry, which promoted personality as a rival explanation for smoking-related disease.",
      "instead": "Big Five traits — hostility maps to low Agreeableness and high Neuroticism, urgency to Conscientiousness/Neuroticism blends — with none of the typological baggage.",
      "year": "1959",
      "survives": "The hostility component shows a small association with cardiovascular outcomes — better captured today as low Agreeableness plus high Neuroticism."
    }
  },
  "hexaco": {
    "id": "hexaco",
    "domain": "personality",
    "theory": "Trait extensions",
    "title": "HEXACO",
    "tier": "include",
    "grammar": "Hierarchy / Six traits",
    "summary": "A six-dimensional trait model that adds Honesty-Humility to a Big Five-like structure. The sixth dimension captures sincerity, fairness, and greed-avoidance — variance the Big Five folds awkwardly into Agreeableness.",
    "bullets": [
      "Honesty-Humility: sincerity, fairness, greed-avoidance, modesty",
      "Emotionality, eXtraversion, Agreeableness, Conscientiousness, Openness parallel the Big Five with small redefinitions",
      "Honesty-Humility is empirically vital for predicting ethical and exploitative behavior",
      "Treat as an extension of the Big Five, not a competitor"
    ],
    "bridges": [
      {
        "target": "big-five",
        "description": "The five shared dimensions map closely onto the Big Five."
      },
      {
        "target": "dark-triad",
        "description": "Low Honesty-Humility captures most Dark Triad variance."
      }
    ],
    "sources": [
      "Ashton & Lee (2007). Empirical, theoretical, and practical advantages of the HEXACO model."
    ]
  },
  "dark-triad": {
    "id": "dark-triad",
    "domain": "personality",
    "theory": "Trait extensions",
    "title": "Dark Triad",
    "tier": "include",
    "grammar": "Overlapping traits",
    "summary": "Machiavellianism (strategic manipulation), narcissism (grandiosity, entitlement), and psychopathy (callousness, impulsivity) — a useful frame for exploitative interpersonal styles.",
    "bullets": [
      "Machiavellianism: strategic, cynical manipulation of others",
      "Narcissism: grandiosity, entitlement, hunger for admiration",
      "Psychopathy: callousness, shallow affect, impulsivity",
      "The three overlap heavily with each other — they are not clean categories"
    ],
    "bridges": [
      {
        "target": "hexaco",
        "description": "Dark traits sit at the low pole of Honesty-Humility."
      },
      {
        "target": "agreeableness",
        "description": "Antagonism is the low pole of Agreeableness."
      }
    ],
    "sources": [
      "Paulhus & Williams (2002). The Dark Triad of personality.",
      "Muris et al. (2017). The malevolent side of human nature (meta-analysis)."
    ],
    "note": "Most Dark Triad variance is captured by low Honesty-Humility and low Agreeableness in broader trait models. Teach as low ends of normal dimensions, not a separate species of person."
  },
  "attachment": {
    "id": "attachment",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Adult Attachment Theory",
    "tier": "cornerstone",
    "grammar": "Field / 2D plane",
    "summary": "Adult attachment is best understood as a two-dimensional field: anxiety (fear of abandonment) and avoidance (discomfort with closeness) are continuous axes. The familiar four \"styles\" are region labels on this plane, not boxes people live in.",
    "bullets": [
      "Anxiety axis: from comfortable trust to hyperactivating preoccupation with the relationship",
      "Avoidance axis: from comfortable interdependence to deactivating self-reliance",
      "Every position on the plane is a coordinate, not a category — most people sit between regions",
      "Strong meta-analytic support; the dimensional model (Brennan/Fraley) outperforms categorical typing psychometrically"
    ],
    "bridges": [
      {
        "target": "attachment-anxiety-axis",
        "description": "The abandonment-vigilance dimension."
      },
      {
        "target": "attachment-avoidance-axis",
        "description": "The closeness-discomfort dimension."
      },
      {
        "target": "bowlby",
        "description": "Where the framework comes from — the developmental origin story."
      },
      {
        "target": "neuroticism",
        "description": "Trait-level anxiety amplifies attachment anxiety."
      },
      {
        "target": "sdt-relatedness",
        "description": "Secure attachment satisfies the relatedness need; insecurity starves it."
      },
      {
        "target": "emotion-regulation",
        "description": "Attachment pattern predicts regulation strategy — hyperactivation and suppression map onto the two axes."
      },
      {
        "target": "self-compassion",
        "description": "Secure attachment correlates with self-compassion; each can bootstrap the other."
      }
    ],
    "sources": [
      "Brennan, Clark & Shaver (1998). Self-report measurement of adult attachment.",
      "Fraley & Waller (1998). Adult attachment patterns: a test of the typological model.",
      "Mikulincer & Shaver (2016). Attachment in Adulthood."
    ],
    "note": "Most users sit between regions. Styles are helpful labels, but the underlying model is dimensional — and position on the field can shift with insight, therapy, and experience of secure relationships."
  },
  "attachment-anxiety-axis": {
    "id": "attachment-anxiety-axis",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Anxiety axis",
    "tier": "cornerstone",
    "grammar": "Field / Axis",
    "summary": "The first dimension of the attachment plane: how vigilantly the mind monitors for abandonment.",
    "bullets": [
      "Low: comfortable trusting; ambiguity reads as neutral",
      "High: hyperactivating strategies — amplified bids for contact, reassurance-seeking, preoccupation with the relationship's security",
      "Continuous, not categorical — everyone has a position on this axis"
    ],
    "bridges": [
      {
        "target": "neuroticism",
        "description": "Attachment anxiety and trait anxiety share variance."
      }
    ],
    "sources": [
      "Brennan, Clark & Shaver (1998). Self-report measurement of adult attachment."
    ]
  },
  "attachment-avoidance-axis": {
    "id": "attachment-avoidance-axis",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Avoidance axis",
    "tier": "cornerstone",
    "grammar": "Field / Axis",
    "summary": "The second dimension of the attachment plane: how comfortable the mind is with closeness and dependence.",
    "bullets": [
      "Low: comfortable with intimacy and interdependence",
      "High: deactivating strategies — minimizing needs, maintaining distance, preferring self-reliance",
      "Often an adaptation to early environments that rewarded self-sufficiency"
    ],
    "bridges": [
      {
        "target": "suppression",
        "description": "Deactivation leans on expressive suppression — with its documented costs."
      }
    ],
    "sources": [
      "Brennan, Clark & Shaver (1998). Self-report measurement of adult attachment."
    ]
  },
  "attachment-secure": {
    "id": "attachment-secure",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Secure",
    "tier": "cornerstone",
    "grammar": "Field / Region",
    "summary": "Low anxiety, low avoidance. Comfortable with both closeness and independence.",
    "bullets": [
      "Communicates needs directly; tolerates partner autonomy without threat",
      "In conflict: engages, repairs, assumes goodwill",
      "Under stress: seeks support and uses it effectively",
      "Most predictive of relationship satisfaction and adaptive emotion regulation"
    ],
    "bridges": [
      {
        "target": "self-compassion",
        "description": "Security and self-compassion correlate — an internalized caregiver in both cases."
      }
    ],
    "sources": [
      "Mikulincer & Shaver (2016). Attachment in Adulthood."
    ],
    "note": "Security is a region tendency, not a personality award — secure-leaning people still have insecure moments."
  },
  "attachment-anxious": {
    "id": "attachment-anxious",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Anxious / Preoccupied",
    "tier": "cornerstone",
    "grammar": "Field / Region",
    "summary": "High anxiety, low avoidance. Craves closeness but fears abandonment.",
    "bullets": [
      "Hyperactivates the attachment system — amplified bids for contact and reassurance",
      "In conflict: protest behaviors, pursuit, difficulty disengaging",
      "Under stress: support-seeking that can overwhelm the support",
      "Reads ambiguity as threat; linked to higher reactivity and lower use of reappraisal"
    ],
    "bridges": [
      {
        "target": "er-attentional-deployment",
        "description": "Rumination is hyperactivation running on attention."
      },
      {
        "target": "reappraisal",
        "description": "The underused strategy in this region — and the trainable one."
      }
    ],
    "sources": [
      "Mikulincer & Shaver (2016). Attachment in Adulthood."
    ],
    "note": "Patterns can shift with insight, therapy, and the lived experience of secure relationships."
  },
  "attachment-dismissing": {
    "id": "attachment-dismissing",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Dismissing-Avoidant",
    "tier": "cornerstone",
    "grammar": "Field / Region",
    "summary": "Low anxiety, high avoidance. Values self-reliance; deactivates attachment needs.",
    "bullets": [
      "Discomfort with emotional intimacy and disclosure",
      "In conflict: withdraws, stonewalls, changes the subject",
      "Under stress: goes it alone; support feels like exposure",
      "Often presents as confident independence — the cost is depth of connection"
    ],
    "bridges": [
      {
        "target": "suppression",
        "description": "The signature strategy of deactivation — hiding expression while arousal continues."
      }
    ],
    "sources": [
      "Mikulincer & Shaver (2016). Attachment in Adulthood."
    ],
    "note": "Avoidance is usually an adaptation to early environments that rewarded self-sufficiency, not an absence of attachment needs."
  },
  "attachment-fearful": {
    "id": "attachment-fearful",
    "domain": "relationships",
    "theory": "Adult Attachment",
    "title": "Fearful-Avoidant",
    "tier": "cornerstone",
    "grammar": "Field / Region",
    "summary": "High anxiety, high avoidance. Wants closeness and fears it simultaneously.",
    "bullets": [
      "Oscillates between seeking and withdrawing — the pull and the push",
      "In conflict: escalation followed by shutdown",
      "Under stress: the two strategies collide; behavior looks disorganized",
      "Understanding the two competing drives is more useful than the label"
    ],
    "bridges": [],
    "sources": [
      "Mikulincer & Shaver (2016). Attachment in Adulthood."
    ],
    "note": "The \"disorganized\" label has thinner measurement support in adults than the two underlying dimensions — another reason to think in axes, not types."
  },
  "bowlby": {
    "id": "bowlby",
    "domain": "relationships",
    "theory": "Bowlby's Attachment Theory",
    "title": "Bowlby's Attachment Theory",
    "tier": "include",
    "grammar": "Background / Origin",
    "summary": "The origin story of the adult model: infants form bonds with caregivers, and the quality of those bonds becomes an internal working model that shapes adult relationships.",
    "bullets": [
      "The attachment system activates under threat or separation; its aim is proximity to the caregiver — felt security",
      "Internal working models: beliefs about self-worth (\"am I worthy of care?\") and others' availability (\"will they be there?\")",
      "Caregiver responsiveness drives the pattern: consistent care → security; inconsistent → anxious patterns; rejecting → avoidant patterns",
      "Consistency matters more than perfection"
    ],
    "bridges": [
      {
        "target": "attachment",
        "description": "The modern dimensional model this framework grew into."
      },
      {
        "target": "self-concept",
        "description": "Internal working models are attachment-flavored self-schemas."
      }
    ],
    "sources": [
      "Bowlby (1969). Attachment and Loss, Vol. 1.",
      "Hazan & Shaver (1987). Romantic love conceptualized as an attachment process."
    ],
    "note": "Hazan & Shaver extended the framework to adult romantic relationships; Brennan & Fraley refined it into the dimensional model used today. Bowlby is the \"why\" behind the plane, not a competing theory."
  },
  "self-esteem": {
    "id": "self-esteem",
    "domain": "self",
    "theory": "Popular but revised",
    "title": "Self-Esteem (global)",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "Feeling good about yourself as a global goal — heavily promoted for decades in education, parenting, and self-help. Not refuted, but re-contextualized: less useful than the constructs that replaced it.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Baumeister et al. (2003). Does high self-esteem cause better performance?"
    ],
    "evidence": {
      "status": "revised",
      "knownFor": "High self-esteem as the foundation of success and happiness, pursued through praise, affirmations, and school programs.",
      "shows": "Baumeister et al. (2003), reviewing the literature, found self-esteem programs produced weak or no effects on performance outcomes. Comparative self-esteem (\"better than others\") inflates narcissism; contingent self-esteem collapses under failure — exactly when a stable self-relationship is needed.",
      "instead": "Self-Efficacy for capability beliefs, and Self-Compassion for a stable self-relationship that does not require feeling above others.",
      "survives": "Domain-specific self-evaluations (academic, athletic self-concept) remain useful, and chronic low self-esteem is a real clinical concern."
    }
  },
  "tmt": {
    "id": "tmt",
    "domain": "self",
    "theory": "Popular but revised",
    "title": "Terror Management Theory",
    "tier": "revised",
    "grammar": "Evidence card",
    "summary": "The claim that humans manage existential terror of death by clinging to cultural worldviews and self-esteem, with \"mortality salience\" experiments as the engine. Culturally magnetic; empirically compromised.",
    "bullets": [],
    "bridges": [],
    "sources": [
      "Schimmack (2025). Z-curve analysis of the terror management literature.",
      "Schindler et al. (2023). Mortality salience effects: a meta-analytic re-examination."
    ],
    "evidence": {
      "status": "superseded",
      "knownFor": "Reminders of death intensify worldview defense and self-esteem striving — one of social psychology's most cited experimental literatures, with 800+ studies.",
      "shows": "Schimmack (2025) z-curve analysis of 800+ studies indicates a literature heavily biased by selective reporting. Multi-lab replications (2023) failed to reproduce the core effect, and Schindler et al.'s (2023) meta-analysis with methodological controls finds much weaker effects than the original reports. The mortality-salience effect appears largely artifactual.",
      "instead": "Self-Concept for identity coherence, Self-Compassion for the existential reckoning, and Adult Attachment for the relational security that buffers existential anxiety.",
      "year": "1986",
      "survives": "Existential concerns are real and shape behavior. The broad intuition that mortality awareness matters has standing; the specific experimental paradigm does not."
    }
  },
  "self-compassion": {
    "id": "self-compassion",
    "domain": "self",
    "theory": "Self-Compassion",
    "title": "Self-Compassion",
    "tier": "cornerstone",
    "grammar": "Field / Three axes",
    "summary": "Neff's three-component model of a stable self-relationship: self-kindness, common humanity, and mindfulness — each a continuum against its opposite. Correlates with wellbeing around r ≈ .47 across meta-analyses.",
    "bullets": [
      "Three axes, each in tension with an opposite: kindness ↔ judgment, common humanity ↔ isolation, mindfulness ↔ over-identification",
      "Unconditional, unlike self-esteem — it does not require success or feeling above others",
      "Buffers exactly the failures self-esteem cannot survive",
      "Not self-pity and not letting yourself off the hook — the evidence links it to more accountability, not less"
    ],
    "bridges": [
      {
        "target": "sc-kindness",
        "description": "Warmth toward yourself in failure."
      },
      {
        "target": "sc-humanity",
        "description": "Suffering as shared, not isolating."
      },
      {
        "target": "sc-mindfulness",
        "description": "Balanced awareness without drowning."
      },
      {
        "target": "self-esteem",
        "description": "What self-esteem programs were reaching for, delivered without the fragility."
      },
      {
        "target": "attachment",
        "description": "Secure attachment correlates with self-compassion; each can bootstrap the other."
      },
      {
        "target": "emotion-regulation",
        "description": "Supports adaptive regulation, especially after failure and setback."
      }
    ],
    "sources": [
      "Neff (2003). Self-compassion: an alternative conceptualization of a healthy attitude toward oneself.",
      "Zessin, Dickhäuser & Garbade (2015). The relationship between self-compassion and well-being (meta-analysis)."
    ],
    "note": "The two-factor structure of the Self-Compassion Scale (positive vs negative items) is debated. The construct works; the measurement has open questions."
  },
  "sc-kindness": {
    "id": "sc-kindness",
    "domain": "self",
    "theory": "Self-Compassion",
    "title": "Self-Kindness",
    "tier": "cornerstone",
    "grammar": "Axis / Kindness ↔ Judgment",
    "summary": "Warmth toward yourself in suffering or failure, against the pull of harsh internal criticism.",
    "bullets": [
      "The opposite pole is self-judgment: the internal critic, shame, contempt",
      "Operationally: speak to yourself the way you would to a struggling friend",
      "Not indulgence — kindness holds standards without cruelty"
    ],
    "bridges": [],
    "sources": [
      "Neff (2003). Self-compassion: an alternative conceptualization."
    ]
  },
  "sc-humanity": {
    "id": "sc-humanity",
    "domain": "self",
    "theory": "Self-Compassion",
    "title": "Common Humanity",
    "tier": "cornerstone",
    "grammar": "Axis / Humanity ↔ Isolation",
    "summary": "Recognizing suffering and failure as part of shared human experience, against the pull of \"only me.\"",
    "bullets": [
      "The opposite pole is isolation: feeling uniquely flawed",
      "Failure connects you to everyone who has ever failed — which is everyone",
      "The axis most directly opposed to shame"
    ],
    "bridges": [
      {
        "target": "appraisal-themes",
        "description": "Shame's appraisal (\"failing the ego ideal\") is what this axis dissolves."
      }
    ],
    "sources": [
      "Neff (2003). Self-compassion: an alternative conceptualization."
    ]
  },
  "sc-mindfulness": {
    "id": "sc-mindfulness",
    "domain": "self",
    "theory": "Self-Compassion",
    "title": "Mindfulness",
    "tier": "cornerstone",
    "grammar": "Axis / Mindfulness ↔ Over-identification",
    "summary": "Balanced awareness of painful thoughts and feelings, against the pull of being swept up in them.",
    "bullets": [
      "The opposite pole is over-identification: treating thoughts as facts and moods as identity",
      "Sees the pain clearly without amplifying or suppressing it",
      "The precondition for the other two axes — you cannot be kind to what you will not look at"
    ],
    "bridges": [
      {
        "target": "constructed-emotion",
        "description": "Precise emotional naming is mindfulness with better vocabulary."
      },
      {
        "target": "cbt-automatic-thoughts",
        "description": "Noticing thoughts as thoughts is the shared move with CBT."
      }
    ],
    "sources": [
      "Neff (2003). Self-compassion: an alternative conceptualization."
    ]
  },
  "self-concept": {
    "id": "self-concept",
    "domain": "self",
    "theory": "Self-Concept & Self-Schemas",
    "title": "Self-Concept & Self-Schemas",
    "tier": "include",
    "grammar": "Schema / Network",
    "summary": "Cognitive structures about the self — beliefs, traits, roles, narratives — that filter attention, memory, and behavior. Not just a description of you; a filter on everything you process.",
    "bullets": [
      "Actual Self: who you think you are now",
      "Ideal Self: who you aspire to be — the Actual/Ideal gap produces dejection emotions (sadness, disappointment)",
      "Ought Self: who you feel you should be — the Actual/Ought gap produces agitation emotions (anxiety, guilt)",
      "Schemas are self-fulfilling: they steer what you notice and remember, which confirms the schema"
    ],
    "bridges": [
      {
        "target": "big-five",
        "description": "Traits become incorporated into self-schemas — the vocabulary you self-describe with."
      },
      {
        "target": "appraisal-themes",
        "description": "Self-discrepancies produce predictable emotional appraisals — guilt and anxiety from Ought gaps, dejection from Ideal gaps."
      },
      {
        "target": "cognitive-dissonance",
        "description": "Dissonance usually involves self-concept threat; self-justification defends the schema."
      },
      {
        "target": "bowlby",
        "description": "Internal working models are attachment-flavored self-schemas."
      }
    ],
    "sources": [
      "Markus (1977). Self-schemata and processing information about the self.",
      "Higgins (1987). Self-discrepancy: a theory relating self and affect."
    ],
    "note": "Connective tissue across all six domains — where personality traits, attachment working models, cognitive schemas, and capability beliefs converge. Useful scaffolding more than a heavily tested unitary theory."
  },
  "self-efficacy": {
    "id": "self-efficacy",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Self-Efficacy",
    "tier": "cornerstone",
    "grammar": "Network / Causal",
    "summary": "Belief in your capability to execute the actions a situation requires. Domain-specific, built from four sources, and the single most reliable lever in behavior change.",
    "bullets": [
      "Domain-specific, not global — high efficacy at work can coexist with low efficacy in relationships",
      "Four sources, in order of power: mastery experiences > vicarious experience > verbal persuasion > physiological states",
      "Consequences: higher goals chosen, more effort, longer persistence, faster recovery from setbacks",
      "Built, not innate — the reliable route is small wins in the actual domain you want to grow"
    ],
    "bridges": [
      {
        "target": "efficacy-mastery",
        "description": "Earned success — the strongest source."
      },
      {
        "target": "efficacy-vicarious",
        "description": "Watching similar others succeed."
      },
      {
        "target": "efficacy-persuasion",
        "description": "Credible encouragement — real but bounded."
      },
      {
        "target": "efficacy-physiological",
        "description": "How you read your body's signals."
      },
      {
        "target": "sdt-competence",
        "description": "Same construct, two names — SDT calls it the competence need."
      },
      {
        "target": "goal-setting",
        "description": "Efficacy is the primary mediator of goal pursuit."
      },
      {
        "target": "conscientiousness",
        "description": "The trait basis of agentic action."
      }
    ],
    "sources": [
      "Bandura (1977). Self-efficacy: toward a unifying theory of behavioral change.",
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  },
  "efficacy-mastery": {
    "id": "efficacy-mastery",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Mastery Experiences",
    "tier": "cornerstone",
    "grammar": "Network / Source",
    "summary": "Authentic, earned successes — the most powerful source of self-efficacy.",
    "bullets": [
      "Past success in the domain raises belief in future capability; past failure erodes it",
      "Genuine difficulty matters — easy wins barely move belief",
      "Recovery from setbacks, not just success, is what builds durable efficacy"
    ],
    "bridges": [
      {
        "target": "cbt-behavioral-activation",
        "description": "Activation manufactures mastery experiences on purpose."
      }
    ],
    "sources": [
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  },
  "efficacy-vicarious": {
    "id": "efficacy-vicarious",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Vicarious Experience",
    "tier": "cornerstone",
    "grammar": "Network / Source",
    "summary": "Watching similar others succeed raises the belief that you can too.",
    "bullets": [
      "\"If they can, maybe I can\" — model similarity (age, background, starting point) is critical",
      "Less powerful than mastery but more accessible when direct experience is limited",
      "Cuts both ways: watching similar peers fail lowers efficacy"
    ],
    "bridges": [],
    "sources": [
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  },
  "efficacy-persuasion": {
    "id": "efficacy-persuasion",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Verbal Persuasion",
    "tier": "cornerstone",
    "grammar": "Network / Source",
    "summary": "Credible encouragement from others can raise efficacy — within limits.",
    "bullets": [
      "Bounded: persuasion boosts belief but cannot substitute for mastery",
      "Credibility and specificity matter — generic praise moves little",
      "Flattery without skill-building produces fragile efficacy that collapses on contact with difficulty"
    ],
    "bridges": [],
    "sources": [
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  },
  "efficacy-physiological": {
    "id": "efficacy-physiological",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Physiological & Emotional States",
    "tier": "cornerstone",
    "grammar": "Network / Source",
    "summary": "How you interpret your body's signals shapes your capability beliefs.",
    "bullets": [
      "Arousal (racing heart, sweating) can be read as anxiety or as readiness",
      "Reframing arousal as excitement raises efficacy versus reading it as threat",
      "Fatigue and low mood depress perceived efficacy — timing and recovery matter"
    ],
    "bridges": [
      {
        "target": "reappraisal",
        "description": "Arousal-as-readiness is reappraisal applied to your own body."
      },
      {
        "target": "constructed-emotion",
        "description": "The same physiological state, differently constructed."
      }
    ],
    "sources": [
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  },
  "efficacy-consequences": {
    "id": "efficacy-consequences",
    "domain": "self",
    "theory": "Self-Efficacy",
    "title": "Behavioral consequences",
    "tier": "cornerstone",
    "grammar": "Network / Outcomes",
    "summary": "What the belief does once built: efficacy shapes which goals you choose and how you pursue them.",
    "bullets": [
      "Goal choice: higher efficacy → harder goals chosen voluntarily",
      "Effort: belief that effort pays mobilizes more of it",
      "Persistence: setbacks read as information rather than verdicts",
      "Recovery: faster bounce-back from failure"
    ],
    "bridges": [
      {
        "target": "goal-moderators",
        "description": "Efficacy is the moderator that decides whether hard goals energize."
      }
    ],
    "sources": [
      "Bandura (1997). Self-Efficacy: The Exercise of Control."
    ]
  }
};
