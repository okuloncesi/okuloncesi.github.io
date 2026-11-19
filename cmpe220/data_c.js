// Block C: relations, orders & supremum, functions.
// Notation follows the lectures: R ⊆ A × B, xRy, R⁻¹, S∘R = "first R, then S", I_A identity relation,
// f[A] image, f←(B) preimage, ℕ = {0,1,2,…}.

/* =========================== RELATIONS =========================== */
DATA.problems.push(
{id:'c01', topic:'rel', src:'Relations PS Q1 (Fall’25)', diff:1, title:'Property table for two finite relations',
statement:`Let <span class="m">X = {a, b, c}</span>. For each relation decide whether it is reflexive, irreflexive, symmetric, asymmetric, antisymmetric and transitive. Justify every answer.<br>(a) <span class="m">R₁ = {(a,a), (b,b), (a,b), (b,a)}</span><br>(b) <span class="m">R₂ = {(a,b), (b,c), (a,c), (a,a)}</span>`,
tech:['props','counter'], why:`Each property is a ∀-statement: a “yes” needs a check of every case, a “no” needs one concrete witness of the negation.`,
hints:[`Write each negation with ∃ first, e.g. “not reflexive” ≡ ∃x ∈ X, (x,x) ∉ R.`,
`For R₁, look at c: is (c,c) there? For transitivity list every chain xRy, yRz and check xRz.`,
`R₂ contains (a,a). What does that do to asymmetry? (Asymmetric forbids every diagonal pair.)`],
proof:`<div class="proof np"><p><b>Proof (each property separately).</b></p><p class="small muted">Want: For each property, either a check of all pairs/chains (yes) or one explicit witness of the negation (no).</p><p><b>(a) R₁.</b></p><ul>
<li><b>Reflexive: no.</b> (c,c) ∉ R₁.</li>
<li><b>Irreflexive: no.</b> (a,a) ∈ R₁.</li>
<li><b>Symmetric: yes.</b> The only off-diagonal pairs are (a,b) and (b,a), and each one’s reverse is in R₁; diagonal pairs are their own reverse.</li>
<li><b>Asymmetric: no.</b> (a,b) ∈ R₁ and (b,a) ∈ R₁.</li>
<li><b>Antisymmetric: no.</b> (a,b), (b,a) ∈ R₁ but a ≠ b.</li>
<li><b>Transitive: yes.</b> Chains through distinct elements: a→b→a needs (a,a) ✓; b→a→b needs (b,b) ✓. Every chain using a diagonal pair, e.g. (a,a),(a,b), gives back a pair already in R₁.</li></ul>
<p><b>(b) R₂.</b></p><ul>
<li><b>Reflexive: no.</b> (b,b) ∉ R₂.</li>
<li><b>Irreflexive: no.</b> (a,a) ∈ R₂.</li>
<li><b>Symmetric: no.</b> (a,b) ∈ R₂ but (b,a) ∉ R₂.</li>
<li><b>Asymmetric: no.</b> Take x = y = a: (a,a) ∈ R₂ and its reverse (a,a) ∈ R₂.</li>
<li><b>Antisymmetric: yes.</b> The only x, y with (x,y) and (y,x) both in R₂ are x = y = a.</li>
<li><b>Transitive: yes.</b> Chains: (a,b),(b,c) → (a,c) ✓; (a,a),(a,b) → (a,b) ✓; (a,a),(a,c) → (a,c) ✓; (a,a),(a,a) → (a,a) ✓. Nothing starts at c, and b only reaches c, which reaches nothing.</li></ul><p><b>Conclusion.</b> Therefore R₁ is symmetric and transitive only; R₂ is antisymmetric and transitive only.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Every “no” backed by one explicit pair (a witness of the ∃-negation)`,`Every “yes” justified by checking all relevant pairs/chains`,`Asymmetry ruled out using the diagonal pair (a,a) in R₂`,`Transitivity checked through all chains, including ones with diagonal pairs`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`“Not reflexive” is not the same as “irreflexive”: R₁ and R₂ are neither. The lecturer stresses this.`},

{id:'c02', topic:'rel', src:'R+F PS Q2', diff:1, title:'a R b ⇔ a + b is even',
statement:`On ℤ define <span class="m">aRb ⇔ a + b is even</span>. Prove that R is an equivalence relation, find [0] and [1], and say how many classes there are. Is R antisymmetric?`,
tech:['props'], why:`An equivalence relation is defined by three properties; prove each one directly from the definition of “even”.`,
hints:[`Reflexive: a + a = 2a.`,`Transitive: from a + b = 2m and b + c = 2n, add the equations.`,`a + c = 2(m + n − b). For antisymmetry try a = 1, b = 3.`],
proof:`<div class="proof np"><p><b>Proof (direct, one property at a time). Let a, b, c ∈ ℤ be arbitrary.</b></p><p class="small muted">Want: aRa; aRb ⇒ bRa; aRb ∧ bRc ⇒ aRc.</p><p><b>Reflexive.</b> Let a ∈ ℤ be arbitrary. a + a = 2a is even, so aRa.</p>
<p><b>Symmetric.</b> Assume aRb, so a + b = 2m for some m ∈ ℤ. Then b + a = a + b = 2m, so bRa.</p>
<p><b>Transitive.</b> Assume aRb and bRc: a + b = 2m and b + c = 2n with m, n ∈ ℤ. Adding, a + c + 2b = 2(m + n), so a + c = 2(m + n − b) with m + n − b ∈ ℤ. Hence aRc.</p>
<p>So R is an equivalence relation. <b>Classes:</b> [0] = {x : x + 0 even} = {2k : k ∈ ℤ}, [1] = {x : x + 1 even} = {2k + 1 : k ∈ ℤ}. Every integer is even or odd, so there are exactly <b>two</b> classes.</p>
<p><b>Not antisymmetric:</b> 1R3 and 3R1 (1 + 3 = 4 is even) but 1 ≠ 3.</p><p><b>Conclusion.</b> Therefore R is an equivalence relation on ℤ with exactly two classes, and it is not antisymmetric.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Reflexivity starts from an arbitrary a`,`Transitivity: introduces two witnesses m, n (different letters) and exhibits the integer m + n − b`,`Both classes written as sets`,`Counterexample for antisymmetry`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c03', topic:'rel', src:'R+F PS Q3 · Lecture wk04a', diff:1, title:'a R b ⇔ 5 ∣ (2a − 2b)',
statement:`On ℤ define <span class="m">aRb ⇔ 5 ∣ (2a − 2b)</span>. Prove that R is an equivalence relation, find [3], count the classes and give a set of representatives.`,
tech:['props'], why:`Reduce to 5 ∣ (a − b), then check reflexive, symmetric, transitive from the definition of divisibility.`,
hints:[`2a − 2b = 2(a − b) and gcd(2, 5) = 1, so 5 ∣ 2(a − b) ⇔ 5 ∣ (a − b) (Euclid’s lemma, 5 prime).`,`Transitive: a − c = (a − b) + (b − c).`,`[3] = {x : x ≡ 3 (mod 5)}.`],
proof:`<div class="proof np"><p><b>Proof (direct, one property at a time). Let a, b, c ∈ ℤ be arbitrary.</b></p><p class="small muted">Want: R reflexive, symmetric and transitive; [3]; number of classes.</p><p>Since 5 is prime and 5 ∤ 2, 5 ∣ 2(a − b) ⇔ 5 ∣ (a − b). So aRb ⇔ 5 ∣ (a − b).</p>
<p><b>Reflexive.</b> Let a ∈ ℤ. a − a = 0 = 5·0, so 5 ∣ (a − a): aRa.</p>
<p><b>Symmetric.</b> Assume aRb: a − b = 5k, k ∈ ℤ. Then b − a = 5(−k) with −k ∈ ℤ, so bRa.</p>
<p><b>Transitive.</b> Assume aRb and bRc: a − b = 5k and b − c = 5ℓ. Then a − c = 5(k + ℓ), so aRc.</p>
<p><b>Classes.</b> [3] = {3 + 5k : k ∈ ℤ}. Every integer has exactly one remainder in {0,1,2,3,4} on division by 5, so there are exactly 5 classes, and {0, 1, 2, 3, 4} is a set of representatives.</p><p><b>Conclusion.</b> Therefore R is an equivalence relation with five classes [0], [1], [2], [3], [4].</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Justifies removing the factor 2 (5 prime, or gcd(2,5)=1)`,`Three properties each proved with explicit integer witnesses`,`[3] written as a set`,`5 classes with a reason (division algorithm)`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecture wk04a proves the same thing for 7 ∣ (n − m) on ℤ, and also shows it is not antisymmetric: 7R14, 14R7, 7 ≠ 14.`},

{id:'c04', topic:'rel', src:'Relations PS Q2 (Fall’25)', diff:1, title:'a R b ⇔ |a| = |b|',
statement:`For a, b ∈ ℝ let <span class="m">aRb ⇔ |a| = |b|</span>. (a) Show R is an equivalence relation on ℝ. (b) Determine the class ā of each a ∈ ℝ.`,
tech:['props'], why:`R is “same value of |·|”, so each property is inherited from equality.`,
hints:[`Write aRb ⇔ f(a) = f(b) with f(t) = |t|.`,`|x| = |a| ⇔ x = a or x = −a.`,`Treat a = 0 separately.`],
proof:`<div class="proof np"><p><b>Proof (direct). Let a, b, c ∈ ℝ be arbitrary.</b></p><p class="small muted">Want: R reflexive, symmetric, transitive; ā for every a.</p><p>Let f(t) = |t|, so aRb ⇔ f(a) = f(b).</p>
<p><b>Reflexive.</b> f(a) = f(a). <b>Symmetric.</b> f(a) = f(b) ⇒ f(b) = f(a). <b>Transitive.</b> f(a) = f(b) and f(b) = f(c) ⇒ f(a) = f(c). So R is an equivalence relation.</p>
<p><b>Classes.</b> ā = {x ∈ ℝ : |x| = |a|} = {a, −a}. So 0̄ = {0}, and for a ≠ 0, ā = {a, −a} has two elements.</p><p><b>Conclusion.</b> Therefore R is an equivalence relation and ā = {a, −a}.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`All three properties checked`,`ā written as a set {a, −a}`,`Special case a = 0 noted`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c05', topic:'rel', src:'Relations1 Q2', diff:2, title:'a R b ⇔ a² − b² = 2(a − b)',
statement:`For a, b ∈ ℝ define <span class="m">aRb ⇔ a² − b² = 2(a − b)</span>. (a) Show R is an equivalence relation. (b) Find the class ā of every a ∈ ℝ.`,
tech:['props'], why:`Rearranging shows R is “same value of t ↦ t² − 2t”, which gives all three properties at once.`,
hints:[`Move terms: a² − 2a = b² − 2b.`,`Define f(t) = t² − 2t; then aRb ⇔ f(a) = f(b).`,`For the class, factor x² − a² − 2(x − a) = (x − a)(x + a − 2).`],
proof:`<div class="proof np"><p><b>Proof (direct). Let a, b, c ∈ ℝ be arbitrary.</b></p><p class="small muted">Want: R reflexive, symmetric, transitive; ā = {x : xRa}.</p><p>a² − b² = 2a − 2b ⇔ a² − 2a = b² − 2b. With f(t) = t² − 2t, aRb ⇔ f(a) = f(b).</p>
<p><b>Reflexive:</b> f(a) = f(a). <b>Symmetric:</b> f(a) = f(b) ⇒ f(b) = f(a). <b>Transitive:</b> f(a) = f(b) ∧ f(b) = f(c) ⇒ f(a) = f(c). So R is an equivalence relation.</p>
<p><b>Classes.</b> x ∈ ā ⇔ x² − a² = 2(x − a) ⇔ (x − a)(x + a) − 2(x − a) = 0 ⇔ (x − a)(x + a − 2) = 0 ⇔ x = a or x = 2 − a.</p>
<p>If a = 1 then 2 − a = 1, so 1̄ = {1}. If a ≠ 1, ā = {a, 2 − a} (two elements).</p><p><b>Conclusion.</b> Therefore R is an equivalence relation, with ā = {a, 2 − a} (and 1̄ = {1}).</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Rewrites R as f(a) = f(b) (or checks the three properties by algebra)`,`Factors correctly to (x − a)(x + a − 2) = 0`,`Gives ā = {a, 2 − a}`,`Handles a = 1 separately`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c06', topic:'rel', src:'Relations1 Q3', diff:2, title:'Same distance from the origin',
statement:`On <span class="m">A = ℝ × ℝ</span> define <span class="m">(x₁,y₁) R (x₂,y₂) ⇔ x₁² + y₁² = x₂² + y₂²</span>. (a) Show R is an equivalence relation. (b) Find [(3,4)] and describe [(x,y)] geometrically.`,
tech:['props'], why:`R is “same value of g(x,y) = x² + y²”.`,
hints:[`g(x,y) = x² + y².`,`g(3,4) = 25.`,`Separate the origin from the other points.`],
proof:`<div class="proof np"><p><b>Proof (direct). Let p, q, r ∈ ℝ² be arbitrary.</b></p><p class="small muted">Want: R reflexive, symmetric, transitive; describe [(x,y)].</p><p>Let g(x,y) = x² + y². Then p R q ⇔ g(p) = g(q), and reflexivity, symmetry and transitivity follow from those of equality (g(p) = g(p); g(p) = g(q) ⇒ g(q) = g(p); g(p) = g(q) ∧ g(q) = g(r) ⇒ g(p) = g(r)).</p>
<p>[(3,4)] = {(x,y) ∈ ℝ² : x² + y² = 25}: the circle of radius 5 centred at the origin.</p>
<p>In general [(0,0)] = {(0,0)}, and for (x,y) ≠ (0,0) the class is the circle centred at the origin with radius r = √(x² + y²) &gt; 0.</p><p><b>Conclusion.</b> Therefore R is an equivalence relation whose classes are the origin and the circles centred at the origin.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Three properties justified`,`[(3,4)] given as a set`,`Origin treated separately; other classes are circles of radius √(x²+y²)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c07', topic:'rel', src:'Relations PS Q3 (Fall’25)', diff:2, title:'Nonzero scalar multiples',
statement:`On <span class="m">A = ℝ × ℝ</span> define <span class="m">(x,y) R (x′,y′) ⇔ (x′,y′) = k(x,y) for some k ∈ ℝ ∖ {0}</span>. (a) Show R is an equivalence relation. (b) Find the class of (x,y) ≠ (0,0).`,
tech:['props'], why:`Each property needs a specific nonzero scalar: 1, 1/k, and k₁k₂.`,
hints:[`Reflexive: k = 1.`,`Symmetric: if (x′,y′) = k(x,y) with k ≠ 0, then (x,y) = (1/k)(x′,y′).`,`Transitive: product of nonzero reals is nonzero.`],
proof:`<div class="proof np"><p><b>Proof (direct). Let (x,y), (x′,y′), (x″,y″) ∈ ℝ² be arbitrary.</b></p><p class="small muted">Want: For each property, a nonzero scalar k that works.</p><p><b>Reflexive.</b> (x,y) = 1·(x,y) and 1 ≠ 0.</p>
<p><b>Symmetric.</b> Assume (x′,y′) = k(x,y), k ≠ 0. Then 1/k exists, 1/k ≠ 0, and (x,y) = (1/k)(x′,y′). So (x′,y′) R (x,y).</p>
<p><b>Transitive.</b> Assume (x′,y′) = k₁(x,y) and (x″,y″) = k₂(x′,y′) with k₁, k₂ ≠ 0. Then (x″,y″) = (k₂k₁)(x,y) and k₂k₁ ≠ 0. So (x,y) R (x″,y″).</p>
<p><b>Classes.</b> For (x,y) ≠ (0,0): [(x,y)] = {(kx, ky) : k ≠ 0}, the line through the origin and (x,y) <b>with the origin removed</b> (k = 0 is excluded, and no nonzero multiple of a nonzero vector is (0,0)). Also [(0,0)] = {(0,0)}.</p><p><b>Conclusion.</b> Therefore R is an equivalence relation, and each class of a nonzero point is a punctured line through the origin.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Explicit scalar for each property (1, 1/k, k₂k₁)`,`States why each scalar is nonzero`,`Class = line through origin minus the origin`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Forgetting to remove the origin is the typical slip: (0,0) = 0·(x,y) but k = 0 is not allowed.`},

{id:'c08', topic:'rel', src:'R+F PS Q4 · Relations1 Q5 · Relations PS Q5', diff:2, title:'Lines x + y = c form a partition',
statement:`(a) On ℝ² let <span class="m">(x₁,y₁) R (x₂,y₂) ⇔ x₁ + y₁ = x₂ + y₂</span>. Prove R is an equivalence relation and describe its classes.<br>(b) For c ∈ ℝ let <span class="m">B_c = {(x,y) ∈ ℝ² : 2x + 3y = c}</span>. Prove that (B_c)<sub>c∈ℝ</sub> is a partition of ℝ².`,
tech:['props'], why:`(a) is a “same value” relation; for (b) check the three partition conditions: blocks nonempty, pairwise disjoint, union is everything.`,
hints:[`(a) F(x,y) = x + y. Class of (a,b): the line y = −x + (a + b).`,`(b) Nonempty: find one point on 2x + 3y = c, e.g. (0, c/3).`,`(b) Disjoint: a point in B_{c₁} ∩ B_{c₂} forces c₁ = c₂. Cover: for (x₀,y₀) take c₀ = 2x₀ + 3y₀.`],
proof:`<div class="proof np"><p><b>Proof (direct; for (b) check the three partition conditions).</b></p><p class="small muted">Want: (a) R reflexive, symmetric, transitive. (b) every B_c ≠ ∅; c₁ ≠ c₂ ⇒ B_{c₁} ∩ B_{c₂} = ∅; ⋃B_c = ℝ².</p><p><b>(a)</b> With F(x,y) = x + y, pRq ⇔ F(p) = F(q); reflexive, symmetric, transitive follow from equality. [(a,b)] = {(x,y) : x + y = a + b}, the line of slope −1 through (a,b). E.g. [(1,3)] = [(4,0)] since 1 + 3 = 4 + 0.</p>
<p><b>(b) Nonempty.</b> For every c, (0, c/3) ∈ B_c since 2·0 + 3·(c/3) = c.</p>
<p><b>Pairwise disjoint.</b> Let c₁ ≠ c₂ and suppose (x,y) ∈ B_{c₁} ∩ B_{c₂}. Then c₁ = 2x + 3y = c₂, a contradiction. So B_{c₁} ∩ B_{c₂} = ∅.</p>
<p><b>Cover.</b> Each B_c ⊆ ℝ², so ⋃B_c ⊆ ℝ². Conversely, let (x₀,y₀) ∈ ℝ² and c₀ = 2x₀ + 3y₀ ∈ ℝ. Then (x₀,y₀) ∈ B_{c₀} ⊆ ⋃B_c. So ⋃<sub>c∈ℝ</sub> B_c = ℝ².</p>
<p>Hence (B_c) is a partition of ℝ². (Same proof for A_r = {(x,y) : x − y = r}: use (r, 0) for nonemptiness.)</p><p><b>Conclusion.</b> Therefore R is an equivalence relation and (B_c)<sub>c∈ℝ</sub> is a partition of ℝ².</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`All three partition conditions named and proved`,`Nonemptiness with an explicit point`,`Disjointness for c₁ ≠ c₂`,`Cover proved in both directions (⊆ trivially, ⊇ with c₀)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c09', topic:'rel', src:'WrapUp 2 P1', diff:3, title:'Intersection, union and composition of equivalence relations',
statement:`Let R, S be equivalence relations on A, with <span class="m">S∘R = {(a,c) : ∃b (aRb ∧ bSc)}</span>.<br>(a) Prove R ∩ S is an equivalence relation.<br>(b) Show R ∪ S need not be one.<br>(c) Show S∘R need not be one.<br>(d) Prove S∘R is an equivalence relation ⇔ S∘R = R∘S.`,
tech:['props','counter','iff'], why:`(a) checks the three properties; (b),(c) need a counterexample; (d) is an iff, so two directions, using (S∘R)⁻¹ = R⁻¹∘S⁻¹.`,
hints:[`(b),(c): on A = {1,2,3} take R from the partition {{1,2},{3}} and S from {{1},{2,3}}.`,`(d ⇒): symmetric means X = X⁻¹. Prove (S∘R)⁻¹ = R⁻¹∘S⁻¹, and R⁻¹ = R, S⁻¹ = S.`,`(d ⇐) transitivity: from a R b S c R d S e, swap the middle S-step and R-step using R∘S = S∘R, then shorten R R and S S by transitivity.`],
proof:`<div class="proof np"><p><b>Proof. (a) direct; (b), (c) counterexamples; (d) biconditional, proving (⇒) and (⇐) separately.</b></p><p class="small muted">Want: (d) S∘R equivalence ⇔ S∘R = R∘S.</p><p><b>(a)</b> Reflexive: (a,a) ∈ R and ∈ S. Symmetric: (a,b) ∈ R ∩ S ⇒ (b,a) ∈ R and ∈ S. Transitive: (a,b),(b,c) ∈ R ∩ S ⇒ (a,c) ∈ R (R transitive) and (a,c) ∈ S; so (a,c) ∈ R ∩ S.</p>
<p><b>(b)</b> A = {1,2,3}, R = I_A ∪ {(1,2),(2,1)}, S = I_A ∪ {(2,3),(3,2)}. Then (1,2),(2,3) ∈ R ∪ S but (1,3) ∉ R ∪ S: not transitive.</p>
<p><b>(c)</b> Same R, S. (1,3) ∈ S∘R since 1R2 and 2S3. But (3,1) ∉ S∘R: the only b with 3Rb is b = 3, and 3S1 fails. So S∘R is not symmetric.</p>
<p><b>(d) Lemma.</b> (S∘R)⁻¹ = R⁻¹∘S⁻¹: (c,a) ∈ (S∘R)⁻¹ ⇔ ∃b (aRb ∧ bSc) ⇔ ∃b (c S⁻¹ b ∧ b R⁻¹ a) ⇔ (c,a) ∈ R⁻¹∘S⁻¹. Also a relation X is symmetric ⇔ X = X⁻¹, so R⁻¹ = R and S⁻¹ = S.</p>
<p>(⇒) If S∘R is an equivalence relation it is symmetric, so S∘R = (S∘R)⁻¹ = R⁻¹∘S⁻¹ = R∘S.</p>
<p>(⇐) Assume S∘R = R∘S. <i>Reflexive:</i> aRa and aSa give (a,a) ∈ S∘R. <i>Symmetric:</i> (S∘R)⁻¹ = R∘S = S∘R. <i>Transitive:</i> let (a,c),(c,e) ∈ S∘R: there are b, d with aRb, bSc, cRd, dSe. Then (b,d) ∈ R∘S = S∘R, so there is c′ with bRc′ and c′Sd. By transitivity of R, aRb ∧ bRc′ ⇒ aRc′; by transitivity of S, c′Sd ∧ dSe ⇒ c′Se. So (a,e) ∈ S∘R.</p><p><b>Conclusion.</b> Therefore R ∩ S is always an equivalence relation, R ∪ S and S∘R need not be, and S∘R is one exactly when R and S commute.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) three properties, each using the property in both R and S`,`(b) and (c) explicit small counterexample with the failing pair named`,`(d) proves or cites (S∘R)⁻¹ = R⁻¹∘S⁻¹ and symmetric ⇔ X = X⁻¹`,`(d ⇐) transitivity: correctly uses the commuting hypothesis once, then transitivity of R and of S`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c10', topic:'rel', src:'WrapUp 2 P2', diff:2, title:'Fractions: (a,b) ∼ (c,d) ⇔ ad = bc',
statement:`On <span class="m">A = ℤ × (ℤ ∖ {0})</span> define <span class="m">(a,b) ∼ (c,d) ⇔ ad = bc</span>.<br>(a) Prove ∼ is an equivalence relation.<br>(b) Show that on all of ℤ × ℤ the same rule is not transitive.<br>(c) Describe [(2,4)] and [(0,5)].`,
tech:['props','counter'], why:`Reflexive and symmetric are one line each; transitivity needs cancellation, which is exactly where b ≠ 0 is used.`,
hints:[`Transitive: from ad = bc and cf = de, show af = be. Multiply the first equation by f.`,`(af)d = (ad)f = (bc)f = b(cf) = b(de) = (be)d, then cancel d. Why may you cancel?`,`(b): use the middle pair (0,0).`],
proof:`<div class="proof np"><p><b>Proof (direct). Let (a,b), (c,d), (e,f) ∈ A be arbitrary.</b></p><p class="small muted">Want: ∼ reflexive, symmetric, transitive (transitive: af = be).</p><p><b>Reflexive.</b> ab = ba, so (a,b) ∼ (a,b). <b>Symmetric.</b> ad = bc ⇒ cb = da, i.e. (c,d) ∼ (a,b).</p>
<p><b>Transitive.</b> Assume (a,b) ∼ (c,d) and (c,d) ∼ (e,f): ad = bc and cf = de. Then (af)d = (ad)f = (bc)f = b(cf) = b(de) = (be)d, so d(af − be) = 0. Since (c,d) ∈ A, d ≠ 0, and a product of integers is 0 only if a factor is 0, so af = be: (a,b) ∼ (e,f).</p>
<p><b>(b)</b> In ℤ × ℤ: (1,2) ∼ (0,0) (1·0 = 2·0) and (0,0) ∼ (3,5) (0·5 = 0·3), but (1,2) ≁ (3,5) since 5 ≠ 6. The cancellation by d = 0 is impossible.</p>
<p><b>(c)</b> [(2,4)] = {(c,d) ∈ A : 2d = 4c} = {(c, 2c) : c ∈ ℤ, c ≠ 0}: all ways of writing 1/2. [(0,5)] = {(0,d) : d ≠ 0}: all ways of writing 0. In general A/∼ corresponds exactly to ℚ via [(a,b)] ↦ a/b.</p><p><b>Conclusion.</b> Therefore ∼ is an equivalence relation on ℤ × (ℤ ∖ {0}), but not on ℤ × ℤ.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Reflexive and symmetric stated`,`Transitivity via multiplying by f then cancelling d`,`Explicitly uses d ≠ 0 to cancel`,`Counterexample through (0,0) for ℤ × ℤ`,`Both classes as sets (with c ≠ 0)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c11', topic:'rel', src:'WrapUp 2 P4', diff:2, title:'Every equivalence relation is “same value of f”',
statement:`For f : A → B define <span class="m">a ∼_f a′ ⇔ f(a) = f(a′)</span>.<br>(a) Prove ∼_f is an equivalence relation whose classes are the nonempty fibres f←({y}).<br>(b) Prove every equivalence relation R on A equals ∼_f for some f.<br>(c) Find the classes of <span class="m">aTb ⇔ 3 ∣ a² − b²</span> on ℤ.<br>(d) Why is <span class="m">aNb ⇔ |a − b| ≤ 1</span> not of the form ∼_f?`,
tech:['props','construct'], why:`(a) inherits the properties of =; (b) needs a construction: the map a ↦ [a].`,
hints:[`(b) First prove [a] = [b] ⇔ aRb.`,`(b) Take f : A → A/R, f(a) = [a].`,`(c) g(a) = remainder of a² mod 3 takes only the values 0, 1. (d) Any ∼_f is transitive.`],
proof:`<div class="proof np"><p><b>Proof (direct).</b></p><p class="small muted">Want: (a) ∼_f is an equivalence, classes = nonempty fibres. (b) ∃f with R = ∼_f.</p><p><b>(a)</b> Reflexive: f(a) = f(a). Symmetric: f(a) = f(a′) ⇒ f(a′) = f(a). Transitive: f(a) = f(a′) = f(a″) ⇒ f(a) = f(a″). The class of a is {x : f(x) = f(a)} = f←({f(a)}); conversely a nonempty f←({y}) contains some a with f(a) = y and then equals [a].</p>
<p><b>(b) Fact.</b> [a] = [b] ⇔ aRb. (⇐) If aRb and x ∈ [a], then xRa, aRb give xRb, so [a] ⊆ [b]; by symmetry [b] ⊆ [a]. (⇒) a ∈ [a] = [b], so aRb.<br>Define f : A → A/R, f(a) = [a]. Then a ∼_f a′ ⇔ [a] = [a′] ⇔ aRa′. So R = ∼_f.</p>
<p><b>(c)</b> (3k)² = 3·3k², (3k ± 1)² = 3(3k² ± 2k) + 1. So with g(a) = remainder of a² mod 3, aTb ⇔ g(a) = g(b): T = ∼_g. Classes: {a : 3 ∣ a} and {a : 3 ∤ a}. Exactly two.</p>
<p><b>(d)</b> Every ∼_f is transitive by (a). N is not: 0N1, 1N2, but |0 − 2| = 2 &gt; 1.</p><p><b>Conclusion.</b> Therefore the equivalence relations on A are exactly the relations of the form ∼_f.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) properties from those of equality; classes = nonempty fibres`,`(b) proves [a] = [b] ⇔ aRb`,`(b) defines f(a) = [a] and concludes R = ∼_f`,`(c) squares mod 3 computed; two classes`,`(d) counterexample to transitivity`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c12', topic:'rel', src:'Lecture wk04a', diff:2, title:'R symmetric ⇔ R = R⁻¹',
statement:`Let R be a relation on A and <span class="m">R⁻¹ = {(y,x) : (x,y) ∈ R}</span>. Prove that R is symmetric if and only if R = R⁻¹.`,
tech:['iff','double'], why:`An iff: two directions. The (⇒) direction is a set equality, so prove two inclusions with an arbitrary pair.`,
hints:[`(⇒) Assume R symmetric. Show R ⊆ R⁻¹ and R⁻¹ ⊆ R.`,`For R⁻¹ ⊆ R: take (x,y) ∈ R⁻¹, “bring it back to R”: (y,x) ∈ R, then use symmetry.`,`(⇐) Assume R = R⁻¹ and let (x,y) ∈ R. Then (x,y) ∈ R⁻¹, so (y,x) ∈ R.`],
proof:`<div class="proof np"><p><b>Proof (biconditional). We prove (⇒) and (⇐) separately.</b></p><p class="small muted">Want: R symmetric ⇔ R = R⁻¹.</p><p><b>(⇒)</b> Assume R is symmetric.<br>(R ⊆ R⁻¹) Let (x,y) ∈ R be arbitrary. By symmetry (y,x) ∈ R, so by the definition of R⁻¹, (x,y) ∈ R⁻¹.<br>(R⁻¹ ⊆ R) Let (x,y) ∈ R⁻¹. By definition (y,x) ∈ R. By symmetry (x,y) ∈ R.<br>Hence R = R⁻¹.</p>
<p><b>(⇐)</b> Assume R = R⁻¹. Let (x,y) ∈ R be arbitrary. Then (x,y) ∈ R⁻¹, so by definition (y,x) ∈ R. So R is symmetric.</p><p><b>Conclusion.</b> Hence R is symmetric if and only if R = R⁻¹.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Labels both directions`,`Set equality via two inclusions, each with an arbitrary pair`,`Uses the definition of R⁻¹ correctly ((x,y) ∈ R⁻¹ ⇔ (y,x) ∈ R)`,`(⇐) starts from an arbitrary pair in R`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecturer: “This is an iff statement … you need to prove both directions.”`},

