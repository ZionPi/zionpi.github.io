---
layout: post
title: 如何使用Colab
---
[**Colaboratory**](https://colab.research.google.com/)是由谷歌提供的云端Jupyter NoteBook.Colaboratory是构建在Jupyter Notebook之上的。并且它支持github上的任何.ipynb文件。
更重要的是，它支持云端安装tensorflow以及其它的库。命令格式比较简单，如下:
>  !pip install -q matplotlib-venn
更多安装命令，参考[教程](https://colab.research.google.com/notebooks/snippets/importing_libraries.ipynb#scrollTo=iDu3Slhq2zyh).  
这个工具让我们在学习机器学习的过程中省去了一大堆的环境配置工作，从而更专注于算法本身。  
这个[网站](https://developers.google.com/machine-learning/crash-course/)对初学者特别友好。   

现在，Colaboratory提供了最新的Tesla T4了！
执行下面的命令将会看到条目。

```
from fastai.utils.show_install import *
show_install()
!lscpu
```
如果你不幸没有看到有关GPU的输出,那么,请尝试在菜单栏->修改->笔记本设置里面选择GPU.  
有了Colab之后，你基本上不用折腾环境配置了(conda,docker...统统不用管！),it's quite a relief.    
所以```pytorch,tensorflow,scikit-learn```这些基础知识你赶紧得搞通透！
你所能想到的在本地执行的功能，它那基本都能实现，而且硬件配置非常之高，matplot,文件上传之类的功能它都给你准备好了。简单地说它就是一个云端的
Jupiter Python，它支持让你在Markdown写文档，当然支持数学公式的编写。这是我见过对用户最友好的产品，只要你要用它来进行挖矿啥的，你就可以自由自在
地在它那发挥你的潜能！
