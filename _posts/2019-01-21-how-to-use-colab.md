---
layout: post
title: 如何使用Colab
---
**Colaboratory**是由谷歌提供的云端Jupyter NoteBook.Colaboratory是构建在Jupyter Notebook之上的。并且它支持github上的任何.ipynb文件。
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
