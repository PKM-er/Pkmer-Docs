---
uid: 1791709370162000
title: 'Obsidian 插件：Sudoku'
tags: ['表格', '样式与美化', '学习与教育', 'obsidian插件']
description: 'Render Sudoku puzzles directly inside Obsidian notes - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sudoku

> [!Note] 插件名片
> - 插件名称：Sudoku
> - 插件作者：diyufeng
> - 插件说明：Render Sudoku puzzles directly inside Obsidian notes - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '样式与美化', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/diyufeng/obsidian-sudoku)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sudoku)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/diyufeng/obsidian-sudoku/master/README.md)



## 概述

**主要功能**
该插件允许用户在 Obsidian 笔记中直接渲染数独谜题。通过编写 `sudoku` 代码块，即可生成带有粗宫格边框、行列标签及单元格排版的美化 9x9 网格。

**适用场景**
适合数独爱好者在笔记中记录解题过程、分享谜题或进行逻辑推理练习。也适用于需要可视化展示数独状态（如给定数、错误尝试、候选数）的场景。

**核心特色**
1. **代码块渲染**：机制类似 Mermaid，使用 ```sudoku 围栏即可触发。
2. **灵活定制**：支持三种尺寸（小/中/大）、标题、难度及背景切换等元数据配置。
3. **状态标记**：区分给定数（黑）、正确答案（蓝）、错误尝试（红），支持橙色高亮关键格。
4. **候选数显示**：使用 `{123}` 语法渲染 3x3 迷你网格，直观展示铅笔候选数。
5. **视觉优化**：支持交替宫格背景色、行列标签，并自动适配明暗主题。
6. **便捷插入**：提供命令面板模板，一键插入可编辑的数独代码块。

**使用建议**
1. 安装后，在笔记中输入 ```sudoku 并回车，即可开始编写。
2. 利用 `#key: value` 行设置标题、难度或背景开关。
3. 使用 `{数字}` 语法标记候选数，利用颜色区分解题状态，提升复盘效率。
4. 建议配合“插入模板”命令快速生成代码骨架，减少手动输入错误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


