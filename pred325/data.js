// PRED 325 midterm study data — built from the lecture decks (files Week 1–5) and the syllabus.
var DATA = window.DATA = {};

DATA.weeks = [
  { id: 1, short: "Play", title: "Learning Math & Science Through Play", reading: "Skene et al. (2022)" },
  { id: 2, short: "Math I", title: "Number, Quantity, Classification & Patterns", reading: "Clements & Sarama (2024)" },
  { id: 3, short: "Math II", title: "Space, Shape, Measurement & Data", reading: "Clements & Sarama (2023)" },
  { id: 4, short: "Inquiry", title: "Young Children as Scientists: Inquiry & Process Skills", reading: "Ramanathan et al. (2022)" },
  { id: 5, short: "Science+", title: "Enhancing Science Learning in Early Childhood", reading: "Gangal et al. (2026)" }
];

/* ---------------- NOTES ---------------- */
DATA.notes = {
1: `
<h3>Three experiences with the same blocks</h3>
<table><tr><th>Case</th><th>What happens</th><th>Best fit</th><th>Decisive feature</th></tr>
<tr><td>A</td><td>Children build whatever they choose; adult watches for safety.</td><td><b>Free play</b></td><td>Children set the direction</td></tr>
<tr><td>B</td><td>Adult models a bridge; children copy each step.</td><td><b>Direct instruction</b></td><td>Adult controls the procedure</td></tr>
<tr><td>C</td><td>Children design a bridge for an animal; adult asks “How could you check whether it will fit?”</td><td><b>Guided play</b></td><td>Learning goal + genuine child choice</td></tr></table>
<p class="tip">C becomes B when the adult takes over the procedure and the child no longer makes consequential choices.</p>

<h3>What makes play “guided”? (3 features)</h3>
<ol><li><b>Learning goal</b>: the adult plans a meaningful learning opportunity.</li>
<li><b>Child agency</b>: children make <i>consequential</i> choices within the play.</li>
<li><b>Flexible guidance</b>: the adult responds to what children do and understand.</li></ol>
<p>Classification into free play, guided play or direct instruction depends on <b>agency, learning goals and guidance</b>.</p>

<h3>How guidance might support learning</h3>
<ul><li><b>A meaningful goal</b>: the child has a reason to compare, count or investigate.</li>
<li><b>A responsive prompt</b>: the adult draws attention to a relevant relationship.</li>
<li><b>A chance to try again</b>: the child tests an idea and may revise an explanation.</li></ul>

<h3>Skene et al. (2022): the study</h3>
<div class="stats"><div><b>39</b><span>studies reviewed</span></div><div><b>17</b><span>studies in meta-analyses</span></div><div><b>12</b><span>pooled outcome estimates</span></div></div>
<p>Most studies: children <b>aged 3–6</b>. Guided play was compared with <b>direct instruction</b> or <b>free play</b>.</p>
<table><tr><th>Outcome</th><th>Compared with</th><th>g [95% CI]</th><th>Reading</th></tr>
<tr><td>Early maths</td><td>Direct instruction</td><td>0.24 [0.12, 0.35]</td><td>favours guided play</td></tr>
<tr><td>Shape knowledge</td><td>Direct instruction</td><td>0.63 [0.17, 1.09]</td><td>favours guided play</td></tr>
<tr><td>Spatial/maths vocabulary</td><td>Direct instruction</td><td>−0.17 [−1.09, 0.75]</td><td>no clear difference (CI crosses 0)</td></tr>
<tr><td>Spatial/maths vocabulary</td><td>Free play</td><td>0.93 [0.10, 1.75]</td><td>favours guided play</td></tr></table>
<p class="tip"><b>g = standardized effect size, NOT a percentage gain.</b> “Children learned 24% more maths” is wrong.</p>

<h3>What we can and cannot conclude</h3>
<ul><li><b>Supported cautiously:</b> some maths outcomes and <b>task switching</b> favoured guided play.</li>
<li><b>Uncertain:</b> many other pooled outcomes showed no clear difference.</li>
<li><b>Science boundary:</b> science evidence was too limited for confident conclusions.</li>
<li><b>Confidence limits:</b> risk of bias, small samples, varied implementation.</li></ul>
<p><b>Evidence detective claims (all overstated):</b> “better than every other approach” (too broad) · “24% more” (misreads g) · “proves it improves science learning” (science evidence too limited; “proves” too strong).</p>

<h3>Case A: “C cannot be a triangle. It is upside down.”</h3>
<p>The child is using a <b>prototype</b> (orientation) instead of <b>properties</b>. Learning clue: three straight sides and a closed figure. Follow-up: <i>“E has three straight sides. What else should we check?”</i> Child choice: the child chooses an example to discuss and how to explain the decision. Don't just tell (“C is a triangle, repeat after me”).</p>

<h3>Case B: Ramp comparison</h3>
<p>“Higher ramps make cars go farther”, but Trial A and B differ in height <b>and</b> car <b>and</b> release (push). Not a fair comparison. Better test: change height only; keep car, surface, release fixed; measure from the ramp end with the same unit; invite the child to suggest a change and a prediction.</p>

<h3>What counts as learning evidence?</h3>
<table><tr><th>Observation</th><th>What it can support</th></tr>
<tr><td>“They enjoyed the cars.”</td><td>Engagement only</td></tr>
<tr><td>“She checked the open shape before sorting.”</td><td>Possible attention to closure</td></tr>
<tr><td>“He used the same car and release point.”</td><td>Possible attention to a fair comparison</td></tr></table>`,

2: `
<h3>“She can count to twenty”</h3>
<p>Saying number words 1–20 shows only the <b>verbal sequence (stable order)</b>. It does not tell us whether she can count a collection (one-to-one) or knows how many (cardinality). Observe her across tasks.</p>

<h3>Learning trajectories: a planning lens</h3>
<ol><li><b>Goal</b>: which mathematical idea are we working toward?</li>
<li><b>Progression</b>: what does the child currently seem to understand?</li>
<li><b>Instruction</b>: which experience could support a next step?</li></ol>
<p>Use with repeated observation across tasks.</p>

<h3>Representations of number</h3><p>Written numeral (5) · spoken word (“five”) · a set of five objects. Goal: connect the symbol to the quantity.</p>

<h3>Counting a collection</h3>
<table><tr><th>Idea</th><th>What we look/listen for</th></tr>
<tr><td><b>Stable order</b></td><td>Number words follow the conventional sequence.</td></tr>
<tr><td><b>One-to-one correspondence</b></td><td>Each item receives exactly one number word.</td></tr>
<tr><td><b>Cardinality</b></td><td>The final count word tells how many are in the set.</td></tr></table>
<p><b>Ali</b> points A-B-C-C-D-E and says 1-2-3-4-5-6 for five dots → counted C twice (one-to-one error). Response: <i>“How could we make sure each dot gets one count?”</i> Follow-up: let Ali choose a starting point and a pointing path.</p>

<h3>Subitizing & part–whole</h3>
<ul><li><b>Perceptual subitizing</b>: recognizing a small quantity directly (e.g. 3 dots).</li>
<li><b>Conceptual subitizing</b>: seeing a total through smaller groups (e.g. 6 as 3 and 3).</li>
<li>Question: <i>“Which parts did you see? How do they make the whole?”</i> We care about the child's way of seeing.</li></ul>

<h3>Same number, different spacing</h3>
<p>Ece: “B has more. It goes farther.” She is judging by <b>length of the row</b>, not number. Ask: <i>“How could we check?”</i> (match one-to-one, count both rows).</p>
<p><b>Five in more than one way</b> (imaginary café, 5 seats): 2+3, 4+1, 5+0… What stays the same when the groups change? The total.</p>

<h3>Evidence of quantity understanding</h3>
<ul><li><b>Counting</b>: coordinates each word with one item.</li><li><b>Quantity</b>: explains why a spread-out set still has five.</li><li><b>Relationships</b>: shows/describes different parts that make five.</li></ul>

<h3>Classification</h3>
<p><b>Attribute</b> = a property (shape, size). <b>Rule</b> = a stated condition for belonging to a group.</p>
<p>Collection: A large circle, B small circle, C large triangle, D small triangle, E large square, F small square.</p>
<table><tr><th>Rule</th><th>Members</th><th>Challenge</th></tr>
<tr><td>Circle</td><td>A, B</td><td>Why does C not belong?</td></tr>
<tr><td>Large</td><td>A, C, E</td><td>Why does B not belong?</td></tr>
<tr><td>Large AND circle</td><td>A</td><td>Which condition does B fail? (large)</td></tr></table>
<p>A can belong to more than one group. When the rule changes from shape to size and a child says “B stays with A, they're both circles”, the child is still attending to the <b>old attribute</b>. Make the new rule explicit and ask the child to check each item against it.</p>

<h3>Patterns</h3>
<ul><li>Find the <b>smallest repeating unit</b> (core): tap-clap; ●●▲.</li>
<li>Explain the unit <b>before</b> naming the next item.</li>
<li>Keep the structure, change the actions/sounds (transfer: ●●▲ → “ding ding dong”).</li>
<li>Repair: ●●▲ ●●▲ ●▲▲ → the last group should be ●●▲; replace the middle ▲ with ●.</li>
<li>Deniz: “A circle always comes after a triangle”, which is true locally but does not describe the full unit (circle, circle, triangle). Next question should reveal the repeated chunk: <i>“What part keeps repeating?”</i></li></ul>

<h3>A mathematical play invitation has</h3>
<p><b>One goal · a child's choice · a teacher move (prompt) · evidence</b>. Examples: five guests at a café (split 5), secret club for shapes (which labels belong & why), robot's repeating message (invent a unit for a partner).</p>`,

3: `
<p class="tip">Lens for every child statement: <b>NOTICE → INTERPRET → EXTEND</b>. Ask children to <b>predict and describe before they act</b>.</p>
<h3>Space</h3>
<ul><li><b>Spatial relations</b>: in / on / under / between / near / far</li>
<li><b>Orientation</b>: same object, different viewpoint</li>
<li><b>Transformations</b>: turning, flipping, mentally rotating</li>
<li><b>Representation</b>: routes, maps, diagrams, locations</li></ul>
<p>Spatial language makes relationships explicit. Describe positions without “here/there” (reference points, distance).</p>
<table><tr><th>Instead of…</th><th>Try…</th></tr>
<tr><td>“Put it there.”</td><td>“Where is it in relation to the box?”</td></tr>
<tr><td>“Turn it until it fits.”</td><td>“How do you think it needs to turn? Why?”</td></tr>
<tr><td>“Copy my route.”</td><td>“Tell me how someone could get from A to B.”</td></tr></table>

<h3>Shape: from prototypes to properties</h3>
<ol><li>“It <b>looks like</b> a triangle.” → prototype / whole appearance</li>
<li>“It has <b>3 straight sides</b>.” → explicit properties</li>
<li>“<b>Any</b> 3-sided polygon is a triangle.” → class inclusion / definition</li></ol>
<p>Teach by deliberately varying <b>size, orientation, proportion</b> and including <b>non-examples</b> (open shapes, curved sides). A child who says “only A (the equilateral, point-up one) is a triangle” is attending to the prototype.</p>
<p><b>Square & rectangle:</b> rectangle = quadrilateral with 4 right angles → a square is a special rectangle. Avoid “Is it a square <i>OR</i> a rectangle?”; ask <i>“What names fit this shape? Why?”</i></p>
<p><b>Composition</b> (parts → wholes): bridge to spatial reasoning and later area. “Can you make a different shape with the same two pieces? What changed, what stayed the same? How do you know there are no gaps or overlaps?”</p>

<h3>Measurement: a concept, not a tool</h3>
<table><tr><th>Idea</th><th>Meaning</th></tr>
<tr><td><b>Attribute</b></td><td>What property? (length, area, volume…)</td></tr>
<tr><td><b>Unit</b></td><td>An equal-sized unit stands for “one”</td></tr>
<tr><td><b>Iteration</b></td><td>Repeat the unit without gaps/overlaps</td></tr>
<tr><td><b>Zero / start</b></td><td>Coordinate the start with the first unit</td></tr>
<tr><td><b>Number</b></td><td>The count tells how many units fit</td></tr></table>
<p>A child can read “7” on a ruler and still not understand measurement. Measurement maps a continuous attribute onto equal units.</p>
<p><b>Who measured correctly? (all said “6 blocks”)</b> Aylin: blocks end-to-end from the start ✓. Bora: <b>gaps</b> between blocks (iteration error). Cem: units not aligned with the start/end (zero/start error). Same number ≠ same measurement.</p>
<p><b>Transitivity:</b> A &gt; B and B &gt; C ⇒ A &gt; C. Compare through an intermediate object, before numbers.</p>
<table><tr><th>Weak question</th><th>Better question</th></tr>
<tr><td>“How many?” (only counting)</td><td>“How many units long? How did each unit cover the length?”</td></tr>
<tr><td>“Start at zero.” (a rule)</td><td>“Why does where we start matter?”</td></tr>
<tr><td>“Use the same blocks.” (a procedure)</td><td>“What would happen if the units were different sizes?”</td></tr></table>

<h3>Data begins with a question</h3>
<p><b>ASK → COLLECT → ORGANIZE → REPRESENT → INTERPRET</b>. Data are evidence gathered to answer a question, not “a graph on a worksheet”.</p>
<p><b>Good data question:</b> meaningful and answerable, with natural categories. “How did you come to school today?” ✓ (observable, categorical). “Favourite colour?” works only if you limit the choices. “Are dogs better than cats?” ✗ (“better” is ambiguous).</p>
<p>Picture/object display vs bar graph: a bar graph makes comparison easier but is more abstract.</p>

<h3>Integrated case (notice → interpret → extend)</h3>
<ul><li><b>Space:</b> “The block is behind the cup from where I am standing.” → understands viewpoint/perspective.</li>
<li><b>Shape:</b> “That one cannot be a triangle, it is upside down.” → orientation prototype controls the category.</li>
<li><b>Measure:</b> “Mine is 8 cubes and yours is 7, so mine is longer” (different-sized cubes) → understands counting units; missing: units must be equal/same.</li>
<li><b>Data:</b> “More children chose apples because that row looks longer.” → uses row length; needs aligned, equal-sized marks (one-to-one) to compare.</li></ul>`,

4: `
<p>Driving question: <b>How can we help children investigate their own ideas?</b> Curiosity is a starting point (puddle: “It was bigger before. Where did the water go?”).</p>
<h3>Inquiry connects</h3>
<ol><li><b>A question</b>: what are we trying to find out?</li><li><b>An investigation</b>: what could we observe, compare or try?</li><li><b>Evidence and explanation</b>: what happened, and what might it mean?</li></ol>

<h3>Observation vs explanation</h3>
<p>Wet paving stone, 9:00 vs 10:00. <b>Observations:</b> A “The wet area became smaller”, D “Less of the stone appears wet at 10:00”. <b>Explanations/inferences:</b> B “The sun made the water disappear”, C “Someone wiped the stone”.</p>

<h3>Investigable questions</h3>
<p>Invite observation/comparison: “Does the wet area change during the morning?”, “What happens to two similar wet patches in different locations?” Not investigable: “Why is water interesting?”, “Does a puddle feel lonely?”</p>

<h3>Prediction vs explanation</h3>
<p><b>Prediction:</b> What do you think will happen? <b>Possible explanation:</b> Why might that happen? Ask: <i>“What makes you think that? What would we look for?”</i></p>

<h3>Planning a useful (fair) comparison</h3>
<p>Decide: what will we <b>change</b>? what stays <b>similar</b>? what will we <b>observe/measure</b>?</p>
<p>Flawed: Trial A lower/blue car/carpet/no push vs Trial B higher/red car/smooth floor/push → too many differences; can't tell what caused the longer distance.</p>
<p>Improved: compare two ramp settings; keep same car and ramp, same floor, same release procedure, same distance reference point; <b>repeat each setting</b>. Children can help make these decisions.</p>

<h3>Reading results</h3>
<table><tr><th>Setting</th><th>T1</th><th>T2</th><th>T3</th></tr><tr><td>Lower</td><td>30</td><td>32</td><td>31</td></tr><tr><td>Higher</td><td>45</td><td>43</td><td>46</td></tr></table>
<p>Fitting claims: “The higher setting produced longer distances <i>in these trials</i>”; “The distances varied between trials.” Not supported: “Every toy car will behave the same”, “We now know everything about ramps.” → keep the <b>size of the claim</b> matched to the evidence.</p>
<p><b>Why repeat?</b> Results vary between trials; repeating shows whether the pattern is consistent.</p>

<h3>When a prediction does not match</h3>
<p>“My idea was wrong. I am bad at science.” → <b>Acknowledge the feeling → return to the evidence → invite another thought or question.</b></p>

<h3>Process skills in action</h3>
<ul><li><b>Classification supports investigation</b>: leaves by colour or by edge; each grouping helps answer a different question.</li>
<li><b>Measurement needs shared meaning</b>: “grew a lot / a little” → what feature? where start/stop? same unit? when do we observe?</li>
<li><b>Communication forms</b>: spoken/signed explanations, gestures & demonstrations, drawings & photos, arrangements, marks, simple charts. “Can you show me what you noticed?”</li>
<li><b>Participation</b>: a quiet child who watches and points to the longer distance <i>is</i> participating. Offer other ways in (point, show, draw, arrange).</li></ul>

<h3>Responsive teacher move</h3>
<p>“The red car wins because red is faster.” A “No, colour doesn't matter” shuts down the idea. C “Yes, red cars are always faster” confirms a misconception. <b>B “Interesting. What could we compare to investigate your idea?”</b> turns it into an investigation (same car shape, different colours…).</p>`,

5: `
<h3>Common messages from all theories</h3>
<ol><li>Children <b>construct</b> their own understanding.</li><li>Learning is enhanced through <b>social interaction</b>.</li><li>The <b>educator is pivotal</b> to children's learning.</li></ol>
<p>Educators scaffold through <b>intentional teaching</b> and interactive approaches. <b>Prior knowledge</b>: find out what children already know first; building on it creates more complex schemas.</p>

<h3>Child-instigated vs teacher-instigated</h3>
<p>Limitations of child-instigated only: some children stay in their <b>comfort zone</b>; the <b>breadth of experience is limited</b> (age, family). Teachers should introduce experiences outside children's usual opportunities: <b>magnetism, simple electricity, chemical reactions, visits with unusual animals</b>.</p>

<h3>Intentional teaching</h3>
<p>Deliberate decisions to enhance learning <b>through play</b>; experiences should be meaningful and challenging; recognise science in everyday activities (making play dough, gardening).</p>

<h3>By age</h3>
<ul><li><b>Babies:</b> new materials, sensory experiences.</li><li><b>Toddlers:</b> science language alongside everyday language.</li><li><b>Preschoolers:</b> scaffold investigations; encourage discussion and evaluation.</li></ul>

<h3>Formal & informal approaches: common points</h3>
<p>Probe prior understanding · use effective questions to highlight thinking · scaffold through dialogue, activities, focused discussion. Choice criteria: communication & introducing terminology; children's capability for abstract thought.</p>

<h3>Six approaches</h3>
<table><tr><th>Approach</th><th>Key idea</th><th>Example</th></tr>
<tr><td><b>Process skills</b></td><td>Build skills to run own investigations</td><td>Snail moving on different surfaces</td></tr>
<tr><td><b>Guided discovery / scaffolded</b></td><td>Discovery alone is limited; adult as co-investigator with focused questions</td><td>Soap bubbles</td></tr>
<tr><td><b>Interactive</b></td><td>Children's questions lead; educator provides resources, guides, suggests other ways of thinking; flexible “helper” role</td><td></td></tr>
<tr><td><b>Inquiry</b></td><td>Investigations to answer own questions; 5 phases</td><td>Planting seeds, observing growth</td></tr>
<tr><td><b>Problem-based</b></td><td>Educator gives a problem to small groups; the <b>process</b> matters more than solving</td><td></td></tr>
<tr><td><b>Project-based</b></td><td>Collaborative project around a real need in their lives; higher-order thinking</td><td>Temporary homes for garden animals</td></tr></table>

<h3>Process skills (early years)</h3>
<table><tr><th>Skill</th><th>Meaning</th></tr>
<tr><td>Observing</td><td>Using the senses to gain information; crucial for an investigation</td></tr>
<tr><td>Communicating</td><td>Describing objects/events orally, in writing, pictures or graphics</td></tr>
<tr><td>Comparing</td><td>Similarities and differences between objects and events</td></tr>
<tr><td>Classifying</td><td>Grouping into meaningful categories by one property (sorting, matching)</td></tr>
<tr><td>Measuring & using tools</td><td>Selecting tools; usually informal (rope, string, body parts)</td></tr>
<tr><td>Predicting</td><td>Possible outcomes based on prior knowledge</td></tr>
<tr><td>Inferring</td><td>Reasonable explanations based on observations</td></tr></table>

<h3>Inquiry phases (5E)</h3>
<p><b>Engagement</b> (from children's interest, or used to find out prior understanding) → <b>Exploration</b> (comes most naturally; teacher can add materials) → <b>Explanation</b> (scientifically enhanced explanations via focused questions) → <b>Elaboration</b> (transfer to new contexts) → <b>Evaluation</b> (share understanding: discussion, role play, drawings).</p>

<h3>Problem-based: 5 steps</h3>
<ol><li>Educator presents the problem (stimulus pictures help focus).</li><li>Children talk about what they already know.</li><li>Children brainstorm ideas and identify the broad problem.</li><li>Children identify what else they need to learn to prove/disprove ideas.</li><li>Children share findings with others.</li></ol>

<h3>Strategies to enhance science learning</h3>
<p>Direct instruction · demonstrations (too difficult/dangerous for children) · questioning · interactive (brainstorming, co-learning, role play, using children's questions) · indirect (scaffolding, inquiry, problem solving) · autonomous/child-directed (projects, play, exploration tables) · experiential (hands-on, construction, multi-modal).</p>

<h3>Probing for understanding (4 ways)</h3>
<p><b>Questioning · children's drawings · interview about instances · puppets</b>.</p>
<ul><li><b>Effective (open) questions:</b> “What do you think will happen if…?”, “Why do you think the bubble floated?”, “How can you test your idea?” They focus attention or open up other possibilities.</li>
<li><b>Drawing: 5 reasons:</b> engagement, learning to represent in science, reasoning in science, learning strategy, communication. Annotated drawings add detail.</li>
<li><b>Interview about instances:</b> show a picture/artefact + focused questions; non-threatening. Guidelines: (1) focus question that requires applying the concept, no forced definition; (2) don't force a response to each artefact; (3) <b>wait time 3–5 s</b>, re-word if needed; (4) prediction interviews; (5) sorting interviews (talk while sorting); (6) problem-solving interviews (think aloud).</li>
<li><b>Puppets:</b> ask questions, help plan investigations, start discussion (“Why does the feather float?”).</li></ul>`
};

