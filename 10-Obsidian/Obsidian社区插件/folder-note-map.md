---
uid: 1793625613086000
title: "Obsidian 插件：Folder Note Map"
tags: ["图表与可视化", "文件管理", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Generate a static canvas that maps your vault. Each folder with a folder note becomes a group holding its notes and subfolder groups. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Note Map

> [!Note] 插件名片
> - 插件名称：Folder Note Map
> - 插件作者：Gonçalo Cartaxana
> - 插件说明：Generate a static canvas that maps your vault. Each folder with a folder note becomes a group holding its notes and subfolder groups. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '文件管理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goncascartaxana/folder-note-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-note-map)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goncascartaxana/folder-note-map/master/README.md)



## 概述

Folder Note Map 旨在解决大型知识库中结构混乱、难以全局把控的问题。它通过读取库内数据，一键生成静态画布地图，将拥有文件夹笔记的目录转化为分组，内部笔记显示为卡片，子文件夹则嵌套为子分组。这种鸟瞰视角让你能直观审视现有内容，从而决定哪些部分需要重组、合并或移除，为后续手动调整提供清晰的规划依据。

典型场景包括库结构重构前的规划与对比。例如，你可以先生成一张地图作为基准，复制一份后在副本中拖拽卡片、修改分组以模拟新的目录结构；待实际调整完库内文件后，再次生成新地图，通过对比新旧两张画布，快速验证重组效果是否符合预期。此外，对于包含大量归档或临时文件的库，利用该功能可以清晰识别哪些内容应当保留，哪些应当清理。

相比其他仅展示文件列表的插件，Folder Note Map 的核心特色在于其“非破坏性”与“可视化规划”能力。它生成的卡片仅为画布内的文本，不会创建、修改或移动库中任何实际笔记，确保操作绝对安全。同时，它支持通过 `map-as` 属性灵活控制显示粒度，可将特定文件夹简化为单张卡片或完全隐藏，避免地图因内容过多而变得杂乱，且布局按字母顺序排列，保证每次生成的视图一致性。

使用前需注意，该地图是生成时刻的静态快照，不会随库内变化自动更新，需手动重新生成以获取最新视图。它不适合需要实时同步目录结构或自动执行文件移动操作的用户。此外，若库内文件夹未遵循“文件夹笔记”约定（如缺少同名笔记或 index 文件），这些文件夹及其内容将不会出现在地图上，需确保目录结构符合插件识别规则。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


