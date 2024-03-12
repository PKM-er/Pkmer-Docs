---
uid: 20240312193744
title: Obsidian 插件：【Readme】Fix Require Modules
tags: ['obsidian插件', 'readme']
description: 修复了对内置模块的`require()`调用
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fix Require Modules

> [!Note] 插件名片
> - 插件名称：Fix Require Modules
> - 插件作者：mnaoumov
> - 插件说明：修复了对内置模块的 `require()` 调用
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-fix-require-modules)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fix-require-modules)

## 概述

修复了对内置模块的 `require()` 调用

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-fix-require-modules/main/README.md)

---

## Readme(翻译）

下面是 [[fix-require-modules]] 插件的自述翻译

# 修复需要模块

这是一个用于 [Obsidian](https://obsidian.md/) 的插件，用于修复一些内置模块的 `require()` 调用。

这些内置模块在插件开发过程中可以导入，但如果您尝试从 `DevTools Console`、`Templater` 脚本、`dataviewjs` 脚本等中使用 `require()` 调用它们，则会显示 `Uncaught Error: Cannot find module` 错误。

当前插件修复了这个问题，并使以下 `require()` 调用正常工作。

```js
require("obsidian");
require("@codemirror/autocomplete");
require("@codemirror/collab");
require("@codemirror/commands");
require("@codemirror/language");
require("@codemirror/lint");
require("@codemirror/search");
require("@codemirror/state");
require("@codemirror/text");
require("@codemirror/view");
require("@lezer/common");
require("@lezer/lr");
require("@lezer/highlight");
```

## 安装

- `Fix Require Modules` 尚未在 [官方社区插件仓库](https://obsidian.md/plugins) 上提供。
- Beta 版本可以通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装。

## 许可证

 © [Michael Naumov](https://github.com/mnaoumov/)
