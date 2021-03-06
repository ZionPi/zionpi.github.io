---
layout: post
title: NLP相关任务算法与模型
---
[怎么解决NLP中90%的问题](https://blog.insightdatascience.com/how-to-solve-90-of-nlp-problems-a-step-by-step-guide-fda605278e4e)?  
这篇文章很有趣，文中为我们描述了一个典型的NLP任务场景，简单描述如下:
>我们有一堆用户的数据，这些数据来源于用户在社交媒体发表的言论，  
如何使用这些数据做一些有意义的事情呢？  
比如，我们要做的事情是灾情检测。当灾情发生时，用户会在社交媒体  
传播。但是，如果这灾情是来自于电影，用户发表的言论代表的是对电影  
的评论。怎么做区分呢？  
*首先*，我们要做的是收集数据。  
*其次*，数据中有些部分我们并不想要。比如，你的任务是灾情预警，而句子  
中包含“啊”、“哦”、“呵”、“嘿”这些成分，就需要清理出去。这一步叫做  
数据清理。
*再次*，我们建立一个简单的模型，模型对于给定的句子，可以判断它是  
属于影视评论呢还是现实中状况。一个典型的判别器是逻辑回归。更复杂地  
建立一个神经网络模型。  
*最后*，解释和理解模型，确保你的模型做你想要它完成的工作，而不是捕捉噪音。  

针对特定的问题，我们需要收集特定的数据，然后应用已有的数据，建立模型，优化模型，解释模型...等等，我们还可以提出更多的问题来。比如说，我们
怎么表示数据，怎么显示数据，用什么算法来实现我们的意图，是分类，还是机器翻译，还是其它任务类型，我们似乎可以谈得很多，然而现实却是，我们
研究的问题除了与数据有关外，还有其它的细节等待被发掘。  

---  
神经网络是更复杂的模型，它分层，每一层都有连接，比较常见的有CNN、RNN。



- SGNS/cBoW、FastText、等ELMo（从词向量引出）
- DSSM、DecAtt、ESIM等（从问答&匹配引出）
- HAN、DPCNN等（从分类引出）
- BiDAF、DrQA、QANet等（从MRC引出）
- CoVe、InferSent等（从迁移引出）
- MM、N-shortest等（从分词引出）
- Bi-LSTM-CRF等（从NER引出）
- LDA等主题模型（从文本表示引出）


---

接下来详细介绍几种模型，在此之前，给自己提个问题，针对给定的模型，我们如何算得上是**理解**了模型了呢？
 - 隐马尔可夫模型 (HMM)  
  [隐马尔可夫模型相关资源](https://www.quora.com/What-are-some-good-resources-for-learning-about-Hidden-Markov-Models)
 - 最大熵模型(MaxEnt)
 - 条件随机场模型
 
---
## 神经网路
有一个我们无法忽视的模型，神经网络模型，相关的资料非常之多，进来也涌现了不少高水准之作，在看过[这篇](https://victorzhou.com/blog/intro-to-neural-networks/)关于神经网络介绍的文章之后，你很难不理解它背后的工作逻辑。还有，此篇文章还推荐一个在网页编程的工作环境[Repl.it](https://repl.it/languages)  

[A Primer on Neural Network Models for Natural Language Processing](https://arxiv.org/abs/1510.00726) 这篇文章讲解了在NLP系统中运用神经网络的方方面面。

---
## 基础算法
- [MaxEnt](https://nadesnotes.wordpress.com/2016/09/05/natural-language-processing-nlp-fundamentals-maximum-entropy-maxent/)
- [CRF](https://en.wikipedia.org/wiki/Conditional_random_field)
- [pLSA](https://en.wikipedia.org/wiki/Probabilistic_latent_semantic_analysis)
- [word2vec](https://en.wikipedia.org/wiki/Word2vec)  
  这个是比较浅的神经网络模型，更多[A Beginner's Guide to Word2Vec and Neural Word Embeddings](https://skymind.ai/wiki/word2vec)
- CNN
- [DNN](https://towardsdatascience.com/understanding-neural-networks-from-neuron-to-rnn-cnn-and-deep-learning-cd88e90e0a90)
- [LDA](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)
