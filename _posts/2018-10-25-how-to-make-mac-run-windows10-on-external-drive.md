---
layout: post
title: 在mac上运行移动硬盘上的windows10系统
---
**请注意，本文描述的是在mac运行移动硬盘上的windows系统，不是在mac上装双系统**  
准备材料：
- 一个大小适合的移动硬盘
- 一台Mac
- Windows10.iso镜像
- Windows环境，虚拟机或者实体机
- WinToUSB 软件，在Windows下使用

下面简单的说以下步骤：
- 抹除移动硬盘的资料，注意做好备份工作。并且使其能够支持GPT(Guid)，而不是MBR。
- 制作EFI系统引导分区。使用的是Mac自带的磁盘工具，选择Mac扩展日志。
- 利用磁盘工具将移动硬盘的其余部分格式化为NTFS格式。
- 在Windows环境下运行WinToUSB，选择镜像，选择目标磁盘。
- 在Mac下打开Boot Camp Assitant，下载Windows Support文件。
- 在完成步骤4之后，打开移动硬盘会看见Windows相关文件已经安装到位，把步骤5下载好的
    Windows Support文件放进移动硬盘。
- 打开Mac系统偏好设置，选择启动盘为刚刚制作的移动硬盘。或者插上硬盘，在重启的时候，按住option键，选择移动硬盘。
- 第一次启动Windows时的时候可能显示不完整，安装前面步骤下载好的Windows Support文件。

-----------UPDATE-----------------------------------------------
上面的步骤存在一个bug，就是当格式化为NTFS格式之后，在Mac环境下，磁盘成为只读的了。可选方案是格式为ExFAT，待验证。

`注：很多教程没有提及到的是第一步，让移动硬盘支持GPT`
