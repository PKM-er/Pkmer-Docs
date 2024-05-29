---
uid: 2024052908423718
title: Obsidian 插件：JSONifier
tags: ['数据处理', '编辑工具', '快捷键', 'obsidian插件']
description: 使用JSON.stringify()或JSON.parse()高亮文本，并复制到剪贴板。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：JSONifier

> [!Note] 插件名片
> - 插件名称：JSONifier
> - 插件作者：Kjell Connelly
> - 插件说明：使用 JSON.stringify() 或 JSON.parse() 高亮文本，并复制到剪贴板。
> - 插件分类：[' 数据处理 ', ' 编辑工具 ', ' 快捷键 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/KjellConnelly/obsidian-jsonifier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-jsonifier)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/KjellConnelly/obsidian-jsonifier/master/README.md)

![JSONifier](https://cdn.pkmer.cn/covers/obsidian-jsonifier.gif!pkmer)

## 概述

Obsidian JSONifier 是一个用于将文本转换为 JSON 字符串的插件，通过 `JSON.stringify(text)` 或 `JSON.parse(text)` 实现。用户只需在文本上使用热键进行选择转换，然后将结果复制到剪贴板中。此外，该插件还可用于验证 JSON 格式的有效性，对于编写 JSON 代码块或编辑 JSON 格式的 frontmatter 非常有用。例如，用户在使用 Obsidian.md 编写 markdown 时，需要将其作为字符串使用 JSON 发送，可以使用该插件将其转换为 JSON 字符串，然后再次使用 JSON.parse() 函数将其转换回原始 markdown 格式。插件的使用场景包括开发者在编辑和验证 JSON 格式时的需求，解决了在不同格式之间转换的问题。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



