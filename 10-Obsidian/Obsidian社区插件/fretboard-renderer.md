---
uid: 1786577077937002
title: 'Obsidian 插件：Fretboard Renderer'
tags: ['图表与可视化', '编辑工具', '学习与教育', 'obsidian插件']
description: '在代码块里，能根据轻量级YAML渲染出吉他指板图。——这个插件还没经过Obsidian官方人员手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fretboard Renderer

> [!Note] 插件名片
> - 插件名称：Fretboard Renderer
> - 插件作者：Hiroshi Watanabe
> - 插件说明：在代码块里，能根据轻量级YAML渲染出吉他指板图。——这个插件还没经过Obsidian官方人员手动审核呢。
> - 插件分类：['图表与可视化', '编辑工具', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hiroshi-watanabe/fretboard-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fretboard-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hiroshi-watanabe/fretboard-renderer/master/README.md)



## 概述

### 主要功能
在Obsidian笔记中，通过代码块内轻量级的YAML语法渲染吉他指板图为SVG格式。

### 适用场景
适用于分析和弦进行、查看五声音阶或调式位置等场景。

### 核心特色
- **自动根音高亮与度数标注**：标记任意音符为根音，插件自动计算各音符相对根音的音程并高亮同根音的音符，无需手动样式设置。
- **绝对或相对指板图**：指定起始品格可生成固定位置和弦图；不指定则生成可移动模式，插件会推断位置并通用标注，搭配 `boxes` 和 `paths` 可勾勒音阶位置与音程。

### 使用建议
- 安装：在设置的社区插件中搜索“Fretboard Renderer”并安装。
- 创建指板图：添加语言为 `fretboard` 的代码块，列出要显示的音符即可。标记一个音符为 `label: root` 能让插件自动计算和弦名称。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


