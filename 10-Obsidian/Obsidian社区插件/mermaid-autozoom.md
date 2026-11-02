---
uid: 1793625616287001
title: "Obsidian 插件：Mermaid Autozoom"
tags: ["图表与可视化", "界面优化", "样式与美化", "obsidian插件"]
description: "Fits wide Mermaid diagrams to the page width and shows them at full size in an overlay on click. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Autozoom

> [!Note] 插件名片
> - 插件名称：Mermaid Autozoom
> - 插件作者：Jiří Václavovič
> - 插件说明：Fits wide Mermaid diagrams to the page width and shows them at full size in an overlay on click. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jvaclavovic/obsidian-mermaid-autozoom)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-autozoom)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jvaclavovic/obsidian-mermaid-autozoom/master/README.md)



## 概述

Mermaid Autozoom 专为解决宽幅 Mermaid 图表在笔记中显示不全或难以阅读的问题而设计。其核心功能是将超出页面宽度的图表自动缩放至适配当前页面，确保内容完整可见；对于原本较小的图表，则保持其原始尺寸，绝不进行无意义的放大。此外，用户只需点击任意图表，即可在覆盖层中以 100% 原始大小查看细节，兼顾了概览与精读的需求。

典型使用场景包括绘制复杂的系统架构图或大型流程图时。例如，当你在阅读视图中查看一张包含数十个节点的微服务架构图，若直接显示会超出屏幕边界，该插件会自动将其压缩至页面宽度，让你一眼看清整体结构。若需检查某个特定模块的连接细节，只需点击图表，即可在弹出的覆盖层中通过滚轮滚动或双指捏合进行放大查看，无需切换视图或手动调整缩放比例。

相比其他仅支持静态显示的 Mermaid 插件，Mermaid Autozoom 的特色在于其智能的“只缩不放”机制，避免了小图表被强行拉伸导致的模糊或变形。同时，它在实时预览模式下优化了交互逻辑，点击图表直接触发查看覆盖层，而非意外进入源码编辑状态，从而减少了误操作。这种设计让阅读体验更加流畅，特别适合需要频繁在宏观结构与微观细节间切换的用户。

使用前需注意，该插件主要服务于查看体验，若需修改图表源码，在实时预览模式下需使用代码块自带的编辑按钮，而非直接点击图表。此外，带有修饰键（如 Ctrl、Cmd 等）的点击操作会被忽略，以保留默认行为。如果你主要需求是编辑 Mermaid 代码，或者对图表的自动缩放没有特殊要求，此插件可能并非必需。它更适合那些重视图表可读性、希望简化查看流程的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


