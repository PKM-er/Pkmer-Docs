---
uid: 20230825094437
title: 提高文献管理效率的秘诀：Citavi、Obsidian 和 Eagle 综合应用
tags: [文献]
description: Citavi、Obsidian 和 Eagle 综合应用
author: 一刀
type: practice
draft: false
editable: false
modified: 20230825110956
---

# 提高文献管理效率的秘诀：Citavi、Obsidian 和 Eagle 综合应用

## 引言

作为一个已经毕业十年的老博士，一直以来我都保持着阅读文献和博硕论文的习惯。今天就来跟大家分享一些文献管理工具的心得和体会吧。

## 文献管理工具 -Citavi

在经历过 Endnote，Mendeley 之后，最终我选定了 Citavi 作为主力的文献管理工具，因为它几乎满足了我对文献管理的所有需求。

- Citavi 的特点：
    - 项目式管理。你可以以某个主题作为一个项目，也可以以某个研究方向作为一个项目。建立好项目之后，可以在项目中导入文献。
    - 标记分类很清晰。Citavi 的标记类型包括黄红两种 Highlight，直接引用和间接引用，Summary，Comment（你甚至可以给一个 Comment 加一个 Comment）。有一些标记会显示在 PDF 的页面中，有一些则会显示在 PDF 页面的侧边。
    - 知识管理（Knowledge）。每一条标记，包括图片引用（Snapshot），在 Citavi 中都是一条 Knowledge。Knowledge 可以单独管理，并且支持搜索，以及跳转到对应的文献位置。
    - 闪念（Thought）。Citavi 还有一个独立的 Thought 按钮，可以快速记录你读文献时一闪而过的想法。Thought 也被作为 Knowledge 管理，独立于文献。
- Citavi 的缺点：
    - 免费版单个项目有 100 篇文献的限制
    - 网页版没有单机版好用
    - 服务器在国外，导入文献时比较慢
    - 文件在项目中是分开存储的，也就是说，同一篇文献在不同的项目中时，标记不能共享

## 知识图谱与 Obsidian 知识管理

Citavi 虽好，但是当积攒的文献逐渐多起来之后，会显得比较臃肿，载入速度也会变慢。同时我发现，如果不能通读所有的文献，其实把所有的文献都导入到 Citavi 中进行管理是非常不划算的管理方式。Citavi 更适合学术小白做原始积累。

根据如下图所示的知识图谱的形成过程，我们平时收集的数据或者信息，只有产生联系（双链）才可以形成知识。当我们回忆或者引用这些知识的时候，就形成了 insight。当我们发现这些 insight 本质上的相同点，也就有了智慧。insight，其实有洞悉、顿悟的意思。大的道理往往都是相通的，所谓透过现象看本质。智慧不等于智力。当我们的智慧可以不自知的发挥，也就形成了所谓的“道”。道法自然，如来。

