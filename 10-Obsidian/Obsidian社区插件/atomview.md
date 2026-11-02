---
uid: 1793625606208000
title: "Obsidian 插件：AtomView"
tags: ["学术与科研", "图表与可视化", "数据处理", "obsidian插件"]
description: "Local atom structures and MD trajectories with preserved scientific metadata. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AtomView

> [!Note] 插件名片
> - 插件名称：AtomView
> - 插件作者：Denny Kim
> - 插件说明：Local atom structures and MD trajectories with preserved scientific metadata. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '图表与可视化', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dhwan0112/obsidian-atomview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?atomview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dhwan0112/obsidian-atomview/master/README.md)



## 概述

AtomView 是一款专为桌面端 Obsidian 设计的实验性插件，旨在让用户直接在笔记中查看本地原子结构和分子动力学轨迹。它基于 Mol* 引擎，支持 LAMMPS、XYZ、PDB 及 CIF 等多种科学数据格式。该插件的核心优势在于完全本地化运行，无需依赖 Python 服务器、CDN 或 OVITO/VMD 等外部软件，即可实现结构可视化，同时完整保留源文件的科学元数据。

典型使用场景包括在笔记中嵌入动态轨迹以辅助科研记录。例如，你可以将 LAMMPS 模拟生成的铁氧体结构文件放入仓库，通过代码块嵌入笔记，并指定按电荷（q）着色、显示晶胞线框。在阅读视图中，你可以拖动旋转、缩放视图，或使用播放控制条以 0.2 至 30 FPS 的速度回放轨迹，直观观察原子随时间的运动状态。

相比同类工具，AtomView 特别注重科学数据的严谨性。它不会为 LAMMPS 数据推断化学键，也不会自动将类型编号映射为化学元素，用户需显式配置映射关系以避免误解。此外，插件支持对帧、相机状态和标量范围的版本化复制与恢复，确保笔记中嵌入的视图状态可复现。对于大型轨迹文件，它采用字节索引和有限帧缓存机制，能在不加载整个文件的情况下快速显示首帧，平衡了性能与内存占用。

需要注意的是，该插件目前仅经过 Linux 桌面版 Obsidian 1.14.4 的测试，Windows 和 macOS 的执行情况尚未验证，且不支持移动端。它不适合需要自动推断化学键或进行复杂化学编辑的用户，因为插件仅做只读展示，不提供编辑功能。此外，外部文件注册具有设备特定性，跨电脑使用时需重新注册，且云文件必须已下载到本地才能访问。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


