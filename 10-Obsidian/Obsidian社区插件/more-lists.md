---
uid: 1791709368713000
title: 'Obsidian 插件：More Lists'
tags: ['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
description: 'Style ordered and nested lists with inline directives such as {A}, {i}, or {lower-greek}, in Reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：More Lists

> [!Note] 插件名片
> - 插件名称：More Lists
> - 插件作者：dorian-zh
> - 插件说明：Style ordered and nested lists with inline directives such as {A}, {i}, or {lower-greek}, in Reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dorian-zh/More-Lists)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?more-lists)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dorian-zh/More-Lists/master/README.md)



## 概述

**1. 主要功能**
More Lists 允许用户在 Obsidian 中自定义有序列表及嵌套列表的编号样式。通过在列表首项添加内联指令（如 `{A}`、`{i}`、`{01}`），即可在阅读视图和实时预览中渲染出对应的编号格式，同时保持笔记底层为纯 Markdown 文本。

**2. 适用场景**
适用于需要复杂层级结构、特定学术或法律格式（如罗马数字、希腊字母）的文档编写，特别适合撰写大纲、法规条文或结构化笔记时，需对不同层级列表进行差异化视觉呈现的场景。

**3. 核心特色**
- **灵活指令**：支持字母、罗马数字、前导零及任意 CSS `list-style-type` 命名值。
- **层级独立**：每个嵌套列表可独立设置样式，未指定指令的列表保持默认外观。
- **非破坏性**：仅首项指令生效，后续项指令视为普通文本；支持通过行内代码块显示字面量指令。
- **兼容性好**：在实时预览中可直接编辑原始 Markdown，无需切换视图。

**4. 使用建议**
- 指令必须位于列表第一项文本的起始位置。
- 若需显示指令本身而非生效，请将其包裹在反引号内（如 `` `{A}` ``）。
- 安装前请确保已移除旧版 `ordered-list-style` 插件以避免冲突。
- 建议在 Windows 桌面端（1.13.7+）使用，移动端兼容性尚待验证。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