{id:'c13', topic:'rel', src:'Lecture wk04a (exercise)', diff:2, title:'Properties as set inclusions',
statement:`Let R be a relation on A and <span class="m">I_A = {(x,x) : x ∈ A}</span>. Prove:<br>(a) R is reflexive ⇔ I_A ⊆ R.<br>(b) R is antisymmetric ⇔ R ∩ R⁻¹ ⊆ I_A.<br>(c) R is transitive ⇔ R∘R ⊆ R.`,
tech:['iff'], why:`Each part is an iff between a property and an inclusion; prove both directions with arbitrary elements.`,
hints:[`(a ⇐) Given x ∈ A, (x,x) ∈ I_A ⊆ R.`,`(b ⇒) (x,y) ∈ R ∩ R⁻¹ means (x,y) ∈ R and (y,x) ∈ R.`,`(c ⇒) (x,z) ∈ R∘R means ∃y with xRy and yRz.`],
proof:`<div class="proof np"><p><b>Proof (biconditional, for each of (a), (b), (c)).</b></p><p class="small muted">Want: Each property ⇔ the corresponding inclusion.</p><p><b>(a)</b> (⇒) Let (x,x) ∈ I_A. R is reflexive, so (x,x) ∈ R. (⇐) Let x ∈ A. (x,x) ∈ I_A ⊆ R, so xRx.</p>
<p><b>(b)</b> (⇒) Let (x,y) ∈ R ∩ R⁻¹. Then (x,y) ∈ R and (y,x) ∈ R, so x = y by antisymmetry; hence (x,y) = (x,x) ∈ I_A. (⇐) Assume xRy and yRx. Then (x,y) ∈ R and (x,y) ∈ R⁻¹, so (x,y) ∈ R ∩ R⁻¹ ⊆ I_A, which means x = y.</p>
<p><b>(c)</b> (⇒) Let (x,z) ∈ R∘R. Then ∃y with xRy and yRz; by transitivity xRz, i.e. (x,z) ∈ R. (⇐) Assume xRy and yRz. Then (x,z) ∈ R∘R ⊆ R, so xRz.</p><p><b>Conclusion.</b> Therefore all three characterisations hold.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Each part proved in both directions`,`Correct unpacking of R ∩ R⁻¹ and R∘R`,`(b) concludes x = y from membership in I_A`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`The lecturer left these as “a good exercise”. Expect one on the exam.`},

