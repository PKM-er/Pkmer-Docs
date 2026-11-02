---
uid: 1793625621957001
title: "Obsidian 插件：Synchronise Outline Folds"
tags: ["编辑工具", "界面优化", "效率工具", "obsidian插件"]
description: "Keep heading folds in the core Outline and the active document in sync. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Synchronise Outline Folds

> [!Note] 插件名片
> - 插件名称：Synchronise Outline Folds
> - 插件作者：davison
> - 插件说明：Keep heading folds in the core Outline and the active document in sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisdavison/obsidian-syncronise-outline-folds)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?synchronise-outline-folds)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisdavison/obsidian-syncronise-outline-folds/master/README.md)



## 概述

Synchronise Outline Folds 旨在解决 Obsidian 中核心大纲视图与当前编辑文档之间的折叠状态不同步问题。该插件的核心功能是建立双向联动机制，确保当你在大纲面板中展开或折叠某个标题时，编辑器内的对应章节也会随之改变状态；反之，在文档中手动折叠标题时，大纲视图也会即时更新。这种同步机制消除了用户需要在两个界面间反复切换以确认层级结构的繁琐操作，让层级导航更加直观和一致。

典型的使用场景包括处理长篇文档时的快速定位。例如，当你正在撰写一篇包含多个章节的论文，在大纲中折叠了“引言”部分以聚焦于“方法论”时，编辑器内的“引言”也会自动收起，避免视觉干扰。另一个场景是审阅笔记结构，若你在文档中展开了某个深层级的子标题，大纲视图会同步展开该分支，帮助你快速检查该部分下的所有子项是否完整，无需手动在大纲中逐级点击。

相比其他仅支持单向同步或需要复杂配置的同类插件，Synchronise Outline Folds 强调“保持同步”的实时性与稳定性。它专注于解决最基础的折叠状态一致性痛点，无需用户配置复杂的映射规则或快捷键。其特色在于无缝集成 Obsidian 的核心功能，不引入额外的 UI 元素或干扰项，确保用户在熟悉的操作习惯下获得更流畅的体验。这种轻量级的设计使得它在处理大量笔记时依然保持高效，不会因后台同步逻辑而增加明显的性能负担。

需要注意的是，该插件主要服务于标题层级的折叠同步，并不涉及内容编辑或格式调整。如果你依赖的是非标题元素（如代码块或表格）的折叠功能，或者需要更复杂的视图联动（如双链预览同步），此插件可能无法满足需求。此外，由于插件尚未经过 Obsidian 官方人工审核，建议在使用前备份笔记库，以防出现意外的状态冲突。对于仅需简单浏览笔记结构、不常进行深度折叠操作的用户，安装此插件的必要性较低。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


