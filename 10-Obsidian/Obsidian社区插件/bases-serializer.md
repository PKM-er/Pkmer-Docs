---
uid: 1793625607848000
title: "Obsidian 插件：Bases Serializer"
tags: ["数据处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Serialize a Bases view into static Markdown, wrapped in sentinel comments so it can be refreshed in place. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Serializer

> [!Note] 插件名片
> - 插件名称：Bases Serializer
> - 插件作者：pedroilidio
> - 插件说明：Serialize a Bases view into static Markdown, wrapped in sentinel comments so it can be refreshed in place. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pedroilidio/obsidian-bases-serializer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-serializer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pedroilidio/obsidian-bases-serializer/master/README.md)



## 概述

Bases Serializer 旨在解决 Obsidian Bases 视图结果无法被图谱、搜索及导出工具识别的问题。它能够将动态的 Bases 查询结果序列化为静态的普通 Markdown 文本，并包裹在特定的哨兵注释中。这意味着原本隐藏在 `.base` 文件中的链接和任务列表，会转化为笔记中真实可见的链接与待办事项，使其能被其他插件或工具正常读取和索引。

典型场景包括将每日任务视图嵌入笔记并生成快照，或定期更新项目进度报告。例如，你可以在笔记中嵌入一个“今日任务”的 Bases 视图，点击序列化后，动态视图下方会立即生成一份包含所有任务链接和状态的 Markdown 列表。当源数据变化时，只需重新运行序列化，该区块就会原地更新，而笔记中的其他内容保持不变，实现了数据源与展示层的同步。

相比直接复制粘贴或手动维护列表，该插件的核心特色在于“原地刷新”机制。通过哨兵注释标记，插件能精准定位并替换旧的序列化块，支持同一笔记中存在多个独立的快照区块。此外，它提供了丰富的格式选项，如清单、表格或编号列表，并允许自定义行模板和链接样式，确保输出内容既符合个人习惯，又能保持与源 Bases 视图的逻辑一致性。

需要注意的是，该插件仅写入目标笔记，不会修改被查询的原始笔记内容，属于只读操作。它不适用于需要实时双向同步的场景，因为序列化后的 Markdown 是静态快照，后续对快照的修改不会反向更新 Bases 数据。此外，由于依赖 Bases 的公开 API，它无法直接序列化内置的表格或卡片视图，必须通过插件提供的 Serializer 视图类型进行转换。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


