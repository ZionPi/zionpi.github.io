---
layout: post
title: 浸泡NLP
---
## 目标
- 自然语言处理/机器学习相关的工作，包括但不限于语义理解、信息抽取、文本分类、命名实体识别、句法分析等
- 后台垂直领域的开发和改进
- 分析挖掘用户行为数据，为用户体验的提升、问题的发现、算法的改进提供支持
- 顶尖的人工智能算法应用

- 熟悉常见的机器学习算法
- 熟悉NLP/搜索技术，熟悉XGBOOST、TensorFlow、Theano、Torch、Caffe、MXNet等深度学习框架
- 熟悉Hadoop，MapReduce，Spark，Storm，HBase，Kafka。  


## 参考书籍
- 《统计学习方法》 - 李航  
- 《中文信息处理丛书：统计自然语言处理》 - 宗成庆  
- Introduction to Information Retrieval   
- Foundations of Statistical Natural Language Processing  
- [Natural Language Processing with Python](http://www.nltk.org/book/)  
- Speech and Language Processing - Dan Jurafsy
- [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)

## 工具
[哈工大LTP工具包](https://github.com/HIT-SCIR/ltp)

## 参考项目
[信息摘要](https://github.com/harvardnlp/NAMAS),一个[集合](https://github.com/icoxfog417/awesome-text-summarization)
[LeetCode实践](https://leetcode.com/)

3个中文相关(起点在这儿？)
- [结巴中文分词](https://github.com/fxsjy/jieba)
- [FastNLP](https://github.com/fastnlp/fastNLP)
- [SnowNLP](https://github.com/isnowfy/snownlp)

4个框架  
- [Flair](https://github.com/zalandoresearch/flair) 多语言框架，基于PyTorch
- [Kashgari](https://github.com/BrikerMan/Kashgari) 多语言框架，基于Keras,据说5分钟建模(起点在这儿？)
- [UDPipe](https://github.com/ufal/udpipe) 多语言框架, 可训练管道，C++
- [NLP-Cube](https://github.com/adobe/NLP-Cube) 多语言框架，Python
## 在线课程
**Michael Collins** 的[Natural Language Processing ]()

Dan Jurafsky和Christopher Manning 的[Natural Language Processing](https://www.youtube.com/watch?v=3Dt_yh1mf_U&list=PLQiyVNMpDLKnZYBTUOlSI9mi9wAErFtFm)  

[Text Mining and Analytics](https://www.youtube.com/playlist?list=PLLssT5z_DsK8Xwnh_0bjN4KNT81bekvtt)  


NLP与深度学习[Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ)(著名的cs224n?)  

[YSDA Natural Language Processing course](https://github.com/yandexdataschool/nlp_course)

## 会议
- [ACL Wiki](https://aclweb.org/aclwiki/Main_Page)
- [ACL](http://www.aclweb.org/anthology/)
- [排名](https://scholar.google.ca/citations?view_op=top_venues&hl=en&vq=eng_computationallinguistics)


### 建议的顺序
 - Language model 
 - POS tagging  
   `POS 是part-of-speech 的缩写，这个在NLTK with python书中第5章有讲到。主要是用统计，形态学，语义，正则表达式，Brill tagger制定规则`
 - 语法分析PCFG
 
 实际应用：(基于统计的机器翻译，IBM model1、 IBM model 2、phrase based machine translation、再log linear model)

### 研究方向

  - 阅读理解
  - 文章摘要
  - 机器翻译(竞赛)
  - 对话系统(个性定制？)
  
#### 微小的工作
 


#### 认识

[Natural Language Processing (almost) from Scratch](https://arxiv.org/pdf/1103.0398.pdf)

<!---
1.熟悉机器学习和深度学习算法，不求会，但是一定要会用。但是面试的时候要能掌握1-2个模型的算法原理，能把面试官讲明白，就可以了。
2.确定一个自然语言处理的研究方向，最好是那种比较重模型不重语言的，比如机器阅读理解，机器摘要等。在这里，我想说，其实对NLP的基本经典问题，知道即可，分词、parsing这些，如果不是特殊需要，看看了解一下就行了。尤其是那些公开课，我个人觉得没啥用，看看cs224n足够了。老旧的经典的了解即可，重点的是那些新的东西，一定要多看多想多做。平时要看开源的代码，最好follow一个state-of-the-art的工作，看着论文和代码从头到尾实现一下，受益匪浅。
3.多看文献，学会表达，如何把自己的东西讲的高大上，这点最重要，尤其是找工作。其实做的大多数东西，如果你真的去做，就会感觉很low，那么一定要学会如何讲的高大上。其实现在deep learning下，大家做的东西都差不多，往任务上堆模型。创新点，公说公有理，婆说婆有理，说到底就是那么点东西。
4.刷题，纯找工作用


--->


<!--- 

1、清洗数据，主要是格式抓换，编码转换。
2、文本分类，主要用fasttext。
3、关键词抽取，主要靠词库。
4、相似度排序，用word2vec。
5、上线，写完接口，然后发布soap服务。


1.各种数据处理，包括数据清洗和数据形式转换等，数据处理无止境，
2.文本分类。词分类，句子分类，段落分类，各种分类。方法不择手段，什么tf-idf、词向量、句子向量、规则学习。反正能把问题解决就行，方法粗暴一点脏一点是次要的。
3.实体识别，实体关系抽取。论文一抓一大把，真正用起来首先面临标记数据不足和具体任务的特殊标签集和要求，所以要先标记数据。数据标记完了也没时间实现那些花里胡哨的论文，直接拿开源跑一跑，结果差不多能用就行了。
4.论文也读，但是可操作的太少，偶尔实现一下论文里的方法，大多数时候都先找开源包。各种开源工具能用则用，力求多快好省地解决问题。

1、看论文，NLP能看的论文比较少，大多数论文没什么卵用

2、处理数据，文本数据噪声很多，需要进行文本归一化、query改写等等。

3、写模型，该模型，调参。

4、参与线上框架开发，一般就是写写c+

识库的构建，实体识别，实体关系抽取


1，纯工程能力。此能力包括但不限于 洗数据，挖数据，写规则，调包式模型实现，线上代码简洁性和效率。2，模型调参能力。此处和之前不一样的是，input是定的，假设数据已经洗好了，要实现模型了。feature engineering 或者 end2end的深度学习模型模型你能不能把效果调上去。无论是内部数据集还是公开的benchmark，能刷分绝对是一个必不可少的技能

1，造活儿能力。你必须承认基本所有大公司都是生产力过剩的，僧多粥少，清楚的活儿抢的都不行。如何能够另辟蹊径，看准技术能实现也有需求的活儿非常重要。2，做有影响力研究的能力。虽然论文已经越来越多了，但是中国做出有影响力的论文还很少。当然，有影响力的研究不光需要论文质量高，还需要后期宣传。3，分布式系统能力。NLP进入深度学习时代，突出一个数据量大，模型训练慢。无论是大规模word2vec ，seq2seq还是bert都需要系统能力。多机多卡了解一下。此处在说一下bert，此模型非常非常的强，基本是碾压的存在。某些奖金极高的AI比赛，稍微fine-tune一下中文的bert-base阅读理解就可以前几名，公开的benchmark各种被刷爆，内部的数据集也是很难幸免。近两个月，你要是说你能自己把bert训出来，绝对是核心竞争力。

--->


<!--- 


由于我工作时间不算长，跟上面的老兵比肯定是不行的，我就以小兵的角度抛砖引玉吧，谢邀。这里面的核心竞争力我个人感觉应该分为两类，一类是工作的竞争力，另一类是面试的竞争力。工作的竞争力：我觉得最重要的应该是业务问题抽象能力，比如抛出给你一个case你是不是能较快的从业务问题抽象成一个完整的数据清洗+模型选择+训练预测工程化+评测的体系。工业界（我暂指那些比较大的互联网公司，中国top20吧）追求的真不是kaggle那种“拼一枪”的思维，稳定性、时效性、ROI都是要考虑的，有些实习生进了大公司觉得“妈呀为什么大公司不用XX训练还要用我两年前的方法”，其实真的不是不能用，是真怕不稳定出故障啊。面试的竞争力：面试造核弹这个问题任何公司都有，主要就是看一下你知识天花板在哪里（而不是能力的天花板），这也是为什么学历会占据一定分量的原因，它代表你的学习能力。NLP面试竞争力我觉得主要是“懂得多”和“复现能力”两块：懂得的多就是你一定要跟踪学习最近的好论文，paperweekly推荐的那种就挺好的，没必要吃透，能写个综述就行了；复现能力主要指的是论文是否能有所产出，比如能不能复现个BERT（个人感觉能复现BERT的人现在公司基本都抢着要了...），或者解释一下BERT的原理并用一个开源包实现，里面有什么trick等等。      反而我觉得编程和工程能力并不是主要的考察对象，所以我一直都很反感追着白板编程不放的NLP面试官...如果你问我上面两个我应该更重视哪个呢？这个很难回答，不过我觉得后者更重要一些，因为前者不管你学习能力多么弱，还是可以明白的，但是后者真的很难做到，最起码大公司title不带“研究”俩字的95%都做不到，而现在的公司，不管规模大小都在争抢这5%的人
--->
