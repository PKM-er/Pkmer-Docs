---
uid: 1791709370285000
title: 'Obsidian 插件：Tag to Readwise'
tags: ['第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
description: 'Uploads tagged blocks to your Readwise account so you can review them using spaced repetition. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tag to Readwise

> [!Note] 插件名片
> - 插件名称：Tag to Readwise
> - 插件作者：Dan Mercer
> - 插件说明：Uploads tagged blocks to your Readwise account so you can review them using spaced repetition. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/drmercer/obsidian-tag-to-readwise)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-to-readwise)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/drmercer/obsidian-tag-to-readwise/master/README.md)



## 概述

**1. 主要功能**
该插件将 Obsidian 笔记中标记了特定标签（默认为 `#review`）的文本块，同步上传至 Readwise 账户，将其转化为“高亮”内容，以便利用 Readwise 的间隔重复系统进行复习。

**2. 适用场景**
适用于希望将个人笔记、学习笔记或重点摘录纳入 Readwise 复习流程的用户。特别适合需要定期回顾技术文章、书籍摘要或重要观点，且希望保持笔记在 Obsidian 中管理、复习在 Readwise 中进行的场景。

**3. 核心特色**
*   **双向链接**：在 Readwise 中点击“查看原文”可直接通过 `obsidian://` 链接跳转回 Obsidian 中的具体笔记块。
*   **增量同步**：默认仅同步自上次同步以来发生变化的笔记，提高效率。
*   **灵活配置**：支持自定义同步标签、书籍标题、作者及分类，并支持全量重新同步。

**4. 使用建议**
*   需先在 Readwise 获取 API Token 并在插件设置中验证。
*   注意区分方向：此插件是“Obsidian → Readwise”，若需反向同步请使用官方 Readwise 插件。
*   建议在笔记中统一使用特定标签（如 `#review`）标记需复习的内容，并利用命令面板手动触发同步或启用加载时自动同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


