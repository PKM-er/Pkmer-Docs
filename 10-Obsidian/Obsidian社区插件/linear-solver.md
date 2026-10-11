---
uid: 1791709368024000
title: 'Obsidian 插件：Linear Solver'
tags: ['数据处理', '图表与可视化', '编程与脚本', '数据分析', 'obsidian插件']
description: 'Solve GMPL linear programs and visualize two-variable feasible regions. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Linear Solver

> [!Note] 插件名片
> - 插件名称：Linear Solver
> - 插件作者：feror
> - 插件说明：Solve GMPL linear programs and visualize two-variable feasible regions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '图表与可视化', '编程与脚本', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/feror-botmaker/Obsidian-Linear-Solver)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linear-solver)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/feror-botmaker/Obsidian-Linear-Solver/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 的代码块中编写 GMPL/MathProg 线性规划模型，并在阅读视图直接显示求解结果。对于二元模型，还能生成随主题变化的可行域可视化图表。

**2. 适用场景**
适用于需要快速验证线性规划问题的场景，如运筹学作业、资源分配优化、生产计划及数学建模练习。特别适合希望在不离开笔记环境的情况下，即时查看变量值、目标函数值及约束松弛情况的场景。

**3. 核心特色**
*   **原生集成**：直接嵌入 Obsidian，支持 `gmpl`、`mathprog` 等代码围栏。
*   **可视化**：自动绘制二元线性规划的可行域图形，直观展示约束边界。
*   **详细报告**：输出目标值、变量状态、约束活动量及松弛量。
*   **严格解析**：仅支持标量变量、线性算术及基础约束，对不支持的索引集或非线性项会给出精确的解析错误，避免误读。

**4. 使用建议**
*   在笔记中使用 ```gmpl 代码块编写模型，确保变量为标量且约束为线性。
*   目前不支持索引集合、求和或非线性项，复杂模型需先简化或分步处理。
*   开发者可通过 `npm run dev` 进行本地调试，普通用户建议直接安装运行时文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


