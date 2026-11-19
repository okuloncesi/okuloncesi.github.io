// Block B: induction, sets, cardinality.
/* ===================== INDUCTION ===================== */
DATA.problems.push(
{id:'b01', topic:'ind', src:'PS Logic 5.1a', diff:1, title:'Divisibility by induction',
 statement:`Prove by induction that for all <span class="m">n ≥ 1</span>: <span class="m">5 ∣ 7<sup>n</sup> − 2<sup>n</sup></span>.`,
 tech:['induction'], why:`A statement indexed by n, where the (k+1) case can be rewritten in terms of the k case.`,
 hints:[`Basis: <span class="m">7 − 2 = 5</span>.`,
  `IH: <span class="m">7<sup>k</sup> − 2<sup>k</sup> = 5m</span> for some <span class="m">m ∈ ℤ</span>. Write <span class="m">7<sup>k+1</sup> − 2<sup>k+1</sup> = 7·7<sup>k</sup> − 2·2<sup>k</sup></span>.`,
  `Add and subtract <span class="m">7·2<sup>k</sup></span>: <span class="m">7(7<sup>k</sup> − 2<sup>k</sup>) + 5·2<sup>k</sup></span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n.</b></p><p class="small muted">Want: 5 ∣ 7ⁿ − 2ⁿ for every n ≥ 1.</p><p>Let <span class="m">P(n)</span>: <span class="m">5 ∣ 7<sup>n</sup> − 2<sup>n</sup></span>.</p>
<p><b>Basis (n = 1).</b> <span class="m">7 − 2 = 5 = 5·1</span>, so <span class="m">5 ∣ 7 − 2</span>.</p>
<p><b>Inductive hypothesis.</b> Let <span class="m">k ≥ 1</span> be arbitrary and assume <span class="m">P(k)</span>: <span class="m">7<sup>k</sup> − 2<sup>k</sup> = 5m</span> for some <span class="m">m ∈ ℤ</span>.</p>
<p><b>Inductive step.</b> <span class="m">7<sup>k+1</sup> − 2<sup>k+1</sup> = 7·7<sup>k</sup> − 7·2<sup>k</sup> + 7·2<sup>k</sup> − 2·2<sup>k</sup> = 7(7<sup>k</sup> − 2<sup>k</sup>) + 5·2<sup>k</sup> = 35m + 5·2<sup>k</sup> = 5(7m + 2<sup>k</sup>)</span>. Since <span class="m">7m + 2<sup>k</sup> ∈ ℤ</span>, <span class="m">5 ∣ 7<sup>k+1</sup> − 2<sup>k+1</sup></span>, i.e. <span class="m">P(k+1)</span>.</p>
<p><b>Conclusion.</b> By induction, <span class="m">P(n)</span> holds for all <span class="m">n ≥ 1</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis checked explicitly`,`IH stated for an arbitrary fixed k (with the witness m written out)`,`Algebra rewrites the (k+1) expression using the IH`,`Shows the cofactor is an integer and concludes`]},

{id:'b02', topic:'ind', src:'PS Logic 5.1b', diff:1, title:'Telescoping sum',
 statement:`Prove that for all <span class="m">n ≥ 1</span>: <span class="m">Σ<sub>k=1</sub><sup>n</sup> 1/(k(k+1)) = n/(n+1)</span>.`,
 tech:['induction'], why:`A closed form for a sum: the (n+1) sum is the n sum plus one term.`,
 hints:[`Basis: <span class="m">1/2 = 1/2</span>.`,`Step: <span class="m">k/(k+1) + 1/((k+1)(k+2))</span>; use the common denominator <span class="m">(k+1)(k+2)</span>.`,`The numerator is <span class="m">k² + 2k + 1 = (k+1)²</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n.</b></p><p class="small muted">Want: Σ_{k=1}^{n} 1/(k(k+1)) = n/(n+1) for every n ≥ 1.</p><p><b>Basis (n = 1).</b> LHS <span class="m">= 1/(1·2) = 1/2</span>, RHS <span class="m">= 1/2</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 1</span> and assume <span class="m">Σ<sub>j=1</sub><sup>k</sup> 1/(j(j+1)) = k/(k+1)</span>.</p>
<p>Starting from the assumption: <span class="m">Σ<sub>j=1</sub><sup>k+1</sup> 1/(j(j+1)) = k/(k+1) + 1/((k+1)(k+2)) = (k(k+2) + 1)/((k+1)(k+2)) = (k+1)²/((k+1)(k+2)) = (k+1)/(k+2)</span>, which is the formula for <span class="m">n = k+1</span>.</p>
<p><b>Conclusion.</b> By induction the identity holds for all <span class="m">n ≥ 1</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis`,`IH used to replace the first k terms`,`Correct algebra to (k+1)/(k+2)`,`Conclusion sentence`]},

{id:'b03', topic:'ind', src:'PS Logic 5.1c', diff:1, title:'Sum of k·k!',
 statement:`Prove that for all <span class="m">n ≥ 1</span>: <span class="m">Σ<sub>k=1</sub><sup>n</sup> k·k! = (n+1)! − 1</span>.`,
 tech:['induction'], why:`Sum identity in n.`,
 hints:[`Basis: <span class="m">1·1! = 1 = 2! − 1</span>.`,`Step: <span class="m">(k+1)! − 1 + (k+1)(k+1)!</span>. Factor out <span class="m">(k+1)!</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n.</b></p><p class="small muted">Want: Σ_{k=1}^{n} k·k! = (n+1)! − 1 for every n ≥ 1.</p><p><b>Basis.</b> <span class="m">1·1! = 1 = 2! − 1</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 1</span> and assume <span class="m">Σ<sub>j=1</sub><sup>k</sup> j·j! = (k+1)! − 1</span>.</p>
<p>Starting from the assumption: <span class="m">Σ<sub>j=1</sub><sup>k+1</sup> j·j! = (k+1)! − 1 + (k+1)(k+1)! = (k+1)!(1 + k + 1) − 1 = (k+2)(k+1)! − 1 = (k+2)! − 1</span>.</p>
<p><b>Conclusion.</b> By induction, true for all <span class="m">n ≥ 1</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis`,`IH`,`Factoring (k+1)! correctly`,`Conclusion`]},

{id:'b04', topic:'ind', src:'PS Logic 5.2a', diff:2, title:'2ⁿ > n² for n ≥ 5',
 statement:`Prove that <span class="m">2<sup>n</sup> &gt; n²</span> for all integers <span class="m">n ≥ 5</span>. Why can the basis not be <span class="m">n = 2, 3</span> or <span class="m">4</span>?`,
 tech:['induction'], why:`Inequality indexed by n, starting at n₀ = 5.`,
 hints:[`Basis: <span class="m">32 &gt; 25</span>.`,`Step: <span class="m">2<sup>k+1</sup> = 2·2<sup>k</sup> &gt; 2k²</span>. It remains to show <span class="m">2k² ≥ (k+1)²</span>.`,`<span class="m">2k² − (k+1)² = k² − 2k − 1 = (k−1)² − 2 ≥ 0</span> when <span class="m">k ≥ 3</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n, starting at n = 5.</b></p><p class="small muted">Want: 2ⁿ > n² for all n ≥ 5.</p><p><b>Basis (n = 5).</b> <span class="m">2⁵ = 32 &gt; 25 = 5²</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 5</span> and assume <span class="m">2<sup>k</sup> &gt; k²</span>.</p>
<p>Starting from the assumption: <span class="m">2<sup>k+1</sup> = 2·2<sup>k</sup> &gt; 2k²</span> by the IH. Also <span class="m">2k² − (k+1)² = k² − 2k − 1 = (k − 1)² − 2 ≥ 16 − 2 &gt; 0</span> since <span class="m">k ≥ 5</span>. Hence <span class="m">2<sup>k+1</sup> &gt; 2k² &gt; (k+1)²</span>.</p>
<p><b>Conclusion.</b> By induction, <span class="m">2<sup>n</sup> &gt; n²</span> for all <span class="m">n ≥ 5</span>.</p>
<p>The basis cannot start lower because the statement is false there: <span class="m">2² = 4 = 2²</span>, <span class="m">2³ = 8 &lt; 9</span>, <span class="m">2⁴ = 16 = 4²</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis at n = 5`,`IH for arbitrary k ≥ 5`,`Auxiliary inequality 2k² ≥ (k+1)² proved, using k ≥ 5 (or ≥ 3)`,`Chain of inequalities and conclusion`,`Explains failure at 2, 3, 4`]},

{id:'b05', topic:'ind', src:'PS Logic 5.2b', diff:2, title:'Σ 1/√k ≥ √n',
 statement:`Prove that for all <span class="m">n ≥ 1</span>: <span class="m">Σ<sub>k=1</sub><sup>n</sup> 1/√k ≥ √n</span>.`,
 tech:['induction'], why:`Inequality in n; the step reduces to a one-line inequality.`,
 hints:[`IH gives sum up to k+1 ≥ <span class="m">√k + 1/√(k+1)</span>.`,`Show <span class="m">√k + 1/√(k+1) ≥ √(k+1)</span>: multiply by <span class="m">√(k+1) &gt; 0</span>.`,`It becomes <span class="m">√(k(k+1)) + 1 ≥ k + 1</span>, i.e. <span class="m">√(k(k+1)) ≥ k</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n.</b></p><p class="small muted">Want: Σ 1/√k ≥ √n for all n ≥ 1.</p><p><b>Basis.</b> <span class="m">1/√1 = 1 ≥ 1 = √1</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 1</span> and assume <span class="m">Σ<sub>j=1</sub><sup>k</sup> 1/√j ≥ √k</span>.</p>
<p>Starting from the assumption: <span class="m">Σ<sub>j=1</sub><sup>k+1</sup> 1/√j ≥ √k + 1/√(k+1)</span>. It suffices to show <span class="m">√k + 1/√(k+1) ≥ √(k+1)</span>. Multiplying by <span class="m">√(k+1) &gt; 0</span>, this is equivalent to <span class="m">√(k(k+1)) + 1 ≥ k + 1</span>, i.e. <span class="m">√(k(k+1)) ≥ k</span>, which holds because <span class="m">k(k+1) ≥ k²</span> and √ is increasing.</p>
<p><b>Conclusion.</b> By induction the inequality holds for all <span class="m">n ≥ 1</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis`,`IH used to bound the first k terms`,`Reduction to √(k(k+1)) ≥ k with a valid (positive) multiplication`,`Conclusion`]},

{id:'b06', topic:'ind', src:'PS Logic 5.3', diff:2, title:'(x − y) divides xⁿ − yⁿ',
 statement:`Prove that for all <span class="m">n ≥ 1</span> and all <span class="m">x, y ∈ ℤ</span>: <span class="m">(x − y) ∣ (x<sup>n</sup> − y<sup>n</sup>)</span>.`,
 tech:['induction'], why:`Induct on n with x, y arbitrary but fixed.`,
 hints:[`Fix arbitrary <span class="m">x, y</span>; induct on n.`,`Write <span class="m">x<sup>k+1</sup> − y<sup>k+1</sup> = x(x<sup>k</sup> − y<sup>k</sup>) + y<sup>k</sup>(x − y)</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n.</b></p><p class="small muted">Want: (x − y) ∣ xⁿ − yⁿ for all n ≥ 1.</p><p>Fix arbitrary <span class="m">x, y ∈ ℤ</span> and induct on <span class="m">n</span>.</p>
<p><b>Basis.</b> <span class="m">x − y = (x − y)·1</span>.</p>
<p><b>Inductive step.</b> Assume (inductive hypothesis) <span class="m">x<sup>k</sup> − y<sup>k</sup> = m(x − y)</span> for some <span class="m">m ∈ ℤ</span>.</p>
<p>Starting from the assumption: <span class="m">x<sup>k+1</sup> − y<sup>k+1</sup> = x·x<sup>k</sup> − x·y<sup>k</sup> + x·y<sup>k</sup> − y·y<sup>k</sup> = x(x<sup>k</sup> − y<sup>k</sup>) + y<sup>k</sup>(x − y) = (x − y)(xm + y<sup>k</sup>)</span>, and <span class="m">xm + y<sup>k</sup> ∈ ℤ</span>.</p>
<p><b>Conclusion.</b> By induction, <span class="m">(x − y) ∣ x<sup>n</sup> − y<sup>n</sup></span> for all <span class="m">n ≥ 1</span>; since x, y were arbitrary, for all integers.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`States what is fixed and what is inducted on`,`Basis`,`Add-and-subtract trick`,`Integer cofactor written out`]},

{id:'b07', topic:'ind', src:'PS Logic 5.4a', diff:2, title:'Every n ≥ 2 is a product of primes',
 statement:`Prove that every integer <span class="m">n ≥ 2</span> is a product of primes. Why is ordinary (weak) induction not enough?`,
 tech:['strong'], why:`The factors a, b of k+1 are smaller than k+1 but not equal to k, so you need the statement for all smaller numbers.`,
 hints:[`Strong IH: every <span class="m">m</span> with <span class="m">2 ≤ m ≤ k</span> is a product of primes.`,`Case 1: <span class="m">k+1</span> is prime. Case 2: <span class="m">k+1 = ab</span> with <span class="m">2 ≤ a, b ≤ k</span>.`],
 proof:`<div class="proof np"><p><b>Proof by strong mathematical induction on n (with proof by cases inside the step).</b></p><p class="small muted">Want: every n ≥ 2 is prime or a product of primes.</p><p><b>Basis.</b> 2 is prime, so it is a product of (one) prime.</p>
<p><b>Strong IH.</b> Let <span class="m">k ≥ 2</span> and assume every integer <span class="m">m</span> with <span class="m">2 ≤ m ≤ k</span> is a product of primes.</p>
<p>Starting from the assumption: Consider <span class="m">k + 1</span>. <i>Case 1:</i> <span class="m">k+1</span> is prime; then it is a product of one prime. <i>Case 2:</i> <span class="m">k+1</span> is not prime; then <span class="m">k + 1 = ab</span> with <span class="m">1 &lt; a, b &lt; k+1</span>, i.e. <span class="m">2 ≤ a, b ≤ k</span>. By the strong IH, <span class="m">a = p₁⋯p<sub>r</sub></span> and <span class="m">b = q₁⋯q<sub>s</sub></span> with all p, q prime, so <span class="m">k + 1 = p₁⋯p<sub>r</sub> q₁⋯q<sub>s</sub></span>.</p>
<p><b>Conclusion.</b> By strong induction, every <span class="m">n ≥ 2</span> is a product of primes. Weak induction only gives <span class="m">P(k)</span>, but <span class="m">a</span> and <span class="m">b</span> are generally not equal to <span class="m">k</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Strong IH stated for all 2 ≤ m ≤ k`,`Both cases (prime / composite)`,`Justifies 2 ≤ a, b ≤ k`,`Explains why weak induction fails`]},

{id:'b08', topic:'ind', src:'PS Logic 5.4b', diff:2, title:'Stamps: n = 4a + 5b',
 statement:`Prove that every integer <span class="m">n ≥ 12</span> can be written as <span class="m">n = 4a + 5b</span> with <span class="m">a, b ∈ ℤ, a, b ≥ 0</span>.`,
 tech:['strong'], why:`The step goes back by 4, so you need P(k−3), not P(k).`,
 hints:[`Four base cases: 12, 13, 14, 15.`,`For <span class="m">k ≥ 15</span>: <span class="m">k + 1 − 4 = k − 3 ≥ 12</span>.`],
 proof:`<div class="proof np"><p><b>Proof by strong mathematical induction on n.</b></p><p class="small muted">Want: n = 4a + 5b with a, b ≥ 0 for every n ≥ 12.</p><p><b>Basis.</b> <span class="m">12 = 4·3</span>, <span class="m">13 = 4·2 + 5</span>, <span class="m">14 = 4 + 2·5</span>, <span class="m">15 = 3·5</span>.</p>
<p><b>Strong IH.</b> Let <span class="m">k ≥ 15</span> and assume every <span class="m">m</span> with <span class="m">12 ≤ m ≤ k</span> is of the form <span class="m">4a + 5b</span>, <span class="m">a, b ≥ 0</span>.</p>
<p>Starting from the assumption: Since <span class="m">12 ≤ k − 3 ≤ k</span>, the IH gives <span class="m">k − 3 = 4a + 5b</span>. Then <span class="m">k + 1 = 4(a + 1) + 5b</span> with <span class="m">a + 1, b ≥ 0</span>.</p>
<p><b>Conclusion.</b> By strong induction, the claim holds for all <span class="m">n ≥ 12</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`All four base cases`,`IH range 12…k`,`Checks k − 3 ≥ 12`,`Nonnegativity of a + 1, b`]},

{id:'b09', topic:'ind', src:'WrapUp1 P3a', diff:3, title:'Induction loading: Σ 1/k² ≤ 2 − 1/n',
 statement:`Let <span class="m">S<sub>n</sub> = 1 + 1/4 + 1/9 + ⋯ + 1/n²</span>. Explain why a direct induction proof of <span class="m">S<sub>n</sub> ≤ 2</span> gets stuck, then prove the stronger <span class="m">S<sub>n</sub> ≤ 2 − 1/n</span> for all <span class="m">n ≥ 1</span>.`,
 tech:['induction'], why:`Strengthen the statement (induction loading) so the IH leaves room for the new term.`,
 hints:[`With IH <span class="m">S<sub>k</sub> ≤ 2</span> you only get <span class="m">S<sub>k+1</sub> ≤ 2 + 1/(k+1)²</span>, which overshoots 2.`,`Key comparison: <span class="m">1/(k+1)² ≤ 1/(k(k+1)) = 1/k − 1/(k+1)</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n (of the stronger statement).</b></p><p class="small muted">Want: S_n ≤ 2 − 1/n for all n ≥ 1, hence S_n ≤ 2.</p><p><b>Why it gets stuck.</b> The IH <span class="m">S<sub>k</sub> ≤ 2</span> gives only <span class="m">S<sub>k+1</sub> = S<sub>k</sub> + 1/(k+1)² ≤ 2 + 1/(k+1)²</span>, and <span class="m">2 + 1/(k+1)² ≤ 2</span> is false. The IH leaves no room for the new positive term. (This is a failure of the method, not a disproof.)</p>
<p><b>Basis.</b> <span class="m">S₁ = 1 = 2 − 1/1</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 1</span> and assume <span class="m">S<sub>k</sub> ≤ 2 − 1/k</span>.</p>
<p>Starting from the assumption: Since <span class="m">k(k+1) ≤ (k+1)²</span>, <span class="m">1/(k+1)² ≤ 1/(k(k+1)) = 1/k − 1/(k+1)</span>. Hence <span class="m">S<sub>k+1</sub> = S<sub>k</sub> + 1/(k+1)² ≤ 2 − 1/k + 1/k − 1/(k+1) = 2 − 1/(k+1)</span>.</p>
<p><b>Conclusion.</b> By induction <span class="m">S<sub>n</sub> ≤ 2 − 1/n &lt; 2</span> for all <span class="m">n ≥ 1</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Explains precisely why the direct step fails (bound overshoots)`,`Basis for the stronger claim`,`Comparison 1/(k+1)² ≤ 1/k − 1/(k+1) justified`,`Chain to 2 − 1/(k+1)`,`Deduces the original statement`],
 notes:`A failed inductive step is not a counterexample. Only a concrete n with P(n) false disproves ∀n P(n).`},

{id:'b10', topic:'ind', src:'WrapUp1 P3b', diff:3, title:'Product of odd/even fractions',
 statement:`Let <span class="m">p<sub>n</sub> = (1·3·5⋯(2n−1)) / (2·4·6⋯(2n))</span>. Prove by induction that <span class="m">p<sub>n</sub> ≤ 1/√(3n+1)</span> for all <span class="m">n ≥ 1</span>, and deduce <span class="m">p<sub>n</sub> ≤ 1/√(3n)</span>.`,
 tech:['induction'], why:`The weaker bound 1/√(3n) cannot be carried through the step; the stronger one can.`,
 hints:[`<span class="m">p<sub>k+1</sub> = p<sub>k</sub> · (2k+1)/(2k+2)</span>.`,`Need <span class="m">(2k+1)/(2k+2) · 1/√(3k+1) ≤ 1/√(3k+4)</span>. Square and cross-multiply (all positive).`,`Compare <span class="m">(2k+1)²(3k+4) = 12k³+28k²+19k+4</span> with <span class="m">(2k+2)²(3k+1) = 12k³+28k²+20k+4</span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n (of the stronger statement).</b></p><p class="small muted">Want: p_n ≤ 1/√(3n+1) for all n ≥ 1.</p><p><b>Basis.</b> <span class="m">p₁ = 1/2 = 1/√4</span>.</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 1</span> and assume <span class="m">p<sub>k</sub> ≤ 1/√(3k+1)</span>.</p>
<p>Starting from the assumption: <span class="m">p<sub>k+1</sub> = p<sub>k</sub>·(2k+1)/(2k+2) ≤ (2k+1)/((2k+2)√(3k+1))</span>. It suffices that this is <span class="m">≤ 1/√(3k+4)</span>. Both sides are positive, so square and multiply by the positive <span class="m">(2k+2)²(3k+1)(3k+4)</span>: the condition is <span class="m">(2k+1)²(3k+4) ≤ (2k+2)²(3k+1)</span>, i.e. <span class="m">12k³+28k²+19k+4 ≤ 12k³+28k²+20k+4</span>, i.e. <span class="m">0 ≤ k</span>. True. So <span class="m">p<sub>k+1</sub> ≤ 1/√(3(k+1)+1)</span>.</p>
<p><b>Conclusion.</b> By induction <span class="m">p<sub>n</sub> ≤ 1/√(3n+1)</span> for all n ≥ 1, and since <span class="m">√(3n+1) &gt; √(3n)</span>, <span class="m">p<sub>n</sub> &lt; 1/√(3n)</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Recurrence p_{k+1} = p_k(2k+1)/(2k+2)`,`Justifies squaring / multiplying (positivity)`,`Correct expansion and comparison`,`Deduces the 1/√(3n) bound`]},

{id:'b11', topic:'ind', src:'WrapUp1 P7', diff:3, title:'n+1 numbers from {1,…,2n}: one divides another',
 statement:`Prove that any set <span class="m">S</span> of <span class="m">n + 1</span> numbers chosen from <span class="m">{1, 2, …, 2n}</span> contains two distinct numbers one of which divides the other. (a) by pigeonhole; (b) show that <span class="m">n + 1</span> cannot be replaced by <span class="m">n</span>.`,
 tech:['pigeon','induction'], why:`n+1 objects (numbers) into n boxes (odd parts 1, 3, …, 2n−1).`,
 hints:[`Write each <span class="m">s = 2<sup>k</sup>m</span> with <span class="m">m</span> odd (the odd part). How many possible odd parts are there?`,`Two numbers with the same odd part: <span class="m">s = 2<sup>k</sup>m, t = 2<sup>l</sup>m, k &lt; l</span> gives <span class="m">t = s·2<sup>l−k</sup></span>.`,`For (b): try <span class="m">{n+1, …, 2n}</span>.`],
 proof:`<div class="proof np"><p><b>(a) Proof by the pigeonhole principle. (b) Proof by contradiction.</b></p><p class="small muted">Want: (a) two distinct elements of S with one dividing the other; (b) a set of n numbers with no such pair.</p><p><b>(a)</b> Every positive integer <span class="m">s</span> can be written as <span class="m">s = 2<sup>k</sup>m</span> with <span class="m">k ≥ 0</span> and <span class="m">m</span> odd. For <span class="m">s ∈ S</span>, <span class="m">m ≤ s ≤ 2n</span> and <span class="m">m</span> is odd, so <span class="m">m ∈ {1, 3, …, 2n−1}</span>: <span class="m">n</span> possible values (boxes). The <span class="m">n+1</span> elements of S are objects. By pigeonhole two distinct <span class="m">s ≠ t</span> in S have the same odd part: <span class="m">s = 2<sup>k</sup>m, t = 2<sup>l</sup>m</span>. Since <span class="m">s ≠ t</span>, <span class="m">k ≠ l</span>; WLOG <span class="m">k &lt; l</span>. Then <span class="m">t = s·2<sup>l−k</sup></span> with <span class="m">2<sup>l−k</sup> ∈ ℤ</span>, so <span class="m">s ∣ t</span>.</p>
<p><b>(b)</b> <span class="m">T = {n+1, …, 2n}</span> has <span class="m">n</span> elements. If <span class="m">u ∣ v</span> with <span class="m">u ≠ v</span> in T, then <span class="m">v = uc</span> with <span class="m">c ≥ 2</span>, so <span class="m">v ≥ 2u ≥ 2n + 2 &gt; 2n</span>, a contradiction. So n numbers are not enough.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Defines boxes (odd parts) and counts them = n`,`Applies pigeonhole with n+1 objects`,`Derives divisibility from equal odd parts`,`Counterexample set for n numbers with proof`],
 notes:`An induction proof also exists (WrapUp1 P7b): split off 2k+1, 2k+2 and, in the hard case, add k+1 to build a set the IH applies to.`},

