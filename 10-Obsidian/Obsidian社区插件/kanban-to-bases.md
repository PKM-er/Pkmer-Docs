---
uid: 1793625614475000
title: "Obsidian 插件：Kanban to Bases"
tags: ["任务管理", "数据处理", "效率工具", "obsidian插件"]
description: "Convert boards made with the Kanban community plugin into notes and a base shown in the native Kanban view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kanban to Bases

> [!Note] 插件名片
> - 插件名称：Kanban to Bases
> - 插件作者：Brievora
> - 插件说明：Convert boards made with the Kanban community plugin into notes and a base shown in the native Kanban view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/brievora/kanban-to-bases)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kanban-to-bases)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/brievora/kanban-to-bases/master/README.md)



## 概述

Kanban to Bases 旨在解决社区版 Kanban 插件与 Obsidian 1.14 原生 Bases 视图之间的格式兼容问题。它能够将存储在单个 Markdown 文件中的传统看板，一键转换为符合原生标准的格式：每张卡片独立成为一个笔记，同时生成一个 `.base` 文件。转换后的看板在原生视图中呈现，列对应属性值，卡片对应独立笔记，彻底改变了以往所有卡片挤在一个文件里的管理方式，且原看板文件保持不变。

典型场景适用于希望迁移工作流的用户。例如，你有一个包含“待办”、“进行中”和“已完成”列的项目看板，转换后，每张任务卡片都会变成独立的笔记，方便你直接编辑内容或添加链接；生成的 `.base` 文件会自动创建“看板”和“表格”两个视图，前者保持原有列顺序，后者便于快速浏览所有卡片。如果卡片原本只是链接到已有笔记，插件会直接更新该笔记的属性，而非创建副本，保持数据一致性。

相比手动迁移或其他转换工具，该插件的特色在于对复杂属性的精细映射。它能自动识别日期、时间、标签及自定义字段，并将其转化为笔记属性。此外，它具备智能去重机制，若卡片链接指向不存在的笔记，会自动创建；若指向非笔记文件（如 PDF），也会生成对应笔记。插件还提供“撤销”功能，可一键移除上次转换生成的所有文件和属性，且重启 Obsidian 后依然有效，极大降低了试错成本。

使用前需注意，该插件仅支持从社区版 Kanban 插件迁移，不支持其他第三方看板格式。转换后，在原生视图中移动卡片仅更新状态，不自动调整列内顺序，需依赖 `position` 属性。此外，插件界面包含 Brievora 团队的静态宣传信息，虽无网络请求，但介意广告的用户需知悉。它不适合需要频繁在旧版看板格式间切换或依赖 Kanban 插件特有高级功能（如复杂依赖关系）的用户，因为转换是单向且结构简化的。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