/* ---------------- CHEAT SHEET ---------------- */
DATA.cheat = `
<div class="cards2">
<div class="box"><h4>Universal scenario answer</h4><ol>
<li><b>Notice</b>: what the child said or did (quote it).</li>
<li><b>Interpret</b>: what they seem to understand, and what they are attending to (prototype? row length? old rule?).</li>
<li><b>Extend</b>: an open question that reveals reasoning plus a way to <i>check</i> (“How could we check?”).</li>
<li>Keep a <b>real choice</b> for the child.</li>
<li>Say what <b>evidence</b> you'd look/listen for next.</li></ol></div>
<div class="box"><h4>When a child is wrong</h4><ul>
<li>Don't say “No” or just give the answer.</li>
<li>Don't confirm the misconception.</li>
<li><b>Acknowledge</b> the idea or feeling → <b>return to the evidence</b> → <b>invite</b> another idea/test.</li>
<li>“Interesting. What could we compare to investigate your idea?”</li></ul></div>
<div class="box"><h4>Good teacher question stems</h4><ul>
<li>What makes you think that?</li><li>How could we check / test it?</li><li>What would we look for?</li>
<li>Which parts did you see?</li><li>What names fit this shape? Why?</li><li>What part keeps repeating?</li>
<li>Why does where we start matter?</li><li>Can you show me what you noticed?</li><li>How does it need to turn? Why?</li></ul></div>
<div class="box"><h4>Lists to memorise</h4><ul>
<li><b>Guided play:</b> learning goal · child agency · flexible guidance</li>
<li><b>LT:</b> goal · progression · instruction</li>
<li><b>Counting:</b> stable order · one-to-one · cardinality</li>
<li><b>Shape:</b> prototype → properties → class inclusion</li>
<li><b>Measure:</b> attribute · unit · iteration · zero/start · number</li>
<li><b>Data:</b> ask · collect · organize · represent · interpret</li>
<li><b>Inquiry:</b> question · investigation · evidence & explanation</li>
<li><b>Fair test:</b> change one thing · keep others same · measure the same way · repeat</li>
<li><b>Process skills:</b> observe · communicate · compare · classify · measure · predict · infer</li>
<li><b>5E:</b> engage · explore · explain · elaborate · evaluate</li>
<li><b>Probing:</b> questioning · drawings · interview about instances · puppets</li></ul></div>
<div class="box"><h4>Skene et al. (2022) in one breath</h4><p>39 studies, 17 in meta-analyses, 12 pooled estimates, mostly ages 3–6. Guided play beat direct instruction for early maths (g 0.24) and shape knowledge (g 0.63), and beat free play for spatial vocabulary (g 0.93). It also helped task switching. Many outcomes showed no clear difference. Science evidence was too limited. g is an effect size, not a percentage. Limits: risk of bias, small samples, varied implementation.</p></div>
<div class="box"><h4>Classic child quotes → what's going on</h4><ul>
<li>“It's upside down, not a triangle” → prototype, not properties</li>
<li>“B has more, it goes farther” → judging by row length</li>
<li>Counts the same dot twice → one-to-one</li>
<li>“Mine is 8 cubes, yours 7, mine is longer” (different cubes) → needs equal units</li>
<li>“That row looks longer” (data) → representation must be aligned/equal-size</li>
<li>“Circle always comes after triangle” → local rule, not the full unit</li>
<li>“Red is faster” → turn into a fair test</li>
<li>“I'm bad at science” → acknowledge, evidence, invite</li>
<li>“We tried once, we know” → repeat because results vary</li></ul></div>
</div>`;