{id:'b12', topic:'ind', src:'PS Logic 6.4', diff:2, title:'Sum of odd numbers via well-ordering',
 statement:`Prove <span class="m">Σ<sub>k=1</sub><sup>n</sup> (2k − 1) = n²</span> for all <span class="m">n ≥ 1</span> (a) by induction and (b) directly from the well-ordering principle.`,
 tech:['induction','wop'], why:`WOP version: take the least counterexample and show the one before it also fails.`,
 hints:[`Induction step: <span class="m">k² + (2k + 1) = (k+1)²</span>.`,`WOP: let <span class="m">S</span> be the set of failures; if nonempty it has a least element <span class="m">m</span>. Note <span class="m">m ≠ 1</span>, so <span class="m">m − 1 ∉ S</span>.`],
 proof:`<div class="proof np"><p><b>(a) Proof by mathematical induction. (b) Proof by contradiction using the well-ordering principle.</b></p><p class="small muted">Want: Σ_{k=1}^{n}(2k − 1) = n² for all n ≥ 1.</p><p><b>(a)</b> Basis: <span class="m">1 = 1²</span>. IH: <span class="m">Σ<sub>j=1</sub><sup>k</sup>(2j−1) = k²</span>. Step: <span class="m">Σ<sub>j=1</sub><sup>k+1</sup>(2j−1) = k² + 2k + 1 = (k+1)²</span>. By induction the identity holds for all n ≥ 1.</p>
<p><b>(b)</b> Suppose for a contradiction that <span class="m">S = {n ≥ 1 : Σ<sub>k=1</sub><sup>n</sup>(2k−1) ≠ n²}</span> is nonempty. By well-ordering it has a least element <span class="m">m</span>. <span class="m">m ≠ 1</span> since the identity holds for 1, so <span class="m">m − 1 ≥ 1</span> and <span class="m">m − 1 ∉ S</span> (minimality). Then <span class="m">Σ<sub>k=1</sub><sup>m</sup>(2k−1) = (m−1)² + 2m − 1 = m²</span>, so <span class="m">m ∉ S</span>. Contradiction. Hence <span class="m">S = ∅</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`(a) basis, IH, step`,`(b) defines the set of counterexamples and uses WOP`,`Shows m ≠ 1 and m − 1 ∉ S`,`Contradiction stated`]},

{id:'b13', topic:'ind', src:'Fall25 PS 4', diff:2, title:'Union of n disjoint finite sets',
 statement:`Let <span class="m">n ≥ 2</span>. Prove by induction that if <span class="m">A₁, …, A<sub>n</sub></span> are finite, pairwise disjoint sets, then <span class="m">A₁ ∪ ⋯ ∪ A<sub>n</sub></span> is finite and <span class="m">card(A₁ ∪ ⋯ ∪ A<sub>n</sub>) = card A₁ + ⋯ + card A<sub>n</sub></span>.`,
 tech:['induction'], why:`The two-set case (lecture 06b corollary) is the basis; the step glues one more set on.`,
 hints:[`Basis <span class="m">n = 2</span>: the lecture corollary <span class="m">|A ∪ B| = |A| + |B|</span> for disjoint finite A, B.`,`Step: let <span class="m">U = A₁ ∪ ⋯ ∪ A<sub>k</sub></span>. Show <span class="m">U ∩ A<sub>k+1</sub> = ∅</span>.`,`Then apply the two-set case to <span class="m">U</span> and <span class="m">A<sub>k+1</sub></span>.`],
 proof:`<div class="proof np"><p><b>Proof by mathematical induction on n ≥ 2.</b></p><p class="small muted">Want: A₁ ∪ ⋯ ∪ Aₙ is finite and card(A₁ ∪ ⋯ ∪ Aₙ) = Σ card Aᵢ.</p><p><b>Basis (n = 2).</b> For disjoint finite <span class="m">A₁, A₂</span>, <span class="m">A₁ ∪ A₂</span> is finite and <span class="m">|A₁ ∪ A₂| = |A₁| + |A₂|</span> (lecture: glue the bijections <span class="m">A₁ ≈ ℕ<sub>m</sub></span>, <span class="m">A₂ ≈ {m+1, …, m+n}</span>).</p>
<p><b>Inductive step.</b> Let <span class="m">k ≥ 2</span> and assume the statement for any <span class="m">k</span> pairwise disjoint finite sets.</p>
<p>Starting from the assumption: Let <span class="m">A₁, …, A<sub>k+1</sub></span> be finite and pairwise disjoint, and put <span class="m">U = A₁ ∪ ⋯ ∪ A<sub>k</sub></span>. By the IH, U is finite and <span class="m">|U| = Σ<sub>i≤k</sub>|A<sub>i</sub>|</span>. Also <span class="m">U ∩ A<sub>k+1</sub> = ∅</span>: if <span class="m">x ∈ U ∩ A<sub>k+1</sub></span>, then <span class="m">x ∈ A<sub>i</sub></span> for some <span class="m">i ≤ k</span>, so <span class="m">x ∈ A<sub>i</sub> ∩ A<sub>k+1</sub> = ∅</span>, impossible. By the basis case applied to <span class="m">U, A<sub>k+1</sub></span>: <span class="m">A₁ ∪ ⋯ ∪ A<sub>k+1</sub> = U ∪ A<sub>k+1</sub></span> is finite and <span class="m">|U ∪ A<sub>k+1</sub>| = |U| + |A<sub>k+1</sub>| = Σ<sub>i≤k+1</sub>|A<sub>i</sub>|</span>.</p>
<p><b>Conclusion.</b> By induction the statement holds for all <span class="m">n ≥ 2</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Basis n = 2 justified (cite the two-set result)`,`IH for k sets`,`Proves U ∩ A_{k+1} = ∅ from pairwise disjointness`,`Applies the two-set case and concludes`]}
);

DATA.pd.push(
{topic:'ind', src:'PS Logic 5.5', s:`Since the inductive step <span class="m">P(k) ⇒ P(k+1)</span> could not be completed by the usual algebra, the statement <span class="m">∀n P(n)</span> is false.`, a:false,
 why:`<p>A stuck step is a failure of the method only. Example: <span class="m">Σ1/k² ≤ 2</span> is true, but the direct step gets stuck; induction loading (<span class="m">≤ 2 − 1/n</span>) proves it. To disprove <span class="m">∀n P(n)</span> you need a concrete <span class="m">n</span> with <span class="m">P(n)</span> false.</p>`},
{topic:'ind', src:'PS Logic 5.2a', s:`<span class="m">2<sup>n</sup> &gt; n²</span> for every integer <span class="m">n ≥ 1</span>.`, a:false,
 why:`<p>Counterexample: <span class="m">n = 3</span>: <span class="m">8 &lt; 9</span>. (Also <span class="m">n = 2, 4</span> give equality.) The statement is true for <span class="m">n ≥ 5</span> and for <span class="m">n = 1</span>.</p>`},
{topic:'ind', src:'PS Logic 4.14a', s:`<span class="m">n² + n + 41</span> is prime for every <span class="m">n ∈ ℕ</span>.`, a:false,
 why:`<p><span class="m">n = 40</span>: <span class="m">1600 + 40 + 41 = 1681 = 41²</span>. It holds for <span class="m">n = 0, …, 39</span>, which shows many examples prove nothing.</p>`},
{topic:'ind', src:'Lecture wk06c', s:`If <span class="m">|X| = n</span> then <span class="m">|𝒫(X)| = 2<sup>n</sup></span>.`, a:true,
 why:`<p>Induction on n. Basis: <span class="m">𝒫(∅) = {∅}</span>, size <span class="m">1 = 2⁰</span>. Step: remove one element <span class="m">a</span> from X with <span class="m">|X| = k+1</span>; the subsets of X are the <span class="m">2<sup>k</sup></span> subsets of <span class="m">X ∖ {a}</span> plus each of those with <span class="m">a</span> added, two disjoint families of size <span class="m">2<sup>k</sup></span>, so <span class="m">2<sup>k+1</sup></span>.</p>`}
);

DATA.bugs.push(
{topic:'ind', src:'PS Logic 5.5', claim:`All horses have the same colour.`,
 lines:[[`Let P(n): every set of n horses consists of horses of one colour. Induct on n.`,`setup`],
  [`Basis n = 1: a single horse has one colour.`,`basis`],
  [`IH: assume P(k) for some k ≥ 1. Take a set of k + 1 horses h₁, …, h<sub>k+1</sub>.`,`IH`],
  [`Remove h₁: the remaining k horses have one colour by the IH. Remove h<sub>k+1</sub>: the remaining k horses have one colour by the IH.`,`IH applied twice`],
  [`The two groups overlap, so all k + 1 horses have the same colour.`,`gluing`],
  [`By induction, P(n) for all n.`,`conclusion`]],
 bad:[4], explain:`<p>For <span class="m">k = 1</span> the groups are <span class="m">{h₂}</span> and <span class="m">{h₁}</span>, which do <b>not</b> overlap. So <span class="m">P(1) ⇒ P(2)</span> is false and the chain breaks at the very first link. The step works only for <span class="m">k ≥ 2</span>. The claim is false.</p>`},
{topic:'ind', src:'WrapUp1 P1c', claim:`For every positive integer n, P(n): for all positive integers x, y, <span class="m">max(x, y) = n ⇒ x = y</span>.`,
 lines:[[`Basis: if max(x, y) = 1 with x, y ≥ 1, then x = y = 1.`,`basis`],
  [`IH: assume P(k) for some k ≥ 1. Let x, y be positive integers with max(x, y) = k + 1.`,`setup`],
  [`Then max(x − 1, y − 1) = k.`,`arithmetic`],
  [`By the IH applied to x − 1, y − 1: x − 1 = y − 1.`,`IH`],
  [`So x = y, proving P(k + 1).`,`algebra`]],
 bad:[3], explain:`<p>The IH talks only about <b>positive</b> integers. If <span class="m">x = 1</span>, then <span class="m">x − 1 = 0</span> is not positive, so the IH cannot be applied. Concretely <span class="m">x = 1, y = 2</span>: <span class="m">max = 2</span> but <span class="m">x ≠ y</span>. So P(2) is false and the claim is false.</p>`},
{topic:'ind', claim:`For every <span class="m">n ≥ 1</span>, <span class="m">n² + n</span> is odd.`,
 lines:[[`IH: assume <span class="m">k² + k</span> is odd for some k ≥ 1.`,`IH`],
  [`<span class="m">(k+1)² + (k+1) = (k² + k) + 2(k + 1)</span>.`,`algebra`],
  [`Odd plus even is odd, so <span class="m">(k+1)² + (k+1)</span> is odd.`,`parity`],
  [`By induction, <span class="m">n² + n</span> is odd for all n ≥ 1.`,`conclusion`]],
 bad:[3], explain:`<p>The step <span class="m">P(k) ⇒ P(k+1)</span> is correct, but <b>there is no basis</b>, so the conclusion does not follow. In fact <span class="m">P(1)</span> is false: <span class="m">1 + 1 = 2</span> is even. Indeed <span class="m">n² + n = n(n+1)</span> is always even. The claim is false.</p>`},
{topic:'ind', claim:`For all <span class="m">n ≥ 1</span>, <span class="m">1 + 2 + ⋯ + n = n(n+1)/2</span>.`,
 lines:[[`Basis: <span class="m">1 = 1·2/2</span>.`,`basis`],
  [`IH: assume <span class="m">1 + ⋯ + k = k(k+1)/2</span> for all k ∈ ℕ.`,`IH`],
  [`Then <span class="m">1 + ⋯ + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2</span>.`,`step`],
  [`By induction the formula holds for all n.`,`conclusion`]],
 bad:[1], explain:`<p>The IH assumes the formula <b>for all k</b>, which is exactly what we are trying to prove (circular). The IH must be: fix an arbitrary <span class="m">k ≥ 1</span> and assume <span class="m">P(k)</span> for that one k. With that correction the proof works and the formula is true.</p>`}
);

DATA.cards.push(
['ind',`Principle of (weak) induction`,`To prove ∀n ≥ n₀ P(n): prove P(n₀) (basis); then for arbitrary k ≥ n₀ assume P(k) (IH) and prove P(k+1).`],
['ind',`Strong induction: when do you need it?`,`When P(k+1) depends on cases other than P(k) (e.g. factors a, b &lt; k+1, or k+1−4). IH: P(n₀) ∧ … ∧ P(k). Use as many base cases as the step reaches back.`],
['ind',`Well-ordering principle`,`Every nonempty subset of ℕ has a least element. Proof pattern: let S be the set of counterexamples, take its least element m, derive a smaller counterexample or contradiction.`],
['ind',`Induction loading`,`If the step gets stuck, prove a stronger statement (e.g. Σ1/k² ≤ 2 − 1/n instead of ≤ 2) so the IH leaves room for the new term.`],
['ind',`Three classic induction mistakes`,`(1) No basis. (2) IH assumed “for all k” (circular). (3) IH applied outside its range (e.g. to 0 when it speaks of positive integers; horses k = 1).`]
);

/* ===================== SETS ===================== */
DATA.problems.push(
{id:'b20', topic:'sets', src:'Sets PS 1', diff:1, title:'Power set is monotone',
 statement:`Let A, B be sets. (a) Prove that if <span class="m">A ⊆ B</span> then <span class="m">𝒫(A) ⊆ 𝒫(B)</span>. (b) Use (a) to prove <span class="m">𝒫(A ∩ B) ⊆ 𝒫(A) ∩ 𝒫(B)</span>.`,
 tech:['direct'], why:`Element chasing: elements of a power set are subsets.`,
 hints:[`Let <span class="m">X ∈ 𝒫(A)</span>. That means <span class="m">X ⊆ A</span>.`,`Transitivity of ⊆.`,`For (b): <span class="m">A ∩ B ⊆ A</span> and <span class="m">A ∩ B ⊆ B</span>; apply (a) twice.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b></p><p class="small muted">Want: (a) 𝒫(A) ⊆ 𝒫(B); (b) 𝒫(A ∩ B) ⊆ 𝒫(A) ∩ 𝒫(B).</p><p><b>(a)</b> Assume <span class="m">A ⊆ B</span>. Let <span class="m">X ∈ 𝒫(A)</span> be arbitrary. Then <span class="m">X ⊆ A</span>, and since <span class="m">A ⊆ B</span>, transitivity of ⊆ gives <span class="m">X ⊆ B</span>, i.e. <span class="m">X ∈ 𝒫(B)</span>. Since X was arbitrary, <span class="m">𝒫(A) ⊆ 𝒫(B)</span>.</p>
<p><b>(b)</b> <span class="m">A ∩ B ⊆ A</span>, so by (a) <span class="m">𝒫(A ∩ B) ⊆ 𝒫(A)</span>. Likewise <span class="m">A ∩ B ⊆ B</span> gives <span class="m">𝒫(A ∩ B) ⊆ 𝒫(B)</span>. So every <span class="m">X ∈ 𝒫(A ∩ B)</span> lies in both, hence in <span class="m">𝒫(A) ∩ 𝒫(B)</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Uses X ∈ 𝒫(A) ⇔ X ⊆ A explicitly`,`Arbitrary element and transitivity`,`(b) applies (a) twice and combines with ∩`]},

{id:'b21', topic:'sets', src:'WrapUp1 P4a', diff:2, title:'𝒫(A ∩ B) = 𝒫(A) ∩ 𝒫(B)',
 statement:`Prove that <span class="m">𝒫(A ∩ B) = 𝒫(A) ∩ 𝒫(B)</span>.`,
 tech:['double'], why:`Set equality: prove both inclusions.`,
 hints:[`(⊆): <span class="m">X ⊆ A ∩ B</span> gives <span class="m">X ⊆ A</span> and <span class="m">X ⊆ B</span>.`,`(⊇): take <span class="m">X ⊆ A, X ⊆ B</span> and an arbitrary <span class="m">x ∈ X</span>.`],
 proof:`<div class="proof np"><p><b>Proof of a set equality: we prove (1) ⊆ and (2) ⊇.</b></p><p class="small muted">Want: 𝒫(A ∩ B) = 𝒫(A) ∩ 𝒫(B).</p><p><b>(⊆)</b> Let <span class="m">X ∈ 𝒫(A ∩ B)</span>, so <span class="m">X ⊆ A ∩ B</span>. For <span class="m">x ∈ X</span>, <span class="m">x ∈ A ∩ B</span>, so <span class="m">x ∈ A</span>; hence <span class="m">X ⊆ A</span>. Similarly <span class="m">X ⊆ B</span>. So <span class="m">X ∈ 𝒫(A) ∩ 𝒫(B)</span>.</p>
<p><b>(⊇)</b> Let <span class="m">X ∈ 𝒫(A) ∩ 𝒫(B)</span>, so <span class="m">X ⊆ A</span> and <span class="m">X ⊆ B</span>. For <span class="m">x ∈ X</span>: <span class="m">x ∈ A</span> and <span class="m">x ∈ B</span>, so <span class="m">x ∈ A ∩ B</span>. Hence <span class="m">X ⊆ A ∩ B</span>, i.e. <span class="m">X ∈ 𝒫(A ∩ B)</span>.</p>
<p>Both inclusions hold, so the sets are equal.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Both inclusions labelled`,`Correct use of the power-set definition`,`Element-level argument inside each inclusion`]},

{id:'b22', topic:'sets', src:'WrapUp1 P4b', diff:3, title:'When is 𝒫(A) ∪ 𝒫(B) = 𝒫(A ∪ B)?',
 statement:`Prove that <span class="m">𝒫(A) ∪ 𝒫(B) = 𝒫(A ∪ B) ⇔ (A ⊆ B or B ⊆ A)</span>.`,
 tech:['iff','contra','cases'], why:`A biconditional; (⇒) is easiest by contrapositive, (⇐) by cases on the “or”.`,
 hints:[`(⇒) Contrapositive: assume <span class="m">A ⊄ B</span> and <span class="m">B ⊄ A</span>. Pick <span class="m">a ∈ A ∖ B</span>, <span class="m">b ∈ B ∖ A</span>.`,`Consider <span class="m">X = {a, b}</span>.`,`(⇐) Case <span class="m">A ⊆ B</span>: then <span class="m">A ∪ B = B</span>. Note <span class="m">𝒫(A) ∪ 𝒫(B) ⊆ 𝒫(A ∪ B)</span> always holds.`],
 proof:`<div class="proof np"><p><b>Biconditional: (⇒) by contrapositive, (⇐) by cases.</b></p><p class="small muted">Want: both implications.</p><p><b>(⇒) by contrapositive.</b> Suppose <span class="m">A ⊄ B</span> and <span class="m">B ⊄ A</span>. Then there are <span class="m">a ∈ A</span> with <span class="m">a ∉ B</span> and <span class="m">b ∈ B</span> with <span class="m">b ∉ A</span>. Let <span class="m">X = {a, b}</span>. Then <span class="m">X ⊆ A ∪ B</span>, so <span class="m">X ∈ 𝒫(A ∪ B)</span>. But <span class="m">X ⊄ A</span> (as <span class="m">b ∉ A</span>) and <span class="m">X ⊄ B</span> (as <span class="m">a ∉ B</span>), so <span class="m">X ∉ 𝒫(A) ∪ 𝒫(B)</span>. Hence the two sets differ.</p>
<p><b>(⇐) by cases.</b> First, <span class="m">𝒫(A) ∪ 𝒫(B) ⊆ 𝒫(A ∪ B)</span> always: if <span class="m">X ⊆ A</span> or <span class="m">X ⊆ B</span>, then <span class="m">X ⊆ A ∪ B</span>. <i>Case A ⊆ B.</i> Then <span class="m">A ∪ B = B</span>, so any <span class="m">X ∈ 𝒫(A ∪ B)</span> satisfies <span class="m">X ⊆ B</span>, i.e. <span class="m">X ∈ 𝒫(B) ⊆ 𝒫(A) ∪ 𝒫(B)</span>. <i>Case B ⊆ A</i> is symmetric (<span class="m">A ∪ B = A</span>). In both cases the reverse inclusion holds, so equality holds.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Splits into (⇒) and (⇐)`,`(⇒): correct negation via De Morgan and witness set {a, b}`,`(⇐): both cases, using A ∪ B = B (or A)`,`Shows the always-true inclusion`]},

{id:'b23', topic:'sets', src:'Sets PS 3', diff:2, title:'(A ∖ B) × C = (A × C) ∖ (B × C)',
 statement:`Let A, B, C be sets. Prove <span class="m">(A ∖ B) × C = (A × C) ∖ (B × C)</span>.`,
 tech:['double','chain'], why:`Set equality of products: chase an ordered pair (x, y).`,
 hints:[`Elements are pairs <span class="m">(x, y)</span>; <span class="m">(x, y) ∈ X × Y ⇔ x ∈ X ∧ y ∈ Y</span>.`,`(⊇): <span class="m">(x, y) ∉ B × C</span> means <span class="m">x ∉ B ∨ y ∉ C</span> (De Morgan). You already know <span class="m">y ∈ C</span>.`],
 proof:`<div class="proof np"><p><b>Proof of a set equality: (1) ⊆ and (2) ⊇.</b></p><p class="small muted">Want: (A ∖ B) × C = (A × C) ∖ (B × C).</p><p><b>(⊆)</b> Let <span class="m">(x, y) ∈ (A ∖ B) × C</span>. Then <span class="m">x ∈ A, x ∉ B, y ∈ C</span>. So <span class="m">(x, y) ∈ A × C</span>, and <span class="m">(x, y) ∉ B × C</span> since that would require <span class="m">x ∈ B</span>. Hence <span class="m">(x, y) ∈ (A × C) ∖ (B × C)</span>.</p>
<p><b>(⊇)</b> Let <span class="m">(x, y) ∈ (A × C) ∖ (B × C)</span>. Then <span class="m">x ∈ A, y ∈ C</span>, and <span class="m">¬(x ∈ B ∧ y ∈ C)</span>, i.e. <span class="m">x ∉ B ∨ y ∉ C</span>. Since <span class="m">y ∈ C</span>, disjunctive syllogism gives <span class="m">x ∉ B</span>. So <span class="m">x ∈ A ∖ B</span> and <span class="m">(x, y) ∈ (A ∖ B) × C</span>.</p>
<p>Both inclusions hold.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Works with an arbitrary pair (x, y)`,`Correct definition of × and ∖`,`De Morgan + disjunctive syllogism in (⊇)`,`Both inclusions`]},

{id:'b24', topic:'sets', src:'Sets PS 4 / WrapUp1 P5d', diff:2, title:'Products and inclusions',
 statement:`(a) Prove that if <span class="m">A ⊆ B</span> and <span class="m">C ⊆ D</span> then <span class="m">A × C ⊆ B × D</span>. (b) Prove <span class="m">(A × B) ∪ (C × D) ⊆ (A ∪ C) × (B ∪ D)</span>. (c) Show the inclusion in (b) can be strict.`,
 tech:['direct','counter'], why:`Element chasing, then reuse (a); a small counterexample for strictness.`,
 hints:[`(b): <span class="m">A ⊆ A ∪ C</span>, <span class="m">B ⊆ B ∪ D</span>; apply (a). Same for <span class="m">C × D</span>.`,`(c): try <span class="m">A = D = {1}</span>, <span class="m">B = C = {2}</span>.`],
 proof:`<div class="proof np"><p><b>Direct proofs for (a), (b); counterexample for (c).</b></p><p class="small muted">Want: (a) A × C ⊆ B × D; (b) the inclusion; (c) an element of the right side not in the left side.</p><p><b>(a)</b> Let <span class="m">(x, y) ∈ A × C</span>. Then <span class="m">x ∈ A ⊆ B</span> and <span class="m">y ∈ C ⊆ D</span>, so <span class="m">(x, y) ∈ B × D</span>.</p>
<p><b>(b)</b> Since <span class="m">A ⊆ A ∪ C</span> and <span class="m">B ⊆ B ∪ D</span>, (a) gives <span class="m">A × B ⊆ (A ∪ C) × (B ∪ D)</span>. Since <span class="m">C ⊆ A ∪ C</span>, <span class="m">D ⊆ B ∪ D</span>, also <span class="m">C × D ⊆ (A ∪ C) × (B ∪ D)</span>. A union of two subsets of a set is a subset of it.</p>
<p><b>(c)</b> <span class="m">A = D = {1}, B = C = {2}</span>: LHS <span class="m">= {(1,2), (2,1)}</span>, RHS <span class="m">= {1,2} × {1,2}</span> contains <span class="m">(1,1) ∉</span> LHS.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`(a) arbitrary pair and both coordinates`,`(b) reuses (a) twice and combines`,`(c) explicit sets with a pair in RHS but not LHS`]},

