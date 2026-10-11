---
uid: 1791709368974000
title: 'Obsidian 插件：Onyx'
tags: ['编辑工具', '编程与脚本', '效率工具', 'obsidian插件']
description: 'Edit source files with CodeMirror 6 and language servers, without leaving the app. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Onyx

> [!Note] 插件名片
> - 插件名称：Onyx
> - 插件作者：Jesse
> - 插件说明：Edit source files with CodeMirror 6 and language servers, without leaving the app. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/biehenjia/onyx)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?onyx)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/biehenjia/onyx/master/README.md)



## 概述

**1. 主要功能**
Onyx 允许用户在 Obsidian 内直接编辑源代码文件，集成 CodeMirror 6 编辑器与语言服务器（LSP）支持，无需切换至外部 IDE。

**2. 适用场景**
专为桌面端用户设计，适用于需要在笔记软件中快速查看、修改代码或数据文件，且希望保持工作流不中断的开发者。

**3. 核心特色**
*   **完整 LSP 支持**：提供语法高亮、代码补全、诊断、悬停信息及跳转定义。
*   **代码导航**：右侧侧边栏显示嵌套代码大纲，编辑器顶部展示当前命名空间/类/函数链面包屑。
*   **工程化配置**：通过项目根目录的 `onyx.toml` 显式配置语言服务器命令，不自动猜测路径或版本，确保环境可控。
*   **辅助功能**：支持多编辑器同步、Git 状态提示及可配置自动保存。

**4. 使用建议**
*   仅在桌面端使用。
*   手动创建 `onyx.toml` 文件以精确指定语言服务器启动命令（如 `clangd`）。
*   首次配置后，务必使用“Trust current project's language server”命令审查并信任显示的执行命令，以确保安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


