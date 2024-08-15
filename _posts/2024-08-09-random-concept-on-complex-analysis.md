---
layout: post
title: 复分析中的定理
tags: 复分析 生僻 陌生概念 
--- 
```
Liouville’s theorem
Schwarz-Pick lemma
Laurent series
Casorati-Weierstrass theorem
Runge’s theorem
Ascoli-Arzéla theorem
Schwarz-Christoffel formula
Weierstrass factorization
Rouché’s theorem
Montel’s theorem
Schwarz reflection principle
Mittag-Leffier theorem
Blaschke products
Hadamard theorem on lacunarity
Stirling’s formula
Picard’s little theorem
Jensen’s formula
Bohr-Mollerup theorem
Nevanlinna characteristic
```

# 总的来说

## 理解复函数的性质和行为
- 解析函数的刚性: Liouville's Theorem, Schwarz-Pick Lemma, Picard's Theorems 都揭示了解析函数相比实函数而言，具有更强的约束性和更特殊的性质。它们不能像实函数那样随意变化，其行为受到严格的限制。

- 奇点的作用: Casorati-Weierstrass Theorem, Picard's Theorems, Laurent Series, Mittag-Leffier Theorem 都着眼于研究函数在奇点附近的行为，奇点决定了函数的整体性质和形态。

- 函数的表示和逼近: Weierstrass Factorization, Mittag-Leffier Theorem, Runge's Theorem, Laurent Series 都探讨了如何用不同的方式来表示和逼近复函数，这些表示方法为研究函数的性质提供了强大的工具。

- 几何性质和保形映射: Schwarz-Christoffel Formula, Schwarz Reflection Principle 将复函数与几何联系起来，研究了保形映射的性质和构建方法，揭示了复平面上的几何结构与函数性质之间的深刻联系。

- 零点分布和增长性: Rouché’s Theorem, Blaschke Products, Jensen’s Formula, Nevanlinna Characteristic 都关注函数的零点分布和增长速度，这些性质对于理解函数的整体行为至关重要。

- 特殊函数的刻画: Stirling’s Formula, Bohr-Mollerup Theorem 则关注一些重要的特殊函数，例如 Gamma 函数，这些特殊函数在复分析以及其他数学领域中扮演着重要的角色。

# 分类：

- 函数性质和行为: Liouville's theorem, Schwarz-Pick lemma, Casorati-Weierstrass theorem, Picard's little theorem, Montel's theorem, Hadamard theorem on lacunarity.

- 级数展开和表示: Laurent series, Weierstrass factorization, Mittag-Leffier theorem.

- 逼近和插值: Runge's theorem, Ascoli-Arzéla theorem.

- 保形映射: Schwarz-Christoffel formula, Schwarz reflection principle.

- 零点和奇点: Rouché’s theorem, Blaschke products, Jensen’s formula, Nevanlinna characteristic.

- 特殊函数和积分: Stirling’s formula, Bohr-Mollerup theorem.

# 展开讲讲

## 函数性质和行为
- Liouville's theorem: 有界整函数必为常数。 这是复分析中最基本的定理之一，它深刻揭示了整函数的性质，并被用于证明代数基本定理。
- 例子： $f(z) = sin(z)$ 不是有界的，所以它不是常数，因此它一定有奇点 (事实上，它在无穷远处有本性奇点)。

- Schwarz-Pick lemma: 单位圆盘到自身的解析映射不会增加距离。 这是研究单位圆盘上解析函数的重要工具，它可以用来证明许多关于这些函数的性质。
- 例子： $f(z) = z^2$ 将单位圆盘映射到自身，并且满足 Schwarz-Pick lemma。
- Casorati-Weierstrass theorem: 在孤立本性奇点附近，函数的值可以任意接近任何复数。 这说明本性奇点附近的函数行为非常复杂。
- 例子： $f(z) = e^{1/z}$ 在 $z=0$ 处有一个本性奇点，并且在该点附近可以取到任意非零的复数值。
- Picard's little theorem: 非常数整函数的取值范围要么是整个复平面，要么是去除一个点的复平面。 这是对 Liouville's theorem 的一个重要补充，进一步限制了整函数的取值范围。
- 例子： $f(z) = e^z$ 的取值范围是去除 0 的复平面。
- Montel's theorem: 局部一致有界的解析函数族是正规族。 这是研究解析函数族的重要工具，它可以用来证明许多关于这些函数族的性质。
- 例子： 在紧集上一致有界的解析函数族满足 Montel's theorem，可以从中提取收敛子序列。
- Hadamard theorem on lacunarity: 具有足够大空隙的幂级数的解析延拓具有自然边界。 这揭示了幂级数的系数与其解析延拓性质之间的深刻联系。
- 例子： $f(z) = \sum_{n=0}^{\infty} z^{2^n}$ 的解析延拓具有单位圆为自然边界。

