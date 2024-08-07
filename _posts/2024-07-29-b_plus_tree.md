---
layout: post
title: B+ 树
tags: B树 B+树 数据结构
--- 

```
想象一下，你要在图书馆里找一本书，书名叫做《百年孤独》。图书馆里成千上万的书，你总不能一本一本地翻吧？这时候就需要用到目录。

B+ 树就像图书馆的超级目录，它帮你快速找到想要的书（数据）。
```

# 2个特征

## 阶数
阶数决定了每个节点可以容纳的最大键值数，进而影响树的高度和节点数量。

### 如何估计 B 树的阶数

B 树的阶数通常由磁盘块的大小决定。选择合适的阶数可以最大程度地减少磁盘 I/O 操作，提高查询效率。

步骤:

确定磁盘块大小: 了解你使用的存储系统的磁盘块大小 (通常是 4KB, 8KB, 16KB 等)。
估算键值和指针大小: 确定每个键值和子节点指针占用的字节数。这取决于数据类型和系统架构。
计算最大键值数: 根据磁盘块大小、键值大小和指针大小，计算每个节点可以容纳的最大键值数。
公式:

阶数 (m) =  ⌊ (磁盘块大小 - 指向父节点的指针大小) / (键值大小 + 指针大小) ⌋
例子:

假设：

磁盘块大小 = 4KB (4096 字节)
键值大小 = 8 字节
指针大小 = 4 字节
则：

阶数 (m) = ⌊ (4096 - 4) / (8 + 4) ⌋ = ⌊ 4092 / 12 ⌋ = 341
因此，在这种情况下，B 树的阶数可以估计为 34

## 数据的数量
数据量越大，树的高度就越高，节点数量也越多

# 结构
## 节点结构:

每个节点包含多个键值和指向子节点的指针。
内部节点的键值用于索引子节点的数据范围。
叶子节点存储实际的数据或指向数据的指针。

# 操作
## 查找操作:

从根节点开始，根据要查找的键值，沿着树向下遍历。
在每个节点中，使用二分查找或顺序查找找到合适的子节点指针。
最终到达叶子节点，查找目标键值。

## 插入操作:

找到合适的叶子节点。
将键值和数据插入到叶子节点。
如果节点溢出，则进行节点分裂。
更新父节点的指针。

## 删除操作:

找到包含要删除键值的叶子节点。
删除键值和数据。
如果节点下溢，则进行节点合并或重新分配键值。
更新父节点的指针。

# 与B树的区别
B+ 树是 B 树的一种变体，它们之间主要有以下几个区别：

1. 数据存储位置：

B 树: 所有节点都可以存储数据。
B+ 树: 只有叶子节点存储数据，内部节点只存储键值作为索引。

2. 叶子节点连接：

B 树: 叶子节点之间没有连接。
B+ 树: 所有叶子节点通过指针形成一个有序链表，方便范围查询。

3. 键值冗余：

B 树: 每个键值只出现一次。
B+ 树: 内部节点的键值会在叶子节点中再次出现，作为叶子节点链表的连接键。