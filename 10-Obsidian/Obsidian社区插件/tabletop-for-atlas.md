---
uid: 1793625622026001
title: "Obsidian 插件：Tabletop for Atlas VTT"
tags: ["第三方工具集成", "图表与可视化", "地图与位置", "obsidian插件"]
description: "Opens Atlas VTT maps on a 3D board, with 3D minis on tokens, walls, doors, lights and props. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tabletop for Atlas VTT

> [!Note] 插件名片
> - 插件名称：Tabletop for Atlas VTT
> - 插件作者：Bento's Grimoire of Things
> - 插件说明：Opens Atlas VTT maps on a 3D board, with 3D minis on tokens, walls, doors, lights and props. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图表与可视化', '地图与位置', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/evoljoaobento/atlas-vtt-tabletop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tabletop-for-atlas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/evoljoaobento/atlas-vtt-tabletop/master/README.md)



## 概述

Tabletop for Atlas VTT 将 Atlas VTT 的二维地图转化为 Obsidian 内的 3D 桌面，核心功能是在地图上叠加 3D 模型、墙壁、门和灯光。它让地图图像成为实体桌面，标记和笔记引脚竖立在其对应位置，支持在标记上放置 3D 小模型（GLB 格式），并允许在桌面上摆放道具。通过 Connect for Atlas VTT 或 Atlas Online 加入的玩家，若安装了该插件，也能同步看到这些 3D 模型，实现了跨平台的视觉同步。

典型场景包括跑团主持人在 Obsidian 中直接打开 `.atlasmap` 文件，右键选择“在 3D 中打开”，即可通过鼠标拖拽旋转视角、滚轮缩放，模拟真实的桌面战棋体验。例如，在战斗时，你可以右键点击标记分配 3D 小模型，利用右侧的 Initiative 追踪器管理回合，通过上下箭头切换行动顺序，同时观察墙壁高度和门开关状态对视野的影响，无需切换回 Atlas 客户端。

相比同类插件，其特色在于深度整合了 Atlas VTT 的底层数据，如墙壁高度、门状态和光照系统，并支持从 HeroForge、TaleSpire 等工具导入模型。它提供了丰富的材质库，允许用户为墙壁和门绘制纹理，并支持动态地图背景（如视频文件）。此外，它具备独特的“Painted”光照模式，可模拟黄昏、白天或夜晚的天空效果，以及景深模糊和接触阴影，极大增强了视觉沉浸感，且所有更改均通过 Atlas 或地图文件同步保存。

使用前需注意，该插件依赖 Atlas VTT 0.11.0 版本，且模型导入仅支持静态姿态，不读取骨骼和动画数据。TaleSpire 模型需手动添加底座。由于 3D 渲染和光照效果对显卡有一定要求，在低性能设备上可能影响帧率。它不适合需要复杂角色动画、非 Atlas VTT 地图格式，或希望完全脱离 Atlas 生态独立运行的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


