---
uid: "1791709367967000"
title: "Obsidian 插件：Latest MathJax"
tags: ['第三方工具集成', '样式与美化', '学习与教育', 'obsidian插件']
description: "Render math with a bundled, up-to-date MathJax 4 engine, without replacing Obsidian's built-in MathJax. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Latest MathJax

> [!Note] 插件名片
> - 插件名称：Latest MathJax
> - 插件作者：华佳浩
> - 插件说明：Render math with a bundled, up-to-date MathJax 4 engine, without replacing Obsidian's built-in MathJax. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '样式与美化', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danlingdan/fastMathJax)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latest-mathjax)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danlingdan/fastMathJax/master/README.md)



## 概述

**主要功能**
该插件为 Obsidian 捆绑并集成最新的 MathJax 4 引擎，用于渲染数学公式。默认情况下，它与 Obsidian 内置的旧版 MathJax 并行运行，互不干扰；也可启用实验性的“侵入模式”来接管原生渲染入口，从而覆盖所有显示场景。

**适用场景**
适用于需要支持最新 TeX 宏包、依赖上游 Bug 修复或追求更佳字体处理效果的数学笔记场景。特别适合在 Obsidian 内置引擎更新滞后时，希望获得更现代、更稳定数学渲染体验的用户。

**核心特色**
1. **版本独立**：内置最新 MathJax 4，无需等待官方更新。
2. **完全隔离**：默认不修改全局变量，确保与内置功能兼容，降低冲突风险。
3. **Preamble 支持**：允许在库中创建 `.tex` 文件定义宏，支持热重载，修改即时应用于所有笔记。
4. **全面覆盖**：支持阅读视图和实时预览，侵入模式可进一步覆盖悬停预览和嵌入内容。

**使用建议**
建议普通用户保持默认设置，以确保稳定性。若需统一所有界面（包括悬停提示）的渲染效果，可谨慎启用侵入模式。对于频繁使用自定义宏的用户，利用 Preamble 文件管理宏定义可显著提升工作流效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

