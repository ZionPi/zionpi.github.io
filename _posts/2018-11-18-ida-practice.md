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
- Ctrl + 1 打开小窗口列表
- Spacebar 在graph和text视图之间切
- Edit -> Patch 能够将修改保存目标文件中
- F5 可以生成伪C代码

识别以下模式：
- if-else
- switch
- for
- function calling convention

插件[Fentanyl](https://github.com/osirislab/Fentanyl)：
虽然PySide不适合这个版本，但是有以下快捷键：
- Alt-N Convert instructions to nops
- Alt-X Nop all xrefs to this function
- Alt-J Invert conditional jump
- Alt-P Patch instruction
- Alt-Z Undo modification (Won't always work. Should still be careful editing.)
- Alt-Y Redo modification (Won't always work. Should still be careful editing.)
- Alt-S Save file
- Alt-C Find Code Caves
- Ctrl-Alt-F Make jump unconditional
- Ctrl-Alt-N Neuter the binary (remove calls to fork, setuid, setgid, getpwnam, setgroups, and chdir)



脚本语言编写：
IDC 和 python




备注：
Xref回答了两个问题：
1. 谁调用了我？
2. 我调用了谁？

[Intel 64位寄存器列表](https://cs.brown.edu/courses/cs033/docs/guides/x64_cheatsheet.pdf)

寄存器ABCD名称的含义 ：Accumulator, Base, Counter, Data

注意，没有撤销的功能
