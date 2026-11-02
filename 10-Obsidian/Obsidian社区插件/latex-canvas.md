---
uid: 1793625614700000
title: "Obsidian 插件：LaTeX Canvas"
tags: ["学术与科研", "编辑工具", "效率工具", "obsidian插件"]
description: "Build and edit LaTeX math equations with a point-and-click palette. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX Canvas

> [!Note] 插件名片
> - 插件名称：LaTeX Canvas
> - 插件作者：laurdr
> - 插件说明：Build and edit LaTeX math equations with a point-and-click palette. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/laurdr/LaTeX-Canvas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-canvas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/laurdr/LaTeX-Canvas/master/README.md)



## 概述

LaTeX Canvas 旨在解决 LaTeX 初学者或偶尔编写公式的用户难以记忆复杂命令的问题。它通过右侧边栏提供可视化的公式调色板，用户只需点击分数、求和或矩阵等按钮，即可在光标处插入对应的 LaTeX 代码。每个按钮都会显示其背后的具体语法，帮助用户在点击中逐步熟悉 LaTeX 结构，无需死记硬背即可构建数学表达式。

典型场景包括快速构建复杂矩阵或填充逻辑符号。例如，当你需要插入一个 3x3 矩阵时，只需在调色板中选择行列数和括号样式，插件会自动生成模板；或者在编写逻辑命题时，点击“不等于”按钮，插件会根据光标位置智能判断左右两侧是否需要填充空位，直接生成 `$□ \neq □$` 或 `$2+2 \div □$` 等结构，极大简化了输入过程。

该插件的核心特色在于其“无侵入性”与“智能适配”。笔记中仅存储标准的 `$…$` 和 `$$…$$` 纯文本 LaTeX，即使禁用插件，公式依然正常显示，保证了数据的长期兼容性。此外，它不占用默认快捷键，也不干扰直接输入 LaTeX 的用户。其智能槽位机制能根据上下文自动调整空位数量，例如在已有数字后仅添加右侧空位，避免了手动调整模板的繁琐。

使用前需注意，该插件主要面向桌面端优化，且要求 Obsidian 版本在 1.7.2 及以上。它不适合需要高度自定义快捷键或完全依赖键盘盲打的专业 LaTeX 用户，因为其主要交互方式是鼠标点击。如果你已经非常熟练地直接键入 LaTeX 代码，或者对插件的视觉界面有排斥感，可能不需要安装此工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


