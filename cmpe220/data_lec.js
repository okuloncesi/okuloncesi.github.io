// Worked examples from Birkan Yılmaz's lectures (weeks 2–3, 4, 6–7), written in his boxed formats.
(function(){
const L = (id, t) => { const p=t.split(':').map(Number); const s=p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1]; return `<a href="https://youtu.be/${id}?t=${s}" target="_blank" rel="noopener">watch at ${t}</a>`; };
const W = (x) => `<p class="small muted">Want: ${x}</p>`;
DATA.problems.push(
{id:'l01', topic:'tech', src:'Lecture wk2a', diff:1, title:'x² − 6x + 5 even ⇒ x odd',
 statement:`Let <span class="m">x ∈ ℤ</span>. Prove: if <span class="m">x² − 6x + 5</span> is even, then <span class="m">x</span> is odd.`,
 tech:['contra'], why:`The hypothesis “even” is hard to unpack backwards; assuming x is even and computing forward is easy.`,
 hints:[`Write the first sentence exactly: “Proof (by contrapositive). Suppose x is not odd, i.e. x is even.”`,`x = 2k for some k ∈ ℤ. Expand and write the result as 2h + 1.`],
 proof:`<div class="proof np"><p><b>Proof (by contrapositive).</b> Suppose x is not odd, i.e. x is even.</p>${W('x² − 6x + 5 is not even.')}<p>Then ∃k ∈ ℤ such that x = 2k. So <span class="m">x² − 6x + 5 = 4k² − 12k + 5 = 2(2k² − 6k + 2) + 1</span>.</p><p>Since k ∈ ℤ, h := 2k² − 6k + 2 ∈ ℤ, so x² − 6x + 5 = 2h + 1 is odd.</p><p>Therefore x² − 6x + 5 is not even.</p></div><p class="small">${L('MQaWHeJRbXM','48:29')}</p>`,
 rubric:[`First sentence: “Proof (by contrapositive). Suppose x is even.”`,`Introduces k with “∃k ∈ ℤ”`,`Algebra reaches the form 2h + 1 and says h ∈ ℤ`,`Last sentence states ¬P: “x² − 6x + 5 is not even”`]},
{id:'l02', topic:'tech', src:'Lecture wk2a', diff:2, title:'Triangle inequality',
 statement:`Prove that for all <span class="m">x, y ∈ ℝ</span>, <span class="m">|x + y| ≤ |x| + |y|</span>.`,
 tech:['cases'], why:`|·| is defined piecewise, so split on the signs of x and y.`,
 hints:[`Four cases on the signs of x and y. Two of them are immediate.`,`In the mixed case x ≥ 0, y &lt; 0 the sign of x + y is unknown: split again into x + y ≥ 0 and x + y &lt; 0.`],
 proof:`<div class="proof np"><p><b>Proof by cases</b> on the signs of x and y. Let x, y ∈ ℝ be arbitrary.</p>
<p><b>Case 1: x ≥ 0, y ≥ 0.</b> Then x + y ≥ 0, so |x + y| = x + y = |x| + |y|.</p>
<p><b>Case 2: x ≥ 0, y &lt; 0.</b> Then |x| = x, |y| = −y. (2a) If x + y ≥ 0: |x + y| = x + y &lt; x − y = |x| + |y|, since y &lt; −y. (2b) If x + y &lt; 0: |x + y| = −x − y ≤ x − y = |x| + |y|, since −x ≤ x.</p>
<p><b>Case 3: x &lt; 0, y ≥ 0.</b> Symmetric to Case 2 with the roles of x and y exchanged.</p>
<p><b>Case 4: x &lt; 0, y &lt; 0.</b> Then x + y &lt; 0, so |x + y| = −x − y = |x| + |y|.</p>
<p>The cases cover all of ℝ × ℝ, so |x + y| ≤ |x| + |y| for all x, y.</p></div><p class="small">${L('MQaWHeJRbXM','34:37')}</p>`,
 rubric:[`Says “proof by cases” and the cases are exhaustive`,`Uses |x| = x for x ≥ 0 and |x| = −x for x &lt; 0 explicitly`,`Handles the mixed case with sub-cases on the sign of x + y`,`Concluding sentence`]},
{id:'l03', topic:'tech', src:'Lecture wk2a (exercise)', diff:1, title:'1 + (−1)ⁿ(2n − 1) is a multiple of 4',
 statement:`Prove that for every <span class="m">n ∈ ℕ</span>, <span class="m">1 + (−1)ⁿ(2n − 1)</span> is a multiple of 4.`,
 tech:['cases'], why:`(−1)ⁿ depends only on the parity of n: this was his hint.`,
 hints:[`Case n even, case n odd. What is (−1)ⁿ in each?`,`Write n = 2k or n = 2k + 1 and exhibit c ∈ ℤ with the expression = 4c.`],
 proof:`<div class="proof np"><p><b>Proof by cases.</b> Let n ∈ ℕ be arbitrary. Want: ∃c ∈ ℤ with 1 + (−1)ⁿ(2n − 1) = 4c.</p><p><b>Case 1: n even,</b> n = 2k (k ∈ ℤ). Then (−1)ⁿ = 1 and the expression is 1 + 2n − 1 = 2n = 4k.</p><p><b>Case 2: n odd,</b> n = 2k + 1. Then (−1)ⁿ = −1 and the expression is 1 − (2n − 1) = 2 − 2n = 2 − 4k − 2 = 4(−k).</p><p>Every n is even or odd, so in all cases the expression is 4c with c ∈ ℤ, i.e. a multiple of 4.</p></div>`,
 rubric:[`Names proof by cases; cases even/odd are exhaustive`,`Uses the definitions n = 2k, n = 2k + 1`,`Exhibits the integer c in each case`,`Conclusion`]},
{id:'l04', topic:'tech', src:'Lecture wk2b', diff:1, title:'n odd ⇔ n² odd',
 statement:`Let <span class="m">n ∈ ℤ</span>. Prove that <span class="m">n</span> is odd if and only if <span class="m">n²</span> is odd.`,
 tech:['iff','contra'], why:`A biconditional: two implications. The ⇐ direction is easiest by contrapositive.`,
 hints:[`Format: “(1) First we prove P ⇒ Q … (2) Second we prove Q ⇒ P …”`,`For (2), prove “n even ⇒ n² even” and say that this is the contrapositive.`],
 proof:`<div class="proof np"><p><b>Proof.</b> (1) <b>(⇒)</b> Suppose n is odd. Then ∃k ∈ ℤ with n = 2k + 1, so n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 with 2k² + 2k ∈ ℤ. Therefore n² is odd.</p><p>(2) <b>(⇐)</b> We prove “n² odd ⇒ n odd” <b>by contrapositive</b>. Suppose n is not odd, i.e. n is even: n = 2k with k ∈ ℤ. Then n² = 4k² = 2(2k²) with 2k² ∈ ℤ, so n² is even, i.e. not odd.</p><p>By (1) and (2), n is odd ⇔ n² is odd.</p></div><p class="small">${L('7hXz_I_UDO8','23:33')}</p>`,
 rubric:[`Both directions present and labelled`,`The contrapositive direction is announced as such, with the right ¬Q and ¬P`,`Definitions written with ∃k ∈ ℤ`,`Closing “By (1) and (2)…”`]},
{id:'l05', topic:'tech', src:'Lecture wk2b', diff:2, title:'a² − 2a + 7 even ⇒ a odd (by contradiction)',
 statement:`Let <span class="m">a ∈ ℤ</span>. Using <b>proof by contradiction</b>, prove: if <span class="m">a² − 2a + 7</span> is even, then <span class="m">a</span> is odd.`,
 tech:['contradiction'], why:`The question asks for contradiction; for P ⇒ Q you assume P ∧ ¬Q.`,
 hints:[`First sentence: “Assume for a contradiction that a² − 2a + 7 is even and a is even.”`,`With a = 2k the expression is 2(2k² − 2k + 3) + 1.`],
 proof:`<div class="proof np"><p><b>Proof.</b> Assume for a contradiction that a² − 2a + 7 is even and a is even (P ∧ ¬Q).</p><p>Since a is even, ∃k ∈ ℤ with a = 2k. Then a² − 2a + 7 = 4k² − 4k + 7 = 2(2k² − 2k + 3) + 1, and 2k² − 2k + 3 ∈ ℤ, so a² − 2a + 7 is odd.</p><p>This contradicts the assumption that a² − 2a + 7 is even. Hence, if a² − 2a + 7 is even, then a is odd.</p></div><p class="small">${L('7hXz_I_UDO8','11:20')}</p>`,
 rubric:[`First sentence assumes P ∧ ¬Q “for a contradiction”`,`Derives the contradictory statement (odd and even)`,`Names the contradiction explicitly`,`Concludes P ⇒ Q`]},
{id:'l06', topic:'ind', src:'Lecture wk3a', diff:1, title:'Sum of squares',
 statement:`Prove that for all <span class="m">n ∈ ℕ⁺</span>, <span class="m">1² + 2² + … + n² = n(n+1)(2n+1)/6</span>.`,
 tech:['induction'], why:`A formula indexed by n whose (n+1) case is the n case plus one term.`,
 hints:[`Basis n = 1: compute both sides.`,`Start from the IH and add (n+1)² to both sides; factor out (n+1).`,`2n² + 7n + 6 = (n+2)(2n+3).`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction.</b> Let P(n): 1² + … + n² = n(n+1)(2n+1)/6.</p><p><b>Basis step (n = 1):</b> LHS = 1, RHS = 1·2·3/6 = 1. So P(1) holds.</p><p><b>Inductive step:</b> Let n ≥ 1 and assume P(n). Want: 1² + … + (n+1)² = (n+1)(n+2)(2n+3)/6. Adding (n+1)² to both sides of P(n):</p><p class="m">1² + … + n² + (n+1)² = n(n+1)(2n+1)/6 + (n+1)² = (n+1)[n(2n+1) + 6(n+1)]/6 = (n+1)(2n² + 7n + 6)/6 = (n+1)(n+2)(2n+3)/6,</p><p>which is P(n+1). By the principle of mathematical induction, P(n) holds for all n ≥ 1.</p></div><p class="small">${L('jaXQGIWy1VE','2:07')}</p>`,
 rubric:[`Basis step written out (both sides)`,`IH stated; “Want: P(n+1)” stated`,`Starts from the assumption, not from the goal`,`Correct algebra; conclusion citing induction`]},
{id:'l07', topic:'ind', src:'Lecture wk3a', diff:2, title:'Bernoulli: (1+x)ⁿ ≥ 1 + nx',
 statement:`Let <span class="m">x &gt; 0</span>. Prove that for all <span class="m">n ∈ ℕ⁺</span>, <span class="m">(1 + x)ⁿ ≥ 1 + nx</span>.`,
 tech:['induction'], why:`Multiply the IH by (1 + x) to reach exponent n + 1.`,
 hints:[`Basis n = 1 is an equality.`,`Multiply both sides of the IH by 1 + x and say why the inequality keeps its direction.`,`(1 + nx)(1 + x) = 1 + (n+1)x + nx² and nx² ≥ 0.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction.</b> Let P(n): (1 + x)ⁿ ≥ 1 + nx.</p><p><b>Basis (n = 1):</b> (1 + x)¹ = 1 + x ≥ 1 + 1·x. ✓</p><p><b>Inductive step:</b> Assume P(n). Want: (1 + x)ⁿ⁺¹ ≥ 1 + (n+1)x. Since x &gt; 0, 1 + x &gt; 0, so multiplying the IH by 1 + x keeps the direction: (1 + x)ⁿ⁺¹ ≥ (1 + nx)(1 + x) = 1 + (n+1)x + nx². Since nx² ≥ 0, this is ≥ 1 + (n+1)x. So P(n+1) holds.</p><p>By induction, P(n) holds for all n ≥ 1.</p></div><p class="small">${L('jaXQGIWy1VE','9:05')}</p>`,
 rubric:[`Basis step`,`Justifies multiplying by a positive number`,`Drops nx² ≥ 0 with a reason`,`Conclusion`]},
{id:'l09', topic:'rel', src:'Lecture wk4b', diff:2, title:'xRy ⇔ x̄ = ȳ',
 statement:`Let R be an equivalence relation on A and <span class="m">x̄ = {z ∈ A : zRx}</span>. Prove that <span class="m">xRy ⇔ x̄ = ȳ</span>, and that if x is not related to y then <span class="m">x̄ ∩ ȳ = ∅</span>.`,
 tech:['iff','contradiction'], why:`An iff with a set equality inside, then a disjointness claim, done most cleanly by contradiction.`,
 hints:[`(⇒) z ∈ x̄ gives zRx; with xRy and transitivity, zRy. The other inclusion uses symmetry.`,`(⇐) x ∈ x̄ by reflexivity, and x̄ = ȳ.`,`For disjointness: assume z ∈ x̄ ∩ ȳ, get zRx and zRy, and deduce xRy.`],
 proof:`<div class="proof np"><p><b>Proof.</b> (1) <b>(⇒)</b> Assume xRy. (⊆) Let z ∈ x̄. Then zRx and xRy, so zRy by transitivity, i.e. z ∈ ȳ. (⊇) Let z ∈ ȳ, so zRy. By symmetry yRx, and by transitivity zRx, so z ∈ x̄. Hence x̄ = ȳ.</p><p>(2) <b>(⇐)</b> Assume x̄ = ȳ. By reflexivity xRx, so x ∈ x̄ = ȳ, i.e. xRy.</p><p>By (1) and (2), xRy ⇔ x̄ = ȳ.</p><p><b>Disjointness.</b> Suppose x is not related to y, and assume for a contradiction that x̄ ∩ ȳ ≠ ∅, say z ∈ x̄ ∩ ȳ. Then zRx and zRy. By symmetry xRz, and by transitivity xRy, a contradiction. Hence x̄ ∩ ȳ = ∅.</p></div><p class="small">${L('g3R4idzIfZY','12:00')} · ${L('g3R4idzIfZY','19:13')}</p>`,
 rubric:[`Uses all three properties where needed (R, S, T)`,`Set equality via two inclusions`,`(⇐) uses x ∈ x̄ by reflexivity`,`Disjointness by contradiction with a named element z`]}
);
DATA.pd.push(
 {topic:'tech', src:'Lecture wk2b', s:`For all <span class="m">x, y ∈ ℝ</span>: if <span class="m">x &lt; y</span>, then <span class="m">x² &lt; y²</span>.`, a:false, why:`<p>Counterexample: x = −2, y = 1. Then x &lt; y, but x² = 4 is not less than 1 = y².</p>`},
 {topic:'tech', src:'Lecture wk2b', s:`For all <span class="m">x, y &gt; 0</span> with <span class="m">x ≠ y</span>: <span class="m">x/y + y/x &gt; 2</span>.`, a:true, why:`<p><b>Proof.</b> Assume for a contradiction x, y &gt; 0, x ≠ y and x/y + y/x ≤ 2. Multiply by xy &gt; 0 (direction kept): x² + y² ≤ 2xy, i.e. (x − y)² ≤ 0, so x = y. This contradicts x ≠ y.</p>`},
 {topic:'card', src:'Lecture wk7a', s:`<span class="m">𝒫(ℕ)</span> is countable.`, a:false, why:`<p>By Cantor's theorem |ℕ| &lt; |𝒫(ℕ)|, so there is no bijection ℕ → 𝒫(ℕ). 𝒫(ℕ) is infinite (it contains every {n}), so it is uncountable.</p>`},
 {topic:'card', src:'Lecture wk7a', s:`The set of even natural numbers has the same cardinality as <span class="m">ℕ</span>.`, a:true, why:`<p>f : ℕ → E, f(n) = 2n, is a bijection: 2n₁ = 2n₂ ⇒ n₁ = n₂, and every e ∈ E is 2k = f(k).</p>`},
 {topic:'rel', src:'Lecture wk4a', s:`If a relation is not reflexive, then it is irreflexive.`, a:false, why:`<p>On A = {a, b}, R = {(a,a)} is not reflexive ((b,b) ∉ R) and not irreflexive ((a,a) ∈ R).</p>`},
 {topic:'fun', src:'Lecture wk6a', s:`For every function f and all <span class="m">A₁, A₂</span>: <span class="m">f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂]</span>.`, a:false, why:`<p>f(x) = x² on ℝ, A₁ = {1}, A₂ = {−1}: f[A₁ ∩ A₂] = f[∅] = ∅, but f[A₁] ∩ f[A₂] = {1}. Only ⊆ holds in general; equality for all A₁, A₂ holds exactly when f is 1-1.</p>`},
 {topic:'fun', src:'Lecture wk6a', s:`For every function f and all <span class="m">B₁, B₂ ⊆ Y</span>: <span class="m">f←(B₁ ∩ B₂) = f←(B₁) ∩ f←(B₂)</span>.`, a:true, why:`<p>x ∈ f←(B₁ ∩ B₂) ⇔ f(x) ∈ B₁ ∧ f(x) ∈ B₂ ⇔ x ∈ f←(B₁) ∩ f←(B₂). Preimages need no injectivity.</p>`}
);
DATA.cards.push(
 ['card', 'Cantor–Bernstein theorem', 'If there are 1-1 maps X → Y and Y → X, then there is a bijection X → Y. Cite it by name; the proof is not required.'],
 ['card', 'Cantor’s diagonal set', 'For φ : A → 𝒫(A): B = {x ∈ A : x ∉ φ(x)}. If φ(x₀) = B, both x₀ ∈ B and x₀ ∉ B give contradictions.'],
 ['card', 'Recipe: show X uncountable', '(i) Show X is infinite; (ii) show there is no bijection ℕ → X.'],
 ['card', 'Finite set (his definition)', 'A = ∅, or A ≈ ℕₙ = {1,…,n} for some n ≥ 1; then card(A) = n.'],
 ['rel', 'Relation (definition he asks on every exam)', 'A relation from A into B is any subset R ⊆ A × B; xRy means (x,y) ∈ R. A relation on A is R ⊆ A × A.'],
 ['rel', 'Partition of A', 'A family of subsets that are nonempty, pairwise disjoint, and whose union is A.'],
 ['tech', 'First sentence of a contrapositive proof', '“Proof (by contrapositive). Suppose ¬Q.” Write the name of the technique!'],
 ['tech', 'First sentence of a contradiction proof of P ⇒ Q', '“Assume for a contradiction P and ¬Q.”'],
 ['fun', 'Invertible (definition)', 'f : X → Y is invertible if ∃g : Y → X with g(f(x)) = x ∀x ∈ X and f(g(y)) = y ∀y ∈ Y. Invertible ⇔ bijective.']
);
})();
