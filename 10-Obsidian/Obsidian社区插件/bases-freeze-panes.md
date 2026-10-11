---
uid: 1791709365547000
title: 'Obsidian 插件：Bases Freeze Panes'
tags: ['表格', '界面优化', '效率工具', 'obsidian插件']
description: 'Keeps the header row and the first columns of a Bases table in view while you scroll, in base files and in bases embedded in notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Freeze Panes

> [!Note] 插件名片
> - 插件名称：Bases Freeze Panes
> - 插件作者：theluckystrike
> - 插件说明：Keeps the header row and the first columns of a Bases table in view while you scroll, in base files and in bases embedded in notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-freeze-panes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-freeze-panes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-freeze-panes/master/README.md)



## 概述

**1. 主要功能**
该插件为 Obsidian 的 Bases 表格提供“冻结窗格”功能。在滚动时，自动锁定表头行和首列（Pro版支持更多列），确保在浏览宽表或长表时，始终能看到列名和行标识。

**2. 适用场景**
适用于拥有大量字段或笔记的 Bases 数据库文件，以及嵌入在笔记中的 Bases 视图。特别适合需要频繁横向或纵向滚动查看数据，且需保持上下文清晰的用户。

**3. 核心特色**
*   **技术实现**：不同于简单的 CSS 样式覆盖，它通过保留并固定离屏单元格的 DOM 元素来实现真正的冻结，解决核心表格仅渲染可视列导致首列消失的问题。
*   **视觉优化**：为表头添加实心背景，防止滚动时行内容穿透显示，并添加边缘线条以区分冻结区域。
*   **无侵入性**：仅改变屏幕显示效果，不修改任何笔记或 Base 文件内容。
*   **付费增值**：基础功能免费；Pro 版（$5/月或$15买断）支持冻结2-3列、单文件列数限制及固定末列。

**4. 使用建议**
建议处理大型数据库视图时安装。若只需基本冻结，免费版本已足够；若需管理超宽表格（多列标识），可考虑 Pro 版。注意该插件未经 Obsidian 官方手动审核，使用前请确认兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


