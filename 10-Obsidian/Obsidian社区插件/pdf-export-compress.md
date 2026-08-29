---
uid: 1786577077641002
title: 'Obsidian 插件：Export PDF Compress'
tags: ['图片与PDF', '文字处理', '发布工具', '编程与脚本', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export PDF Compress

> [!Note] 插件名片
> - 插件名称：Export PDF Compress
> - 插件作者：hunter00zb
> - 插件说明：
> - 插件分类：['图片与PDF', '文字处理', '发布工具', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hunter00zb/pdf-export-compress)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-export-compress)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hunter00zb/pdf-export-compress/master/README.md)



## 概述

### 主要功能
将 Markdown 笔记导出为 PDF，支持图片自动压缩，可调整 JPEG 质量和最大宽度，支持 SVG 图片渲染，能解析 Obsidian 维基链接和标准 Markdown 图片，完整解析表格、代码块、列表等，自动去除 YAML Frontmatter。

### 适用场景
适用于 macOS 系统下，Obsidian 用户需要将 Markdown 笔记导出为体积较小、渲染效果好的 PDF 文件的场景。

### 核心特色
使用 Python（reportlab + Pillow）渲染引擎，不依赖浏览器，能精确控制图片质量，可靠渲染中文字体，生成的 PDF 文件体积显著更小，自动注册 macOS 系统字体。

### 使用建议
1. 确保已安装 Python 3 及 `reportlab`、`Pillow` 和 `resvg-py`。
2. 从 GitHub Releases 下载插件并解压到指定目录，在 Obsidian 中启用。
3. 打开 Markdown 文件，通过右键或命令面板执行导出操作，设置保存位置、图片质量和最大宽度。
4. 若使用 Excalidraw 图，需先导出为 PNG 或 SVG 再进行导出。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


