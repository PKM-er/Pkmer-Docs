---
uid: 1791709366085000
title: 'Obsidian 插件：Cmd Color'
tags: ['样式与美化', '编程与脚本', '界面优化', 'obsidian插件']
description: 'Rainbow-colors each argument of shell commands in cmd/command code blocks, in both reading view and the editor. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cmd Color

> [!Note] 插件名片
> - 插件名称：Cmd Color
> - 插件作者：htlife
> - 插件说明：Rainbow-colors each argument of shell commands in cmd/command code blocks, in both reading view and the editor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编程与脚本', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/htlife/obsidian-plugin-cmd-color)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cmd-color)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/htlife/obsidian-plugin-cmd-color/master/README.md)



## 概述

**1. 主要功能**
Cmd Color 插件专为 Obsidian 中的 `cmd` 或 `command` 代码块设计，能像 VS Code 的 Rainbow CSV 插件那样，为 Shell 命令中的每个参数分配不同的颜色。它支持阅读视图、实时预览及源码编辑模式，通过视觉区分提升代码可读性。

**2. 适用场景**
适用于编写包含复杂 Shell 命令、ROS2 指令或系统操作脚本的技术文档、学习笔记及开发指南，特别是当命令参数众多、需要清晰区分不同选项时。

**3. 核心特色**
- **彩虹配色**：8 色循环区分参数，命令名加粗，标志位（flags）斜体显示。
- **智能解析**：自动识别引号内的完整参数，支持反斜杠 `\` 续行保持颜色连贯，注释行自动变暗。
- **交互优化**：长命令自动换行，阅读视图下悬停即可复制命令。
- **高度定制**：支持通过 CSS 变量自定义调色板。

**4. 使用建议**
安装后，确保代码块语言标记为 `cmd` 或 `command`。若默认配色不合心意，建议创建 CSS 片段覆盖 `--rc-color-0` 至 `--rc-color-7` 变量以匹配个人偏好。该插件轻量且无依赖，适合所有需要频繁展示命令行操作的 Obsidian 用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


