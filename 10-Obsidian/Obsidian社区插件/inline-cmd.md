---
uid: 1791709367795000
title: 'Obsidian 插件：Inline Commands'
tags: ['自定义命令', '编辑工具', '效率工具', 'obsidian插件']
description: 'Plugin to execute commands and insert content inline - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Commands

> [!Note] 插件名片
> - 插件名称：Inline Commands
> - 插件作者：Simon Hoque
> - 插件说明：Plugin to execute commands and insert content inline - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自定义命令', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/simon-th/obsidian-inline-cmd)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-cmd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/simon-th/obsidian-inline-cmd/master/README.md)



## 概述

**1. 主要功能**
Inline Commands 是一款 Obsidian 插件，允许用户在笔记中通过输入 `%` 触发命令，执行操作并直接插入格式化内容。它支持基于上下文的建议下拉菜单，可将原始文本转换为特定的嵌入块或引用链接。

**2. 适用场景**
适用于需要快速记录并格式化外部资源链接的场景，特别是 GitHub Pull Request 的管理。适合开发者在每日笔记中粘贴 PR 链接，自动生成美观的引用，并在后续笔记中嵌入该引用，实现笔记间的无缝关联。

**3. 核心特色**
- **内联执行**：直接在笔记编辑流中触发，无需离开编辑器。
- **智能建议**：根据输入内容提供动态命令建议，如“无操作”或“粘贴所有可用命令”。
- **GitHub 集成**：默认支持将 GitHub PR URL 转换为标准的 Obsidian 块引用格式，简化了代码审查记录的创建过程。
- **可扩展语法**：支持 `cmd;arg1;arg2` 语法，便于自定义命令逻辑。

**4. 使用建议**
- 在笔记任意位置输入 `%` 激活功能。
- 对于 GitHub PR，输入 `%pr;{URL};{描述}` 可快速生成引用链接。
- 若不确定可用命令，可使用默认建议中的“Paste all available commands”查看完整命令列表。
- 注意：该插件未经 Obsidian 官方人工审核，建议谨慎使用或备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