![image.png](https://cdn.pkmer.cn/images/20230825094822.png!pkmer)

而 Citavi 中的 Knowledge 并不支持双向链接或者没有办法可视化以及交互操作。虽然标记在 Citavi 中被命名为“Knowledge”，但其实它们只是上图中的 data 或 Information。只有在 Obsidian 中将它们 Link 起来，才能形成真正可用的 Knowledge，也就是将大脑中的知识具象化。以搭建知识图谱的思路进行文献管理，Obsidian 是非常合适的工具。

如果你想简单尝试一下知识图谱，可以使用微软的开源工具 -SmartKG。

## 以图片为中心

到这里，其实基于 Citavi 和 Obsidian 的工作流应该可以满足大部分的学术需求了。而对于非学术用途的、多研究方向的、多文档来源的文献管理，需要一种更高效的管理工具与工作流。我的观点是，图片比文字的信息量更大，且更容易记忆与关联。正所谓一图胜千言。记住一篇文献主旨的最佳方式，就是看懂并记住其中的图。因此，我提出一种以图片为中心的文献管理方式。而基于向量数据库的以图搜图横空出世之后，使得这种以图片为中心的方式变得尤为便捷。

### PDF 图片提取（Python）

我们可以用 PP-Structure 将 PDF 文档中的图片提取出来。PP-Structure 是基于计算机视觉（CV）的一种工具，通过对 PDF 页面转换成的文档图片进行版面分析，识别文档中 Figure 的位置后进行截图保存。PP-Structure 识别率较高，特别是学术文献中常见的以非图片格式嵌入的曲线。而 PyMuPDF 或 PDFBox 这类工具虽然提取速度快，但只能提取 PDF XML 中属性为 Image 的图片。具体代码可以参考 PP-Structure 的官方文档或者我再写一个 PKMer 文档。

### 图片管理工具 -Eagle

我们可以将提取出的所有图片导入图片素材管理工具 -Eagle，进行管理。Eagle 是专业的图片管理工具，几个 G 甚至几十个 G 的图片都可以快速的检索，非常适合管理庞杂的图片数据，特别是超过几万张的时候。建议用文献标题来命名 Eagle 文件夹。电子书的图片还可以按书里的 Section 建立子文件夹。Eagle 管理图片的方式主要是标签，很灵活。可以用 VizioMetrix 的方式来定义标签，如 Diagram，Photo，Plot，Table，Equation，Composite。也可以根据应用领域自行定义标签，比如我是材料领域，我会将图片分为 TEM，SEM，OM，SAT，X-ray，FIB，CT 等。

### Eagle 和 Citavi 的联用

因为 PP-Structure 提取出来的图片名称为页码编号，所以根据图片的名称可以相对快速的在 Citavi 中定位到图片所在的页。当然有交互的方式更好，期待有大神可以实现。

## 以图搜图

当你拥有某个领域几乎所有的图片之后，你想做的第一件事当然是以图搜图。虽然 Eagle 支持类似百度的以图搜图，但并不支持基于本地图片数据的以图搜图。本地以图搜图功能可以通过开源工具 Milvus 和 Towhee 来实现。基本原理如下图所示。

![image.png](https://cdn.pkmer.cn/images/20230825094834.png!pkmer)

Towhee 的作用是利用已训练好的模型，比如 resnet50，将全部图片转换为向量并保存在 Milvus 中。Milvus 本质上是一个分布式的向量数据库。既支持 Standalone 的模式（我理解的就是本地），也支持云部署（易于扩展的 K8S）。以图搜图的过程，即将待搜索的图片通过 Towhee 转换为向量，并在 Milvus 向量数据库中进行向量相似度匹配。最后将匹配度最高的几张图片展示出来。向量化也是以图搜图速度奇快的核心原因，搜索速度甚至可以达到 ms 级。可以尝试 Milvus 官网的 [demo](https://milvus.io/milvus-demos/)。除了以图搜图，Milvus 还支持以文字搜图、以图搜视频、化学结构的搜索等，甚至可以通过 LLM 和 ChatGPT 结合使用。

## 展望

由于使用的工具较多，整个工作流还是比较复杂的，并不适合所有人使用。从文献管理软件 Citavi，到知识管理工具 Obsidian，再到图片管理工具 Eagle，最后到以图搜图工具 Milvus，也是笔者从对 all-in-one 工具的执着，到以需求驱动工具的一种妥协。当然，如果有人可以开发出一款专门用于文献管理的工具，涵盖收集、整理、笔记、图片提取、以图搜图等功能，那自然是好的。因为我始终认为，PDF 格式是老旧的，目前所有基于 PDF 文件的文献管理与阅读工具都是过时的。毕竟 PDF 格式被设计出来的初衷是排版、打印，而现在谁还会去看打印出来的文献呢？现代化的文献管理和阅读工具应该是基于云的、可以通过机器学习自动建立关联的（比如作者、研究方向等）、可以通过 ChatGPT 提问的、甚至不用读都可以产生出 Knowledge 的。

我是一刀，洋洋洒洒写了一大篇，希望对大家阅读文献有所帮助吧。下次再会。

## 引用链接

1. [PP-Structure](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/ppstructure/README.md)
2. [Milvus](https://milvus.io/)
3. [Towhee](https://hub.towhee.io/)
4. [SmartKG](https://github.com/microsoft/SmartKG)