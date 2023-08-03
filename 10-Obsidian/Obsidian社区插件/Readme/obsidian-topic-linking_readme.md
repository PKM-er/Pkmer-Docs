---
uid: 20230803231105
title: Obsidian 插件：Topic Linking
tags: ['obsidian插件', 'readme']
description: 将 PDF文件和网页链接转换为Markdown，并从Markdown 创建主题
author: AI
type: readme
draft: false
editable: false
modified: 20230803232440
---

# Obsidian 插件：Topic Linking

> [!Note] 插件名片
> - 插件名称：Topic Linking
> - 插件作者：Liam Magee
> - 插件说明：将 PDF 文件和网页链接转换为 Markdown，并从 Markdown 创建主题
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/liammagee/obsidian-topic-linking)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-topic-linking)

## 概述

将 PDF 文件和网页链接转换为 Markdown，并从 Markdown 创建主题

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/liammagee/obsidian-topic-linking/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-topic-linking]] 插件的自述翻译

## Obsidian 主题链接插件

这是一个插件，提供了几个命令，用于在参考上下文中处理 PDF 和 Web 内容。

**注意：**此插件是高度实验性的，可能会对现有的 vault 产生意想不到的后果。

请谨慎使用，并在后果不会破坏的测试 vault 中使用。

### 示例工作流程

该插件旨在帮助研究中常见的任务。研究人员通常会建立大量的 PDF 和链接存储库，这些存储库不容易通过单个文件夹或标记系统进行组织。

#### 场景 1

一位研究人员在 Obsidian 保险库的各个文件夹中有一系列的 PDF 文件。他们希望将这些 PDF 文件转换为 Markdown 格式，以便更容易进行搜索。

