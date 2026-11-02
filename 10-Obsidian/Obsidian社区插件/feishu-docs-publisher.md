---
uid: 1793625612816000
title: "Obsidian 插件：Feishu Docs Publisher"
tags: ["第三方工具集成", "发布工具", "文件管理", "效率工具", "obsidian插件"]
description: "Publish Markdown notes, folders, and PDFs to Feishu/Lark Docs and keep them in sync through the local lark-cli. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Feishu Docs Publisher

> [!Note] 插件名片
> - 插件名称：Feishu Docs Publisher
> - 插件作者：poli
> - 插件说明：Publish Markdown notes, folders, and PDFs to Feishu/Lark Docs and keep them in sync through the local lark-cli. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/totok22/feishu-docs-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?feishu-docs-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/totok22/feishu-docs-publisher/master/README.md)



## 概述

Feishu Docs Publisher 旨在解决 Obsidian 笔记与飞书/钉钉文档之间的单向同步问题。它允许你将 Markdown 笔记、文件夹或 PDF 文件直接发布到飞书或 Lark 文档中，并建立本地文件与远程文档的绑定关系。一旦完成首次发布，后续同步会自动更新对应的远程文档，确保 Obsidian 始终作为内容源，而飞书端则作为团队阅读和评论的展示窗口，实现“本地编辑、云端共享”的工作流。

典型使用场景包括个人知识管理或团队协作。例如，你可以将 Obsidian 中整理好的技术文档或项目计划，通过右键菜单一键同步到飞书知识库，团队成员即可在飞书中查看最新内容并留下评论。另一个场景是发布包含本地图片和视频的复杂笔记，插件会自动上传这些媒体文件，确保在飞书端能正常预览，无需手动处理附件。

相比同类插件，该工具的核心特色在于对媒体文件和 Callout 块的原生支持。它不仅能同步文本，还能自动上传 Vault 内的图片、视频，并将 Obsidian 的 Callout 折叠块转换为飞书原生的父子块结构，保持视觉一致性。此外，它提供了“覆盖同步”功能，可清理远程同名重复文档，并支持通过 Frontmatter 记录文档链接，方便追踪发布状态。

使用前需注意，该插件仅支持桌面版 Obsidian，且依赖本地安装的 Node.js 环境及 lark-cli 工具。同步是单向的，飞书端的修改不会回传至 Obsidian。如果你需要双向同步，或者希望将笔记发布到飞书以外的其他平台，此插件可能不适合。此外，开启 Callout 原生转换后，首次同步会重构文档结构，可能导致原有的深度链接失效，建议先合并远程编辑再启用此功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