/* ---------------- FLASHCARDS ---------------- */
DATA.cards = [
[1,"Guided play","Play with an adult-planned learning goal, genuine child agency (consequential choices) and flexible, responsive adult guidance."],
[1,"Free play vs direct instruction","Free play: children set the direction (adult watches for safety). Direct instruction: the adult controls the procedure; children copy."],
[1,"Three features of guided play","Learning goal · child agency · flexible guidance."],
[1,"How guidance supports learning","A meaningful goal (reason to compare/count/investigate) · a responsive prompt (draws attention to a relationship) · a chance to try again (test & revise)."],
[1,"Skene et al. (2022): numbers","39 studies reviewed, 17 in meta-analyses, 12 pooled outcome estimates; mostly ages 3–6; guided play vs direct instruction or free play."],
[1,"g (Hedges' g)","A standardized effect size, NOT a percentage gain. If the 95% CI includes 0 → no clear difference."],
[1,"Skene: what is supported","Cautiously: some maths outcomes (early maths g .24, shape knowledge g .63 vs DI; spatial vocab g .93 vs free play) and task switching favoured guided play."],
[1,"Skene: what is uncertain","Many pooled outcomes showed no clear difference; science evidence too limited; risk of bias, small samples, varied implementation."],
[1,"Learning evidence vs engagement","“They enjoyed it” = engagement only. Evidence of learning names a specific behaviour linked to the goal (e.g. checked closure, kept the release point the same)."],
[2,"Learning trajectory (3 parts)","Goal (math idea) · developmental progression (where the child is) · instruction (experience supporting the next step)."],
[2,"Stable order","Number words follow the conventional sequence each time."],
[2,"One-to-one correspondence","Each item gets exactly one number word."],
[2,"Cardinality","The last number word said tells how many are in the set."],
[2,"Perceptual subitizing","Instantly recognising a small quantity without counting (e.g. 3 dots)."],
[2,"Conceptual subitizing","Seeing a total through smaller recognised groups (6 as 3 and 3): part–whole thinking."],
[2,"Same number, different spacing","Child says the longer row has more → judging by length, not number. Ask “How could we check?”"],
[2,"Attribute vs rule (classification)","Attribute = a property (shape, size, colour). Rule = stated condition for membership (e.g. large AND circle)."],
[2,"Repeating unit (core)","Smallest part that repeats (tap-clap; ●●▲). Explain the unit before naming the next item; transfer it to sounds/actions."],
[2,"Math play invitation (4 parts)","One goal · a child's choice · a teacher move/prompt · evidence to look/listen for."],
[3,"Spatial thinking (4 parts)","Spatial relations · orientation (viewpoint) · transformations (turn, flip, mentally rotate) · representation (routes, maps)."],
[3,"Key spatial teacher move","Ask children to predict and describe before they act (“How does it need to turn? Why?”)."],
[3,"Shape levels","Prototype (“looks like”) → explicit properties (“3 straight sides”) → class inclusion/definition (“any 3-sided polygon”)."],
[3,"How to teach shape","Vary size, orientation and proportion; include non-examples; ask for justification with properties."],
[3,"Square vs rectangle","A square is a special rectangle. Ask “What names fit this shape? Why?”, not “square OR rectangle?”"],
[3,"Shape composition","Combining shapes into larger shapes; bridge to spatial reasoning and later area. “No gaps or overlaps?”"],
[3,"5 measurement ideas","Attribute · equal unit · iteration (no gaps/overlaps) · zero/start point · number (count of units)."],
[3,"Transitivity","If A > B and B > C, then A > C. Compare through an intermediate object."],
[3,"Data inquiry cycle","Ask a question → collect → organize (categories) → represent → interpret."],
[3,"Good data question","Meaningful and answerable, with natural categories: “How did you come to school today?”"],
[3,"Notice → Interpret → Extend","Notice what the child says or does, interpret what it reveals, then extend with a question that moves the thinking forward."],
[4,"Inquiry connects…","A question · an investigation · evidence and explanation."],
[4,"Observation vs explanation","Observation reports what is seen (“wet area got smaller”). Explanation/inference proposes why (“the sun dried it”)."],
[4,"Investigable question","Invites observation or comparison: “Does the wet area change during the morning?”"],
[4,"Prediction vs explanation","Prediction: what will happen. Explanation: why it might happen. Ask “What makes you think that? What would we look for?”"],
[4,"Fair comparison","Change one thing (ramp setting), keep everything else the same (car, floor, release, reference point), measure the same way, repeat."],
[4,"Why repeat trials?","Results vary between trials; repetition shows whether the pattern is consistent."],
[4,"Size of a claim","Match the claim to the evidence: “in these trials…”, not “every car / we know everything”."],
[4,"Prediction didn't match","Acknowledge the feeling → return to the evidence → invite another thought or question."],
[4,"Forms of scientific communication","Spoken/signed explanation · gestures & demonstrations · drawings & photos · arrangements, marks, simple charts."],
[5,"3 common messages of theories","Children construct understanding · learning enhanced by social interaction · educator is pivotal."],
[5,"Why teacher-instigated activities?","Children stay in comfort zone; their breadth of experience is limited. Introduce magnetism, simple electricity, chemical reactions, unusual animals."],
[5,"Intentional teaching","Deliberate decisions to enhance learning through play; meaningful & challenging; recognise science in everyday activities."],
[5,"Babies / toddlers / preschoolers","Sensory & new materials / science language with everyday language / scaffold investigations + discussion & evaluation."],
[5,"Process skills (7)","Observing, communicating, comparing, classifying, measuring & using tools, predicting, inferring."],
[5,"Inferring","Beginning to suggest reasonable explanations based on observations."],
[5,"Interactive approach","Children's questions lead; educator provides resources, scaffolds, suggests alternatives; flexible helper role."],
[5,"Inquiry 5 phases","Engagement · exploration · explanation · elaboration (transfer to new contexts) · evaluation (share)."],
[5,"Problem-based learning","Educator gives a problem to small groups; the child-directed inquiry process matters more than solving it. 5 steps."],
[5,"Project-based learning","Collaborative project around a real need in children's lives (e.g. homes for garden animals); higher-order thinking."],
[5,"Probing understanding (4)","Questioning · children's drawings · interview about instances · puppets."],
[5,"Interview about instances","Show a picture/artefact and ask focused questions; non-threatening; wait 3–5 s; prediction, sorting, problem-solving interviews."],
[5,"Drawing in science: 5 reasons","Engagement · learning to represent · reasoning · learning strategy · communication."]
];

