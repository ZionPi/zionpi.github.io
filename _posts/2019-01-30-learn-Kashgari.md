---
layout: post
title: 学习Kashgari
---
[Kashgari](https://github.com/BrikerMan/Kashgari)快速建构模型的能力吸引了我。  

## 感兴趣的NLP任务
- 阅读理解
- 信息摘要
- 取标题
- 机器翻译

## Kashgari提供了什么功能


### 准备阶段
一般地,任何一种框架都会提供示例,根据示例,我们可以熟悉该框架的使用方法,常用的算法.但是第一步是
搭建环境,熟悉流程.在这个过程中,会产生一些重复,这些重复包括数据的来源,初始化,算法的选择,任务是否
达标,如果是深度学习的话,还设计到对模型的训练,最后还得看目标任务完成情况,根据正确率的反馈来调整参数,
以期待达到最优的效果.在这个过程中是被动接受的过程,最好不要提个人意见,即使有意见,记下来,在充分地实践过程中
重点突出哪些算法是要自己动手创造一遍的,哪些是只要知道就可以的,哪些是涉及到"高深"的数学的,哪些是属于经验,
哪些是需要理论知识的.

### 实际过程
因为该项目是构建在Keras之上的,而[Keras](https://keras.io/#you-have-just-found-keras)是建构在TensorFlow, CNTK,Theano
之上的,所以呢,过程很简单,代码量都被封装起来了.其中有一个重要需要理解概念是[F1 Score](https://en.wikipedia.org/wiki/F1_score).
Kashgari主要是用来*文档归类*,*序列标注*的.用户可以提交模型,但要说明为什么?  
目前Kashgari提供三种模型,分别是CNNModel, BLSTMModel 和 CNNLSTMModel.

### 结论




