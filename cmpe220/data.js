// CmpE 220 Proof Lab: core data. Problem/quiz content lives in data_a.js, data_b.js, data_c.js; notes in data_notes.js.
var DATA = window.DATA = { problems: [], pd: [], bugs: [], cards: [], notes: {} };

DATA.topics = [
  { id: 'logic', short: 'Logic', name: 'Propositional logic & rules of inference' },
  { id: 'quant', short: 'Quantifiers', name: 'Predicates, quantifiers & formal proofs' },
  { id: 'tech',  short: 'Techniques', name: 'Proof techniques (direct, cases, contrapositive, contradiction, iff, existence)' },
  { id: 'ind',   short: 'Induction', name: 'Mathematical induction, strong induction, well-ordering' },
  { id: 'sets',  short: 'Sets', name: 'Sets, power sets & Cartesian products' },
  { id: 'rel',   short: 'Relations', name: 'Relations, equivalence relations & partitions' },
  { id: 'ord',   short: 'Orders & sup', name: 'Partial orders, preorders, bounds & supremum' },
  { id: 'fun',   short: 'Functions', name: 'Functions: injective, surjective, bijective, composition' },
  { id: 'card',  short: 'Cardinality', name: 'Finite, countable & uncountable sets' }
];

DATA.techniques = {
  direct: 'Direct proof',
  cases: 'Proof by cases',
  contra: 'Contrapositive',
  contradiction: 'Contradiction',
  iff: 'Prove both directions (⇔)',
  counter: 'Counterexample',
  construct: 'Give a witness (∃) / explicit construction',
  induction: 'Induction',
  strong: 'Strong induction',
  wop: 'Well-ordering principle',
  double: 'Direct: double inclusion (⊆ and ⊇)',
  chain: 'Direct: chain of known equivalences',
  inference: 'Formal derivation (rules of inference)',
  props: 'Direct: check each defining property',
  sup: 'Two-part supremum argument',
  bijection: 'Build an injection / bijection',
  diag: 'Cantor diagonal argument',
  pigeon: 'Pigeonhole principle',
  count: 'Counting argument'
};

// One mock-exam question is drawn from each group.
DATA.mockGroups = [['logic', 'quant', 'tech'], ['ind'], ['sets'], ['rel', 'ord'], ['fun'], ['card']];

DATA.plan = `
<h4>Tonight's plan (about 4 hours, then sleep)</h4>
<ol>
<li><b>Toolkit, 20 min.</b> Learn the opening line and the closing line for every proof type. Most lost points come from a wrong setup, not from hard algebra.</li>
<li><b>Prove or disprove, 20 min.</b> Train the reflex: is it true? If it's false, find the smallest counterexample.</li>
<li><b>Proof lab, 2 hours.</b> Go topic by topic. For each problem, pick the technique, write the proof yourself (paper is fine), and only then open the model proof. Grade yourself with the rubric. Mark anything shaky and come back to it.</li>
<li><b>Find the bug, 15 min.</b> Graders look for these mistakes: reused witnesses, an EI that isn't fresh, a skipped basis, using the IH outside its range, cancelling 0.</li>
<li><b>Mock exam, 60–90 min.</b> Do it timed. Then redo the shaky problems in the lab.</li>
<li><b>Morning, 15 min.</b> Flashcards for definitions, and the Toolkit once more.</li>
</ol>
<p class="tip small">In an open-ended proof exam, write every definition out explicitly (“n is odd, so n = 2k+1 for some k ∈ ℤ”), name every case, and finish by stating exactly what was proved. Partial credit goes to clear structure.</p>`;

