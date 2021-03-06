---
layout: post
title: NLP在Pytorch中使用
---
在[前面]()的文章中提到过使用python做nlp,了解了python的语法知识,掌握了nlp的一些基本任务,在那里,我们主要是依靠统计学对NLP常见的现象进行研究.随着NN在计算机视觉中的突飞猛进,NLP领域也呈现出崭新的面貌.我们首先来回顾一下NLP的基本任务,然后分别介绍在pytorch的框架下如何首先这些任务的.  
- 词性标注
- 命名实体识别
- 情感分析
- 对话系统
- 文本生成
- 文本分类
- 机器翻译
- 语音识别
- ...

在2018年年底出现了BERT之后,NLP的各领域又来了新一波的提升.因此,我们将直接透过BERT追溯它的历史,来回顾一下它是通过怎样的方式一步步进化到现在我们看到的这个样子的.

### Percepton
最简单的神经元,由输入到输出,简单直白
### MLP
多个神经元形成层,接受多个输入,可输出多个
### CNN
克服了MLP忽略了位置信息的障碍,使用卷积将顺序信息保留下来,它是通过一个叫做convolution kernerl的矩阵,通过一定的步长遍历矩阵,来保留记录下空间位移恒定的不变量.
### RNN
通过一个类似于kernel的hidden state,在时间序列中保存记录下时间不变量,那么怎么来刻画时间呢?对一个序列而言,在遍历的过程中,序列的长度就是指的时间.
### Seq2Seq
什么是序列到序列呢?考虑以下场景,给定一串英文,翻译成中文,我们就可以称为seq2seq,机器人对话系统中也是,给定一个对话的上一句,我们需要生成下一句,当然我们可以用之前意图识别,然后从句子群中选择一个概率最大的作为回复.这里我们需要指出,seq2seq是一个encoder-decoder大类别下的一个特例,而encoder-decoder呢,又是一个称之为conditioned generation大类别的一个特例.这个conditioned generation包含一个上下文c,c如果来自encoder模型,那么conditioned generation 就跟encoder-decoder模型是一回事儿.但是请注意,不是所有的conditioned generation都是encoder-decoder,因为那个上下文c还有可能来自于固定的结构,比方说在天气预测的时候,温湿度,风速,方向可能会指导decoder来生成天气报告.  
理解seq2seq需要注意两点,1个是双向,1个是注意力机制.


### Transformer


### BERT

但是在此之前,NLP需要一种像图像处理时那样一个统一的规整的"元数据"信息.该如何来代表一个语料库中的一个单词呢?最原始的方法是假设一个长度为语料库大小的向量,然后对给定的单词,在对应的位置上设置为1,作为该单词的表示方法.这种表示方法虽然很简单,但是最容易想到.它的优点是它的完整性,可以全部覆盖所有的单词.缺点很明显,它太大了,一个向量就只一个地方为1,未免浪费空间.现在,我们想限制向量的大小,不要让它等于词汇表的大小,而是给定一个我们指定的值,比如说n,n可以等于100,也可以等于1000,然后呢,我们也不要限定说,这n个位置中,只能有一个地方为1,我们想要实现的效果是,通过某种方法,相近含义的词汇通过计算它们分别代表的单词的距离是相近的.举一个经典的例子是这样的,
```
V(King) -  V(man) = V(Queen) - V(woman)

```
这种表示的离散值的向量表示,称为word embedding.它有很多种实现方式,看你怎么定义.那如何实现这种表示法呢?现实应用中,很少需要重新书写embedding算法.我们下面只介绍一种构造方法,Word2Vec Continuous Bags-of-Words(CBOW)模型.这个模型比较有趣的是,它本身的习得也是一种类似于监督学习下的任务,这个任务也是通过神经网络实现的.此任务像是language model,用于预测推断下一个将要出现的单词.但是如何去界定它的目标呢?打个比方,这个任务就像是填空,对一个给定的句子,这个句子是由词组成的,现在,将每个词都抠出来,作为目标对象.比如说啊
```
今天我们去看**(电影)**吧
```
这句话呢,把单词“电影”拿出来,假设我们只看到
```
今天我们去看___吧
```
需要根据它这个空格的上下文推测出“电影”这个词,就是我们的任务了.这里有一个细节要注意,对每个单词都存在一个所谓的窗口,就是它附近的单词数量,这个窗口的大小一般在举例子的时候是等于2的,然后在句子的开头和结尾部分,可能需要通过填充(padding)来满足窗口大小的要求.对一个给定的词库来说,我们将要学习到的任务就是每个单词的embedding表示法,这个embedding包含了语言特有的属性,比如医生通常跟男性联系在一起,而护士则跟女性相关.这是不对的.为此,NLP有一个伦理委员会,也是一个非常活跃的领域.
前面我们说过,训练出embedding 的表示法本身也是一个神经网络的任务,它将会作为其它任务的输入,像这样的操作,有个学名,叫做迁移学习.