{id:'c14', topic:'rel', src:'Lecture wk04b (Props 1–2) · WrapUp 2 P3(c)', diff:2, title:'Equivalence classes partition A',
statement:`Let R be an equivalence relation on a nonempty set A. Prove: (a) <span class="m">[a] = [b] ⇔ aRb</span>; (b) two classes are either equal or disjoint; (c) the distinct classes form a partition of A.`,
tech:['iff','props'], why:`(a) is an iff about sets; (b) follows from (a) by contrapositive; (c) checks the three partition conditions.`,
hints:[`(a ⇐) Let x ∈ [a]: xRa and aRb, so xRb by transitivity.`,`(b) If z ∈ [a] ∩ [b], then zRa and zRb. Conclude aRb.`,`(c) Nonempty by reflexivity (a ∈ [a]); cover because every a lies in [a].`],
proof:`<div class="proof np"><p><b>Proof (direct; (a) is a biconditional).</b></p><p class="small muted">Want: (a) [a] = [b] ⇔ aRb; (b) [a] ∩ [b] ≠ ∅ ⇒ [a] = [b]; (c) the three partition conditions.</p><p><b>(a)</b> (⇐) Assume aRb. If x ∈ [a], then xRa and aRb give xRb, so x ∈ [b]; thus [a] ⊆ [b]. By symmetry bRa, and the same argument gives [b] ⊆ [a]. (⇒) By reflexivity a ∈ [a] = [b], so aRb.</p>
<p><b>(b)</b> Suppose [a] ∩ [b] ≠ ∅ and pick z in it. Then zRa and zRb; by symmetry aRz, and by transitivity aRb. By (a), [a] = [b].</p>
<p><b>(c)</b> <i>Nonempty:</i> a ∈ [a] by reflexivity. <i>Pairwise disjoint:</i> distinct classes are disjoint by (b). <i>Cover:</i> every a ∈ A lies in [a], so the union of the classes is A. Hence A/R is a partition of A.</p><p><b>Conclusion.</b> Therefore the distinct equivalence classes of R form a partition of A.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) both directions, using transitivity and symmetry`,`(b) common element ⇒ aRb ⇒ equal classes`,`(c) all three partition conditions`,`Ends with an explicit conclusion sentence (“Therefore …”)`]}
);

