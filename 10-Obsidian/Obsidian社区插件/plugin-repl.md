---
uid: 2025042920511857
title: Obsidian 插件：Plugin REPL
tags: ['编程与脚本', '自动化与AI', '效率工具', 'obsidian插件']
description: 在你的笔记里用 JavaScript 脚本创建自动化操作。超轻量级插件，能访问插件 API，可快速迭代进行插件开发。这可是受 Emacs 启发搞出来的哦！
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plugin REPL

> [!Note] 插件名片
> - 插件名称：Plugin REPL
> - 插件作者：readwithai
> - 插件说明：在你的笔记里用 JavaScript 脚本创建自动化操作。超轻量级插件，能访问插件 API，可快速迭代进行插件开发。这可是受 Emacs 启发搞出来的哦！
> - 插件分类：['编程与脚本', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/talwrii/plugin-repl)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-repl)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/talwrii/plugin-repl/master/README.md)

![Plugin REPL](https://cdn.pkmer.cn/covers/plugin-repl_2_0.gif!pkmer)

## 概述

Plugin REPL 是一款为 Obsidian 设计的轻量级 JavaScript 脚本自动化插件，灵感来源于 Emacs 的 REPL（读取-求值-输出循环）模式，允许用户直接在笔记中编写并执行 JavaScript 代码，快速实现任务自动化。该插件提供了丰富的便捷函数（如文件操作、编辑器控制、命令定义等）和直接访问 Obsidian API（通过 `app`、`editor`、`repl` 对象），支持快速测试和迭代插件功能而无需重启。主要适用于插件开发原型设计、轻量脚本编写（如文本处理、命令扩展）或结合 Dataview/Templater 等插件增强工作流。它能解决传统插件开发流程繁琐的问题，通过即时执行代码简化自动化操作，例如动态插入内容、批量文件处理或自定义快捷键命令。用户可通过 `repl.md` 文件配置启动脚本，并支持异步代码和模块导入（需配合 [plugin-repl-imports](https://github.com/talwrii/plugin-repl-imports)）。插件通过社区商店或手动安装，适合需要灵活扩展 Obsidian 功能的中高级用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



