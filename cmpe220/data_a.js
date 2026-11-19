// Block A: logic, quantifiers, proof techniques.
(function(){
const P = DATA.problems, Q = DATA.pd, B = DATA.bugs, C = DATA.cards;

/* ======================= PROBLEMS ======================= */
P.push(
{id:'a01', topic:'logic', src:'PS Logic 2.1', diff:1, title:'Equivalences without truth tables',
statement:`(a) Show algebraically that <span class="m">(p ⇒ q) ∧ (p ⇒ r) ≡ p ⇒ (q ∧ r)</span>.<br>(b) Is <span class="m">(p ⇒ q) ⇒ r ≡ p ⇒ (q ⇒ r)</span>? Prove it or give a falsifying assignment.<br>(c) Express <span class="m">p ∨ q</span> and <span class="m">p ∧ q</span> using only ¬ and ⇒.<br>(d) Without a full truth table, show <span class="m">[(p ⇒ q) ∧ (q ⇒ r)] ⇒ (p ⇒ r)</span> is a tautology.`,
tech:['chain','counter'], why:`Equivalences are proved by rewriting with known laws; a non-equivalence needs one assignment where the two sides differ.`,
hints:[`Rewrite every implication with <span class="m">p ⇒ q ≡ ¬p ∨ q</span>.`,`(a) is the distributive law <span class="m">(¬p ∨ q) ∧ (¬p ∨ r) ≡ ¬p ∨ (q ∧ r)</span>. For (b) try p = F, r = F.`,`(d): suppose it is false. Then p ⇒ r is false, so p = T and r = F, and both premises are true. Follow modus ponens.`],
proof:`<div class="proof"><p>(a) <span class="m">(p ⇒ q) ∧ (p ⇒ r) ≡ (¬p ∨ q) ∧ (¬p ∨ r) ≡ ¬p ∨ (q ∧ r) ≡ p ⇒ (q ∧ r)</span> (implication law, distributive law, implication law).</p>
<p>(b) Not equivalent. Take p = F, r = F, q arbitrary. LHS: p ⇒ q is T, so (T) ⇒ F is F. RHS: F ⇒ (q ⇒ r) is T. The sides differ, so ⇒ is not associative.</p>
<p>(c) <span class="m">p ∨ q ≡ ¬p ⇒ q</span> and <span class="m">p ∧ q ≡ ¬(p ⇒ ¬q)</span>, since <span class="m">¬(p ⇒ ¬q) ≡ ¬(¬p ∨ ¬q) ≡ p ∧ q</span>.</p>
<p>(d) <b>Proof by contradiction.</b> Assume for a contradiction some assignment makes it false. An implication is false only when its hypothesis is T and conclusion F, so p ⇒ r is F (p = T, r = F) and both p ⇒ q and q ⇒ r are T. From p = T and p ⇒ q, q = T. From q = T and q ⇒ r, r = T, contradicting r = F. So no falsifying assignment exists: it is a tautology.</p></div>`,
rubric:[`(a) names each law used (implication, distributive)`,`(b) gives a concrete assignment and evaluates both sides`,`(c) both expressions correct, with the ¬(p ⇒ ¬q) check`,`(d) argues from “the only way an implication is false” rather than a full table`]},

{id:'a02', topic:'logic', src:'PS Logic 2.3', diff:1, title:'Formal derivation: derive ¬q',
statement:`Using rules of inference, derive <span class="m">¬q</span> from the premises<br>(1) <span class="m">(p ∧ q) ⇒ r</span>, (2) <span class="m">¬r ∨ s</span>, (3) <span class="m">¬s</span>, (4) <span class="m">p</span>.<br>Name the rule used in every line.`,
tech:['inference'], why:`The question asks for a line-by-line derivation with a named rule on each line.`,
hints:[`Start from the two premises that mention s: (2) and (3).`,`Disjunctive syllogism on (2),(3) gives ¬r; then modus tollens with (1).`,`¬(p ∧ q) ≡ ¬p ∨ ¬q, and you know p.`],
proof:`<ol class="deriv"><li><span>(p ∧ q) ⇒ r</span><i class="why">premise</i></li><li><span>¬r ∨ s</span><i class="why">premise</i></li><li><span>¬s</span><i class="why">premise</i></li><li><span>p</span><i class="why">premise</i></li><li><span>¬r</span><i class="why">disjunctive syllogism 2, 3</i></li><li><span>¬(p ∧ q)</span><i class="why">modus tollens 1, 5</i></li><li><span>¬p ∨ ¬q</span><i class="why">De Morgan (substitution) 6</i></li><li><span>¬q</span><i class="why">disjunctive syllogism 7, 4 (p ≡ ¬¬p)</i></li></ol>`,
rubric:[`Every line has a rule and the line numbers it uses`,`Correct use of disjunctive syllogism (needs the negation of one disjunct)`,`Modus tollens applied to the right implication`,`De Morgan step written explicitly`]},

{id:'a03', topic:'logic', src:'PS Logic 2.4', diff:2, title:'Derivation three ways: direct, contradiction, DPI',
statement:`Premises: (1) <span class="m">p ⇒ (q ∧ r)</span>, (2) <span class="m">(s ∨ t) ⇒ p</span>, (3) <span class="m">r ⇒ u</span>, (4) <span class="m">¬u</span>.<br>(a) Prove <span class="m">¬t</span> directly. (b) Prove <span class="m">¬t</span> by the contradiction rule (add t as a premise). (c) Using DPI, prove <span class="m">w ⇒ (¬s ∧ w)</span>.`,
tech:['inference','contradiction'], why:`A formal derivation; part (b) explicitly uses the contradiction rule and (c) the direct proof of implication (DPI).`,
hints:[`From (3),(4) modus tollens gives ¬r.`,`¬r ⇒ ¬(q ∧ r) ⇒ ¬p ⇒ ¬(s ∨ t) ⇒ ¬s ∧ ¬t.`,`For (b): from t get s ∨ t by disjunction introduction, then run forward until you hit u, contradicting (4).`],
proof:`<p><b>(a)</b></p><ol class="deriv"><li><span>¬r</span><i class="why">MT 3, 4</i></li><li><span>¬q ∨ ¬r</span><i class="why">disj. intro 5</i></li><li><span>¬(q ∧ r)</span><i class="why">De Morgan 6</i></li><li><span>¬p</span><i class="why">MT 1, 7</i></li><li><span>¬(s ∨ t)</span><i class="why">MT 2, 8</i></li><li><span>¬s ∧ ¬t</span><i class="why">De Morgan 9</i></li><li><span>¬t</span><i class="why">conj. elim 10</i></li></ol>
<p class="small muted">(Lines numbered 5–11 in the original, after the 4 premises.)</p>
<p><b>(b)</b></p><ol class="deriv"><li><span>t</span><i class="why">added premise</i></li><li><span>s ∨ t</span><i class="why">disj. intro</i></li><li><span>p</span><i class="why">MP 2</i></li><li><span>q ∧ r</span><i class="why">MP 1</i></li><li><span>r</span><i class="why">conj. elim</i></li><li><span>u</span><i class="why">MP 3</i></li><li><span>u ∧ ¬u</span><i class="why">adjunction with 4: contradiction, so ¬t</i></li></ol>
<p><b>(c)</b> Add w as a premise (DPI). Lines of (a) up to ¬s ∧ ¬t give ¬s by conjunction elimination. Adjunction with w gives ¬s ∧ w. By DPI, <span class="m">w ⇒ (¬s ∧ w)</span>.</p>`,
rubric:[`(a) correct chain MT → De Morgan → MT → MT → De Morgan → conj. elim`,`(b) adds t, derives a statement of the form C ∧ ¬C, concludes ¬t`,`(c) states that w is added as a premise and the conclusion follows by DPI`,`Every line cites rule and line numbers`]},

{id:'a04', topic:'logic', src:'PS Logic 2.5 · WrapUp 1 P2', diff:2, title:'Knights, knaves and a spy',
statement:`Knights always tell the truth, knaves always lie. Let a: “A is a knight”, b: “B is a knight”.<br>(a) A says “At least one of us is a knave.” Determine A and B.<br>(b) A says “If I am a knight, then B is a knight.” Determine A and B.<br>(c) A, B, C are a knight, a knave and a spy (who may lie or tell the truth), in some order. A: “I am the knight.” B: “A is not the knave.” C: “B is not the knave.” Who is who?`,
tech:['cases'], why:`Use the speaker rule a ⇔ S and split on the unknown truth value (or on A's role in (c)).`,
hints:[`A statement S said by A satisfies <span class="m">a ⇔ S</span>.`,`(a) a ⇔ (¬a ∨ ¬b). Try a = F first. (b) a ⇔ (a ⇒ b): a = F makes the RHS vacuously true.`,`(c) The speaker rule fails for the spy, so do cases on A's role: knight, spy, knave.`],
proof:`<div class="proof"><p>(a) <span class="m">a ⇔ (¬a ∨ ¬b)</span>. If a = F, the RHS contains ¬a = T, so it is T, giving F ⇔ T: impossible. So a = T, and the equation reduces to ¬b. A is a knight and B is a knave.</p>
<p>(b) <span class="m">a ⇔ (a ⇒ b)</span>. If a = F, a ⇒ b is vacuously T: F ⇔ T, impossible. So a = T, hence a ⇒ b is T, and by modus ponens b = T. Both are knights.</p>
<p>(c) <b>Proof by cases</b> on A's role (exactly one of knight, spy, knave).</p><p>Case A is the knight: B's statement “A is not the knave” is true, so B is not the knave; B is not the knight either, so B is the spy and C the knave. But C's statement “B is not the knave” is then true, which a knave cannot say. Contradiction.<br>
Case A is the spy: B's statement is true, so B is not the knave, so B is the knight and C the knave. Again C says something true. Contradiction.<br>
Case A is the knave: A's “I am the knight” is false (consistent). B's statement is false, so B is not the knight; B is the spy, C the knight. C's “B is not the knave” is true (consistent).<br>
Unique solution: A knave, B spy, C knight.</p></div>`,
rubric:[`Formalises the statement with the speaker rule a ⇔ S`,`Rules out the impossible case with an explicit contradiction`,`(c) splits into exhaustive cases on A's role and checks each statement`,`States the final assignment and checks it is consistent`]},

{id:'a05', topic:'logic', src:'WrapUp 1 P2a–b', diff:3, title:'The one-question puzzle',
statement:`A villager is a knight or a knave (unknown). Let a: “you are a knight”. Show that for any proposition Q the answer to the yes/no question “Is <span class="m">a ⇔ Q</span> true?” is “yes” exactly when Q is true. Then explain why “Are you a knave?” reveals nothing, and give a question that does reveal whether the villager is a knight.`,
tech:['cases'], why:`The villager's type a is unknown, so check a = T and a = F and see that a cancels.`,
hints:[`Answering “yes” to “Is X true?” means saying X; “no” means saying ¬X. Speaker rule: a ⇔ (what was said).`,`After “yes”: a ⇔ (a ⇔ Q). Evaluate for a = T and a = F using T ⇔ q ≡ q and F ⇔ q ≡ ¬q.`,`“Are you a knave?”: a “yes” gives a ⇔ ¬a (never true), a “no” gives a ⇔ a (always true).`],
proof:`<div class="proof"><p>Speaker rule: if the villager says S then <span class="m">a ⇔ S</span>. A “yes” to X means S = X, a “no” means S = ¬X.</p>
<p>Answer “yes”: <span class="m">a ⇔ (a ⇔ Q)</span>. If a = T: T ⇔ (T ⇔ Q) ≡ Q. If a = F: F ⇔ (F ⇔ Q) ≡ ¬(¬Q) ≡ Q. Either way the equation says Q is true.</p>
<p>Answer “no”: <span class="m">a ⇔ ¬(a ⇔ Q)</span>. If a = T: ¬(T ⇔ Q) ≡ ¬Q. If a = F: F ⇔ ¬(F ⇔ Q) ≡ ¬¬(¬Q) ≡ ¬Q. Either way Q is false. So “yes” exactly when Q holds.</p>
<p>“Are you a knave?” asks X = ¬a. “Yes” would give a ⇔ ¬a, false for both values, so nobody says yes; “no” gives a ⇔ a, true for both values. Everyone answers “no”, so the answer carries no information.</p>
<p>Ask a question with known truth value, e.g. “Is 1 + 1 = 2?”. “Yes” gives a ⇔ T ≡ a (knight); “no” gives a ⇔ F ≡ ¬a (knave).</p></div>`,
rubric:[`States and uses the speaker rule a ⇔ S`,`Checks both a = T and a = F for both answers`,`Explains the knave question via a ⇔ ¬a / a ⇔ a`,`Gives a working question with known truth value`]},

{id:'a06', topic:'quant', src:'PS Logic 3.3', diff:2, title:'Unique existence',
statement:`Write <span class="m">∃!x P(x)</span> without the symbol ∃!, negate it, and state the negation in words. Then prove: there is a unique <span class="m">x ∈ ℝ</span> such that <span class="m">xy + x − 4 = 4y</span> for every <span class="m">y ∈ ℝ</span>.`,
tech:['construct'], why:`∃! needs two parts: exhibit a witness (existence), then show any other witness equals it (uniqueness).`,
hints:[`<span class="m">∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) ⇒ y = x))</span>.`,`Factor: <span class="m">xy + x − 4 − 4y = (x − 4)(y + 1)</span>. Guess x = 4.`,`For uniqueness, the property holds for every y, so plug in a convenient y such as y = 0.`],
proof:`<div class="proof"><p><span class="m">∃!x P(x) ≡ ∃x (P(x) ∧ ∀y (P(y) ⇒ y = x))</span>. Negation: <span class="m">∀x (¬P(x) ∨ ∃y (P(y) ∧ y ≠ x))</span>: “either no x satisfies P, or at least two different elements do.”</p>
<p>Let P(x): ∀y ∈ ℝ (xy + x − 4 = 4y). We prove ∃!x P(x) in two parts.</p>
<p><i>Existence.</i> Take x = 4. For every y: 4y + 4 − 4 = 4y. So P(4).</p>
<p><i>Uniqueness.</i> Suppose P(x) holds for some x ∈ ℝ. The equation holds for every y, in particular for y = 0: x·0 + x − 4 = 0, so x = 4.</p>
<p>Hence exactly one real number, x = 4, has the property.</p></div>`,
rubric:[`Correct ∃-free form and correct negation (with the ∃y P(y) ∧ y ≠ x part)`,`Existence: explicit witness verified for all y`,`Uniqueness: assumes an arbitrary x with the property and derives x = 4`,`Uses a specific y (instantiation) legitimately`]},

{id:'a07', topic:'quant', src:'PS Logic 3.5', diff:2, title:'Formal proof with quantifiers',
statement:`Using rules of inference, show that the premises <span class="m">∀x (P(x) ⇒ Q(x))</span>, <span class="m">∀x (Q(x) ⇒ ¬R(x))</span>, <span class="m">∃x R(x)</span> imply <span class="m">∃x ¬P(x)</span>.`,
tech:['inference'], why:`Strip quantifiers (EI, UI), work propositionally, then put ∃ back (EG).`,
hints:[`Do existential instantiation first: R(c) for a new name c.`,`Then universal instantiation of both ∀ premises at the same c.`,`Two modus tollens steps, then existential generalisation.`],
proof:`<ol class="deriv"><li><span>∃x R(x)</span><i class="why">premise</i></li><li><span>R(c)</span><i class="why">EI 1 (c a new name)</i></li><li><span>Q(c) ⇒ ¬R(c)</span><i class="why">UI</i></li><li><span>¬Q(c)</span><i class="why">MT 2, 3 (R(c) ≡ ¬¬R(c))</i></li><li><span>P(c) ⇒ Q(c)</span><i class="why">UI</i></li><li><span>¬P(c)</span><i class="why">MT 4, 5</i></li><li><span>∃x ¬P(x)</span><i class="why">EG 6</i></li></ol>`,
notes:`EI must come <b>before</b> UI: EI needs a fresh name, while UI can be applied to any element, including c.`,
rubric:[`EI done first with a fresh constant`,`UI instantiated at the same c`,`Correct modus tollens steps with double negation noted`,`Concludes by EG`]},

{id:'a08', topic:'quant', src:'PS Logic 3.4 · 7.3a', diff:2, title:'Translate into quantifiers',
statement:`Domain: all people. S(x): x is a student in this class; L(x): x likes discrete math; M(x, y): x has sent a message to y; K(x, y): x knows y.<br>(a) Every student in this class has sent a message to at least one other student in this class.<br>(b) Some student in this class has received a message from every other student in this class.<br>(c) There are exactly two students in this class who like discrete math.<br>(d) There is no student in this class who knows everybody else in this class. Also give the version with ¬ pushed inside.`,
tech:['construct'], why:`Build each formula piece by piece: restrict with S(·) using ⇒ under ∀ and ∧ under ∃, and remember “other” means y ≠ x.`,
hints:[`“Every student …”: <span class="m">∀x (S(x) ⇒ …)</span>. “Some student …”: <span class="m">∃x (S(x) ∧ …)</span>.`,`“Other student”: <span class="m">S(y) ∧ y ≠ x</span>.`,`“Exactly two”: at least two distinct ones, plus every one equals one of them.`],
proof:`<div class="proof np"><p>(a) <span class="m">∀x (S(x) ⇒ ∃y (S(y) ∧ y ≠ x ∧ M(x, y)))</span></p>
<p>(b) <span class="m">∃x (S(x) ∧ ∀y ((S(y) ∧ y ≠ x) ⇒ M(y, x)))</span></p>
<p>(c) <span class="m">∃x ∃y [S(x) ∧ L(x) ∧ S(y) ∧ L(y) ∧ x ≠ y ∧ ∀z ((S(z) ∧ L(z)) ⇒ (z = x ∨ z = y))]</span><br>The first part gives at least two, the ∀z part at most two.</p>
<p>(d) <span class="m">¬∃x [S(x) ∧ ∀y ((S(y) ∧ y ≠ x) ⇒ K(x, y))]</span>, equivalently <span class="m">∀x [S(x) ⇒ ∃y (S(y) ∧ y ≠ x ∧ ¬K(x, y))]</span>.</p></div>`,
notes:`Classic slips: ∃x (S(x) ⇒ …) instead of ∃x (S(x) ∧ …); forgetting y ≠ x for “other”; forgetting S(y) for “in this class”.`,
rubric:[`∀ paired with ⇒, ∃ paired with ∧`,`“other” encoded as y ≠ x`,`“exactly two” has both the at-least and at-most parts`,`Negation pushed in correctly (¬∀ → ∃¬, ¬(p ⇒ q) → p ∧ ¬q)`]},

{id:'a09', topic:'quant', src:'PS Logic 7.1', diff:2, title:'Diagonal witness: prove or disprove',
statement:`Prove or disprove (for every non-empty domain and every predicate P):<br>(a) <span class="m">∀x P(x, x) ⇒ ∀x ∃y P(x, y)</span><br>(b) <span class="m">∀x ∃y P(x, y) ⇒ ∀z P(z, z)</span>`,
tech:['inference','counter'], why:`(a) is a general argument using UI, EG, UG; (b) is false, so one domain and predicate suffice.`,
hints:[`(a) Assume the hypothesis, take an arbitrary c, and get P(c, c).`,`From P(c, c), existential generalisation with witness y = c gives ∃y P(c, y).`,`(b) Try domain ℤ and P(x, y): x &lt; y.`],
proof:`<div class="proof"><p>(a) True. <b>Direct proof.</b> Suppose ∀x P(x, x). Let c be an arbitrary element. By UI, P(c, c). By EG with witness y = c, ∃y P(c, y). Since c was arbitrary, UG gives ∀x ∃y P(x, y). So the implication holds.</p>
<p>(b) False. Domain ℤ, P(x, y): x &lt; y. The hypothesis ∀x ∃y (x &lt; y) is true (take y = x + 1). The conclusion ∀z (z &lt; z) is false (z = 0). True hypothesis and false conclusion, so the implication is false.</p></div>`,
notes:`Moral: in (b) the witness y may depend on x and need not be x itself.`,
rubric:[`(a) uses an arbitrary element and names UI, EG, UG`,`(a) gives the witness y = c explicitly`,`(b) explicit domain and predicate`,`(b) checks hypothesis true and conclusion false`]},

{id:'a10', topic:'quant', src:'PS Logic 7.2', diff:3, title:'Arithmetic predicates without constants',
statement:`Domain: nonnegative integers {0, 1, 2, …}. Using only +, ·, =, comparisons, connectives and quantifiers (no constants like 0 or 1), express:<br>(a) One(n), true only for n = 1. (b) n is a sum of three perfect squares. (c) x &gt; 1. (d) isPrime(n). (e) n is a product of two distinct primes. (f) There is no largest prime.`,
tech:['construct'], why:`Each predicate is built from earlier ones; check every candidate formula on the edge values 0, 1, 2.`,
hints:[`Which n satisfy n · n = n? Which satisfy n + n = n?`,`x &gt; 1 can be written as x · x &gt; x.`,`isPrime: n &gt; 1 and every factorisation n = a · b has a or b equal to 1.`],
proof:`<div class="proof np"><p>(a) <span class="m">One(n) ::= (n · n = n) ∧ ¬(n + n = n)</span>. n·n = n only for n ∈ {0, 1}; n + n = n only for n = 0.</p>
<p>(b) <span class="m">∃x ∃y ∃z (n = x·x + y·y + z·z)</span>.</p>
<p>(c) <span class="m">x · x &gt; x</span>. Check: 0 &gt; 0 F, 1 &gt; 1 F, and for x ≥ 2, x·x ≥ 2x &gt; x.</p>
<p>(d) <span class="m">isPrime(n) ::= (n · n &gt; n) ∧ ∀a ∀b (a · b = n ⇒ (One(a) ∨ One(b)))</span>.</p>
<p>(e) <span class="m">∃p ∃q (isPrime(p) ∧ isPrime(q) ∧ ¬(p = q) ∧ n = p · q)</span>.</p>
<p>(f) <span class="m">∀p (isPrime(p) ⇒ ∃q (isPrime(q) ∧ q &gt; p))</span>.</p></div>`,
rubric:[`(a) excludes both 0 and other values, with a check`,`(c) verified on 0, 1 and x ≥ 2`,`(d) includes n &gt; 1 and the factorisation condition`,`(e) requires distinct primes; (f) correct quantifier order`]},

{id:'a11', topic:'quant', src:'PS Logic 7.3b', diff:2, title:'Formal proof: ¬P(x) ⇒ S(x)',
statement:`Using rules of inference, prove that if <span class="m">∀x [S(x) ∨ Q(x)]</span> and <span class="m">∀x [(¬S(x) ∧ Q(x)) ⇒ P(x)]</span> are true, then <span class="m">∀x [¬P(x) ⇒ S(x)]</span> is true.`,
tech:['inference'], why:`Instantiate at an arbitrary c, prove the implication by DPI, then generalise.`,
hints:[`UI both premises at an arbitrary c. Assume ¬P(c) (DPI).`,`Modus tollens gives ¬(¬S(c) ∧ Q(c)) ≡ S(c) ∨ ¬Q(c).`,`Resolve S(c) ∨ Q(c) with S(c) ∨ ¬Q(c).`],
proof:`<ol class="deriv"><li><span>∀x [S(x) ∨ Q(x)]</span><i class="why">premise</i></li><li><span>∀x [(¬S(x) ∧ Q(x)) ⇒ P(x)]</span><i class="why">premise</i></li><li><span>S(c) ∨ Q(c)</span><i class="why">UI 1, c arbitrary</i></li><li><span>(¬S(c) ∧ Q(c)) ⇒ P(c)</span><i class="why">UI 2</i></li><li><span>¬P(c)</span><i class="why">assumption (DPI)</i></li><li><span>¬(¬S(c) ∧ Q(c))</span><i class="why">MT 4, 5</i></li><li><span>S(c) ∨ ¬Q(c)</span><i class="why">De Morgan 6</i></li><li><span>S(c)</span><i class="why">resolution 3, 7 (S ∨ S ≡ S)</i></li><li><span>¬P(c) ⇒ S(c)</span><i class="why">DPI 5–8</i></li><li><span>∀x [¬P(x) ⇒ S(x)]</span><i class="why">UG 9, c arbitrary</i></li></ol>`,
rubric:[`UI at an arbitrary c (so UG is allowed at the end)`,`DPI assumption stated and discharged`,`MT, De Morgan and resolution named correctly`,`Ends with UG`]},

{id:'a12', topic:'tech', src:'PS Logic 4.1', diff:1, title:'Divisibility basics',
statement:`Let <span class="m">a, b, c, x, y ∈ ℤ</span>. Prove: (a) if <span class="m">a ∣ b</span> and <span class="m">b ∣ c</span> then <span class="m">a ∣ c</span>; (b) if <span class="m">a ∣ b</span> and <span class="m">a ∣ c</span> then <span class="m">a ∣ (bx + cy)</span>.`,
tech:['direct'], why:`Unfold the definition of ∣, compute, and refold.`,
hints:[`Write <span class="m">a ∣ b</span> as <span class="m">b = ak</span> for some k ∈ ℤ. Use a different letter for the second witness.`,`(a) c = bℓ = (ak)ℓ.`,`(b) bx + cy = akx + aℓy = a(kx + ℓy).`],
proof:`<div class="proof"><p>(a) <b>Direct proof.</b> Suppose a ∣ b and b ∣ c.</p><p class="small muted">Want: ∃m ∈ ℤ with c = am.</p><p>Then there are k, ℓ ∈ ℤ with b = ak and c = bℓ. So c = (ak)ℓ = a(kℓ), and kℓ ∈ ℤ since ℤ is closed under ·. Therefore a ∣ c.</p>
<p>(b) <b>Direct proof.</b> Suppose a ∣ b and a ∣ c, so b = ak and c = aℓ with k, ℓ ∈ ℤ. Then bx + cy = akx + aℓy = a(kx + ℓy), and kx + ℓy ∈ ℤ (ℤ is closed under + and ·). Therefore a ∣ bx + cy.</p></div>`,
rubric:[`Names the technique and opens with “Suppose a ∣ b and b ∣ c”`,`Definition of ∣ written out with ∃ integer witness`,`Two different witness letters k, ℓ`,`States that the new multiplier is an integer`,`Clear conclusion`]},

{id:'a13', topic:'tech', src:'PS Logic 4.2', diff:1, title:'n odd ⇒ 8 ∣ n² − 1',
statement:`Prove: if n is an odd integer, then <span class="m">8 ∣ n² − 1</span>.`,
tech:['direct','cases'], why:`Start from n = 2k + 1; one factor of k(k+1) is even, which is a parity case split.`,
hints:[`n = 2k + 1, so n² − 1 = 4k² + 4k.`,`Factor: 4k(k + 1).`,`One of k, k + 1 is even (cases on the parity of k), so k(k + 1) = 2m.`],
proof:`<div class="proof"><p><b>Direct proof.</b> Suppose n is odd.</p><p class="small muted">Want: ∃m ∈ ℤ with n² − 1 = 8m.</p><p>Then n = 2k + 1 for some k ∈ ℤ, and n² − 1 = 4k² + 4k = 4k(k + 1).</p>
<p>Claim: k(k + 1) is even. Proof by cases. Case k even, k = 2j: k(k + 1) = 2(j(k + 1)). Case k odd, k = 2j + 1: k + 1 = 2(j + 1) and k(k + 1) = 2(k(j + 1)). In both cases k(k + 1) = 2m for some m ∈ ℤ.</p>
<p>Hence n² − 1 = 4 · 2m = 8m with m ∈ ℤ. Therefore 8 ∣ n² − 1.</p></div>`,
rubric:[`Opens with “Suppose n is odd” (direct proof named)`,`Writes n = 2k + 1 with k ∈ ℤ`,`Factors to 4k(k + 1)`,`Justifies that k(k + 1) is even (cases), not just asserts it`,`Concludes with 8m, m ∈ ℤ`]},

{id:'a14', topic:'tech', src:'PS Logic 4.3', diff:1, title:'AM–GM for two numbers',
statement:`Prove that for all <span class="m">x, y ∈ ℝ⁺</span>: <span class="m">(x + y)/2 ≥ √(xy)</span>, with equality iff x = y.`,
tech:['direct'], why:`Look at the difference and recognise a square.`,
hints:[`Consider (x + y)/2 − √(xy).`,`Since x, y &gt; 0, x = (√x)² and y = (√y)².`,`The difference equals (√x − √y)²/2.`],
proof:`<div class="proof"><p><b>Direct proof.</b> Suppose x, y ∈ ℝ⁺.</p><p class="small muted">Want: (x + y)/2 − √(xy) ≥ 0.</p><p>Then<span class="m">(x + y)/2 − √(xy) = ((√x)² − 2√x√y + (√y)²)/2 = (√x − √y)²/2 ≥ 0</span>, so the inequality holds.</p>
<p>Equality ⇔ (√x − √y)² = 0 ⇔ √x = √y ⇔ x = y (squaring, √· is injective on ℝ⁺).</p></div>`,
rubric:[`Uses the difference and the square identity`,`Notes the square is ≥ 0`,`Proves both directions of the equality case`]},

{id:'a15', topic:'tech', src:'PS Logic 4.4–4.5', diff:1, title:'Absolute values by cases',
statement:`(a) Prove that for every <span class="m">x ∈ ℝ</span>: <span class="m">|x − 3| + |x + 1| ≥ 4</span>. For which x does equality hold?<br>(b) Prove that <span class="m">max(x, y) = (x + y + |x − y|)/2</span> and <span class="m">min(x, y) = (x + y − |x − y|)/2</span>.`,
tech:['cases'], why:`|·| is defined piecewise, so split where its arguments change sign.`,
hints:[`(a) Break points: x = −1 and x = 3. Three cases.`,`(b) Two cases: x ≥ y and x &lt; y.`,`In (b), WLOG works because the formulas are symmetric in x and y.`],
proof:`<div class="proof"><p>(a) <b>Proof by cases</b> on the position of x relative to −1 and 3. Let x ∈ ℝ.</p><p class="small muted">Want: |x − 3| + |x + 1| ≥ 4.</p><p>Case x &lt; −1: (3 − x) + (−x − 1) = 2 − 2x &gt; 4. Case −1 ≤ x ≤ 3: (3 − x) + (x + 1) = 4. Case x &gt; 3: (x − 3) + (x + 1) = 2x − 2 &gt; 4. The cases cover ℝ, so the sum is always ≥ 4, with equality exactly for x ∈ [−1, 3].</p>
<p>(b) <b>Proof by cases.</b> Let x, y ∈ ℝ. Case x ≥ y: |x − y| = x − y, so the formulas give 2x/2 = x = max and 2y/2 = y = min. Case x &lt; y: |x − y| = y − x, giving y = max and x = min. Adding the two formulas: max + min = x + y.</p></div>`,
rubric:[`Cases chosen at the sign changes and exhaustive`,`Each case computed correctly`,`Equality set stated`,`(b) both cases (or WLOG justified by symmetry)`]},

{id:'a16', topic:'tech', src:'PS Logic 4.6', diff:2, title:'Squares mod 4 and 6 ∣ n³ − n',
statement:`Prove that for every <span class="m">n ∈ ℤ</span>: (a) <span class="m">n² = 4k</span> or <span class="m">n² = 4k + 1</span> for some k ∈ ℤ; (b) <span class="m">6 ∣ n³ − n</span>; (c) deduce that <span class="m">n² + 2</span> is never divisible by 4.`,
tech:['cases'], why:`Split by remainder: mod 2 for (a), mod 2 and mod 3 for (b).`,
hints:[`(a) n = 2m or n = 2m + 1.`,`(b) n³ − n = (n − 1)n(n + 1): three consecutive integers.`,`Show 2 ∣ and 3 ∣ separately; then 3b even ⇒ b even.`],
proof:`<div class="proof"><p>(a) <b>Proof by cases</b> on the parity of n ∈ ℤ. Case n even, n = 2m: n² = 4m², so k = m². Case n odd, n = 2m + 1: n² = 4(m² + m) + 1, so k = m² + m. Therefore n² = 4k or 4k + 1 with k ∈ ℤ.</p>
<p>(b) <b>Direct proof, with cases inside.</b> Let n ∈ ℤ.</p><p class="small muted">Want: ∃c ∈ ℤ with n³ − n = 6c.</p><p>n³ − n = (n − 1)n(n + 1). Among the consecutive n − 1, n one is even, so n³ − n = 2a. For 3: if n = 3m then 3 ∣ n; if n = 3m + 1 then 3 ∣ n − 1; if n = 3m + 2 then 3 ∣ n + 1. So n³ − n = 3b. Then 3b = 2a is even, so b is even (if b were odd, 3b would be odd), b = 2c, and n³ − n = 6c.</p>
<p>(c) By (a), n² + 2 = 4k + 2 or 4k + 3, which leaves remainder 2 or 3 on division by 4, so it is not a multiple of 4.</p></div>`,
rubric:[`Exhaustive case split on remainders`,`Factorisation (n − 1)n(n + 1)`,`Justifies combining 2 ∣ and 3 ∣ into 6 ∣`,`(c) uses (a) correctly`]},

{id:'a17', topic:'tech', src:'PS Logic 4.7–4.8', diff:1, title:'Contrapositive warm-ups',
statement:`Prove: (a) for <span class="m">n ∈ ℤ</span>, if <span class="m">3 ∣ n²</span> then <span class="m">3 ∣ n</span>; (b) for <span class="m">m, n ∈ ℤ</span>, if <span class="m">m + n ≥ 73</span> then m ≥ 37 or n ≥ 37; (c) for <span class="m">a, b ∈ ℝ</span>, if ab is irrational then a or b is irrational.`,
tech:['contra'], why:`The conclusions are “divides”, “or”, “irrational”: their negations give concrete forms to compute with.`,
hints:[`(a) Suppose 3 ∤ n: n = 3k + 1 or 3k + 2.`,`(b) Negation of “m ≥ 37 or n ≥ 37” is “m ≤ 36 and n ≤ 36”.`,`(c) Suppose a = p/q and b = r/s are rational.`],
proof:`<div class="proof"><p>(a) <b>Proof by contrapositive.</b> Suppose 3 ∤ n.</p><p class="small muted">Want: 3 ∤ n².</p><p>Then n = 3k + 1 or n = 3k + 2 for some k ∈ ℤ (cases). Case 1: n² = 9k² + 6k + 1 = 3(3k² + 2k) + 1. Case 2: n² = 9k² + 12k + 4 = 3(3k² + 4k + 1) + 1. Either way n² leaves remainder 1 on division by 3. Therefore 3 ∤ n².</p>
<p>(b) <b>Proof by contrapositive.</b> Suppose ¬(m ≥ 37 ∨ n ≥ 37), i.e. m ≤ 36 and n ≤ 36 (De Morgan). Then m + n ≤ 72 &lt; 73. Therefore m + n &lt; 73.</p>
<p>(c) <b>Proof by contrapositive.</b> Suppose a and b are both rational: a = p/q and b = r/s with p, q, r, s ∈ ℤ, q, s ≠ 0. Then ab = pr/(qs) with pr, qs ∈ ℤ and qs ≠ 0. Therefore ab is rational.</p></div>`,
rubric:[`First sentence: “Proof by contrapositive. Suppose ¬Q.”`,`Last sentence: “Therefore ¬P.”`,`Negates “or” with De Morgan correctly`,`Uses the definition of rational with nonzero denominators`,`Concludes ¬p`]},

{id:'a18', topic:'tech', src:'PS Logic 4.9', diff:2, title:'√3 is irrational',
statement:`Prove that <span class="m">√3</span> is irrational. Where does the same argument break for <span class="m">√4</span>?`,
tech:['contradiction'], why:`“Irrational” is a negative property; assume a fraction in lowest terms and derive a contradiction.`,
hints:[`Assume √3 = a/b with a, b ∈ ℤ, b ≠ 0, gcd(a, b) = 1.`,`a² = 3b², so 3 ∣ a², so 3 ∣ a (previous lemma).`,`Write a = 3k and show 3 ∣ b too.`],
proof:`<div class="proof"><p><b>Proof by contradiction.</b> Assume for a contradiction that √3 is rational.</p><p class="small muted">Want: a contradiction.</p><p>Then √3 = a/b with a, b ∈ ℤ, b ≠ 0, and we may take gcd(a, b) = 1. Squaring, a² = 3b², so 3 ∣ a², and by the lemma (3 ∣ n² ⇒ 3 ∣ n) 3 ∣ a. Write a = 3k. Then 9k² = 3b², so b² = 3k², so 3 ∣ b², so 3 ∣ b. Thus 3 is a common divisor of a and b, contradicting gcd(a, b) = 1. Hence √3 is irrational.</p>
<p>For √4: from a² = 4b² we get 4 ∣ a², but 4 ∣ a² does not imply 4 ∣ a (a = 2). The lemma needs a prime.</p></div>`,
rubric:[`First sentence: “Assume for a contradiction √3 is rational”`,`Assumes the negation with lowest terms (gcd = 1)`,`Cites/proves the lemma 3 ∣ n² ⇒ 3 ∣ n`,`Shows both a and b divisible by 3`,`Names the contradiction explicitly`]},

{id:'a19', topic:'tech', src:'PS Logic 4.10', diff:2, title:'More irrationality and no integer solutions',
statement:`Prove: (a) <span class="m">√2 + √3</span> is irrational; (b) <span class="m">log₂ 3</span> is irrational; (c) <span class="m">x² − 4y = 2</span> has no integer solutions.`,
tech:['contradiction'], why:`Each claim is a non-existence statement; assume a solution exists and reach an impossibility.`,
hints:[`(a) Square r = √2 + √3: r² = 5 + 2√6, so √6 would be rational.`,`(b) log₂ 3 = a/b gives 2ᵃ = 3ᵇ. Parity.`,`(c) x² = 4y + 2 is even, so x = 2k. Substitute.`],
proof:`<div class="proof"><p>(a) <b>Proof by contradiction.</b> Assume for a contradiction r = √2 + √3 ∈ ℚ. Then r² = 5 + 2√6, so √6 = (r² − 5)/2 ∈ ℚ. But √6 is irrational: if √6 = a/b in lowest terms, a² = 6b² is even, so a = 2k; then 4k² = 6b², 2k² = 3b², so 3b² is even and b is even, contradicting gcd(a, b) = 1.</p>
<p>(b) <b>Proof by contradiction.</b> log₂ 3 &gt; 0. Assume for a contradiction log₂ 3 = a/b with a, b ∈ ℕ, b ≥ 1 (then a ≥ 1). Then 2^(a/b) = 3, so 2ᵃ = 3ᵇ. The left side is even (a ≥ 1) and the right side is odd. Contradiction.</p>
<p>(c) <b>Proof by contradiction.</b> Assume for a contradiction x² − 4y = 2 with x, y ∈ ℤ. Then x² = 4y + 2 = 2(2y + 1) is even, so x is even (contrapositive of “x odd ⇒ x² odd”), x = 2k. Then 4k² − 4y = 2, i.e. 2(k² − y) = 1, so 1 would be even. Contradiction. Hence the equation has no integer solutions.</p></div>`,
rubric:[`Each part opens with “Assume for a contradiction …”`,`Assumes the negation precisely`,`(a) reduces to irrationality of √6 and proves it`,`(b) parity argument on 2ᵃ = 3ᵇ with a ≥ 1`,`(c) uses x² even ⇒ x even and reaches 1 even`]},

{id:'a20', topic:'tech', src:'PS Logic 4.11', diff:1, title:'Rational plus irrational',
statement:`Let <span class="m">r ∈ ℚ</span> and x irrational. Prove that r + x is irrational, and that rx is irrational if r ≠ 0. Is the sum of two irrational numbers always irrational?`,
tech:['contradiction','counter'], why:`Irrational is “not rational”, so assume the result is rational; the last question is answered by a counterexample.`,
hints:[`Suppose r + x = s ∈ ℚ. Solve for x.`,`ℚ is closed under subtraction and under division by a nonzero rational.`,`Try √2 and −√2.`],
proof:`<div class="proof"><p><b>Proof by contradiction.</b> Assume for a contradiction r + x = s ∈ ℚ. Then x = s − r ∈ ℚ, since ℚ is closed under subtraction, contradicting x irrational. Hence r + x is irrational.</p><p><b>Proof by contradiction.</b> Assume for a contradiction r ≠ 0 and rx = s ∈ ℚ. Then x = s/r ∈ ℚ (r ≠ 0), contradiction. Hence rx is irrational.</p>
<p>No: √2 and −√2 are irrational but √2 + (−√2) = 0 ∈ ℚ. So “∀x, y irrational, x + y irrational” is false.</p></div>`,
rubric:[`Assumes the result is rational`,`Uses closure of ℚ explicitly (and r ≠ 0 for division)`,`Counterexample checked`]},

{id:'a21', topic:'tech', src:'PS Logic 4.12–4.13', diff:2, title:'Biconditional and TFAE',
statement:`(a) Let <span class="m">x ∈ ℝ ∖ {0}</span>. Prove <span class="m">x + 1/x ≥ 2 ⇔ x &gt; 0</span>.<br>(b) For <span class="m">n ∈ ℤ</span>, prove the following are equivalent: (i) n is even; (ii) n³ is even; (iii) 7n + 4 is even.`,
tech:['iff'], why:`A biconditional needs both directions; TFAE is proved by a cycle (i)⇒(ii)⇒(iii)⇒(i).`,
hints:[`(a ⇐) x + 1/x − 2 = (x − 1)²/x.`,`(a ⇒) contrapositive: if x &lt; 0, both x and 1/x are negative.`,`(b) (ii)⇒(iii) and (iii)⇒(i) are easiest by contrapositive (n odd ⇒ …).`],
proof:`<div class="proof"><p>(a) <b>Biconditional: prove both directions.</b> Let x ∈ ℝ ∖ {0}.</p><p>(⇐) Suppose x &gt; 0. Then x + 1/x − 2 = (x² − 2x + 1)/x = (x − 1)²/x ≥ 0. Therefore x + 1/x ≥ 2.</p><p>(⇒) Proof by contrapositive. Suppose ¬(x &gt; 0), i.e. x &lt; 0 (as x ≠ 0). Then 1/x &lt; 0, so x + 1/x &lt; 0 &lt; 2. Therefore ¬(x + 1/x ≥ 2). Both directions hold.</p>
<p>(b) (i)⇒(ii): n = 2k gives n³ = 2(4k³).<br>(ii)⇒(iii): contrapositive of (ii)⇒(i) first: if n = 2k + 1 then n³ = 8k³ + 12k² + 6k + 1 = 2(4k³ + 6k² + 3k) + 1 is odd. So n³ even forces n even, n = 2k, and 7n + 4 = 2(7k + 2) is even.<br>(iii)⇒(i): contrapositive: n = 2k + 1 gives 7n + 4 = 14k + 11 = 2(7k + 5) + 1, odd.<br>The cycle closes, so all three are equivalent.</p></div>`,
rubric:[`Both directions of (a) proved, the second by contrapositive`,`Sign of x used correctly when dividing`,`TFAE done as a closed cycle`,`Even/odd written with explicit integer witnesses`]},

{id:'a22', topic:'tech', src:'PS Logic 4.14', diff:2, title:'Prove or disprove: four claims',
statement:`Prove or disprove:<br>(a) <span class="m">∀n ∈ ℕ</span>: n² + n + 41 is prime.<br>(b) <span class="m">∀x, y ∈ ℝ</span>: x &lt; y ⇒ x² &lt; y².<br>(c) There exist irrational a, b with <span class="m">aᵇ</span> rational.<br>(d) <span class="m">∀x, y ∈ ℝ⁺</span>: x ≠ y ⇒ x/y + y/x &gt; 2.`,
tech:['counter','cases'], why:`(a), (b) are false universal claims (one counterexample each); (c) is a non-constructive existence proof by cases.`,
hints:[`(a) Try n = 40.`,`(c) Consider √2^√2. You don't need to know whether it is rational: split into cases.`,`(d) Assume x/y + y/x ≤ 2 and multiply by xy &gt; 0.`],
proof:`<div class="proof np"><p>(a) False: n = 40 gives 1600 + 40 + 41 = 1681 = 41². (It holds for n = 1, …, 39: examples prove nothing.)</p>
<p>(b) False: x = −2 &lt; y = 1, but x² = 4 &gt; 1 = y².</p>
<p>(c) True. Case √2^√2 ∈ ℚ: take a = b = √2. Case √2^√2 ∉ ℚ: take a = √2^√2, b = √2; then aᵇ = √2^(√2·√2) = √2² = 2 ∈ ℚ. In either case such a, b exist.</p>
<p>(d) True. <b>Proof by contradiction.</b> Assume for a contradiction x, y &gt; 0, x ≠ y and x/y + y/x ≤ 2. Multiplying by xy &gt; 0: x² + y² ≤ 2xy, so (x − y)² ≤ 0, so x = y. Contradiction.</p></div>`,
rubric:[`Each part gets a verdict first`,`Counterexamples are concrete and checked`,`(c) cases are exhaustive and each gives a valid pair`,`(d) multiplies by a positive quantity and reaches x = y`]},

{id:'a23', topic:'tech', src:'PS Logic 6.1', diff:3, title:'gcd(a/d, b/d) = 1',
statement:`Let <span class="m">a, b ∈ ℤ</span> not both zero and <span class="m">d = gcd(a, b)</span>. Using only the three-part definition of gcd ((i) d ∣ a ∧ d ∣ b; (ii) every common divisor divides d; (iii) d &gt; 0), prove <span class="m">gcd(a/d, b/d) = 1</span>.`,
tech:['contradiction'], why:`Suppose the gcd e is bigger than 1 and build a common divisor de of a and b bigger than d.`,
hints:[`Let e = gcd(a/d, b/d) ≥ 1 and suppose e &gt; 1.`,`a/d = ek and b/d = eℓ, so a = (de)k and b = (de)ℓ.`,`By (ii), de ∣ d, so de ≤ d.`],
proof:`<div class="proof"><p><b>Proof by contradiction.</b></p><p class="small muted">Want: gcd(a/d, b/d) = 1.</p><p>a/d and b/d are integers (by (i)) and not both zero, so e = gcd(a/d, b/d) exists and e ≥ 1. Suppose for a contradiction e &gt; 1. Then a/d = ek and b/d = eℓ for some k, ℓ ∈ ℤ, so a = (de)k and b = (de)ℓ: de is a common divisor of a and b. By (ii), de ∣ d, so |de| ≤ |d| = d (d ≠ 0), i.e. de ≤ d, giving e ≤ 1. Contradiction. Hence e = 1.</p></div>`,
rubric:[`Uses only the definition (no Bézout unless allowed)`,`Shows de is a common divisor`,`Uses (ii) to get de ∣ d and then de ≤ d`,`Concludes e = 1`]},

{id:'a24', topic:'tech', src:'PS Logic 6.2', diff:2, title:'No rational root of r³ + r + 1',
statement:`Prove that there is no <span class="m">r ∈ ℚ</span> with <span class="m">r³ + r + 1 = 0</span>.`,
tech:['contradiction','cases'], why:`Assume a rational root in lowest terms, clear denominators, then a parity case analysis gives an odd number equal to 0.`,
hints:[`r = a/b, gcd(a, b) = 1, b ≠ 0. Multiply by b³.`,`a³ + ab² + b³ = 0. a and b are not both even.`,`Three parity cases: both odd; a even, b odd; a odd, b even.`],
proof:`<div class="proof"><p><b>Proof by contradiction.</b> Assume for a contradiction that some r ∈ ℚ satisfies r³ + r + 1 = 0. Write r = a/b with a, b ∈ ℤ, b ≠ 0, gcd(a, b) = 1. Multiplying by b³: a³ + ab² + b³ = 0. Since gcd(a, b) = 1, a and b are not both even.</p>
<p>Case both odd: odd + odd + odd is odd. Case a even, b odd: even + even + odd is odd. Case a odd, b even: odd + even + even is odd.</p>
<p>In every case the left side is odd, hence ≠ 0. Contradiction.</p></div>`,
rubric:[`Lowest terms assumption and clearing denominators`,`Rules out both even`,`All three parity cases computed`,`Contradiction stated`]},

{id:'a25', topic:'tech', src:'PS Logic 6.3', diff:3, title:'Infinitely many primes ≡ 3 (mod 4)',
statement:`Prove there are infinitely many primes of the form <span class="m">4k + 3</span>. (Hint: mimic Euclid with <span class="m">N = 4p₁p₂⋯pₘ − 1</span>.)`,
tech:['contradiction'], why:`Assume a finite list of all such primes and construct a number that must have a new one as a factor.`,
hints:[`Suppose p₁, …, pₘ are all the primes ≡ 3 (mod 4). Let N = 4p₁⋯pₘ − 1.`,`N ≡ 3 (mod 4) and N is odd. A product of numbers ≡ 1 (mod 4) is ≡ 1 (mod 4).`,`So some prime factor q of N is ≡ 3 (mod 4), hence q = pᵢ. Then q ∣ 4p₁⋯pₘ − N = 1.`],
proof:`<div class="proof"><p><b>Proof by contradiction.</b> Assume for a contradiction there are only finitely many primes of the form 4k + 3, namely p₁, …, pₘ. Let N = 4p₁p₂⋯pₘ − 1 &gt; 1. N is odd and N ≡ 3 (mod 4).</p>
<p>All prime factors of N are odd, so each is ≡ 1 or 3 (mod 4). If all were ≡ 1 (mod 4), their product N would be ≡ 1 (mod 4), since (4s + 1)(4t + 1) = 4(4st + s + t) + 1. So some prime q ∣ N with q ≡ 3 (mod 4), hence q = pᵢ for some i.</p>
<p>Then q ∣ 4p₁⋯pₘ and q ∣ N, so q ∣ 4p₁⋯pₘ − N = 1. Impossible for a prime. Contradiction.</p></div>`,
rubric:[`Correct construction of N and N ≡ 3 (mod 4)`,`Argues a prime factor ≡ 3 (mod 4) must exist (product of 1's is 1)`,`Shows that factor is in the list and divides 1`,`Contradiction structure clear`]},

{id:'a26', topic:'tech', src:'PS Logic 7.4', diff:3, title:'gcd(a − b, a + b) ∈ {1, 2}',
statement:`Let <span class="m">a, b ∈ ℤ⁺</span>, relatively prime, a &gt; b. Prove <span class="m">gcd(a − b, a + b) = 1</span> or <span class="m">2</span>. You may use Euclid's lemma: if p is prime and p ∣ xy then p ∣ x or p ∣ y.`,
tech:['contradiction','cases'], why:`Get d ∣ 2a and d ∣ 2b, then assume d ≥ 3 and split on whether d has an odd prime factor or is a power of 2 that is at least 4.`,
hints:[`d divides the sum and difference of a − b and a + b.`,`So d ∣ 2a and d ∣ 2b. Suppose d ≥ 3.`,`Case: odd prime p ∣ d gives p ∣ a and p ∣ b. Case: 4 ∣ d gives 2 ∣ a and 2 ∣ b.`],
proof:`<div class="proof"><p><b>Direct proof, finished by contradiction with cases.</b> Suppose a, b ∈ ℤ⁺, gcd(a, b) = 1 and a &gt; b.</p><p class="small muted">Want: d = gcd(a − b, a + b) ∈ {1, 2}.</p><p>Since a &gt; b, a − b ∈ ℤ⁺ and d = gcd(a − b, a + b) ≥ 1. As d ∣ a − b and d ∣ a + b, d divides their sum 2a and their difference 2b (linear combinations).</p>
<p>Suppose for a contradiction d ∉ {1, 2}, i.e. d ≥ 3. Then d has an odd prime factor or d is a power of 2 that is ≥ 4.</p>
<p>Case 1: an odd prime p ∣ d. Then p ∣ 2a and p ∣ 2b; since p ∤ 2, Euclid's lemma gives p ∣ a and p ∣ b. So p ∣ gcd(a, b) = 1, impossible.</p>
<p>Case 2: 4 ∣ d. Then 4 ∣ 2a, so 2a = 4k, a = 2k; likewise b = 2ℓ. So 2 ∣ gcd(a, b) = 1, impossible.</p>
<p>Hence d = 1 or d = 2. (Both occur: a = 3, b = 2 gives gcd(1, 5) = 1; a = 3, b = 1 gives gcd(2, 4) = 2.)</p></div>`,
rubric:[`Derives d ∣ 2a and d ∣ 2b`,`Correct exhaustive split of d ≥ 3`,`Euclid's lemma applied with p ∤ 2`,`Both cases contradict gcd(a, b) = 1`]}
);

/* ======================= PROVE OR DISPROVE ======================= */
Q.push(
{topic:'quant', src:'PS 3.1a', s:`<span class="m">∀x ∈ ℕ ∃y ∈ ℕ (x + y = 0)</span>`, a:false, why:`x = 1: we would need y = −1 ∉ ℕ. (Over ℤ the statement is true with y = −x.)`},
{topic:'quant', src:'PS 3.1a', s:`<span class="m">∀x ∈ ℤ ∃y ∈ ℤ (x + y = 0)</span>`, a:true, why:`Given x, take y = −x ∈ ℤ.`},
{topic:'quant', src:'PS 3.1b', s:`<span class="m">∃y ∈ ℝ ∀x ∈ ℝ (xy = y)</span>`, a:true, why:`y = 0: x · 0 = 0 for every x.`},
{topic:'quant', src:'PS 3.1b', s:`<span class="m">∃y ∈ ℝ ∀x ∈ ℝ (xy = x)</span>`, a:true, why:`y = 1 works for every x.`},
{topic:'quant', src:'PS 3.1c', s:`<span class="m">∀x ∈ ℝ ∃y ∈ ℝ (y² = x)</span>`, a:false, why:`x = −1: no real y has y² = −1.`},
{topic:'quant', src:'PS 3.1c', s:`<span class="m">∀x ∈ ℝ ∃y ∈ ℝ (y³ = x)</span>`, a:true, why:`Take y = ∛x, which exists for every real x.`},
{topic:'quant', src:'PS 3.1d', s:`<span class="m">∀x, y ∈ ℤ ∃z ∈ ℤ (z = (x + y)/2)</span>`, a:false, why:`x = 0, y = 1: (0 + 1)/2 = 1/2 ∉ ℤ. Over ℚ it is true.`},
{topic:'quant', src:'PS 3.1e', s:`<span class="m">∀y ∈ ℝ∖{0} ∃x ∈ ℝ (xy = 1)</span>`, a:true, why:`Take x = 1/y, which exists since y ≠ 0.`},
{topic:'quant', src:'PS 3.1e', s:`<span class="m">∃x ∈ ℝ ∀y ∈ ℝ∖{0} (xy = 1)</span>`, a:false, why:`If such x existed, y = 1 forces x = 1 and y = 2 forces x = 1/2. Swapping ∀∃ to ∃∀ changes the meaning.`},
{topic:'quant', s:`<span class="m">∀x ∈ ℝ⁺ ∃y ∈ ℝ⁺ (y &lt; x)</span>`, a:true, why:`Take y = x/2 &gt; 0.`},
{topic:'quant', s:`<span class="m">∃y ∈ ℝ⁺ ∀x ∈ ℝ⁺ (y &lt; x)</span>`, a:false, why:`For any candidate y &gt; 0, x = y/2 ∈ ℝ⁺ violates y &lt; x (also x = y does). Order of quantifiers matters.`},
{topic:'quant', src:'WrapUp 1 P1a', s:`<span class="m">(∃x P(x) ∧ ∃x Q(x)) ⇒ ∃x (P(x) ∧ Q(x))</span> for all P, Q.`, a:false, why:`Domain ℤ, P(x): x even, Q(x): x odd. The hypothesis is true (2 and 1), but no integer is both even and odd.`},
{topic:'quant', s:`<span class="m">∃x (P(x) ∧ Q(x)) ⇒ (∃x P(x) ∧ ∃x Q(x))</span> for all P, Q.`, a:true, why:`EI gives P(c) ∧ Q(c); conjunction elimination gives P(c) and Q(c); EG twice gives ∃x P(x) and ∃x Q(x).`},
{topic:'quant', src:'WrapUp 1 P1b', s:`<span class="m">∀x (P(x) ∨ Q(x)) ⇒ (∀x P(x) ∨ ∀x Q(x))</span> for all P, Q.`, a:false, why:`Domain ℤ, P: even, Q: odd. Every integer is even or odd, but neither “all even” nor “all odd” holds.`},
{topic:'quant', s:`<span class="m">∀x (P(x) ∧ Q(x)) ⇔ (∀x P(x) ∧ ∀x Q(x))</span> for all P, Q.`, a:true, why:`(⇒) UI at arbitrary c gives P(c) ∧ Q(c), then UG on each. (⇐) UI on both gives P(c), Q(c), adjunction, UG. ∀ distributes over ∧ (and ∃ over ∨), but not ∀ over ∨.`},
{topic:'logic', src:'PS 2.1b', s:`<span class="m">(p ⇒ q) ⇒ r ≡ p ⇒ (q ⇒ r)</span>`, a:false, why:`p = F, r = F: LHS = T ⇒ F = F, RHS = F ⇒ … = T. Implication is not associative.`},
{topic:'logic', s:`<span class="m">(p ∧ q) ⇒ r ≡ p ⇒ (q ⇒ r)</span>`, a:true, why:`Exportation law: ¬(p ∧ q) ∨ r ≡ ¬p ∨ ¬q ∨ r ≡ ¬p ∨ (¬q ∨ r) ≡ p ⇒ (q ⇒ r).`},
{topic:'logic', s:`An implication is equivalent to its converse: <span class="m">p ⇒ q ≡ q ⇒ p</span>.`, a:false, why:`p = F, q = T: p ⇒ q is T but q ⇒ p is F. It is the <b>contrapositive</b> ¬q ⇒ ¬p that is equivalent; the converse is equivalent to the inverse.`},
{topic:'logic', src:'PS 2.2', s:`“If a quadrilateral has perpendicular diagonals, then it is a square.” (the converse of a true statement)`, a:false, why:`A non-square rhombus (or a kite) has perpendicular diagonals.`},
{topic:'logic', s:`<span class="m">(p ⇒ q) ∨ (q ⇒ p)</span> is a tautology.`, a:true, why:`If q is T, p ⇒ q is T. If q is F, q ⇒ p is T. Either way the disjunction is T.`},
{topic:'tech', src:'PS 4.11', s:`The sum of two irrational numbers is irrational.`, a:false, why:`√2 + (−√2) = 0 ∈ ℚ.`},
{topic:'tech', src:'PS 4.11', s:`If r ∈ ℚ, r ≠ 0, and x is irrational, then rx is irrational.`, a:true, why:`If rx = s ∈ ℚ then x = s/r ∈ ℚ, contradiction.`},
{topic:'tech', src:'PS 4.14a', s:`<span class="m">∀n ∈ ℕ</span>: n² + n + 41 is prime.`, a:false, why:`n = 40: 1681 = 41².`},
{topic:'tech', src:'PS 4.14b', s:`<span class="m">∀x, y ∈ ℝ: x &lt; y ⇒ x² &lt; y²</span>.`, a:false, why:`x = −2, y = 1.`},
{topic:'tech', src:'PS 4.14c', s:`There exist irrational a, b such that aᵇ is rational.`, a:true, why:`If √2^√2 ∈ ℚ take a = b = √2; otherwise a = √2^√2, b = √2 gives aᵇ = 2.`},
{topic:'tech', s:`If 4 ∣ a² then 4 ∣ a (for a ∈ ℤ).`, a:false, why:`a = 2: 4 ∣ 4 but 4 ∤ 2. The lemma “p ∣ a² ⇒ p ∣ a” needs p prime.`},
{topic:'tech', s:`For all integers n, n² + 2 is not divisible by 4.`, a:true, why:`n² = 4k or 4k + 1, so n² + 2 = 4k + 2 or 4k + 3.`}
);

/* ======================= FIND THE BUG ======================= */
B.push(
{topic:'quant', src:'WrapUp 1 P1a', claim:`<span class="m">(∃x P(x) ∧ ∃x Q(x)) ⇒ ∃x (P(x) ∧ Q(x))</span>`,
lines:[[`∃x P(x) ∧ ∃x Q(x)`,`premise`],[`∃x P(x)`,`conj. elim 1`],[`P(c)`,`EI 2`],[`∃x Q(x)`,`conj. elim 1`],[`Q(c)`,`EI 4`],[`P(c) ∧ Q(c)`,`adjunction 3, 5`],[`∃x (P(x) ∧ Q(x))`,`EG 6`]],
bad:[4], explain:`Line 5 reuses the name c. EI must introduce a <b>new</b> name: the element satisfying Q may differ from the one satisfying P. Correctly, Q(d) for fresh d, and then P(c) ∧ Q(d) does not allow EG. The claim is <b>false</b>: in ℤ with P = even, Q = odd, the hypothesis is true and the conclusion false.`},
{topic:'quant', src:'WrapUp 1 P1b', claim:`<span class="m">∀x (P(x) ∨ Q(x)) ⇒ (∀x P(x) ∨ ∀x Q(x))</span>`,
lines:[[`∀x (P(x) ∨ Q(x))`,`premise`],[`P(c) ∨ Q(c)`,`UI 1`],[`P(c)`,`conjunction elimination 2`],[`∀x P(x)`,`UG 3`],[`∀x P(x) ∨ ∀x Q(x)`,`disj. intro 4`]],
bad:[2], explain:`Line 3 applies conjunction elimination to a <b>disjunction</b>. P(c) ∨ Q(c) does not say which one holds. The claim is <b>false</b>: every integer is even or odd, but not all integers are even and not all are odd.`},
{topic:'quant', claim:`From <span class="m">∀x (P(x) ⇒ Q(x))</span> and <span class="m">∃x P(x)</span>, conclude <span class="m">∃x Q(x)</span>.`,
lines:[[`∀x (P(x) ⇒ Q(x))`,`premise`],[`P(c) ⇒ Q(c)`,`UI 1`],[`∃x P(x)`,`premise`],[`P(c)`,`EI 3`],[`Q(c)`,`MP 2, 4`],[`∃x Q(x)`,`EG 5`]],
bad:[3], explain:`Line 4 does EI with the name c, which already appeared in line 2. EI needs a fresh name. Fix: do EI first (P(c)), then UI at that c. The <b>claim is true</b>; only the order of the steps is wrong.`},
{topic:'tech', claim:`If m and n are odd integers, then m + n is even.`,
lines:[[`Assume m and n are odd.`,``],[`Then m = 2k + 1 and n = 2k + 1 for some k ∈ ℤ.`,`definition of odd`],[`m + n = 4k + 2 = 2(2k + 1).`,`algebra`],[`2k + 1 ∈ ℤ, so m + n is even.`,`definition of even`]],
bad:[1], explain:`Line 2 uses the same witness k for both numbers, which silently assumes m = n. Write m = 2k + 1, n = 2ℓ + 1; then m + n = 2(k + ℓ + 1). The claim is <b>true</b>, but this proof only covers m = n.`},
{topic:'tech', claim:`For every integer n, if n² is even then n is even.`,
lines:[[`Let n be an even integer: n = 2k.`,`assumption`],[`Then n² = 4k² = 2(2k²).`,`algebra`],[`So n² is even.`,`definition`],[`Hence if n² is even, n is even.`,`conclusion`]],
bad:[0], explain:`The proof assumes n even and derives n² even: that is the <b>converse</b>. To prove “n² even ⇒ n even”, use the contrapositive: assume n = 2k + 1, then n² = 2(2k² + 2k) + 1 is odd. The claim is <b>true</b>.`},
{topic:'tech', claim:`For every natural number n, n² + n + 41 is prime.`,
lines:[[`n = 1: 43 is prime.`,`check`],[`n = 2: 47 is prime.`,`check`],[`n = 3: 53 is prime; similarly up to n = 10.`,`check`],[`Therefore n² + n + 41 is prime for all n ∈ ℕ.`,`generalisation`]],
bad:[3], explain:`Line 4 generalises from examples. Checking cases never proves a ∀ statement over an infinite set (UG needs an <b>arbitrary</b> element). The claim is <b>false</b>: n = 40 gives 41².`},
{topic:'tech', claim:`√6 is irrational.`,
lines:[[`Suppose √6 = a/b with a, b ∈ ℤ, b ≠ 0.`,`assumption`],[`Then a² = 6b², so a² is even and a is even: a = 2k.`,`parity`],[`4k² = 6b², so 2k² = 3b², so b is even.`,`parity`],[`Both a and b are even, a contradiction.`,`conclusion`]],
bad:[0], explain:`Line 1 forgets “in lowest terms, gcd(a, b) = 1”. Without it, “a and b both even” contradicts nothing (e.g. 4/2). The claim is <b>true</b> once the lowest-terms assumption is added.`}
);

/* ======================= FLASHCARDS ======================= */
C.push(
['logic',`Implication law`,`<span class="m">p ⇒ q ≡ ¬p ∨ q</span>`],
['logic',`Contrapositive, converse, inverse of <span class="m">p ⇒ q</span>`,`Contrapositive <span class="m">¬q ⇒ ¬p</span> (equivalent). Converse <span class="m">q ⇒ p</span> and inverse <span class="m">¬p ⇒ ¬q</span> (equivalent to each other, not to p ⇒ q).`],
['logic',`Negation of an implication`,`<span class="m">¬(p ⇒ q) ≡ p ∧ ¬q</span>`],
['logic',`De Morgan's laws`,`<span class="m">¬(p ∧ q) ≡ ¬p ∨ ¬q</span><br><span class="m">¬(p ∨ q) ≡ ¬p ∧ ¬q</span>`],
['logic',`Exportation law`,`<span class="m">(p ∧ q) ⇒ r ≡ p ⇒ (q ⇒ r)</span>`],
['logic',`Modus ponens / modus tollens`,`MP: p ⇒ q, p ∴ q.<br>MT: p ⇒ q, ¬q ∴ ¬p.`],
['logic',`Hypothetical vs disjunctive syllogism`,`HS: p ⇒ q, q ⇒ r ∴ p ⇒ r.<br>DS: p ∨ q, ¬p ∴ q.`],
['logic',`Resolution`,`<span class="m">p ∨ q, ¬p ∨ r ∴ q ∨ r</span>`],
['logic',`DPI (direct proof of implication)`,`To prove p ⇒ q from premises R: add p as a premise and derive q. Justified by <span class="m">[R ⇒ (p ⇒ q)] ⇔ [(R ∧ p) ⇒ q]</span>.`],
['logic',`Contradiction rule`,`To prove q from R: add ¬q as a premise and derive some <span class="m">C ∧ ¬C</span>.`],
['logic',`“q is necessary for p” / “p is sufficient for q”`,`Both mean <span class="m">p ⇒ q</span>. “p only if q” also means p ⇒ q.`],
['logic',`Knights & knaves: speaker rule`,`If A (knight iff a) says S, then <span class="m">a ⇔ S</span>.`],
['quant',`UI, UG, EI, EG`,`UI: ∀x P(x) ∴ P(c), any c. UG: P(c), c arbitrary ∴ ∀x P(x). EI: ∃x P(x) ∴ P(c), c <b>new</b>. EG: P(c) ∴ ∃x P(x).`],
['quant',`Negating quantifiers`,`<span class="m">¬∀x P(x) ≡ ∃x ¬P(x)</span>, <span class="m">¬∃x P(x) ≡ ∀x ¬P(x)</span>. Restrictions stay: <span class="m">¬∀x ∈ A P(x) ≡ ∃x ∈ A ¬P(x)</span>.`],
['quant',`Restricted quantifiers unpacked`,`<span class="m">∀x ∈ A P(x) ≡ ∀x (x ∈ A ⇒ P(x))</span><br><span class="m">∃x ∈ A P(x) ≡ ∃x (x ∈ A ∧ P(x))</span>`],
['quant',`<span class="m">∃!x P(x)</span> without ∃!`,`<span class="m">∃x (P(x) ∧ ∀y (P(y) ⇒ y = x))</span>. Prove by existence + uniqueness.`],
['quant',`Does quantifier order matter?`,`Mixed ∀/∃: yes (∀x∃y y &lt; x is true on ℝ⁺, ∃y∀x y &lt; x is false). Same type commute: ∀x∀y ≡ ∀y∀x.`],
['quant',`Which distribute?`,`∀ over ∧: yes. ∃ over ∨: yes. ∀ over ∨ and ∃ over ∧: only one direction.`],
['quant',`Negation of <span class="m">lim aₙ = L</span>`,`<span class="m">∃ε &gt; 0 ∀N ∃n (n ≥ N ∧ |aₙ − L| ≥ ε)</span>`],
['tech',`Even, odd, divides`,`n even ⇔ ∃k ∈ ℤ n = 2k. n odd ⇔ ∃k ∈ ℤ n = 2k + 1. a ∣ b ⇔ ∃c ∈ ℤ b = ac.`],
['tech',`Rational number`,`x ∈ ℚ ⇔ ∃a, b ∈ ℤ, b ≠ 0, x = a/b (may take gcd(a, b) = 1). Otherwise irrational.`],
['tech',`gcd(a, b): three-part definition`,`(i) d ∣ a ∧ d ∣ b; (ii) every common divisor d₁ divides d; (iii) d &gt; 0.`],
['tech',`Prime`,`n ∈ ℕ with exactly two positive divisors, 1 and n.`],
['tech',`To prove / disprove ∀x P(x)`,`Prove: take an arbitrary x. Disprove: one counterexample.`],
['tech',`To prove / disprove ∃x P(x)`,`Prove: exhibit a witness (or non-constructively). Disprove: prove ∀x ¬P(x); an example is not enough.`],
['tech',`Template: proof by contradiction of p ⇒ q`,`Assume p ∧ ¬q and derive a contradiction (since ¬(p ⇒ q) ≡ p ∧ ¬q).`],
['tech',`TFAE p₁, …, pₖ`,`Prove the cycle p₁ ⇒ p₂ ⇒ ⋯ ⇒ pₖ ⇒ p₁.`],
['tech',`Euclid's lemma`,`If p is prime and p ∣ xy then p ∣ x or p ∣ y.`],
['tech',`Common pitfalls`,`Proving the converse; proof by example; same witness letter for two numbers; in induction assuming P(k) “for all k”.`]
);
})();