{id:'b25', topic:'sets', src:'WrapUp1 P5a–c', diff:2, title:'Intersection, complement and difference of products',
 statement:`Let <span class="m">A, C ⊆ U</span> and <span class="m">B, D ⊆ V</span>. Prove: (a) <span class="m">(A × B) ∩ (C × D) = (A ∩ C) × (B ∩ D)</span>; (b) <span class="m">(A × B)<sup>c</sup> = (A<sup>c</sup> × V) ∪ (U × B<sup>c</sup>)</span>, complement taken in <span class="m">U × V</span>.`,
 tech:['chain'], why:`Translate membership into logic in “x ∈” and “y ∈”, apply laws, translate back; each step is ⇔ so both inclusions come at once.`,
 hints:[`(a): rearrange the four conjuncts.`,`(b): <span class="m">¬(x ∈ A ∧ y ∈ B) ≡ x ∉ A ∨ y ∉ B</span>. Then attach the always-true <span class="m">y ∈ V</span> / <span class="m">x ∈ U</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof by a chain of equivalences (each ⇔ step gives both inclusions at once).</b></p><p class="small muted">Want: the two set equalities.</p><p>Let <span class="m">(x, y) ∈ U × V</span> be arbitrary.</p>
<p><b>(a)</b> <span class="m">(x, y) ∈ (A × B) ∩ (C × D) ⇔ (x ∈ A ∧ y ∈ B) ∧ (x ∈ C ∧ y ∈ D) ⇔ (x ∈ A ∧ x ∈ C) ∧ (y ∈ B ∧ y ∈ D) ⇔ x ∈ A ∩ C ∧ y ∈ B ∩ D ⇔ (x, y) ∈ (A ∩ C) × (B ∩ D)</span>.</p>
<p><b>(b)</b> <span class="m">(x, y) ∈ (A × B)<sup>c</sup> ⇔ ¬(x ∈ A ∧ y ∈ B) ⇔ x ∉ A ∨ y ∉ B ⇔ x ∈ A<sup>c</sup> ∨ y ∈ B<sup>c</sup> ⇔ (x ∈ A<sup>c</sup> ∧ y ∈ V) ∨ (x ∈ U ∧ y ∈ B<sup>c</sup>) ⇔ (x, y) ∈ (A<sup>c</sup> × V) ∪ (U × B<sup>c</sup>)</span>, using that <span class="m">x ∈ U</span> and <span class="m">y ∈ V</span> are true (identity law).</p>
<p>Each chain consists of ⇔ steps, so it proves both inclusions.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Arbitrary pair from the right universe`,`Each step names a law (def. ×, De Morgan, commutativity, identity)`,`Notes the complement is in U × V, not A^c × B^c`],
 notes:`Common error: claiming (A × B)<sup>c</sup> = A<sup>c</sup> × B<sup>c</sup>. With U = V = {1,2}, A = B = {1}: the left has 3 pairs, the right only (2,2).`},