/* =========================== ORDERS & SUP =========================== */
DATA.problems.push(
{id:'c20', topic:'ord', src:'Relations PS Q4 (Fall’25)', diff:1, title:'Divisibility is a partial order on ℤ⁺',
statement:`On ℤ⁺ let <span class="m">aRb ⇔ a ∣ b</span>. Prove that R is an order relation (partial order). Is it a total order?`,
tech:['props','counter'], why:`A partial order is reflexive, antisymmetric and transitive; “not total” needs two incomparable elements.`,
hints:[`Reflexive: a = a·1.`,`Antisymmetric: b = ak and a = bℓ give a = akℓ, so kℓ = 1. Why do positive integers force k = ℓ = 1?`,`Total? Try 2 and 3.`],
proof:`<div class="proof np"><p><b>Proof (direct, one property at a time). Let a, b, c ∈ ℤ⁺ be arbitrary.</b></p><p class="small muted">Want: ∣ reflexive, antisymmetric, transitive on ℤ⁺.</p><p><b>Reflexive.</b> a = a·1, so a ∣ a.</p>
<p><b>Antisymmetric.</b> Assume a ∣ b and b ∣ a: b = ak, a = bℓ with k, ℓ ∈ ℤ. Then a = akℓ, and a ≠ 0, so kℓ = 1. Since a, b &gt; 0, k = b/a &gt; 0 and ℓ &gt; 0, so k = ℓ = 1 and a = b.</p>
<p><b>Transitive.</b> a ∣ b and b ∣ c: b = ak, c = bℓ, so c = a(kℓ) and a ∣ c.</p>
<p>So ∣ is a partial order on ℤ⁺. <b>Not total:</b> 2 ∤ 3 and 3 ∤ 2, so 2 and 3 are incomparable.</p><p><b>Conclusion.</b> Therefore ∣ is a partial order on ℤ⁺ that is not total.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Three properties named and proved`,`Antisymmetry uses positivity (on ℤ it fails: 2 ∣ −2, −2 ∣ 2)`,`Incomparable pair for “not total”`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c21', topic:'ord', src:'R+F PS Q5', diff:2, title:'(a,b) ⪯ (c,d) ⇔ a ≤ c and b ≥ d',
statement:`On <span class="m">A = ℕ⁺ × ℕ⁺</span> let <span class="m">(a,b) ⪯ (c,d) ⇔ a ≤ c and b ≥ d</span>. (a) Prove ⪯ is a partial order. (b) Is it total? (c) Are (2,5),(4,3) comparable? (2,3),(3,4)? (d) Is there a least or a greatest element?`,
tech:['props','counter','contradiction'], why:`Check the three properties coordinate-wise; least/greatest elements are refuted by contradiction using unboundedness.`,
hints:[`Antisymmetry: a ≤ c ≤ a and b ≥ d ≥ b.`,`(2,3) vs (3,4): which inequality fails each way?`,`A least element (a,b) would need b ≥ d for every d ∈ ℕ⁺.`],
proof:`<div class="proof np"><p><b>Proof (direct for the three properties; contradiction for least/greatest).</b></p><p class="small muted">Want: ⪯ reflexive, antisymmetric, transitive; no least or greatest element.</p><p><b>Reflexive:</b> a ≤ a and b ≥ b. <b>Antisymmetric:</b> (a,b) ⪯ (c,d) and (c,d) ⪯ (a,b) give a ≤ c ≤ a and b ≥ d ≥ b, so a = c, b = d. <b>Transitive:</b> a ≤ c ≤ e and b ≥ d ≥ f give a ≤ e, b ≥ f.</p>
<p><b>Comparability.</b> (2,5) ⪯ (4,3) since 2 ≤ 4 and 5 ≥ 3. For (2,3),(3,4): (2,3) ⪯ (3,4) needs 3 ≥ 4 (false); (3,4) ⪯ (2,3) needs 3 ≤ 2 (false). Incomparable, so ⪯ is <b>not total</b>.</p>
<p><b>No least element.</b> Suppose (a,b) is least. Then (a,b) ⪯ (1, b + 1), so b ≥ b + 1, a contradiction. <b>No greatest element.</b> Suppose (a,b) is greatest. Then (a + 1, 1) ⪯ (a,b), so a + 1 ≤ a, a contradiction.</p><p><b>Conclusion.</b> Therefore ⪯ is a partial order, not total, with neither a least nor a greatest element.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Three properties proved`,`Incomparable pair shown with both directions failing`,`Least/greatest refuted with an explicit element that breaks it`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c22', topic:'ord', src:'Relations1 Q4', diff:2, title:'(a,b) R (c,d) ⇔ a ∣ c and b ≤ d',
statement:`On <span class="m">ℤ⁺ × ℤ⁺</span> define <span class="m">(a,b) R (c,d) ⇔ a ∣ c and b ≤ d</span>. Prove R is a partial order. Is it total?`,
tech:['props','counter'], why:`Product of two partial orders: check each property in each coordinate.`,
hints:[`Antisymmetry needs: on ℤ⁺, a ∣ c and c ∣ a ⇒ a = c.`,`Transitive: ∣ and ≤ are both transitive.`,`Try (2,3) and (3,2).`],
proof:`<div class="proof np"><p><b>Proof (direct, one property at a time). Let (a,b), (c,d), (e,f) ∈ ℤ⁺ × ℤ⁺ be arbitrary.</b></p><p class="small muted">Want: R reflexive, antisymmetric, transitive.</p><p><b>Reflexive.</b> a ∣ a and b ≤ b.</p>
<p><b>Antisymmetric.</b> (a,b) R (c,d) and (c,d) R (a,b) give a ∣ c, c ∣ a, b ≤ d, d ≤ b. For positive integers a ∣ c ∧ c ∣ a ⇒ a = c (previous problem), and b = d. So (a,b) = (c,d).</p>
<p><b>Transitive.</b> a ∣ c, c ∣ e ⇒ a ∣ e; b ≤ d ≤ f ⇒ b ≤ f.</p>
<p><b>Not total:</b> (2,3) R (3,2) fails since 2 ∤ 3; (3,2) R (2,3) fails since 3 ∤ 2.</p><p><b>Conclusion.</b> Therefore R is a partial order on ℤ⁺ × ℤ⁺, and it is not total.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Coordinate-wise proof of each property`,`Antisymmetry of ∣ on ℤ⁺ justified or cited`,`Incomparable pair`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c23', topic:'ord', src:'Relations PS Q6–Q7 (Fall’25) · Relations1 Q7', diff:2, title:'Inclusion order on P(X); sup and inf',
statement:`(a) Prove that ⊆ is a partial order on P(X).<br>(b) Let 𝒮 ⊆ P(X) be a nonempty collection. Prove that ⋃𝒮 is the least upper bound and ⋂𝒮 the greatest lower bound of 𝒮 in (P(X), ⊆). In particular sup{A, B} = A ∪ B.<br>(c) On the set of all relations on A, <span class="m">R₁ ψ R₂ ⇔ ∀x,y (xR₁y ⇒ xR₂y)</span>. Explain why ψ is a partial order.`,
tech:['props','sup'], why:`(a) three properties; (b) a least upper bound must be an upper bound and below every upper bound.`,
hints:[`Antisymmetry of ⊆ is exactly the definition of set equality.`,`(b) Upper bound: each A ∈ 𝒮 satisfies A ⊆ ⋃𝒮. Least: if U ⊇ A for all A ∈ 𝒮, take x ∈ ⋃𝒮.`,`(c) R₁ ψ R₂ just says R₁ ⊆ R₂ (relations are sets of pairs).`],
proof:`<div class="proof np"><p><b>Proof (direct). Let A, B, C ∈ P(X) be arbitrary.</b></p><p class="small muted">Want: (a) ⊆ reflexive, antisymmetric, transitive. (b) ⋃𝒮 is an upper bound and below every upper bound.</p><p><b>(a)</b> Reflexive: A ⊆ A. Antisymmetric: A ⊆ B ∧ B ⊆ A ⇒ A = B (definition of set equality). Transitive: if A ⊆ B, B ⊆ C and x ∈ A, then x ∈ B, so x ∈ C.</p>
<p><b>(b) ⋃𝒮 is an upper bound:</b> for A ∈ 𝒮 and x ∈ A, x ∈ ⋃𝒮 by definition of union, so A ⊆ ⋃𝒮. <b>It is the least:</b> let U be any upper bound (A ⊆ U for all A ∈ 𝒮) and x ∈ ⋃𝒮. Then x ∈ A for some A ∈ 𝒮, and A ⊆ U, so x ∈ U. Hence ⋃𝒮 ⊆ U. So sup 𝒮 = ⋃𝒮.</p>
<p><b>⋂𝒮 is a lower bound:</b> x ∈ ⋂𝒮 ⇒ x ∈ A for every A, so ⋂𝒮 ⊆ A. <b>Greatest:</b> if L ⊆ A for all A ∈ 𝒮 and x ∈ L, then x ∈ A for all A, so x ∈ ⋂𝒮. Hence L ⊆ ⋂𝒮 and inf 𝒮 = ⋂𝒮. With 𝒮 = {A, B}: sup = A ∪ B, inf = A ∩ B.</p>
<p><b>(c)</b> R₁ ψ R₂ ⇔ (x,y) ∈ R₁ ⇒ (x,y) ∈ R₂ for all x,y ⇔ R₁ ⊆ R₂. So ψ is ⊆ on P(A × A), a partial order by (a).</p><p><b>Conclusion.</b> Therefore (P(X), ⊆) is a poset with sup 𝒮 = ⋃𝒮 and inf 𝒮 = ⋂𝒮, and ψ is a partial order.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) three properties`,`(b) upper bound AND least (both parts of the definition)`,`(b) the dual statement for ⋂𝒮`,`(c) recognises ψ as inclusion`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c24', topic:'ord', src:'WrapUp 2 P3', diff:3, title:'From a preorder to a partial order',
statement:`A preorder is reflexive and transitive. (a) Show ∣ on ℤ is a preorder but not a partial order. (b) For a preorder R on A, prove <span class="m">E = R ∩ R⁻¹</span> (aEb ⇔ aRb ∧ bRa) is an equivalence relation. (c) On A/E define <span class="m">[a] ⪯ [b] ⇔ aRb</span>. Prove ⪯ is a partial order. (d) Describe the result for ∣ on ℤ.`,
tech:['props'], why:`Each part checks defining properties; (c) also uses [a] = [b] ⇔ aEb.`,
hints:[`(a) 2 ∣ −2 and −2 ∣ 2.`,`(b) Symmetry of E: its definition is symmetric in a and b.`,`(c) Antisymmetry: [a] ⪯ [b] and [b] ⪯ [a] mean aRb and bRa, i.e. aEb.`],
proof:`<div class="proof np"><p><b>Proof (direct, property by property).</b></p><p class="small muted">Want: (b) E reflexive, symmetric, transitive. (c) ⪯ well defined, reflexive, antisymmetric, transitive.</p><p><b>(a)</b> a = a·1; a ∣ b, b ∣ c ⇒ c = a(kℓ). Not antisymmetric: 2 ∣ −2 and −2 ∣ 2 but 2 ≠ −2.</p>
<p><b>(b)</b> Reflexive: aRa ∧ aRa. Symmetric: “aRb ∧ bRa” is unchanged when a, b swap. Transitive: aEb, bEc give aRb, bRc ⇒ aRc and cRb, bRa ⇒ cRa; so aEc.</p>
<p><b>(c)</b> First, ⪯ does not depend on the representatives chosen: if [a] = [a′] and [b] = [b′] then a′Ra, aRb, bRb′ give a′Rb′. Reflexive: aRa. Transitive: aRb, bRc ⇒ aRc. Antisymmetric: [a] ⪯ [b] ∧ [b] ⪯ [a] ⇒ aRb ∧ bRa ⇒ aEb ⇒ [a] = [b].</p>
<p><b>(d)</b> a E b ⇔ a ∣ b ∧ b ∣ a ⇔ b = ±a. Classes: {0}, {1,−1}, {2,−2}, …. The poset is divisibility on {0,1,2,…}: 1 is least, 0 is greatest (every a divides 0).</p><p><b>Conclusion.</b> Therefore every preorder induces a partial order on its classes A/E.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) counterexample to antisymmetry`,`(b) three properties of E`,`(c) mentions well-definedness of ⪯ on classes`,`(c) antisymmetry via [a] = [b] ⇔ aEb`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c25', topic:'ord', src:'Logic PS 3.6 · Relations1 Q6', diff:2, title:'sup {1 − 1/n : n ∈ ℕ⁺} = 1',
statement:`Let <span class="m">A = {1 − 1/n : n ∈ ℕ⁺}</span>. Prove that sup A = 1 using the two-part definition of least upper bound. Does A have a maximum? (Same method: sup {2 − 1/n} = 2.)`,
tech:['sup','contradiction'], why:`sup needs (i) upper bound and (ii) below every upper bound; (ii) is done by contradiction with the Archimedean property.`,
hints:[`(i) 1/n &gt; 0, so 1 − 1/n &lt; 1.`,`(ii) Suppose an upper bound u &lt; 1. Then 1 − u &gt; 0.`,`Choose n &gt; 1/(1 − u). Then 1 − 1/n &gt; u.`],
proof:`<div class="proof np"><p><b>Proof. Part (i) is direct; part (ii) is by contradiction.</b></p><p class="small muted">Want: (i) ∀x ∈ A, x ≤ 1. (ii) every upper bound u satisfies 1 ≤ u.</p><p><b>(i) 1 is an upper bound.</b> For every n ∈ ℕ⁺, 1/n &gt; 0, so 1 − 1/n &lt; 1.</p>
<p><b>(ii) 1 is the least.</b> Let u be an upper bound of A and suppose, for a contradiction, u &lt; 1. Then 1 − u &gt; 0. By the Archimedean property choose n ∈ ℕ⁺ with n &gt; 1/(1 − u). Then 1/n &lt; 1 − u, i.e. 1 − 1/n &gt; u. But 1 − 1/n ∈ A, so u is not an upper bound: contradiction. Hence every upper bound u satisfies 1 ≤ u.</p>
<p>By (i) and (ii), sup A = 1. <b>No maximum:</b> 1 ∉ A since 1/n ≠ 0 for all n.</p><p><b>Conclusion.</b> Therefore sup A = 1, and A has no maximum.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Part (i): shows every element ≤ 1`,`Part (ii): arbitrary upper bound u &lt; 1 leads to contradiction`,`Explicit choice of n via Archimedean property`,`Notes 1 ∉ A (sup but not max)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c26', topic:'ord', src:'WrapUp 1 P6(a)(b)', diff:2, title:'sup of a subset and of a union',
statement:`Let A, B ⊆ ℝ be nonempty and bounded above. Prove (a) if A ⊆ B then sup A ≤ sup B; (b) <span class="m">sup(A ∪ B) = max(sup A, sup B)</span>.`,
tech:['sup','cases'], why:`To show a number is the sup, prove it is an upper bound and below every upper bound.`,
hints:[`Let α = sup A, β = sup B (they exist by completeness).`,`(a) β is an upper bound of A, so α ≤ β by part (ii) of the definition.`,`(b) m = max(α, β). For (ii): an upper bound u of A ∪ B is an upper bound of A and of B.`],
proof:`<div class="proof np"><p><b>Proof (direct; the union part uses cases).</b></p><p class="small muted">Want: (a) α ≤ β. (b) m = max(α, β) satisfies (i) and (ii) for A ∪ B.</p><p>α = sup A, β = sup B exist by completeness of ℝ.</p>
<p><b>(a)</b> Let x ∈ A. Then x ∈ B, so x ≤ β. Thus β is an upper bound of A, and by (ii) for A, α ≤ β.</p>
<p><b>(b)</b> Let m = max(α, β). <i>(i) Upper bound:</i> if x ∈ A ∪ B then x ∈ A (so x ≤ α ≤ m) or x ∈ B (so x ≤ β ≤ m). <i>(ii) Least:</i> let u be an upper bound of A ∪ B. Every element of A lies in A ∪ B, so u is an upper bound of A and α ≤ u; likewise β ≤ u. Hence u ≥ max(α, β) = m. So sup(A ∪ B) = m.</p><p><b>Conclusion.</b> Therefore sup A ≤ sup B when A ⊆ B, and sup(A ∪ B) = max(sup A, sup B).</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Names α, β and justifies existence (completeness)`,`(a) shows β is an upper bound of A, then applies (ii)`,`(b) proves both (i) and (ii) for m`,`Case split x ∈ A or x ∈ B`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c27', topic:'ord', src:'WrapUp 1 P6(c)', diff:2, title:'sup(A ∩ B) ≤ min(sup A, sup B)',
statement:`Let A, B ⊆ ℝ be nonempty, bounded above, with A ∩ B ≠ ∅. Prove <span class="m">sup(A ∩ B) ≤ min(sup A, sup B)</span> and show the inequality can be strict.`,
tech:['sup','counter'], why:`Use the subset result twice; strictness needs one concrete example.`,
hints:[`Why does sup(A ∩ B) exist? (nonempty, bounded by sup A)`,`A ∩ B ⊆ A and A ∩ B ⊆ B, then apply “A ⊆ B ⇒ sup A ≤ sup B”.`,`Try A = {0, 2}, B = {0, 3}.`],
proof:`<div class="proof np"><p><b>Proof (direct), followed by a counterexample for strictness.</b></p><p class="small muted">Want: sup(A ∩ B) ≤ sup A and sup(A ∩ B) ≤ sup B.</p><p>A ∩ B is nonempty, and every element lies in A, so is ≤ sup A. By completeness γ = sup(A ∩ B) exists.</p>
<p>A ∩ B ⊆ A gives γ ≤ sup A, and A ∩ B ⊆ B gives γ ≤ sup B (previous problem). A number below both is below their minimum: γ ≤ min(sup A, sup B).</p>
<p><b>Strict:</b> A = {0, 2}, B = {0, 3}: sup A = 2, sup B = 3, A ∩ B = {0}, so 0 &lt; 2 = min(2, 3).</p><p><b>Conclusion.</b> Therefore sup(A ∩ B) ≤ min(sup A, sup B), and the inequality can be strict.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Existence of sup(A ∩ B) justified`,`Applies the subset lemma twice`,`Concrete strict example`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c28', topic:'ord', src:'WrapUp 1 P6(d)', diff:3, title:'sup(A + B) = sup A + sup B',
statement:`Let A, B ⊆ ℝ be nonempty and bounded above, and <span class="m">A + B = {a + b : a ∈ A, b ∈ B}</span>. Prove <span class="m">sup(A + B) = sup A + sup B</span>.`,
tech:['sup'], why:`Show s = α + β is an upper bound, then show s ≤ u for every upper bound u in two rounds.`,
hints:[`(i) a ≤ α and b ≤ β, so a + b ≤ α + β.`,`(ii) Fix b ∈ B. For all a ∈ A, a + b ≤ u, so u − b is an upper bound of A, hence α ≤ u − b.`,`So b ≤ u − α for every b: u − α is an upper bound of B, hence β ≤ u − α.`],
proof:`<div class="proof np"><p><b>Proof (direct). Let α = sup A, β = sup B and s = α + β.</b></p><p class="small muted">Want: (i) s is an upper bound of A + B. (ii) s ≤ u for every upper bound u.</p><p>Let α = sup A, β = sup B, s = α + β.</p>
<p><b>(i)</b> Let z ∈ A + B, z = a + b. Then a ≤ α, b ≤ β, so z ≤ s.</p>
<p><b>(ii)</b> Let u be any upper bound of A + B. <i>Round 1:</i> fix b ∈ B. For every a ∈ A, a + b ∈ A + B, so a ≤ u − b. Hence u − b is an upper bound of A and α ≤ u − b, i.e. b ≤ u − α. <i>Round 2:</i> this holds for every b ∈ B, so u − α is an upper bound of B and β ≤ u − α, i.e. s ≤ u.</p>
<p>By (i) and (ii), sup(A + B) = α + β.</p><p><b>Conclusion.</b> Therefore sup(A + B) = sup A + sup B.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(i) upper bound shown for a general element a + b`,`(ii) fixes b and gets α ≤ u − b`,`(ii) then gets β ≤ u − α`,`Concludes using both clauses of the definition`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`No ε needed: clause (ii) of the sup definition is a ∀ over upper bounds, so it applies to u − b and u − α.`}
);

/* =========================== FUNCTIONS =========================== */
DATA.problems.push(
{id:'c30', topic:'fun', src:'Fall’25 PS Q1', diff:2, title:'Injective, surjective or bijective? Seven maps',
statement:`Decide and prove: (a) a : ℕ → ℕ, a(x) = x²; (b) b : ℤ → ℤ, b(x) = x + 7; (c) c : ℤ → ℤ, c(x) = x² + x + 1; (d) d : ℝ → ℝ, d(x) = x³; (e) e : ℝ ∖ {−1} → ℝ, e(x) = 2x/(x + 1); (f) f : ℝ² → ℝ², f(x,y) = (x + 2y, x − y); (g) g : ℝ² → ℝ, g(x,y) = x² + y.`,
tech:['direct','counter','construct'], why:`“Yes” answers need a general proof (f(x₁) = f(x₂) ⇒ x₁ = x₂, or construct a preimage); “no” answers need one counterexample.`,
hints:[`(c) x² + x + 1 = x(x + 1) + 1. What parity is it?`,`(e) Solve 2x/(x + 1) = y for x. Which y causes trouble?`,`(f) Solve x + 2y = u, x − y = v.`],
proof:`<div class="proof np"><p><b>Proof (direct for each “yes”; a counterexample for each “no”).</b></p><p class="small muted">Want: For each map: injective? surjective?</p><p><b>(a)</b> Injective: for x₁, x₂ ≥ 0, x₁² = x₂² ⇒ (x₁ − x₂)(x₁ + x₂) = 0 ⇒ x₁ = x₂ (if x₁ + x₂ = 0 both are 0). Not surjective: 2 is not a square of a natural number.</p>
<p><b>(b)</b> Bijective: x₁ + 7 = x₂ + 7 ⇒ x₁ = x₂; for y ∈ ℤ take x = y − 7 ∈ ℤ.</p>
<p><b>(c)</b> Not injective: c(0) = 1 = c(−1). Not surjective: c(x) = x(x + 1) + 1 and x(x + 1) is even (one of two consecutive integers is even), so c(x) is always odd; 2 is never reached.</p>
<p><b>(d)</b> Bijective: x₁ &lt; x₂ ⇒ x₁³ &lt; x₂³ (x³ strictly increasing), so injective; for y ∈ ℝ, x = ∛y gives x³ = y.</p>
<p><b>(e)</b> Injective: 2x₁/(x₁ + 1) = 2x₂/(x₂ + 1) ⇒ 2x₁x₂ + 2x₁ = 2x₁x₂ + 2x₂ ⇒ x₁ = x₂. Not surjective: 2x/(x + 1) = 2 ⇒ 2x = 2x + 2 ⇒ 0 = 2, impossible; so 2 is not attained.</p>
<p><b>(f)</b> Bijective: (x + 2y, x − y) = (u, v) ⇔ y = (u − v)/3, x = (u + 2v)/3. For every (u,v) there is exactly one solution: existence gives surjectivity, uniqueness gives injectivity.</p>
<p><b>(g)</b> Surjective: for z ∈ ℝ, g(0, z) = z. Not injective: g(1, 0) = 1 = g(−1, 0).</p><p><b>Conclusion.</b> Therefore b, d, f are bijections; a and e are injective only; g is surjective only; c is neither.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Each injectivity proof starts from f(x₁) = f(x₂)`,`Each surjectivity proof starts from an arbitrary y in the codomain and exhibits x in the domain`,`Each failure has one explicit counterexample`,`(c) parity argument; (e) shows 2 is missed`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c31', topic:'fun', src:'Fall’25 PS Q2–Q3', diff:2, title:'When is ax² + x + 1 one-to-one? onto?',
statement:`For x ∈ ℝ let <span class="m">f(x) = ax² + x + 1</span>, f : ℝ → ℝ. (a) Determine all a for which f is one-to-one. (b) Determine all a for which f is onto. (c) Same for g(x) = x² + ax + 1.`,
tech:['cases','counter'], why:`Split into a = 0 and a ≠ 0; for a ≠ 0 exhibit two inputs with equal outputs and a value that is never reached.`,
hints:[`f(x₁) − f(x₂) = (x₁ − x₂)(a(x₁ + x₂) + 1).`,`For a ≠ 0 compare f(0) and f(−1/a).`,`Complete the square: f(x) = a(x + 1/(2a))² + 1 − 1/(4a).`],
proof:`<div class="proof np"><p><b>Proof by cases: a = 0 and a ≠ 0.</b></p><p class="small muted">Want: f one-to-one ⇔ a = 0; f onto ⇔ a = 0.</p><p><b>Case a = 0:</b> f(x) = x + 1 is a bijection (x₁ + 1 = x₂ + 1 ⇒ x₁ = x₂; y = f(y − 1)).</p>
<p><b>Case a ≠ 0:</b> f(0) = 1 and f(−1/a) = a·(1/a²) − 1/a + 1 = 1, with 0 ≠ −1/a. So f is <b>not</b> one-to-one. Completing the square, f(x) = a(x + 1/(2a))² + c₀ with c₀ = 1 − 1/(4a). If a &gt; 0 then f(x) ≥ c₀ for all x, so c₀ − 1 is not attained; if a &lt; 0 then f(x) ≤ c₀, so c₀ + 1 is not attained. So f is <b>not</b> onto.</p>
<p><b>Answer:</b> f is one-to-one ⇔ a = 0, and onto ⇔ a = 0.</p>
<p><b>(c)</b> g(x) = (x + a/2)² + 1 − a²/4 ≥ 1 − a²/4, so g is never onto, for any a. It is never one-to-one either: g(0) = 1 = g(−a) when a ≠ 0, and g(1) = g(−1) when a = 0.</p><p><b>Conclusion.</b> Therefore f is one-to-one exactly when a = 0, onto exactly when a = 0, and g is never onto.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Separates a = 0 from a ≠ 0`,`Two distinct inputs with equal outputs for a ≠ 0`,`A value outside the range (via completing the square / bound)`,`g never onto, with a bound`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c32', topic:'fun', src:'R+F PS Q8', diff:2, title:'Composition preserves injective and surjective',
statement:`Let f : A → B and g : B → C. Prove: (a) f, g injective ⇒ g∘f injective; (b) f, g surjective ⇒ g∘f surjective; (c) g∘f injective ⇒ f injective; (d) g∘f surjective ⇒ g surjective. (e) Give an example with g∘f injective but g not injective.`,
tech:['direct','counter'], why:`Injectivity: start from equal outputs. Surjectivity: start from an arbitrary element of the codomain and build a preimage.`,
hints:[`(a) g(f(a₁)) = g(f(a₂)): peel off g, then f.`,`(c) If f(a₁) = f(a₂), apply g to both sides.`,`(e) Let B have an element that f never hits.`],
proof:`<div class="proof np"><p><b>Proof (direct) for (a)–(d); counterexample for (e).</b></p><p class="small muted">Want: (a),(c): equal outputs ⇒ equal inputs. (b),(d): every c ∈ C has a preimage.</p><p><b>(a)</b> Suppose (g∘f)(a₁) = (g∘f)(a₂), i.e. g(f(a₁)) = g(f(a₂)). g injective ⇒ f(a₁) = f(a₂); f injective ⇒ a₁ = a₂.</p>
<p><b>(b)</b> Let c ∈ C be arbitrary. g surjective ⇒ ∃b ∈ B, g(b) = c. f surjective ⇒ ∃a ∈ A, f(a) = b. Then (g∘f)(a) = g(b) = c.</p>
<p><b>(c)</b> Suppose f(a₁) = f(a₂). Then g(f(a₁)) = g(f(a₂)), so a₁ = a₂ since g∘f is injective.</p>
<p><b>(d)</b> Let c ∈ C. g∘f surjective ⇒ ∃a with g(f(a)) = c. Then b = f(a) ∈ B satisfies g(b) = c.</p>
<p><b>(e)</b> A = {1,2}, B = {p,q,r}, C = {0,1}; f(1) = p, f(2) = q; g(p) = 0, g(q) = 1, g(r) = 0. Then g∘f: 1 ↦ 0, 2 ↦ 1 is injective, but g(p) = g(r) with p ≠ r.</p><p><b>Conclusion.</b> Therefore composition preserves injectivity and surjectivity, and (c), (d) hold, but (e) shows g need not be injective.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a),(c) start from equal outputs and conclude equal inputs`,`(b),(d) start from arbitrary c ∈ C and produce an explicit preimage`,`(e) concrete finite example with the failing pair named`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c33', topic:'fun', src:'WrapUp 2 P5 · Lecture wk06b', diff:1, title:'x² on four domains',
statement:`For the rule x ↦ x², decide injectivity and surjectivity of ℕ → ℕ, ℤ → ℤ, ℝ → ℝ and [0,∞) → [0,∞). For the bijective one, prove that its inverse is y ↦ √y by checking the definition of inverse.`,
tech:['counter','construct'], why:`Same formula, different sets: each “no” is one counterexample, each “yes” a general argument.`,
hints:[`x² = x′² ⇔ (x − x′)(x + x′) = 0.`,`On ℤ and ℝ: (−1)² = 1².`,`Inverse: show g(f(x)) = x for all x and f(g(y)) = y for all y.`],
proof:`<div class="proof np"><p><b>Proof (direct for each “yes”, counterexample for each “no”).</b></p><p class="small muted">Want: Injective/surjective for each domain; g(f(x)) = x and f(g(y)) = y on [0,∞).</p><p><b>ℕ → ℕ:</b> injective (x, x′ ≥ 0 and (x − x′)(x + x′) = 0 force x = x′), not surjective (2 is not a square). <b>ℤ → ℤ:</b> not injective ((−1)² = 1²), not surjective (2). <b>ℝ → ℝ:</b> not injective, not surjective (−1 is not a square).</p>
<p><b>[0,∞) → [0,∞):</b> injective as for ℕ; surjective since y = (√y)² with √y ≥ 0. Let g(y) = √y. For x ≥ 0, g(f(x)) = √(x²) = |x| = x; for y ≥ 0, f(g(y)) = (√y)² = y. Both conditions hold, so g = f⁻¹.</p><p><b>Conclusion.</b> Therefore only x ↦ x² on [0,∞) is a bijection, and its inverse is y ↦ √y.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Four correct verdicts, each justified`,`Counterexamples named explicitly`,`Inverse verified with BOTH compositions`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecture wk06b: “The domain is actually important here.” Solving y = x² for x only gives a candidate; you must check both conditions.`},

