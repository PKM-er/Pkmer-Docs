---
uid: 1786577082976000
title: 'Obsidian 插件：Syntactic Trees in Forest'
tags: ['图表与可视化', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '能在文中渲染用于语言学的 LaTeX 森林风格句法树。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Syntactic Trees in Forest

> [!Note] 插件名片
> - 插件名称：Syntactic Trees in Forest
> - 插件作者：Lucianski
> - 插件说明：能在文中渲染用于语言学的 LaTeX 森林风格句法树。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['图表与可视化', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lucianski/Forest-Syntactic-Trees-in-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?forest-syntactic-trees)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucianski/Forest-Syntactic-Trees-in-Obsidian/master/README.md)



## 概述

### 插件名称
Syntactic Trees in Forest

### 主要功能
在Obsidian笔记中内联渲染LaTeX `forest` 风格的句法树，节点标签通过Obsidian的MathJax管道处理，支持素标记、上标、下标和任意内联数学表达式。

### 适用场景
适用于语言学领域，用于在笔记中绘制句法树。

### 核心特色
专注于语言学家实际用于句法树的 `forest` 子集，支持括号语法、节点选项、`for tree` 传播器、边标签、三角（屋顶）短语以及命名节点间的 `\draw` 风格移动箭头，且具有TikZ忠实的 `to[…]` 语义。

### 使用建议
句法树需放在 `forest` 代码块中，插件会将其处理为 `forest` 包语法并输出内联SVG。节点用 `[ … ]` 包裹，若标签含特殊字符需用大括号保护。节点内容后加逗号可引入选项列表，如 `name` 可命名节点供箭头定位，`tier` 可使节点水平对齐等。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