{id:'b26', topic:'sets', src:'WrapUp1 P5c', diff:2, title:'(A × B) ∖ (C × D)',
 statement:`Prove <span class="m">(A × B) ∖ (C × D) = ((A ∖ C) × B) ∪ (A × (B ∖ D))</span>, and deduce <span class="m">(X ∖ Y) × Z = (X × Z) ∖ (Y × Z)</span>.`,
 tech:['chain'], why:`Logic chain with De Morgan and distributivity.`,
 hints:[`Abbreviate <span class="m">p: x ∈ A, q: y ∈ B, r: x ∈ C, s: y ∈ D</span>.`,`<span class="m">(p ∧ q) ∧ ¬(r ∧ s) ≡ ((p ∧ ¬r) ∧ q) ∨ (p ∧ (q ∧ ¬s))</span>.`,`For the corollary take <span class="m">A = X, C = Y, B = D = Z</span>; <span class="m">Z ∖ Z = ∅</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof by a chain of equivalences.</b></p><p class="small muted">Want: (A × B) ∖ (C × D) = ((A ∖ C) × B) ∪ (A × (B ∖ D)).</p><p>Let <span class="m">p: x ∈ A, q: y ∈ B, r: x ∈ C, s: y ∈ D</span>. Then <span class="m">(x, y) ∈ (A × B) ∖ (C × D) ⇔ (p ∧ q) ∧ ¬(r ∧ s) ⇔ (p ∧ q) ∧ (¬r ∨ ¬s) ⇔ ((p ∧ q) ∧ ¬r) ∨ ((p ∧ q) ∧ ¬s) ⇔ ((p ∧ ¬r) ∧ q) ∨ (p ∧ (q ∧ ¬s)) ⇔ (x ∈ A ∖ C ∧ y ∈ B) ∨ (x ∈ A ∧ y ∈ B ∖ D) ⇔ (x, y) ∈ ((A ∖ C) × B) ∪ (A × (B ∖ D))</span> (De Morgan, distributivity, rearranging ∧).</p>
<p><b>Corollary.</b> With <span class="m">A = X, C = Y, B = D = Z</span>: <span class="m">(X × Z) ∖ (Y × Z) = ((X ∖ Y) × Z) ∪ (X × ∅) = (X ∖ Y) × Z</span>, since <span class="m">X × ∅ = ∅</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Correct De Morgan on ¬(r ∧ s)`,`Distributivity step`,`Translation back to sets`,`Corollary via substitution and X × ∅ = ∅`]},

{id:'b27', topic:'sets', src:'Sets PS 5', diff:2, title:'A ∖ B, B ∖ A, A ∩ B partition A ∪ B',
 statement:`Prove (a) <span class="m">(A ∖ B) ∩ (B ∖ A) = ∅</span>; (b) <span class="m">(A Δ B) ∩ (A ∩ B) = ∅</span>; (c) conclude that <span class="m">A ∖ B, B ∖ A, A ∩ B</span> are pairwise disjoint with union <span class="m">A ∪ B</span>.`,
 tech:['contradiction'], why:`To show a set is empty, assume it has an element and derive a contradiction.`,
 hints:[`Suppose <span class="m">x ∈ (A ∖ B) ∩ (B ∖ A)</span>. Then <span class="m">x ∈ A</span> and <span class="m">x ∉ A</span>.`,`<span class="m">A Δ B = (A ∖ B) ∪ (B ∖ A)</span>; distribute ∩.`,`For the union: every <span class="m">x ∈ A ∪ B</span> is in A only, B only, or both.`],
 proof:`<div class="proof np"><p><b>(a), (b) Proof by contradiction (a set is empty); (c) direct proof of a set equality.</b></p><p class="small muted">Want: the three sets are pairwise disjoint and their union is A ∪ B.</p><p><b>(a)</b> Suppose for a contradiction <span class="m">x ∈ (A ∖ B) ∩ (B ∖ A)</span>. Then <span class="m">x ∈ A, x ∉ B</span> and <span class="m">x ∈ B, x ∉ A</span>, so <span class="m">x ∈ A ∧ x ∉ A</span>. Contradiction; the set is empty.</p>
<p><b>(b)</b> <span class="m">(A Δ B) ∩ (A ∩ B) = ((A ∖ B) ∩ (A ∩ B)) ∪ ((B ∖ A) ∩ (A ∩ B))</span>. An element of the first part would satisfy <span class="m">x ∉ B</span> and <span class="m">x ∈ B</span>; of the second, <span class="m">x ∉ A</span> and <span class="m">x ∈ A</span>. Both are empty, so the union is <span class="m">∅</span>.</p>
<p><b>(c)</b> (a) and (b) give pairwise disjointness (note <span class="m">A ∖ B, B ∖ A ⊆ A Δ B</span>). Each of the three sets is a subset of <span class="m">A ∪ B</span>. Conversely, let <span class="m">x ∈ A ∪ B</span>. If <span class="m">x ∈ A</span> and <span class="m">x ∈ B</span>, <span class="m">x ∈ A ∩ B</span>; if <span class="m">x ∈ A, x ∉ B</span>, <span class="m">x ∈ A ∖ B</span>; if <span class="m">x ∉ A</span>, then <span class="m">x ∈ B</span>, so <span class="m">x ∈ B ∖ A</span>. Hence the union is <span class="m">A ∪ B</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Emptiness via contradiction (an element cannot exist)`,`Uses definition of Δ`,`Pairwise disjoint (all three pairs covered)`,`Union equals A ∪ B shown in both directions`]},

{id:'b28', topic:'sets', src:'Sets PS 6', diff:2, title:'Solving A Δ X = B',
 statement:`Prove that <span class="m">A Δ X = B ⇒ X = A Δ B</span>.`,
 tech:['direct'], why:`Apply A Δ to both sides and use algebraic laws of Δ.`,
 hints:[`Take <span class="m">A Δ</span> of both sides.`,`Use associativity, <span class="m">A Δ A = ∅</span>, <span class="m">∅ Δ X = X</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b></p><p class="small muted">Want: X = A Δ B.</p><p>Assume <span class="m">A Δ X = B</span>. Then <span class="m">A Δ (A Δ X) = A Δ B</span>. By associativity of Δ, <span class="m">(A Δ A) Δ X = A Δ B</span>. Now <span class="m">A Δ A = (A ∖ A) ∪ (A ∖ A) = ∅</span>, and <span class="m">∅ Δ X = (∅ ∖ X) ∪ (X ∖ ∅) = X</span>. Hence <span class="m">X = A Δ B</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Applies A Δ to both sides (well-defined operation)`,`Cites associativity`,`Computes A Δ A = ∅ and ∅ Δ X = X from the definition`]},

{id:'b29', topic:'sets', src:'Sets PS 7', diff:1, title:'Complements reverse inclusion',
 statement:`Let <span class="m">A, B ⊆ U</span>. Prove that if <span class="m">A ⊆ B</span>, then <span class="m">B<sup>c</sup> ⊆ A<sup>c</sup></span>.`,
 tech:['direct','contradiction'], why:`Element chasing; the inner step “x ∉ A” is a small contradiction (or contrapositive of A ⊆ B).`,
 hints:[`Let <span class="m">x ∈ B<sup>c</sup></span>, so <span class="m">x ∉ B</span>.`,`If <span class="m">x ∈ A</span> then <span class="m">x ∈ B</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof (with a short contradiction inside).</b></p><p class="small muted">Want: B^c ⊆ A^c.</p><p>Assume <span class="m">A ⊆ B</span> and let <span class="m">x ∈ B<sup>c</sup></span>, so <span class="m">x ∈ U, x ∉ B</span>. Suppose for a contradiction <span class="m">x ∈ A</span>. Then <span class="m">x ∈ B</span> since <span class="m">A ⊆ B</span>, contradicting <span class="m">x ∉ B</span>. So <span class="m">x ∉ A</span>, i.e. <span class="m">x ∈ A<sup>c</sup></span>. Hence <span class="m">B<sup>c</sup> ⊆ A<sup>c</sup></span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Arbitrary x ∈ B^c`,`Correct use of the hypothesis`,`Conclusion x ∈ A^c`]},

