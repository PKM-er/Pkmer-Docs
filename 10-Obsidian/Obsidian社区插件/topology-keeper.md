---
uid: 1793625623681000
title: "Obsidian 插件：Topology Keeper"
tags: ["图谱", "模板与链接处理", "文件管理", "数据分析", "obsidian插件"]
description: "Analyze links and tags, suggest tags, manage local external files, and inspect graph areas. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Topology Keeper

> [!Note] 插件名片
> - 插件名称：Topology Keeper
> - 插件作者：fizz
> - 插件说明：Analyze links and tags, suggest tags, manage local external files, and inspect graph areas. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图谱', '模板与链接处理', '文件管理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fizzfizzgit/topology-keeper-public)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?topology-keeper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fizzfizzgit/topology-keeper-public/master/README.md)



## 概述

Topology Keeper 是一款专注于笔记结构分析的桌面端插件，核心功能在于通过链接和标签数据，将庞大的笔记库拆解为可管理的“区域”。它利用图论算法（如平面性检查）识别笔记间的连接密度，自动划分出结构紧密的社区，并基于内容关联提供标签建议。此外，它还具备管理本地外部文件的能力，允许将图片等附件与笔记建立元数据关联，生成缩略图及数据库条目，从而让非文本资源也纳入知识图谱的视野。

典型场景包括梳理杂乱无章的笔记库。例如，当你面对数百篇笔记却不知从何入手时，插件能自动识别出几个高内聚的“热点”区域，你只需点击即可在交互式图谱中查看该区域内的笔记分布，快速定位核心主题。另一个场景是整理外部资源，你可以批量将散落在硬盘上的图片关联到对应笔记，插件会自动生成元数据笔记和缩略图，并支持重命名或移动这些文件，同时自动更新所有引用链接，避免断链。

相比常规图谱插件，Topology Keeper 的特色在于其深度的结构洞察能力。它不仅展示连接，还通过数学模型判断区域是否“平面”或存在“热点”，帮助用户发现潜在的逻辑断裂或过度连接。其标签建议机制并非简单统计，而是排除自身证据并权衡通用标签权重，提供更符合结构逻辑的候选项。此外，它对外部文件的管理粒度极细，支持中断后的导入恢复，确保元数据的一致性，这是许多同类插件所缺乏的稳健性。

需要注意的是，该插件目前处于实验阶段，仅在 Windows 上经过充分测试，macOS 和 Linux 的兼容性尚未验证，建议先在测试库中试用。它不适合追求极简或仅需要基础图谱可视化的用户，因为其界面包含大量分析选项，学习曲线较陡。此外，插件生成的元数据笔记和缩略图会增加库的复杂度，若你偏好纯文本管理或不需要外部文件关联功能，可能会觉得其功能过于冗余。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


