---
uid: 1791709370211000
title: 'Obsidian 插件：Synki'
tags: ['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
description: 'Sync embedded Synki blocks from Obsidian notes to Anki. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Synki

> [!Note] 插件名片
> - 插件名称：Synki
> - 插件作者：gengsta1
> - 插件说明：Sync embedded Synki blocks from Obsidian notes to Anki. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gengsta1/synki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?synki)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gengsta1/synki/master/README.md)



## 概述

**1. 主要功能**
Synki 是一款基于 Yanki 的 Obsidian 插件，用于将笔记中嵌入的 Anki 卡片块同步至 Anki。它支持在单个长笔记内包含多张独立卡片，并自动处理同步逻辑。

**2. 适用场景**
适合需要在长篇学习笔记中直接嵌入记忆卡片，且希望保持“一文件多卡”结构的用户。特别适用于不想为每张卡片单独创建文件，而是希望将复习内容与学习上下文集中管理的场景。

**3. 核心特色**
*   **嵌入式卡片**：在笔记的 `## Anki` 部分通过 `START`/`END` 标记定义独立卡片，而非整篇笔记或文件夹同步。
*   **灵活配置**：卡组由 `TARGET DECK` 指定，标签支持文件级与卡片级合并。
*   **稳定更新**：同步后写入 `ANKI-NOTE-ID` 注释，确保后续同步为更新而非重复创建。
*   **高度可定制**：支持自定义笔记类型、字段映射及 Markdown 格式（如加粗），并提供单篇或批量同步命令。

**4. 使用建议**
建议在笔记中规范使用 `## Anki` 标题及 `START`/`END` 块结构。首次使用前，请在插件设置中确认 Anki 笔记类型及字段映射是否正确。利用 `FILE TAGS` 管理通用标签，利用卡片内 `Tags` 管理特定标签，以实现高效的知识管理与复习同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


