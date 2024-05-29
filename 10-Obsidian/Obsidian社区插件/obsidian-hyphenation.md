---
uid: 2024052909104760
title: Obsidian 插件：Hyphenation
tags: ['样式与美化', '文字处理', '编辑工具', 'obsidian插件']
description: 启用两端对齐文本和换行
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hyphenation

> [!Note] 插件名片
> - 插件名称：Hyphenation
> - 插件作者：7596ff
> - 插件说明：启用两端对齐文本和换行
> - 插件分类：[' 样式与美化 ', ' 文字处理 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/7596ff/obsidian-hyphenation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-hyphenation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/7596ff/obsidian-hyphenation/main/README.md)

## 概述

Hyphenation 插件为 Obsidian 提供了文本对齐和断词功能。它通过使用 `navigator.language` 来确定断词的主要语言，并且可以通过在文件的 frontmatter 中添加 `lang` 键来更改每个文件的语言设置。该插件的 CSS 规则适用于预览模式下的 `p`、`ol` 和 `ul` 元素，但对于外部链接，插件不会应用断词规则，因为在我看来，断词后的外部链接看起来不美观。该插件可以使 Obsidian 中的文本对齐更加美观，并提供断词功能，提升阅读体验。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



