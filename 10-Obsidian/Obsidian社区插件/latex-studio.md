---
uid: 1791709367979000
title: 'Obsidian 插件：LaTeX Studio'
tags: ['图片与PDF', '学术与科研', '编辑工具', '第三方工具集成', 'obsidian插件']
description: 'Edit complete LaTeX projects, compile them locally, inspect diagnostics, and preview PDFs. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：LaTeX Studio

> [!Note] 插件名片
> - 插件名称：LaTeX Studio
> - 插件作者：BrookZeng
> - 插件说明：Edit complete LaTeX projects, compile them locally, inspect diagnostics, and preview PDFs. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '学术与科研', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/brookzeng2023/obsidian-latex-studio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-studio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/brookzeng2023/obsidian-latex-studio/master/README.md)



## 概述

**1. 主要功能**
LaTeX Studio 将 Obsidian 桌面端转化为专注的 LaTeX 工作区。它支持完整编辑 `.tex`、`.sty` 和 `.cls` 文件，通过本地引擎（`latexmk` 或 Tectonic）编译，提供源码行级错误诊断、跳转至首个错误功能，并在编辑器旁实时预览生成的 PDF。

**2. 适用场景**
适用于需要在 Obsidian 中直接撰写、编译和校对学术论文、技术文档等 LaTeX 项目的用户，特别是希望实现“编辑-编译-预览”无缝闭环的研究者或学生。

**3. 核心特色**
*   **双后端支持**：兼容 `latexmk` 和 Tectonic，采用安全的参数化执行。
*   **智能编译**：支持保存时防抖自动编译，跳过未变更源码，合并构建期间的编辑，避免重复构建。
*   **沉浸式体验**：提供 Overleaf 风格的侧边栏布局，PDF 预览面板保持页面和缩放状态，不随刷新重置。
*   **精准诊断**：解析文件/行号错误，支持快速定位问题。

**4. 使用建议**
*   **环境准备**：确保 Obsidian 版本为 1.8+（桌面端），且系统 `PATH` 中已配置 `latexmk` 或 Tectonic。
*   **操作技巧**：使用编辑器工具栏按钮或命令面板中的“Toggle PDF preview”开关 PDF 面板；手动编译会强制全新构建，而自动编译更智能高效。
*   **安全提示**：编译在本地执行，仅编译您信任的项目，以防 LaTeX 引擎读取非预期文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