{id:'b30', topic:'sets', src:'Sets PS 7b–c', diff:2, title:'(A ∖ B) ∖ C versus A ∖ (B ∖ C)',
 statement:`Prove or disprove: (a) <span class="m">(A ∖ B) ∖ C ⊆ A ∖ (B ∖ C)</span>; (b) <span class="m">A ∖ (B ∖ C) ⊆ (A ∖ B) ∖ C</span>.`,
 tech:['direct','counter'], why:`One inclusion is true (element chase), the other fails (small counterexample).`,
 hints:[`(a): from <span class="m">x ∉ B</span> conclude <span class="m">x ∉ B ∖ C</span>.`,`(b): try <span class="m">A = B = C = {1}</span>.`],
 proof:`<div class="proof np"><p><b>(a) Direct proof. (b) Disproof by counterexample.</b></p><p class="small muted">Want: (a) x ∈ A ∖ (B ∖ C); (b) sets where the inclusion fails.</p><p><b>(a) True.</b> Let <span class="m">x ∈ (A ∖ B) ∖ C</span>. Then <span class="m">x ∈ A, x ∉ B, x ∉ C</span>. Elements of <span class="m">B ∖ C</span> lie in B, and <span class="m">x ∉ B</span>, so <span class="m">x ∉ B ∖ C</span>. Hence <span class="m">x ∈ A ∖ (B ∖ C)</span>.</p>
<p><b>(b) False.</b> <span class="m">A = B = C = {1}</span>: <span class="m">B ∖ C = ∅</span>, so <span class="m">A ∖ (B ∖ C) = {1}</span>, but <span class="m">A ∖ B = ∅</span>, so <span class="m">(A ∖ B) ∖ C = ∅</span>. <span class="m">{1} ⊄ ∅</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`States true/false for each part`,`(a) element chase`,`(b) explicit counterexample with both sides computed`]},

{id:'b31', topic:'sets', src:'Lecture wk06a', diff:2, title:'Preimage preserves ∪ and ∩',
 statement:`Let <span class="m">f : X → Y</span> and <span class="m">B₁, B₂ ⊆ Y</span>. Prove (a) <span class="m">B₁ ⊆ B₂ ⇒ f<sup>←</sup>(B₁) ⊆ f<sup>←</sup>(B₂)</span>; (b) <span class="m">f<sup>←</sup>(B₁ ∩ B₂) = f<sup>←</sup>(B₁) ∩ f<sup>←</sup>(B₂)</span>; (c) <span class="m">f<sup>←</sup>(B₁ ∪ B₂) = f<sup>←</sup>(B₁) ∪ f<sup>←</sup>(B₂)</span>.`,
 tech:['double','chain'], why:`Set equalities; preimage membership is x ∈ f←(B) ⇔ f(x) ∈ B.`,
 hints:[`Definition: <span class="m">f<sup>←</sup>(B) = {x ∈ X : f(x) ∈ B}</span>.`,`(b) (⊆) follows from (a) applied to <span class="m">B₁ ∩ B₂ ⊆ B₁</span> and <span class="m">⊆ B₂</span>.`,`(c) is a chain: <span class="m">f(x) ∈ B₁ ∪ B₂ ⇔ f(x) ∈ B₁ ∨ f(x) ∈ B₂</span>.`],
 proof:`<div class="proof np"><p><b>Direct proofs; set equalities by (1) ⊆ and (2) ⊇.</b></p><p class="small muted">Want: the three statements about preimages.</p><p><b>(a)</b> Let <span class="m">x ∈ f<sup>←</sup>(B₁)</span>. Then <span class="m">f(x) ∈ B₁ ⊆ B₂</span>, so <span class="m">x ∈ f<sup>←</sup>(B₂)</span>.</p>
<p><b>(b)</b> (⊆) <span class="m">B₁ ∩ B₂ ⊆ B₁</span> and <span class="m">B₁ ∩ B₂ ⊆ B₂</span>, so by (a) <span class="m">f<sup>←</sup>(B₁ ∩ B₂)</span> is contained in both preimages, hence in their intersection. (⊇) Let <span class="m">x ∈ f<sup>←</sup>(B₁) ∩ f<sup>←</sup>(B₂)</span>. Then <span class="m">f(x) ∈ B₁</span> and <span class="m">f(x) ∈ B₂</span>, so <span class="m">f(x) ∈ B₁ ∩ B₂</span> and <span class="m">x ∈ f<sup>←</sup>(B₁ ∩ B₂)</span>.</p>
<p><b>(c)</b> <span class="m">x ∈ f<sup>←</sup>(B₁ ∪ B₂) ⇔ f(x) ∈ B₁ ∪ B₂ ⇔ f(x) ∈ B₁ ∨ f(x) ∈ B₂ ⇔ x ∈ f<sup>←</sup>(B₁) ∨ x ∈ f<sup>←</sup>(B₂) ⇔ x ∈ f<sup>←</sup>(B₁) ∪ f<sup>←</sup>(B₂)</span>.</p></div>`,
 rubric:[`Names the technique in the first sentence, states what is wanted, and ends with an explicit conclusion`,`Preimage definition used correctly (not the inverse function)`,`(b) both inclusions`,`(c) ⇔-chain or both inclusions`],
 notes:`Preimages need no injectivity. For images only f[A₁ ∩ A₂] ⊆ f[A₁] ∩ f[A₂] holds in general (x² with A₁ = {1}, A₂ = {−1}).`}
);

DATA.pd.push(
{topic:'sets', src:'Sets PS 2a', s:`<span class="m">𝒫(A) ∪ 𝒫(B) ⊆ 𝒫(A ∪ B)</span> for all sets A, B.`, a:true,
 why:`<p>Let <span class="m">X ∈ 𝒫(A) ∪ 𝒫(B)</span>. If <span class="m">X ⊆ A</span> then <span class="m">X ⊆ A ⊆ A ∪ B</span>; if <span class="m">X ⊆ B</span>, then <span class="m">X ⊆ B ⊆ A ∪ B</span>. Either way <span class="m">X ∈ 𝒫(A ∪ B)</span>.</p>`},
{topic:'sets', src:'Sets PS 2b', s:`<span class="m">𝒫(A ∪ B) ⊆ 𝒫(A) ∪ 𝒫(B)</span> for all sets A, B.`, a:false,
 why:`<p><span class="m">A = {1}, B = {2}</span>: <span class="m">{1, 2} ∈ 𝒫(A ∪ B)</span> but <span class="m">𝒫(A) ∪ 𝒫(B) = {∅, {1}, {2}}</span>.</p>`},
{topic:'sets', src:'WrapUp1 P4c', s:`<span class="m">𝒫(A × B) = 𝒫(A) × 𝒫(B)</span>.`, a:false,
 why:`<p>Different kinds of objects: the left contains sets of pairs, the right contains pairs of sets. Concretely <span class="m">A = B = {1}</span>: <span class="m">𝒫(A × B) = {∅, {(1,1)}}</span> has 2 elements, <span class="m">𝒫(A) × 𝒫(B)</span> has 4.</p>`},
{topic:'sets', src:'WrapUp1 P4a', s:`<span class="m">𝒫(A ∩ B) = 𝒫(A) ∩ 𝒫(B)</span>.`, a:true,
 why:`<p><span class="m">X ⊆ A ∩ B ⇔ (X ⊆ A ∧ X ⊆ B)</span>: (⇒) every element of X is in A ∩ B, hence in A and in B; (⇐) every element of X is in A and in B, hence in A ∩ B.</p>`},
{topic:'sets', src:'Sets PS 7c', s:`<span class="m">A ∖ (B ∖ C) ⊆ (A ∖ B) ∖ C</span>.`, a:false,
 why:`<p><span class="m">A = B = C = {1}</span>: LHS <span class="m">= {1} ∖ ∅ = {1}</span>, RHS <span class="m">= ∅ ∖ {1} = ∅</span>.</p>`},
{topic:'sets', src:'Sets PS 7b', s:`<span class="m">(A ∖ B) ∖ C ⊆ A ∖ (B ∖ C)</span>.`, a:true,
 why:`<p>If <span class="m">x ∈ A, x ∉ B, x ∉ C</span>, then <span class="m">x ∉ B ∖ C</span> (members of <span class="m">B ∖ C</span> are in B), so <span class="m">x ∈ A ∖ (B ∖ C)</span>.</p>`},
{topic:'sets', src:'WrapUp1 P5b', s:`<span class="m">(A × B)<sup>c</sup> = A<sup>c</sup> × B<sup>c</sup></span> (complements in U × V, U, V).`, a:false,
 why:`<p><span class="m">U = V = {1, 2}, A = B = {1}</span>: <span class="m">(A × B)<sup>c</sup> = {(1,2), (2,1), (2,2)}</span> but <span class="m">A<sup>c</sup> × B<sup>c</sup> = {(2,2)}</span>. Correct formula: <span class="m">(A<sup>c</sup> × V) ∪ (U × B<sup>c</sup>)</span>.</p>`},
{topic:'sets', src:'WrapUp1 P5d', s:`<span class="m">(A × B) ∪ (C × D) = (A ∪ C) × (B ∪ D)</span>.`, a:false,
 why:`<p>Only ⊆ holds. <span class="m">A = D = {1}, B = C = {2}</span>: <span class="m">(1, 1)</span> is in the right side but not the left.</p>`},
{topic:'sets', s:`<span class="m">A × B = B × A</span> for all sets A, B.`, a:false,
 why:`<p><span class="m">A = {1}, B = {2}</span>: <span class="m">A × B = {(1, 2)} ≠ {(2, 1)} = B × A</span>. (It holds iff <span class="m">A = B</span> or one of them is empty.)</p>`},
{topic:'sets', s:`If <span class="m">A × C = B × C</span> then <span class="m">A = B</span>.`, a:false,
 why:`<p>Take <span class="m">C = ∅</span>: <span class="m">{1} × ∅ = ∅ = {2} × ∅</span> but <span class="m">{1} ≠ {2}</span>. (True if <span class="m">C ≠ ∅</span>.)</p>`},
{topic:'sets', s:`<span class="m">A Δ (A Δ B) = B</span>.`, a:true,
 why:`<p>Δ is associative, so <span class="m">A Δ (A Δ B) = (A Δ A) Δ B = ∅ Δ B = B</span>.</p>`}
);

DATA.bugs.push(
{topic:'sets', claim:`For all sets A, B, C: <span class="m">A ∪ (B ∩ C) = (A ∪ B) ∩ C</span>.`,
 lines:[[`Take <span class="m">A = {1}, B = {1, 2}, C = {1, 2}</span>.`,`example`],
  [`LHS <span class="m">= {1} ∪ {1, 2} = {1, 2}</span>.`,`compute`],
  [`RHS <span class="m">= {1, 2} ∩ {1, 2} = {1, 2}</span>.`,`compute`],
  [`Both sides agree, so the identity holds for all sets.`,`generalise`]],
 bad:[3], explain:`<p>One example (or a Venn diagram) never proves a universal statement; you must argue for an arbitrary element. In fact the claim is false: <span class="m">A = {1}, B = C = ∅</span> gives LHS <span class="m">= {1}</span>, RHS <span class="m">= ∅</span>.</p>`}
);

DATA.cards.push(
['sets',`<span class="m">X ∈ 𝒫(A)</span> means…`,`<span class="m">X ⊆ A</span>. Elements of a power set are subsets.`],
['sets',`How to prove <span class="m">A = B</span> for sets`,`Prove A ⊆ B and B ⊆ A (“take an element from here”), or give a chain of ⇔ steps on x ∈ ….`],
['sets',`How to prove a set is empty`,`Suppose x is in it and derive a contradiction.`],
['sets',`<span class="m">(x, y) ∈ A × B</span> means…`,`<span class="m">x ∈ A ∧ y ∈ B</span>. Negation: <span class="m">x ∉ A ∨ y ∉ B</span>.`],
['sets',`<span class="m">A Δ B</span>`,`<span class="m">(A ∖ B) ∪ (B ∖ A) = (A ∪ B) ∖ (A ∩ B)</span>. Associative, <span class="m">A Δ A = ∅</span>, <span class="m">A Δ ∅ = A</span>.`],
['sets',`<span class="m">|A × B|</span>, <span class="m">|𝒫(A)|</span> for finite sets`,`<span class="m">|A|·|B|</span> and <span class="m">2<sup>|A|</sup></span>. So <span class="m">|𝒫(A × B)| = 2<sup>mn</sup></span> vs <span class="m">|𝒫(A) × 𝒫(B)| = 2<sup>m+n</sup></span>.`],
['sets',`Inclusion–exclusion (two sets)`,`<span class="m">|A ∪ B| = |A| + |B| − |A ∩ B|</span>; proof: split into disjoint pieces A and B ∖ A.`],
['sets',`Image vs preimage identities`,`f[A₁ ∩ A₂] ⊆ f[A₁] ∩ f[A₂] always, = iff f injective. f←(B₁ ∩ B₂) = f←(B₁) ∩ f←(B₂) always. f[f←(B)] ⊆ B always, = for all B iff f onto.`]
);

/* ===================== CARDINALITY =====================
   Course conventions (lectures 06b–07a): ℕ = {0,1,2,…}, ℕₙ = {1,…,n}; A ≈ B iff ∃ bijection; finite = ∅ or ≈ ℕₙ;
   denumerable = infinite and ≈ ℕ; countable = finite or denumerable; uncountable = infinite and not countable.
   Citable lecture results: Cantor–Bernstein, Cantor's theorem, ℕ×ℕ denumerable, every infinite subset of ℕ is denumerable,
   subset of a finite set is finite, gluing disjoint bijections, listing X = {x₀, x₁, …}. */
DATA.problems.push(
{id:'b40', topic:'card', src:'Lecture wk07a', diff:2, title:'ℕ × ℕ is denumerable',
 statement:`Prove that <span class="m">ℕ × ℕ</span> is denumerable.`,
 tech:['bijection'], why:`Two one-to-one maps (one each way) plus Cantor–Bernstein is much easier than an explicit bijection.`,
 hints:[`<span class="m">f : ℕ → ℕ × ℕ, f(n) = (n, 3)</span> is 1-1.`,`<span class="m">g : ℕ × ℕ → ℕ, g(n, m) = 2<sup>n</sup>3<sup>m</sup></span>. Show it is 1-1 using parity.`,`If <span class="m">2<sup>n</sup>3<sup>m</sup> = 2<sup>r</sup>3<sup>s</sup></span> and WLOG <span class="m">r &lt; n</span>, divide by <span class="m">2<sup>r</sup></span>: even = odd.`],
 proof:`<div class="proof np"><p><b>Proof (direct, using Cantor–Bernstein).</b> We give 1-1 maps in both directions.</p><p class="small muted">Want: a bijection between ℕ and ℕ × ℕ (and ℕ × ℕ infinite).</p>
<p><b>(*)</b> <span class="m">f : ℕ → ℕ × ℕ, f(n) = (n, 3)</span>. If <span class="m">f(n₁) = f(n₂)</span> then <span class="m">(n₁, 3) = (n₂, 3)</span>, so <span class="m">n₁ = n₂</span>. So f is 1-1.</p>
<p><b>(**)</b> <span class="m">g : ℕ × ℕ → ℕ, g(n, m) = 2<sup>n</sup>3<sup>m</sup></span>. Suppose <span class="m">2<sup>n</sup>3<sup>m</sup> = 2<sup>r</sup>3<sup>s</sup></span>. <i>n = r:</i> assume for a contradiction <span class="m">n ≠ r</span>, WLOG <span class="m">r &lt; n</span>. Dividing by <span class="m">2<sup>r</sup></span>: <span class="m">2<sup>n−r</sup>3<sup>m</sup> = 3<sup>s</sup></span>; the left side is even (<span class="m">n − r ≥ 1</span>), the right side is odd. Contradiction, so <span class="m">n = r</span>. <i>m = s:</i> cancelling <span class="m">2<sup>n</sup></span> gives <span class="m">3<sup>m</sup> = 3<sup>s</sup></span>; if WLOG <span class="m">s &lt; m</span> then <span class="m">3<sup>m−s</sup> = 1</span> with <span class="m">m − s ≥ 1</span>, impossible. So <span class="m">m = s</span> and g is 1-1.</p>
<p>By (*) and (**) and the Cantor–Bernstein theorem, there is a bijection <span class="m">ℕ → ℕ × ℕ</span>. Since f is 1-1, ℕ × ℕ contains the infinite set f[ℕ], so it is infinite. Therefore ℕ × ℕ is denumerable.</p></div>`,
 rubric:[`States the strategy (two 1-1 maps + Cantor–Bernstein) up front`,`f 1-1 proved`,`g 1-1 proved (parity / contradiction, both exponents)`,`Cites Cantor–Bernstein by name and concludes denumerable`]},

{id:'b41', topic:'card', src:'Lecture wk07a', diff:3, title:'Cantor’s theorem: |A| < |𝒫(A)|',
 statement:`Prove that for every set <span class="m">A</span>, <span class="m">|A| &lt; |𝒫(A)|</span>, i.e. there is a 1-1 map <span class="m">A → 𝒫(A)</span> but no bijection.`,
 tech:['contradiction','diag'], why:`“No bijection” is a negative statement: assume one exists and build the diagonal set.`,
 hints:[`1-1 map: <span class="m">x ↦ {x}</span>.`,`Assume a bijection <span class="m">φ : A → 𝒫(A)</span>. Let <span class="m">B = {x ∈ A : x ∉ φ(x)}</span>.`,`<span class="m">B = φ(x₀)</span> for some <span class="m">x₀</span>. Is <span class="m">x₀ ∈ B</span>?`],
 proof:`<div class="proof np"><p><b>Proof.</b> Two parts: (i) a 1-1 map, (ii) no bijection, by contradiction.</p><p class="small muted">Want: ∃ 1-1 map A → 𝒫(A) and ¬∃ bijection A → 𝒫(A).</p>
<p><b>(i)</b> <span class="m">f(x) = {x}</span>. If <span class="m">x ≠ y</span> then <span class="m">{x} ≠ {y}</span>. So f is 1-1.</p>
<p><b>(ii) Proof by contradiction.</b> Assume for a contradiction that <span class="m">φ : A → 𝒫(A)</span> is a bijection. Let <span class="m">B = {x ∈ A : x ∉ φ(x)}</span>. Then <span class="m">B ⊆ A</span>, so <span class="m">B ∈ 𝒫(A)</span>, and since φ is onto there is <span class="m">x₀ ∈ A</span> with <span class="m">φ(x₀) = B</span>. <i>Case 1:</i> <span class="m">x₀ ∈ B</span>. By definition of B, <span class="m">x₀ ∉ φ(x₀) = B</span>. Contradiction. <i>Case 2:</i> <span class="m">x₀ ∉ B = φ(x₀)</span>. Then by definition of B, <span class="m">x₀ ∈ B</span>. Contradiction. Both cases are impossible, so no bijection exists.</p>
<p>By (i) and (ii), <span class="m">|A| &lt; |𝒫(A)|</span>.</p></div>`,
 rubric:[`Gives the 1-1 map x ↦ {x}`,`Opens (ii) with “Assume for a contradiction … bijection”`,`Defines the diagonal set B correctly and notes B ∈ 𝒫(A)`,`Both cases x₀ ∈ B / x₀ ∉ B lead to contradiction`,`Conclusion |A| < |𝒫(A)|`],
 notes:`Consequence: 𝒫(ℕ) is uncountable (it is infinite, and there is no bijection ℕ → 𝒫(ℕ)).`},

{id:'b42', topic:'card', src:'Lecture wk07a', diff:3, title:'Every infinite subset of ℕ is denumerable',
 statement:`Let <span class="m">A ⊆ ℕ</span> be infinite. Prove that A is denumerable. Conclude that every subset of ℕ is countable.`,
 tech:['bijection','wop'], why:`Inclusion A → ℕ is 1-1; list A in increasing order using the well-ordering principle for the other direction; finish with Cantor–Bernstein.`,
 hints:[`<span class="m">F : A → ℕ, F(x) = x</span> is 1-1.`,`<span class="m">n₀ = min A</span>, <span class="m">n<sub>k</sub> = min(A ∖ {n₀, …, n<sub>k−1</sub>})</span>; why does the minimum exist?`,`<span class="m">F′(k) = n<sub>k</sub></span> is 1-1: if <span class="m">k &lt; k′</span> then <span class="m">n<sub>k′</sub> ∉ {n₀, …, n<sub>k′−1</sub>} ∋ n<sub>k</sub></span>.`],
 proof:`<div class="proof np"><p><b>Proof (direct, using Cantor–Bernstein).</b> Let <span class="m">A ⊆ ℕ</span> be infinite and arbitrary.</p><p class="small muted">Want: a bijection ℕ → A.</p>
<p><b>(*)</b> <span class="m">F : A → ℕ, F(x) = x</span> is clearly 1-1.</p>
<p><b>(**)</b> Define recursively <span class="m">n₀ = min A</span> and <span class="m">n<sub>k</sub> = min(A ∖ {n₀, …, n<sub>k−1</sub>})</span>. Each set <span class="m">A ∖ {n₀, …, n<sub>k−1</sub>}</span> is a nonempty subset of ℕ (A is infinite, and we removed only finitely many elements), so its minimum exists by the well-ordering principle. Let <span class="m">F′(k) = n<sub>k</sub></span>. If <span class="m">k &lt; k′</span>, then <span class="m">n<sub>k</sub> ∈ {n₀, …, n<sub>k′−1</sub>}</span> while <span class="m">n<sub>k′</sub> ∉ {n₀, …, n<sub>k′−1</sub>}</span>, so <span class="m">n<sub>k</sub> ≠ n<sub>k′</sub></span>. Thus F′ is 1-1.</p>
<p>By (*), (**) and Cantor–Bernstein, A ≈ ℕ; A is infinite, so A is denumerable. Finally, any <span class="m">S ⊆ ℕ</span> is either finite or infinite; in the second case it is denumerable. Therefore every subset of ℕ is countable.</p></div>`,
 rubric:[`Both 1-1 maps given`,`Uses well-ordering and justifies nonemptiness (A infinite)`,`Injectivity of F′ argued`,`Cites Cantor–Bernstein; deduces “every subset of ℕ is countable” by cases`]},

{id:'b43', topic:'card', src:'Fall25 PS 6', diff:2, title:'E countable ⇒ E ∪ {a} countable',
 statement:`Prove that if <span class="m">E</span> is countable and <span class="m">a ∉ E</span>, then <span class="m">E ∪ {a}</span> is countable.`,
 tech:['cases','bijection'], why:`Countable means finite OR denumerable: split into those two cases.`,
 hints:[`Case E finite: <span class="m">E ∪ {a}</span> is a disjoint union of two finite sets.`,`Case E denumerable: list <span class="m">E = {e₀, e₁, e₂, …}</span>. Shift the list by one.`,`<span class="m">f(0) = a</span>, <span class="m">f(n) = e<sub>n−1</sub></span> for <span class="m">n ≥ 1</span>.`],
 proof:`<div class="proof np"><p><b>Proof by cases.</b> Suppose E is countable and <span class="m">a ∉ E</span>. Then E is finite or denumerable.</p><p class="small muted">Want: E ∪ {a} is finite or denumerable.</p>
<p><b>Case 1: E finite.</b> <span class="m">{a}</span> is finite (<span class="m">≈ ℕ₁</span>) and <span class="m">E ∩ {a} = ∅</span> since <span class="m">a ∉ E</span>. By the disjoint-union result, <span class="m">E ∪ {a}</span> is finite with <span class="m">|E ∪ {a}| = |E| + 1</span>. Hence countable.</p>
<p><b>Case 2: E denumerable.</b> Then <span class="m">E = {e₀, e₁, e₂, …}</span> with distinct <span class="m">e<sub>i</sub></span> (listing via a bijection <span class="m">n ↦ e<sub>n</sub></span>). Define <span class="m">f : ℕ → E ∪ {a}</span> by <span class="m">f(0) = a</span> and <span class="m">f(n) = e<sub>n−1</sub></span> for <span class="m">n ≥ 1</span>. <i>1-1:</i> let <span class="m">f(n) = f(m)</span>. If both <span class="m">n, m ≥ 1</span>, then <span class="m">e<sub>n−1</sub> = e<sub>m−1</sub></span>, so <span class="m">n = m</span>. If exactly one of them is 0, one value is <span class="m">a</span> and the other is in E, impossible since <span class="m">a ∉ E</span>. If both are 0, <span class="m">n = m</span>. <i>Onto:</i> let <span class="m">y ∈ E ∪ {a}</span>. If <span class="m">y = a</span>, <span class="m">y = f(0)</span>; if <span class="m">y = e<sub>k</sub></span>, then <span class="m">y = f(k+1)</span>. So f is a bijection, <span class="m">E ∪ {a}</span> is infinite (it contains E) and denumerable.</p>
<p>In both cases <span class="m">E ∪ {a}</span> is countable.</p></div>`,
 rubric:[`Opens with the two cases from the definition of countable`,`Finite case justified (disjointness used)`,`Explicit map in the denumerable case`,`Both 1-1 (incl. the a vs E case) and onto checked`,`Conclusion`]},

{id:'b44', topic:'card', src:'Fall25 PS 7', diff:3, title:'0-1 sequences are uncountable',
 statement:`Let <span class="m">A</span> be the set of all infinite sequences <span class="m">(s₀, s₁, s₂, …)</span> whose terms are 0 or 1. Prove that A is uncountable.`,
 tech:['diag','contradiction'], why:`Uncountable = infinite and no bijection with ℕ; the “no bijection” part is a diagonal contradiction.`,
 hints:[`Infinite: the sequences <span class="m">u<sup>(n)</sup></span> with a single 1 in position n are all different.`,`Assume a bijection <span class="m">ℕ → A, n ↦ s<sup>(n)</sup></span>. Build <span class="m">d</span> with <span class="m">d<sub>n</sub> = 1 − s<sup>(n)</sup><sub>n</sub></span>.`,`d differs from every <span class="m">s<sup>(n)</sup></span> at position n.`],
 proof:`<div class="proof np"><p><b>Proof.</b> We show (i) A is infinite and (ii) there is no bijection ℕ → A (by contradiction).</p><p class="small muted">Want: A infinite and ¬∃ bijection ℕ → A.</p>
<p><b>(i)</b> For <span class="m">n ∈ ℕ</span> let <span class="m">u<sup>(n)</sup></span> have a 1 in position n and 0 elsewhere. <span class="m">n ↦ u<sup>(n)</sup></span> is 1-1 (different n put the 1 in different positions), so A contains a copy of ℕ and is not finite.</p>
<p><b>(ii) Proof by contradiction.</b> Assume for a contradiction that <span class="m">F : ℕ → A</span> is a bijection, and write <span class="m">F(n) = s<sup>(n)</sup> = (s<sup>(n)</sup>₀, s<sup>(n)</sup>₁, …)</span>. Define <span class="m">d = (d₀, d₁, …)</span> by <span class="m">d<sub>n</sub> = 1 − s<sup>(n)</sup><sub>n</sub></span>. Each <span class="m">d<sub>n</sub> ∈ {0, 1}</span>, so <span class="m">d ∈ A</span>. Since F is onto, <span class="m">d = s<sup>(k)</sup></span> for some k. But then <span class="m">d<sub>k</sub> = s<sup>(k)</sup><sub>k</sub></span>, while by construction <span class="m">d<sub>k</sub> = 1 − s<sup>(k)</sup><sub>k</sub> ≠ s<sup>(k)</sup><sub>k</sub></span>. Contradiction.</p>
<p>Hence A is infinite and not denumerable; it is not finite either, so A is not countable. Therefore A is uncountable.</p></div>`,
 rubric:[`Shows A is infinite (the lecturer requires this first)`,`“Assume for a contradiction … bijection ℕ → A”`,`Correct diagonal sequence and check d ∈ A`,`Derives the contradiction at position k`,`Final conclusion uses the definition of uncountable`]},

{id:'b45', topic:'card', src:'Fall25 PS 13', diff:3, title:'(0, 1) and every interval (a, b) is uncountable',
 statement:`(a) Prove that <span class="m">(0, 1)</span> is uncountable. (b) Prove that for any <span class="m">a &lt; b</span>, <span class="m">(a, b) ≈ (0, 1)</span>, hence <span class="m">(a, b)</span> is uncountable.`,
 tech:['diag','bijection'], why:`Diagonal argument on decimal expansions, then a linear bijection.`,
 hints:[`Use decimal expansions, and build the new digit from 5s and 6s so that no number has two expansions.`,`<span class="m">d<sub>n</sub> = 5</span> if the n-th digit of the n-th number is not 5, else 6.`,`(b): <span class="m">h(x) = a + (b − a)x</span>.`],
 proof:`<div class="proof np"><p><b>(a) Proof.</b> (0, 1) is infinite: <span class="m">n ↦ 1/(n+2)</span> is a 1-1 map <span class="m">ℕ → (0, 1)</span>. <b>Proof by contradiction</b> for the rest: assume for a contradiction that <span class="m">F : ℕ → (0, 1)</span> is a bijection, and write <span class="m">F(n) = 0.a<sub>n0</sub>a<sub>n1</sub>a<sub>n2</sub>…</span> (choosing the expansion that does not end in all 9s). Define <span class="m">d = 0.d₀d₁d₂…</span> with <span class="m">d<sub>n</sub> = 5</span> if <span class="m">a<sub>nn</sub> ≠ 5</span> and <span class="m">d<sub>n</sub> = 6</span> if <span class="m">a<sub>nn</sub> = 5</span>. Then <span class="m">d ∈ (0, 1)</span>, and its expansion has only digits 5 and 6, so it is its unique decimal expansion. Since F is onto, <span class="m">d = F(k)</span> for some k, so their expansions agree; but <span class="m">d<sub>k</sub> ≠ a<sub>kk</sub></span>. Contradiction. Hence (0, 1) is infinite and not countable: uncountable.</p>
<p class="small muted">Want (b): a bijection (0, 1) → (a, b).</p>
<p><b>(b) Direct proof.</b> Let <span class="m">h : (0, 1) → (a, b), h(x) = a + (b − a)x</span>. Since <span class="m">b − a &gt; 0</span>, <span class="m">0 &lt; x &lt; 1 ⇒ a &lt; h(x) &lt; b</span>, so h maps into (a, b). <i>1-1:</i> <span class="m">h(x) = h(y) ⇒ (b − a)x = (b − a)y ⇒ x = y</span> (divide by <span class="m">b − a ≠ 0</span>). <i>Onto:</i> let <span class="m">y ∈ (a, b)</span>; <span class="m">x = (y − a)/(b − a) ∈ (0, 1)</span> and <span class="m">h(x) = y</span>. So <span class="m">(a, b) ≈ (0, 1)</span>. If (a, b) were countable, composing bijections would make (0, 1) countable (≈ is transitive), contradicting (a). And (a, b) is infinite (it is ≈ (0,1)). Therefore (a, b) is uncountable.</p></div>`,
 rubric:[`Shows infiniteness`,`Diagonal construction avoids the 0.4999… = 0.5 issue`,`Contradiction clearly derived`,`(b) explicit bijection with 1-1, onto and “lands in (a, b)” checks`,`Transfers uncountability via ≈`]},

{id:'b46', topic:'card', src:'Fall25 PS 14', diff:2, title:'card ℝ = card(−1, 1)',
 statement:`Prove that <span class="m">ℝ ≈ (−1, 1)</span> and conclude that ℝ is uncountable.`,
 tech:['bijection'], why:`Construct an explicit bijection and verify 1-1 and onto (or give the inverse).`,
 hints:[`Try <span class="m">f(x) = x/(1 + |x|)</span>.`,`Candidate inverse <span class="m">g(y) = y/(1 − |y|)</span>; check both compositions.`,`Note f(x) and x have the same sign, so <span class="m">|f(x)| = |x|/(1 + |x|)</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Define <span class="m">f : ℝ → (−1, 1), f(x) = x/(1 + |x|)</span> and <span class="m">g : (−1, 1) → ℝ, g(y) = y/(1 − |y|)</span>.</p><p class="small muted">Want: f is invertible (hence a bijection).</p>
<p><i>Well-defined:</i> <span class="m">|f(x)| = |x|/(1 + |x|) &lt; 1</span>, so <span class="m">f(x) ∈ (−1, 1)</span>; and for <span class="m">|y| &lt; 1</span>, <span class="m">1 − |y| &gt; 0</span>, so g is defined.</p>
<p><i>g(f(x)) = x:</i> f(x) has the same sign as x and <span class="m">|f(x)| = |x|/(1+|x|)</span>, so <span class="m">1 − |f(x)| = 1/(1 + |x|)</span> and <span class="m">g(f(x)) = (x/(1+|x|))·(1+|x|) = x</span>.</p>
<p><i>f(g(y)) = y:</i> g(y) has the sign of y and <span class="m">|g(y)| = |y|/(1 − |y|)</span>, so <span class="m">1 + |g(y)| = 1/(1 − |y|)</span> and <span class="m">f(g(y)) = (y/(1−|y|))·(1 − |y|) = y</span>.</p>
<p>So f is invertible, hence a bijection, and <span class="m">ℝ ≈ (−1, 1)</span>. Since (−1, 1) is uncountable (an open interval, previous problem) and ≈ is transitive, a bijection ℕ → ℝ would give one ℕ → (−1, 1). Therefore ℝ (which is infinite) is uncountable.</p></div>`,
 rubric:[`Explicit map into (−1, 1) with range check`,`Inverse verified in both compositions (or 1-1 and onto)`,`Uses invertible ⇔ bijective`,`Concludes uncountability correctly`]},

{id:'b47', topic:'card', src:'Fall25 PS 15', diff:1, title:'ℕ ∖ {4, 7} is denumerable',
 statement:`Show that <span class="m">ℕ ∖ {4, 7}</span> is denumerable.`,
 tech:['bijection'], why:`Either cite “infinite subsets of ℕ are denumerable” or write the shift bijection.`,
 hints:[`Skip over 4 and 7: shift by 0, then 1, then 2.`,`<span class="m">f(n) = n</span> for <span class="m">n ≤ 3</span>, <span class="m">n + 1</span> for <span class="m">4 ≤ n ≤ 5</span>, <span class="m">n + 2</span> for <span class="m">n ≥ 6</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Define <span class="m">f : ℕ → ℕ ∖ {4, 7}</span> by <span class="m">f(n) = n</span> if <span class="m">n ≤ 3</span>, <span class="m">f(n) = n + 1</span> if <span class="m">4 ≤ n ≤ 5</span>, <span class="m">f(n) = n + 2</span> if <span class="m">n ≥ 6</span>.</p><p class="small muted">Want: f is a bijection.</p>
<p><i>Into:</i> the values are 0–3, 5–6, and ≥ 8, never 4 or 7. <i>1-1:</i> f is strictly increasing on each piece, and the pieces have ranges {0,…,3}, {5,6}, {8,9,…}, which are disjoint and increasing; so <span class="m">n &lt; m ⇒ f(n) &lt; f(m)</span>. <i>Onto:</i> let <span class="m">y ∈ ℕ ∖ {4, 7}</span>. If <span class="m">y ≤ 3</span>, <span class="m">y = f(y)</span>; if <span class="m">y ∈ {5, 6}</span>, <span class="m">y = f(y − 1)</span>; if <span class="m">y ≥ 8</span>, <span class="m">y = f(y − 2)</span> with <span class="m">y − 2 ≥ 6</span>.</p>
<p>So f is a bijection; the set is infinite (it contains all n ≥ 8). Therefore <span class="m">ℕ ∖ {4, 7}</span> is denumerable. (Alternatively: it is an infinite subset of ℕ, hence denumerable by the lecture proposition.)</p></div>`,
 rubric:[`Explicit map (or correct citation of the lecture proposition)`,`Checks values avoid 4 and 7`,`1-1 and onto both argued`,`Mentions infinite`]},

{id:'b48', topic:'card', src:'Fall25 PS 10', diff:1, title:'{0, 1, 3, 7, 15, …} is denumerable',
 statement:`Show that <span class="m">A = {0, 1, 3, 7, 15, 31, 63, …}</span> is denumerable.`,
 tech:['bijection'], why:`Recognise the pattern 2ⁿ − 1 and give the bijection.`,
 hints:[`<span class="m">A = {2<sup>n</sup> − 1 : n ∈ ℕ}</span>.`,`<span class="m">f(n) = 2<sup>n</sup> − 1</span>; 1-1 because <span class="m">2<sup>x</sup></span> is strictly increasing.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Note <span class="m">A = {2<sup>n</sup> − 1 : n ∈ ℕ}</span>. Let <span class="m">f : ℕ → A, f(n) = 2<sup>n</sup> − 1</span>.</p><p class="small muted">Want: f is a bijection.</p>
<p><i>1-1:</i> let <span class="m">n₁ ≠ n₂</span>, WLOG <span class="m">n₁ &lt; n₂</span>. Then <span class="m">2<sup>n₂</sup> = 2<sup>n₁</sup>·2<sup>n₂−n₁</sup> ≥ 2·2<sup>n₁</sup> &gt; 2<sup>n₁</sup></span>, so <span class="m">f(n₁) ≠ f(n₂)</span>. <i>Onto:</i> let <span class="m">a ∈ A</span>; by definition <span class="m">a = 2<sup>n</sup> − 1</span> for some <span class="m">n ∈ ℕ</span>, i.e. <span class="m">a = f(n)</span>.</p>
<p>So <span class="m">A ≈ ℕ</span>; A is infinite (f is 1-1 from ℕ). Therefore A is denumerable.</p></div>`,
 rubric:[`Describes A by a formula`,`1-1 with justification`,`Onto from the definition of A`,`Conclusion`]},

{id:'b49', topic:'card', src:'Lecture wk07a style', diff:2, title:'ℚ is denumerable',
 statement:`Prove that <span class="m">ℚ</span> is denumerable.`,
 tech:['bijection'], why:`Inclusion ℕ → ℚ and a prime-power encoding ℚ → ℕ, then Cantor–Bernstein.`,
 hints:[`Write each <span class="m">q ∈ ℚ</span> uniquely as <span class="m">q = σ·a/b</span> with <span class="m">σ ∈ {+, −}</span>, <span class="m">a ∈ ℕ</span>, <span class="m">b ≥ 1</span>, <span class="m">gcd(a, b) = 1</span>.`,`Encode: <span class="m">g(q) = 2<sup>a</sup>3<sup>b</sup>5<sup>s</sup></span>, <span class="m">s = 0</span> if <span class="m">q ≥ 0</span>, <span class="m">1</span> if <span class="m">q &lt; 0</span>.`,`Uniqueness of prime factorisation gives 1-1.`],
 proof:`<div class="proof np"><p><b>Direct proof (Cantor–Bernstein).</b></p><p class="small muted">Want: 1-1 maps ℕ → ℚ and ℚ → ℕ.</p>
<p><b>(*)</b> <span class="m">f : ℕ → ℚ, f(n) = n</span>, is 1-1.</p>
<p><b>(**)</b> Every <span class="m">q ∈ ℚ</span> can be written uniquely as <span class="m">q = a/b</span> or <span class="m">q = −a/b</span> in lowest terms with <span class="m">a ∈ ℕ, b ∈ ℤ⁺, gcd(a, b) = 1</span> (and <span class="m">0 = 0/1</span>). Let <span class="m">s(q) = 0</span> if <span class="m">q ≥ 0</span> and <span class="m">1</span> if <span class="m">q &lt; 0</span>, and <span class="m">g(q) = 2<sup>a</sup>3<sup>b</sup>5<sup>s(q)</sup></span>. If <span class="m">g(q) = g(q′)</span>, uniqueness of prime factorisation gives the same <span class="m">a, b, s</span>, hence <span class="m">q = q′</span>. So g is 1-1.</p>
<p>By (*), (**) and Cantor–Bernstein, <span class="m">ℚ ≈ ℕ</span>; ℚ is infinite (it contains ℕ). Therefore ℚ is denumerable.</p></div>`,
 rubric:[`Both 1-1 maps`,`Unique representation (lowest terms, sign) stated so g is well defined`,`Injectivity via unique factorisation`,`Cantor–Bernstein cited`]},

{id:'b50', topic:'card', src:'Fall25 PS 5 / 12', diff:2, title:'Countable or not? Rationals and irrationals in (2, 3)',
 statement:`Decide, with proof: (a) the set <span class="m">ℚ⁻</span> of negative rationals; (b) <span class="m">C = (2, 3) ∩ ℚ</span>; (c) <span class="m">B = (2, 3) ∖ ℚ</span>; (d) <span class="m">ℕ × {1}</span>.`,
 tech:['bijection','contradiction'], why:`Subsets of a denumerable set that are infinite are denumerable; for B use contradiction with (2, 3) uncountable.`,
 hints:[`A useful lemma: if X is infinite and there is a 1-1 map X → ℕ, then X is denumerable (its image is an infinite subset of ℕ).`,`(c): if B were countable, then <span class="m">(2, 3) = B ∪ C</span> would be countable.`,`Union of two disjoint denumerable sets <span class="m">{b₀, b₁, …}</span>, <span class="m">{c₀, c₁, …}</span>: <span class="m">2k ↦ b<sub>k</sub>, 2k+1 ↦ c<sub>k</sub></span>.`],
 proof:`<div class="proof np"><p><b>Lemma.</b> If X is infinite and <span class="m">h : X → ℕ</span> is 1-1, then X is denumerable. <i>Proof.</i> h[X] ⊆ ℕ is infinite (≈ X), so it is denumerable by the lecture proposition; and <span class="m">X ≈ h[X]</span> via h. By transitivity of ≈, X ≈ ℕ.</p>
<p><b>(a) Countable (denumerable).</b> ℚ⁻ is infinite (<span class="m">n ↦ −(n+1)</span> is 1-1 into it) and the 1-1 map <span class="m">ℚ → ℕ</span> from the previous problem restricts to a 1-1 map ℚ⁻ → ℕ. By the lemma ℚ⁻ is denumerable.</p>
<p><b>(b) Countable (denumerable).</b> C is infinite (<span class="m">n ↦ 2 + 1/(n+2)</span> is 1-1 into C) and C ⊆ ℚ, so restrict the 1-1 map ℚ → ℕ; apply the lemma.</p>
<p><b>(c) Uncountable. Proof by contradiction.</b> Assume for a contradiction that B is countable. B is infinite (<span class="m">n ↦ 2 + √2/(n+2)</span> is 1-1 into B, since <span class="m">√2/(n+2)</span> is irrational), so B is denumerable: <span class="m">B = {b₀, b₁, …}</span>; also <span class="m">C = {c₀, c₁, …}</span> by (b). <span class="m">B ∩ C = ∅</span> and <span class="m">B ∪ C = (2, 3)</span>. The map <span class="m">ℕ → (2, 3)</span>, <span class="m">2k ↦ b<sub>k</sub>, 2k+1 ↦ c<sub>k</sub></span>, is a bijection (every n is uniquely 2k or 2k+1; disjointness gives 1-1). So (2, 3) would be denumerable, contradicting that (2, 3) is uncountable. Hence B is uncountable.</p>
<p><b>(d) Countable (denumerable).</b> <span class="m">n ↦ (n, 1)</span> is a bijection ℕ → ℕ × {1}: 1-1 since <span class="m">(n,1) = (m,1) ⇒ n = m</span>; onto by definition of the set.</p></div>`,
 rubric:[`Correct verdict for each part`,`Uses an injection into ℕ / lecture proposition for countable parts`,`(c) opens with “Assume for a contradiction B countable”`,`Union of two disjoint denumerable sets handled by an explicit bijection`,`Shows infiniteness where needed`]},

{id:'b51', topic:'card', src:'Fall25 PS 8', diff:2, title:'Intervals with rational endpoints',
 statement:`Let <span class="m">S</span> be the set of open intervals <span class="m">(p, q)</span> with <span class="m">p, q ∈ ℚ</span>, <span class="m">p &lt; q</span>. Show that S is denumerable.`,
 tech:['bijection'], why:`Two injections: ℕ → S and S → ℚ × ℚ ≈ ℕ × ℕ ≈ ℕ.`,
 hints:[`<span class="m">n ↦ (n, n+1)</span> is 1-1 into S.`,`<span class="m">(p, q) ↦ (p, q) ∈ ℚ × ℚ</span> is 1-1 (an interval determines its endpoints).`,`<span class="m">ℚ × ℚ ≈ ℕ × ℕ ≈ ℕ</span>: combine bijections coordinate-wise.`],
 proof:`<div class="proof np"><p><b>Direct proof (Cantor–Bernstein).</b></p><p class="small muted">Want: 1-1 maps ℕ → S and S → ℕ.</p>
<p><b>(*)</b> <span class="m">f(n) = (n, n+1)</span>: different n give intervals with different left endpoints, so f is 1-1.</p>
<p><b>(**)</b> The interval <span class="m">(p, q)</span> determines <span class="m">p = inf</span> and <span class="m">q = sup</span>, so <span class="m">e : S → ℚ × ℚ</span>, <span class="m">(p, q) ↦ (p, q)</span> (interval ↦ ordered pair of endpoints) is 1-1. Let <span class="m">φ : ℚ → ℕ</span> be a bijection (ℚ is denumerable); then <span class="m">(p, q) ↦ (φ(p), φ(q))</span> is a 1-1 map <span class="m">ℚ × ℚ → ℕ × ℕ</span>, and <span class="m">ℕ × ℕ → ℕ, (n, m) ↦ 2<sup>n</sup>3<sup>m</sup></span> is 1-1. A composition of 1-1 maps is 1-1, so we get a 1-1 map <span class="m">S → ℕ</span>.</p>
<p>By Cantor–Bernstein, <span class="m">S ≈ ℕ</span>, and S is infinite by (*). Therefore S is denumerable.</p></div>`,
 rubric:[`Injection ℕ → S`,`Injection S → ℕ built from known denumerable sets`,`States that composition of 1-1 maps is 1-1`,`Cites Cantor–Bernstein`]},

{id:'b52', topic:'card', src:'Fall25 PS 9a', diff:2, title:'{r + n√2 : r ∈ ℚ, n ∈ ℕ} is countable',
 statement:`Determine whether <span class="m">X = {r + n√2 : r ∈ ℚ, n ∈ ℕ}</span> is countable.`,
 tech:['bijection','contradiction'], why:`The representation r + n√2 is unique, which gives a 1-1 map into ℚ × ℕ.`,
 hints:[`Show: <span class="m">r + n√2 = r′ + n′√2 ⇒ r = r′, n = n′</span> (otherwise √2 would be rational).`,`So <span class="m">r + n√2 ↦ (r, n)</span> is a well-defined 1-1 map <span class="m">X → ℚ × ℕ</span>.`],
 proof:`<div class="proof np"><p><b>Claim: X is countable (denumerable). Direct proof.</b></p><p class="small muted">Want: X infinite and a 1-1 map X → ℕ.</p>
<p><i>Unique representation.</i> Suppose <span class="m">r + n√2 = r′ + n′√2</span>. Assume for a contradiction <span class="m">n ≠ n′</span>; then <span class="m">√2 = (r − r′)/(n′ − n) ∈ ℚ</span>, contradicting irrationality of √2. So <span class="m">n = n′</span>, and then <span class="m">r = r′</span>.</p>
<p>Hence <span class="m">h : X → ℚ × ℕ</span>, <span class="m">h(r + n√2) = (r, n)</span> is well defined and 1-1. Composing with a bijection <span class="m">ℚ × ℕ → ℕ × ℕ</span> (from ℚ ≈ ℕ) and the 1-1 map <span class="m">(n, m) ↦ 2<sup>n</sup>3<sup>m</sup></span> gives a 1-1 map X → ℕ. X is infinite since it contains ℚ (take n = 0). By the lemma (infinite + 1-1 into ℕ ⇒ denumerable), X is denumerable, hence countable.</p></div>`,
 rubric:[`Correct verdict`,`Proves uniqueness of representation (else h is not well defined)`,`1-1 map into a known countable set`,`Infinite + conclusion`]},

{id:'b53', topic:'card', src:'Fall25 PS 17', diff:3, title:'Removing a denumerable set from an uncountable one',
 statement:`Prove or disprove: if <span class="m">A ⊆ B</span>, A is denumerable and B is uncountable, then <span class="m">B ∖ A</span> is uncountable.`,
 tech:['contradiction','cases'], why:`True. If B ∖ A were countable, B = A ∪ (B ∖ A) would be countable.`,
 hints:[`Assume for a contradiction that <span class="m">B ∖ A</span> is countable: finite or denumerable.`,`List <span class="m">A = {a₀, a₁, …}</span>. If <span class="m">B ∖ A = {c₀, …, c<sub>m−1</sub>}</span> is finite, shift A by m.`,`If <span class="m">B ∖ A = {c₀, c₁, …}</span>, interleave: <span class="m">2k ↦ a<sub>k</sub>, 2k+1 ↦ c<sub>k</sub></span>.`],
 proof:`<div class="proof np"><p><b>The statement is true. Proof by contradiction.</b> Suppose <span class="m">A ⊆ B</span>, A denumerable, B uncountable, and assume for a contradiction that <span class="m">B ∖ A</span> is countable.</p><p class="small muted">Want: a contradiction (B countable).</p>
<p>Write <span class="m">A = {a₀, a₁, a₂, …}</span> (distinct). Note <span class="m">B = A ∪ (B ∖ A)</span> and <span class="m">A ∩ (B ∖ A) = ∅</span>.</p>
<p><i>Case 1: B ∖ A is finite,</i> say <span class="m">{c₀, …, c<sub>m−1</sub>}</span> (m ≥ 0). Define <span class="m">F : ℕ → B</span>, <span class="m">F(k) = c<sub>k</sub></span> for <span class="m">k &lt; m</span>, <span class="m">F(k) = a<sub>k−m</sub></span> for <span class="m">k ≥ m</span>.</p>
<p><i>Case 2: B ∖ A is denumerable,</i> <span class="m">{c₀, c₁, …}</span>. Define <span class="m">F(2k) = a<sub>k</sub></span>, <span class="m">F(2k+1) = c<sub>k</sub></span>.</p>
<p>In both cases F is 1-1 (within each list the elements are distinct, and the two lists are disjoint) and onto (every element of B is some <span class="m">a<sub>k</sub></span> or some <span class="m">c<sub>k</sub></span>, which is hit). So B is denumerable, hence countable, contradicting that B is uncountable.</p>
<p>Hence <span class="m">B ∖ A</span> is not countable; in particular it is not finite, so it is infinite. Therefore <span class="m">B ∖ A</span> is uncountable.</p></div>`,
 rubric:[`Correct verdict (true)`,`Opens with “Assume for a contradiction B ∖ A countable”`,`Splits countable into finite / denumerable`,`Explicit bijection ℕ → B in each case with 1-1 and onto`,`Concludes using the definition of uncountable (infinite and not countable)`]},

{id:'b54', topic:'card', src:'Fall25 PS 16', diff:2, title:'{0, 1} × ℝ is uncountable',
 statement:`Prove or disprove: <span class="m">{0, 1} × ℝ</span> is uncountable.`,
 tech:['contradiction'], why:`True: a countable set cannot contain a copy of ℝ.`,
 hints:[`<span class="m">x ↦ (0, x)</span> is 1-1 from ℝ.`,`If <span class="m">G : {0,1} × ℝ → ℕ</span> were a bijection, <span class="m">x ↦ G(0, x)</span> is 1-1 ℝ → ℕ.`],
 proof:`<div class="proof np"><p><b>True. Proof by contradiction.</b></p><p class="small muted">Want: {0,1} × ℝ infinite and not countable.</p>
<p>The set is infinite: <span class="m">x ↦ (0, x)</span> is 1-1 from ℝ (and ℕ ⊆ ℝ). Assume for a contradiction that it is countable; being infinite, it is denumerable, so there is a bijection <span class="m">G : {0, 1} × ℝ → ℕ</span>. Then <span class="m">h(x) = G(0, x)</span> is a 1-1 map <span class="m">ℝ → ℕ</span> (a composition of 1-1 maps). Its image <span class="m">h[ℝ] ⊆ ℕ</span> is infinite, hence denumerable (lecture), and <span class="m">ℝ ≈ h[ℝ]</span>. So ℝ is denumerable, contradicting that ℝ is uncountable.</p>
<p>Therefore <span class="m">{0, 1} × ℝ</span> is uncountable.</p></div>`,
 rubric:[`Verdict`,`Infinite shown`,`Contradiction set up correctly`,`1-1 map ℝ → ℕ derived and contradiction with ℝ uncountable`]},

{id:'b55', topic:'card', src:'Fall25 PS 18, 21', diff:2, title:'Finite intersections and finite power sets',
 statement:`(a) Prove that if A is finite and B is any set, then <span class="m">A ∩ B</span> is finite. (b) Prove that if <span class="m">𝒫(A)</span> is finite, then A is finite.`,
 tech:['direct'], why:`(a) is a subset of a finite set; (b) A is in bijection with the singletons, a subset of 𝒫(A).`,
 hints:[`(a): <span class="m">A ∩ B ⊆ A</span>; cite “a subset of a finite set is finite”.`,`(b): <span class="m">S = {{x} : x ∈ A} ⊆ 𝒫(A)</span>; <span class="m">x ↦ {x}</span> is a bijection <span class="m">A → S</span>.`],
 proof:`<div class="proof np"><p><b>(a) Direct proof.</b> Suppose A is finite. Since <span class="m">A ∩ B ⊆ A</span> and a subset of a finite set is finite (lecture 06c), <span class="m">A ∩ B</span> is finite.</p>
<p><b>(b) Direct proof.</b> Suppose 𝒫(A) is finite.</p><p class="small muted">Want: A = ∅ or A ≈ ℕₙ.</p>
<p>Let <span class="m">S = {{x} : x ∈ A}</span>. Then <span class="m">S ⊆ 𝒫(A)</span>, so S is finite. The map <span class="m">f : A → S, f(x) = {x}</span> is 1-1 (<span class="m">{x} = {y} ⇒ x = y</span>) and onto (by definition of S), so <span class="m">A ≈ S</span>. If <span class="m">S = ∅</span> then <span class="m">A = ∅</span>; otherwise <span class="m">S ≈ ℕ<sub>n</sub></span>, and by transitivity of ≈, <span class="m">A ≈ ℕ<sub>n</sub></span>. Therefore A is finite.</p></div>`,
 rubric:[`(a) cites the subset proposition`,`(b) defines the set of singletons and shows it is a subset of 𝒫(A)`,`Bijection A → S checked`,`Uses transitivity of ≈ / handles ∅`]},

{id:'b56', topic:'card', src:'Fall25 PS 11', diff:3, title:'The finite subsets of ℕ form a countable set',
 statement:`Let <span class="m">𝓕 = {F ⊆ ℕ : F is finite}</span>. Prove that 𝓕 is countable.`,
 tech:['bijection'], why:`Encode a finite set as a binary number; uniqueness of binary representation gives 1-1.`,
 hints:[`<span class="m">n ↦ {n}</span> is 1-1 ℕ → 𝓕.`,`<span class="m">β(F) = Σ<sub>k∈F</sub> 2<sup>k</sup></span> (with <span class="m">β(∅) = 0</span>).`,`Each natural number has a unique binary representation, so β is 1-1.`],
 proof:`<div class="proof np"><p><b>Direct proof (Cantor–Bernstein).</b></p><p class="small muted">Want: 1-1 maps ℕ → 𝓕 and 𝓕 → ℕ.</p>
<p><b>(*)</b> <span class="m">g(n) = {n}</span> is 1-1 since <span class="m">{n} = {m} ⇒ n = m</span>, and <span class="m">{n}</span> is finite.</p>
<p><b>(**)</b> <span class="m">β : 𝓕 → ℕ, β(F) = Σ<sub>k∈F</sub> 2<sup>k</sup></span> (a finite sum, so a natural number; <span class="m">β(∅) = 0</span>). The binary digits of <span class="m">β(F)</span> are 1 exactly at the positions in F. Since every natural number has a unique binary representation, <span class="m">β(F) = β(F′)</span> implies that F and F′ have the same elements, i.e. <span class="m">F = F′</span>. So β is 1-1.</p>
<p>By Cantor–Bernstein, <span class="m">𝓕 ≈ ℕ</span>; 𝓕 is infinite by (*). Therefore 𝓕 is denumerable, hence countable. (Contrast: 𝒫(ℕ) is uncountable by Cantor; the infinite subsets are what make it big.)</p></div>`,
 rubric:[`Both injections`,`β well defined (finite sum)`,`Injectivity via unique binary representation`,`Cantor–Bernstein + conclusion`]},

{id:'b57', topic:'card', src:'Fall25 PS 19', diff:3, title:'Making two sets disjoint: A × {1}, A × {2}',
 statement:`Let <span class="m">A₁, A₂</span> be denumerable with <span class="m">A₁ ∩ A₂ ≠ ∅</span>, and let <span class="m">Ã₁ = A₁ × {1}</span>, <span class="m">Ã₂ = A₂ × {2}</span>. Prove that <span class="m">Ã₁ ∩ Ã₂ = ∅</span> and <span class="m">card(Ã₁ ∪ Ã₂) = card(A₁ ∪ A₂)</span>.`,
 tech:['contradiction','bijection'], why:`Disjointness: second coordinates differ. Cardinality: both unions are denumerable.`,
 hints:[`An element of the intersection would have second coordinate both 1 and 2.`,`<span class="m">Ã<sub>i</sub> ≈ A<sub>i</sub> ≈ ℕ</span>; interleave two disjoint lists to get <span class="m">Ã₁ ∪ Ã₂ ≈ ℕ</span>.`,`<span class="m">A₁ ∪ A₂ = A₁ ∪ (A₂ ∖ A₁)</span>, a disjoint union of a denumerable and a countable set (see the earlier problem).`],
 proof:`<div class="proof np"><p><b>Disjointness, by contradiction.</b> Assume for a contradiction <span class="m">(x, i) ∈ Ã₁ ∩ Ã₂</span>. Then <span class="m">i = 1</span> (from Ã₁) and <span class="m">i = 2</span> (from Ã₂). Contradiction, so <span class="m">Ã₁ ∩ Ã₂ = ∅</span>.</p>
<p class="small muted">Want: Ã₁ ∪ Ã₂ ≈ ℕ and A₁ ∪ A₂ ≈ ℕ (then they are ≈ each other).</p>
<p><b>Ã₁ ∪ Ã₂ ≈ ℕ.</b> List <span class="m">A₁ = {a₀, a₁, …}</span>, <span class="m">A₂ = {b₀, b₁, …}</span>. Define <span class="m">F(2k) = (a<sub>k</sub>, 1)</span>, <span class="m">F(2k+1) = (b<sub>k</sub>, 2)</span>. F is 1-1 (within each list elements are distinct; across lists the second coordinates differ) and onto. So <span class="m">Ã₁ ∪ Ã₂</span> is denumerable.</p>
<p><b>A₁ ∪ A₂ ≈ ℕ.</b> <span class="m">A₁ ∪ A₂ = A₁ ∪ (A₂ ∖ A₁)</span>, a disjoint union. <span class="m">A₂ ∖ A₁ ⊆ A₂</span> is countable (a subset of a denumerable set, via the bijection with ℕ and the lecture proposition), i.e. finite or denumerable. As in the problem “removing a denumerable set”, interleaving (denumerable case) or shifting (finite case) gives a bijection <span class="m">ℕ → A₁ ∪ (A₂ ∖ A₁)</span>.</p>
<p>Both unions are ≈ ℕ, so by symmetry and transitivity of ≈, <span class="m">Ã₁ ∪ Ã₂ ≈ A₁ ∪ A₂</span>, i.e. they have the same cardinality.</p></div>`,
 rubric:[`Disjointness proof`,`Explicit interleaving bijection for Ã₁ ∪ Ã₂`,`Handles the overlap A₁ ∩ A₂ ≠ ∅ by splitting A₂ ∖ A₁`,`Uses symmetry/transitivity of ≈ to conclude`]},

{id:'b58', topic:'card', src:'Lecture wk06b', diff:2, title:'Gluing bijections: A ∪ B ≈ A′ ∪ B′',
 statement:`Let <span class="m">A ∩ B = ∅</span> and <span class="m">A′ ∩ B′ = ∅</span>. Prove: if <span class="m">A ≈ A′</span> and <span class="m">B ≈ B′</span>, then <span class="m">A ∪ B ≈ A′ ∪ B′</span>.`,
 tech:['direct','cases'], why:`Build h piecewise from the two bijections; prove 1-1 and onto by cases.`,
 hints:[`<span class="m">h(x) = f(x)</span> if <span class="m">x ∈ A</span>, <span class="m">g(x)</span> if <span class="m">x ∈ B</span>. Why is h well defined?`,`1-1: four cases (both in A, both in B, mixed ×2). Which hypothesis handles the mixed case?`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Suppose <span class="m">A ≈ A′</span> and <span class="m">B ≈ B′</span>: there are bijections <span class="m">f : A → A′</span>, <span class="m">g : B → B′</span>.</p><p class="small muted">Want: a bijection h : A ∪ B → A′ ∪ B′.</p>
<p>Define <span class="m">h(x) = f(x)</span> if <span class="m">x ∈ A</span> and <span class="m">h(x) = g(x)</span> if <span class="m">x ∈ B</span>. Since <span class="m">A ∩ B = ∅</span>, each x is in exactly one of A, B, so h is well defined.</p>
<p><i>h is 1-1 (by cases).</i> Let <span class="m">x₁ ≠ x₂</span>. Case 1: both in A: <span class="m">h(x₁) = f(x₁) ≠ f(x₂) = h(x₂)</span> as f is 1-1. Case 2: both in B: same with g. Case 3: <span class="m">x₁ ∈ A, x₂ ∈ B</span>: <span class="m">h(x₁) ∈ A′, h(x₂) ∈ B′</span>, and <span class="m">A′ ∩ B′ = ∅</span>, so they differ. Case 4 is symmetric to Case 3.</p>
<p><i>h is onto (by cases).</i> Let <span class="m">y ∈ A′ ∪ B′</span>. If <span class="m">y ∈ A′</span>, <span class="m">y = f(x) = h(x)</span> for some <span class="m">x ∈ A</span>; if <span class="m">y ∈ B′</span>, <span class="m">y = g(x) = h(x)</span> for some <span class="m">x ∈ B</span>.</p>
<p>So h is a bijection and <span class="m">A ∪ B ≈ A′ ∪ B′</span>.</p></div>`,
 rubric:[`Piecewise definition with well-definedness from A ∩ B = ∅`,`All 1-1 cases, mixed case uses A′ ∩ B′ = ∅`,`Onto by cases`,`Conclusion`]},