{id:'c34', topic:'fun', src:'WrapUp 2 P5(b)–(d)', diff:2, title:'h(x,y) = (x + y, x − y)',
statement:`(a) Show h : ℝ × ℝ → ℝ × ℝ, h(x,y) = (x + y, x − y) is a bijection and find h⁻¹. (b) Show the same rule on ℤ × ℤ is injective but not surjective, and find its image. (c) Change the codomain to make it a bijection.`,
tech:['construct','counter'], why:`Solving h(x,y) = (u,v) uniquely gives both properties; on ℤ the solution may be non-integer.`,
hints:[`x + y = u, x − y = v ⇒ x = (u + v)/2, y = (u − v)/2.`,`(1, 0) on ℤ²?`,`u − v = 2y: outputs have the same parity.`],
proof:`<div class="proof np"><p><b>Proof (direct). Solve h(x,y) = (u,v) for (x,y).</b></p><p class="small muted">Want: (a) exactly one solution in ℝ² for every (u,v). (b) h(ℤ²) = {(u,v) ∈ ℤ² : u − v even}.</p><p><b>(a)</b> h(x,y) = (u,v) ⇔ x = (u + v)/2, y = (u − v)/2. For every (u,v) ∈ ℝ² this is exactly one solution in ℝ²: at least one gives surjectivity, at most one gives injectivity. h⁻¹(u,v) = ((u + v)/2, (u − v)/2); check: h(h⁻¹(u,v)) = (u,v).</p>
<p><b>(b)</b> Injective: the same computation shows h(x,y) = h(x′,y′) ⇒ (x,y) = (x′,y′). Not surjective: (1,0) would need x = y = 1/2 ∉ ℤ. Image: for integers, u − v = 2y is even, so u, v have the same parity; conversely if u ≡ v (mod 2) then (u + v)/2 and (u − v)/2 are integers mapping to (u,v). So h(ℤ²) = {(u,v) ∈ ℤ² : u − v even}.</p>
<p><b>(c)</b> h : ℤ² → {(u,v) ∈ ℤ² : u − v even} is still injective and now onto, hence a bijection.</p><p><b>Conclusion.</b> Therefore h is a bijection on ℝ², and on ℤ² it is a bijection onto the pairs of equal parity.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Solves the system and uses it for both properties`,`Explicit inverse`,`Counterexample (1,0) on ℤ²`,`Image proved in both directions (⊆ and ⊇)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c35', topic:'fun', src:'Functions PS Q1', diff:3, title:'f(a,b) = 2ᵃ(2b + 1) is a bijection ℕ × ℕ → ℤ⁺',
statement:`Show that <span class="m">f : ℕ × ℕ → ℤ⁺, f(a,b) = 2ᵃ(2b + 1)</span> is bijective (ℕ = {0,1,2,…}).`,
tech:['direct','construct'], why:`Injectivity uses “odd ≠ even”; surjectivity factors out the largest power of 2.`,
hints:[`Injective: suppose 2ᵃ(2b + 1) = 2ᶜ(2d + 1) and WLOG a ≥ c. Divide by 2ᶜ.`,`If a &gt; c the left side is even and the right side is odd.`,`Surjective: write n = 2ᵃ·m with m odd (divide by 2 until odd).`],
proof:`<div class="proof np"><p><b>Proof (direct). We prove f is one-to-one and onto.</b></p><p class="small muted">Want: f(a,b) = f(c,d) ⇒ (a,b) = (c,d); every n ∈ ℤ⁺ equals some f(a,b).</p><p>f(a,b) ≥ 1, so f does map into ℤ⁺.</p>
<p><b>Injective.</b> Suppose 2ᵃ(2b + 1) = 2ᶜ(2d + 1). WLOG a ≥ c (the case c ≥ a is symmetric). Dividing by 2ᶜ: 2ᵃ⁻ᶜ(2b + 1) = 2d + 1. The right side is odd. If a − c ≥ 1 the left side is even, a contradiction; so a = c. Then 2b + 1 = 2d + 1, so b = d. Hence (a,b) = (c,d).</p>
<p><b>Surjective.</b> Let n ∈ ℤ⁺ be arbitrary. Divide n by 2 as long as the result is even; the values decrease, so this stops, giving n = 2ᵃm with a ∈ ℕ and m odd. Write m = 2b + 1 with b = (m − 1)/2 ∈ ℕ (m ≥ 1). Then f(a,b) = n.</p><p><b>Conclusion.</b> Therefore f is a bijection ℕ × ℕ → ℤ⁺.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Injectivity: equal outputs, WLOG ordering, parity contradiction`,`Concludes both a = c and b = d`,`Surjectivity from an arbitrary n, with a and b explicit`,`Checks b ∈ ℕ`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c36', topic:'fun', src:'Functions PS Q2', diff:3, title:'ϕ(a,b) = (f(a) − 1)m + g(b) is a bijection',
statement:`Let <span class="m">f : A → {1,…,n}</span> and <span class="m">g : B → {1,…,m}</span> be bijections. Show that <span class="m">ϕ : A × B → {1,…,nm}, ϕ(a,b) = (f(a) − 1)m + g(b)</span> is one-to-one and onto.`,
tech:['direct','construct'], why:`Injectivity: a multiple of m with absolute value below m must be 0. Surjectivity: division with remainder by m.`,
hints:[`Range check: 1 ≤ ϕ(a,b) ≤ (n − 1)m + m = nm.`,`Injective: ϕ(a,b) = ϕ(a′,b′) ⇒ m(f(a) − f(a′)) = g(b′) − g(b), and |g(b′) − g(b)| ≤ m − 1.`,`Onto: for k ∈ {1,…,nm} write k − 1 = qm + r with 0 ≤ r ≤ m − 1.`],
proof:`<div class="proof np"><p><b>Proof (direct). We check that ϕ lands in {1,…,nm}, then prove one-to-one and onto.</b></p><p class="small muted">Want: ϕ(a,b) = ϕ(a′,b′) ⇒ (a,b) = (a′,b′); every k ≤ nm is some ϕ(a,b).</p><p><b>Well defined.</b> f(a) − 1 ∈ {0,…,n − 1} and g(b) ∈ {1,…,m}, so 1 ≤ ϕ(a,b) ≤ (n − 1)m + m = nm.</p>
<p><b>One-to-one.</b> Suppose ϕ(a,b) = ϕ(a′,b′). Then m(f(a) − f(a′)) = g(b′) − g(b). The right side has absolute value ≤ m − 1 &lt; m, and the left side is a multiple of m, so both are 0. Hence f(a) = f(a′) and g(b) = g(b′); since f and g are injective, a = a′ and b = b′.</p>
<p><b>Onto.</b> Let k ∈ {1,…,nm}. By division with remainder, k − 1 = qm + r with 0 ≤ r ≤ m − 1; since 0 ≤ k − 1 ≤ nm − 1, 0 ≤ q ≤ n − 1. Since f and g are onto, pick a ∈ A with f(a) = q + 1 ∈ {1,…,n} and b ∈ B with g(b) = r + 1 ∈ {1,…,m}. Then ϕ(a,b) = qm + r + 1 = k.</p><p><b>Conclusion.</b> Therefore ϕ is a bijection A × B → {1,…,nm}.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Checks ϕ lands in {1,…,nm}`,`Injectivity via “multiple of m with |·| &lt; m is 0”`,`Uses injectivity of f and g`,`Surjectivity via division algorithm, with q, r in range`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c37', topic:'fun', src:'Functions PS Q3', diff:1, title:'Counting relations and maps on an n-element set',
statement:`Let |E| = n. How many (a) relations on E, (b) mappings E → E, (c) one-to-one mappings E → E, (d) bijections E → E are there? Justify.`,
tech:['count'], why:`A relation is any subset of E × E; a map is one independent choice per element.`,
hints:[`A relation on E is a subset of E × E, which has n² elements.`,`A map chooses f(x) for each of n elements, n options each.`,`One-to-one: n, then n − 1, … choices. On a finite set, injective ⇔ bijective for E → E.`],
proof:`<div class="proof np"><p><b>Proof (direct, by counting).</b></p><p class="small muted">Want: Count relations, maps, injections and bijections on E.</p><p><b>(a)</b> Relations on E are the subsets of E × E, |E × E| = n², so there are 2^(n²).</p>
<p><b>(b)</b> Each of the n elements independently chooses one of n images: nⁿ.</p>
<p><b>(c)</b> List E = {x₁,…,xₙ}: f(x₁) has n choices, f(x₂) has n − 1 (must differ), …, f(xₙ) has 1: n!.</p>
<p><b>(d)</b> An injective f : E → E has |f[E]| = n = |E|, so f[E] = E and f is onto. Hence bijections = injections: n!.</p><p><b>Conclusion.</b> Therefore there are 2^(n²) relations, nⁿ maps and n! injections, which are exactly the n! bijections.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`2^(n²) with “subsets of E × E”`,`nⁿ`,`n! with a product argument`,`Explains injective ⇒ bijective for finite E → E`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c38', topic:'fun', src:'Functions PS Q4 · R+F PS Q7', diff:1, title:'Is this relation a function?',
statement:`Decide whether each relation is a function from the given domain to the given codomain.<br>(a) x, y ∈ ℝ, <span class="m">x²/4 + y²/9 = 1</span>. (b) x, y ∈ ℝ, <span class="m">y = arcsin x</span>. (c) −1 ≤ x ≤ 1, y ∈ [−π/2, π/2], <span class="m">y = arcsin x</span>. (d) A = B = ℝ, <span class="m">y² = x + 4</span>. (e) A = B = [0,∞), <span class="m">y² = x</span>. (f) A = B = ℝ, <span class="m">y = |x − 2|</span>.`,
tech:['counter','props'], why:`A relation R ⊆ A × B is a function when every x ∈ A has exactly one y with xRy; a failure needs one x with zero or two outputs.`,
hints:[`Check both: existence (at least one y) and uniqueness (at most one y) for every x in the domain.`,`(a) x = 0 gives y = ±3; x = 5 gives none.`,`(e) y ≥ 0 removes the negative root.`],
proof:`<div class="proof np"><p><b>Proof (direct). For each relation check: every x has at least one y, and at most one y.</b></p><p class="small muted">Want: For each x ∈ A, exactly one y ∈ B with xRy.</p><p>R ⊆ A × B is a function A → B iff ∀x ∈ A ∃!y ∈ B, xRy.</p>
<p><b>(a)</b> No: x = 0 gives y = 3 and y = −3 (two outputs); x = 5 gives none.</p>
<p><b>(b)</b> No: x = 2 has no y with y = arcsin 2 (arcsin is only defined on [−1,1]).</p>
<p><b>(c)</b> Yes: sin is a bijection [−π/2, π/2] → [−1,1], so each x ∈ [−1,1] has exactly one y in [−π/2, π/2] with sin y = x.</p>
<p><b>(d)</b> No: x = 0 gives y = ±2; also x = −5 gives no real y.</p>
<p><b>(e)</b> Yes: for x ≥ 0 the only y ≥ 0 with y² = x is y = √x.</p>
<p><b>(f)</b> Yes: |x − 2| is one real number for each x.</p><p><b>Conclusion.</b> Therefore (c), (e), (f) are functions and (a), (b), (d) are not.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`States the definition (every x has exactly one y)`,`Each “no” gives an x with zero or two outputs`,`Each “yes” argues existence and uniqueness`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c39', topic:'fun', src:'Functions PS Q5', diff:2, title:'The intersection of all (a,f)-closed relations is (a,f)-closed',
statement:`Let a ∈ A and f : A → A. A relation R ⊆ ℕ × A is <i>(a,f)-closed</i> if <span class="m">R(0,a)</span> and <span class="m">∀n ∈ ℕ ∀x ∈ A (R(n,x) ⇒ R(n + 1, f(x)))</span>. Let <span class="m">F = ⋂{R ⊆ ℕ × A : R is (a,f)-closed}</span>. Prove that F is (a,f)-closed.`,
tech:['direct'], why:`Unpack membership in an intersection: something is in F iff it is in every closed R.`,
hints:[`First check the family is nonempty: is ℕ × A itself (a,f)-closed?`,`(0,a) lies in every closed R.`,`If (n,x) ∈ F then (n,x) ∈ R for each closed R, so (n + 1, f(x)) ∈ R for each closed R.`],
proof:`<div class="proof np"><p><b>Proof (direct).</b></p><p class="small muted">Want: (0,a) ∈ F, and (n,x) ∈ F ⇒ (n + 1, f(x)) ∈ F.</p><p>The family is nonempty: ℕ × A contains (0,a) and every (n + 1, f(x)), so it is (a,f)-closed. Hence F is a well-defined subset of ℕ × A.</p>
<p><b>(0,a) ∈ F.</b> Every (a,f)-closed R contains (0,a), so (0,a) lies in their intersection.</p>
<p><b>Closure step.</b> Let n ∈ ℕ, x ∈ A with (n,x) ∈ F. Let R be any (a,f)-closed relation. Since F ⊆ R, (n,x) ∈ R, and R is closed, so (n + 1, f(x)) ∈ R. As R was arbitrary, (n + 1, f(x)) belongs to every closed R, i.e. to F.</p>
<p>Therefore F is (a,f)-closed. (It is the smallest one: F ⊆ R for every closed R. It is the graph of the sequence a, f(a), f(f(a)), ….)</p><p><b>Conclusion.</b> Therefore F is (a,f)-closed.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Notes the family is nonempty`,`(0,a) ∈ F via “in every R”`,`Step: fix arbitrary closed R, use F ⊆ R, conclude for all R`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c40', topic:'fun', src:'Functions PS Q6 (1)–(3)', diff:3, title:'Idempotent functions: f∘f = f',
statement:`Let A = {1,…,n}. f : A → A is idempotent if f∘f = f.<br>(1) Prove f is idempotent ⇔ f restricted to Im(f) is the identity on Im(f). Deduce that Im(f) is exactly the set of fixed points.<br>(2) Let E<sub>n,k</sub> be the idempotents with |Im f| = k. Prove <span class="m">|E<sub>n,k</sub>| = C(n,k)·k^(n−k)</span>, hence <span class="m">|Eₙ| = Σ<sub>k=1..n</sub> C(n,k) k^(n−k)</span>.<br>(3) How many idempotents are bijections? How many have image exactly a given I with |I| = k?`,
tech:['iff','count'], why:`(1) is an iff; (2) counts by first choosing the image, then the free choices outside it.`,
hints:[`(1 ⇒) y ∈ Im f means y = f(x); compute f(y).`,`(2) Choose I = Im f (C(n,k) ways). On I, f must be the identity. Each x ∉ I may go to any element of I.`,`(3) A bijection has image A: k = n.`],
proof:`<div class="proof np"><p><b>Proof. (1) is a biconditional, proved in both directions; (2) and (3) are direct counting.</b></p><p class="small muted">Want: (1) f∘f = f ⇔ f|<sub>Im f</sub> = id. (2) |E<sub>n,k</sub>| = C(n,k)k^(n−k).</p><p><b>(1)</b> (⇒) Let y ∈ Im f, y = f(x). Then f(y) = f(f(x)) = f(x) = y. (⇐) For any x, f(x) ∈ Im f, so f(f(x)) = f(x). <i>Fixed points:</i> every y ∈ Im f is fixed by (⇒); conversely if f(x) = x then x ∈ Im f. So Fix(f) = Im f, and every x is mapped to the fixed point f(x).</p>
<p><b>(2)</b> Fix I ⊆ A with |I| = k. By (1) an idempotent with image I satisfies f(t) = t for t ∈ I and f(x) ∈ I for x ∉ I. Conversely any map with f|_I = id and f[A ∖ I] ⊆ I is idempotent (f(f(x)) = f(x) because f(x) ∈ I is fixed) and has image exactly I (I ⊆ Im f since each t = f(t); Im f ⊆ I by construction). So idempotents with image I correspond to arbitrary maps A ∖ I → I: k^(n−k) of them. There are C(n,k) choices of I, so |E<sub>n,k</sub>| = C(n,k)k^(n−k). Image size is between 1 and n (A ≠ ∅), so |Eₙ| = Σ<sub>k=1..n</sub> C(n,k)k^(n−k).</p>
<p><b>(3)</b> A bijection has image A, so k = n: C(n,n)·n⁰ = 1, the identity. On a finite set injections and surjections A → A are bijections, so also 1 each. Image exactly I: k^(n−k). Fixed-point set of size k: same as image size k, C(n,k)k^(n−k), since Fix(f) = Im f.</p><p><b>Conclusion.</b> Therefore |Eₙ| = Σ<sub>k=1..n</sub> C(n,k)k^(n−k), and the identity is the only bijective idempotent.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(1) both directions`,`(1) Fix(f) = Im f shown both ways`,`(2) bijection between idempotents with image I and maps A ∖ I → I (both directions checked)`,`(2) sums over k from 1`,`(3) identity is the only bijective idempotent`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c41', topic:'fun', src:'Functions PS Q6 (4b, hard)', diff:3, title:'Counting maps that commute with an idempotent',
statement:`Let f : A → A be idempotent with image I, and fibre sizes <span class="m">m_t = |f←({t})|</span> for t ∈ I. Count the functions g : A → A with <span class="m">f∘g = g∘f</span>.`,
tech:['count'], why:`Translate the commuting condition into constraints on g on I and on each fibre, then multiply independent choices.`,
hints:[`For t ∈ I: f(g(t)) = g(f(t)) = g(t), so g(t) is a fixed point, i.e. g(t) ∈ I. Let τ = g|_I : I → I.`,`For x ∉ I with f(x) = t: f(g(x)) = g(t) = τ(t), so g(x) ∈ f←({τ(t)}).`,`Fibre of t contains t itself, so it has m_t − 1 elements outside I.`],
proof:`<div class="proof np"><p><b>Proof (direct). Translate f∘g = g∘f into conditions on g, then count.</b></p><p class="small muted">Want: Characterise all g with f∘g = g∘f, then count them.</p><p><b>Constraints.</b> For t ∈ I, f(t) = t, so f(g(t)) = g(t): g(t) is a fixed point, i.e. g(t) ∈ I. Put τ = g|_I : I → I (any map). For x ∉ I with f(x) = t, the condition reads f(g(x)) = g(t) = τ(t), i.e. g(x) ∈ f←({τ(t)}), a set of m<sub>τ(t)</sub> elements.</p>
<p><b>Sufficiency.</b> If g(I) ⊆ I and g(x) ∈ f←({g(f(x))}) for x ∉ I, then f∘g = g∘f holds at every point (on I both sides equal g(t)).</p>
<p><b>Count.</b> The fibre of t has m_t − 1 elements outside I. For a fixed τ the choices are independent: Π<sub>t∈I</sub> m<sub>τ(t)</sub>^(m_t − 1). Summing over τ and noting that τ(t) is chosen independently for each t:</p>
<p class="m">N = Σ<sub>τ:I→I</sub> Π<sub>t∈I</sub> m<sub>τ(t)</sub>^(m_t − 1) = Π<sub>t∈I</sub> ( Σ<sub>s∈I</sub> m_s^(m_t − 1) ).</p>
<p>Checks: f = id (all m_t = 1, I = A) gives nⁿ; f constant c (I = {c}, m_c = n) gives n^(n−1) (g must fix c).</p><p><b>Conclusion.</b> Therefore the number of g commuting with f is Π<sub>t∈I</sub> Σ<sub>s∈I</sub> m_s^(m_t − 1).</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Shows g maps I into I`,`Shows each non-fixed x must go to the fibre of τ(f(x))`,`Checks the conditions are also sufficient`,`Correct product formula (either form)`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c42', topic:'fun', src:'WrapUp 2 P6', diff:2, title:'Floor and ceiling identities',
statement:`For x ∈ ℝ, n ∈ ℤ prove: (a) ⌊x + n⌋ = ⌊x⌋ + n; (b) ⌊−x⌋ = −⌈x⌉; (c) ⌊x⌋ + ⌊y⌋ ≤ ⌊x + y⌋ ≤ ⌊x⌋ + ⌊y⌋ + 1; (d) ⌊2x⌋ = ⌊x⌋ + ⌊x + ½⌋; (e) g : ℤ → ℤ, g(n) = ⌊n/2⌋ is surjective, not injective; find g←({k}).`,
tech:['cases','direct'], why:`Use the characterisation ⌊z⌋ = k ⇔ k ≤ z &lt; k + 1 and split x = n + r with 0 ≤ r &lt; 1; then case on r.`,
hints:[`(a) Add n to k ≤ x &lt; k + 1.`,`(b) Cases x ∈ ℤ and x ∉ ℤ.`,`(d) After (a), it reduces to ⌊2r⌋ = ⌊r + ½⌋: cases r &lt; ½ and r ≥ ½.`],
proof:`<div class="proof np"><p><b>Proof (direct, with proof by cases in (b), (c), (d)).</b></p><p class="small muted">Want: Each identity, using ⌊z⌋ = k ⇔ k ≤ z &lt; k + 1.</p><p><b>Tool.</b> For k ∈ ℤ, ⌊z⌋ = k ⇔ k ≤ z &lt; k + 1; and x = n + r with n = ⌊x⌋, 0 ≤ r &lt; 1.</p>
<p><b>(a)</b> k = ⌊x⌋: k ≤ x &lt; k + 1 ⇒ k + n ≤ x + n &lt; k + n + 1, with k + n ∈ ℤ. So ⌊x + n⌋ = k + n.</p>
<p><b>(b)</b> x ∈ ℤ: ⌊−x⌋ = −x = −⌈x⌉. x ∉ ℤ: x = n + r, 0 &lt; r &lt; 1, ⌈x⌉ = n + 1, and −x = −(n + 1) + (1 − r) with 0 &lt; 1 − r &lt; 1, so ⌊−x⌋ = −(n + 1).</p>
<p><b>(c)</b> x = n + r, y = m + s: by (a) ⌊x + y⌋ = n + m + ⌊r + s⌋, and 0 ≤ r + s &lt; 2 gives ⌊r + s⌋ ∈ {0, 1}. Both bounds occur (x = y = 0; x = y = ½).</p>
<p><b>(d)</b> By (a), ⌊2x⌋ = 2n + ⌊2r⌋ and ⌊x⌋ + ⌊x + ½⌋ = 2n + ⌊r + ½⌋. If 0 ≤ r &lt; ½: both floors are 0. If ½ ≤ r &lt; 1: both are 1.</p>
<p><b>(e)</b> g(n) = k ⇔ k ≤ n/2 &lt; k + 1 ⇔ 2k ≤ n &lt; 2k + 2 ⇔ n ∈ {2k, 2k + 1}. So g←({k}) = {2k, 2k + 1}: never empty (surjective), always two elements (not injective, e.g. g(0) = g(1)).</p><p><b>Conclusion.</b> Therefore all five statements hold.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`States and uses the characterisation of ⌊·⌋`,`Splits x = n + r`,`Exhaustive cases in (b) and (d)`,`(e) preimage computed and used for both conclusions`,`Ends with an explicit conclusion sentence (“Therefore …”)`]},

