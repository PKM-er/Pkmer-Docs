---
uid: 1786577080873005
title: 'Obsidian 插件：Neural Vault'
tags: ['自动化与AI', '图表与可视化', '第三方工具集成', '效率工具', 'obsidian插件']
description: '当Claude Code读取你的笔记时，能像点亮大脑一样照亮图谱节点。——此插件尚未经过Obsidian官方人员人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Neural Vault

> [!Note] 插件名片
> - 插件名称：Neural Vault
> - 插件作者：Willian Saez
> - 插件说明：当Claude Code读取你的笔记时，能像点亮大脑一样照亮图谱节点。——此插件尚未经过Obsidian官方人员人工审核。
> - 插件分类：['自动化与AI', '图表与可视化', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/williansaez/neural-vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?neural-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/williansaez/neural-vault/master/README.md)



## 概述

### 主要功能
Neural Vault是一款仅支持桌面端的Obsidian社区插件（测试版），与Claude Code搭配使用，可对Obsidian原生图谱视图进行动画展示。当Claude Code读取和编辑笔记时，图谱中的对应节点会闪烁。

### 适用场景
适用于使用Claude Code处理笔记，希望直观了解Claude Code操作了哪些笔记的场景。

### 核心特色
- 可视化：驱动Obsidian内置图谱视图，让节点随Claude的操作发光。
- 可观测性：能快速查看Claude刚读取或修改的笔记。
- 直接驱动：直接驱动内置的PIXI图谱渲染器，无单独视图。
- 保持活跃：禁用渲染冷却，让图谱节点按真实物理状态移动。

### 使用建议
- 确保Obsidian版本≥1.4.0，使用Claude Code CLI。
- 因无预构建版本，需自行构建`main.js`，按步骤手动安装。
- 在`.claude/settings.json`中添加钩子以连接Claude Code。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


