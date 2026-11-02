---
uid: 1793625607857001
title: "Obsidian 插件：Bases View Extract"
tags: ["数据处理", "效率工具", "编辑工具", "obsidian插件"]
description: "Copy one saved Bases view as a complete embedded query. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases View Extract

> [!Note] 插件名片
> - 插件名称：Bases View Extract
> - 插件作者：theluckystrike
> - 插件说明：Copy one saved Bases view as a complete embedded query. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-view-extract)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-view-extract)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-view-extract/master/README.md)



## 概述

Bases View Extract 解决了在 Obsidian 中复用大型 Base 文件特定视图的痛点。它允许用户从 `.base` 文件中提取一个已保存的命名视图，将其转换为完整的嵌入式查询代码块。核心功能是将选定的视图及其依赖的共享定义（如过滤器、公式和属性标签）打包成一个独立的 YAML 代码块，直接插入到 Markdown 笔记中，而无需手动复制复杂的公式或配置。

典型场景包括在每周回顾笔记或项目仪表盘中嵌入特定视图。例如，当你有一个包含多个视图的大型项目 Base 时，只需提取“进行中任务”视图，即可将其嵌入到周记中，保持数据展示的独立性。另一个例子是将复杂的成本计算视图提取到模板中，确保共享的公式定义随视图一起迁移，避免了在多个笔记中重复配置相同逻辑的繁琐工作。

相比手动复制粘贴，该插件的特色在于其“完整性”与“安全性”。它会自动保留视图所需的共享定义和未知顶层字段，确保提取后的查询在目标笔记中具备完整的上下文。此外，插件提供只读预览功能，允许用户在插入前检查排序规则、分组设置及潜在的路径依赖警告。对于需要批量处理的用户，Pro 版本还支持将多个视图提取为独立章节，并保存命名预设以便后续快速调用。

使用前需注意，提取操作生成的是查询源代码快照，而非实时数据链接。如果源 Base 文件后续发生修改，已插入的查询不会自动更新，需重新运行提取命令。此外，嵌入查询依赖目标笔记的上下文，若查询中包含相对路径或 `this` 变量，移动笔记可能导致结果变化。该插件不适合需要实时同步源数据变更的场景，也不支持在提取时自动筛选未使用的公式，所有共享定义均会被完整保留。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


