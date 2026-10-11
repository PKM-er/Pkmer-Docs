---
uid: 1791709366185000
title: 'Obsidian 插件：Compact Empty Properties'
tags: ['界面优化', '样式与美化', '编辑工具', 'obsidian插件']
description: 'Hide empty Properties rows in Markdown editing views without changing note data. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Compact Empty Properties

> [!Note] 插件名片
> - 插件名称：Compact Empty Properties
> - 插件作者：allberry
> - 插件说明：Hide empty Properties rows in Markdown editing views without changing note data. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/allberry-dev/compact-empty-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?compact-empty-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/allberry-dev/compact-empty-properties/master/README.md)



## 概述

**1. 主要功能**
该插件用于在Obsidian的Markdown编辑视图中隐藏空的属性（Properties）行，同时保留底层的YAML数据。它自动折叠空字符串、null、空数组及对象，但保留 `false`、`0` 及非空值。

**2. 适用场景**
适用于使用模板或结构化笔记系统，且包含大量可选属性的用户。特别适合希望保持笔记界面整洁，同时不丢失预设属性结构的情况。

**3. 核心特色**
*   **层级可见性规则**：支持笔记、文件夹及库（Vault）级别的显示/隐藏设置，遵循“笔记>最具体文件夹>库>自动”的优先级。
*   **交互便捷**：支持快捷键（macOS Option/Win Alt+点击）打开菜单，可快速切换可见性或重排属性顺序。
*   **非破坏性**：隐藏、显示及排序操作仅改变UI，不写入Markdown；仅当用户明确执行“从笔记删除”时才修改数据。
*   **视觉优化**：提供全局装饰性图标选择器，并适配深浅色主题。

**4. 使用建议**
建议通过设置面板配置全局默认规则，利用Alt/Option点击属性名进行局部微调。注意该插件不会自动删除属性，若需彻底移除空字段，需手动执行删除操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


