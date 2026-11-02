---
uid: 1793625606711001
title: "Obsidian 插件：Backleaf"
tags: ["图片与PDF", "自动化与AI", "学习与教育", "效率工具", "obsidian插件"]
description: "Discuss PDF selections with AI and save structured reading notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Backleaf

> [!Note] 插件名片
> - 插件名称：Backleaf
> - 插件作者：zefei124
> - 插件说明：Discuss PDF selections with AI and save structured reading notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '自动化与AI', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zefei124/backleaf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?backleaf)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zefei124/backleaf/master/README.md)



## 概述

Backleaf 旨在解决 PDF 高亮后容易遗忘且缺乏深度思考的问题。它允许你在 Obsidian 中选中 PDF 文本，直接调用 AI 进行提问和讨论，并将最终形成的理解保存为结构化的 Markdown 阅读笔记。核心功能在于将原文片段、产生的疑问、AI 对话过程以及你个人的最终结论整合在一起，确保阅读时的关键思考不会止步于高亮标记，而是转化为可长期保存的知识资产。

典型场景包括阅读学术文献或专业书籍时，对某段晦涩理论产生疑惑。你可以选中该段落，让 AI 结合上下文进行解释，通过多轮对话厘清概念，最后将这段“从困惑到理解”的过程保存为笔记。另一个场景是回顾旧书，通过插件提供的 Thought Tree 功能，你可以可视化地看到从书籍章节到具体引文、再到问题与答案的思维路径，快速重建当时的阅读逻辑。

相比普通的 AI 聊天插件，Backleaf 的特色在于上下文绑定与笔记持久化。每次讨论都自动关联原文、页码、章节及来源链接，确保信息可追溯。更重要的是，它生成的对话记录是标准的 Markdown 文件，完全融入你的 Vault，你可以随时手动编辑或重写结论，保持作者身份。此外，插件具备防覆盖机制，尊重你在插件外对笔记的修改，避免静默覆盖导致的数据丢失。

使用前需注意，Backleaf 需要配置 DeepSeek API Key，且仅在你发送消息时才会发起网络请求，发送内容包括选中段落、书名及当前对话，但不包含整个 PDF 或其他无关笔记。它不适合那些希望完全离线运行、或不需要将 AI 对话转化为结构化笔记的用户。如果你只是想要一个简单的 PDF 翻译工具，或者不希望笔记以 Markdown 形式存储，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


