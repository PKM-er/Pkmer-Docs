---
uid: 2025081220015004
title: 'Obsidian 插件：Blueprint Renderer'
tags: ['第三方工具集成', '图表与可视化', '编程与脚本', 'obsidian插件']
description: '用BlueprintUE渲染引擎把虚幻引擎蓝图节点渲染成交互式可视化图表。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Blueprint Renderer

> [!Note] 插件名片
> - 插件名称：Blueprint Renderer
> - 插件作者：goderyu
> - 插件说明：用BlueprintUE渲染引擎把虚幻引擎蓝图节点渲染成交互式可视化图表。
> - 插件分类：['第三方工具集成', '图表与可视化', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goderyu/obsidian-blueprint-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blueprint-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goderyu/obsidian-blueprint-renderer/master/README.md)

![Blueprint Renderer](https://cdn.pkmer.cn/covers/blueprint-renderer_external_0.gif!pkmer)

## 概述

### 主要功能
Blueprint Renderer是基于BlueprintUE自托管版的Obsidian插件，可将虚幻引擎蓝图节点在Obsidian笔记中渲染为交互式可视化图表。

### 适用场景
适用于在Obsidian中记录UE蓝图代码，避免截图的麻烦，直接复制蓝图代码粘贴到代码块即可渲染。

### 核心特色
- 采用简化架构，基于原BlueprintUE项目的单文件系统，降低维护难度。
- 100%兼容，直接使用原render.js和render.css，无重构风险。
- 功能完整，支持所有节点类型、连接和交互。
- 风格隔离，使用CSS作用域确保与Obsidian样式无冲突。

### 使用建议
在Obsidian中创建代码块，代码块语言选择“blueprint”，将蓝图代码粘贴其中，即可实现渲染。该插件通过动态加载、全局暴露、简单封装等方式实现蓝图代码的渲染，操作较为简便。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


