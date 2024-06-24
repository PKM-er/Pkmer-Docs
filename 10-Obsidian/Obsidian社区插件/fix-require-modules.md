---
uid: 2024052909070331
title: Obsidian 插件：Fix Require Modules
tags: ['第三方工具集成', '编辑工具', 'obsidian插件']
description: 修复了对内置模块的`require()`调用
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fix Require Modules

> [!Note] 插件名片
> - 插件名称：Fix Require Modules
> - 插件作者：mnaoumov
> - 插件说明：修复了对内置模块的 `require()` 调用
> - 插件分类：[' 第三方工具集成 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-fix-require-modules)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fix-require-modules)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-fix-require-modules/main/README.md)

## 概述

插件名称：Fix Require Modules

描述：该插件适用于 Obsidian，修复了对一些内置模块的 `require()` 调用。

功能：修复在插件开发中可以导入但在 `DevTools Console`、`Templater` 脚本、`dataviewjs` 脚本等中使用 `require()` 时出现 `Uncaught Error: Cannot find module` 错误的问题。

使用场景：使以下 `require()` 调用正常工作：

- `obsidian`
- `@codemirror/autocomplete`
- `@codemirror/collab`
- `@codemirror/commands`
- `@codemirror/language`
- `@codemirror/lint`
- `@codemirror/search`
- `@codemirror/state`
- `@codemirror/text`
- `@codemirror/view`
- `@lezer/common`
- `@lezer/lr`
- `@lezer/highlight`

安装方式：可通过 [Beta Release](https://github.com/TfTHacker/obsidian42-brat) 安装。

作者：[Michael Naumov](https://github.com/mnaoumov/)

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



