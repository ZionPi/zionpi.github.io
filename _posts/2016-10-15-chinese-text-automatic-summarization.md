---
layout: post
title: 中文自动摘要
---
信息社会不是信息贫乏，而是信息过剩，大型商业公司摘取提供的信息有时太low，不符合身份，不接地气。但想要不接受影响独善其身是不可能的。如何促进高效地信息获取是急需解决的问题。  
TensorFlow提供了一种可能的实现[TextSum](https://github.com/tensorflow/models/tree/master/research/textsum)。它参考的论文是[A Neural Attention Model for Abstractive Sentence Summarization](https://arxiv.org/abs/1509.00685)和[Sequence to Sequence Learning with Neural Networks](https://arxiv.org/abs/1409.3215)。
因为版权的原因，不能直接(需要付费)用Linguistic Data Consortium的数据，准备数据的[方法](https://github.com/surmenok/TextSum)，详情请看参考资料2.  

## Seq2Seq(encoder-decoder RNN)算法
简单地讲，该算法输入序列，输出序列。序列对序列包含两个RNN，第一个是Encoder，第二个是Decoder。它常用在机器翻译中，更泛化地是应用从一个领域的序列到另外一个领域。

Keras有一个基于LSTM的[Seq2Seq实现](https://github.com/keras-team/keras/blob/master/examples/lstm_seq2seq.py)。


## Teaching Force算法  
是一种训练RNN网络策略，它将先前的事件间隔作为模型的输入。
## RL算法  
关于RL算法[基础介绍](https://medium.com/@jonathan_hui/rl-basics-algorithms-and-terms-ae98314851d7)

## 中文信息摘要  
[HanLP](https://github.com/hankcs/HanLP)这个项目有[一个部分](https://github.com/letiantian/TextRank4ZH)关于中文信息摘要的信息，但那篇文章引用的技术比较老了。[斯坦福中文自然语言处理](https://nlp.stanford.edu/projects/chinese-nlp.shtml)提供了中文基础，有一些文献参考。

--- 
参考资料：
1. [了不起的文本摘要项目汇编](https://github.com/mathsyouth/awesome-text-summarization)
2. [用Tensorflow做文本摘要](http://pavel.surmenok.com/2016/10/15/how-to-run-text-summarization-with-tensorflow/)
3. [深度学习理论知识](http://www.deeplearningbook.org/)
4. [进一步提高](https://www.salesforce.com/products/einstein/ai-research/tl-dr-reinforced-model-abstractive-summarization/)
5. [十分钟用Keras理解Seq2Seq](https://blog.keras.io/a-ten-minute-introduction-to-sequence-to-sequence-learning-in-keras.html)
6. [机器翻译中运用RNN-Encoder-Decoder](https://medium.com/@gautam.karmakar/learning-phrase-representation-using-rnn-encoder-decoder-for-machine-translation-9171cd6a6574)
