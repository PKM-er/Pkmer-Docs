---
uid: 1791709365326000
title: 'Obsidian 插件：ANSI Viewer'
tags: ['编程与脚本', '样式与美化', '效率工具', 'obsidian插件']
description: 'Render ANSI-formatted terminal output in code blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ANSI Viewer

> [!Note] 插件名片
> - 插件名称：ANSI Viewer
> - 插件作者：Adam Jacobson
> - 插件说明：Render ANSI-formatted terminal output in code blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adamjacobson/obsidian-ansi-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ansi-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adamjacobson/obsidian-ansi-viewer/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 的代码块中渲染 ANSI 格式的终端输出，将带有颜色代码的文本以类似终端的效果显示，支持直接粘贴 iTerm2 等终端复制的内容。

**2. 适用场景**
适用于需要记录终端日志、调试输出或命令执行结果的场景。特别适合从 iTerm2 等终端工具中复制带颜色的文本并保存至笔记的用户。

**3. 核心特色**
- **高保真渲染**：支持几乎所有 ANSI 控制代码，包括多行格式和 iTerm2 特有的控制序列。
- **主题自适应**：默认匹配当前 Obsidian 主题，也可配置自定义的深色/浅色模式及颜色。
- **灵活配置**：可区分处理真实转义序列与字符串表示的转义序列（如 `\x1b`），支持按块指定解析模式。

**4. 使用建议**
在笔记中创建代码块，首行指定语言为 `ansi`，随后粘贴终端输出即可。若粘贴的是字符串形式的转义码（如 `\x1b`），请确保插件设置中启用了“将字符串转义序列转换为字面转义序列”选项，或在代码块中使用 `esc_string` 关键字指定解析方式，以确保颜色正确显示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


