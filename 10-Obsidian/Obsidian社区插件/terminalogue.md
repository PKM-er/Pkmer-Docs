---
uid: 1791709370383000
title: 'Obsidian 插件：Terminalogue'
tags: ['样式与美化', '编程与脚本', '界面优化', 'obsidian插件']
description: 'Turns termlogue code blocks into animated terminal sessions. Commands are never executed. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Terminalogue

> [!Note] 插件名片
> - 插件名称：Terminalogue
> - 插件作者：Yuichi Mizutani
> - 插件说明：Turns termlogue code blocks into animated terminal sessions. Commands are never executed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编程与脚本', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yumizu11/Terminalogue)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terminalogue)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yumizu11/Terminalogue/master/README.md)



## 概述

**主要功能**
Terminalogue 是一款将 Markdown 中的 `termlogue` 代码块转换为动态终端演示的插件。它模拟真实终端环境，逐字符显示命令输入（带有人类打字抖动效果），并逐行展示输出结果，支持播放、暂停、重启及调整倍速（1×/2×/4×/即时）。

**适用场景**
适用于技术文档、教程编写及演示文稿（如 Marp 幻灯片）。特别适合需要展示命令行操作过程但无需实际执行代码的场景，如安装软件、配置服务等步骤的可视化展示。

**核心特色**
1. **跨平台一致性**：同一代码块在 Obsidian、VS Code 和 Marp 中呈现完全一致的动画效果。
2. **高度可定制**：通过指令轻松切换五种内置终端主题（如 Ubuntu 风格）及固定终端视口大小。
3. **安全无风险**：仅进行视觉模拟，绝不执行任何实际命令，确保环境安全。
4. **交互友好**：支持一键复制命令，并提供配套的 Presenter 插件将笔记转化为演示文稿。

**使用建议**
建议在 Obsidian 的“阅读视图”中使用以获得最佳体验（实时预览支持尚在开发中）。编写时注意使用 `@title`、`@prompt` 等指令定义标题和提示符，利用 `@wait` 控制输出节奏。由于命令不会被执行，请确保模拟的输出内容准确反映真实操作结果，以避免误导读者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


