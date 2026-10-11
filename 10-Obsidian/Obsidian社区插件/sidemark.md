---
uid: 1791709369950000
title: 'Obsidian 插件：Sidemark'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Google Docs-style comments and suggested edits, kept in Sidemark (MRSF) .review.yaml sidecars so your Markdown stays clean. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sidemark

> [!Note] 插件名片
> - 插件名称：Sidemark
> - 插件作者：Adam Coddington
> - 插件说明：Google Docs-style comments and suggested edits, kept in Sidemark (MRSF) .review.yaml sidecars so your Markdown stays clean. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/coddingtonbear/obsidian-sidemark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sidemark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/coddingtonbear/obsidian-sidemark/master/README.md)



## 概述

**1. 主要功能**
Sidemark 为 Obsidian 笔记提供类似 Google Docs 的评论与编辑建议功能。用户选中文字即可添加评论或修改建议，内容以高亮形式显示在编辑器中，讨论细节则展示在侧边栏。所有数据均独立存储于笔记同目录下的 `.review.yaml` 伴随文件中，确保 Markdown 源文件保持纯净。

**2. 适用场景**
适用于需要协作审阅、内容校对或多人共同编辑笔记的场景。特别适合希望在不破坏笔记结构的前提下进行反馈，且需与其他工具（如 VS Code、CLI 或 AI 助手）共享评论数据的用户。

**3. 核心特色**
*   **零侵入存储**：评论数据完全独立于笔记正文，避免使用 HTML 隐藏标签或 CriticMarkup 等污染文件的方式。
*   **开放标准**：基于 MRSF/Sidemark 开放规范，兼容 VS Code 扩展、命令行工具及 MCP 服务器，实现跨平台互通。
*   **界面直观**：编辑器内高亮标记与侧边栏讨论区联动，操作体验流畅。

**4. 使用建议**
安装后，直接选中笔记文本即可添加评论。注意检查笔记目录下是否生成了对应的 `.review.yaml` 文件，以便同步或备份评论数据。若需跨工具协作，建议配合 MRSF 生态的其他工具使用，以充分发挥其开放标准优势。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


