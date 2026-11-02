---
uid: 1793625609664000
title: "Obsidian 插件：Claude Code Connector"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Share the note you are reading, the section you are in and the text you select with Claude Code. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claude Code Connector

> [!Note] 插件名片
> - 插件名称：Claude Code Connector
> - 插件作者：Atif Ahmed
> - 插件说明：Share the note you are reading, the section you are in and the text you select with Claude Code. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/signioratif/Obsidian-CC-connector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claude-code-connector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/signioratif/Obsidian-CC-connector/master/README.md)



## 概述

Claude Code Connector 解决了在 Obsidian 中阅读笔记时，需要手动复制粘贴内容给 Claude Code 才能提问的繁琐问题。它通过自动同步你当前打开的笔记、所在章节以及选中的文本，让 AI 助手无需额外指令即可理解上下文。你只需在终端中直接询问“这段是什么意思”，Claude 就能准确识别你指的是哪篇笔记的哪一部分，实现了从阅读到提问的无缝衔接。

典型场景包括查阅技术文档或学习材料时，选中一段晦涩的代码或概念，直接询问其含义或背景，无需切换窗口复制粘贴。另一个场景是整理长文笔记时，选中特定段落让 AI 总结或改写，插件会自动附带该段落在文档中的位置信息，帮助 AI 更精准地把握语境，避免答非所问。

相比其他类似插件，其特色在于上下文感知的精准度与效率。它仅在内容发生变化时更新状态，避免重复发送相同信息，节省 Token 消耗。此外，它明确区分了“阅读视图”和“编辑视图”的行号支持，并在隐私设计上做到本地无网络请求，状态文件在暂停或关闭时自动删除，确保数据安全。

使用前需注意，该插件仅支持桌面版 Obsidian，且需要同时安装 Obsidian 插件和 Claude Code 端的配套插件才能生效。它不适合移动端用户，也不适合需要同时管理多个 Vault 的场景，因为同一时间仅支持一个 Vault 的上下文共享。若你的工作流不涉及 Claude Code，或主要使用移动端阅读，则无需安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


