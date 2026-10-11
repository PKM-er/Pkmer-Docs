---
uid: 1791709367833000
title: 'Obsidian 插件：isokit'
tags: ['图表与可视化', '编程与脚本', '样式与美化', 'obsidian插件']
description: 'Render isokit YAML code blocks as isometric architecture diagrams (self-contained SVG). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：isokit

> [!Note] 插件名片
> - 插件名称：isokit
> - 插件作者：zeiosmb
> - 插件说明：Render isokit YAML code blocks as isometric architecture diagrams (self-contained SVG). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编程与脚本', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zeiosmb/isokit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?isokit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zeiosmb/isokit/master/README.md)



## 概述

**1. 主要功能**
isokit 是一个 Obsidian 插件，用于将 YAML 代码块渲染为自包含的 SVG 等轴测架构图。它采用纯 TypeScript 布局脚本，基于声明式注册表，自动处理网格对齐、连接、标注、箭头及图例，确保生成的图表视觉专业且无运行时依赖。

**2. 适用场景**
专为 AI 代理驱动的设计流程打造。适用于需要生成“Azure 营销风格”的高保真技术架构图场景，特别适合用户通过自然语言描述架构，由 AI 根据风格指南（STYLE.md）编写布局脚本并迭代优化的工作流。

**3. 核心特色**
*   **强制不变量**：网格违规、碰撞或溢出会直接导致生成失败，而非输出错误图表，为 AI 提供不可逾越的质量底线。
*   **对话式纠错**：错误信息设计为对话回合，便于 AI 自我修正。
*   **判断力优于算法**：不依赖自动布局算法，而是通过 AI 阅读风格指南进行视觉判断（如标注角度、标签清晰度），实现更高质量的呈现。
*   **自包含 SVG**：嵌入字体，无外部依赖，便于分享。

**4. 使用建议**
*   需 Node.js ≥ 23.6 环境。
*   建议配合 AI 代理使用，让 AI 参考仓库内的 `STYLE.md` 进行布局编写。
*   利用其严格的错误反馈机制，通过“描述-渲染-批评”的循环迭代，逐步优化图表细节。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


