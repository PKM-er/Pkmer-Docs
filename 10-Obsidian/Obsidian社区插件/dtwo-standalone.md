---
uid: 1793625611543000
title: "Obsidian 插件：D2 Standalone"
tags: ["图表与可视化", "第三方工具集成", "obsidian插件"]
description: "Render D2 diagrams without installing D2 — fully standalone and cross-platform. Unofficial, not affiliated with Terrastruct. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：D2 Standalone

> [!Note] 插件名片
> - 插件名称：D2 Standalone
> - 插件作者：m-haruki
> - 插件说明：Render D2 diagrams without installing D2 — fully standalone and cross-platform. Unofficial, not affiliated with Terrastruct. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/m-haruki/obsidian-d2-standalone)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dtwo-standalone)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/m-haruki/obsidian-d2-standalone/master/README.md)



## 概述

D2 Standalone 允许用户在 Obsidian 中直接渲染 D2 图表，无需在本地安装 D2 软件。该插件利用官方 D2 JavaScript 库在进程内完成渲染，实现了完全独立且跨平台的支持。这意味着用户只需在 Markdown 代码块中使用 `d2` 语言标识符，即可将文本描述转化为可视化图形，省去了传统方式中配置环境变量或安装依赖的繁琐步骤，让图表创作变得即写即见。

典型的使用场景包括绘制系统架构图或流程图。例如，当需要快速梳理微服务之间的调用关系时，用户可以直接在笔记中编写 D2 代码，插件会即时生成清晰的节点与连线。另一个例子是制作简单的状态机或数据流向图，通过调整代码中的节点定义，即可实时预览布局变化，无需切换外部工具，极大地提升了文档编写的流畅度。

相比官方 D2 插件，D2 Standalone 的核心优势在于其“开箱即用”的特性。官方插件通常依赖外部 D2 可执行文件，而本插件通过内嵌 JS 库消除了这一依赖，确保在任何操作系统上都能稳定运行，无需额外设置。此外，插件支持在代码块内通过 `d2-config` 变量灵活配置布局引擎（如 dagre 或 elk）、主题 ID 及颜色覆盖，提供了较高的自定义自由度，同时保持了配置的本地化与便捷性。

需要注意的是，该插件不支持 TALA 布局引擎，且草图（Sketch）选项仅能在插件设置中全局配置，无法在单个代码块内单独指定。此外，这是一个由社区独立开发的非官方插件，与 D2 的创造者 Terrastruct 无隶属关系。如果你依赖 TALA 引擎进行复杂布局，或者需要官方提供的特定高级功能，此插件可能无法满足需求。对于追求零配置、跨平台兼容且仅需标准 D2 渲染能力的用户而言，它是一个高效的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