{id:'b59', topic:'card', src:'Lecture wk06c', diff:2, title:'Inclusion–exclusion for two finite sets',
 statement:`Let A, B be finite. Prove <span class="m">|A ∪ B| = |A| + |B| − |A ∩ B|</span>. You may use: for disjoint finite C, D, <span class="m">|C ∪ D| = |C| + |D|</span>, and subsets of finite sets are finite.`,
 tech:['direct'], why:`Split into disjoint pieces and use the disjoint-union formula twice.`,
 hints:[`<span class="m">A ∪ B = A ∪ (B ∖ A)</span>, disjoint.`,`<span class="m">B = (B ∖ A) ∪ (A ∩ B)</span>, disjoint.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Suppose A, B are finite.</p><p class="small muted">Want: |A ∪ B| = |A| + |B| − |A ∩ B|.</p>
<p><span class="m">B ∖ A ⊆ B</span> and <span class="m">A ∩ B ⊆ A</span> are finite. <span class="m">A ∪ B = A ∪ (B ∖ A)</span> with <span class="m">A ∩ (B ∖ A) = ∅</span>, so <span class="m">|A ∪ B| = |A| + |B ∖ A|</span> (*). Also <span class="m">B = (B ∖ A) ∪ (A ∩ B)</span>: every <span class="m">x ∈ B</span> is either not in A or in A; and these pieces are disjoint. So <span class="m">|B| = |B ∖ A| + |A ∩ B|</span> (**). Substituting <span class="m">|B ∖ A| = |B| − |A ∩ B|</span> from (**) into (*): <span class="m">|A ∪ B| = |A| + |B| − |A ∩ B|</span>.</p></div>`,
 rubric:[`Both disjoint decompositions stated and justified`,`Finiteness of pieces`,`Algebraic combination`]},

{id:'b60', topic:'card', src:'Lecture wk07a', diff:1, title:'The even numbers have the same cardinality as ℕ',
 statement:`Let <span class="m">E = {0, 2, 4, …}</span>. Prove <span class="m">|E| = |ℕ|</span>, although <span class="m">E ⊊ ℕ</span>.`,
 tech:['bijection'], why:`Equal cardinality means exactly: a bijection exists.`,
 hints:[`<span class="m">f(n) = 2n</span>.`],
 proof:`<div class="proof np"><p><b>Direct proof.</b> Let <span class="m">f : ℕ → E, f(n) = 2n</span>.</p><p class="small muted">Want: f is a bijection.</p>
<p><i>1-1:</i> let <span class="m">n₁ ≠ n₂</span>; then <span class="m">2n₁ ≠ 2n₂</span>. <i>Onto:</i> let <span class="m">e ∈ E</span>; e is even, so <span class="m">e = 2k</span> for some <span class="m">k ∈ ℕ</span>, i.e. <span class="m">e = f(k)</span>. Therefore f is a bijection and <span class="m">|E| = |ℕ|</span>.</p></div>`,
 rubric:[`Explicit map`,`1-1`,`Onto`,`Uses the definition |X| = |Y| ⇔ bijection`]}
);

