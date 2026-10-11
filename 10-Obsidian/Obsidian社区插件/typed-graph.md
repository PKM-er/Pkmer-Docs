---
uid: 1791709370601000
title: 'Obsidian 插件：Typed Graph'
tags: ['图谱', '图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
description: 'Typed, signed, labeled property graph over your notes with openCypher queries, edge properties and graph views. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Typed Graph

> [!Note] 插件名片
> - 插件名称：Typed Graph
> - 插件作者：Volodymyr Pavlyshyn
> - 插件说明：Typed, signed, labeled property graph over your notes with openCypher queries, edge properties and graph views. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/volland/obsigraph)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?typed-graph)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/volland/obsigraph/master/README.md)



## 概述

**1. 主要功能**
Typed Graph 将 Obsidian 笔记转化为具备类型、符号和属性的真实图数据库。它支持通过 frontmatter 定义节点类型，利用 `type:: [[Target]] {props}` 语法创建带属性及正负符号（如 `-distrusts`）的有向边，并允许在笔记中直接嵌入 openCypher 查询代码块以检索数据。

**2. 适用场景**
适用于需要复杂知识管理的场景，如人物关系网、项目依赖追踪、学术引用分析或构建可被 AI Agent 读取的 RAG 知识库。特别适合那些超越简单双向链接，需要表达“如何关联”及“关联属性”的高级用户。

**3. 核心特色**
- **语义丰富**：不仅记录“谁链接谁”，还记录“以何种关系、何种属性链接”。
- **查询能力**：内置 openCypher 支持，可在笔记内执行复杂图查询。
- **兼容性强**：语法兼容 Graph Link Types，支持现有笔记格式平滑迁移。
- **可视化直观**：提供专门的图视图，清晰展示带标签和属性的复杂网络结构。

**4. 使用建议**
建议在 `Types/` 文件夹中预先定义好节点类型和允许的关系模式，以保持图结构的一致性。对于已有笔记，可逐步将普通链接替换为带类型的边，并尝试在关键笔记中插入简单的 openCypher 查询以验证数据连通性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


