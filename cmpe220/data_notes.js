// Topic notes built from the lecture videos (Birkan Yılmaz) and problem sessions.
(function(){
const V = (id, t, label) => { const p = t.split(':').map(Number); const s = p.length === 3 ? p[0]*3600+p[1]*60+p[2] : p[0]*60+p[1]; return `<a href="https://youtu.be/${id}?t=${s}" target="_blank" rel="noopener">${label||t}</a>`; };
const W1A='_I0MGwaoxGw', W1B='EE_qMquS4yM', W1C='lnHd06Vq_uI', W1X='F0A2o9T1zWU', W2A='MQaWHeJRbXM', W2B='7hXz_I_UDO8', W3A='jaXQGIWy1VE', W4A='L_Pe0JPGMK4', W4B='g3R4idzIfZY', W6A='lEjkFDb8O_Q', W6B='F-PVVoQ8C6U', W6C='Wb9Ed9jpxvw', W7A='EVlAz7ZsIM8';
DATA.V = V; DATA.VID = {W1A,W1B,W1C,W1X,W2A,W2B,W3A,W4A,W4B,W6A,W6B,W6C,W7A};

DATA.videos = [
  { id: W1A, title: 'Week 1a', topics: 'Propositions, connectives, ⇒ truth table, converse/contrapositive, iff, logical equivalence, De Morgan' },
  { id: W1B, title: 'Week 1b', topics: 'Premises, proofs, rules of inference (MP, adjunction, DPI, substitution, contradiction rule)' },
  { id: W1C, title: 'Week 1c', topics: 'Predicates, number sets, completeness/lub, solution sets, ∀ ∃ ∃!' },
  { id: W1X, title: 'Week 1c (extension)', topics: 'Restricted quantifiers, quantifier order, negating quantified statements' },
  { id: W2A, title: 'Week 2a', topics: 'Definitions (even, divides, prime, gcd, rational); direct, cases, contrapositive, contradiction; √2 irrational' },
  { id: W2B, title: 'Week 2b', topics: 'Infinitely many primes; contradiction for P⇒Q; biconditionals; ∃ proofs and counterexamples; well-ordering; induction' },
  { id: W3A, title: 'Week 3a', topics: 'Induction examples, general & strong induction, pigeonhole, sets, subsets, A = B format' },
  { id: W4A, title: 'Week 4a', topics: 'Relations, properties and their negations, inverse, composition, equivalence relations' },
  { id: W4B, title: 'Week 4b', topics: 'Equivalence classes, partitions, order relations' },
  { id: W6A, title: 'Week 6a', topics: 'Image/preimage propositions; f injective ⇔ f[A₁∩A₂] = f[A₁]∩f[A₂]; invertible maps' },
  { id: W6B, title: 'Week 6b', topics: 'Inverse is unique; invertible ⇔ bijective; equinumerous sets; finite sets; disjoint union' },
  { id: W6C, title: 'Week 6c', topics: 'Finite cardinality: remove one element, inclusion–exclusion, |A×B|, |𝒫(X)| = 2ⁿ, 1-1/onto vs size' },
  { id: W7A, title: 'Week 7a', topics: 'Infinite sets, denumerable/countable, Cantor–Bernstein, uncountability' }
];

DATA.toolkitRules = `
<div class="sheet" style="border-top:3px solid var(--qed)">
<h3 style="margin-top:0;color:var(--qed)">0 · How Birkan Yılmaz grades (from the lectures)</h3>
<ul>
<li><b>Only the course's techniques count:</b> direct proof, proof by cases, contrapositive, contradiction, biconditional (both directions), and induction (including general and strong forms), plus the pigeonhole principle. “You cannot make up proof techniques… you will be able to use only those.” ${V(W2A,'43:31')}</li>
<li><b>The first sentence is worth a third to a half of the points.</b> “If you start wrong most probably I will not read the rest.” ${V(W2A,'13:21')} ${V(W1A,'26:44')}</li>
<li><b>Name the technique on paper:</b> write “Proof by contrapositive.” and then “Suppose ¬Q.”; for contradiction, “Assume for a contradiction ¬P.” (or “P ∧ ¬Q”). “I need to see it on the paper, not in your mind.” ${V(W2A,'46:28')}</li>
<li><b>Write a “Want:” line</b> beside the proof, with the exact goal. ${V(W2A,'30:34')}</li>
<li><b>Follow the boxed formats exactly.</b> The proof opens with the assumption and closes with the conclusion: “Therefore Q.” / “Therefore ¬P.” / “Hence P.” / “By (1) and (2)…”.</li>
<li><b>Every variable must be introduced by a quantifier</b> (“let x ∈ A be arbitrary”, “∃k ∈ ℤ such that…”). This was triple-starred on the board. ${V(W1C,'0:00','Week 1c')}</li>
<li><b>Induction:</b> never skip the basis step. In the inductive step, start from the assumption, not from the goal. ${V(W3A,'2:07')}</li>
<li><b>Venn diagrams are not proofs</b>, and a bare truth table is not a proof either: write sentences. ${V(W3A,'50:10')}</li>
<li><b>Existential claims:</b> give one witness, and no more than asked. To disprove ∃, prove ∀¬.</li>
<li><b>Questions are easy; the structure is what's graded.</b> “The most important part is whether you are able to write in a structured way.” ${V(W2A,'16:35')}</li>
<li><b>Definitions will be asked.</b> “What's a relation, what's a relation on A… you should be able to write the definition.” ${V(W4A,'1:01')}</li>
</ul></div>`;
DATA.toolkit = DATA.toolkitRules + DATA.toolkit;

DATA.notes.logic = `
<div class="def"><b>Proposition:</b> a declarative sentence that is either true or false, <b>but not both</b>. ${V(W1A,'1:20')}</div>
<p>Connectives: <span class="m">¬, ∧, ∨, ⇒, ⇔</span>. The <b>main connective</b> is the one applied last: in <span class="m">(p ∧ q) ∨ r</span> it is <span class="m">∨</span>.</p>
<div class="tw"><table><tr><th class="m">P</th><th class="m">Q</th><th class="m">P ⇒ Q</th></tr><tr><td>T</td><td>T</td><td>T</td></tr><tr><td>T</td><td>F</td><td><b>F</b></td></tr><tr><td>F</td><td>T</td><td>T</td></tr><tr><td>F</td><td>F</td><td>T</td></tr></table></div>
<ul>
<li>A false hypothesis makes the implication true (“If I have a million dollars then I am an alien” is true for him). ${V(W1A,'12:52')}</li>
<li><span class="m">P ⇒ Q</span> reads “P is sufficient for Q”, “Q is necessary for P”, “Q provided that P”. ${V(W1A,'11:54')}</li>
<li>Converse <span class="m">Q ⇒ P</span> is <b>not</b> equivalent; contrapositive <span class="m">¬Q ⇒ ¬P</span> is. His example: <span class="m">x = −1 ⇒ x² = 1</span> is true, the converse is false (x = 1). ${V(W1A,'14:50')}</li>
<li><b>Logical equivalence</b> <span class="m">A ≡ B</span>: same truth value in every row. Prove it with a sentence plus a truth table, or algebraically with known laws. Associativity of ∧ and ∨ was proved by truth table. ${V(W1A,'24:47')}</li>
</ul>
<h3>Proofs from premises ${V(W1B,'0:00','Week 1b')}</h3>
<ul>
<li>A <b>premise</b> is a statement assumed true. A <b>proof</b> derives a statement from premises; every line is a premise or follows from earlier lines by a rule of inference, labelled like “1, 2, MP”.</li>
<li>Each rule is a tautology: modus ponens is <span class="m">[p ∧ (p ⇒ q)] ⇒ q</span>.</li>
<li><b>DPI (direct proof of implication):</b> to prove <span class="m">p ⇒ q</span>, add <span class="m">p</span> as a premise and derive <span class="m">q</span>.</li>
<li><b>Contradiction rule:</b> to prove <span class="m">q</span>, add <span class="m">¬q</span> and derive <span class="m">C ∧ ¬C</span>.</li>
<li>Three ways to prove <span class="m">P ⇒ Q</span>: direct, contrapositive, contradiction (assume <span class="m">P ∧ ¬Q</span>). “<span class="m">¬(P ⇒ Q) ≡ P ∧ ¬Q</span> may be a bit tricky, be careful.” ${V(W1B,'30:56')}</li>
</ul>
<h3>Knights and knaves (problem sessions)</h3>
<p>Let <span class="m">a</span>: “A is a knight”. Whatever A says, call it <span class="m">S</span>; then <span class="m">a ⇔ S</span> (the speaker rule). To learn <span class="m">Q</span> from anyone, ask “Is <span class="m">a ⇔ Q</span> true?”; the answer is “yes” exactly when <span class="m">Q</span> is true.</p>`;

DATA.notes.quant = `
<div class="def"><b>Predicate:</b> a sentence with variables that becomes a proposition once values from the universe <span class="m">U</span> are substituted. <b>Solution set</b>: <span class="m">{x ∈ U : P(x) is true}</span>.</div>
<ul>
<li><b>Every variable must be introduced by a quantifier</b> before you use it (★★★ on the board). ${V(W1C,'0:00','Week 1c')}</li>
<li><span class="m">∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) ⇒ y = x))</span>: existence plus uniqueness.</li>
<li>Restricted form: <span class="m">∀x ∈ A P(x) ≡ ∀x (x ∈ A ⇒ P(x))</span>, <span class="m">∃x ∈ A P(x) ≡ ∃x (x ∈ A ∧ P(x))</span>. ${V(W1X,'0:00','Week 1c ext.')}</li>
<li><b>Order matters.</b> On <span class="m">ℝ⁺</span>: <span class="m">∀x ∃y (y &lt; x)</span> is true (take <span class="m">y = x/5</span>), but <span class="m">∃y ∀x (y &lt; x)</span> is false (given <span class="m">y₀</span>, take <span class="m">x = y₀/10</span>). <span class="m">∃∀</span> is the stronger claim (“a magical number”).</li>
<li><b>Negation</b> (boxed): flip each quantifier, keep the domain, negate the inside. <span class="m">¬∀x ∈ U P(x) ≡ ∃x ∈ U ¬P(x)</span>; <span class="m">¬∃x ∈ U P(x) ≡ ∀x ∈ U ¬P(x)</span>; <span class="m">∧</span> becomes <span class="m">∨</span>; <span class="m">¬(P ⇒ Q) ≡ P ∧ ¬Q</span>. “Understanding the statements and their negations is very crucial in this course.”</li>
<li>Worked negation: <span class="m">∀ε &gt; 0 ∃N ∀n ≥ N |aₙ − L| &lt; ε</span> becomes <span class="m">∃ε &gt; 0 ∀N ∃n ≥ N |aₙ − L| ≥ ε</span>.</li>
</ul>
<h3>Upper bounds and completeness ${V(W1C,'0:00','Week 1c')}</h3>
<div class="def"><b>Upper bound:</b> <span class="m">u</span> with <span class="m">∀x ∈ X, x ≤ u</span>. <b>Least upper bound</b> <span class="m">ℓ</span>: an upper bound with <span class="m">ℓ ≤ u</span> for every upper bound <span class="m">u</span>.</div>
<p>ℝ is complete (every nonempty set that is bounded above has a lub); ℚ is not: <span class="m">{x ∈ ℚ : x² &lt; 2}</span> has no lub in ℚ.</p>
<h3>Formal proofs with quantifiers</h3>
<p>UI, UG (c arbitrary), EI (c a <b>new</b> name), EG. Do EI before UI. Two separate ∃ facts need two different names.</p>`;

DATA.notes.tech = `
<h3>Definitions ${V(W2A,'1:01')}</h3>
<ul>
<li><span class="m">z</span> even ⇔ <span class="m">∃x ∈ ℤ, z = 2x</span>; odd ⇔ <span class="m">∃k ∈ ℤ, z = 2k + 1</span>.</li>
<li><span class="m">a ∣ b ⇔ ∃c ∈ ℤ, ac = b</span>.</li>
<li><span class="m">n ∈ ℕ</span> is prime ⇔ it has exactly two divisors in ℕ, 1 and <span class="m">n</span>.</li>
<li><span class="m">gcd(a,b) = d</span>: (1) <span class="m">d ∣ a ∧ d ∣ b</span>; (2) <span class="m">d₁ ∣ a ∧ d₁ ∣ b ⇒ d₁ ∣ d</span>; (3) <span class="m">d &gt; 0</span>.</li>
<li><span class="m">x</span> rational ⇔ <span class="m">∃a, b ∈ ℤ, b ≠ 0, x = a/b</span>; irrational ⇔ not rational. ${V(W2A,'58:31')}</li>
</ul>
<h3>The boxed formats</h3>
<div class="tw"><table>
<tr><th>Technique</th><th>Format</th><th>Lecture example</th></tr>
<tr><td>Direct</td><td>Proof. Suppose P. Therefore … Therefore Q. ∎</td><td>x odd ⇒ x² odd: x = 2k+1, x² = 2(2k²+2k)+1, and 2k²+2k ∈ ℤ. ${V(W2A,'15:33')}</td></tr>
<tr><td>Cases</td><td>Case 1: … Case 2: … The cases cover everything, so Q.</td><td>Triangle inequality <span class="m">|x+y| ≤ |x|+|y|</span>: four sign cases, with sub-cases. ${V(W2A,'34:37')}</td></tr>
<tr><td>Contrapositive</td><td><b>Proof (by contrapositive).</b> Suppose ¬Q. … Therefore ¬P. ∎</td><td>x² − 6x + 5 even ⇒ x odd. ${V(W2A,'48:29')}</td></tr>
<tr><td>Contradiction (P)</td><td>Proof. Assume for a contradiction ¬P. … C … ¬C. Hence P. ∎</td><td>√2 is irrational (gcd(a,b) = 1, then both even). ${V(W2A,'1:00:31')}</td></tr>
<tr><td>Contradiction (P ⇒ Q)</td><td>Assume for a contradiction P and ¬Q. … Thus P ⇒ Q is proved.</td><td>a² − 2a + 7 even ⇒ a odd. ${V(W2B,'11:20')}</td></tr>
<tr><td>Biconditional</td><td>(1) P ⇒ Q: Suppose P… (2) Q ⇒ P: Suppose Q… By (1) and (2), the result.</td><td>n odd ⇔ n² odd (⇐ by contrapositive). ${V(W2B,'23:33')}</td></tr>
</table></div>
<ul>
<li>Justify closure every time: “since k ∈ ℤ, 2k² + 2k ∈ ℤ”. When you multiply or divide an inequality, say why the factor is positive.</li>
<li>“If you're able to prove it with contradiction, most probably you will be able to prove it with contrapositive easily.” ${V(W2B,'15:23')}</li>
<li><b>Infinitely many primes</b> (contradiction): if <span class="m">p₁ &lt; … &lt; pₙ</span> are all the primes, then <span class="m">p = p₁⋯pₙ + 1</span> leaves remainder 1 on division by every <span class="m">pᵢ</span>. ${V(W2B,'0:01')}</li>
</ul>
<h3>∃ and counterexamples ${V(W2B,'30:44')}</h3>
<ul>
<li>Prove <span class="m">∃x P(x)</span>: “bring me that number”. One witness.</li>
<li>Disprove <span class="m">∀x P(x)</span>: one counterexample (<span class="m">x = −2, y = 1</span> kills “x &lt; y ⇒ x² &lt; y²”). ${V(W2B,'42:55')}</li>
<li>Disprove <span class="m">∃x P(x)</span>: prove <span class="m">∀x ¬P(x)</span> with a real technique.</li>
<li>Prove-or-disprove: first find out whether it is true. Try values. Example: <span class="m">x ≠ y, x, y &gt; 0 ⇒ x/y + y/x &gt; 2</span> is true, by contradiction: multiply by <span class="m">xy &gt; 0</span> to get <span class="m">(x − y)² ≤ 0</span>. ${V(W2B,'44:58')}</li>
</ul>`;

DATA.notes.ind = `
<div class="def"><b>Well-ordering principle:</b> every nonempty subset of ℕ has a smallest element. It fails for ℤ, ℚ⁺, ℝ⁺. ${V(W2B,'49:50')}</div>
<div class="def"><b>Principle of mathematical induction:</b> if <span class="m">P₁</span> is true and <span class="m">Pₙ ⇒ Pₙ₊₁</span> for all n, then <span class="m">Pₙ</span> is true for all n. <b>General form</b>: start at any <span class="m">k₀</span>. ${V(W2B,'55:53')} ${V(W3A,'14:02')}</div>
<div class="def"><b>Strong induction:</b> basis <span class="m">P<sub>k₀</sub></span>; step: <span class="m">(P<sub>k₀</sub> ∧ … ∧ Pₙ) ⇒ Pₙ₊₁</span>. Use it when <span class="m">Pₙ₊₁</span> depends on earlier cases, not just <span class="m">Pₙ</span>. ${V(W3A,'17:10')}</div>
<h3>Lecture examples</h3>
<ul>
<li><span class="m">1² + … + n² = n(n+1)(2n+1)/6</span>. Start from the IH and add <span class="m">(n+1)²</span> to both sides. “You have to start with your assumption, you should not start with the goal.” ${V(W3A,'2:07')}</li>
<li>Bernoulli: <span class="m">x &gt; 0 ⇒ (1+x)ⁿ ≥ 1 + nx</span>. Multiply the IH by <span class="m">1 + x &gt; 0</span> and say why that keeps the direction; then drop <span class="m">nx² ≥ 0</span>. ${V(W3A,'9:05')}</li>
<li>Every <span class="m">n ≥ 2</span> is prime or a product of primes (strong induction, with cases inside). ${V(W3A,'20:20')}</li>
<li><span class="m">|𝒫(X)| = 2ⁿ</span> by induction on <span class="m">|X|</span>; the basis is <span class="m">n = 0</span>. ${V(W6C,'28:15')}</li>
</ul>
<div class="def"><b>Pigeonhole principle:</b> if <span class="m">k + 1</span> or more objects go into <span class="m">k</span> boxes, some box holds at least two. It proves existence without finding the objects (two people with the same number of hairs). ${V(W3A,'30:07')}</div>
<h3>Writing the induction proof</h3>
<ol><li><b>Proof by (strong) induction on n.</b> Let <span class="m">P(n)</span>: … (state it).</li><li><b>Basis step:</b> check <span class="m">P(n₀)</span>, showing both sides.</li><li><b>Inductive step:</b> let <span class="m">n ≥ n₀</span> be arbitrary and assume <span class="m">P(n)</span>. Want: <span class="m">P(n+1)</span>.</li><li>Start from the IH and mark where you use it.</li><li><b>Conclusion:</b> by the principle of induction, <span class="m">P(n)</span> holds for all <span class="m">n ≥ n₀</span>.</li></ol>
<p class="tip small">Stuck on an inequality step? Prove something stronger (induction loading): <span class="m">Σ 1/k² ≤ 2 − 1/n</span> instead of <span class="m">≤ 2</span>.</p>`;

DATA.notes.sets = `
<ul>
<li><span class="m">ℕ = {0, 1, 2, …}</span> (he includes 0), <span class="m">ℕ⁺ = {1, 2, …}</span>. ${V(W3A,'38:05')}</li>
<li><b>Set equality:</b> <span class="m">A = B ⇔ ∀x (x ∈ A ⇒ x ∈ B) ∧ (x ∈ B ⇒ x ∈ A)</span>. <b>Negation:</b> <span class="m">A ≠ B ⇔ ∃x [(x ∈ A ∧ x ∉ B) ∨ (x ∈ B ∧ x ∉ A)]</span>. ${V(W3A,'44:06')}</li>
<li><b>Subset:</b> <span class="m">A ⊆ B ⇔ ∀x (x ∈ A ⇒ x ∈ B)</span>; <span class="m">A ⊄ B ⇔ ∃x (x ∈ A ∧ x ∉ B)</span>. Proper subset: <span class="m">A ⊆ B ∧ A ≠ B</span>. ${V(W3A,'55:18')}</li>
<li><span class="m">∅ ⊆ B</span> for every B (vacuous truth); <span class="m">A ⊆ A</span>; <span class="m">A ⊆ B ∧ B ⊆ C ⇒ A ⊆ C</span>. ${V(W3A,'1:00:03')}</li>
<li><span class="m">∅ ≠ {∅}</span>: the second set has one element.</li>
<li>Intervals: the ∞ side is always open, since ∞ ∉ ℝ.</li>
</ul>
<div class="def"><b>Format for A = B</b> ${V(W3A,'1:09:02')}: (1) <span class="m">A ⊆ B</span>: let <span class="m">x ∈ A</span> be arbitrary … therefore <span class="m">x ∈ B</span>. (2) <span class="m">B ⊆ A</span>: let <span class="m">x ∈ B</span> be arbitrary … therefore <span class="m">x ∈ A</span>. By (1) and (2), <span class="m">A = B</span>.</div>
<h3>Operations</h3>
<div class="tw"><table>
<tr><td><span class="m">x ∈ A ∪ B</span></td><td class="m">x ∈ A ∨ x ∈ B</td></tr>
<tr><td><span class="m">x ∈ A ∩ B</span></td><td class="m">x ∈ A ∧ x ∈ B</td></tr>
<tr><td><span class="m">x ∈ A ∖ B</span></td><td class="m">x ∈ A ∧ x ∉ B</td></tr>
<tr><td><span class="m">x ∈ Aᶜ</span></td><td class="m">x ∈ U ∧ x ∉ A</td></tr>
<tr><td><span class="m">A Δ B</span></td><td class="m">(A ∖ B) ∪ (B ∖ A)</td></tr>
<tr><td><span class="m">X ∈ 𝒫(A)</span></td><td class="m">X ⊆ A</td></tr>
<tr><td><span class="m">(x,y) ∈ A × B</span></td><td class="m">x ∈ A ∧ y ∈ B</td></tr>
</table></div>
<h3>Facts from the problem sessions</h3>
<ul>
<li><span class="m">𝒫(A ∩ B) = 𝒫(A) ∩ 𝒫(B)</span>, but only <span class="m">𝒫(A) ∪ 𝒫(B) ⊆ 𝒫(A ∪ B)</span>, with equality iff <span class="m">A ⊆ B</span> or <span class="m">B ⊆ A</span>.</li>
<li><span class="m">(A ∖ B) × C = (A × C) ∖ (B × C)</span>; <span class="m">(A × B) ∩ (C × D) = (A ∩ C) × (B ∩ D)</span>.</li>
<li><span class="m">(A × B) ∪ (C × D) ⊆ (A ∪ C) × (B ∪ D)</span>, and it can be strict.</li>
<li><span class="m">(A × B)ᶜ = (Aᶜ × V) ∪ (U × Bᶜ)</span>, not <span class="m">Aᶜ × Bᶜ</span>.</li>
<li><span class="m">𝒫(A × B) ≠ 𝒫(A) × 𝒫(B)</span>: sets of pairs versus pairs of sets.</li>
<li><span class="m">|𝒫(X)| = 2ⁿ</span>, <span class="m">|A × B| = |A|·|B|</span>, <span class="m">|A ∪ B| = |A| + |B| − |A ∩ B|</span>. ${V(W6C,'11:03')}</li>
</ul>`;

DATA.notes.rel = `
<div class="def"><b>Relation</b> from A into B: any subset <span class="m">R ⊆ A × B</span>; write <span class="m">xRy</span> for <span class="m">(x,y) ∈ R</span>. A relation <b>on</b> A is <span class="m">R ⊆ A × A</span>. ∅ is a relation too. “I will ask in all exams… you should be able to write the definition.” ${V(W4A,'1:01')}</div>
<div class="tw"><table>
<tr><th>Property</th><th>Definition</th><th>“R is NOT …” ${V(W4A,'19:29')}</th></tr>
<tr><td>reflexive</td><td class="m">∀x ∈ A, xRx</td><td class="m">∃x ∈ A, (x,x) ∉ R</td></tr>
<tr><td>irreflexive</td><td class="m">∀x ∈ A, (x,x) ∉ R</td><td class="m">∃x ∈ A, (x,x) ∈ R</td></tr>
<tr><td>symmetric</td><td class="m">∀x,y, xRy ⇒ yRx</td><td class="m">∃x,y, xRy ∧ (y,x) ∉ R</td></tr>
<tr><td>asymmetric</td><td class="m">∀x,y, xRy ⇒ (y,x) ∉ R</td><td class="m">∃x,y, xRy ∧ yRx</td></tr>
<tr><td>antisymmetric</td><td class="m">∀x,y, (xRy ∧ yRx) ⇒ x = y</td><td class="m">∃x,y, xRy ∧ yRx ∧ x ≠ y</td></tr>
<tr><td>transitive</td><td class="m">∀x,y,z, (xRy ∧ yRz) ⇒ xRz</td><td class="m">∃x,y,z, xRy ∧ yRz ∧ (x,z) ∉ R</td></tr>
</table></div>
<ul>
<li>“Not reflexive” does <b>not</b> mean irreflexive. A relation can have none of the six properties. ${V(W4A,'14:23')}</li>
<li>Reflexivity is easy but “many students have a hard time proving it”: write “Let x ∈ A be arbitrary. … so (x,x) ∈ R.”</li>
<li><b>Identity</b> <span class="m">I_A = {(x,x) : x ∈ A}</span>. <b>Inverse</b> <span class="m">R⁻¹ = {(y,x) : (x,y) ∈ R}</span>. <b>Composition</b> <span class="m">S∘R = {(x,z) : ∃y, xRy ∧ ySz}</span>: R first, then S. ${V(W4A,'56:03')}</li>
<li><b>Prop (proved):</b> R symmetric ⇔ <span class="m">R = R⁻¹</span>. ${V(W4A,'47:44')}</li>
<li><b>Characterisations</b> (“a good exercise”): reflexive ⇔ <span class="m">I_A ⊆ R</span>; antisymmetric ⇔ <span class="m">R ∩ R⁻¹ ⊆ I_A</span>; transitive ⇔ <span class="m">R∘R ⊆ R</span>. ${V(W4A,'1:03:11')}</li>
</ul>
<div class="def"><b>Equivalence relation:</b> reflexive, symmetric and transitive. Examples: parallel lines, same nationality, <span class="m">7 ∣ (n − m)</span> on ℤ. ${V(W4A,'1:04:04')}</div>
<div class="def"><b>Equivalence class</b> <span class="m">x̄ = [x] = {y ∈ A : yRx}</span> ${V(W4B,'1:09')}; it is never empty, since <span class="m">x ∈ x̄</span>. <b>Quotient set</b> <span class="m">A/R = {x̄ : x ∈ A}</span>. ${V(W4B,'10:00')} Example: <span class="m">3 ∣ (n − m)</span> on ℤ has the classes <span class="m">0̄, 1̄, 2̄</span>. ${V(W4B,'5:02')}</div>
<ul>
<li><b>Prop 1 (proved):</b> <span class="m">xRy ⇔ x̄ = ȳ</span>. Biconditional; (⇒) by double inclusion using symmetry and transitivity. ${V(W4B,'12:00')}</li>
<li><b>Prop 2 (proved):</b> if x is not related to y, then <span class="m">x̄ ∩ ȳ = ∅</span>. Assume for a contradiction that some <span class="m">z ∈ x̄ ∩ ȳ</span>; then <span class="m">zRx</span> and <span class="m">zRy</span> give <span class="m">xRy</span>. ${V(W4B,'19:13')}</li>
<li><b>Corollary:</b> <span class="m">x̄ = ȳ</span> or <span class="m">x̄ ∩ ȳ = ∅</span>. Hence <span class="m">A/R</span> is a partition of A. ${V(W4B,'23:05')}</li>
</ul>
<div class="def"><b>Partition</b> of A: a family of subsets that are (1) nonempty, (2) pairwise disjoint, and (3) whose union is A. ${V(W4B,'24:03')}</div>
<ul><li><b>Prop 3 (proved, long):</b> every partition comes from an equivalence relation: define <span class="m">xRy ⇔</span> x and y lie in the same block, then check R, S, T and that the classes are exactly the blocks. ${V(W4B,'30:09')}</li></ul>
<p class="tip small">Shortcut from Wrap-Up 2: if <span class="m">aRb ⇔ f(a) = f(b)</span> for some function f, then R is automatically an equivalence relation and its classes are the nonempty fibres <span class="m">f⁻¹({y})</span>. Examples: <span class="m">a² − 2a = b² − 2b</span>, <span class="m">x₁² + y₁² = x₂² + y₂²</span>, <span class="m">x₁ + y₁ = x₂ + y₂</span>.</p>`;

DATA.notes.ord = `
<div class="def"><b>Order relation (partial order):</b> reflexive, <b>antisymmetric</b> and transitive; the pair (A, R) is an ordered set. ${V(W4B,'52:40')} x and y are <b>comparable</b> if <span class="m">xRy ∨ yRx</span>. ${V(W4B,'57:44')} <b>Total order:</b> additionally every two elements are comparable (<span class="m">aRb ∨ bRa</span>). <b>Preorder:</b> reflexive and transitive.</div>
<ul>
<li>Standard examples: <span class="m">≤</span> on ℝ (total); <span class="m">∣</span> on <span class="m">ℤ⁺</span> (partial, not total: 2 and 3); <span class="m">⊆</span> on <span class="m">𝒫(X)</span> (partial).</li>
<li><span class="m">∣</span> on ℤ is only a preorder: <span class="m">2 ∣ −2</span> and <span class="m">−2 ∣ 2</span>, but <span class="m">2 ≠ −2</span>.</li>
<li>Antisymmetry of ∣ on <span class="m">ℤ⁺</span>: <span class="m">b = ak, a = bℓ ⇒ a = akℓ ⇒ kℓ = 1 ⇒ k = ℓ = 1</span> (positive integers).</li>
<li>Product-type orders: <span class="m">(a,b) ≼ (c,d) ⇔ a ≤ c ∧ b ≥ d</span> is partial, not total, with no least or greatest element on <span class="m">ℕ⁺ × ℕ⁺</span>.</li>
</ul>
<h3>Bounds</h3>
<div class="def">${V(W4B,'1:05:42')} <span class="m">u</span> is an <b>upper bound</b> of S if <span class="m">∀s ∈ S, s ≼ u</span>. <span class="m">ℓ = sup S</span> (lub) if (i) ℓ is an upper bound and (ii) <span class="m">ℓ ≼ u</span> for every upper bound u. Dually: lower bound, inf/glb.</div>
<ul>
<li>In <span class="m">(𝒫(X), ⊆)</span>: <span class="m">sup{A, B} = A ∪ B</span>, <span class="m">inf{A, B} = A ∩ B</span>; for a family 𝒮, sup = <span class="m">⋃𝒮</span>, inf = <span class="m">⋂𝒮</span>.</li>
<li>Lecture: <span class="m">sup{(n−1)/n : n ∈ ℕ⁺} = 1</span>, proved by contradiction. ${V(W4B,'1:16:39')} <b>Completeness axiom:</b> every nonempty subset of ℝ that is bounded above has a sup in ℝ. ${V(W4B,'1:29:33')} The glb is unique, by antisymmetry: if g and g′ are both glbs, then <span class="m">g ≤ g′</span> and <span class="m">g′ ≤ g</span>. ${V(W4B,'1:31:37')}</li>
<li>In ℝ: <span class="m">sup{1 − 1/n : n ∈ ℕ⁺} = 1</span> (no maximum). For (ii), suppose <span class="m">u &lt; 1</span> and use the Archimedean property to find <span class="m">n &gt; 1/(1 − u)</span>.</li>
<li><span class="m">sup(A ∪ B) = max(sup A, sup B)</span>, <span class="m">sup(A + B) = sup A + sup B</span>, and <span class="m">sup(A ∩ B) ≤ min(sup A, sup B)</span>, which can be strict.</li>
</ul>`;

DATA.notes.fun = `
<div class="def"><b>Function</b> <span class="m">f : X → Y</span>: a relation <span class="m">f ⊆ X × Y</span> such that every <span class="m">x ∈ X</span> is related to <b>exactly one</b> <span class="m">y ∈ Y</span>. Equality: <span class="m">f = g ⇔ ∀x ∈ X, f(x) = g(x)</span>. ${V(W6B,'4:57')}</div>
<ul>
<li><b>Image</b> <span class="m">f[A] = {f(x) : x ∈ A}</span>; <b>preimage</b> <span class="m">f←(B) = {x ∈ X : f(x) ∈ B}</span>. “This is not the inverse, this is the preimage. The preimage always exists.” ${V(W6A,'0:00','Week 6a')}</li>
<li><b>One-to-one:</b> <span class="m">x ≠ y ⇒ f(x) ≠ f(y)</span>, or equivalently <span class="m">f(x₁) = f(x₂) ⇒ x₁ = x₂</span>. <b>Onto:</b> let <span class="m">y ∈ Y</span> be arbitrary and produce <span class="m">x ∈ X</span> with <span class="m">f(x) = y</span>.</li>
<li><b>Invertible:</b> <span class="m">∃g : Y → X</span> with <span class="m">g(f(x)) = x</span> for all x and <span class="m">f(g(y)) = y</span> for all y. Check <b>both</b>; solving y = f(x) for x only gives a candidate. ${V(W6A,'37:25')}</li>
<li>The inverse is unique (assume two inverses g, h and show g = h, using associativity of ∘). ${V(W6B,'10:09')}</li>
<li><b>Invertible ⇔ bijective.</b> “The domain is actually important”: <span class="m">x²</span> on ℝ is not invertible, on <span class="m">[0,∞) → [0,∞)</span> it is. ${V(W6B,'17:05')}</li>
</ul>
<h3>Image/preimage propositions (proved in lecture)</h3>
<ul>
<li><b>f injective ⇔ ∀A₁, A₂ ⊆ X: f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂].</b> The ⊆ half holds for every f. For (⇐), choose <span class="m">A₁ = {x}, A₂ = {y}</span>: “a clever choice”. ${V(W6A,'1:00')}</li>
<li>Preimage preserves everything: <span class="m">f←(B₁ ∪ B₂) = f←(B₁) ∪ f←(B₂)</span>, <span class="m">f←(B₁ ∩ B₂) = f←(B₁) ∩ f←(B₂)</span>, <span class="m">B₁ ⊆ B₂ ⇒ f←(B₁) ⊆ f←(B₂)</span>. ${V(W6A,'15:03')}</li>
<li><b>f surjective ⇔ ∀B ⊆ Y: f[f←(B)] = B.</b> The ⊆ half holds for every f. For (⇐), take <span class="m">B = {y}</span>. ${V(W6A,'26:13')}</li>
<li>Composition: f and g injective ⇒ g∘f injective; f and g surjective ⇒ g∘f surjective; g∘f injective ⇒ f injective; g∘f surjective ⇒ g surjective.</li>
</ul>
<p class="tip small">Proving a set equality about images: “take an element from here” (the left side). Label facts (*), (**) and finish with “by (*) and (**)”.</p>`;

DATA.notes.card = `
<div class="def"><b>Equinumerous</b> <span class="m">A ≈ B</span>: there is a bijection <span class="m">f : A → B</span>. “Very important definition.” For infinite sets don't talk about the “number of elements”. ${V(W6B,'21:30')}</div>
<div class="def"><b>Finite:</b> <span class="m">A = ∅</span> or <span class="m">A ≈ ℕₙ = {1, …, n}</span> for some <span class="m">n ≥ 1</span>; then <span class="m">card(A) = |A| = n</span>. “Infinite is not a number.” ${V(W6B,'24:26')}</div>
<ul>
<li><span class="m">≈</span> is reflexive, symmetric, transitive: use <span class="m">id</span>, <span class="m">f⁻¹</span>, <span class="m">g∘f</span>. ${V(W6B,'28:42')}</li>
<li><b>Gluing bijections:</b> if <span class="m">A ∩ B = ∅</span>, <span class="m">A′ ∩ B′ = ∅</span>, <span class="m">A ≈ A′</span>, <span class="m">B ≈ B′</span>, then <span class="m">A ∪ B ≈ A′ ∪ B′</span>. Define h piecewise; disjointness of A, B makes it well defined, and disjointness of A′, B′ gives injectivity in the mixed cases. ${V(W6B,'30:41')}</li>
<li>Consequences: <span class="m">|A ∪ B| = |A| + |B|</span> for disjoint finite sets; <span class="m">|A ∖ {x}| = |A| − 1</span>; subsets of finite sets are finite; inclusion–exclusion; <span class="m">|A × B| = |A||B|</span>; <span class="m">|𝒫(X)| = 2ⁿ</span>. ${V(W6C,'0:02')}</li>
<li>For finite X, Y: 1-1 ⇒ <span class="m">|X| ≤ |Y|</span>; onto ⇒ <span class="m">|X| ≥ |Y|</span>; <span class="m">A ⊆ B ⇒ |A| ≤ |B|</span> (“we will use this lemma a lot”). ${V(W6C,'39:14')}</li>
<li>Counting: there are <span class="m">n!/(n−k)!</span> one-to-one maps from a k-set into an n-set, and <span class="m">n!</span> bijections between two n-sets. ${V(W6C,'52:30')}</li>
</ul>
<h3>Infinite sets ${V(W7A,'0:02','Week 7a')}</h3>
<ul>
<li><b>Comparing sizes</b> ${V(W7A,'7:06')}: <span class="m">|X| = |Y|</span> if there is a bijection; <span class="m">|X| ≤ |Y|</span> if there is a 1-1 map <span class="m">X → Y</span>; <span class="m">|X| &lt; |Y|</span> if there is a 1-1 map but no bijection.</li>
<li><b>Cantor–Bernstein</b> ${V(W7A,'10:06')}: 1-1 maps <span class="m">X → Y</span> and <span class="m">Y → X</span> ⇒ a bijection exists. “Not responsible for the proof, but we will definitely be using this theorem a lot.” Two 1-1 maps are often “much, much easier” than one explicit bijection.</li>
<li><b>Cantor's theorem</b> ${V(W7A,'15:13')}: <span class="m">|A| &lt; |𝒫(A)|</span> for every set A. (i) <span class="m">x ↦ {x}</span> is 1-1. (ii) Assume for a contradiction that a bijection <span class="m">φ : A → 𝒫(A)</span> exists; let <span class="m">B = {x ∈ A : x ∉ φ(x)}</span> and <span class="m">φ(x₀) = B</span>. Both <span class="m">x₀ ∈ B</span> and <span class="m">x₀ ∉ B</span> lead to a contradiction. “Very important theorem.”</li>
<li><b>Continuum hypothesis</b>: no set strictly between <span class="m">|ℕ|</span> and <span class="m">|𝒫(ℕ)|</span>. You may use it, but write “due to continuum hypothesis”. ${V(W7A,'32:41')}</li>
</ul>
<div class="def"><b>Denumerable:</b> infinite X with a bijection <span class="m">ℕ → X</span>. <b>Countable:</b> finite or denumerable. <b>Uncountable:</b> an infinite set that is not countable. ${V(W7A,'33:40')}</div>
<div class="tw"><table><tr><th>To show X is…</th><th>Do this ${V(W7A,'39:46')}</th></tr>
<tr><td>finite</td><td>a bijection <span class="m">X → ℕₙ</span>, or <span class="m">X = ∅</span></td></tr>
<tr><td>denumerable</td><td>a bijection with ℕ, or two 1-1 maps plus Cantor–Bernstein</td></tr>
<tr><td>uncountable</td><td>(i) X is infinite, and (ii) there is no bijection <span class="m">ℕ → X</span> (diagonal or Cantor argument, or an uncountable subset)</td></tr></table></div>
<ul>
<li>Lecture examples: evens via <span class="m">n ↦ 2n</span> ${V(W7A,'44:49')}; <span class="m">{2ⁿ}</span> via <span class="m">n ↦ 2ⁿ</span> ${V(W7A,'46:48')}; <b>ℕ × ℕ</b> via <span class="m">n ↦ (n,3)</span> and <span class="m">(n,m) ↦ 2ⁿ3ᵐ</span> (1-1 by parity: even ≠ odd), then Cantor–Bernstein ${V(W7A,'49:48')}.</li>
<li>An infinite X is denumerable ⇔ it can be listed as <span class="m">{x₀, x₁, x₂, …}</span> with distinct entries: “life saving”. ${V(W7A,'1:04:21')}</li>
<li><b>Every infinite subset of ℕ is denumerable</b>: the inclusion map, plus <span class="m">k ↦ nₖ = min(A ∖ {n₀,…,nₖ₋₁})</span> by well-ordering, plus Cantor–Bernstein. ${V(W7A,'1:07:22')}</li>
<li><span class="m">𝒫(ℕ)</span> is uncountable, by Cantor. ℤ, ℚ, and countable unions of countable sets are countable; ℝ, <span class="m">(a,b)</span> and the 0-1 sequences are uncountable (problem sessions).</li>
</ul>`;
})();