DATA.toolkit = `
<div class="sheet">
<h3 style="margin-top:0">1 · How to open and close each kind of proof</h3>
<div class="tw"><table>
<tr><th>Goal</th><th>First line</th><th>Last line</th></tr>
<tr><td><span class="m">p ⇒ q</span> (direct)</td><td>Assume <span class="m">p</span>.</td><td>Therefore <span class="m">q</span>.</td></tr>
<tr><td><span class="m">p ⇒ q</span> (contrapositive)</td><td>Suppose <span class="m">¬q</span>.</td><td>Therefore <span class="m">¬p</span>. Hence <span class="m">p ⇒ q</span>.</td></tr>
<tr><td><span class="m">p</span> (contradiction)</td><td>Assume, for a contradiction, <span class="m">¬p</span>. (For an implication: assume <span class="m">p ∧ ¬q</span>.)</td><td>… <span class="m">C ∧ ¬C</span>, a contradiction. So <span class="m">p</span>.</td></tr>
<tr><td><span class="m">p ⇔ q</span></td><td>(⇒) Assume <span class="m">p</span> … (⇐) Assume <span class="m">q</span> …</td><td>Both directions hold.</td></tr>
<tr><td>TFAE <span class="m">p₁,…,p<sub>k</sub></span></td><td>Prove the cycle <span class="m">p₁ ⇒ p₂ ⇒ … ⇒ p<sub>k</sub> ⇒ p₁</span>.</td><td>The cycle closes, so all are equivalent.</td></tr>
<tr><td><span class="m">∀x P(x)</span></td><td>Let <span class="m">x</span> be arbitrary.</td><td>Since <span class="m">x</span> was arbitrary, <span class="m">∀x P(x)</span>.</td></tr>
<tr><td><span class="m">∃x P(x)</span></td><td>Take <span class="m">x = …</span> (a concrete witness).</td><td>Then <span class="m">P(x)</span> holds.</td></tr>
<tr><td><span class="m">∃!x P(x)</span></td><td>Existence: exhibit <span class="m">a</span>. Uniqueness: suppose <span class="m">P(b)</span>.</td><td>… so <span class="m">b = a</span>.</td></tr>
<tr><td>Disprove <span class="m">∀x P(x)</span></td><td colspan="2">One concrete counterexample, with the check written out.</td></tr>
<tr><td>Disprove <span class="m">∃x P(x)</span></td><td colspan="2">Prove <span class="m">∀x ¬P(x)</span>. An example is not enough.</td></tr>
<tr><td><span class="m">A ⊆ B</span></td><td>Let <span class="m">x ∈ A</span> be arbitrary.</td><td>So <span class="m">x ∈ B</span>. Hence <span class="m">A ⊆ B</span>.</td></tr>
<tr><td><span class="m">A = B</span></td><td>(⊆) … (⊇) …, or a chain of ⇔ steps on “<span class="m">x ∈ …</span>”</td><td>Both inclusions hold, so <span class="m">A = B</span>.</td></tr>
<tr><td><span class="m">A = ∅</span></td><td>Suppose <span class="m">x ∈ A</span>.</td><td>Contradiction, so <span class="m">A</span> has no elements.</td></tr>
<tr><td><span class="m">∀n ≥ n₀ P(n)</span></td><td>Basis: <span class="m">P(n₀)</span>. Step: let <span class="m">k ≥ n₀</span>, assume <span class="m">P(k)</span> (IH).</td><td>So <span class="m">P(k+1)</span>. By induction, <span class="m">∀n ≥ n₀ P(n)</span>.</td></tr>
<tr><td><span class="m">R</span> is an equivalence relation</td><td>Reflexive: let <span class="m">a ∈ A</span>… Symmetric: assume <span class="m">aRb</span>… Transitive: assume <span class="m">aRb ∧ bRc</span>…</td><td>R, S, T hold, so <span class="m">R</span> is an equivalence relation.</td></tr>
<tr><td><span class="m">R</span> is a partial order</td><td>Reflexive, <b>antisymmetric</b> (assume <span class="m">aRb ∧ bRa</span>, show <span class="m">a=b</span>), transitive.</td><td>So <span class="m">R</span> is a partial order. Total? Find an incomparable pair.</td></tr>
<tr><td><span class="m">f</span> injective</td><td>Suppose <span class="m">f(x₁) = f(x₂)</span>.</td><td>… so <span class="m">x₁ = x₂</span>.</td></tr>
<tr><td><span class="m">f</span> surjective</td><td>Let <span class="m">y ∈ B</span> be arbitrary. Take <span class="m">x = …</span> (check <span class="m">x ∈ A</span>!).</td><td>Then <span class="m">f(x) = y</span>.</td></tr>
<tr><td>Not injective / not surjective</td><td colspan="2">Two different inputs with the same output, or one element of the codomain that is never an output.</td></tr>
<tr><td><span class="m">ℓ = sup X</span></td><td>(i) <span class="m">ℓ</span> is an upper bound: <span class="m">∀x ∈ X, x ≤ ℓ</span>. (ii) For any upper bound <span class="m">u</span>, <span class="m">ℓ ≤ u</span> (often: suppose <span class="m">u &lt; ℓ</span>, find <span class="m">x ∈ X</span> with <span class="m">x &gt; u</span>).</td><td>So <span class="m">ℓ = sup X</span>.</td></tr>
<tr><td>Partition <span class="m">{A<sub>i</sub>}</span> of <span class="m">X</span></td><td>(1) each <span class="m">A<sub>i</sub> ≠ ∅</span>; (2) <span class="m">i ≠ j ⇒ A<sub>i</sub> ∩ A<sub>j</sub> = ∅</span>; (3) <span class="m">⋃A<sub>i</sub> = X</span>.</td><td>All three hold.</td></tr>
<tr><td><span class="m">A</span> countable</td><td>Finite: a bijection with <span class="m">ℕₙ</span>. Denumerable: a bijection with ℕ, or 1-1 maps both ways plus “by Cantor–Bernstein”. Or show A is a subset of a countable set.</td><td>So <span class="m">A</span> is countable.</td></tr>
<tr><td><span class="m">A</span> uncountable</td><td>First show A is infinite. Then show there is no bijection <span class="m">ℕ → A</span>: a diagonal or Cantor argument, or A contains an uncountable subset.</td><td>So <span class="m">A</span> is uncountable.</td></tr>
</table></div>
</div>

<div class="sheet">
<h3 style="margin-top:0">2 · Laws of logic you will use constantly</h3>
<div class="tw"><table>
<tr><td>Implication</td><td class="m">p ⇒ q ≡ ¬p ∨ q,  ¬(p ⇒ q) ≡ p ∧ ¬q</td></tr>
<tr><td>Contrapositive</td><td class="m">p ⇒ q ≡ ¬q ⇒ ¬p  (converse q ⇒ p and inverse ¬p ⇒ ¬q are <b>not</b> equivalent to it)</td></tr>
<tr><td>De Morgan</td><td class="m">¬(p ∧ q) ≡ ¬p ∨ ¬q,  ¬(p ∨ q) ≡ ¬p ∧ ¬q</td></tr>
<tr><td>Distributive</td><td class="m">p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r),  p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)</td></tr>
<tr><td>Exportation</td><td class="m">(p ∧ q) ⇒ r ≡ p ⇒ (q ⇒ r)</td></tr>
<tr><td>Biconditional</td><td class="m">p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p)</td></tr>
<tr><td>Not associative</td><td class="m">(p ⇒ q) ⇒ r ≢ p ⇒ (q ⇒ r)  (p = F, r = F)</td></tr>
<tr><td>Quantifier negation</td><td class="m">¬∀x P ≡ ∃x ¬P,  ¬∃x P ≡ ∀x ¬P,  ¬(∀x ∈ A P) ≡ ∃x ∈ A ¬P</td></tr>
<tr><td>Restricted quantifiers</td><td class="m">∀x ∈ A P(x) ≡ ∀x (x ∈ A ⇒ P(x)),  ∃x ∈ A P(x) ≡ ∃x (x ∈ A ∧ P(x))</td></tr>
<tr><td>Order matters</td><td class="m">∀x ∃y ≢ ∃y ∀x;  ∀∀ and ∃∃ commute</td></tr>
<tr><td>Unique existence</td><td class="m">∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) ⇒ y = x))</td></tr>
<tr><td>Distribution facts</td><td class="m">∀x (P ∧ Q) ≡ ∀x P ∧ ∀x Q;  ∃x (P ∨ Q) ≡ ∃x P ∨ ∃x Q;<br>but ∃x(P ∧ Q) ⇒ ∃xP ∧ ∃xQ and ∀xP ∨ ∀xQ ⇒ ∀x(P ∨ Q) are one-way only</td></tr>
</table></div>
</div>

<div class="sheet">
<h3 style="margin-top:0">3 · Rules of inference (name them in formal derivations)</h3>
<div class="tw"><table>
<tr><th>Rule</th><th>From</th><th>Infer</th></tr>
<tr><td>Modus ponens (MP)</td><td class="m">p, p ⇒ q</td><td class="m">q</td></tr>
<tr><td>Modus tollens (MT)</td><td class="m">¬q, p ⇒ q</td><td class="m">¬p</td></tr>
<tr><td>Adjunction (conjunction)</td><td class="m">p, q</td><td class="m">p ∧ q</td></tr>
<tr><td>Conjunction elimination</td><td class="m">p ∧ q</td><td class="m">p (or q)</td></tr>
<tr><td>Disjunction introduction</td><td class="m">p</td><td class="m">p ∨ q</td></tr>
<tr><td>Hypothetical syllogism</td><td class="m">p ⇒ q, q ⇒ r</td><td class="m">p ⇒ r</td></tr>
<tr><td>Disjunctive syllogism</td><td class="m">p ∨ q, ¬p</td><td class="m">q</td></tr>
<tr><td>Resolution</td><td class="m">p ∨ q, ¬p ∨ r</td><td class="m">q ∨ r</td></tr>
<tr><td>Universal instantiation (UI)</td><td class="m">∀x P(x)</td><td class="m">P(c), any c</td></tr>
<tr><td>Universal generalisation (UG)</td><td class="m">P(c), c arbitrary</td><td class="m">∀x P(x)</td></tr>
<tr><td>Existential instantiation (EI)</td><td class="m">∃x P(x)</td><td class="m">P(c), c a <b>new</b> name</td></tr>
<tr><td>Existential generalisation (EG)</td><td class="m">P(c)</td><td class="m">∃x P(x)</td></tr>
<tr><td>DPI (direct proof of implication)</td><td colspan="2">To get <span class="m">p ⇒ q</span>: add <span class="m">p</span> as a premise and derive <span class="m">q</span>.</td></tr>
<tr><td>Contradiction rule</td><td colspan="2">To get <span class="m">q</span>: add <span class="m">¬q</span> as a premise and derive <span class="m">C ∧ ¬C</span>.</td></tr>
</table></div>
<p class="tip small">Do EI <b>before</b> UI, so the constant from EI is new. Two separate ∃ statements need two different names (<span class="m">c</span> and <span class="m">d</span>).</p>
</div>

<div class="sheet">
<h3 style="margin-top:0">4 · Definitions to write out in full</h3>
<ul>
<li><b>Even/odd:</b> <span class="m">n</span> even ⇔ <span class="m">∃k ∈ ℤ, n = 2k</span>; odd ⇔ <span class="m">∃k ∈ ℤ, n = 2k + 1</span>.</li>
<li><b>Divides:</b> <span class="m">a ∣ b ⇔ ∃c ∈ ℤ, b = ac</span>.</li>
<li><b>Prime:</b> <span class="m">n ∈ ℕ</span> with exactly two positive divisors, 1 and <span class="m">n</span>.</li>
<li><b>gcd:</b> <span class="m">d = gcd(a,b)</span> ⇔ (i) <span class="m">d ∣ a ∧ d ∣ b</span>; (ii) <span class="m">d₁ ∣ a ∧ d₁ ∣ b ⇒ d₁ ∣ d</span>; (iii) <span class="m">d &gt; 0</span>.</li>
<li><b>Rational:</b> <span class="m">x = a/b</span> with <span class="m">a, b ∈ ℤ, b ≠ 0</span>, and we may take <span class="m">gcd(a,b) = 1</span>.</li>
<li><b>Power set:</b> <span class="m">X ∈ 𝒫(A) ⇔ X ⊆ A</span>. <b>Product:</b> <span class="m">(x,y) ∈ A × B ⇔ x ∈ A ∧ y ∈ B</span>.</li>
<li><b>Symmetric difference:</b> <span class="m">A Δ B = (A ∖ B) ∪ (B ∖ A)</span>.</li>
<li><b>Relation properties:</b> reflexive <span class="m">∀a, aRa</span>; irreflexive <span class="m">∀a, ¬aRa</span>; symmetric <span class="m">aRb ⇒ bRa</span>; asymmetric <span class="m">aRb ⇒ ¬bRa</span>; antisymmetric <span class="m">aRb ∧ bRa ⇒ a = b</span>; transitive <span class="m">aRb ∧ bRc ⇒ aRc</span>.</li>
<li><b>Composition:</b> <span class="m">S ∘ R = {(a,c) : ∃b, aRb ∧ bSc}</span> (first R, then S). <b>Inverse:</b> <span class="m">R⁻¹ = {(b,a) : (a,b) ∈ R}</span>.</li>
<li><b>Function</b> <span class="m">f : A → B</span>: every <span class="m">a ∈ A</span> has <b>exactly one</b> <span class="m">b</span> with <span class="m">(a,b) ∈ f</span>.</li>
<li><b>Image / preimage:</b> <span class="m">f(S) = {f(x) : x ∈ S}</span>, <span class="m">f⁻¹(T) = {x ∈ A : f(x) ∈ T}</span>.</li>
</ul>
</div>

<div class="sheet">
<h3 style="margin-top:0">5 · Mistakes that cost points</h3>
<ul>
<li><b>Proving the converse</b> instead of the statement. Before writing, underline what you assume and what you must show.</li>
<li><b>Same letter for two witnesses:</b> if <span class="m">m, n</span> are odd, write <span class="m">m = 2k+1, n = 2ℓ+1</span>, never <span class="m">m = n = 2k+1</span>.</li>
<li><b>“Proof” by example</b> of a ∀ statement. Examples only disprove ∀ or prove ∃.</li>
<li><b>Induction:</b> missing the basis; assuming <span class="m">P(k)</span> “for all k”; applying the IH to objects outside its range (WrapUp 1: max(x−1, y−1) with x = 1).</li>
<li><b>Cancelling</b> without checking the factor is nonzero (ad = bc with d = 0 breaks transitivity).</li>
<li><b>Surjectivity:</b> the preimage you pick must lie in the domain (x = 4/3 ∉ ℤ).</li>
<li><b>Venn diagrams</b> are scratch work only. A set proof needs element-chasing or algebra of sets.</li>
<li><b>Prove or disprove:</b> say which, then do it. A false claim needs a <b>concrete</b> counterexample with the check written out.</li>
<li><b>Stuck induction step on an inequality?</b> Prove a stronger statement (induction loading): <span class="m">Σ1/k² ≤ 2 − 1/n</span>.</li>
</ul>
</div>`;