DATA.pd.push(
{topic:'card', src:'Fall25 PS 17', s:`If <span class="m">A ⊆ B</span>, A is denumerable and B is uncountable, then <span class="m">B ∖ A</span> is uncountable.`, a:true,
 why:`<p>If <span class="m">B ∖ A</span> were countable, then <span class="m">B = A ∪ (B ∖ A)</span> (a disjoint union of a denumerable and a countable set) would be denumerable by interleaving/shifting the two lists. Contradiction.</p>`},
{topic:'card', src:'Fall25 PS 16', s:`<span class="m">{0, 1} × ℝ</span> is uncountable.`, a:true,
 why:`<p><span class="m">x ↦ (0, x)</span> is 1-1 from ℝ; a bijection to ℕ would give a 1-1 map ℝ → ℕ, making ℝ countable.</p>`},
{topic:'card', src:'Fall25 PS 12d', s:`<span class="m">ℝ × ℝ</span> is countable.`, a:false,
 why:`<p>It contains <span class="m">ℝ × {0} ≈ ℝ</span>. If ℝ × ℝ were countable, the 1-1 map <span class="m">x ↦ (x, 0)</span> composed with a bijection to ℕ would make ℝ countable. (In fact <span class="m">ℝ × ℝ ≈ ℝ</span>.)</p>`},
{topic:'card', src:'Fall25 PS 12a', s:`<span class="m">(2, 3) ∖ ℚ</span> is countable.`, a:false,
 why:`<p>(2, 3) is uncountable and <span class="m">(2, 3) ∩ ℚ</span> is countable; if the irrationals in (2, 3) were countable, (2, 3) would be a union of two countable sets, hence countable.</p>`},
{topic:'card', src:'Fall25 PS 12b', s:`<span class="m">(2, 3) ∩ ℚ</span> is countable.`, a:true,
 why:`<p>It is an infinite subset of ℚ, and ℚ is denumerable; restrict an injection ℚ → ℕ.</p>`},
{topic:'card', src:'Fall25 PS 5', s:`The set of negative rationals is uncountable.`, a:false,
 why:`<p>It is an infinite subset of the denumerable set ℚ, so it is denumerable (countable).</p>`},
{topic:'card', src:'Fall25 PS 9b', s:`<span class="m">{x ∈ ℝ : ax² + bx + c = 0 for some a, b, c ∈ ℚ, not all 0}</span> is countable.`, a:true,
 why:`<p>Countable: <span class="m">ℚ³</span> is countable, each nonzero polynomial has at most 2 real roots, and a countable union of finite sets is countable. Watch the wording on the exam: without “not all 0”, <span class="m">a = b = c = 0</span> is allowed, every real x is a solution, and the set is all of ℝ. Point this out if the question is ambiguous.</p>`},
{topic:'card', src:'Lecture wk07a', s:`<span class="m">𝒫(ℕ)</span> is countable.`, a:false,
 why:`<p>Cantor's theorem: <span class="m">|ℕ| &lt; |𝒫(ℕ)|</span>, so there is no bijection ℕ → 𝒫(ℕ); and 𝒫(ℕ) is infinite (it contains every {n}). So 𝒫(ℕ) is uncountable.</p>`},
{topic:'card', src:'Fall25 PS 11', s:`The set of all <b>finite</b> subsets of ℕ is countable.`, a:true,
 why:`<p><span class="m">F ↦ Σ<sub>k∈F</sub> 2<sup>k</sup></span> is 1-1 into ℕ (unique binary representation), and <span class="m">n ↦ {n}</span> is 1-1 back. Cantor–Bernstein.</p>`},
{topic:'card', s:`If <span class="m">E ⊊ ℕ</span> is infinite, then <span class="m">|E| &lt; |ℕ|</span>.`, a:false,
 why:`<p>Every infinite subset of ℕ is denumerable, so <span class="m">|E| = |ℕ|</span>. Example: evens, <span class="m">n ↦ 2n</span>. Infinite sets can be equinumerous with proper subsets.</p>`},
{topic:'card', s:`A countable union of two denumerable sets is denumerable (e.g. <span class="m">A ∪ B</span> with A, B denumerable).`, a:true,
 why:`<p>Write <span class="m">A ∪ B = A ∪ (B ∖ A)</span>, disjoint; <span class="m">B ∖ A</span> is countable; interleave (<span class="m">2k ↦ a<sub>k</sub>, 2k+1 ↦ c<sub>k</sub></span>) or shift if <span class="m">B ∖ A</span> is finite.</p>`},
{topic:'card', s:`If there is a 1-1 map <span class="m">f : X → Y</span> and a 1-1 map <span class="m">g : Y → X</span>, then <span class="m">X ≈ Y</span>.`, a:true,
 why:`<p>This is the Cantor–Bernstein theorem (no proof required in this course, but you must cite it by name).</p>`}
);

