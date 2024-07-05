---
uid: 2024070516090902
title: Obsidian 插件：Multiplatform Highlights Importer
tags: ['第三方工具集成', 'obsidian插件']
description: 从不同的阅读来源导入并整合亮点。支持在不同阅读来源之间进行对账。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Multiplatform Highlights Importer

> [!Note] 插件名片
> - 插件名称：Multiplatform Highlights Importer
> - 插件作者：wwwkieran
> - 插件说明：从不同的阅读来源导入并整合亮点。支持在不同阅读来源之间进行对账。
> - 插件分类：['第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wwwkieran/obsidian-multiplatform-highlights-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multiplatform-highlights-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wwwkieran/obsidian-multiplatform-highlights-import/main/README.md)



## 概述

Obsidian多平台书籍高亮导入插件可以从不同的阅读来源导入和整合高亮。它支持根据ISBN或标题对书籍进行对账，因此如果您在不同设备上阅读同一本书，该插件将只创建一个笔记（每本书）并包含所有的高亮。

目前支持的数据来源有：
- Kobo
- Apple Books（iBooks）

使用这个插件的好处是：
1. **不同服务上的同一本书的高亮/批注将被对账并合并到一个笔记中。**
2. **无论阅读平台如何，笔记格式都是标准化的。** 即使您在不同的服务上阅读不同的书籍，该插件仍然可以通过将所有的批注整合到一个标准的笔记格式中来帮助您。

使用方法：
1. 从Obsidian插件库安装插件，或者将该存储库克隆到`/your/vault/.obsidian/plugins/`目录下。
2. 在“Community plugins”页面上启用插件。
3. 在“Multiplatform Highlights Importer”页面上配置插件。在这里，您可以启用您想要提取的阅读服务。请注意，某些提取器需要额外的配置（见下文）。
4. 单击侧边栏中的电子书图标，或使用命令面板中的“Import multiplatform highlights”命令来触发提取。

提取器的特定配置：
#### Kobo
您需要指定到您的`KoboReader.sqlite`数据库的路径。当您将Kobo连接到计算机时，它位于Kobo的`/.kobo`文件夹中。在Mac上，路径为`/Volumes/KOBOeReader/.kobo/KoboReader.sqlite`。

#### Apple Books（仅限macOS）
除了在“Multiplatform Highlights Importer”设置页面上启用提取器外，不需要进行其他配置。请注意，此提取器仅适用于macOS。

如果您想要贡献这个插件，作者将非常感激。您可以开发与新服务的连接，或改进笔记生成过程等等。

该插件的模块化架构是与其他插件不同的地方。高亮提取逻辑包含三个主要元素：提取器、聚合器和提取循环。

提取器是从单个特定服务中提取高亮的模块化组件。它们必须符合`IExtractor`接口，这意味着它们必须实现一个名为`extractHighlights()`的函数，该函数返回一个`IBookWithHighlights`列表。`IBookWithHighlights`是一个简单的数据结构，表示具有书籍元数据和该书籍的高亮列表。

聚合器负责接受`[]IBookWithHighlights`列表，执行对账，并输出Markdown。聚合器实现了一个名为`addBooks()`的函数，该函数接受来自提取器的`[]IBookWithHighlights`并将它们添加到聚合器的内部映射中。该函数还执行对账，以便如果多个提取器提取了相同的书籍，则不会将重复条目添加到映射中。聚合器实现了第二个函数`outputMarkdown()`，该函数为其内部映射中的每本书籍添加Markdown文件。在我们从所有服务中提取完毕后，调用此函数。

提取循环将提取器和聚合器连接在一起，提取高亮并将其传输到Obsidian中。这是当您运行此插件的“Import Book Highlights”命令时的入口点。它非常简单：我们调用每个启用的提取器来生成高亮，并将这些高亮传输到聚合器中。一旦我们对每个提取器都完成了这个操作，我们要求聚合器为所有书籍输出Markdown。伪代码中，主要的提取循环大致如下：
``` 
for (extractor of extractors) {
	booksWithHighlights = extractor.extractHighlights()
	aggregator.addBooks(booksWithHighlights)
}
aggregator.outputMarkdown()
```

如果您想要处理书籍批注/高亮的插件，可能有两个原因：
1）您想要从目前没有插件的服务中导入高亮。
2）您不喜欢现有插件创建的文件，希望以完全不同的方式创建高亮的Markdown文件。

无论是哪种情况，我认为您最好是贡献给这个插件，而不是自己编写一个插件。如果您属于第一种情况，您只需创建一个适用于您的服务的提取器，这将只需要您编写从该服务提取的代码。`IExtractor`接口很简单，只需要您实现一个函数。通过实现提取器，您将免费获得所有其他功能（不同服务之间的对账、Markdown格式和输出）。创建提取器比从头开始实现一个完整的插件要少工作。

如果您属于第二种情况，我会反过来提出同样的论点。如果您想以特定方式输出Markdown，请将其作为聚合器上的可选功能构建进去。通过扩展聚合器，它已经维护了一张书籍和高亮的映射表，您无需担心数据的来源。这意味着您的工作量更小，您可以将精力完全集中在编写代码以按照您想要的方式输出文件上。

未来的工作：
- 使提取器设置模块化
- 支持文章服务（Pocket、Zotero）
- 根据不同服务指定不同的目标文件夹（在文件夹级别进行对账，即Kobo和Apple Books应该输出到“Books”文件夹，而Pocket和Zotero应该输出到“Articles”文件夹）
- 基于标签指定目标文件夹
- 更多自定义的笔记格式

致谢：
我通过fork [obsidian-kobo-highlights-import](https://github.com/OGKevin/obsidian-kobo-highlights-import) 来构建这个插件，因为我想要Kobo支持，并且我喜欢他们的输出笔记按章节分组的方式。我还查看了[obsidian-apple-books-highlight-plugin](https://github.com/bandantonio/obsidian-apple-books-highlights-plugin)的代码来构建Apple Books插件。感谢这些插件的创建者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



