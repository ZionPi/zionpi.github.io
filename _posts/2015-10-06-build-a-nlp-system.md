---
layout: post
title: 构建NLP系统
---
NLP系统，顾名思义，是自然语言处理系统。[前面]()我们已经知道，有许多任务可以使用NLP技术，比如情感分析，对话系统，机器翻译，语音转文字，信息抽取，文本生成等等。现实的应用依赖于数据，然后对这些数据进行分析，分析的任务根据特定的语言又分为词性标注，命名实体识别，词法分析，语法分析。为此，我们需要建立不同的模型，不同模型是想要克服其它模型的弱点而提出的，比如贝叶斯模型为了克服决策树的顺序问题，最大熵模型克服贝叶斯的变量独立问题。在此之后，我们有更多的是为了克服语言的二义性，多义性而提出解决方案。基于统计规则，概率，我们可以获取一些结果。根据针对模型，提出不同的算法，用这模型和算法，去训练人工标注的数据，去应用在未知的数据上。训练集上有正确的数据，而测试集用来测试我们提出的算法的效果。但是并不存在一个通吃的模型，去解决所有不同的任务。即便如此，这并不妨碍NLP系统的构建，概括起来NLP系统通常需要包括的任务有：  

- 数据获取(爬虫)
- 数据预处理(清洗，POS，NER)
- 任务提出(机器翻译，情感分析，信息抽取，文本生成，对话机器人)
- 模型提出(CNN/RNN)
- 算法提出(SVM,)
- 针对模型、算法的训练(标准？)
- 数据的可视化呈现(网页？文本？)

## 内容获取

资源来自互联网，你可以在线尝试试用[boilerpipe](https://boilerpipe-web.appspot.com/)，它可以自动提取给定网站的文本内容。
还有一些其它的爬虫技术，需要因地制宜，及时补充。  

[各大网站模拟登陆](https://github.com/CriseLYJ/awesome-python-login-model)所需要用到的工具。  

[lazynlp](https://github.com/chiphuyen/lazynlp)获取GPT-2所需要的大量文本。  

还有找现成的[中文语料库](https://github.com/liuhuanyong/ChineseNLPCorpus)。

## 数据清洗
一般地，我们拿到数据后，在给定任务之前，我们想对数据做的处理有: POS,NER,SBD之类的，
 
| 任务 | 解释 |  
--- | ---  
| Tokenization	| Segmenting text into words, punctuations marks etc.|   
| Part-of-speech (POS) Tagging	| Assigning word types to tokens, like verb or noun. |  
| Dependency Parsing | Assigning syntactic dependency labels, describing the relations between individual tokens, like subject or object. |  
| Lemmatization | 	Assigning the base forms of words. For example, the lemma of “was” is “be”, and the lemma of “rats” is “rat”. |  
| Sentence Boundary Detection (SBD)	| Finding and segmenting individual sentences. |  
| Named Entity Recognition (NER)	| Labelling named “real-world” objects, like persons, companies or locations. |  
| Similarity | 	Comparing words, text spans and documents and how similar they are to each other. |  
| Text Classification	| Assigning categories or labels to a whole document, or parts of a document. |  
| Rule-based Matching	| Finding sequences of tokens based on their texts and linguistic annotations, similar to regular expressions. |  
| Training	| Updating and improving a statistical model’s predictions. |  
| Serialization | 	Saving objects to files or byte strings. |   

而这就是[spacCy库](https://spacy.io/usage/spacy-101)提供给我们的。

## 算法

在线资源尤其重要，但是太多了，重复重复着就感觉会收敛，试着专注某几个小而精的资源，比如这个[Practical Machine Learning with Python](https://github.com/dipanjanS/practical-machine-learning-with-python).[这里](https://nbviewer.jupyter.org/github/dipanjanS/practical-machine-learning-with-python/tree/master/notebooks/)你甚至可以直接看到代码的实现。

## 模型
Facebook提供[PyText](https://pytext-pytext.readthedocs-hosted.com/en/latest/)工具，帮助快速建立模型，并且迅速扩展到商业用途。

---
参考资料：  
- [Design Patterns for Production NLP Systems](http://deliprao.com/archives/294)
