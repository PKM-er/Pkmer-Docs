---
uid: 1791709370025000
title: 'Obsidian 插件：Slash Tree'
tags: ['图表与可视化', '学习与教育', '编辑工具', 'obsidian插件']
description: 'Turn simple text (one line per level, parent: left right, LeetCode arrays, or indented lists) into slash-style (/ \) binary tree drawings for algorithm notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Slash Tree

> [!Note] 插件名片
> - 插件名称：Slash Tree
> - 插件作者：tianyiliu
> - 插件说明：Turn simple text (one line per level, parent: left right, LeetCode arrays, or indented lists) into slash-style (/ \) binary tree drawings for algorithm notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '学习与教育', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adamlty/obsidian-slash-tree)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?slash-tree)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adamlty/obsidian-slash-tree/master/README.md)



## 概述

**1. 主要功能**
Slash Tree 插件可将文本形式的树结构数据转换为手绘风格的斜杠（`/ \`）二叉树图形。它支持自动识别多种输入格式，包括按层排列的文本、`parent: left right` 父子关系行、LeetCode 风格的层级数组以及缩进列表，最终生成符合算法笔记习惯的可视化图表。

**2. 适用场景**
专为算法学习与笔记设计，适用于记录二叉树遍历、查找等数据结构题目，或需要在 Obsidian 中快速展示树形逻辑的场景。

**3. 核心特色**
*   **视觉精准**：斜杠严格保持45°对角线，父节点始终居中于子节点上方，模拟手绘效果而非目录树风格。
*   **格式兼容**：自动检测输入格式，支持空节点占位符（`_` 或 `null`）。
*   **对齐优化**：无论标签宽度如何（包括中文等 CJK 字符），均能在任意深度保持完美对齐。
*   **错误提示**：输入格式错误时（如子节点数量不匹配）会立即报错并列出父节点，避免静默偏移。

**4. 使用建议**
推荐优先使用“按层一行”格式，用 `|` 分隔不同父节点的子节点组，用 `_` 表示空位，结构最清晰。若数据来自 LeetCode 数组，可直接粘贴数组字符串，插件会自动解析。注意该插件未经官方人工审查，建议先备份笔记再尝试复杂结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


