---
uid: 1793625605978000
title: "Obsidian 插件：Annoteca MindMap Bridge"
tags: ["思维导图", "第三方工具集成", "界面优化", "obsidian插件"]
description: "Shows Annoteca comment badges on Mind map editor nodes and lets you comment on a node. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Annoteca MindMap Bridge

> [!Note] 插件名片
> - 插件名称：Annoteca MindMap Bridge
> - 插件作者：Charles Kelsoe
> - 插件说明：Shows Annoteca comment badges on Mind map editor nodes and lets you comment on a node. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '第三方工具集成', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ckelsoe/obsidian-annoteca-mindmap-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?annoteca-mindmap-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ckelsoe/obsidian-annoteca-mindmap-bridge/master/README.md)



## 概述

Annoteca MindMap Bridge 旨在打通 Annoteca 注释系统与 Mind map editor 思维导图编辑器，解决在可视化思维导图中无法直观查看和管理文本注释的痛点。它会在导图节点上显示带有未解决注释数量的徽章，并允许用户直接在导图界面中查看、解决或重新打开这些注释，甚至能在选中特定节点后快速发起新注释，让注释管理从纯文本视图延伸到图形化视图。

典型场景包括审阅长篇文档或复杂项目结构时，你可以直接在思维导图上通过徽章颜色快速识别哪些分支存在待处理的反馈。例如，在协作编辑中，你可以利用“前往下一个有注释节点”的功能，按顺序逐个检查并处理各个分支的评论，无需在密集的文本中反复搜索定位，从而大幅提升审阅效率。

相比其他插件，它的核心特色在于作为“桥梁”连接两个独立插件，且具备精细的过滤能力。你可以按状态（全部、仅未解决、待审核）或特定类别筛选徽章显示，避免信息过载。此外，它支持可选的节点着色功能，根据未解决注释的数量对节点进行深浅不同的着色，帮助视觉化地呈现工作负载分布，这是同类插件中较少见的直观反馈机制。

使用前需注意，该插件强依赖 Annoteca 和 Mind map editor 两个前置插件，且版本有特定要求。特别重要的是，若你的注释使用 Annoteca 的“行内存储”模式，在导图中移动节点可能会损坏注释数据，插件会提示你转换为“文件末尾存储”模式。因此，它不适合那些无法接受修改注释存储格式，或不需要在导图视图中直接操作注释的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