/* ---------------- MCQ ---------------- */
// [week, question, [options], correctIndex, explanation]
DATA.mcq = [
[1,"Children design a bridge for a toy animal. The teacher asks, “How could you check whether it will fit?” This is best classified as:",["Free play","Direct instruction","Guided play","Unstructured exploration"],2,"Learning goal + genuine child choice + responsive adult prompt = guided play."],
[1,"An adult models building a bridge and the children copy each step. This is:",["Guided play","Direct instruction","Free play","Inquiry learning"],1,"The adult controls the procedure, so it is direct instruction."],
[1,"Which is NOT one of the three features of guided play?",["A learning goal planned by the adult","Children make consequential choices","The adult responds flexibly to children","The adult demonstrates each step for children to copy"],3,"Copying the adult's steps removes child agency; that is direct instruction."],
[1,"When would the bridge-design activity (guided play) turn into direct instruction?",["When children choose their own materials","When the adult takes over the procedure and children just follow","When the adult asks an open question","When children test their bridge"],1,"Guided play becomes direct instruction once the child's consequential choices disappear."],
[1,"Skene et al. report g = 0.24 for early maths (guided play vs direct instruction). This means:",["Children learned 24% more maths","A small-to-moderate standardized effect favouring guided play","Guided play is better than every approach","The result is not significant"],1,"g is a standardized effect size, not a percentage. The CI [0.12, 0.35] excludes 0."],
[1,"For spatial/maths vocabulary vs direct instruction, g = −0.17 [−1.09, 0.75]. The best reading is:",["Direct instruction is clearly better","Guided play is clearly better","No clear difference, because the CI includes 0","Children lost 17% of vocabulary"],2,"The confidence interval crosses zero, so there is no clear difference."],
[1,"According to Skene et al., what can be said about science learning?",["Guided play clearly improves it","Evidence was too limited for confident conclusions","Free play is best for science","Direct instruction is best for science"],1,"The slides call this the science boundary: too little evidence."],
[1,"Which outcome, besides some maths outcomes, favoured guided play?",["Reading fluency","Task switching","Fine motor skills","Science vocabulary"],1,"Some maths outcomes and task switching favoured guided play (cautiously)."],
[1,"Most studies in Skene et al. (2022) focused on children aged:",["0–2","3–6","6–9","9–12"],1,"Most studies focused on children aged 3–6."],
[1,"A teacher writes: “They enjoyed the cars.” This observation can support a claim about:",["A fair-comparison concept","Engagement in the activity","Measurement understanding","Shape properties"],1,"Enjoyment shows engagement, not learning of a specific idea."],
[1,"Which is NOT a stated limit on confidence in Skene et al.?",["Risk of bias","Small samples","Varied implementation","Studies only with adults"],3,"The limits were risk of bias, small samples and varied implementation."],
[2,"Mina says the number words from one to twenty. What can we conclude?",["She understands cardinality to 20","She knows the verbal counting sequence; we need more evidence about counting collections","She can subitize 20","She understands place value"],1,"Reciting shows stable order only. Observe her counting objects and saying how many."],
[2,"Ali points A, B, C, C, D, E while saying 1–6 for five dots. Which principle is he struggling with?",["Stable order","One-to-one correspondence","Cardinality","Abstraction"],1,"He gave dot C two number words."],
[2,"The best first response to Ali is:",["“Wrong, there are five.”","“How could we make sure each dot gets one count?”","“Count again faster.”","“Just say five.”"],1,"It makes the coordination visible and lets Ali choose a starting point and pointing path."],
[2,"“The final count word tells how many are in the set” describes:",["Stable order","One-to-one","Cardinality","Conservation"],2,"Cardinality."],
[2,"A child sees six dots as “three and three” and says six. This is:",["Perceptual subitizing","Conceptual subitizing","Rote counting","Estimation"],1,"Seeing a total through smaller groups is conceptual subitizing (part–whole)."],
[2,"Ece says, “B has more. It goes farther,” about two rows with equal counts but different spacing. She is attending to:",["Number","Length of the row","Colour","One-to-one"],1,"She uses the spread or length of the row instead of number. Ask “How could we check?”"],
[2,"The three components of a learning trajectory are:",["Goal, developmental progression, instruction","Observe, predict, infer","Attribute, unit, iteration","Ask, collect, interpret"],0,"Goal, progression and instruction, used as a planning lens."],
[2,"Shapes: A large circle, B small circle, C large triangle, D small triangle, E large square, F small square. Which items fit “large AND circle”?",["A, B","A, C, E","A","A, B, C, E"],2,"Only A is both large and a circle."],
[2,"The sorting rule changed from shape to size, but a child says, “B stays with A, they are both circles.” The child is most likely:",["Using the new rule correctly","Still attending to the old attribute (shape)","Counting","Subitizing"],1,"Make the new rule explicit and ask the child to check each item against it."],
[2,"In ●●▲ ●●▲ ●●▲, the repeating unit is:",["●▲","●●▲","●●▲●","▲●"],1,"The smallest unit that repeats is circle, circle, triangle."],
[2,"Deniz picks a circle correctly, then says, “A circle always comes after a triangle.” What does this leave uncertain?",["Whether Deniz can count","Whether Deniz sees the full repeating unit (circle, circle, triangle)","Whether Deniz knows shapes","Nothing"],1,"The rule explains the next item locally, but not the whole unit. Ask “What part keeps repeating?”"],
[2,"Which is NOT one of the four parts of a mathematical play invitation in the slides?",["One goal","A child's choice","A teacher move","A worksheet score"],3,"The four parts are goal, child's choice, teacher move and evidence."],
[3,"Mentally rotating a shape belongs to which aspect of spatial thinking?",["Spatial relations","Orientation","Transformations","Representation"],2,"Turning, flipping and mentally rotating are transformations."],
[3,"Which teacher prompt best grows spatial thinking?",["“Put it there.”","“Turn it until it fits.”","“How do you think it needs to turn? Why?”","“Copy my route.”"],2,"Ask children to predict and describe before they act."],
[3,"“It has three straight sides” shows a child at which level of shape thinking?",["Prototype","Explicit properties","Class inclusion","Pre-recognition"],1,"Naming properties is the middle level; “any 3-sided polygon” would be class inclusion."],
[3,"A child says only the equilateral, point-up triangle is a triangle. The child is attending to:",["Properties","A visual prototype","Class inclusion","Angles"],1,"The familiar picture controls the category."],
[3,"Which practice best supports children's shape concepts?",["Showing only standard examples","Varying size, orientation and proportion and including non-examples","Memorising shape names","Avoiding unusual shapes"],1,"Deliberate variation and non-examples move children toward properties."],
[3,"Which question about squares and rectangles is recommended?",["“Is it a square or a rectangle?”","“What names fit this shape? Why?”","“Squares are not rectangles, right?”","“Which is bigger?”"],1,"Avoid making the categories mutually exclusive; a square is a special rectangle."],
[3,"Bora measured a line with blocks that had gaps between them and said “6 blocks.” Which idea is missing?",["Attribute","Iteration (no gaps or overlaps)","Number","Transitivity"],1,"Units must be repeated without gaps or overlaps."],
[3,"“Mine is 8 cubes and yours is 7, so mine is longer,” but the cubes are different sizes. What is missing?",["Counting","Equal-sized (same) units","Stable order","Subitizing"],1,"A count only compares lengths when the units are equal."],
[3,"Ribbon A is longer than B, and B is longer than C. Concluding A is longer than C is:",["Conservation","Transitivity","Iteration","Cardinality"],1,"Transitive reasoning compares through an intermediate object."],
[3,"Which question is most likely to reveal measuring, not just counting?",["“How many?”","“Start at zero.”","“How many units long? How did each unit cover the length?”","“Use the same blocks.”"],2,"The others give rules or procedures, or invite only counting."],
[3,"The correct order of the data cycle is:",["Collect, ask, represent, organize, interpret","Ask, collect, organize, represent, interpret","Represent, ask, collect, interpret, organize","Ask, represent, collect, organize, interpret"],1,"Data begin with a question."],
[3,"Which is the best data question for young children?",["What is your favourite colour?","Are dogs better than cats?","How did you come to school today?","Why is data important?"],2,"It is observable and meaningful with natural categories. Colour needs bounded choices; “better” is ambiguous."],
[3,"“More children chose apples because that row looks longer.” The child is using:",["Counting by ones","The visual length of the row in the representation","A bar graph scale","Tally marks"],1,"Row length only works if the marks are equal-sized and aligned."],
[3,"To understand measuring length (not just read a ruler), a child must:",["Read numbers on a ruler","Coordinate the start of the object with the start of the first unit","Use a metre stick","Know centimetres"],1,"Zero/start is one of the five ideas. Reading “7” on a ruler doesn't show understanding."],
[4,"Which statement reports an observation (not an explanation)?",["The sun made the water disappear.","Someone wiped the stone.","Less of the stone appears wet at 10:00.","The water went into the ground."],2,"Observations describe what is seen; the others propose causes."],
[4,"Which question is most investigable for young children?",["Why is water interesting?","Does a puddle feel lonely?","Does the wet area change during the morning?","What is water?"],2,"It invites observation or comparison over time."],
[4,"Scientific inquiry connects:",["A story, a song and a game","A question, an investigation, and evidence and explanation","Reading, writing and counting","Prediction, reward and praise"],1,"These three parts structure inquiry."],
[4,"Trial A: lower ramp, blue car, carpet, no push. Trial B: higher ramp, red car, smooth floor, push. B goes farther. What can we conclude?",["Higher ramps make cars go farther","Red cars are faster","We cannot tell which change caused the difference","Carpets slow cars"],2,"Several variables changed at once, so it is not a fair comparison."],
[4,"To improve the ramp investigation you should:",["Change the car and the height together","Change only the ramp setting and keep the car, floor, release and reference point the same, then repeat","Do one trial only","Push the car harder each time"],1,"Change one thing, keep the others similar, measure the same way and repeat."],
[4,"Lower: 30, 32, 31 cm. Higher: 45, 43, 46 cm. Which claim fits the data?",["Every toy car will behave this way","We now know everything about ramps","The higher setting produced longer distances in these trials","The lower setting is broken"],2,"Keep the size of the claim matched to the evidence. “Distances varied between trials” also fits."],
[4,"A child says, “We already tried it once. We know the answer.” A good reason to repeat is:",["To fill time","Results can vary between trials; repeating checks whether the pattern holds","To prove the child wrong","Because the teacher said so"],1,"The slides show variation even within a setting (30, 32, 31)."],
[4,"After a mismatch, a child says, “I am bad at science.” The best response:",["“Don't worry, here's the right answer.”","Acknowledge the feeling, return to the evidence and invite another idea or question","“Yes, you were wrong.”","Move on to the next activity"],1,"This is the three-step response from the slides."],
[4,"“The red car wins because red is faster.” Which response is most responsive?",["“No. Colour does not matter.”","“Interesting. What could we compare to investigate your idea?”","“Yes, red cars are always faster.”","Ignore the comment"],1,"It turns the child's idea into a testable comparison without rejecting or confirming it."],
[4,"A quiet child watches closely and points to the longer distance but says little. The teacher should:",["Mark the child as not participating","Recognise gesture as participation and offer other ways to show ideas","Insist the child speak","Move the child to another group"],1,"Communication can be gesture, demonstration, drawing or arrangement."],
[4,"Two children describe a plant: “It grew a lot” and “It grew a little.” What would help them compare?",["Agree on the feature, the start and stop points, the same unit and when to observe","Vote on who is right","Use a bigger plant","Ask the teacher"],0,"Measurement needs a shared meaning."],
[5,"The common messages from all learning theories include all EXCEPT:",["Children construct their own understanding","Learning is enhanced through social interaction","The educator is pivotal","Children learn best alone without adults"],3,"The three messages are construct, social interaction and pivotal educator."],
[5,"Which is NOT a listed early-years science process skill?",["Observing","Inferring","Memorising definitions","Classifying"],2,"The seven are observe, communicate, compare, classify, measure/use tools, predict and infer."],
[5,"“Beginning to suggest reasonable explanations based on observations” describes:",["Predicting","Inferring","Comparing","Communicating"],1,"Inferring. Predicting is about outcomes based on prior knowledge."],
[5,"In the inquiry phases, children transferring new knowledge to a different context is:",["Engagement","Exploration","Elaboration","Evaluation"],2,"Elaboration means extending to new contexts."],
[5,"Which approach has children's own questions lead the exploration while the educator provides resources and scaffolds?",["Direct instruction","Interactive approach","Demonstration","Rote learning"],1,"In the interactive approach the educator takes a flexible helper role."],
[5,"In problem-based learning, the most important aspect is:",["Getting the correct solution","The learning process through child-directed inquiry","Speed","Individual work"],1,"Solving the problem matters less than the process."],
[5,"Children build temporary homes for small garden animals and investigate habitats and food. This is:",["Project-based learning","Direct instruction","Demonstration","Free play"],0,"A collaborative project solving a real need in their lives."],
[5,"Why should educators introduce teacher-instigated activities such as magnetism?",["Children dislike play","Children may stay in their comfort zone and their breadth of experience is limited","Curriculum requires worksheets","Child-led play is harmful"],1,"These activities expand experiences beyond children's usual opportunities."],
[5,"In an interview about instances, how long should the wait time be?",["Under 1 second","At least 3–5 seconds","30 seconds","No wait; rephrase immediately"],1,"Give 3–5 s to interpret the question, then re-word if needed."],
[5,"Children sort pictures and talk about what they are doing. This is a:",["Prediction interview","Sorting interview","Problem-solving interview","Puppet interview"],1,"Sorting interviews ask children to talk while they sort."],
[5,"Which is NOT one of the four ways to probe children's understanding?",["Questioning","Children's drawings","Puppets","Standardised testing"],3,"The four are questioning, drawings, interview about instances and puppets."],
[5,"For toddlers, the recommended science support is:",["Formal experiments","Introducing science language alongside everyday language","Worksheets","Only sensory exposure"],1,"Babies get sensory experiences; preschoolers get scaffolded investigations with discussion and evaluation."],
[5,"Intentional teaching means:",["Following a fixed script","Making deliberate decisions to enhance children's learning through play","Avoiding play","Letting children do whatever they want"],1,"It also means recognising science in everyday activities like gardening and making play dough."],
[5,"A teacher acts as a co-investigator and asks focused questions to extend a child's exploration of soap bubbles. This is:",["Guided discovery / scaffolded learning","Direct instruction","Project-based learning","Demonstration"],0,"Discovery alone is limited; interaction extends understanding."],
[5,"Which is an open-ended, effective question?",["“Is the ball red?”","“How can you test your idea?”","“Did it sink, yes or no?”","“What colour is the water?”"],1,"Open questions focus observation and invite thinking."]
];

