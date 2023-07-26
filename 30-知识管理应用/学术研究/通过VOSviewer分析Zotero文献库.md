---
uid: 20230714000451
title: 通过 VOSviewer 分析 Zotero 文献库
tags: [Zotero, VOSviewer, 知识组织]
description: 通过VOSviewer软件来分析Zotero中的文献
author: 熊猫别熬夜
type: tutorial
draft: false
editable: false
modified: 20230715065909
---

# 通过 VOSviewer 分析 Zotero 文献库

![Pasted image 20230714004228](https://cdn.pkmer.cn/images/Pasted%20image%2020230714004228.png!pkmer)

[VOSviewer](https://www.vosviewer.com/)：是一种用于可视化和分析科学文献的软件工具。它可以帮助研究人员在大规模文献数据集中发现和理解文献之间的关系和模式。

[Zotero](https://www.zotero.org/)：是一个免费的开源参考文献管理软件，旨在帮助研究人员组织、管理和引用他们的文献资源。它可以帮助用户收集、整理和存储各种类型的文献，包括期刊文章、书籍、报告、网页和多媒体文件等。

本文将介绍如何使用 VOSviewer 对 Zotero 中的文献资源进行简单的可视化分析。

## Step1：导出 Zotero 中要分析的文献格式为 RIS 格式

在 **Zotero** 选择你要分析的**文件目录**，可以选择 **我的文库** 来分析全部收藏的文献资源，也可以选择 **选中的的条目** 来进行分析，本次以**🧿文献阅读** 为范例来操作：

![Pasted image 20230714002343](https://cdn.pkmer.cn/images/Pasted%20image%2020230714002343.png!pkmer)

将导出 `*.ris` 文献引用格式存放在合适的路径，接下来将用 **VOSviewer** 对它进行文献可视化分析。

## Step2：导入 RIS 格式文件到 VOSviewer 软件中

在 VOSviewer 主界面单击 **Create** 会弹出**Create Map**界面，选择中间的 **Createamap based on bibliographic data**进行下一步操作**Next>**

![Pasted image 20230714015259](https://cdn.pkmer.cn/images/Pasted%20image%2020230714015259.png!pkmer)

由下图所示的操作依次进行 3 个步骤来在 VOSviewer 中导入 Zotero 导出 **RIS 文件**

![Pasted image 20230714015317](https://cdn.pkmer.cn/images/Pasted%20image%2020230714015317.png!pkmer)

## Step3：选择合适的分析模式

对于 zotero 导出的 RIS 目录，在 VOSviewer 中只能进行**作者合作网络分析**以及**关键词共现分析**：

- **作者合作网络分析**：
	- 通过分析科学文献中作者之间的合作关系，来揭示研究领域中的合作模式和合作网络结构的方法。通过构建和分析这样的合作网络，可以识别出具有高度合作关系的作者群体，揭示出作者之间的合作模式和合作强度，以及研究领域中的合作网络结构。这种分析有助于了解研究领域中的合作趋势和合作网络的演化过程，为研究合作和科学合作政策提供重要参考。
- **关键词共现分析**：
	- 通过分析科学文献中关键词之间的共现关系，来揭示关键词之间的关联和研究领域的主题结构的方法。通过构建和分析这样的共现网络，可以识别出具有高度共现关系的关键词群体，揭示出关键词之间的关联和主题结构，以及研究领域中的主题演化过程。这种分析有助于了解研究领域中的研究热点、关键主题和研究方向，为研究导向和科学政策制定提供重要参考。

![Pasted image 20230714005742](https://cdn.pkmer.cn/images/Pasted%20image%2020230714005742.png!pkmer)

这里本文选择关键词共现分析，两者操作步骤一样。

## Step4：调整 VOSviewer 分析参数

![Pasted image 20230714011304](https://cdn.pkmer.cn/images/Pasted%20image%2020230714011304.png!pkmer)

按照上图所示的步骤后，点击 `Finish` 就可以在 VOSviewer 界面显示可视化的图谱了

![Pasted image 20230714011628](https://cdn.pkmer.cn/images/Pasted%20image%2020230714011628.png!pkmer)

## Step5：对分析结果进行一定的微调

不过有时候的图谱非常不美观，节点全部聚集到一起了，这时就可以微调节点间**引力 (Attraction)** 和**斥力 (Repulsion)** 来优化图谱的：

![Pasted image 20230714012612](https://cdn.pkmer.cn/images/Pasted%20image%2020230714012612.png!pkmer)

![Pasted image 20230714013126](https://cdn.pkmer.cn/images/Pasted%20image%2020230714013126.png!pkmer)

> 这里要注意的点就是 **引力参数必须大于斥力参数**

> [!tip] VOSviewer 的一些参数介绍
> ![Pasted image 20230714012059](https://cdn.pkmer.cn/images/Pasted%20image%2020230714012059.png!pkmer)

同时在视图界面的左上角有三个视图界面可以切换，可以选择不同视图：

![Pasted image 20230714013012](https://cdn.pkmer.cn/images/Pasted%20image%2020230714013012.png!pkmer)

## 最终的分析评价

采用 Zotero 导出的 RIS 格式文献可以导入 VOSviewer 进行一定的引文分析，不过该方法存在很多问题：引入重复文献条目、中英文文献混合、CNKI 导入的文献的关键词包含中英文、导出的 Zotero 条目类型只有期刊文章类型等等问题，**这些问题可能导致数据的准确性和一致性受到影响，从而对分析结果产生一定的偏差，并不能作为真正的文献分析**，但可以作为快速可视化预览自己的 Zotero 文献分布的一种简单实用又好玩的方法。

本文仅演示了 VOSviewer 对 Zotero 文献库的基本分析用法。然而，VOSviewer 的功能远不止于此。您可以参考 [官方手册](https://www.vosviewer.com/documentation/Manual_VOSviewer_1.6.19.pdf) 学习其他分析和操作方法。
