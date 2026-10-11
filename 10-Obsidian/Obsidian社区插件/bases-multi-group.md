---
uid: 1791709365554000
title: 'Obsidian 插件：Bases Multi-Group'
tags: ['表格', '数据处理', '搜索与排序', '界面优化', 'obsidian插件']
description: 'A Bases table view that lists a note under every value of a grouped list property. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Multi-Group

> [!Note] 插件名片
> - 插件名称：Bases Multi-Group
> - 插件作者：bongho
> - 插件说明：A Bases table view that lists a note under every value of a grouped list property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '搜索与排序', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bongho/obsidian-bases-multi-group)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-multi-group)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bongho/obsidian-bases-multi-group/master/README.md)



## 概述

**1. 主要功能**
该插件为 Obsidian 的 Bases 数据库提供“多组表格”视图。它解决了原生 Bases 将列表属性作为整体分组的问题，使笔记能同时出现在列表中的每一个值对应的分组下（例如 `category: [A, B]` 会分别显示在 A 和 B 组中）。

**2. 适用场景**
适用于需要按多个标签或分类同时归类笔记的场景，特别是当用户希望一篇笔记在多个相关组别中都能被检索到，而非仅显示在合并后的单一组别中时。

**3. 核心特色**
*   **无缝集成**：无需额外配置，直接复用现有的 Group by 设置，非列表类型的分组行为与原生一致。
*   **高性能**：采用视口懒加载技术，即使拥有数百个分组也能保持流畅响应。
*   **临时性设计**：插件不存储独立设置，若未来 Obsidian 原生支持此功能，只需切换回普通 Table 视图即可，无需迁移数据。

**4. 使用建议**
*   在 Base 中添加视图时选择 **Multi-group table** 类型。
*   目前仅支持桌面端，且暂不支持内联编辑、看板布局及嵌套分组。
*   每组默认显示前 50 行，需手动点击“Show more”加载更多。
*   建议关注 Obsidian 官方更新，一旦原生支持多值分组，可停止使用此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


