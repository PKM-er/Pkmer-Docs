---
uid: 1793625614226000
title: "Obsidian 插件：Inkling Markup"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Suggest edits, add comments, and annotate your notes using CriticMarkup syntax. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inkling Markup

> [!Note] 插件名片
> - 插件名称：Inkling Markup
> - 插件作者：Andrew Brož
> - 插件说明：Suggest edits, add comments, and annotate your notes using CriticMarkup syntax. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/andrewbroz/obsidian-inkling)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inkling-markup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewbroz/obsidian-inkling/master/README.md)



## 概述

Inkling Markup 是一款基于 CriticMarkup 语法的协作编辑插件，旨在解决 Obsidian 笔记在多人协作或自我审阅时缺乏结构化修改追踪的问题。它允许用户以“建议”模式记录文本变更，而非直接覆盖原文，同时支持在选中文本上添加锚定评论。这种机制让修改过程透明可追溯，用户可以在接受或拒绝建议前充分评估变更内容，从而在保持笔记整洁的同时保留完整的编辑历史与讨论上下文。

典型场景包括团队共同撰写文档或导师审阅学生作业。例如，在协作撰写项目报告时，成员 A 可以高亮某段文字并添加评论指出逻辑漏洞，成员 B 看到后直接修改并标记为已解决，全程无需切换聊天工具。另一个场景是个人知识管理，你可以先以建议模式重构笔记结构，待确认无误后再批量接受，避免误操作导致内容丢失，实现安全的迭代式写作。

相比同类插件，Inkling Markup 强化了数据安全性与协作规范。它修复了旧版本中拒绝建议导致文本复活、自动纠错破坏标记等严重 Bug，确保所有编辑模式均受语法保护，防止意外破坏笔记结构。此外，它支持通过 Frontmatter 强制指定编辑模式（如仅允许评论），并默认记录作者与时间戳，便于在建议视图中按作者或时间筛选，提升了多人协作时的责任归属清晰度。

使用前需注意，该插件目前处于 Beta 阶段，虽拥有大量自动化测试，但尚未完成所有真实库环境的验证，建议先在测试库或已备份的库中试用。它不适合低信任度环境，因为 Frontmatter 的模式限制并非硬性技术封锁，仅适用于高信任团队。若你只需要简单的批注功能，或希望完全禁止他人编辑权限，此插件可能过于复杂或保护力度不足。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


