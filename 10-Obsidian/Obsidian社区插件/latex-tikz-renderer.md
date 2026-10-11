---
uid: 1791709367968000
title: 'Obsidian 插件：LaTeX and TikZ Renderer'
tags: ['图表与可视化', '学术与科研', '编辑工具', 'obsidian插件']
description: 'Render LaTeX and TikZ diagrams locally using your system TeX installation with support for any package. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX and TikZ Renderer

> [!Note] 插件名片
> - 插件名称：LaTeX and TikZ Renderer
> - 插件作者：Agostino Cesarano
> - 插件说明：Render LaTeX and TikZ diagrams locally using your system TeX installation with support for any package. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '学术与科研', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/agostino-code/obsidian-tikz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-tikz-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/agostino-code/obsidian-tikz/master/README.md)



## 概述

**1. 主要功能**
该插件利用本地安装的 LaTeX 环境（如 MiKTeX、TeX Live），在 Obsidian 笔记中直接渲染任意 LaTeX 公式和 TikZ 图表。它调用系统原生 TeX 编译器，支持所有本地已安装的宏包，突破了 WebAssembly 方案的包支持限制。

**2. 适用场景**
适用于需要绘制复杂矢量图（如电路图、化学结构、数学函数图、树状图）的用户，特别是依赖特定专业宏包（如 `circuitikz`、`chemfig`、`pgfplots`）的学术写作或技术文档场景。仅限桌面端使用。

**3. 核心特色**
*   **零样板代码**：直接编写 TikZ 环境，插件自动处理文档头。
*   **全生态支持**：无包限制，只要本地安装了即可使用。
*   **智能主题适配**：自动根据 Obsidian 主题调整图表颜色（黑白反转）。
*   **高性能缓存**：编译为 SVG 并缓存，重开笔记即时加载。
*   **诊断工具**：内置环境检测按钮及清晰的错误日志提示。

**4. 使用建议**
使用前请确保系统已正确安装 LaTeX 发行版及 `dvisvgm` 工具。建议先在设置中点击“Test Toolchain”验证环境。若遇到宏无限循环，插件具备超时保护机制防止卡死。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


