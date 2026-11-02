---
uid: 1793625605910000
title: "Obsidian 插件：Analog Canvas"
tags: ["图表与可视化", "第三方工具集成", "图片与PDF", "obsidian插件"]
description: "Open Analog Canvas circuit drawings (.icproj) in Obsidian and embed them in your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Analog Canvas

> [!Note] 插件名片
> - 插件名称：Analog Canvas
> - 插件作者：Todd Zhou
> - 插件说明：Open Analog Canvas circuit drawings (.icproj) in Obsidian and embed them in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/toddzzf/obsidian-analog-canvas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?analog-canvas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/toddzzf/obsidian-analog-canvas/master/README.md)



## 概述

Analog Canvas 允许用户在 Obsidian 中直接打开和编辑 `.icproj` 格式的模拟电路图纸，并将这些图形以嵌入引用的形式插入笔记。它支持整图展示或仅显示特定标注区块，尺寸控制语法与 Obsidian 图片一致，可灵活指定宽度或固定宽高。嵌入后的电路图右上角提供悬浮操作栏，支持放大、从文件刷新、就地编辑引用文字以及在新标签页中打开编辑器，文件树右键菜单也支持快速新建电路。

典型场景包括在技术笔记中嵌入电路原理图，例如引用 `![[inv.icproj#PFD]]` 仅展示名为 PFD 的标注区块，或设置 `![[inv.icproj|200]]` 控制显示宽度。当需要修改电路时，点击悬浮栏的“编辑电路”按钮即可在独立标签页中打开编辑器，保存后通过“刷新”按钮同步最新渲染结果，无需离开笔记界面。

相比其他仅支持静态图片嵌入的插件，Analog Canvas 的核心优势在于对电路文件的原生解析与交互式编辑能力。它通过 objectID 区分同名区块，确保引用精准；编辑器包在首次加载时自动从 GitHub Releases 下载并解压，升级时也会自动替换配套版本，手动安装的用户若已放置 `circuit/` 目录则不会被覆盖，保证了本地环境的稳定性。

使用前需注意，该插件依赖外部下载的编辑器包，首次加载需联网获取约 6 MB 的 `circuit.zip` 文件，离线环境需提前手动配置 `circuit/` 目录。它专为模拟电路设计，不适用于数字电路仿真或需要复杂交互逻辑的场景，也不支持直接编辑 `.icproj` 文件以外的电路格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


