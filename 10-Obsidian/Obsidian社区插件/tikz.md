---
uid: 1791709370434000
title: 'Obsidian 插件：TikZ'
tags: ['图表与可视化', '编程与脚本', '第三方工具集成', 'obsidian插件']
description: 'Render TikZ code blocks with your locally installed TeX distribution (TeX Live, MacTeX, MiKTeX) instead of a browser WASM engine. Full TikZ, real compiler logs, transparent caching. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TikZ

> [!Note] 插件名片
> - 插件名称：TikZ
> - 插件作者：dingzy53
> - 插件说明：Render TikZ code blocks with your locally installed TeX distribution (TeX Live, MacTeX, MiKTeX) instead of a browser WASM engine. Full TikZ, real compiler logs, transparent caching. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编程与脚本', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dingzy53/obsidian-tikz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tikz)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dingzy53/obsidian-tikz/master/README.md)



## 概述

**插件名称**：TikZ

**主要功能**
该插件利用本地安装的 TeX 发行版（如 TeX Live、MacTeX 或 MiKTeX）渲染 Obsidian 中的 ` ```tikz ` 代码块。它通过调用本地编译器而非浏览器 WASM 引擎，生成高质量的矢量图形。

**适用场景**
适用于使用 Obsidian 桌面版（Windows、macOS、Linux）的用户，特别是需要绘制复杂数学图表、科学示意图或工程图形的场景。不支持移动端。

**核心特色**
1. **原生渲染**：直接调用本地 TeX 编译器，支持完整的 TikZ 功能，渲染效果精准且无浏览器引擎限制。
2. **透明缓存与日志**：提供真实的编译器日志，便于调试错误；采用透明缓存机制提升加载速度。
3. **兼容性强**：保留旧版插件的设置结构，支持标准文档、裸片段等多种代码格式；自动适配 Linux Flatpak 环境。

**使用建议**
1. **前置安装**：确保系统已安装包含 `dvisvgm` 工具的 TeX 发行版。Linux 用户需额外安装 `texlive-pictures` 等依赖包。
2. **手动安装**：从 GitHub Release 下载 `main.js`、`manifest.json` 和 `styles.css`，放入 `.obsidian/plugins/tikz/` 目录后启用。
3. **调试技巧**：若渲染失败，请查看插件提供的编译器日志以定位语法或包缺失问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


