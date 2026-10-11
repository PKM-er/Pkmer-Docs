---
uid: 1791709367872000
title: 'Obsidian 插件：JSON Toolkit'
tags: ['数据处理', '编辑工具', '编程与脚本', 'obsidian插件']
description: 'Format, minify, and manipulate JSON, JSONC, and JSON5 payloads with comments and flexible syntax support. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JSON Toolkit

> [!Note] 插件名片
> - 插件名称：JSON Toolkit
> - 插件作者：Henrique Manduca
> - 插件说明：Format, minify, and manipulate JSON, JSONC, and JSON5 payloads with comments and flexible syntax support. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/henriquemanduca/myjsonformatter-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?myjsonformatter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/henriquemanduca/myjsonformatter-plugin/master/README.md)



## 概述

**JSON Toolkit** 是一款轻量级 Obsidian 插件，专为 JSON 数据处理设计。

**主要功能**：支持对 JSON、JSONC 和 JSON5 格式进行格式化、压缩（Minify）及语法检查。提供“格式化选区”和“格式化光标下代码块”两种操作模式，能自动识别 Markdown 中的代码围栏。

**适用场景**：适用于开发者在笔记中调试 API 响应、配置参数或维护包含复杂数据结构的技术文档，特别适合需要频繁处理代码片段的场景。

**核心特色**：
1. **双引擎支持**：内置 JSONC 引擎（保留注释和尾随逗号，适合 VS Code 风格）和 JSON5 引擎（支持无引号键、单引号等宽松语法）。
2. **精准报错**：语法错误时提供精确的行号与列号提示。
3. **高度可定制**：支持调整缩进（空格/Tab）、键值排序及成功通知。
4. **高性能跨平台**：无原生依赖，包体小于 60KB，完美兼容桌面端及 iOS/Android 移动端。

**使用建议**：若需保留注释，请选择 JSONC 引擎；若处理宽松语法（如无引号键），请切换至 JSON5 引擎。建议在笔记中统一使用 ` ```json ` 等标准代码块标记，以便插件自动识别并格式化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


