---
layout: post
title:  概念自查表
tags: 傅立叶分析 复分析 实分析 泛函分析 微分几何 微分拓扑 代数拓扑 代数几何
---  
# 傅立叶分析

I. 周期函数与三角函数:
周期函数 (Periodic function): 满足 f(x + T) = f(x) 的函数，其中 T 是周期。
三角函数 (Trigonometric functions): 正弦函数 sin(x) 和余弦函数 cos(x)。
正弦波和余弦波 (Sine and cosine waves): 具有特定频率和振幅的正弦和余弦函数。
谐波 (Harmonics): 频率为基频整数倍的正弦波或余弦波。
II. 傅里叶级数 (Fourier series):
傅里叶级数: 将周期函数表示为三角函数 (正弦和余弦) 的无限级数。
傅里叶系数 (Fourier coefficients): 确定傅里叶级数中每个三角函数权重的系数。
狄利克雷核 (Dirichlet kernel): 用于计算傅里叶系数的函数。
吉布斯现象 (Gibbs phenomenon): 在间断点附近，傅里叶级数的部分和出现的过冲现象。
III. 傅里叶变换 (Fourier transform):
傅里叶变换: 将非周期函数表示为所有频率的正弦波和余弦波的连续叠加。
傅里叶逆变换 (Inverse Fourier transform): 从频域表示恢复时域函数。
频谱 (Spectrum): 函数在频域上的表示，显示了不同频率成分的强度。
卷积定理 (Convolution theorem): 时域卷积对应频域乘积，反之亦然。
Parseval 定理 (Parseval's theorem): 时域能量等于频域能量。
IV. 离散傅里叶变换 (Discrete Fourier transform, DFT):
离散傅里叶变换: 对有限长度离散信号进行傅里叶分析的工具。
快速傅里叶变换 (Fast Fourier transform, FFT): 高效计算 DFT 的算法。
V. 应用:
信号处理 (Signal processing): 分析、滤波和压缩信号。
图像处理 (Image processing): 分析、增强和压缩图像。
音频分析 (Audio analysis): 分析音频信号的频率成分。
偏微分方程 (Partial differential equations): 求解热传导方程、波动方程等。
VI. 相关概念:
卷积 (Convolution): 两个函数之间的一种数学运算。
相关性 (Correlation): 衡量两个函数之间相似程度的指标。
窗函数 (Window function): 用于减少频谱泄漏的函数。


# 复分析

I. 复数与复平面:
复数 (Complex number): 形如 z = x + iy 的数，其中 x, y 是实数，i 是虚数单位 (i² = -1)。
复平面 (Complex plane): 用二维平面上的点表示复数的几何表示。
实部 (Real part) 和虚部 (Imaginary part): 复数 z = x + iy 的实部为 x，虚部为 y。
模 (Modulus) 和辐角 (Argument): 复数 z 的模 |z| 表示其到原点的距离，辐角 arg(z) 表示其与正实轴的夹角。
共轭复数 (Complex conjugate): 复数 z = x + iy 的共轭复数为 z̄ = x - iy。
II. 复变函数:
复变函数 (Complex function): 定义域和值域都是复数集的函数。
极限 (Limit) 和连续性 (Continuity): 与实变函数类似的概念，但在复平面上考虑。
导数 (Derivative): 复变函数在一点处的变化率，定义与实变函数类似，但要求极限在所有方向都相同。
解析函数 (Analytic function) 或全纯函数 (Holomorphic function): 在定义域内每一点都可导的复变函数。
柯西-黎曼方程 (Cauchy-Riemann equations): 解析函数的实部和虚部满足的偏微分方程组。
调和函数 (Harmonic function): 满足拉普拉斯方程的函数，解析函数的实部和虚部都是调和函数。
III. 复积分:
围道积分 (Contour integral): 沿着复平面上的曲线对复变函数进行积分。
柯西积分定理 (Cauchy integral theorem): 解析函数沿着闭合曲线的积分等于零。
柯西积分公式 (Cauchy integral formula): 用解析函数在闭合曲线内部的值表示其在曲线上的积分。
留数 (Residue): 解析函数在孤立奇点处的 Laurent 级数展开式中负一次幂项的系数。
留数定理 (Residue theorem): 用留数计算解析函数沿着闭合曲线的积分。
IV. 级数与奇点:
幂级数 (Power series): 形如 Σ a_n (z - z_0)^n 的级数。
泰勒级数 (Taylor series): 解析函数在一点附近的幂级数展开式。
洛朗级数 (Laurent series): 解析函数在环形区域内的幂级数展开式，包含负幂项。
奇点 (Singularity): 复变函数不可导的点。
可去奇点 (Removable singularity): 可以通过重新定义函数值使其变为解析函数的奇点。
极点 (Pole): 洛朗级数展开式中只有有限个负幂项的奇点。
本性奇点 (Essential singularity): 洛朗级数展开式中有无限个负幂项的奇点。
V. 应用:
流体力学 (Fluid dynamics): 用复势描述无旋不可压缩流体的流动。
电磁学 (Electromagnetism): 用复变函数描述电场和磁场。
信号处理 (Signal processing): 用拉普拉斯变换和 z 变换分析信号。
数论 (Number theory): 用复分析方法研究素数分布等问题。
VI. 相关概念:
保角映射 (Conformal mapping): 保持角度不变的映射。
黎曼曲面 (Riemann surface): 多值函数的几何表示。
解析延拓 (Analytic continuation): 将解析函数的定义域扩展到更大的区域。

# 实分析
I. 实数与数列:
实数 (Real numbers): 构成实数线的连续的数集，包括有理数和无理数。
实数的完备性 (Completeness of real numbers): 实数轴上没有“空隙”，例如 Dedekind 完备性或 Cauchy 完备性。
数列 (Sequence): 按顺序排列的一列数。
数列的极限 (Limit of a sequence): 当数列的项越来越接近某个值时，该值即为数列的极限。
收敛数列 (Convergent sequence): 具有极限的数列。
Cauchy 数列 (Cauchy sequence): 项之间距离越来越小的数列，在完备空间中，Cauchy 数列等价于收敛数列。
子列 (Subsequence): 从原数列中选取一部分项，并保持原顺序组成的新数列。
Bolzano-Weierstrass 定理: 有界数列必有收敛子列。
II. 函数与极限:
实函数 (Real function): 定义域和值域都是实数集的函数。
函数的极限 (Limit of a function): 当自变量趋近于某一点时，函数值趋近的值。
连续函数 (Continuous function): 在每一点处极限值等于函数值的函数。
一致连续函数 (Uniformly continuous function): 在整个定义域内，函数值的变化程度都受到自变量变化程度的控制。
中间值定理 (Intermediate value theorem): 连续函数在闭区间上取到介于两个端点值之间的所有值。
极值定理 (Extreme value theorem): 连续函数在闭区间上必有最大值和最小值。
III. 导数与微分:
导数 (Derivative): 函数在一点处的变化率，衡量函数在该点附近的线性逼近程度。
可导函数 (Differentiable function): 在每一点都存在导数的函数。
微分 (Differential): 函数增量的线性主部。
中值定理 (Mean value theorem): 可导函数在区间端点处的函数值之差等于区间内某一点处的导数乘以区间长度。
泰勒定理 (Taylor's theorem): 用函数在一点的各阶导数值来逼近函数在该点附近的值。
IV. 积分:
黎曼积分 (Riemann integral): 用矩形面积逼近曲线下方图形面积的方法定义的积分。
可积函数 (Integrable function): 黎曼积分存在的函数。
微积分基本定理 (Fundamental theorem of calculus): 将微分和积分联系起来的重要定理，表明积分是微分的逆运算。
不定积分 (Indefinite integral): 导数等于被积函数的函数。
定积分 (Definite integral): 在区间上对函数进行积分得到的数值。
V. 级数:
级数 (Series): 无穷多个数的和。
收敛级数 (Convergent series): 级数的部分和序列具有极限的级数。
绝对收敛 (Absolute convergence): 级数的绝对值项级数收敛。
条件收敛 (Conditional convergence): 级数收敛但绝对值项级数不收敛。
幂级数 (Power series): 形如 Σ a_n x^n 的级数。
泰勒级数 (Taylor series): 函数在一点附近的幂级数展开式。

# 泛函分析

I. 测度论基础:
σ-代数 (Sigma-algebra): 集合的非空集族，满足对补集和可数并封闭。
可测集 (Measurable set): 属于σ-代数的集合。
可测空间 (Measurable space): 由集合和其上的σ-代数组成的二元组。
测度 (Measure): 定义在σ-代数上的非负函数，满足可数可加性。
可测函数 (Measurable function): 定义域为可测空间，取值空间为拓扑空间，满足原像集都为可测集。
简单函数 (Simple function): 取有限个值的 measurable 函数，常用作逼近一般 measurable 函数的工具。
几乎处处 (Almost everywhere): 指除去一个测度为零的集合外，其余地方都成立。
II. 积分理论:
勒贝格积分 (Lebesgue integral): 对 measurable 函数定义的积分，推广了黎曼积分。
III. 拓扑与度量:
度量空间 (Metric space): 定义了距离的集合。
拓扑空间 (Topological space): 定义了开集的集合。
稠密集 (Dense set): 一个集合的闭包等于整个空间。
可分性 (Separability): 度量空间 (或拓扑空间) 存在可数稠密子集的性质。
IV. 函数空间:
赋范空间 (Normed space): 具有范数的向量空间，范数定义了向量的大小和距离。
Banach 空间 (Banach space): 完备的赋范空间，即 Cauchy 列都收敛。
内积空间 (Inner product space): 具有内积的向量空间，内积定义了向量之间的夹角和正交性。
Hilbert 空间 (Hilbert space): 完备的内积空间。
Lp 空间 (Lp space): 由 p 次可积函数组成的函数空间，配备 Lp 范数。
对偶空间 (Dual space): 由赋范空间上的所有有界线性泛函组成的空间。
V. 算子理论:
线性算子 (Linear operator): 两个向量空间之间的线性映射。
有界线性算子 (Bounded linear operator): 满足有界性条件的线性算子。
算子范数 (Operator norm): 衡量线性算子大小的范数。
线性泛函 (Linear functional): 将向量空间映射到数域的线性算子。
谱 (Spectrum): 线性算子的一些特征值和特征值的推广。
谱定理 (Spectral theorem): 揭示线性算子，特别是自伴算子的谱结构与其性质之间关系的重要定理。
紧算子 (Compact operator): 将有界集映射到相对紧集的算子。
自伴算子 (Self-adjoint operator): 在 Hilbert 空间中，等于其伴随算子的算子。
VI. 收敛性:
强收敛 (Strong convergence): 赋范空间中，向量列按范数收敛。
弱收敛 (Weak convergence): 赋范空间中，向量列对每个有界线性泛函都收敛。
弱收敛 (Weak convergence): 对偶空间中，泛函列按弱*拓扑收敛。
VII. 重要定理:
Hahn-Banach 定理: 关于线性泛函延拓的重要定理。
开映射定理: 关于有界线性算子开性的重要定理。
闭图像定理: 关于有界线性算子图像封闭性的重要定理。
一致有界性原理: 关于一族有界线性算子一致有界的定理。
VIII. 函数列:
函数列的收敛性: 如逐点收敛、一致收敛、几乎处处收敛、依测度收敛等。
正交函数列: 如三角函数列、Legendre 多项式列等，构成 Hilbert 空间的正交基。


# 微分几何

I. 曲线:
参数曲线 (Parametric curve): 由一个或多个参数表示的曲线。
切向量 (Tangent vector): 曲线在一点处的速度向量。
弧长 (Arc length): 曲线的长度。
曲率 (Curvature): 衡量曲线弯曲程度的量。
挠率 (Torsion): 衡量曲线扭曲程度的量。
Frenet 标架 (Frenet frame): 由切向量、法向量和副法向量组成的曲线局部坐标系。
II. 曲面:
参数曲面 (Parametric surface): 由两个参数表示的曲面。
切平面 (Tangent plane): 曲面在一点处的切向量张成的平面。
法向量 (Normal vector): 垂直于切平面的向量。
第一基本形式 (First fundamental form): 曲面上的度量，用于计算长度、面积和角度。
第二基本形式 (Second fundamental form): 描述曲面弯曲程度的量。
高斯曲率 (Gaussian curvature): 曲面内蕴的曲率，不依赖于嵌入方式。
平均曲率 (Mean curvature): 曲面外在的曲率，依赖于嵌入方式。
主曲率 (Principal curvatures): 第二基本形式的特征值。
主方向 (Principal directions): 第二基本形式的特征向量方向。
III. 流形:
流形 (Manifold): 局部上类似于欧氏空间的拓扑空间。
坐标卡 (Coordinate chart): 将流形的一部分映射到欧氏空间的映射。
坐标变换 (Coordinate transformation): 不同坐标卡之间的转换关系。
切空间 (Tangent space): 流形在一点处的切向量组成的向量空间。
余切空间 (Cotangent space): 切空间的对偶空间，由 1-形式组成。
张量 (Tensor): 多重线性映射，例如向量、1-形式、度量张量等。
IV. 微分形式:
微分形式 (Differential form): 余切空间的元素，可以进行外积运算。
外微分 (Exterior derivative): 将 k-形式映射到 (k+1)-形式的运算。
德拉姆上同调 (De Rham cohomology): 用微分形式研究流形拓扑的工具。
V. 联络与曲率:
联络 (Connection): 定义向量场沿着曲线平行移动的方式。
Levi-Civita 联络: 黎曼流形上的特殊联络，与度量兼容且无挠率。
曲率张量 (Curvature tensor): 衡量联络的非交换性的量。
Ricci 曲率 (Ricci curvature): 曲率张量的迹。
标量曲率 (Scalar curvature): Ricci 曲率的迹。
VI. 黎曼几何:
黎曼流形 (Riemannian manifold): 具有黎曼度量的流形。
测地线 (Geodesic): 黎曼流形上局部最短的曲线。
测地曲率 (Geodesic curvature): 曲线偏离测地线的程度。
黎曼曲率张量 (Riemannian curvature tensor): 黎曼流形上的曲率张量。
VII. 应用:
广义相对论 (General relativity): 用黎曼几何描述引力。
机械工程 (Mechanical engineering): 研究机器人的运动和控制。
计算机图形学 (Computer graphics): 创建和渲染三维模型。

# 微分拓扑

I. 流形:
拓扑流形 (Topological manifold): 局部同胚于欧氏空间的 Hausdorff 空间，通常要求第二可数。
微分结构 (Differentiable structure): 赋予拓扑流形光滑结构的坐标卡集。
微分流形 (Differentiable manifold) 或光滑流形 (Smooth manifold): 具有微分结构的拓扑流形。
坐标卡 (Coordinate chart): 将流形的一部分映射到欧氏空间的同胚映射。
坐标变换 (Coordinate transformation): 不同坐标卡之间的转换关系，要求光滑。
切空间 (Tangent space): 流形在一点处的切向量组成的向量空间。
余切空间 (Cotangent space): 切空间的对偶空间，由 1-形式组成。
张量 (Tensor): 多重线性映射，例如向量、1-形式、度量张量等。
II. 光滑映射:
光滑映射 (Smooth map): 两个微分流形之间的映射，在局部坐标下表示为光滑函数。
微分同胚 (Diffeomorphism): 光滑且具有光滑逆映射的映射。
嵌入 (Embedding): 将一个流形作为子流形嵌入到另一个流形中的光滑映射。
浸入 (Immersion): 切映射处处单射的光滑映射。
III. 向量场与微分形式:
向量场 (Vector field): 将流形上每一点映射到该点切空间的映射。
微分形式 (Differential form): 余切空间的元素，可以进行外积运算。
外微分 (Exterior derivative): 将 k-形式映射到 (k+1)-形式的运算。
李导数 (Lie derivative): 沿着向量场方向对张量场进行微分。
德拉姆上同调 (De Rham cohomology): 用微分形式研究流形拓扑的工具。
IV. 横截性:
横截性 (Transversality): 两个子流形的交点满足一定条件，例如切空间张成整个空间。
横截性定理 (Transversality theorem): 保证在一定条件下可以找到横截的子流形。
V. 配边理论:
配边 (Cobordism): 两个流形之间通过高维流形连接的关系。
配边群 (Cobordism group): 配边关系构成的一个群。
VI. Morse 理论:
Morse 函数 (Morse function): 临界点都是非退化的光滑函数。
指标 (Index): Morse 函数临界点的 Hessian 矩阵的负特征值个数。
Morse 不等式 (Morse inequalities): 将 Morse 函数的临界点指标与流形的 Betti 数联系起来的不等式。
VII. 纤维丛:
纤维丛 (Fiber bundle): 将一个流形局部地表示为另一个流形 (基空间) 与一个纤维的乘积。
主丛 (Principal bundle): 纤维是李群的纤维丛。
向量丛 (Vector bundle): 纤维是向量空间的纤维丛。
切丛 (Tangent bundle): 流形的切空间组成的向量丛。
VIII. 示性类:
示性类 (Characteristic class): 将纤维丛映射到上同调类的映射。
Stiefel-Whitney 类: 实向量丛的示性类。
Chern 类: 复向量丛的示性类。
Pontryagin 类: 实向量丛的示性类。
IX. 应用:
物理学 (Physics): 例如规范场论、弦理论等。
机械工程 (Mechanical engineering): 例如机器人运动规划。
计算机科学 (Computer science): 例如拓扑数据分析。

# 代数拓扑
I. 拓扑空间:
拓扑空间 (Topological space): 定义了开集概念的集合。
连续映射 (Continuous map): 保持开集的映射。
同胚 (Homeomorphism): 连续且具有连续逆映射的映射，拓扑空间之间的等价关系。
连通性 (Connectedness): 空间无法分解成两个不相交的非空开集。
道路连通性 (Path-connectedness): 空间中任意两点之间存在一条连续路径。
紧致性 (Compactness): 空间的任意开覆盖都有有限子覆盖。
II. 基本群:
道路 (Path): 单位区间 [0, 1] 到拓扑空间的连续映射。
同伦 (Homotopy): 两个道路之间的连续形变。
基本群 (Fundamental group): 基于一个基点的道路同伦类构成的群。
单连通 (Simply connected): 基本群平凡的空间。
III. 同调群:
单纯形 (Simplex): n 维空间中的 (n+1) 个点构成的凸包。
单纯复形 (Simplicial complex): 由单纯形粘合而成的一种空间。
链复形 (Chain complex): 由自由 Abel 群和边界算子构成的一种代数结构。
同调群 (Homology group): 链复形的核模去像构成的群。
Betti 数 (Betti number): 同调群的秩，表示空间中“洞”的数量。
IV. 上同调群:
上链复形 (Cochain complex): 由链复形对偶化得到的代数结构。
上同调群 (Cohomology group): 上链复形的核模去像构成的群。
杯积 (Cup product): 上同调群之间的一种乘法运算。
V. 同伦群:
同伦群 (Homotopy group): 基于一个基点的球面到拓扑空间的映射同伦类构成的群。
纤维化 (Fibration): 一种特殊的映射，具有同伦提升性质。
长正确序列 (Long exact sequence): 纤维化诱导出的同伦群之间的关系。
VI. CW 复形:
CW 复形 (CW complex): 通过逐步粘合胞腔 (cell) 构成的一种空间。
胞腔同调 (Cellular homology): CW 复形的一种同调理论。
VII. 谱序列:
谱序列 (Spectral sequence): 一种计算同调群或上同调群的工具。
VIII. 应用:
代数几何 (Algebraic geometry): 研究代数簇的拓扑性质。
微分拓扑 (Differential topology): 研究光滑流形的拓扑性质。
物理学 (Physics): 例如弦理论、凝聚态物理等。
IX. 相关概念:
覆盖空间 (Covering space): 对拓扑空间的局部同胚映射。
万有覆盖空间 (Universal covering space): 单连通的覆盖空间。
范畴论 (Category theory): 研究数学结构之间关系的抽象理论。

# 代数几何
I. 仿射簇:
仿射空间 (Affine space): 数域 k 上的 n 维向量空间，记作 A^n(k) 或 k^n。
仿射代数集 (Affine algebraic set): 仿射空间中由多项式方程组定义的点集。
仿射簇 (Affine variety): 不可约的仿射代数集。
坐标环 (Coordinate ring): 仿射簇上的多项式函数组成的环。
Zariski 拓扑 (Zariski topology): 仿射空间上的拓扑，闭集为代数集。
II. 射影簇:
射影空间 (Projective space): 仿射空间加上无穷远点的空间，记作 P^n(k)。
射影代数集 (Projective algebraic set): 射影空间中由齐次多项式方程组定义的点集。
射影簇 (Projective variety): 不可约的射影代数集。
齐次坐标环 (Homogeneous coordinate ring): 射影簇上的齐次多项式函数组成的环。
III. 概形:
谱 (Spectrum): 环的素理想组成的集合，记作 Spec(R)。
结构层 (Structure sheaf): 赋予谱拓扑结构和环结构的层。
仿射概形 (Affine scheme): 环的谱及其结构层构成的空间。
概形 (Scheme): 局部同构于仿射概形的空间。
IV. 态射与层:
态射 (Morphism): 概形之间的映射，由连续映射和层之间的同态构成。
层 (Sheaf): 将拓扑空间上的开集映射到 Abel 群或环的一种结构。
预层 (Presheaf): 层的一种推广，不要求满足粘合条件。
层的上同调 (Sheaf cohomology): 用层研究拓扑空间性质的工具。
V. 除子:
除子 (Divisor): 表示超曲面或亚簇的代数对象。
主除子 (Principal divisor): 由有理函数定义的除子。
线性等价 (Linear equivalence): 两个除子相差一个主除子。
Picard 群 (Picard group): 线性等价类构成的群。
VI. 曲线:
代数曲线 (Algebraic curve): 一维代数簇。
亏格 (Genus): 衡量曲线复杂程度的拓扑不变量。
黎曼-罗赫定理 (Riemann-Roch theorem): 计算曲线上的线丛的维数的重要定理。
VII. 簇的性质:
光滑性 (Smoothness): 簇在每一点都具有非奇异切空间的性质。
完备性 (Completeness): 类似于紧致性的概念。
连通性 (Connectedness): 空间无法分解成两个不相交的非空开集。
VIII. 应用:
数论 (Number theory): 例如费马大定理的证明。
密码学 (Cryptography): 例如椭圆曲线密码。
编码理论 (Coding theory): 例如代数几何码。