/* ---------------- SHORT ANSWER ---------------- */
// [week, prompt, modelAnswer(html), [keyPoints]]
DATA.sa = [
[1,"What makes play “guided”? Name the three features and give a brief classroom example.",
"<ul><li><b>Learning goal</b>: the adult plans a meaningful opportunity.</li><li><b>Child agency</b>: children make consequential choices.</li><li><b>Flexible guidance</b>: the adult responds to what children do.</li><li>Example: children design a block bridge for a toy animal; teacher asks “How could you check whether it will fit?”</li></ul>",
["Learning goal","Child agency / real choices","Flexible, responsive guidance","A concrete example"]],
[1,"A colleague says, “Skene et al. proved guided play is better than every other approach and children learned 24% more maths.” Correct this claim.",
"<ul><li>g = 0.24 is a <b>standardized effect size</b>, not a 24% gain.</li><li>Only <b>some maths outcomes</b> (early maths, shape knowledge) and task switching favoured guided play, <b>cautiously</b>.</li><li>Many outcomes showed <b>no clear difference</b> (e.g. vocabulary vs direct instruction, CI crosses 0).</li><li>Science evidence too limited; risk of bias, small samples, varied implementation. “Proves” and “every” are too strong.</li></ul>",
["g is effect size, not %","Only some outcomes favoured","Many no clear difference","Limits: bias / small samples / science evidence limited"]],
[2,"Explain the three ideas a child must coordinate to count a collection accurately.",
"<ul><li><b>Stable order</b>: number words in the conventional sequence.</li><li><b>One-to-one correspondence</b>: each item gets exactly one number word.</li><li><b>Cardinality</b>: the last word tells how many.</li><li>Reciting to 20 shows only stable order.</li></ul>",
["Stable order","One-to-one","Cardinality"]],
[2,"Distinguish perceptual and conceptual subitizing, and give a teacher question that supports part–whole thinking.",
"<ul><li><b>Perceptual</b>: instantly recognising a small quantity (3 dots).</li><li><b>Conceptual</b>: seeing the total through smaller groups (6 as 3 and 3).</li><li>Question: “Which parts did you see? How do they make the whole?”</li></ul>",
["Perceptual definition","Conceptual definition","Part–whole question"]],
[2,"What is a learning trajectory and how can a teacher use it to plan?",
"<ul><li>A planning lens with three parts: <b>goal</b> (math idea), <b>developmental progression</b> (where the child is now), <b>instruction</b> (experience for the next step).</li><li>Used with repeated observation across tasks, not a single test.</li></ul>",
["Goal","Progression","Instruction","Repeated observation"]],
[2,"How can you tell whether a child understands a repeating pattern rather than just guessing the next item?",
"<ul><li>Ask them to identify the <b>smallest repeating unit</b> (●●▲) and explain it <b>before</b> naming the next item.</li><li>Ask them to <b>repair</b> an error (●●▲ ●▲▲).</li><li>Ask them to <b>transfer</b> the structure to sounds or actions (ding-ding-dong).</li></ul>",
["Identify the unit","Explain before extending","Repair or transfer"]],
[3,"Describe the shift in children's shape thinking and two teaching implications.",
"<ul><li>Prototype (“looks like”) → explicit properties (“3 straight sides”) → class inclusion (“any 3-sided polygon”).</li><li>Vary size, orientation, proportion; include non-examples (open, curved).</li><li>Ask for justification with properties; ask “What names fit this shape?” (square is a special rectangle).</li></ul>",
["Three levels","Vary examples / non-examples","Justify with properties"]],
[3,"Name the five key ideas of measurement. Why can a child read “7” on a ruler and still not understand measurement?",
"<ul><li><b>Attribute, unit (equal), iteration (no gaps/overlaps), zero/start, number</b>.</li><li>Reading a number is a procedure; understanding means knowing the number counts equal units covering a continuous length from a start point.</li></ul>",
["Attribute","Equal unit","Iteration","Zero/start","Number = units"]],
[3,"Describe the data cycle and what makes a good data question for young children.",
"<ul><li>Ask → collect → organize → represent → interpret.</li><li>A good question is meaningful and answerable, with natural, bounded categories (“How did you come to school today?”). Avoid ambiguous ones (“Are dogs better?”).</li><li>Data are evidence to answer a question, not a worksheet graph.</li></ul>",
["5 steps in order","Meaningful/answerable","Clear categories"]],
[3,"Give two examples of replacing a directive with a question that grows spatial thinking.",
"<ul><li>“Put it there” → “Where is it in relation to the box?”</li><li>“Turn it until it fits” → “How do you think it needs to turn? Why?”</li><li>“Copy my route” → “Tell me how someone could get from A to B.”</li><li>Key move: predict and describe before acting.</li></ul>",
["Two directive→question pairs","Predict/describe before acting"]],
[4,"Distinguish an observation from an explanation using the wet paving stone example.",
"<ul><li><b>Observation</b>: reports what is seen: “The wet area became smaller” / “Less of the stone appears wet at 10:00.”</li><li><b>Explanation</b>: proposes why: “The sun made the water disappear.”</li><li>Inquiry links question → investigation → evidence & explanation.</li></ul>",
["Observation definition + example","Explanation definition + example"]],
[4,"What makes a comparison fair? Use the ramp investigation.",
"<ul><li>Change only one thing (ramp setting).</li><li>Keep the same car, ramp, floor, release (no push) and distance reference point.</li><li>Measure the same way; <b>repeat each setting</b>.</li><li>Children can help decide these.</li></ul>",
["Change one variable","Keep others the same","Same measurement","Repeat trials"]],
[4,"Why should children repeat trials, and how should they phrase claims from results?",
"<ul><li>Results vary between trials (30, 32, 31 cm), so repeating shows whether the pattern is consistent.</li><li>Keep the claim the same size as the evidence: “The higher setting produced longer distances <i>in these trials</i>”, not “every car…”.</li></ul>",
["Variation between trials","Consistency of pattern","Claim matches evidence"]],
[5,"List the early-years science process skills and give an example of one.",
"<ul><li>Observing, communicating, comparing, classifying, measuring & using tools, predicting, inferring.</li><li>E.g. <b>predicting</b> how a snail will move on different surfaces; <b>measuring</b> with string or hand spans.</li></ul>",
["≥5 skills named","An example"]],
[5,"Describe the five phases of inquiry learning.",
"<ul><li><b>Engagement</b>: children's interest; teacher finds prior understanding.</li><li><b>Exploration</b>: hands-on; teacher may add materials.</li><li><b>Explanation</b>: children build scientifically enhanced explanations through focused questions.</li><li><b>Elaboration</b>: transfer to new contexts.</li><li><b>Evaluation</b>: share understanding (discussion, role play, drawings).</li></ul>",
["Engagement","Exploration","Explanation","Elaboration","Evaluation"]],
[5,"Why are teacher-instigated science activities needed alongside child-instigated ones?",
"<ul><li>Some children stay in their comfort zone and rarely challenge themselves.</li><li>Children's breadth of experience is limited (age, family).</li><li>Teachers expand experiences: magnetism, simple electricity, chemical reactions, unusual animals.</li></ul>",
["Comfort zone","Limited breadth","Examples"]],
[5,"Name ways to probe children's prior understanding and describe interview about instances.",
"<ul><li>Questioning, children's drawings, interview about instances, puppets.</li><li>Interview about instances: show a picture or artefact with focused questions; non-threatening; no forced definition; wait 3–5 s; prediction, sorting and problem-solving interviews.</li></ul>",
["4 methods","Picture/artefact + focused questions","Wait time / interview types"]],
[5,"Compare problem-based and project-based learning.",
"<ul><li><b>Problem-based</b>: educator presents a problem to small groups; the process matters more than the solution; 5 steps (present, what we know, brainstorm, what we need to learn, share).</li><li><b>Project-based</b>: a collaborative project on a real need from children's lives (homes for garden animals); children generate ideas; higher-order thinking.</li></ul>",
["Problem-based: teacher's problem, process","Project-based: real need, collaborative","An example"]]
];

