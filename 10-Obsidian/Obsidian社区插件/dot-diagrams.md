---
uid: 1791709366597000
title: 'Obsidian 插件：DOT Diagrams'
tags: ['图表与可视化', '编程与脚本', '样式与美化', 'obsidian插件']
description: '在笔记中将 Graphviz DOT 代码块渲染为图表，完全离线运行，并支持根据主题自动适配颜色。- 此插件尚未经过 Obsidian 官方人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DOT Diagrams

> [!Note] 插件名片
> - 插件名称：DOT Diagrams
> - 插件作者：theluckystrike
> - 插件说明：在笔记中将 Graphviz DOT 代码块渲染为图表，完全离线运行，并支持根据主题自动适配颜色。- 此插件尚未经过 Obsidian 官方人工审核。
> - 插件分类：['图表与可视化', '编程与脚本', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/dot-diagrams)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dot-diagrams)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/dot-diagrams/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 笔记中直接渲染 Graphviz DOT 代码块为 SVG 图表。它完全离线运行，无需安装外部 Graphviz 软件或依赖服务器，支持桌面端和移动端。

**2. 适用场景**
适用于需要在笔记中展示流程图、架构图、依赖关系图等结构化数据的场景。特别适合需要频繁编辑图表、切换主题查看效果，或希望将图表直接复制粘贴到演示文稿中的用户。

**3. 核心特色**
*   **完全离线与隐私安全**：布局引擎以 WebAssembly 形式内置于插件中，数据永不离开设备。
*   **主题自适应**：自动读取当前 Obsidian 主题的文字、线条和填充颜色，背景透明，切换主题时图表自动重绘。
*   **实时预览与交互**：在实时预览（Live Preview）和阅读视图中均可渲染，编辑时即时更新。
*   **友好错误提示**：语法错误时显示红色框并指出具体行号和错误信息。
*   **便捷导出**：悬停图表可出现按钮栏，支持一键复制浅色背景 SVG 以便粘贴至幻灯片。

**4. 使用建议**
在代码块中使用 `dot` 或 `graphviz` 作为语言标识符。若需自定义颜色，在 DOT 源码中显式设置（如 `color=red`）可覆盖主题默认值。建议在编写复杂图表时利用其行号报错功能快速定位语法问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