*提取 PDF 内容*命令将在一个指定的文件夹中生成一组 Markdown 文件（默认为 *Generated/* 文件夹）。

情景 2

一位研究人员拥有一个庞大的 Zotero 数据库。他们希望为每个条目生成一系列的笔记，并生成一个可读的参考文献。

*生成参考文献*将生成一组包含元数据和可读的参考文献的笔记，类似于 Zotero 在 MS Word 中生成的内容。

请注意，[BibNotes](https://github.com/stefanopagliari/bibnotes) 提供了一个更加扩展的功能，推荐在需要对笔记输出进行控制的情况下使用。之所以在这里包含这个功能，是为了生成可读的参考文献版本。

#### 场景 3

一位研究人员在他们的保险库中有一些 PDF 文件和网页书签的存档，这些 PDF 文件和链接涵盖了各种主题或话题。研究人员希望发现它们之间的共同主题。这些主题将被存储在一系列的笔记中，并附带指向源文件的链接。

研究人员将他们的 PDF 文件存储在名为“PDFs”的保险库文件夹中，将网页书签存储在名为“Bookmarks”的文件夹中。

1. 运行“提取 PDF 内容”和“提取网页链接”命令，生成一系列 Markdown 文件存储在“Generated/”文件夹中。
2. 生成的文件中有一些文件名中包含“Data”一词，这是一个感兴趣的通用主题。将“主题文件模式”设置字段设置为“Generated/*Data*”（使用*glob*样式模式）。
3. 这些文件中有一些是书籍，包含超过 50,000 个单词。还有大量符合此模式的文件（约 100 个）。将“固定单词数”设置字段设置为 1,000，以确保主题映射和链接在合理的时间内执行。还将“随机化文本”字段设置为 true，以便经常忽略包含版权和目录的前言部分。
4. 然后执行“链接主题”命令，生成 10 个主题文件，将相关关键词和相关文档进行映射。一个“主题索引”文件将所有文件链接在一起，并包含一个方便的检查列表，列出所有符合文件模式的文档，可用于标记已阅读或引用的文档。

他们首先运行：

- “提取 PDF 内容”命令，为他们的 PDF 文件生成 Markdown 文件。
- “提取网页链接 - 生成内容”命令，从书签中引用的网页内容生成 Markdown 文件。

这将在“Generated/”文件夹中生成一系列 Markdown 文件。研究人员注意到一些生成的文件名中包含“Data”一词，并认为这些文件可能包含感兴趣的主题。

他们返回到插件设置中，将“主题文件模式”设置字段设置为“Generated/*Data*”（使用*glob*样式模式）。

然后他们运行：

- “链接主题”命令，生成一组链接的主题笔记。

#### 场景 4

继续上一篇*场景 3*，这位研究人员还想包括元数据、注释和可读的参考文献。他们有一个安装了 Zotfile 和 Better BibTex 插件的 Zotero 数据库。

他们首先使用 "Better Bibtex JSON" 和 "Better CSL JSON" 格式导出他们的数据库。这两种格式都很重要，因为不幸的是它们包含的信息不同。研究人员将两个导出文件都保存在他们的存储库根目录下，并在*Topic Linking*插件设置中指定这两个位置：

  *Better Bibtex 文件*: TopicLinking_bibtex.json

  *Better CSL 文件*: TopicLinking_csl.json

#### 场景 5

与*场景 3*类似，但这次研究人员正在处理一些包含超过 50K 个单词的书籍。还有大量符合此模式的文件（约 100 个）。

在运行*链接主题*命令之前，研究人员设置了以下内容：

  *固定单词数*设置字段为*1,000*，以确保主题映射和链接在合理的时间内执行。

  *随机化文本*字段设置为**true**，以便经常忽略前言（包含版权和目录）。

### 通用设置

每个命令都需要指定输入和输出的文件夹。关键设置及其默认文件夹如下：

  *生成的文件*：*提取 PDF 内容*命令的默认输出文件夹。默认为 'Generated/'。

  *PDF 文件*：PDF 文件的存储库（可以包含嵌套文件夹）。默认为 'PDFs/'。

  *书签文件*：从浏览器导出的书签的存储库。默认为 'Bookmarks/'。

  *主题文件*：*链接主题*命令的默认输出文件夹。默认为 'Topics'。

**注意**：在运行任务之前，应先创建这些文件夹。

### 制作参考文献

待定。

### 提取 PDF 内容

*提取 PDF 内容*命令使用*Obsidian*内置的 PDF 解析器将存储库中的 PDF 文件转换为 Markdown 格式。转换过程非常简化和近似，以产生用于主题链接命令的文本流。但是结果仍然可以被人类阅读。该命令有四个选项：

- *PDF 文件*：指定要处理的 PDF 文件的位置
- *覆盖 PDF 生成的内容*：是否覆盖同名的现有 Markdown 文件
- *限制文件数量*：要处理的文件的最大数量（如果不设置此选项，可能会导致*Obsidian*在处理大型存储库时内存不足）
- *限制文件大小*：要处理的文件的最大大小。' 文件 ' 的含义（PDF 源文件还是生成的 Markdown 文件）取决于是否设置了*如果大小超过限制，则拆分文件*选项。
- *如果大小超过限制，则拆分文件*：如果设置了*限制文件大小*，并且可能会生成大于此大小的 Markdown 文件，则该命令将尝试将生成的文本拆分为多个较小的文件。

#### 实验设置

还有一些额外的“实验”设置可以进行一些自定义：

- *将页面作为标题插入*：将*第 X 页*标题插入生成的 Markdown 中。这对于链接到特定页面非常有用。
- *提取批注*：从 PDF 中提取批注作为高亮显示。
- *将批注与评论一起插入*：将附加到提取的批注的任何评论作为尾注包含在内。
- *更好的 Bibtex 文件*：这是从 [BibNotes](https://github.com/stefanopagliari/bibnotes) 复制的功能。如果在此处指定了有效的 Zotero 导出（以 Better BibTex JSON 格式）文件位置，则在生成的 Markdown 中将包含 Zotero 元数据。
- *更好的 CSL 文件*：这是一个单独的设置，确保可以从各种命令生成可读的参考文献。

### 提取网页链接生成的内容

*提取网页链接生成的内容* 命令会扫描一个文件夹（默认名为 *书签*）中的 Markdown 文件，提取其中以 *http(s)://* 开头的网页链接。它有两个参数：

- *书签文件*：指定包含链接的文件所在位置
- *覆盖网页链接*：是否覆盖同名的已生成 Markdown 文件

### *Link Topics* 命令

*Link Topics* 命令使用 [stdlib](https://github.com/stdlib-js/stdlib) 实现的 [LDA](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)（潜在狄利克雷分配）来扫描 Markdown 文本中的常见主题和关键词。它将生成一个文件夹（默认为 *Topics*），其中包含一个索引和一系列链接到相关主题文档的单独文件。

插件的核心命令是 *Link Topics*。它使用一个模式设置 *Topic File Pattern* 来扫描 Markdown 文件中的主题。还有一些其他设置条件来决定如何扫描这些文件，如何训练 LDA 模型以及如何格式化模型的结果。以下是该命令的一般参数：

- *Number of topics*：生成的主题数量
- *Number of words*：每个主题包含的单词数量
- *Stemming*：是否对扫描到的标记进行词干处理（例如，'capital' 变为 'capit'）
- *Topic threshold*：文档必须具有的与给定主题相关的概率（介于 0 和 1 之间）

有三个参数与包含在主题模型中的 Markdown 文件内容有关：

- *Topic file pattern*：用于定位文件的 *glob* 样式模式
- *Topic search pattern*：一个非空字符串，根据是否包含搜索词来进一步过滤文件
- *Topic tag pattern*：一个非空标签，根据是否包含其中一个以空格分隔的标签（例如，'#fashion'）来进一步过滤文件

其他参数条件决定了如何对 Markdown 文件进行抽样：

- *Fixed number of words*：仅选择每个 Markdown 文件的子集，基于固定数量的单词
- *Percentage of total text*：仅选择每个 Markdown 文件的子集，基于文件文本的百分比（如果 *Fixed Number of Words* 有非零值，则被覆盖）
- *Randomise text*：如果选择了 *Fixed Number of Words* 或 *Percentage of Total Text*，则随机确定这些样本是否随机抽取

*Topic* 文件夹可以包含文件模式和当前时间戳中的一个或两个：

- *Include pattern in topic folder*
- *Include timestamp in topic folder*

最后，LDA 模型的训练参数可以进行调整，如 [stdlib lda 文档](https://www.npmjs.com/package/@stdlib/nlp-lda) 中所述：

- *LDA iterations*：训练迭代次数
- *LDA burn in*：初始丢弃的候选数
- *LDA thin*：每次迭代丢弃的候选数

### 致谢

本代码包含*Citeproc-plus*库的修改版本。

源代码： <https://github.com/fiduswriter/citeproc-plus>

版权： Johannes Wilm

许可证： <https://raw.githubusercontent.com/fiduswriter/citeproc-plus/master/LICENSE>

*Citeproc-plus*又包含*citeproc-js*和 [*Citation Style Langage* CSL](<https://citationstyles.org/>) 项目。

Citeproc-js 许可证： <https://raw.githubusercontent.com/Juris-M/citeproc-js/master/LICENSE>

Citation Style Langage 样式： <https://github.com/citation-style-language/styles>

Citation Style Langage 本地化： <https://github.com/citation-style-language/locales>

额外样式许可证： <https://raw.githubusercontent.com/fiduswriter/citeproc-plus/master/extra_style_licenses.txt>

### Github 链接

请参阅<https://github.com/liammagee/obsidian-topic-linking-plugin>
