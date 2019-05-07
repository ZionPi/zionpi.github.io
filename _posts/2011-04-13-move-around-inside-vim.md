---
layout: post
title: 在vim中超速驾驶
---
其实，只有一招


```
:help motion.txt
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

还是做一个小结吧,把我最常用到的快捷方式写一下,

|快捷键 |    作用 |
|---   | ----   |
| H(大写h) |将光标移到开头 |
|M(大写m) | 将光标移到中间 |
|L(大写l) | 将光标移到结尾 |
|zz | 将当前行作为屏幕中央 |
|zt | 将当前行作为屏幕开头 |
|zb | 将当前行作为屏幕结尾 |
|Ctrl + u(up) | 向上滚动半屏 |
|Ctrl + d(down)|  向下滚动半屏|
|Ctrl + f(forward)|  向前滚动整屏 |
|Ctrl + b(backward)|  向后滚动半屏 |

以上这个是在大范围内移动光标的方法.

|快捷键 |    作用 |
|---   | ----   |
| 0(数字0,不是字母哦) |将光标移到行首 |
| $ |将光标移到行的末尾|
|h | 向左一个字符 |
|j | 向下移动一行|
|k | 向上移动一行|
|l | 向右一个字符|
| w | 向前移动一个单词|
|b | 向后移动一个单词|
|e | 去下一个单词的结尾|
| W | 向前移动一个大单词(标点符号作为标记)|
|B | 向后移动一个大单词(标点符号作为标记)|
|'个数(数字)' + f + '目标字符'|去前面第'个数'个'目标字符'|
|'个数(数字)' + F + '目标字符'|去后面面第'个数'个'目标字符'|
|'个数(数字)' + t + '目标字符'|去前面第'个数'个'目标字符'的前一个字符|
|'个数(数字)' + T + '目标字符'|去后面面第'个数'个'目标字符'后一个字符|
|;(分号)|重复fFtT指令|

以上介绍的是小范围内的精准定位方法

|快捷键 |    作用 |
|---   | ----   |
|% |匹配括弧之间往复 |
|{或者} |段落之间前后移动 |
|(或者) |句子之间前后移动 |
|‘数字’ + gg| 去到第‘数字’的那一行|
|\`\` | 双撇号回到上一次的位置|

以上是一些小窍门

|快捷键 |    作用 |
|---   | ----   |
|u |撤销操作 |
|Ctrl + r |撤销的逆操作 |
| \/字符串 | 前向搜索|
| \?字符串 | 后向搜索|
|n |搜索里面的上一个 |
|N |搜索里面的下一个|
|:%s/foo/bar/g|全局的将foo替换成bar,注意百分号别丢了|
|:6,10s/foo/bar/g|将6到10行的foo替换成bar|
|v|可视化模式可用于指定区块什么的,碰到<、>的符号不要惊讶|
|y| yank复制|
|p|黏贴|
|d|剪切|



---
## 参考资料
- [Vim 101: Quick Movement](https://medium.com/usevim/vim-101-quick-movement-c12889e759e0)
- [Vim Super Fast Navigation](https://stackoverflow.com/questions/8750275/vim-super-fast-navigation)
- 更多有趣的[操作](https://vim.fandom.com/wiki/Copy,_cut_and_paste)
- [多文件窗口操作](https://www.cs.oberlin.edu/~kuperman/help/vim/windows.html)