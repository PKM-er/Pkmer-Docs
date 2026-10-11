---
uid: 1791709369394000
title: 'Obsidian 插件：Quadrant Chart'
tags: ['图表与可视化', '数据处理', '编辑工具', 'obsidian插件']
description: 'Draw labelled N x M quadrant charts with free-floating text, stored as plain-YAML .mdx files you can also edit by hand or with a script. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Quadrant Chart

> [!Note] 插件名片
> - 插件名称：Quadrant Chart
> - 插件作者：rosswang
> - 插件说明：Draw labelled N x M quadrant charts with free-floating text, stored as plain-YAML .mdx files you can also edit by hand or with a script. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/quadrant-chart)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quadrant-chart)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/quadrant-chart/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 中绘制带标签的 N×M 象限图（支持 1×1 至 12×12 网格）。支持自定义坐标轴名称、范围及刻度，并在图表任意位置添加自由浮动文本。数据以纯 YAML 格式存储于 `.mdx` 文件的 Frontmatter 中，支持手动编辑或脚本生成，并可将图表导出为 JPG/PNG 图片。

**2. 适用场景**
适用于需要可视化分类数据的场景，如 SWOT 分析、人才九宫格、项目优先级矩阵等。特别适合需要长期维护、版本控制（Git diff 友好）或通过自动化脚本批量生成图表的知识管理流程。

**3. 核心特色**
*   **纯文本存储**：图表数据为纯 YAML，可读性强，易于通过脚本生成或手动修改，且与笔记正文分离，互不干扰。
*   **灵活布局**：文本标签不绑定特定象限，可自由拖拽、编辑，支持背景板、描边等样式调整，重叠标签可通过点击或层级命令管理。
*   **完整交互**：支持撤销/重做，内置 SWOT 和人才九宫格模板，提供轴旁注释功能以解释数据含义。

**4. 使用建议**
建议通过命令面板创建空白图表或从示例模板开始。利用其脚本化特性，可编写脚本自动更新图表数据。注意图表仅保存 Frontmatter 部分，下方的自由文本由用户自行管理，适合结合 Git 进行版本追踪。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


