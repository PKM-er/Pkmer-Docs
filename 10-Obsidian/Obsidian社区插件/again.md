---
uid: 1791709365212000
title: 'Obsidian 插件：Again'
tags: ['快捷键', '效率工具', '自定义命令', 'obsidian插件']
description: 'Repeat the previous command - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Again

> [!Note] 插件名片
> - 插件名称：Again
> - 插件作者：Aaron Bell
> - 插件说明：Repeat the previous command - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['快捷键', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cmptr/obsidian-again)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?again)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cmptr/obsidian-again/master/README.md)



## 概述

**1. 主要功能**
Again 插件允许用户重复执行最近一次运行的 Obsidian 命令。它通过快捷键触发，实现类似 Vim 中 `.` 命令的“重复上一操作”功能，提升操作效率。

**2. 适用场景**
适用于需要频繁执行相同命令的场景，例如连续对多个文件执行“重命名”、“插入模板”或“切换主题”等操作，减少重复打开命令面板或手动点击的繁琐步骤。

**3. 核心特色**
- **会话记忆**：仅记住当前会话中的最后一条可重复命令，连续按下快捷键可多次执行同一命令。
- **状态栏反馈**：桌面端状态栏显示当前记住的命令（支持隐藏、仅图标或图标+名称），直观展示当前状态。
- **智能过滤**：自动忽略“Previous”命令、临时 UI 启动器及内部调用，避免记忆污染。
- **跨平台支持**：移动端完全支持，桌面端提供额外的状态栏可视化。

**4. 使用建议**
- 安装后务必在“设置 → 快捷键”中为 **Again: Previous** 分配一个易按的快捷键（如 `Ctrl+Shift+.`）。
- 注意该插件通过内部 API 实现，Obsidian 版本更新后可能需更新插件以维持兼容性。
- 若命令未生效，请检查该命令是否属于不可重复类型（如绕过内部执行路径的命令）。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


