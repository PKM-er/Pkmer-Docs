---
uid: 1793625613504000
title: "Obsidian 插件：GTD Book Writing"
tags: ["任务管理", "文字处理", "效率工具", "obsidian插件"]
description: "Write books the GTD way: next actions, available-now scenes, stalled detection, and pacing — inside Obsidian. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GTD Book Writing

> [!Note] 插件名片
> - 插件名称：GTD Book Writing
> - 插件作者：MG
> - 插件说明：Write books the GTD way: next actions, available-now scenes, stalled detection, and pacing — inside Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gaedol/gtd-book-writing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gtd-book-writing)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gaedol/gtd-book-writing/master/README.md)



## 概述

GTD Book Writing 将 GTD 方法论引入小说创作，核心在于追踪每个场景的“下一步行动”。它不关注字数统计，而是通过状态、截止日期和依赖关系，筛选出当前真正可写的场景。插件将场景作为最小单元，自动推导默认任务（如“起草此场景”），并允许用户通过显式任务覆盖默认值。若场景既无明确任务又处于停滞状态，插件会将其标记为错误，从而回答“我现在能写什么”这一关键问题。

典型场景包括日常写作和周度回顾。当你打开“Available now”面板时，插件会列出所有未延期、未被前置场景阻塞且非最终状态的章节，并高亮标记紧急项，同时显示距离死线的剩余字数和天数。在每周回顾时，“Review”面板会汇总长期未动的章节、即将到期的场景以及缺乏可用任务的上下文，帮助你快速识别创作瓶颈，确保写作节奏不中断。

与 Scrivener 或 Plottr 等工具不同，该插件刻意排除了人物关系管理、排版格式化和 AI 生成功能，专注于解决“卡文”时的行动指引。其特色在于“场景卡片”交互，允许在笔记顶部直接切换状态、勾选节拍（beats）并查看任务来源。此外，它支持将场景按状态过滤并编译为单一手稿文档，且所有数据基于纯 Markdown 存储，无需复杂配置即可识别书籍结构，保持了极高的灵活性。

使用前需注意，该插件要求书籍文件夹中包含带有 `type: book` 元数据的索引笔记，且仅追踪 `Manuscript/` 目录下的内容。它不适合需要复杂人物图谱管理、专业排版输出或依赖 AI 辅助生成的用户。如果你更倾向于使用 StoryLine 或 Novelcrafter 进行故事圣经管理，或者希望工具自动处理电子书格式，此插件可能无法满足需求。它专为那些希望用 GTD 思维管理写作流程、追求清晰行动路径的作者设计。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


