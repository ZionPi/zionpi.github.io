---
layout: post
title: 外微分、自由对象及其它
---
[前面]()有文章提到，代数几何将思考的对象提高到无以复加的高度。[外微分](https://en.wikipedia.org/wiki/Exterior_derivative)何以能够涵盖梯度、散度、旋度？
如何做到度量无关？坐标无关？[自由对象]()又是怎么一回事儿？[泛性质](https://en.wikipedia.org/wiki/Universal_property)是怎么被提出来的？
还有[张量积](https://en.wikipedia.org/wiki/Tensor_product)何以能够与模、与拓扑向量空间等产生联系？`Universal Property`被提出的动机为什么需要构造？
构造满足的性质？为什么范畴论里的函子除了[faithful](https://en.wikipedia.org/wiki/Full_and_faithful_functors)还能[forgetful](https://en.wikipedia.org/wiki/Forgetful_functor)？
在此之前，我们来熟悉一个概念——[Tensor]()。根据维基百科和Quora来看，对张量的描述有些像是描述function,又有些像是描述几何？那么，张量是高阶方法吗？所谓
高阶方法，我指的是输入方法，输出方法的方法。但又不尽然，张量好像还跟几何有关？还跟矩阵有关。[前面]()讲过，我们对一种特别类型的funcion感兴趣，那就是经过function处理之后，原来的某种特性保持不变。这些特性来自于几何直觉，包括方向，长度，面积，角度。高斯在处理空间中任何两点距离保持不变的时候，他推演了换底的操作。就是把同样的点，换一种参数方程描述后，让某个几何量，比如长度保持不变(当然首先长度应该被定义)。从那时开始，就有张量的萌芽状态。  
后来到了1900年，
