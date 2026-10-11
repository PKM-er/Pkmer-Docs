---
uid: 1791709369248000
title: 'Obsidian 插件：Plot'
tags: ['图表与可视化', '数据分析', '学习与教育', 'obsidian插件']
description: 'Interactive 2D/3D math equation plotter with UI - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plot

> [!Note] 插件名片
> - 插件名称：Plot
> - 插件作者：zmattew
> - 插件说明：Interactive 2D/3D math equation plotter with UI - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据分析', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zmattew/obsidian-plot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plot)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zmattew/obsidian-plot/master/README.md)



## 概述

**主要功能**
Plot 插件允许用户在 Obsidian 笔记中直接创建交互式的 2D 曲线和 3D 表面图形。它支持通过 JSON 代码块或模态框界面定义数学方程，利用 WebGL 进行高性能渲染，并具备 Canvas2D 回退机制。

**适用场景**
适合数学、物理及工程领域的学习者与研究者，用于在笔记中直观展示函数图像、向量场、参数方程及几何结构，辅助理论推导与概念理解。

**核心特色**
1. **高自由度渲染**：支持线框、实体表面及点云三种模式，可自定义分辨率、网格及相机视角。
2. **动态交互**：内置可调变量滑块，支持实时观察参数变化对图形的影响；可添加点、向量及分段函数。
3. **矢量场可视化**：支持 2D/3D 矢量场绘制，箭头密度可调。
4. **灵活编辑**：既可通过可视化控件操作，也可直接编辑 JSON 代码；支持 LaTeX 标签渲染及键盘快捷键控制。

**使用建议**
1. **安装**：将插件文件放入 `.obsidian/plugins/plot/` 目录并在设置中启用。
2. **快速上手**：通过命令面板选择“Create new graph”生成模板，或手动插入 `math-plot` 代码块。
3. **配置技巧**：利用 `var` 类型定义可调参数，结合 `fn` 类型绘制函数，通过调整 `resolution` 平衡精度与性能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


