---
uid: 1793625615966001
title: "Obsidian 插件：Master ToDo List"
tags: ["任务管理", "效率工具", "搜索与排序", "obsidian插件"]
description: "Plugin for manage ToDos from Sasun Huevich with some customized features for a localized workflow of all ToDos across the Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Master ToDo List

> [!Note] 插件名片
> - 插件名称：Master ToDo List
> - 插件作者：Easton
> - 插件说明：Plugin for manage ToDos from Sasun Huevich with some customized features for a localized workflow of all ToDos across the Obsidian vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/iamwestoff/master-todo-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?master-todo-list)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/iamwestoff/master-todo-list/master/README.md)



## 概述

Master ToDo List 旨在解决 Obsidian 中任务分散、难以全局管理的痛点。它通过聚合全库中标记了特定标签的任务，生成一个统一的“主任务列表”仪表盘。该列表自动按“未完成”和“已完成”状态分类，并支持按项目分组。用户可以直接在仪表盘中勾选任务，插件会实时同步更新源笔记中的原始复选框，确保数据一致性，同时保留任务在源文件中的原始位置。

典型场景适用于需要跨多个笔记追踪进度的用户。例如，你可以将分散在“会议记录”、“项目规划”等不同笔记中的待办事项，通过添加 `#dashboard` 标签统一汇入仪表盘。当你在仪表盘中勾选某项任务时，源笔记中的对应条目也会同步变为完成状态，并自动记录完成日期。此外，你可以通过右键菜单快速跳转回源笔记，方便查看任务上下文或补充细节。

相比同类插件，Master ToDo List 的特色在于其灵活的项目分组机制和优先级排序。默认情况下，任务按源笔记所在的文件夹名称分组，但你可以使用 YAML 属性 `project` 自定义项目名，实现跨文件夹的任务聚合。此外，它支持使用 🔺、⏫ 等符号标记任务优先级，并在每个项目内按优先级自动排序。插件还具备智能同步能力，能处理其他插件修改的元数据，并在刷新时清理旧的重复项，保持列表整洁。

使用前需注意，仪表盘笔记需包含特定的激活注释，且建议专用一个笔记作为仪表盘，因为其布局由插件管理。导入任务必须添加指定的标签（默认为 `#dashboard`，可自定义），未标记的任务不会被导入。该插件不适合需要复杂工作流自动化或甘特图视图的用户，它主要提供基于状态和项目的列表视图。如果你依赖任务间的依赖关系管理或需要高度定制化的看板功能，可能需要结合其他插件使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


