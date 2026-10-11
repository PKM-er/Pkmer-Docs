---
uid: 1791709365530000
title: 'Obsidian 插件：Base Diagram'
tags: ['图表与可视化', '图谱', '界面优化', 'obsidian插件']
description: 'Extends the Bases Relation and Lookup properties into a visual diagram view, laying out notes as table-style nodes connected by relationship lines. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Base Diagram

> [!Note] 插件名片
> - 插件名称：Base Diagram
> - 插件作者：Chizmo
> - 插件说明：Extends the Bases Relation and Lookup properties into a visual diagram view, laying out notes as table-style nodes connected by relationship lines. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '图谱', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chizmo-byte/obsidian-bases-relation-diagram)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-relation-diagram)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chizmo-byte/obsidian-bases-relation-diagram/master/README.md)



## 概述

**主要功能**：Base Diagram 利用 Obsidian 的 Bases 功能，将指定文件夹内的笔记及其 Frontmatter 中的链接属性（如 `related: "[[Note]]"`）可视化为关系图。它将笔记呈现为包含标题和属性的表格节点，并通过箭头展示笔记间的引用关系。

**适用场景**：适用于需要清晰展示局部关联的场景，如小说人物关系网、项目结构规划（任务、研究、想法）、世界观构建（地点、派系）或轻量级系统/数据设计草图。

**核心特色**：
1. **数据零冗余**：完全基于现有笔记和 Frontmatter，不创建独立数据库，笔记仍是唯一数据源。
2. **局部可控**：不同于全局自动布局的 Graph View，本插件聚焦于单一文件夹，支持手动拖拽布局并保存位置，便于精细调整。
3. **信息丰富**：节点直接展示笔记内部属性，而非仅显示链接存在，适合结构化设计而非单纯浏览。

**使用建议**：
- 确保笔记 Frontmatter 中包含指向其他笔记的链接属性，以便生成连线。
- 适用于需要“设计”和“结构化”特定主题时，而非全库探索。
- 布局位置按文件夹保存，修改后需重新打开以查看最新结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


