---
uid: 1791709369707000
title: 'Obsidian 插件：Review Comments AI'
tags: ['自动化与AI', '编辑工具', '文字处理', 'obsidian插件']
description: 'Review comments built to work with your AI coding assistant: threads live in the note as CriticMarkup, so Claude Code or a local agent reads the discussion, edits the text and replies in place. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Review Comments AI

> [!Note] 插件名片
> - 插件名称：Review Comments AI
> - 插件作者：Mike Stephan
> - 插件说明：Review comments built to work with your AI coding assistant: threads live in the note as CriticMarkup, so Claude Code or a local agent reads the discussion, edits the text and replies in place. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mikegafert/obsidian-review-comments-ai)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?review-comments-ai)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mikegafert/obsidian-review-comments-ai/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 笔记中直接添加评论，并与本地 AI 工具（如 Claude Code）协同工作。它利用 CriticMarkup 格式将讨论线程嵌入 Markdown 文件，使 AI 能读取上下文、修改文本并就地回复，无需外部数据库或网络传输。

**2. 适用场景**
适用于需要与 AI 协作进行文本编辑、润色或代码审查的场景。特别适合注重隐私、希望数据完全保留在本地 Vault 中，且已使用本地或离线 AI 助手的用户。

**3. 核心特色**
*   **本地化隐私**：插件本身无网络访问权限，所有数据存储在笔记文件中，确保内容不离开本地。
*   **线程式回复机制**：不同于原版“解决即删除”，此插件采用追加回复模式，保留完整的修改逻辑和历史记录，支持重新打开已解决的线程。
*   **灵活范围与过滤**：支持单笔记、文件夹或全库范围管理，提供多种状态过滤器（如待回复、全部操作）。
*   **建议模式**：支持插入、删除和替换标记，便于 AI 提出具体修改建议供用户接受或拒绝。

**4. 使用建议**
建议搭配本地运行的 AI 编码助手或 LLM 使用。用户可高亮文本并撰写评论，AI 将依据 CriticMarkup 指令进行编辑并回复。注意该插件为独立 Fork，可与原版插件共存，适合需要保留完整修改上下文而非仅关注最终结果的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


