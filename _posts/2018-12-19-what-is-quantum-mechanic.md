---
layout: post
title: 量子力学是什么
---
为了理解量子力学，我们先来回顾一下泛函分析的基础知识。
下面是一位作者的回顾内容，来自[1](https://math.stackexchange.com/posts/1649963/)

> $L^2$ function spaces arose out of Parseval's identity for the Fourier series, an identity that was known by the late 1700's:  

$$
          \frac{1}{\pi}\int_{-\pi}^{\pi}|f(t)|^2dt = \frac{1}{2}a_0^2+\sum_{n=1}^{\infty}a_n^2+b_n^2,
$$  

where the Fourier series for $f$ is  

$$
                 f(x) \sim \frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos(nx)+b_n\sin(nx).
$$  

> That establish a connection between square integrable functions and an infinite-dimensional Euclidean space with sums of square of coordinates. Not much was made of this connection at first. The Cauchy-Schwarz inequality for complex spaces would not be stated by Cauchy for another couple of decades (Schwarz was not attached to the original inequality bearing Cauchy's name, only Cauchy.) In between, Fourier started his work on Heat Conduction, separation of variables and more general orthogonal expansions arising from these methods. Decades passed before, around 1850-1860, Schwarz published a paper on solutions of minimization problems where he derived the Cauchy-Schwarz inequality for integrals, and it was realized that the inequality gave the triangle inequality. A new concept of distance and convergence was emerging.

> Over the next few decades, these ideas led Mathematicians to consider functions as points in a space with distance and geometry imposed through norms and inner-product. That was a game-changing abstraction. During this period of abstraction, a real number was defined for the first time in a rigorous way, after roughly 24 centuries of trying to figure out how to make sense of irrationality. Compactness was discovered, and abstracted to sets of functions through equicontinuity. Fourier's ideas were being cast into the context of the new, rigorous Math. Riemann developed his integral, and by the early 1900's, Lebesgue has defined his integral, both with the stated goal of studying the convergence of Fourier series.

> Cantor, Hilbert, and many others were laying the rigorous, logical foundations of Mathematics, and Hilbert abstracted the Fourier series to consider $\ell^2$ as an infnite dimensional generalization of Euclidean space. Topology was being created through abstract metric and then through neighborhood axioms in the new set theory. Function spaces were now fashionable, with $\ell^2$, $L^2$ leading the way. Early in this 20th century evolution, one of the Riesz brothers looked at continuous linear funtionals on $C[a,b]$, and represented them as integrals. The idea of continuity of functionals was just being explored. Functional Analysis was born, and there was a push to explore abstract function spaces. Representing functionals was the order of the day. $L^p$ was a natural abstraction that cemented the idea of the dual as having to be separate and distinct from the orignal space. Hahn and Banach both discovered how to extend continuous linear functionals. Before this period in the early part of the 20th century, there was no distinction of a space and a dual. $L^p$ spaces became an important part of decoupling the space and its dual, and providing convincing evidence that it was necessary to do so.

> Then there was a move toward abstract operators, with Hilbert and von Neumann leading the way. By the time Quantum Mechanics arrived, all the pieces were in place to be able to lay a foundation for Quantum Mechanics. Hilbert had already studied symmetric operators. Spectrum of operators was defined well before it was realized that operators were a perfect fit for Quantum, where it was later found that the Mathematician's spectrum was actually the Physics spectrum! von Neumann had proved the Spectral Theorem for selfadjoint operators.

> Topological ideas abstracted from convergence, algebras of operators, functions, etc., set off a mushroom cloud of thought, helping to lead to other mushroom clouds.