/* ---------------- SCENARIOS ---------------- */
// [week, title, situation, modelAnswer(html), [keyPoints], bestResponseMCQ? {q, opts, ans, why}]
DATA.sc = [
[1,"Upside-down triangle","Sorting shapes, a child says: “C cannot be a triangle. It is upside down.” (C is a triangle pointing down.)",
"<p><b>Thinking:</b> uses a visual prototype (orientation), not properties.</p><p><b>Teacher:</b> “What makes something a triangle? Let's check C: how many sides? Are they straight? Is it closed?” Let the child <b>choose</b> an example to compare and explain. Turn the card to test.</p><p><b>Evidence:</b> the child refers to three straight sides and a closed figure, and checks E (open) as a non-example.</p>",
["Prototype/orientation","Question about properties","Child keeps a choice","Evidence named"],
{q:"Best teacher response?",opts:["“C is a triangle. Put it with A and B. Repeat: triangles have three sides.”","“Let's check together: what makes something a triangle? Which one would you like to test first?”","“You're right, it's different.”"],ans:1,why:"It reveals reasoning, keeps a choice, and points to properties."}],
[1,"Ramp claim","A child says: “Higher ramps make cars go farther.” Trial A: lower ramp, small red car, no push. Trial B: higher ramp, large blue car, push.",
"<p><b>Thinking:</b> has a reasonable prediction, but the trials change several things at once.</p><p><b>Teacher:</b> “What was different between the two trials? If we want to know about height, what should stay the same?” Invite the child to suggest a change and a prediction.</p><p><b>Better test:</b> change height only; same car, surface, release; measure from the ramp end with the same unit; repeat.</p>",
["Not a fair comparison","Question that doesn't take over","Change one, keep others same","Measure the same way / repeat"]],
[2,"Counting the same dot twice","Five dots. Ali points A-B-C-C-D-E and says “1-2-3-4-5-6. Six!”",
"<p><b>Thinking:</b> knows the number sequence (stable order) and that the last word tells how many (cardinality), but did <b>not</b> keep one-to-one (C counted twice).</p><p><b>Teacher:</b> “How could we make sure each dot gets one count?” Let Ali choose a starting point and a pointing path (or move or mark dots).</p><p><b>Evidence:</b> touches each dot once and says “five”.</p>",
["One-to-one error identified","What he does know","Question, not correction","Child chooses strategy"]],
[2,"Spread-out row","Two rows of 5 counters; row B is spread out. Ece: “B has more. It goes farther.”",
"<p><b>Thinking:</b> judging quantity by length of the row, not number.</p><p><b>Teacher:</b> “How could we check?” Invite her to match counters one-to-one or count both rows. Then: “Why does the spread-out row still have five?”</p><p><b>Evidence:</b> explains that spreading doesn't change how many.</p>",
["Length vs number","“How could we check?”","Matching / counting","Explains why still 5"]],
[2,"Sorting rule changed","The rule changed from shape to size. A child says: “B (small circle) stays with A (large circle). They are both circles.”",
"<p><b>Thinking:</b> still attending to the old attribute (shape); may not have registered the new rule.</p><p><b>Teacher:</b> restate the new rule clearly (“Now our club is for <i>large</i> shapes”). Ask: “Is B large? Which shapes are large?” Let the child check each one and explain.</p><p><b>Extend:</b> “Can A belong to more than one group?”</p>",
["Old attribute","Make new rule explicit","Child checks and explains"]],
[2,"Pattern rule","Pattern ●●▲ ●●▲ ●●. Deniz picks ▲ correctly and says: “A circle always comes after a triangle.”",
"<p><b>Thinking:</b> notices a local relation, but may not see the full repeating unit (circle, circle, triangle).</p><p><b>Teacher:</b> “What part keeps repeating? Can you show me with your hands or claps?” Ask for the next three items, or a repair (●▲▲).</p><p><b>Evidence:</b> names the unit ●●▲ and transfers it to sounds or actions.</p>",
["Local rule vs unit","Question revealing the chunk","Transfer/repair"]],
[3,"Different-sized cubes","“Mine is 8 cubes and yours is 7, so mine is longer.” The cubes are different sizes.",
"<p><b>Thinking:</b> understands that measuring involves counting units; missing that units must be <b>equal</b>.</p><p><b>Teacher:</b> “What would happen if the units were different sizes? Look at our cubes. Are they the same?” Invite re-measuring both with the same cubes, or a direct comparison.</p><p><b>Evidence:</b> chooses the same unit and explains why.</p>",
["What child knows","Equal units missing","Question, not rule","Re-measure / compare"]],
[3,"Gaps in measuring","Bora lays blocks along a strip with spaces between them and says “6 blocks”, same as Aylin who placed blocks end-to-end.",
"<p><b>Thinking:</b> counts units but doesn't iterate without gaps (iteration error).</p><p><b>Teacher:</b> “Same number, same measurement? How did each block cover the length? What's in the spaces?”</p><p><b>Evidence:</b> places units end-to-end from the start point.</p>",
["Iteration","Covering the length question","Start point"]],
[3,"Data rows","Fruit votes as rows of pictures; apple pictures are bigger. A child: “More children chose apples because that row looks longer.”",
"<p><b>Thinking:</b> uses visual row length to compare, a reasonable idea, but it only works if the marks are equal-sized and aligned.</p><p><b>Teacher:</b> “How could we check? What if each picture were the same size?” Count or match one-to-one, or line up on a grid or bar graph.</p><p><b>Evidence:</b> interprets by counting or aligning the categories.</p>",
["Row length interpretation","Equal-size / aligned representation","Check by counting or matching"]],
[3,"Viewpoint","A child says: “The block is behind the cup from where I am standing.”",
"<p><b>Thinking:</b> understands that spatial relations depend on <b>viewpoint</b> (orientation).</p><p><b>Teacher:</b> “Where would it be from where I'm sitting? Tell your friend how to find it without pointing.”</p><p><b>Evidence:</b> uses a reference point and other perspectives.</p>",
["Viewpoint/orientation","Perspective-taking question","Precise spatial language"]],
[4,"“I'm bad at science”","A child predicted a shorter distance. After the trials: “My idea was wrong. I am bad at science.”",
"<p><b>Acknowledge:</b> “It can feel disappointing when things don't go as we thought. Scientists change their ideas too.”</p><p><b>Return to evidence:</b> “Let's look at what we measured. What happened with the higher ramp?”</p><p><b>Invite:</b> “What do you think now? What else could we test?”</p>",
["Acknowledge feeling","Return to evidence","Invite new idea/question"],
{q:"Best first move?",opts:["“That's okay, the answer was longer.”","“It can feel disappointing. Let's look at what we found together. What do you notice?”","“Next time listen to me.”"],ans:1,why:"It acknowledges the feeling, returns to the evidence and invites thinking."}],
[4,"Red is faster","“The red car wins because red is faster.”",
"<p><b>Thinking:</b> links a salient feature (colour) to the outcome; their own causal idea.</p><p><b>Teacher:</b> “Interesting. What could we compare to investigate your idea?” Plan: two cars that are the same except colour, same ramp, same release, repeat.</p><p><b>Avoid:</b> “No, colour doesn't matter” (shuts it down) or agreeing (confirms the misconception).</p>",
["Respect idea","Turn into investigation","Fair test design","Why not A/C"],
{q:"Which response?",opts:["“No. Colour does not matter.”","“Interesting. What could we compare to investigate your idea?”","“Yes, red cars are always faster.”"],ans:1,why:"Keeps the child's idea and makes it testable."}],
[4,"The puddle","On the playground: “It was bigger before. Where did the water go?”",
"<p><b>Noticed:</b> the puddle got smaller. <b>Wondering:</b> where the water went.</p><p><b>Teacher:</b> “What could we do to find out? How could we see if it keeps changing?” Mark the edge with chalk, check again later, and compare a puddle in the sun with one in the shade.</p><p><b>Evidence:</b> describes observations (“the chalk line is outside the water now”) before explanations.</p>",
["Notice + wonder","Investigable question","Observation over time / comparison"]],
[4,"Quiet child","During the ramp discussion, a child watches closely, points to the longer distance, and says very little.",
"<p><b>Overlooked:</b> the child may be participating and understanding through gesture.</p><p><b>Teacher:</b> “Can you show me what you noticed?” Invite pointing, placing a marker, drawing or arranging results. Describe the gesture back to the group (“She's showing that this one went farther”).</p>",
["Gesture = participation","Alternative ways to communicate","Preserve the child's meaning"]],
[4,"“We already know”","After one trial: “We already tried it once. We know the answer.”",
"<p><b>Teacher:</b> “What if we tried again, would it go exactly the same distance? Let's find out.” Results vary between trials; repeating shows whether the pattern holds. Then compare the trials together.</p>",
["Variation between trials","Repeat to check pattern","Invites child to test"]],
[5,"Floating feather (puppet)","Children are curious why some things float in the air. Plan a short probe of their prior ideas.",
"<p>Use a <b>puppet</b>: “Why does the feather float?” or an <b>interview about instances</b> with pictures (feather, stone, leaf): “Which would fall slowly? Why?” Wait 3–5 s, don't force a definition, invite drawings. Then plan an investigation from their ideas (drop pairs of objects).</p>",
["Probing method","Open question","Wait time / no forced answer","Next step investigation"]],
[5,"Snail on surfaces","Children watch a snail on the playground.",
"<p><b>Process skills:</b> observe (how it moves), predict (“How might it move on sand or on a smooth tray?”), compare surfaces, communicate (draw or describe).</p><p><b>Teacher:</b> “What do you think will happen if…? How can you test your idea?”</p>",
["Process skills named","Open question","Prediction then test"]]
];