{id:'c43', topic:'fun', src:'Lecture wk06a (Prop A)', diff:2, title:'f injective ⇔ f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂]',
statement:`Let f : X → Y and <span class="m">f[A] = {f(x) : x ∈ A}</span>. Prove: f is injective ⇔ for all A₁, A₂ ⊆ X, <span class="m">f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂]</span>.`,
tech:['iff','double'], why:`An iff; (⇒) is a set equality by double inclusion, (⇐) uses a clever choice of singleton sets.`,
hints:[`(⊆) holds for every f: y = f(x) with x ∈ A₁ ∩ A₂.`,`(⊇) y = f(x₁) = f(x₂) with x₁ ∈ A₁, x₂ ∈ A₂; injectivity gives x₁ = x₂.`,`(⇐) Take x ≠ y and choose A₁ = {x}, A₂ = {y}.`],
proof:`<div class="proof np"><p><b>Proof (biconditional). Let P be “f is injective” and Q be the set identity.</b></p><p class="small muted">Want: P ⇔ Q.</p><p><b>(⇒)</b> Assume f injective; let A₁, A₂ ⊆ X be arbitrary.<br>(⊆) Let y ∈ f[A₁ ∩ A₂]: y = f(x), x ∈ A₁ ∩ A₂. Then y ∈ f[A₁] and y ∈ f[A₂]. (True for every f.)<br>(⊇) Let y ∈ f[A₁] ∩ f[A₂]: ∃x₁ ∈ A₁, x₂ ∈ A₂ with y = f(x₁) = f(x₂). f is 1-1, so x₁ = x₂ =: x ∈ A₁ ∩ A₂, and y = f(x) ∈ f[A₁ ∩ A₂].</p>
<p><b>(⇐)</b> Assume the identity (△) for all A₁, A₂. Let x, y ∈ X with x ≠ y; want f(x) ≠ f(y). Take A₁ = {x}, A₂ = {y}. Then A₁ ∩ A₂ = ∅, so by (△) {f(x)} ∩ {f(y)} = f[∅] = ∅. Hence f(x) ≠ f(y), and f is injective.</p><p><b>Conclusion.</b> Hence f is injective if and only if f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂] for all A₁, A₂ ⊆ X.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(⇒) both inclusions; notes (⊆) holds for any f`,`(⊇) uses injectivity to identify x₁ = x₂`,`(⇐) singleton choice A₁ = {x}, A₂ = {y}`,`Correct use of f[∅] = ∅`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Without injectivity (⊇) fails: f(x) = x² on ℝ, A₁ = {1}, A₂ = {−1}: f[A₁ ∩ A₂] = ∅ but f[A₁] ∩ f[A₂] = {1}.`},

{id:'c44', topic:'fun', src:'Lecture wk06a (Prop B, C)', diff:2, title:'Preimages; f surjective ⇔ f[f←(B)] = B',
statement:`Let f : X → Y, <span class="m">f←(B) = {x ∈ X : f(x) ∈ B}</span>. Prove: (a) B₁ ⊆ B₂ ⇒ f←(B₁) ⊆ f←(B₂); (b) f←(B₁ ∩ B₂) = f←(B₁) ∩ f←(B₂) and f←(B₁ ∪ B₂) = f←(B₁) ∪ f←(B₂); (c) f is surjective ⇔ for all B ⊆ Y, <span class="m">f[f←(B)] = B</span>.`,
tech:['double','iff'], why:`Set equalities by double inclusion (or a chain of ⇔ on membership); (c) is an iff with a singleton trick for (⇐).`,
hints:[`x ∈ f←(B) ⇔ f(x) ∈ B. Translate membership and use ∧, ∨.`,`(c ⇒ ⊇) y ∈ B: surjectivity gives x with f(x) = y; then x ∈ f←(B).`,`(c ⇐) Take B = {y}: f[f←({y})] = {y} ≠ ∅, so f←({y}) ≠ ∅.`],
proof:`<div class="proof np"><p><b>Proof (direct for (a), (b); biconditional for (c)).</b></p><p class="small muted">Want: (a) monotone. (b) ∩, ∪ preserved. (c) f onto ⇔ ∀B, f[f←(B)] = B.</p><p><b>(a)</b> Let x ∈ f←(B₁): f(x) ∈ B₁ ⊆ B₂, so x ∈ f←(B₂).</p>
<p><b>(b)</b> x ∈ f←(B₁ ∩ B₂) ⇔ f(x) ∈ B₁ ∩ B₂ ⇔ f(x) ∈ B₁ ∧ f(x) ∈ B₂ ⇔ x ∈ f←(B₁) ∧ x ∈ f←(B₂) ⇔ x ∈ f←(B₁) ∩ f←(B₂). Replace ∩/∧ by ∪/∨ for the union. (No injectivity is needed for preimages.)</p>
<p><b>(c)</b> (⇒) Let B ⊆ Y. (⊆) y ∈ f[f←(B)] ⇒ y = f(x) with x ∈ f←(B) ⇒ y = f(x) ∈ B. (True for every f.) (⊇) y ∈ B: since f is onto, ∃x with f(x) = y ∈ B, so x ∈ f←(B) and y ∈ f[f←(B)].<br>(⇐) Let y ∈ Y. With B = {y}: f[f←({y})] = {y}. If f←({y}) were ∅ then f[∅] = ∅ ≠ {y}; so there is x ∈ f←({y}), i.e. f(x) = y. Hence f is onto.</p><p><b>Conclusion.</b> Therefore preimages respect ⊆, ∩ and ∪, and f is onto if and only if f[f←(B)] = B for all B ⊆ Y.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Membership translated correctly: x ∈ f←(B) ⇔ f(x) ∈ B`,`Equalities by both inclusions or a valid ⇔ chain`,`(c ⇒) notes which half needs surjectivity`,`(c ⇐) singleton B = {y} argument`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecturer: “This is not the inverse, this is the preimage. The preimage always exists.”`},