## 级数展开和表示
- Laurent series: 在环形区域内，函数可以展开成 Laurent 级数。 这是复分析中最重要的工具之一，它可以用来研究函数在奇点附近的行为。
- 例子： 

```
$f(z) = \frac{1}{z(z-1)}$ 
在 $0 < |z| < 1$ 内的 Laurent 级数为
 $f(z) = -\frac{1}{z} - 1 - z - z^2 - ...$.
```
- Weierstrass factorization: 整函数可以表示为其零点的无限乘积。 这是研究整函数的重要工具，它可以用来构建具有特定零点的整函数。
- 例子： $sin(z) = z \prod_{n=1}^{\infty} (1 - \frac{z^2}{n^2 \pi^2})$.
- Mittag-Leffier theorem: 可以构造具有指定主部的亚纯函数。 这是研究亚纯函数的重要工具，它可以用来构建具有特定奇点的亚纯函数。
- 例子： 可以用 Mittag-Leffier theorem 构造具有指定极点和留数的亚纯函数。


## 逼近和插值
- Runge's theorem: 在具有连通补集的区域上，解析函数可以用有理函数一致逼近。 这是研究解析函数逼近的重要工具，它可以用来证明许多关于解析函数逼近的性质。
- 例子： 在单位圆盘上，任何解析函数都可以用多项式一致逼近。
- Ascoli-Arzéla theorem: 一致有界且等度连续的函数族是紧的。 这是研究函数族的重要工具，它可以用来证明许多关于函数族紧性的性质。
- 例子： 在紧集上一致有界且等度连续的解析函数族满足 Ascoli-Arzéla theorem，可以从中提取收敛子序列。


## 保形映射
- Schwarz-Christoffel formula: 将上半平面映射到多边形的保形映射可以用 Schwarz-Christoffel 公式表示。 这是研究保形映射的重要工具，它可以用来构建将上半平面映射到特定多边形的保形映射。
- 例子： 可以用 Schwarz-Christoffel 公式构建将上半平面映射到矩形的保形映射。
- Schwarz reflection principle: 如果函数在实轴上取实值，那么它可以解析延拓到关于实轴对称的区域。 这是研究解析延拓的重要工具，它可以用来将函数延拓到更大的区域。
- 例子： 如果 $f(z)$ 在上半平面解析，并且在实轴上取实值，那么它可以延拓到下半平面，使得 $f(\overline{z}) = \overline{f(z)}$.


## 零点和奇点
- Rouché’s theorem: 如果两个函数在闭曲线上的模长之差小于其中一个函数的模长，那么它们在曲线内部的零点个数相同。 这是研究函数零点的重要工具，它可以用来确定函数零点的个数。
- 例子： 可以用 Rouché’s theorem 证明代数基本定理。
- Blaschke products: 单位圆盘内的有界解析函数可以表示为 Blaschke 乘积。 这是研究单位圆盘内有界解析函数的重要工具，它可以用来构建具有特定零点的有界解析函数。
- 例子： 可以用 Blaschke products 构建单位圆盘内具有指定零点的有界解析函数。
- Jensen’s formula: 将函数零点的模长与其边界上的积分联系起来。 这是研究函数零点的重要工具，它可以用来估计函数零点的个数和分布。
- 例子： 可以用 Jensen’s formula 估计单位圆盘内解析函数零点的个数。
- Nevanlinna characteristic: 衡量亚纯函数的增长速度和值分布。 这是研究亚纯函数值分布的重要工具，它可以用来研究亚纯函数的性质。
- 例子： 可以用 Nevanlinna characteristic 研究亚纯函数的亏格和 Picard 例外值。


## 特殊函数和积分
- Stirling’s formula: 给出伽马函数的渐近公式。 这是研究伽马函数的重要工具，它可以用来近似计算伽马函数的值。
- 例子： 可以用 Stirling’s formula 近似计算 $n!$ 的值。
- Bohr-Mollerup theorem: 刻画伽马函数的唯一性。 这是研究伽马函数的重要工具，它可以用来证明伽马函数的唯一性。
- 例子： 可以用 Bohr-Mollerup theorem 证明满足特定函数方程的函数一定是伽马函数。