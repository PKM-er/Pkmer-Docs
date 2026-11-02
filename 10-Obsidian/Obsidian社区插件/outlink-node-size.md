---
uid: 1793625619718000
title: "Obsidian 插件：Outlink Node Size"
tags: ["图表与可视化", "图谱", "界面优化", "obsidian插件"]
description: "Size graph view nodes by the combined size of the notes they link to. The inverse of backlink importance: notes that link to big notes grow, and notes that link to nothing stay small. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Outlink Node Size

> [!Note] 插件名片
> - 插件名称：Outlink Node Size
> - 插件作者：Gonçalo Cartaxana
> - 插件说明：Size graph view nodes by the combined size of the notes they link to. The inverse of backlink importance: notes that link to big notes grow, and notes that link to nothing stay small. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '图谱', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goncascartaxana/outlink-node-size)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outlink-node-size)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goncascartaxana/outlink-node-size/master/README.md)



## 概述

Outlink Node Size 改变了 Obsidian 图谱视图中节点大小的计算逻辑。默认情况下，节点大小取决于被引用的次数，而该插件则依据笔记所链接到的其他笔记的总大小来调整尺寸。这意味着，如果一篇笔记链接了大量内容丰富的长文，它会在图谱中显得更大；反之，没有出链的笔记则保持最小尺寸。这种机制反转了传统的“被引用即重要”的逻辑，转而强调笔记作为入口或索引的价值。

典型使用场景包括快速识别库中的“枢纽”笔记。例如，当你维护一个大型项目时，可以通过图谱直观地看到哪些概览页或地图笔记聚合了最多的子页面，从而判断哪些是核心入口。另一个场景是区分“叶子”笔记与组织性笔记，那些仅作为终点、不指向其他内容的笔记会明显缩小，让你一眼看出哪些笔记缺乏进一步的关联结构。

相比其他仅改变节点颜色或力的插件，Outlink Node Size 专注于尺寸维度，且不影响颜色、标签或分组。其特色在于支持多层级传播计算，允许你设定深度和衰减系数，让笔记继承其链接目标的大小。此外，它基于整个库计算尺寸，不受局部图谱过滤或搜索的影响，确保了全局视角的一致性。

使用前需注意，该插件通过钩子修改内部渲染函数，未来 Obsidian 更新可能导致兼容性问题，届时图谱将回退至默认样式。它也不适合与 Extended Graph 等同样修改节点大小的插件同时使用，二者存在冲突。如果你主要关注笔记被引用的热度，或者需要移动端支持，此插件可能不是最佳选择，因为它主要在桌面端开发且未测试移动端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