{id:'c45', topic:'fun', src:'Lecture wk06b', diff:2, title:'Inverse is unique; invertible ⇔ bijective',
statement:`f : X → Y is <i>invertible</i> if ∃g : Y → X with g(f(x)) = x ∀x ∈ X and f(g(y)) = y ∀y ∈ Y. Prove: (a) composition is associative; (b) an invertible f has a unique inverse; (c) f is invertible ⇔ f is a bijection.`,
tech:['direct','iff'], why:`(a) uses equality of functions pointwise; (b) is a uniqueness proof: assume two inverses g, h and show g = h; (c) is an iff.`,
hints:[`(b) Compute g = g∘id_Y = g∘(f∘h) = (g∘f)∘h = id_X∘h = h.`,`(c ⇒) g(f(x₁)) = g(f(x₂)) gives injectivity; y = f(g(y)) gives surjectivity.`,`(c ⇐) Define g(y) = the unique x with f(x) = y. Why does it exist, and why is it unique?`],
proof:`<div class="proof np"><p><b>Proof (direct for (a) and (b); biconditional for (c)).</b></p><p class="small muted">Want: (b) two inverses g, h ⇒ g = h. (c) invertible ⇔ bijection.</p><p><b>(a)</b> For x ∈ A: (h∘(g∘f))(x) = h(g(f(x))) = ((h∘g)∘f)(x). Equal at every point, so equal as functions.</p>
<p><b>(b)</b> Let g, h both be inverses of f. Then g = g∘id_Y = g∘(f∘h) = (g∘f)∘h = id_X∘h = h, using (a). So the inverse is unique.</p>
<p><b>(c)</b> (⇒) Let g be the inverse. If f(x₁) = f(x₂) then x₁ = g(f(x₁)) = g(f(x₂)) = x₂: injective. For y ∈ Y, x = g(y) satisfies f(x) = y: surjective.<br>(⇐) Let f be bijective. For y ∈ Y, surjectivity gives some x with f(x) = y, and injectivity makes it unique; set g(y) = x. Then f(g(y)) = y by construction, and for x ∈ X, g(f(x)) is the unique x′ with f(x′) = f(x), which is x. So g is an inverse.</p><p><b>Conclusion.</b> Therefore an invertible map has exactly one inverse, and f is invertible if and only if it is a bijection.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`(a) pointwise argument with “x arbitrary”`,`(b) assumes two inverses and shows equality`,`(c ⇒) both injective and surjective`,`(c ⇐) g well defined (existence AND uniqueness), then both conditions checked`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecturer: to show g is the inverse, check BOTH conditions. He uses the contrapositive often: not 1-1 or not onto ⇒ not invertible.`}
);

/* =========================== PROVE OR DISPROVE =========================== */
DATA.pd.push(
{topic:'rel', src:'WrapUp 2 P1(a)', s:`If R and S are equivalence relations on A, then R ∩ S is an equivalence relation.`, a:true,
 why:`<p>Reflexive: (a,a) is in both. Symmetric: (a,b) ∈ R ∩ S ⇒ (b,a) ∈ R and ∈ S. Transitive: (a,b),(b,c) ∈ R ∩ S ⇒ (a,c) ∈ R and ∈ S.</p>`},
{topic:'rel', src:'WrapUp 2 P1(b)', s:`If R and S are equivalence relations on A, then R ∪ S is an equivalence relation.`, a:false,
 why:`<p>A = {1,2,3}, R = I_A ∪ {(1,2),(2,1)}, S = I_A ∪ {(2,3),(3,2)}. (1,2),(2,3) ∈ R ∪ S but (1,3) ∉ R ∪ S: not transitive.</p>`},
{topic:'rel', src:'WrapUp 2 P1(c)', s:`If R and S are equivalence relations on A, then S∘R is an equivalence relation.`, a:false,
 why:`<p>Same R, S as above: (1,3) ∈ S∘R (1R2, 2S3) but (3,1) ∉ S∘R. Not symmetric. It is an equivalence relation exactly when S∘R = R∘S.</p>`},
{topic:'rel', s:`A relation that is symmetric and transitive is automatically reflexive.`, a:false,
 why:`<p>R = ∅ on A = {1} is symmetric and transitive (vacuously) but (1,1) ∉ R. The “proof” xRy ⇒ yRx ⇒ xRx needs some y with xRy, which may not exist.</p>`},
{topic:'rel', s:`If R is not reflexive, then R is irreflexive.`, a:false,
 why:`<p>On {1,2}, R = {(1,1)}: not reflexive ((2,2) ∉ R) and not irreflexive ((1,1) ∈ R).</p>`},
{topic:'rel', s:`Every asymmetric relation is antisymmetric.`, a:true,
 why:`<p>Let R be asymmetric and suppose xRy and yRx. Asymmetry says xRy ⇒ ¬(yRx), so the hypothesis is never satisfied; the implication (xRy ∧ yRx) ⇒ x = y holds vacuously.</p>`},
{topic:'rel', s:`A relation cannot be both symmetric and antisymmetric.`, a:false,
 why:`<p>I_A = {(x,x) : x ∈ A} is both. (So is ∅.) Antisymmetric only forbids xRy ∧ yRx with x ≠ y.</p>`},
{topic:'rel', src:'Lecture wk04a', s:`R is transitive if and only if R∘R ⊆ R.`, a:true,
 why:`<p>(⇒) (x,z) ∈ R∘R gives y with xRy, yRz, so xRz. (⇐) xRy, yRz give (x,z) ∈ R∘R ⊆ R.</p>`},
{topic:'rel', s:`On ℤ, the relation a ~ b ⇔ |a − b| ≤ 1 is an equivalence relation.`, a:false,
 why:`<p>Not transitive: 0 ~ 1 and 1 ~ 2 but |0 − 2| = 2. (Closeness does not chain.)</p>`},
{topic:'rel', src:'WrapUp 2 P2(b)', s:`On ℤ × ℤ (second coordinate allowed to be 0), (a,b) ∼ (c,d) ⇔ ad = bc is transitive.`, a:false,
 why:`<p>(1,2) ∼ (0,0) and (0,0) ∼ (3,5), but 1·5 ≠ 2·3. Cancelling d = 0 is not allowed.</p>`},
{topic:'ord', s:`Divisibility a ∣ b is a partial order on ℤ.`, a:false,
 why:`<p>Not antisymmetric: 2 ∣ −2 and −2 ∣ 2 but 2 ≠ −2. (On ℤ⁺ it is a partial order; on ℤ only a preorder.)</p>`},
{topic:'ord', s:`(P(X), ⊆) is a total order whenever X is nonempty.`, a:false,
 why:`<p>X = {1,2}: {1} ⊄ {2} and {2} ⊄ {1}. It is total only when |X| ≤ 1.</p>`},
{topic:'ord', s:`Every nonempty subset of ℝ that is bounded above has a maximum.`, a:false,
 why:`<p>A = {1 − 1/n : n ∈ ℕ⁺} has sup 1 but 1 ∉ A, so no maximum. Completeness gives a supremum, not a maximum.</p>`},
{topic:'ord', s:`If A, B ⊆ ℝ are nonempty, bounded above and A ∩ B ≠ ∅, then sup(A ∩ B) = min(sup A, sup B).`, a:false,
 why:`<p>A = {0,2}, B = {0,3}: sup(A ∩ B) = 0 &lt; 2. Only ≤ holds.</p>`},
{topic:'fun', s:`If g∘f is injective, then g is injective.`, a:false,
 why:`<p>f : {1} → {p,q}, f(1) = p; g : {p,q} → {0}, g ≡ 0. Then g∘f is injective (one point), but g(p) = g(q).</p>`},
{topic:'fun', s:`If g∘f is injective, then f is injective.`, a:true,
 why:`<p>Suppose f(a₁) = f(a₂). Then g(f(a₁)) = g(f(a₂)), so a₁ = a₂ by injectivity of g∘f.</p>`},
{topic:'fun', s:`If g∘f is surjective, then g is surjective.`, a:true,
 why:`<p>Let c ∈ C. Some a has g(f(a)) = c, so b = f(a) satisfies g(b) = c.</p>`},
{topic:'fun', s:`If g∘f is surjective, then f is surjective.`, a:false,
 why:`<p>f : {1} → {p,q}, f(1) = p; g : {p,q} → {0}. g∘f is onto {0} but q is not in the image of f.</p>`},
{topic:'fun', s:`For every f : X → Y and A₁, A₂ ⊆ X, f[A₁ ∩ A₂] = f[A₁] ∩ f[A₂].`, a:false,
 why:`<p>f(x) = x² on ℝ, A₁ = {1}, A₂ = {−1}: left side f[∅] = ∅, right side {1}. Only ⊆ holds in general; = holds for all A₁, A₂ iff f is injective.</p>`},
{topic:'fun', s:`For every f : X → Y and B₁, B₂ ⊆ Y, f←(B₁ ∩ B₂) = f←(B₁) ∩ f←(B₂).`, a:true,
 why:`<p>x ∈ f←(B₁ ∩ B₂) ⇔ f(x) ∈ B₁ ∧ f(x) ∈ B₂ ⇔ x ∈ f←(B₁) ∩ f←(B₂). Preimages preserve ∩ and ∪ with no extra hypothesis.</p>`},
{topic:'fun', s:`For every f : X → Y and B ⊆ Y, f[f←(B)] = B.`, a:false,
 why:`<p>f : {1} → {a,b}, f(1) = a, B = {b}: f←(B) = ∅ and f[∅] = ∅ ≠ B. Always f[f←(B)] ⊆ B; equality for all B iff f is onto.</p>`},
{topic:'fun', s:`c : ℤ → ℤ, c(x) = x² + x + 1 is surjective.`, a:false,
 why:`<p>c(x) = x(x + 1) + 1 is always odd (x(x + 1) is even), so 2 is never attained.</p>`},
{topic:'fun', s:`e : ℝ ∖ {−1} → ℝ, e(x) = 2x/(x + 1) is injective.`, a:true,
 why:`<p>2x₁/(x₁ + 1) = 2x₂/(x₂ + 1) ⇒ 2x₁x₂ + 2x₁ = 2x₁x₂ + 2x₂ ⇒ x₁ = x₂. (It is not surjective: 2 is missed.)</p>`},
{topic:'fun', s:`A function f : E → E on a finite set E that is injective must be surjective.`, a:true,
 why:`<p>|f[E]| = |E| since f is one-to-one, and f[E] ⊆ E; a subset of a finite set with the same size is the whole set. (False for infinite sets: n ↦ n + 1 on ℕ.)</p>`},
{topic:'fun', s:`The composition of two bijections is a bijection.`, a:true,
 why:`<p>Composition preserves injectivity and surjectivity. Equivalently, (g∘f)⁻¹ = f⁻¹∘g⁻¹ is an inverse. This is why ≈ (equinumerous) is transitive.</p>`}
);

