---
uid: 1793625613839001
title: "Obsidian 插件：HTML Entity Renderer"
tags: ["文字处理", "编辑工具", "界面优化", "obsidian插件"]
description: "Renders HTML character entities such as &copy; and &#169; as characters in Live Preview while preserving the Markdown source. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Entity Renderer

> [!Note] 插件名片
> - 插件名称：HTML Entity Renderer
> - 插件作者：Reggie Fluker
> - 插件说明：Renders HTML character entities such as &copy; and &#169; as characters in Live Preview while preserving the Markdown source. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rflukerii-dev/html-entity-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-entity-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rflukerii-dev/html-entity-renderer/master/README.md)



## 概述

HTML Entity Renderer 旨在解决 Obsidian 实时预览模式下 HTML 字符实体无法直接显示的问题。它能在不修改 Markdown 源文件的前提下，将 `&copy;`、`&amp;` 等实体渲染为对应的可见字符，如 © 或 &。这种“所见即所得”的显示方式让笔记内容更加直观，同时保留了源文本的完整性，方便后续编辑和版本管理。

典型使用场景包括撰写包含版权信息的文档或处理特殊排版需求。例如，在笔记中直接输入 `Fish &amp; Chips`，预览时即可看到清晰的 "Fish & Chips"，无需手动输入特殊符号。又如，使用 `&mdash;` 代替破折号，既保证了源文件的 ASCII 兼容性，又能在阅读时获得优雅的排版效果，特别适合对文本格式有严格要求的写作场景。

相比其他类似插件，该工具的核心特色在于其严格的边界控制与编辑体验优化。它仅在实时预览中生效，源代码模式、行内代码及代码块中的实体保持原样，避免干扰代码逻辑。此外，当光标移入已渲染的实体时，会自动显示原始源码以便编辑，解决了“看到结果却难改源码”的痛点。对于不可见字符或无效引用，插件也会保留源码显示，确保内容始终可见且可编辑。

使用前需注意，该插件仅改变显示效果，不影响底层数据。因此，全文搜索功能匹配的是源码文本（如 `&mdash;`）而非渲染后的字符，复制选区时粘贴出的也是源码而非渲染字符。如果你需要直接操作渲染后的字符，或者依赖基于渲染文本的自动化搜索与复制流程，此插件可能无法满足需求。它更适合重视源文件纯净度、且能接受源码搜索逻辑的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


