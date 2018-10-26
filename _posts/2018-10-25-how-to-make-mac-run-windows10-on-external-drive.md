---
layout: post
title: 在mac上运行移动硬盘上的windows10系统
---
**请注意，本文描述的是在mac运行移动硬盘上的windows系统，不是在mac上装双系统**  
准备材料：
- 1.一个大小适合的移动硬盘
- 2.一台Mac
- 3.Windows10.iso镜像
- 4.Windows环境，虚拟机或者实体机
- 5.WinToUSB 软件，在Windows下使用

下面简单的说以下步骤：
- 1.抹除移动硬盘的资料，注意做好备份工作。并且使其能够支持GPT(Guid)，而不是MBR。
- 2.制作EFI系统引导分区。使用的是Mac自带的磁盘工具，选择Mac扩展日志。
- 3.利用磁盘工具将移动硬盘的其余部分格式化为NTFS格式。
- 4.在Windows环境下运行WinToUSB，选择镜像，选择目标磁盘。
- 5.在Mac下打开Boot Camp Assitant，下载Windows Support文件。
- 6.在完成步骤4之后，打开移动硬盘会看见Windows相关文件已经安装到位，把步骤5下载好的
    Windows Support文件放进移动硬盘。
- 7.打开Mac系统偏好设置，选择启动盘为刚刚制作的移动硬盘。

`注：很多教程没有提及到的是第一步，让移动硬盘支持GPT`
