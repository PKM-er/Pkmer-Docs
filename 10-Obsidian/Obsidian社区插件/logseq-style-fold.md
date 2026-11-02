---
uid: 1793625615115001
title: "Obsidian 插件：Logseq Style Fold"
tags: ["编辑工具", "界面优化", "效率工具", "obsidian插件"]
description: "Remember how list items are folded by writing a Logseq-style collapsed:: true line into the note, hidden from view. The marker text is configurable. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Logseq Style Fold

> [!Note] 插件名片
> - 插件名称：Logseq Style Fold
> - 插件作者：马自立
> - 插件说明：Remember how list items are folded by writing a Logseq-style collapsed:: true line into the note, hidden from view. The marker text is configurable. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/logseq-style-fold)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logseq-style-fold)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/logseq-style-fold/master/README.md)



## 概述

Logseq Style Fold 解决了 Obsidian 中列表折叠状态无法持久保存的痛点。它通过模仿 Logseq 的机制，在笔记文件中直接写入特定的标记行来记录折叠状态。这意味着当你关闭笔记或重启软件后，之前折叠的列表项依然保持折叠，无需依赖外部数据库或易失的内存状态，实现了真正的“所见即所得”持久化。

想象一下你正在整理一份复杂的会议记录或项目清单，其中包含多个层级。你可以将已完成的子任务折叠起来，只保留顶层标题以便快速浏览。即使你明天重新打开这个文件，或者通过同步工具在其他设备上查看，这些折叠状态依然完好无损。此外，如果你从 Logseq 迁移笔记，该插件能直接识别原有的折叠标记，确保阅读体验无缝衔接。

与仅依赖 Obsidian 内部状态或 JSON 文件记录行号的同类插件相比，该插件的核心优势在于状态与内容绑定。标记直接写在笔记里，能随 Git 版本控制、云同步或文件导出一起移动，避免了因插入新行导致行号偏移而丢失状态的问题。同时，它提供了多种标记样式，包括默认的 Logseq 格式、HTML 注释和 Obsidian 注释，你可以根据笔记是否对外发布来选择最合适的隐藏方式，确保标记在 GitHub 或静态网站等外部渲染器中不会显示为乱码。

需要注意的是，该插件主要服务于列表项的折叠，代码块和表格内的列表支持有限。如果你的笔记经常涉及大规模重写或完全删除某个列表块，其折叠状态会随之丢失。此外，若你希望笔记在 Obsidian 之外完全不可见任何标记，建议选用 HTML 注释模式，因为默认的 Logseq 格式在其他 Markdown 渲染器中会显示为纯文本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


