---
uid: 20240312193744
title: Obsidian 插件：【Readme】Graph Link Types
tags: ['obsidian插件', 'readme']
description: Link types for graph view.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Graph Link Types

> [!Note] 插件名片
> - 插件名称：Graph Link Types
> - 插件作者：natefrisch01
> - 插件说明：Link types for graph view.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/natefrisch01/Graph-Link-Types)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-link-types)

## 概述

Link types for graph view.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/natefrisch01/Graph-Link-Types/master/README.md)

---

## Readme(翻译）

下面是 [[graph-link-types]] 插件的自述翻译

【机翻】

# Obsidian 的图链接类型

## 摘要

Graph Link Types 是 Obsidian.md 的一个插件，通过动态呈现链接类型来增强图形视图。该插件利用 Dataview API 和 PIXI.js 创建了更具信息性和交互性的图形体验。通过显示笔记之间的链接类型，它提供了对 Obsidian 保险库内关系的更清晰理解。

如果您喜欢使用 GraphLinkTypes 并希望支持其开发，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/natefrisch)！您的支持有助于维护项目并探索社区驱动编码中的新想法。

<img src="https://github.com/natefrisch01/Graph-Link-Types/assets/44580969/b0b78ff4-c3a6-4614-8a35-efc3d475d8bf" alt="drawing" width="100"/>

## 示例保险库显示

![GraphLinkTypeDemo](https://cdn.pkmer.cn/covers/graph-link-types_1_0.gif!pkmer)

## 用法

要使用 Graph Link Types 插件，请确保在 Obsidian 中安装了 [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) 插件。然后，只需使用 Dataview 的语法向您的笔记添加带有内部链接的元数据。Graph Link Types 将在图形视图中将这些链接呈现为文本。

在您的笔记中，添加类似于以下的元数据：

```markdown
---
related: [[Research Document]]
---
```

或者内联：

```markdown
related:: [[Research Document]]
```

GraphLinkTypes 将在图形视图中的链接上显示“related”。

## 特点

- 在 Obsidian 的图形视图中动态呈现链接类型。
- 基于元数据为每个链接自定义文本显示。
- 使用 PIXI.js 进行高效更新和渲染。

## 开发和贡献

有兴趣为 Graph Link Types 的开发做出贡献吗？查看 [Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin) 了解如何为 Obsidian 开发自定义插件的指南。

## 里程碑目标

通过查看我们的 [里程碑目标](https://github.com/natefrisch01/Graph-Link-Types/milestones) 来了解我们的进展和未来计划。
