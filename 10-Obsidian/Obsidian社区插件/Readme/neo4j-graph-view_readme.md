---
uid: 2023080322225020
title: Obsidian 插件：【Readme】Neo4j Graph View
tags: ['界面相关', '搜索/排序', 'obsidian插件', 'readme']
description: Neo4j的高级图形可视化和查询插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Neo4j Graph View

> [!Note] 插件名片
> - 插件名称：Neo4j Graph View
> - 插件作者：Emile van Krieken
> - 插件说明：Neo4j 的高级图形可视化和查询插件。
> - 插件分类：[' 界面相关 ', ' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HEmile/obsidian-neo4j-graph-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?neo4j-graph-view)

## 概述

Neo4j 的高级图形可视化和查询插件。

![Neo4j Graph View](https://cdn.pkmer.cn/covers/neo4j-graph-view.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/README.md)
>

---

## Readme(翻译）

下面是 [[neo4j-graph-view]] 插件的自述翻译

<p align="left">

    <a href="https://github.com/HEmile/obsidian-neo4j-graph-view/releases">
        <img src="https://img.shields.io/github/downloads/HEmile/obsidian-neo4j-graph-view/total.svg"
            alt="下载次数" width="110"></a> 
    <a href="https://github.com/HEmile/obsidian-neo4j-graph-view/releases">
        <img src="https://img.shields.io/github/v/release/HEmile/obsidian-neo4j-graph-view"
            alt="Github最新版本" width="100"></a>
   <a href="https://juggl.io/Neo4j+Graph+View/Neo4j+Graph+View+Plugin">
        <img src="https://img.shields.io/badge/docs-Obsidian-blue"
            alt="文档" width="100"></a>
    <a href="https://discord.gg/sAmSGpaPgM">
        <img src="https://img.shields.io/discord/794500624163143720?logo=discord"
            alt="在Discord上聊天" width="120"></a>
</p>

公告：该插件已经重写，并更名为 Juggl。它不再需要 Neo4j 和 Python，并且比 Neo4j 图形视图具有更多功能。

您可以从 Obsidian 社区插件设置中安装这个新插件！

请注意，Neo4j Graph View 插件将很快从社区插件中移除。

## Neo4j 图形视图

![](https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/neo4j-graph-view/resources/styled_screenshot.png)

文档位于<https://juggl.io/Neo4j+Graph+View/Neo4j+Graph+View+Plugin。>

加入新的 Discord 服务器以讨论插件：<https://discord.gg/sAmSGpaPgM>

为 Obsidian 添加了一个新的、更加功能强大的图形视图。它通过连接到 [Neo4j](https://neo4j.com/) 数据库来实现。功能包括：

- 通过标签、文件夹和链接类型选择性地设置节点和边的样式
- 选择性展开和隐藏节点
- 在图形中查看图像
- [Cypher](https://neo4j.com/developer/cypher/) 查询
- 使用 `- linkType [[note 1]], [[note 2|alias]]` 进行类型化链接
- 分层布局

接下来的计划：

- [x] 消除安装 Neo4j 和 Python 的需求
- [ ] 不同且更稳定的前端
- [x] 使用 CSS 而不是 JSON 来标准化样式表

还提供了一个包含计划功能的 [路线图](https://juggl.io/Roadmap)。

![](https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/neo4j-graph-view/resources/obsidian%20neo4j%20plugin.gif)

### 安装

详细的安装说明请参考<https://juggl.io/Neo4j+Graph+View/Installation+of+Neo4j+Graph+View+Plugin>

1. 确保已安装 [Python 3.6+](https://www.python.org/downloads/)。它需要系统安装的 Python。确保将 Python 添加到 PATH！
2. 确保已安装 [Neo4j桌面版](https://neo4j.com/download/)
3. 在 Neo4j 桌面版中创建一个新的数据库并启动它。记录使用的密码！
4. 在插件的设置中输入密码。然后运行重启命令。

如果安装 Python 似乎令人生畏，您可以等待几周。目标是将该代码移植到 Javascript。

使用

详细的入门指南请参考<https://juggl.io/Neo4j+Graph+View/Using+the+Neo4j+Graph+View>

在一个打开的笔记上，使用命令 "Neo4j Graph View: Open local graph of note"。您可以使用 ctrl/cmd+p 运行命令。或者，您可以在设置中将此命令绑定到热键上。

设置包含多个选项，例如基于文件夹的着色和分层布局。

#### Cypher 查询

使用语言 `cypher` 创建代码块。在这个代码块中，编写你的 Cypher 查询。然后，当光标位于这个代码块上时，使用 Obsidian 命令“Neo4j Graph View: Execute Cypher query”执行查询。示例：

![](https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/neo4j-graph-view/resources/cypher_querying.png)

### 可能的问题

在 Obsidian 中进行的所有更改应该自动反映在 Neo4j 中，但这仍然存在很多错误。

如果您遇到问题，请参阅 <https://juggl.io/Neo4j+Graph+View/Installation+of+Neo4j+Graph+View+Plugin#troubleshooting>

### 语义

该插件在输入目录（默认为 `markdown/`）中收集所有扩展名为.md 的笔记。每个笔记的解释如下：

- 将标签解释为实体类型
- 将 YAML frontmatter 解释为实体属性
- 将 wikilinks 解释为类型为 `inline` 的链接，并添加内容
- 格式为 `"- linkType [[note 1]], [[note 2|alias]]"` 的行会创建从当前笔记到 `note 1` 和 `note 2` 的类型为 `linkType` 的链接。
- 笔记的名称存储在属性 `name` 中
- 笔记的内容（除了 YAML frontmatter 和类型化链接之外的所有内容）存储在属性 `content` 中
- 对尚不存在的笔记的链接将被创建，没有任何类型。

## 其他可视化和查询选项

该插件的另一个用途是在 Neo4j 桌面 Graph Apps Store 中的许多应用程序中使用您的 Obsidian vault。在使用此插件时，它将自动连接到您的 vault。以下是一些建议：

### Neo4j Bloom

[Neo4j Bloom](https://neo4j.com/product/bloom/) 是一款非常强大的图形可视化软件。与 Obsidian 中的嵌入式图形视图相比，它在自定义方面提供了更多的自由。

![](https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/neo4j-graph-view/resources/bloom_screenshot.jpg)

### GraphXR

[GraphXR](https://www.kineviz.com/) 是一个 3D 图形视图，看起来非常华丽！

![](https://raw.githubusercontent.com/HEmile/obsidian-neo4j-graph-view/main/neo4j-graph-view/resources/graphxr.gif)

### Neo4j 浏览器

一个使用 Cypher 语言查询您的存储库的查询浏览器。可用于高级查询或数据分析您的存储库。

## Python 代码：将语义 Markdown 转换为 Neo4j

这个 Obsidian 插件使用了 Python 包 `semantic-markdown-converter`，该包也在这个仓库中。

它将一个 Markdown 笔记文件夹创建为一个活动数据流，存储到 Neo4j 数据库中。

有关文档，请参见<https://juggl.io/Neo4j+Graph+View/Semantic+Markdown+Converter>
