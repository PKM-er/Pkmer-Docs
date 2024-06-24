---
uid: 2024052908345767
title: Obsidian 插件：ExcaliBrain
tags: ['思维导图', '数据处理', 'obsidian插件']
description: ExcaliBrain 的灵感来自 TheBrain 和 Breadcrumbs。让 Obsidian 具有交互式结构化思维导图，通过解释您的 Markdown 文件中的链接、数据视图字段、标签和 YAML 前端内容而生成。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ExcaliBrain

> [!Note] 插件名片
> - 插件名称：ExcaliBrain
> - 插件作者：Zsolt Viczian
> - 插件说明：ExcaliBrain 的灵感来自 TheBrain 和 Breadcrumbs。让 Obsidian 具有交互式结构化思维导图，通过解释您的 Markdown 文件中的链接、数据视图字段、标签和 YAML 前端内容而生成。
> - 插件分类：[' 思维导图 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/zsviczian/excalibrain)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?excalibrain)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zsviczian/excalibrain/master/README.md)

![ExcaliBrain](https://cdn.pkmer.cn/covers/excalibrain.PNG!pkmer)

## 概述

ExcaliBrain 是受 TheBrain 和 Breadcrumbs 启发而开发的插件。它是一个交互式的、结构化的思维导图，根据你的 Obsidian Vault 中的文件夹和文件生成，通过解释 Markdown 文件中的链接、Dataview 字段、标签和 YAML front matter 来实现。

ExcaliBrain 区分了笔记之间的 5 种关系：

- 子笔记
- 父笔记
- 朋友笔记
- 其他朋友笔记（右侧的横向关系）
- 兄弟笔记

关系的推导基于以下逻辑：

- 通过使用 dataview 字段明确定义的关系（例如 `Author:: [[Isaac Asimov]]`）
- 推断出的关系（不使用 dataview 字段）
  - 前向链接被推断为子笔记
  - 反向链接被推断为父笔记
  - 如果文件相互链接，则它们是朋友笔记
  - 父笔记的子笔记是兄弟笔记

ExcaliBrain 建立在 Dataview 和 Excalidraw 插件之上，需要安装并启用这两个插件才能正常工作。它还可以与 Hover Editor 很好地配合使用。如果用户有反馈、问题或想法，可以在 GitHub 上报告 bug 或请求增强功能。如果用户喜欢 ExcaliBrain 插件，可以通过购买一杯咖啡来支持作者，并通过社交媒体分享插件。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



