---
uid: 1793625624607000
title: "Obsidian 插件：Word Comment Export"
tags: ["文字处理", "文件管理", "效率工具", "obsidian插件"]
description: "Export inline note comments as native Word comments in a new DOCX file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Word Comment Export

> [!Note] 插件名片
> - 插件名称：Word Comment Export
> - 插件作者：theluckystrike
> - 插件说明：Export inline note comments as native Word comments in a new DOCX file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/note-word-comments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-word-comments)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/note-word-comments/master/README.md)



## 概述

Word Comment Export 解决了 Obsidian 笔记导出 Word 时，行内批注无法保留的问题。它专门处理 `%% 批注 %%` 格式，将其转换为 DOCX 文件中原生的 Word 批注，并自动锚定在批注前的单词上。相比 Pandoc 等工具将批注作为普通文本混入正文，该插件能确保审阅者看到独立的批注气泡，且正文保持整洁，仅保留核心内容。

典型场景适用于需要向他人发送文档进行审阅的情况。例如，撰写基金申请或项目提案时，你可以在关键数据旁添加 `%% 需补充来源 %%`，导出后对方在 Word 中即可看到针对“数据”一词的具体修改建议。另一个场景是多人协作，通过 Pro 版的标签功能，你可以写入 `%% Lee: 检查语气 %%`，导出后 Word 会显示 Lee 为作者，便于区分不同审阅者的意见。

该插件的核心特色在于其严谨的“失败即停”机制。它不会像其他工具那样静默忽略或错误转换不支持的 Markdown 元素（如列表、代码块、链接等），而是在预览界面明确列出问题行号，禁止导出，从而避免生成内容错乱的文档。此外，它支持每次导出生成新文件（如 `Draft (2).docx`），绝不覆盖原文件或修改笔记本身，保证了源数据的安全性。

使用前需注意，该插件仅支持纯段落和标题，若笔记包含复杂排版或 HTML 注释，导出会中断。它不支持 SideNote 插件的批注，也不处理网络图片。因此，它不适合需要保留复杂表格、数学公式或大量嵌入内容的笔记导出需求，仅适用于以文字为主、结构简单的审阅型文档。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


