---
uid: 1793625613639000
title: "Obsidian 插件：Helix Motions"
tags: ["编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Edit notes with Helix keys, selections and multiple cursors, configured with your Helix config. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Helix Motions

> [!Note] 插件名片
> - 插件名称：Helix Motions
> - 插件作者：kote-pdj
> - 插件说明：Edit notes with Helix keys, selections and multiple cursors, configured with your Helix config. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kosyakssss/helix-motions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?helix-motions)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kosyakssss/helix-motions/master/README.md)



## 概述

Helix Motions 将 Helix 编辑器的核心编辑体验完整移植到 Obsidian 中。它复刻了 Helix 的键位映射、选区逻辑、多光标操作、寄存器、宏以及撤销树等机制。插件直接读取你现有的 `helix.toml` 配置文件，让你无需重新学习，即可在笔记中使用熟悉的 Helix 操作习惯，实现高效、一致的文本编辑体验。

对于习惯 Helix 工作流的用户，该插件能无缝衔接日常笔记编辑。例如，你可以使用正则表达式一次性选中多个匹配项并进行批量修改，或者利用语法树感知的命令（如 `Alt-o`）快速扩展选区至整个代码块或段落。此外，插件还整合了 Obsidian 特有功能，如通过 `Space s` 快速跳转至笔记标题或库内标题，以及使用 `gd` 跟随链接，使编辑与导航操作更加流畅。

与常见的 Vim 插件不同，Helix Motions 并非简单模拟 Vim 行为，而是直接移植了 Helix 的底层引擎。它使用 Helix 原生的正则引擎和 tree-sitter 语法解析器，确保行为与真实 Helix 编辑器完全一致。插件经过约 34,000 个键序列的自动化测试，保证在 Obsidian 中的文本状态、选区和模式与 Helix 严格匹配，提供了极高的可靠性和一致性。

使用前请注意，该插件仅支持桌面版 Obsidian，且需要关闭 Obsidian 原生的 Vim 键位绑定及其他 Vim 插件以避免冲突。由于架构限制，插件不支持需要 Shell 访问或语言服务器（LSP）的功能，如 `:sh` 命令或代码调试。如果你依赖这些高级开发功能，或者主要使用移动端 Obsidian，该插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


