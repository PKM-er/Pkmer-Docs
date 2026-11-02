---
uid: 1793625620094001
title: "Obsidian 插件：Pinned Tabs Left"
tags: ["界面优化", "效率工具", "obsidian插件"]
description: "Keeps pinned tabs at the left of each tab group, so new tabs open after them. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pinned Tabs Left

> [!Note] 插件名片
> - 插件名称：Pinned Tabs Left
> - 插件作者：davison
> - 插件说明：Keeps pinned tabs at the left of each tab group, so new tabs open after them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisdavison/pinned-tabs-left)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pinned-tabs-left)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisdavison/pinned-tabs-left/master/README.md)



## 概述

Pinned Tabs Left 旨在解决 Obsidian 中固定标签页位置混乱的问题。在原生功能中，固定标签页不会自动移动，导致它们散落在普通标签页之间，且新打开的标签页可能会插入其中。该插件的核心功能是强制将每个标签组内的固定标签页统一排列在最左侧，并严格按照你固定的顺序排列，其余标签页则依次排在其后，从而确保标签栏布局始终清晰、可预测。

想象一下你正在管理多个项目，将几个核心笔记固定以便随时查阅。如果没有此插件，当你频繁打开新链接或切换工作区时，这些核心笔记可能会被新标签页挤到中间，导致查找困难。启用 Pinned Tabs Left 后，无论你怎么操作，这些核心笔记始终稳稳地停留在标签栏最左端，新打开的标签页只会出现在它们之后，让你能像使用浏览器一样高效地管理常用页面。

与社区中其他处理固定标签页的插件不同，大多数同类插件仅改变标签页的外观（如缩小尺寸或添加图标），而不改变其实际顺序。Pinned Tabs Left 直接修改 Obsidian 的实际标签顺序，这意味着“下一个/上一个标签页”快捷键、数字快捷键以及保存的工作区都能正确识别固定标签页的位置。它不依赖 CSS 覆盖或手动移动元素，而是让 Obsidian 自行重绘标签栏，因此兼容性更好，且不限于桌面端。

需要注意的是，由于 Obsidian 没有公开重排标签页的 API，该插件依赖内部未公开接口。如果未来 Obsidian 版本更新导致内部结构变化，插件可能会停止重排功能（但不会导致崩溃），需等待作者更新。此外，该插件没有任何设置项或额外命令，也不提供视觉美化功能。如果你希望固定标签页更紧凑或带有特殊图标，建议搭配其他视觉类插件使用，而非单独依赖此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


