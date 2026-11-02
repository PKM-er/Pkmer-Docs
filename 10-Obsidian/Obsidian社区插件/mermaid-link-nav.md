---
uid: 1793625616303000
title: "Obsidian 插件：Mermaid Link Navigator"
tags: ["图表与可视化", "模板与链接处理", "导航与状态栏", "编辑工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Link Navigator

> [!Note] 插件名片
> - 插件名称：Mermaid Link Navigator
> - 插件作者：w-java123
> - 插件说明：
> - 插件分类：['图表与可视化', '模板与链接处理', '导航与状态栏', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/w-java123/mermaid-link-nav)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-link-nav)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/w-java123/mermaid-link-nav/master/README.md)



## 概述

Mermaid Link Navigator 让 Mermaid 流程图中的节点直接嵌入 `[[笔记链接]]`，实现可视化导航与编辑。核心功能包括在节点上绑定笔记链接，通过 Ctrl/⌘+单击跳转至对应笔记，以及右键可视化编辑流程图结构。它支持添加、删除、重命名节点，改变节点形状（如矩形、菱形、圆柱等），设置判断节点及其“是/否”分支，并自动将编辑结果写回笔记源码，无需手动修改代码。

典型场景如梳理项目架构或工作流程：在笔记中绘制流程图，将关键步骤设为节点并链接到详细文档，阅读时点击节点即可快速跳转。例如，在“部署手册”流程图中，点击“数据库设计”节点可直接打开《架构设计》笔记的对应章节。此外，若节点链接的笔记不存在，点击会自动创建新笔记，并支持通过右键菜单灵活指定新笔记的默认保存文件夹，方便构建知识体系。

相比普通 Mermaid 渲染，该插件提供画布式滚轮缩放与拖动平移，视图状态自动保存，重启后恢复上次位置。特色功能包括“当前节点标记与一键定位”，选中节点后自动平移缩放至该位置，且状态跨设备同步。笔记重命名时，插件自动同步更新流程图中的链接，避免断链。内置 Mermaid 11 引擎，离线可用，支持导出整张图为 SVG 或高清 PNG，并兼容移动端双指缩放操作。

使用前需注意：链接必须写在节点标签内（建议用双引号包裹），写在连线标签上不可点击；一个节点含多个链接时，仅第一个作为跳转目标。普通左键单击不触发跳转，需配合 Ctrl/⌘ 键。该插件不适合需要频繁编辑连线标签文本或依赖复杂时序图交互的场景，主要聚焦于流程图节点的导航与结构编辑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


