---
uid: 1791709369657000
title: 'Obsidian 插件：Remember'
tags: ['学习与教育', 'ANKI', '效率工具', 'obsidian插件']
description: 'Create and review flashcards with spaced repetition, FSRS scheduling, Q&A, reversible and cloze cards, decks, multi-device sync, and an Anki-style study workflow for learning and long-term memory. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Remember

> [!Note] 插件名片
> - 插件名称：Remember
> - 插件作者：Petr Volf
> - 插件说明：Create and review flashcards with spaced repetition, FSRS scheduling, Q&A, reversible and cloze cards, decks, multi-device sync, and an Anki-style study workflow for learning and long-term memory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', 'ANKI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/volfpe/obsidian-remember)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remember)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/volfpe/obsidian-remember/master/README.md)



## 概述

**主要功能**
Remember 是一款基于 Markdown 原生格式的间隔重复（SRS）记忆插件。它支持基础卡片、双向卡片及填空（Cloze）卡片，采用先进的 FSRS 算法进行科学调度。用户可通过子文件夹管理卡组，并利用 frontmatter 属性灵活控制卡片状态（如暂停复习）。

**适用场景**
适用于需要长期记忆的知识领域，如语言词汇、专业术语、历史事实或编程概念。特别适合希望将记忆卡片融入现有笔记工作流，而非依赖独立外部软件的用户。

**核心特色**
1. **Markdown 原生**：卡片即笔记，无需格式转换，完全兼容 Obsidian 的文件夹结构与同步机制。
2. **FSRS 调度**：比传统 SM-2 算法更精准地预测记忆曲线，优化复习效率。
3. **灵活卡片类型**：支持双向生成及多填空合并（相同编号的填空视为同一卡片），满足多样化记忆需求。
4. **多设备同步**：依托 Obsidian 同步服务，确保跨设备复习进度一致。

**使用建议**
建议将卡片统一存放于 `Remember/` 文件夹，利用子文件夹构建层级化卡组。创建卡片时，基础题可使用 `# Front`/`# Back` 结构，填空题需使用 `==cN:内容==` 标记并指定唯一编号。若需暂停某张卡片，可在 frontmatter 中设置 `remember-suspend: true`，保留历史数据的同时排除出复习队列。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


