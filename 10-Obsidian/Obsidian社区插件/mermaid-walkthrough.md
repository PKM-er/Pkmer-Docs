---
uid: 1793625616311000
title: "Obsidian 插件：Mermaid Walkthrough"
tags: ["图表与可视化", "学习与教育", "界面优化", "obsidian插件"]
description: "Walk through Mermaid sequence diagrams in a document one step at a time, as a sequence or on a draggable participant map, highlighting the active path. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Walkthrough

> [!Note] 插件名片
> - 插件名称：Mermaid Walkthrough
> - 插件作者：Max Kurapov
> - 插件说明：Walk through Mermaid sequence diagrams in a document one step at a time, as a sequence or on a draggable participant map, highlighting the active path. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '学习与教育', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mkurapov/obsidian-mermaid-walkthrough)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-walkthrough)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mkurapov/obsidian-mermaid-walkthrough/master/README.md)



## 概述

Mermaid Walkthrough 将文档中的 Mermaid 时序图转化为可交互的分步演示工具。它不再让你静态地阅读复杂的箭头和方框，而是允许你像播放幻灯片一样，逐条高亮显示当前激活的消息、路径及参与者。插件提供两种核心视图：一种是保持参与者头部固定、步骤列表滚动的“序列视图”，另一种是允许自由拖拽布局的“地图视图”，帮助你理清多方交互的逻辑脉络。

想象你在编写 API 文档或系统架构说明，其中包含一个涉及前端、网关、后端和数据库的复杂请求流程。传统静态图难以看清数据流向，而使用此插件，你可以打开“地图视图”，将各个服务卡片拖拽成符合直觉的布局，然后按键盘方向键逐步推进。每一步，当前消息的标签会直接显示在对应的箭头上，所属的 `alt` 或 `loop` 条件也会清晰标注，让你能精准追踪特定分支下的交互细节。

相比其他仅渲染静态图表的插件，Mermaid Walkthrough 的最大特色在于其“地图视图”的持久化布局能力。你可以为每个图表单独调整参与者卡片的位置和大小，这些布局会被自动保存，下次打开时依然保持原样。此外，它支持在笔记内直接替换图表进行演示，或通过侧边栏跟随当前笔记切换，且能智能识别 `rect` 块或 `Note over` 注释来自动划分阶段，使长流程的结构更加清晰。

需要注意的是，该插件仅针对 Mermaid 的 `sequenceDiagram` 类型有效，其他类型的图表（如流程图、类图）不受支持。如果你只是需要快速查看静态图表，或者你的文档中大量使用非时序图，此插件可能用处不大。另外，虽然它支持键盘快捷键操作，但复杂的布局调整仍需鼠标拖拽，对于纯键盘操作习惯的用户来说，地图视图的初始整理可能需要一定时间。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


