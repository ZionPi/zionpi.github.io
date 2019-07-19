---
layout: post
title: 关于设计分布式系统
---
构件大型的分布式系统是缺乏环境的,因为传统的系统已经能够满足需求,那为什么还要去创建
分布式系统呢?
对规模庞大的系统来说,有一个内在的需求是监测所有客户的状态.
在各种云服务商提供服务的时候,不论是虚拟的主机,和虚拟的主机,我们都想要监测它的实时状态,
以便我们知道了解在主机丛林中,我们的客户处于一个什么样的状态.
但问题是,我们需要监测什么?仅仅是可达性吗?我们需要知道一些指标来衡量监测对象的健康程度,
这包括它所在的网络,它自身的系统状态.最起码的,我们需要知道系统的交通,错误,延时情况.再比如说
如何去衡量系统的容错能力.      
### 参考资料

- [Operating a Large, Distributed System in a Reliable Way: Practices I Learned](https://blog.pragmaticengineer.com/operating-a-high-scale-distributed-system/)