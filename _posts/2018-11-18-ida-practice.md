---
layout: post
title: IDA最佳实践
---
将汇编代码还原成高级语言是一项富有挑战性的任务。   
IDA使这项工作变得容易了。我们来认识以下常用的快捷键:
- Esc 退回上一步
- n 对位置变量重命名
- Shift + ; 对代码进行注释
- Ctrl + x 查找引用
- Spacebar 在graph和text视图之间切换

识别以下模式：
- if-else
- switch
- for
- function calling convention



脚本语言编写：
IDC 和 python




备注：
Xref回答了两个问题：
1. 谁调用了我？
2. 我调用了谁？

[Intel 64位寄存器列表](https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf)

寄存器ABCD名称的含义 ：Accumulator, Base, Counter, Data
