---
uid: 1793625623088000
title: "Obsidian 插件：Threadglyph"
tags: ["编辑工具", "自动化与AI", "效率工具", "图片与PDF", "obsidian插件"]
description: "Add editable comment threads to text and images in your notes, with optional AI replies. Comments live beside your notes, never inside them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Threadglyph

> [!Note] 插件名片
> - 插件名称：Threadglyph
> - 插件作者：Jonah
> - 插件说明：Add editable comment threads to text and images in your notes, with optional AI replies. Comments live beside your notes, never inside them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '自动化与AI', '效率工具', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jmbost20/threadglyph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?threadglyph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmbost20/threadglyph/master/README.md)



## 概述

Threadglyph 为 Obsidian 笔记提供独立的评论线程功能，允许用户在文本段落或嵌入的图片旁添加批注。其核心机制是将评论数据存储在笔记文件之外的独立 JSON 文件中，确保原始笔记内容绝不被修改。这种设计使得批注如同悬浮在内容旁的侧边栏，既保留了笔记的纯净性，又实现了针对特定内容的精准反馈与讨论。

典型场景包括个人知识管理中的深度阅读与协作。例如，在阅读长文时，你可以选中某段晦涩的理论，通过右键菜单快速添加疑问或心得，这些评论会高亮显示在原文旁并带有编号。若笔记中插入了图表，你可以点击图片上的评论按钮，针对视觉内容留下具体意见。此外，插件支持导入行内注释，能将旧笔记中 `{==…==}{>>…<<}` 格式的标记自动转换为侧边栏线程，方便迁移历史数据。

相比其他批注插件，Threadglyph 的最大特色是锚点的鲁棒性与隐私控制。即使笔记内容发生编辑，只要原文段落未被删除或变得无法区分，评论线程依然能准确附着在原处；若原文被删，插件会提示而非错误猜测。在 AI 辅助方面，它支持调用本地 Ollama 或云端模型，但在发送任何请求前，都会明确预览数据去向（如“留在本机”或“发送至 Google”），且 AI 回复始终标记为可编辑状态，确保用户对数据流向拥有完全知情权。

需要注意的是，该插件目前处于 Alpha 阶段（0.3.1），仅支持桌面端，且 Windows 和 Linux 用户在使用 Gemini 或 Claude 助手时可能遇到兼容性问题。它不适合需要直接在笔记正文中嵌入评论、或希望评论随笔记文件一起同步到云端服务的用户。如果你追求笔记文件的绝对不可变性，并愿意接受早期软件可能存在的粗糙边缘，Threadglyph 是一个值得尝试的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