DATA.bugs.push(
{topic:'card', claim:`ℝ is countable.`,
 lines:[[`ℚ is denumerable, so list <span class="m">ℚ = {q₀, q₁, q₂, …}</span>.`,`lecture-style fact`],
  [`Every real number is a limit of rationals.`,`density`],
  [`So every real x is “reached” by the list, i.e. there is n with <span class="m">x = q<sub>n</sub></span>.`,`inference`],
  [`Hence <span class="m">n ↦ q<sub>n</sub></span> is onto ℝ, and ℝ is countable.`,`conclusion`]],
 bad:[2], explain:`<p>Being a limit of rationals does not make x <i>equal</i> to some rational; √2 is not on the list. The claim is false: ℝ ≈ (−1, 1) and intervals are uncountable by the diagonal argument.</p>`},
{topic:'card', claim:`ℕ × ℕ is uncountable.`,
 lines:[[`The map <span class="m">f : ℕ → ℕ × ℕ, f(n) = (n, 0)</span> is 1-1.`,`construction`],
  [`f is not onto: <span class="m">(0, 1)</span> is not in the image.`,`check`],
  [`So there is no bijection between ℕ and ℕ × ℕ.`,`inference`],
  [`Hence ℕ × ℕ is uncountable.`,`conclusion`]],
 bad:[2], explain:`<p>One particular map failing to be onto says nothing about <i>all</i> maps. In fact <span class="m">(n, m) ↦ 2<sup>n</sup>3<sup>m</sup></span> is 1-1 back into ℕ, so by Cantor–Bernstein ℕ × ℕ ≈ ℕ. The claim is false.</p>`}
);

DATA.cards.push(
['card',`<span class="m">A ≈ B</span> (equinumerous) means…`,`There exists a bijection A → B. (|A| = |B|.) ≈ is reflexive, symmetric, transitive.`],
['card',`Finite set`,`A = ∅ or A ≈ ℕₙ = {1, …, n} for some n ≥ 1; then |A| = card A = n. Infinite = not finite.`],
['card',`Denumerable / countable / uncountable`,`Denumerable: infinite and ≈ ℕ (ℕ = {0, 1, 2, …}). Countable: finite or denumerable. Uncountable: infinite and not countable.`],
['card',`Recipe: show X is uncountable`,`(i) Show X is infinite. (ii) Show there is no bijection ℕ → X (diagonal argument / contradiction, or embed a known uncountable set).`],
['card',`Cantor–Bernstein theorem`,`If ∃ 1-1 f : X → Y and ∃ 1-1 g : Y → X, then X ≈ Y. Proof not required; cite it by name. Standard way to show denumerable.`],
['card',`Cantor’s theorem`,`|A| &lt; |𝒫(A)| for every A. Diagonal set B = {x ∈ A : x ∉ φ(x)}; if φ(x₀) = B, both x₀ ∈ B and x₀ ∉ B are contradictory.`],
['card',`1-1 maps ℕ × ℕ → ℕ and ℕ → ℕ × ℕ`,`(n, m) ↦ 2ⁿ3ᵐ (1-1 by parity/unique factorisation) and n ↦ (n, 3).`],
['card',`Infinite subsets of ℕ`,`Always denumerable (list in increasing order by well-ordering + Cantor–Bernstein). So every subset of ℕ is countable.`],
['card',`Finite-set cardinality rules`,`|A ∪ B| = |A| + |B| − |A ∩ B|; |A × B| = |A||B|; |𝒫(A)| = 2^|A|; A ⊆ B ⇒ |A| ≤ |B|; 1-1 ⇒ |X| ≤ |Y|; onto ⇒ |X| ≥ |Y|.`],
['card',`Continuum hypothesis`,`No set X with |ℕ| &lt; |X| &lt; |𝒫(ℕ)|. Allowed in the course, but you must write “due to the continuum hypothesis”.`],
['card',`Listing characterisation`,`An infinite X is denumerable ⇔ X = {x₀, x₁, x₂, …} with distinct xᵢ. Useful to build interleaving bijections 2k ↦ aₖ, 2k+1 ↦ cₖ.`]
);