/* =========================== FIND THE BUG =========================== */
DATA.bugs.push(
{topic:'rel', src:'Classic fallacy', claim:`If a relation R on A is symmetric and transitive, then R is reflexive.`,
 lines:[[`Let x ∈ A be arbitrary.`,`start of reflexivity proof`],[`Take y ∈ A with xRy.`,`choose a partner`],[`By symmetry, yRx.`,`symmetry`],[`From xRy and yRx, transitivity gives xRx.`,`transitivity`],[`Since x was arbitrary, R is reflexive.`,`generalisation`]],
 bad:[1], explain:`<p>Line 2 assumes some y with xRy exists. Nothing guarantees that: x may be related to nothing. The claim is <b>false</b>: R = ∅ on A = {1} is symmetric and transitive but not reflexive. (The argument does show: if every x is related to something, then R is reflexive.)</p>`},
{topic:'rel', src:'WrapUp 2 P2', claim:`On ℤ × ℤ, (a,b) ∼ (c,d) ⇔ ad = bc is transitive.`,
 lines:[[`Assume (a,b) ∼ (c,d) and (c,d) ∼ (e,f).`,`hypothesis`],[`So ad = bc and cf = de.`,`definition`],[`Then (af)d = (ad)f = (bc)f = b(cf) = b(de) = (be)d.`,`substitute`],[`Cancelling d gives af = be.`,`cancel`],[`So (a,b) ∼ (e,f).`,`definition`]],
 bad:[3], explain:`<p>Cancelling d requires d ≠ 0. On ℤ × ℤ the middle pair may be (0,0). The claim is <b>false</b>: (1,2) ∼ (0,0) ∼ (3,5) but (1,2) ≁ (3,5). On ℤ × (ℤ ∖ {0}) the proof is correct.</p>`},
{topic:'fun', src:'Typical exam error', claim:`f : ℤ → ℤ, f(x) = 3x − 2 is surjective.`,
 lines:[[`Let y ∈ ℤ be arbitrary.`,`start`],[`Take x = (y + 2)/3.`,`solve 3x − 2 = y`],[`Then f(x) = 3·(y + 2)/3 − 2 = y.`,`compute`],[`So every y has a preimage and f is surjective.`,`conclusion`]],
 bad:[1], explain:`<p>The chosen x must lie in the domain ℤ, and (y + 2)/3 is not always an integer (y = 2 gives 4/3). The claim is <b>false</b>: 2 has no integer preimage. (f is injective, though.)</p>`},
{topic:'fun', src:'Typical exam error', claim:`f : ℝ → ℝ, f(x) = x² is injective.`,
 lines:[[`Let x₁, x₂ ∈ ℝ with x₁ = x₂.`,`assume`],[`Then x₁² = x₂².`,`square both sides`],[`So f(x₁) = f(x₂).`,`definition of f`],[`Hence f is injective.`,`conclusion`]],
 bad:[0], explain:`<p>The proof starts from x₁ = x₂ and shows f(x₁) = f(x₂). That is the definition of a <i>function</i> (well-definedness), not injectivity. Injective needs f(x₁) = f(x₂) ⇒ x₁ = x₂. The claim is <b>false</b>: f(1) = f(−1).</p>`},
{topic:'rel', src:'Typical exam error', claim:`The relation R = {(1,2), (2,1)} on {1,2} is antisymmetric.`,
 lines:[[`Antisymmetric means “not symmetric”.`,`definition`],[`R is not symmetric because (1,1) ∉ R.`,`check`],[`So R is antisymmetric.`,`conclusion`]],
 bad:[0], explain:`<p>Antisymmetric means (xRy ∧ yRx) ⇒ x = y; it is not the negation of symmetric. (Line 2 is also wrong: (1,1) ∉ R has nothing to do with symmetry.) The claim is <b>false</b>: 1R2 and 2R1 with 1 ≠ 2. In fact R is symmetric.</p>`},
{topic:'fun', src:'Typical exam error', claim:`If g∘f is injective, then g is injective.`,
 lines:[[`Let b₁, b₂ ∈ B with g(b₁) = g(b₂).`,`start`],[`Write b₁ = f(a₁) and b₂ = f(a₂).`,`b₁, b₂ come from A`],[`Then (g∘f)(a₁) = (g∘f)(a₂).`,`substitute`],[`g∘f injective gives a₁ = a₂, so b₁ = f(a₁) = f(a₂) = b₂.`,`conclude`]],
 bad:[1], explain:`<p>Line 2 assumes every b ∈ B is f of something, i.e. that f is surjective. Not given. The claim is <b>false</b>: f : {1} → {p,q}, f(1) = p, g ≡ 0 on {p,q}. g∘f is injective, g is not. (With f surjective the argument works.)</p>`},
{topic:'ord', src:'Typical exam error', claim:`sup {1 − 1/n : n ∈ ℕ⁺} = 1.`,
 lines:[[`For every n, 1 − 1/n &lt; 1, so 1 is an upper bound.`,`part (i)`],[`The elements 1 − 1/n get arbitrarily close to 1.`,`intuition`],[`Therefore 1 is the least upper bound.`,`conclusion`]],
 bad:[1], explain:`<p>The claim is <b>true</b>, but line 2 is not a proof of part (ii). You must show every upper bound u satisfies u ≥ 1: assume u &lt; 1, pick n &gt; 1/(1 − u) (Archimedean), then 1 − 1/n &gt; u, contradicting that u is an upper bound.</p>`}
);

/* =========================== FLASHCARDS =========================== */
DATA.cards.push(
['rel',`Relation from A into B`,`Any subset R ⊆ A × B. Write xRy for (x,y) ∈ R. A relation on A is R ⊆ A × A. (Lecturer: “I will ask in all exams.”)`],
['rel',`Reflexive / irreflexive`,`Reflexive: ∀x ∈ A, xRx. Irreflexive: ∀x ∈ A, (x,x) ∉ R. “Not reflexive” ≠ “irreflexive”.`],
['rel',`Symmetric / asymmetric`,`Symmetric: ∀x,y (xRy ⇒ yRx). Asymmetric: ∀x,y (xRy ⇒ ¬yRx); it forbids every (x,x).`],
['rel',`Antisymmetric`,`∀x,y ((xRy ∧ yRx) ⇒ x = y). Negation: ∃x,y with xRy, yRx, x ≠ y.`],
['rel',`Transitive (and its negation)`,`∀x,y,z ((xRy ∧ yRz) ⇒ xRz). Not transitive: ∃x,y,z with xRy, yRz, ¬xRz.`],
['rel',`Inverse relation R⁻¹`,`R⁻¹ = {(y,x) : (x,y) ∈ R}, a relation from B into A. R symmetric ⇔ R = R⁻¹.`],
['rel',`Composition S∘R`,`S∘R = {(x,z) : ∃y (xRy ∧ ySz)}: first R, then S. (S∘R)⁻¹ = R⁻¹∘S⁻¹.`],
['rel',`Properties as inclusions`,`Reflexive ⇔ I_A ⊆ R. Symmetric ⇔ R = R⁻¹. Antisymmetric ⇔ R ∩ R⁻¹ ⊆ I_A. Transitive ⇔ R∘R ⊆ R.`],
['rel',`Equivalence relation`,`Reflexive, symmetric and transitive.`],
['rel',`Equivalence class [a]`,`[a] = {x ∈ A : xRa}. Key fact: [a] = [b] ⇔ aRb. Distinct classes are disjoint. A/R = set of all classes.`],
['rel',`Partition of A`,`A family of subsets that are (1) nonempty, (2) pairwise disjoint, (3) whose union is A. Classes of an equivalence relation form one.`],
['rel',`Fast way to prove a relation is an equivalence`,`Write it as aRb ⇔ f(a) = f(b). Then all three properties come from equality, and the classes are the nonempty fibres f←({y}).`],
['ord',`Partial order (order relation)`,`Reflexive, antisymmetric and transitive. Total: additionally any two elements are comparable.`],
['ord',`Preorder`,`Reflexive and transitive. E = R ∩ R⁻¹ is an equivalence; R induces a partial order on A/E.`],
['ord',`Upper bound / supremum`,`u is an upper bound of X if ∀x ∈ X, x ≤ u. sup X = ℓ: (i) ℓ is an upper bound; (ii) ℓ ≤ u for every upper bound u.`],
['ord',`Completeness of ℝ`,`Every nonempty subset of ℝ that is bounded above has a supremum in ℝ. ℚ lacks this: {x ∈ ℚ : x² &lt; 2}.`],
['ord',`sup and inf in (P(X), ⊆)`,`sup 𝒮 = ⋃𝒮, inf 𝒮 = ⋂𝒮. sup{A,B} = A ∪ B, inf{A,B} = A ∩ B.`],
['fun',`Function f : A → B (as a relation)`,`A relation f ⊆ A × B with ∀x ∈ A ∃!y ∈ B, (x,y) ∈ f. Equality: f = g ⇔ ∀x f(x) = g(x).`],
['fun',`Injective (one-to-one)`,`f(x₁) = f(x₂) ⇒ x₁ = x₂ (equivalently x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂)). Disprove: two inputs, same output.`],
['fun',`Surjective (onto)`,`∀y ∈ B ∃x ∈ A, f(x) = y. Prove: “Let y ∈ B be arbitrary”, build x IN THE DOMAIN. Disprove: one y never hit.`],
['fun',`Image f[A] and preimage f←(B)`,`f[A] = {f(x) : x ∈ A}; f←(B) = {x : f(x) ∈ B}. The preimage always exists; it is not the inverse.`],
['fun',`Invertible`,`∃g : Y → X with g(f(x)) = x ∀x and f(g(y)) = y ∀y. Inverse is unique. Invertible ⇔ bijective.`],
['fun',`Which image identities need hypotheses?`,`f[A₁ ∩ A₂] ⊆ f[A₁] ∩ f[A₂] always; ⊇ needs injective. f[f←(B)] ⊆ B always; ⊇ needs onto. Preimages preserve ∩, ∪ always.`],
['fun',`g∘f facts`,`f, g injective ⇒ g∘f injective; same for surjective. g∘f injective ⇒ f injective. g∘f surjective ⇒ g surjective.`],
['fun',`Number of maps / relations on an n-set`,`Relations: 2^(n²). Maps: nⁿ. Injective = bijective maps: n!.`],
['fun',`Floor characterisation`,`⌊x⌋ = k ⇔ k ∈ ℤ and k ≤ x &lt; k + 1. Write x = n + r, 0 ≤ r &lt; 1; ⌊x + n⌋ = ⌊x⌋ + n.`]
);

/* ---- added from lecture wk04b ---- */
DATA.problems.push(
{id:'c15', topic:'rel', src:'Lecture wk04b (Prop 3)', diff:3, title:'Every partition comes from an equivalence relation',
statement:`Let {A_α}<sub>α∈I</sub> be a partition of A. Prove that there is an equivalence relation R on A with <span class="m">A/R = {A_α}<sub>α∈I</sub></span>.`,
tech:['construct','props','double'], why:`An existence claim: construct R (“same block”), prove it is an equivalence relation, then prove two families of sets are equal by double inclusion.`,
hints:[`Define xRy ⇔ ∃α ∈ I with x ∈ A_α and y ∈ A_α.`,`Transitive: xRy gives α, yRz gives β. Do not assume α = β; y ∈ A_α ∩ A_β forces A_α = A_β.`,`A/R ⊆ {A_α}: for x̄, pick α with x ∈ A_α and show x̄ = A_α. The elements here are sets.`],
proof:`<div class="proof np"><p><b>Proof (direct, by construction).</b> Define xRy ⇔ ∃α ∈ I (x ∈ A_α ∧ y ∈ A_α).</p><p class="small muted">Want: (1) R is an equivalence relation; (2) A/R = {A_α}<sub>α∈I</sub>.</p>
<p><b>(1) Reflexive.</b> Let x ∈ A. Since ⋃A_α = A, x ∈ A_α for some α, so xRx. <b>Symmetric.</b> If x, y ∈ A_α then y, x ∈ A_α. <b>Transitive.</b> Assume xRy and yRz: x, y ∈ A_α and y, z ∈ A_β. Then y ∈ A_α ∩ A_β ≠ ∅, and distinct blocks are disjoint, so A_α = A_β. Hence x, z ∈ A_α and xRz.</p>
<p><b>(2) (⊆)</b> Let x̄ ∈ A/R and pick α with x ∈ A_α. If y ∈ x̄, then x, y share a block, which must be A_α (blocks are disjoint and x ∈ A_α), so y ∈ A_α. If y ∈ A_α, then xRy, so y ∈ x̄. Hence x̄ = A_α ∈ {A_α}. <b>(⊇)</b> Let A_{α₀} be a block; it is nonempty, so pick x ∈ A_{α₀}. As above, A_{α₀} = x̄ ∈ A/R.</p>
<p><b>Conclusion.</b> Therefore R is an equivalence relation on A whose quotient A/R is exactly the given partition.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Defines R explicitly (“same block”)`,`Transitivity uses a second index β and derives A_α = A_β from disjointness`,`Equality of families by double inclusion, treating classes as sets`,`Uses nonemptiness of blocks for (⊇)`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecturer: “I'm not sure whether it is the same α, so I will write β.” and “Your elements are sets: be careful about that.”`},

{id:'c29', topic:'ord', src:'Lecture wk04b (Prop 4)', diff:1, title:'The greatest lower bound (and sup) is unique',
statement:`Let (A, ≤) be an ordered set and B ⊆ A. Prove: if a and b are both greatest lower bounds of B, then a = b. State and prove the same for least upper bounds.`,
tech:['direct'], why:`A uniqueness proof: assume two objects with the property and show they are equal; antisymmetry finishes it.`,
hints:[`b is a lower bound and a is the greatest one: what does that give?`,`Get both a ≤ b and b ≤ a.`,`Which property of an order relation turns these into a = b?`],
proof:`<div class="proof np"><p><b>Proof (direct).</b> Assume a and b are both greatest lower bounds of B.</p><p class="small muted">Want: a = b.</p>
<p>b is a lower bound of B and a is the greatest lower bound, so b ≤ a. Symmetrically, a is a lower bound and b is the greatest, so a ≤ b. By antisymmetry of ≤, a = b.</p>
<p>For sups: if a, b are both least upper bounds, a is an upper bound and b is least, so b ≤ a; likewise a ≤ b; antisymmetry gives a = b.</p>
<p><b>Conclusion.</b> Therefore a set has at most one greatest lower bound and at most one least upper bound, so writing inf B and sup B is justified.</p></div>`,
rubric:[`Opens with a sentence naming the technique (the first sentence is about a third of the marks)`,`Assumes two glbs a, b`,`Derives both b ≤ a and a ≤ b, each from the definition`,`Cites antisymmetry`,`Ends with an explicit conclusion sentence (“Therefore …”)`],
notes:`Lecturer: “Proof by contradiction, I guess? No, we don't need that.” Use antisymmetry.`}
);
DATA.pd.push(
{topic:'ord', src:'Lecture wk04b', s:`In every ordered set, a subset that is bounded below has a greatest lower bound.`, a:false,
 why:`<p>A = {a,b,c,d} ordered by a ≤ c, a ≤ d, b ≤ c, b ≤ d (plus x ≤ x), B = {c,d}. Lower bounds: a and b, which are incomparable, so neither is greatest. (In ℝ the completeness axiom guarantees inf exists; in general posets it need not.)</p>`},
{topic:'rel', src:'Lecture wk04b', s:`If R is an equivalence relation and x is not related to y, then x̄ ∩ ȳ = ∅.`, a:true,
 why:`<p><b>Proof by contradiction.</b> Assume x R̸ y and z ∈ x̄ ∩ ȳ. Then xRz and yRz (classes x̄ = {z : xRz}); by symmetry zRy, so xRy by transitivity. Contradiction.</p>`}
);
DATA.cards.push(
['rel',`Quotient set A/R`,`A/R = {x̄ : x ∈ A}. Its elements are sets (the classes). Example: ℤ mod 3 = {0̄, 1̄, 2̄}.`],
['rel',`Partition ⇒ equivalence relation`,`xRy ⇔ x and y lie in the same block. Then A/R is exactly the partition (Lecture wk04b, Prop 3).`],
['ord',`Comparable / total order`,`a, b comparable if a ≤ b or b ≤ a. Total order: every pair is comparable. (P(A), ⊆) is not total when |A| ≥ 2.`],
['ord',`Uniqueness of sup / inf`,`Two glbs a, b: b ≤ a and a ≤ b, so a = b by antisymmetry. No contradiction needed.`]
);
