export const INSPECTOR_COPY: Record<
  string,
  {
    eyebrow: string;
    title: string;
    summary: string;
    bullets: string[];
    note?: string;
  }
> = {
  openness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Openness',
    summary: 'Appreciation for ideas, aesthetics, curiosity, and breadth of experience.',
    bullets: ['Facet pair: Intellect, Aesthetic Openness', 'Best treated as a high-level trait with stable substructure', 'Drill-down should emphasize curiosity and pattern-seeking'],
  },
  conscientiousness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Conscientiousness',
    summary: 'Tendency to be organized, dependable, and persistent in goal pursuit.',
    bullets: ['Facet pair: Industriousness, Orderliness', 'Useful bridge into goal setting and behavior change', 'Displays the strongest practical overlap with persistence'],
  },
  extraversion: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Extraversion',
    summary: 'Energy, positive affect, sociability, and drive toward the external world.',
    bullets: ['Facet pair: Enthusiasm, Assertiveness', 'Facet labels are corrected to DeYoung / Big Five facet vocabulary', 'Warmth and dominance should read as separate subcomponents'],
  },
  agreeableness: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Agreeableness',
    summary: 'Compassionate, cooperative, and conflict-sensitive interpersonal style.',
    bullets: ['Facet pair: Compassion, Politeness', 'Useful for distinguishing care from norm-respect', 'Low agreeableness often maps to friction and antagonism'],
  },
  neuroticism: {
    eyebrow: 'Hierarchy / Trait',
    title: 'Neuroticism',
    summary: 'Sensitivity to threat, stress, and negative emotion.',
    bullets: ['Facet pair: Withdrawal, Volatility', 'Works well as a bridge into emotion regulation', 'High values do not imply dysfunction, only reactivity'],
  },
  'dual-process': {
    eyebrow: 'Paired Duality',
    title: 'Dual Process Theory',
    summary: 'System 1 is fast and automatic; System 2 is slower, effortful, and deliberative.',
    bullets: ['Render as two side-by-side systems with interaction arrows', 'Use this as the organizing frame for judgment and intervention', 'Keep the systems in dialogue rather than isolated'],
  },
  heuristics: {
    eyebrow: 'Catalog / Grid',
    title: 'Heuristics & Biases',
    summary: 'A catalog of common shortcuts and predictable judgment errors.',
    bullets: ['Anchoring, availability, framing, confirmation, loss aversion', 'Each item should be browsable as an independent card', 'Catalog layouts beat trying to force a single hierarchy'],
  },
  cbt: {
    eyebrow: 'Loop / Process',
    title: 'Cognitive Behavioral Model',
    summary: 'Thoughts, feelings, and behavior form a loop that can be interrupted and revised.',
    bullets: ['Show the loop explicitly', 'Emphasize the intervention point of restructuring', 'This is a process view, not a static trait map'],
  },
  sdt: {
    eyebrow: 'Needs / Bento',
    title: 'Self-Determination Theory',
    summary: 'Autonomy, competence, and relatedness are the three core needs behind motivation.',
    bullets: ['Three equal-weight needs should read as co-anchors', 'Use a 3-part bento layout', 'Needs are not steps; they are concurrent conditions'],
  },
  'goal-setting': {
    eyebrow: 'Process / Flow',
    title: 'Goal-Setting Theory',
    summary: 'Specific, challenging goals with feedback produce sustained performance change.',
    bullets: ['Use a stepwise flow with feedback loops', 'Connect commitment, specificity, feedback, and persistence', 'This is the process half of the motivation domain'],
  },
  attachment: {
    eyebrow: 'Field / Plane',
    title: 'Adult Attachment Theory',
    summary: 'Attachment is best understood as a 2D field: anxiety and avoidance are continuous dimensions.',
    bullets: ['Render the field as a Cartesian plane with quadrant labels', 'Use styles as accessibility shortcuts, not the core ontology', 'The continuity note belongs in the inspector'],
    note: 'Most users sit between regions. Styles are helpful labels, but the underlying model is dimensional.',
  },
  'emotion-regulation': {
    eyebrow: 'Timeline / Strategy',
    title: 'Emotion Regulation Process Model',
    summary: 'Emotion unfolds over time, with multiple intervention points available along the timeline.',
    bullets: ['Use a horizontal stepper with numbered stages', 'Show where reappraisal and suppression fit', 'The sequence should feel chronological and actionable'],
  },
  appraisal: {
    eyebrow: 'Branching / Flow',
    title: 'Appraisal Theory',
    summary: 'Emotion changes as the mind evaluates meaning, relevance, and control.',
    bullets: ['Render as a branching decision tree', 'Show how interpretation changes emotion', 'Use it as the bridge between cognition and emotion'],
  },
  'self-efficacy': {
    eyebrow: 'Network / Sources',
    title: 'Self-Efficacy',
    summary: 'Capability beliefs emerge from mastery, modeling, persuasion, and physiological cues.',
    bullets: ['Render sources feeding a central belief node', 'Link the belief node to action and persistence', 'This is the clearest network grammar in the app'],
  },
  'self-compassion': {
    eyebrow: 'Field / Triad',
    title: 'Self-Compassion',
    summary: 'Self-kindness, common humanity, and mindfulness work together as a three-part system.',

    bullets: ['Use a three-axis or triad layout', 'The grammar should feel dimensional, not categorical', 'This content bridges attachment, emotion, and identity'],
  },

  // Cognition
  'dual-process-system1': {
    eyebrow: 'Paired Duality / System',
    title: 'System 1',
    summary: 'Fast, automatic, and effortless. Operates by default, pattern-matching from experience.',
    bullets: [
      'Parallel processing — handles multiple inputs simultaneously',
      'Source of heuristics, emotional reactions, and intuition',
      'Generates quick answers; hands off to System 2 only when challenged',
      'Cognitive load pushes behaviour further toward System 1',
    ],
    note: 'System 1 is not irrational — optimised for speed. Most decisions are System 1, and most are fine.',
  },
  'dual-process-system2': {
    eyebrow: 'Paired Duality / System',
    title: 'System 2',
    summary: 'Slow, deliberate, and effortful. Monitors System 1 output and intervenes when the stakes are high.',
    bullets: [
      'Sequential processing — handles one complex problem at a time',
      'Required for logic, planning, and override of intuition',
      'Limited capacity — cognitive load depletes System 2 availability',
      'Expertise moves tasks from System 2 back to System 1',
    ],
    note: 'Strong organising metaphor, not a literal two-brain model. Parts of the priming research in Thinking Fast and Slow have failed replication.',
  },
  anchoring: {
    eyebrow: 'Heuristic / Bias',
    title: 'Anchoring',
    summary: 'The first number you encounter disproportionately influences all subsequent estimates.',
    bullets: [
      'Effect holds even when anchors are arbitrary or irrelevant',
      'Resistant to explicit warnings — knowing it exists does not eliminate it',
      'Applies in negotiation, medical diagnosis, legal sentencing',
    ],
  },
  availability: {
    eyebrow: 'Heuristic / Bias',
    title: 'Availability',
    summary: 'Easily recalled examples feel more frequent than they are.',
    bullets: [
      'Vivid, recent, or emotionally loaded events feel more probable',
      'Explains overestimation of dramatic risks (plane crashes) vs common ones (car accidents)',
      'Media exposure amplifies availability effects at population scale',
    ],
  },
  framing: {
    eyebrow: 'Heuristic / Bias',
    title: 'Framing',
    summary: 'Identical information feels different depending on how it is presented.',
    bullets: [
      '"90% survival rate" vs "10% mortality rate" — same fact, different emotional weight',
      'Loss frames trigger stronger responses than gain frames',
      'One of the most robustly replicated effects in judgment research',
    ],
  },
  'confirmation-bias': {
    eyebrow: 'Heuristic / Bias',
    title: 'Confirmation Bias',
    summary: 'We seek, interpret, and remember evidence that confirms what we already believe.',
    bullets: [
      'Operates at the level of search (what we look for) and interpretation (how we read it)',
      'Strengthened by identity-linked beliefs — the more the belief defines us, the stronger the bias',
      'Dissonance is often resolved via confirmation rather than belief revision',
    ],
  },
  'loss-aversion': {
    eyebrow: 'Heuristic / Bias',
    title: 'Loss Aversion',
    summary: 'Losses feel approximately twice as powerful as equivalent gains.',
    bullets: [
      'Explains status quo bias — defaults benefit from the asymmetry',
      'Drives risk aversion in gain frames and risk-seeking in loss frames',
      'Core mechanism behind Prospect Theory (Kahneman and Tversky)',
    ],
  },
  'cognitive-dissonance': {
    eyebrow: 'Include / Process',
    title: 'Cognitive Dissonance',
    summary: 'Holding two conflicting cognitions creates discomfort — resolved usually by rationalising rather than changing.',
    bullets: [
      'Preferred resolution: rationalise, not change behaviour or belief',
      'Self-justification and effort justification are common everyday forms',
      'Construct survives; 1959 induced-compliance paradigm did not replicate (Vaidis et al. 2024, 39-lab)',
    ],
    note: 'Teach the phenomenon (rationalisation, self-justification), not the 1959 study design.',
  },
  'attribution-theory': {
    eyebrow: 'Include / Process',
    title: 'Attribution Theory and the FAE',
    summary: 'We explain behaviour by attributing it to the person or the situation — and systematically over-attribute to the person.',
    bullets: [
      'Fundamental Attribution Error: over-attribute others behaviour to disposition, under-attribute to situation',
      'Self-Serving Bias: my successes = me; my failures = circumstances',
      'FAE is strongest in Western samples; effect magnitude varies cross-culturally',
    ],
    note: 'FAE is also a System 1 heuristic for person-perception. Effect is robust; magnitude varies more than the canonical framing suggests.',
  },

  // Motivation
  'sdt-autonomy': {
    eyebrow: 'SDT / Need',
    title: 'Autonomy',
    summary: 'Acting in alignment with your own values — feeling that actions originate from the self.',
    bullets: [
      'Not independence — autonomy is compatible with accepting guidance from others',
      'Controlling environments (surveillance, contingent rewards) undermine it',
      'Intrinsic motivation depends on perceived autonomy',
    ],
  },
  'sdt-competence': {
    eyebrow: 'SDT / Need',
    title: 'Competence',
    summary: 'Feeling capable and effective. The need to master challenges and produce outcomes.',
    bullets: [
      'Conceptually identical to Self-Efficacy (Bandura) — same construct, two frameworks',
      'Optimal challenge is key: too easy = boredom; too hard = threat',
      'Informational (not controlling) positive feedback supports competence',
    ],
  },
  'sdt-relatedness': {
    eyebrow: 'SDT / Need',
    title: 'Relatedness',
    summary: 'Feeling cared for and caring for others. Connection to people who matter.',
    bullets: [
      'Quality of connection matters more than quantity',
      'Insecure attachment directly starves the relatedness need',
      'Relatedness supports internalisation of values from social context',
    ],
  },
  'regulatory-focus': {
    eyebrow: 'Include / Dimensional',
    title: 'Regulatory Focus Theory',
    summary: 'People pursue goals with a promotion orientation (growth, gains) or prevention orientation (security, loss-avoidance).',
    bullets: [
      'Promotion: eagerness strategies, higher risk tolerance, dejection when failing',
      'Prevention: vigilance strategies, caution, agitation when failing',
      'Fit between orientation and goal frame improves performance and satisfaction',
    ],
    note: 'Most people use both orientations contextually. Regulatory focus is a tendency, not a fixed type.',
  },
  'expectancy-theory': {
    eyebrow: 'Include / Formula',
    title: 'Expectancy Theory',
    summary: 'Motivation = Expectancy x Instrumentality x Valence. A diagnostic tool for finding where motivation breaks down.',
    bullets: [
      'Expectancy: Can my effort produce good performance? (links to Self-Efficacy)',
      'Instrumentality: Will good performance lead to outcomes?',
      'Valence: Do I actually value those outcomes?',
    ],
    note: 'When motivation fails, identify which factor is closest to zero — that is the lever to work on.',
  },

  // Relationships
  'attachment-secure': {
    eyebrow: 'Field Region / Attachment',
    title: 'Secure Attachment',
    summary: 'Low anxiety, low avoidance. Comfortable with both closeness and independence.',
    bullets: [
      'Communicates needs directly; tolerates partner autonomy without threat',
      'Uses the relationship as a secure base for exploration and growth',
      'Most predictive of relationship satisfaction and adaptive emotion regulation',
    ],
    note: 'Most people sit between regions. This describes a tendency on a continuous spectrum, not a fixed type.',
  },
  'attachment-anxious': {
    eyebrow: 'Field Region / Attachment',
    title: 'Anxious / Preoccupied',
    summary: 'High anxiety, low avoidance. Craves closeness but fears abandonment.',
    bullets: [
      'Hyperactivates the attachment system — amplifies bids for contact and reassurance',
      'Sensitive to rejection signals; reads ambiguity as threat',
      'Linked to higher emotional reactivity and lower use of reappraisal',
    ],
    note: 'Patterns can shift with insight, therapy, and experience of secure relationships.',
  },
  'attachment-dismissing': {
    eyebrow: 'Field Region / Attachment',
    title: 'Dismissing-Avoidant',
    summary: 'Low anxiety, high avoidance. Values self-reliance; deactivates attachment needs.',
    bullets: [
      'Discomfort with emotional intimacy and disclosure',
      'Deactivating strategies: minimising, distracting, maintaining distance',
      'Often presents as confident independence — the cost is reduced depth of connection',
    ],
    note: 'Avoidance is often an adaptation to early environments that rewarded self-sufficiency.',
  },
  'attachment-fearful': {
    eyebrow: 'Field Region / Attachment',
    title: 'Fearful-Avoidant',
    summary: 'High anxiety, high avoidance. Wants closeness but fears it simultaneously.',
    bullets: [
      'Oscillates between seeking and withdrawing — the pull and the push',
      'Associated with more disorganised behavioural patterns under conflict',
      'The disorganised label has thinner measurement support than the two-dimensional model',
    ],
    note: 'Understanding the two competing drives (approach and avoidance) is often more useful than the label itself.',
  },
  bowlby: {
    eyebrow: 'Background / Origin',
    title: 'Bowlby Attachment Theory',
    summary: 'Infants form bonds with caregivers that become internal working models shaping adult relationships.',
    bullets: [
      'Attachment system activates under threat — its aim is proximity to caregiver',
      'Internal working models: beliefs about self-worth and others availability',
      'Caregiver consistency (not perfection) is the primary driver of security',
    ],
    note: 'Hazan and Shaver extended it to adult romantic relationships; Brennan and Fraley refined it into the dimensional model used today.',
  },

  // Emotion
  'er-situation-selection': {
    eyebrow: 'ER Strategy / Early',
    title: 'Situation Selection',
    summary: 'Choose which situations to enter or avoid based on their likely emotional impact.',
    bullets: [
      'The earliest — and often most effective — point of intervention',
      'Requires knowing your own emotional patterns before the situation begins',
      'Examples: declining a draining social event; scheduling hard conversations for peak energy',
    ],
  },
  'er-situation-modification': {
    eyebrow: 'ER Strategy / Early',
    title: 'Situation Modification',
    summary: 'Change the situation itself to alter its emotional trajectory.',
    bullets: [
      'More flexible than avoidance — you stay in the situation but reshape it',
      'Examples: moving a difficult conversation to a private setting; breaking a task into smaller pieces',
      'Requires some agency over environmental conditions',
    ],
  },
  'er-attentional-deployment': {
    eyebrow: 'ER Strategy / Middle',
    title: 'Attentional Deployment',
    summary: 'Direct attention within the situation — toward or away from emotionally charged elements.',
    bullets: [
      'Distraction: short-term effective for mild negative emotions',
      'Concentration: sustained focus on neutral or positive aspects',
      'Rumination is attentional deployment gone wrong — sustained focus on negative content amplifies distress',
    ],
  },
  reappraisal: {
    eyebrow: 'ER Strategy / Middle-Late',
    title: 'Cognitive Reappraisal',
    summary: 'Change how you interpret the situation — the emotion changes with it. The most empirically supported regulation strategy.',
    bullets: [
      'Intervenes before the emotional response consolidates',
      'Lower physiological and relational cost than suppression',
      'Examples: nerves as excitement; a difficult conversation as a relationship investment',
    ],
    note: 'Reappraisal requires deliberate System 2 engagement. It is the formal target of CBT cognitive restructuring — both describe the same mechanism.',
  },
  suppression: {
    eyebrow: 'ER Strategy / Late',
    title: 'Suppression',
    summary: 'Inhibiting outward expression of emotion after it has emerged. The least effective strategy.',
    bullets: [
      'Physiological: arousal continues internally despite hidden expression',
      'Cognitive: increases cognitive load, impairs memory of the interaction',
      'Relational: partners of suppressors report feeling less close and less understood',
    ],
    note: 'Suppression is not the same as composure. Choosing when and how to express is different from blanket inhibition.',
  },
  'constructed-emotion': {
    eyebrow: 'Include / Perspective',
    title: 'Constructed Emotion Theory',
    summary: 'Emotions are not hard-wired responses to stimuli. The brain constructs them from interoception, past experience, and cultural concepts.',
    bullets: [
      'Interoception + prior experience + cultural concepts + context = the emotion you feel',
      'Emotion granularity: more precise vocabulary leads to finer-grained experience',
      'Anxious and excited can be the same physiological state, differently constructed',
    ],
    note: 'Active theoretical debate. Meta-analyses fail to find unique neural fingerprints for specific emotions — a point in Barrett favour. Present as one perspective.',
  },
  'appraisal-primary': {
    eyebrow: 'Appraisal / Stage',
    title: 'Primary Appraisal',
    summary: 'The first evaluation: is this event relevant to me, and is it good or bad?',
    bullets: [
      'Three outcomes: irrelevant (no emotion), benign/positive, or stressful (proceed to secondary)',
      'Operates rapidly, often below awareness — System 1 does the first pass',
      'Same event, different appraisal leads to different emotion in different people',
    ],
  },
  'appraisal-secondary': {
    eyebrow: 'Appraisal / Stage',
    title: 'Secondary Appraisal',
    summary: 'The evaluation of coping capacity: can I handle this?',
    bullets: [
      'Threat: potential harm, low perceived coping — fear, anxiety',
      'Challenge: demanding but manageable — eagerness, drive',
      'Harm/Loss: damage already done — sadness, anger',
    ],
    note: 'This is what cognitive reappraisal changes. CBT restructuring targets the appraisal, not the event.',
  },

  // Self and Identity
  'efficacy-mastery': {
    eyebrow: 'Self-Efficacy / Source',
    title: 'Mastery Experiences',
    summary: 'Authentic, earned successes are the most powerful source of self-efficacy.',
    bullets: [
      'Past success in the domain raises belief in future capability',
      'Genuine difficulty matters — easy wins have limited impact on belief',
      'Recovery from setbacks (not just success) is what builds durable efficacy',
    ],
  },
  'efficacy-vicarious': {
    eyebrow: 'Self-Efficacy / Source',
    title: 'Vicarious Experience',
    summary: 'Watching similar others succeed raises belief that you can too.',
    bullets: [
      'If they can, maybe I can — model similarity is critical (age, background, context)',
      'Less powerful than mastery but more accessible when direct experience is limited',
      'Social comparison cuts both ways — watching peers fail can lower efficacy',
    ],
  },
  'efficacy-persuasion': {
    eyebrow: 'Self-Efficacy / Source',
    title: 'Verbal Persuasion',
    summary: 'Credible encouragement from others can raise efficacy — within limits.',
    bullets: [
      'Effect is bounded: persuasion can boost belief but cannot substitute for mastery',
      'Credibility and specificity of source matters — generic praise is less effective',
      'Excessive flattery without skill-building produces fragile efficacy',
    ],
  },
  'efficacy-physiological': {
    eyebrow: 'Self-Efficacy / Source',
    title: 'Physiological and Emotional States',
    summary: 'How you interpret your body signals shapes your capability beliefs.',
    bullets: [
      'Arousal (racing heart, sweating) can be read as anxiety or readiness',
      'Reframing arousal as excitement raises efficacy vs reading it as threat',
      'Fatigue and low mood lower perceived efficacy — timing and recovery matter',
    ],
  },
  'self-concept': {
    eyebrow: 'Include / Structure',
    title: 'Self-Concept and Self-Schemas',
    summary: 'Cognitive structures about the self that filter attention, memory, and behaviour.',
    bullets: [
      'Actual Self: who you think you are now',
      'Ideal Self: who you aspire to be — gap produces dejection emotions',
      'Ought Self: who you feel you should be — gap produces agitation and guilt',
    ],
    note: 'Self-concept is connective tissue across all six domains — where personality traits, attachment patterns, cognitive schemas, and capability beliefs converge.',
  },
};

export type InspectorKey = keyof typeof INSPECTOR_COPY;

export default INSPECTOR_COPY;
