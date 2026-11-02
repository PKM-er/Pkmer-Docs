---
uid: 1793625614822000
title: "Obsidian 插件：Link Mindmap"
tags: ["思维导图", "模板与链接处理", "图表与可视化", "移动端优化", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Mindmap

> [!Note] 插件名片
> - 插件名称：Link Mindmap
> - 插件作者：licf
> - 插件说明：
> - 插件分类：['思维导图', '模板与链接处理', '图表与可视化', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/licfcn/link-mindmap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-mindmap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/licfcn/link-mindmap/master/README.md)



## 概述

Link Mindmap 将卢曼卡片盒的层级思想与 Obsidian 双链机制深度融合，核心在于“节点即笔记”。它允许你在画布上通过拖拽直接建立笔记间的父子或关联关系，系统会自动同步更新笔记的 frontmatter 属性。这种设计既保留了 Markdown 文件的独立性，又实现了可视化的结构管理，无需手动维护复杂的元数据。

典型场景包括构建个人知识库或整理项目文档。例如，你可以将一篇核心概念笔记作为根节点，通过拖拽子节点快速拆解出多个子主题，形成清晰的树状结构；或者利用“分支图”模式，将不同时间线或逻辑分支的笔记以泳道形式并列展示，直观呈现知识演进的脉络，适合进行长文写作前的思路梳理。

相比传统思维导图插件，Link Mindmap 的最大特色是彻底去除了数据锁定。所有节点都是真实的 Markdown 文件，支持随时重命名和移动，且提供五种布局模式（含力导向网络图）以适应不同思维习惯。此外，内置的工作台提供统计卡片、热力图及时间线视图，能宏观监控笔记库的健康度与分布，并支持导出为 Canvas 或 Excalidraw 格式，便于进一步编辑。

使用前需注意，该插件依赖 frontmatter 中的 `parent` 和 `children` 字段来维持结构，若手动修改这些字段可能导致视图异常，建议通过插件命令进行规范化整理。它不适合需要频繁处理非笔记类数据（如纯文本片段、图片库）或追求极简、无元数据管理的用户。对于仅使用双链但不关心层级结构的用户，其功能可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


