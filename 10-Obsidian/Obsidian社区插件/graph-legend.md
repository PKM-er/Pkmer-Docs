---
uid: 1793625613475000
title: "Obsidian 插件：Graph Legend"
tags: ["图表与可视化", "界面优化", "图谱", "obsidian插件"]
description: "Show a collapsible legend of your color groups in the graph view. Group entries into sections, rename them, and point at one to highlight its nodes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Legend

> [!Note] 插件名片
> - 插件名称：Graph Legend
> - 插件作者：Kazuki Hirakawa
> - 插件说明：Show a collapsible legend of your color groups in the graph view. Group entries into sections, rename them, and point at one to highlight its nodes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '界面优化', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kaz-hira/obsidian-graph-legend)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-legend)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaz-hira/obsidian-graph-legend/master/README.md)



## 概述

Graph Legend 解决了 Obsidian 全局图谱视图中颜色分组缺乏直观说明的痛点。它直接在图谱角落生成一个可折叠的图例，实时读取并同步图谱中的颜色分组设置。无论你在图谱设置中新增、重排还是修改颜色组，图例都会自动更新，确保你随时能看清每种颜色对应的具体标签或文件夹，无需反复对照设置界面。

想象一下，当你面对数百个节点的全局图谱时，想快速定位所有标记为“待办”的笔记。只需在图例中找到对应的条目，鼠标悬停即可高亮显示这些节点，其余部分自动变暗，视觉效果与直接悬停节点一致。若需持续查看，点击该条目即可固定高亮状态，再次点击则取消。这种交互方式让复杂图谱的浏览变得清晰且高效。

相比其他仅显示静态列表的插件，Graph Legend 的特色在于其深度集成与灵活性。它支持通过正则表达式将条目自动分类为不同章节，例如将标签和路径分开显示，并允许自定义显示名称以提升可读性。此外，它提供鱼骨图、点状列表和树状图三种视觉风格，且能完美适配当前主题的颜色方案。由于它直接复用图谱自身的悬停淡化机制，不会干扰你的搜索设置或图谱配置，使用体验更加原生。

需要注意的是，该插件依赖图谱视图的内部状态，若 Obsidian 更新导致内部结构变化，图例可能会暂时隐藏，但不会破坏图谱本身。默认情况下，它不会显示在侧边栏停靠的图谱中，如需显示需手动开启。如果你主要使用局部图谱，或者对图谱的颜色分组没有管理需求，这款插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


