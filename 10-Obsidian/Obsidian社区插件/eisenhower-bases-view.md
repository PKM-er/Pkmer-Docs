---
uid: 1786577077543002
title: 'Obsidian 插件：Eisenhower Matrix for Bases'
tags: ['任务管理', '图表与可视化', '数据处理', '效率工具', 'obsidian插件']
description: '把来自Base的笔记以艾森豪威尔矩阵的形式展示出来，还能拖动卡片来更新它们的属性。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Eisenhower Matrix for Bases

> [!Note] 插件名片
> - 插件名称：Eisenhower Matrix for Bases
> - 插件作者：Takahiro.N
> - 插件说明：把来自Base的笔记以艾森豪威尔矩阵的形式展示出来，还能拖动卡片来更新它们的属性。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['任务管理', '图表与可视化', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nakaba-lab/eisenhower-bases-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?eisenhower-bases-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nakaba-lab/eisenhower-bases-view/master/README.md)



## 概述

### 插件名称
Eisenhower Matrix for Bases

### 主要功能
将Obsidian Base中的笔记以2×2艾森豪威尔矩阵（紧急度×重要性）形式展示，可在象限间拖动卡片更新笔记属性，将分类信息写回笔记前置元数据。

### 适用场景
适用于对Obsidian Base中的笔记进行分类整理、优先级排序，快速判断笔记的紧急和重要程度。

### 核心特色
1. 提供内置Bases视图无法给予的二维（紧急×重要）概览及就地持久化重新分类功能。
2. 使用标准API写回数据，无自定义存储。
3. 完全本地运行，无网络请求和数据追踪。
4. 界面语言可自动跟随Obsidian，也能在设置中强制为英语或日语。

### 使用建议
1. 准备一个包含待分类笔记的 `.base` 文件。
2. 在Base的视图切换器中添加“Eisenhower Matrix”视图。
3. 在视图配置中选择用于紧急度和重要性的布尔型 `note.*` 属性，也可在插件设置中修改默认属性、象限标签/颜色等。
4. 通过鼠标或键盘拖动卡片进行分类，未设置属性的笔记会在“未分类区”，可拖入相应象限。目前仅支持桌面端，后续版本计划添加触摸支持。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


