---
uid: 2024052909013403
title: Obsidian 插件：Open File by Magic Date
tags: ['快捷键', '日期与时间', '编辑工具', 'obsidian插件']
description: 为你最重要的文件（例如：每日/每周/每月笔记）定义一个热键和Moment.js模式。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open File by Magic Date

> [!Note] 插件名片
> - 插件名称：Open File by Magic Date
> - 插件作者：simplgy
> - 插件说明：为你最重要的文件（例如：每日/每周/每月笔记）定义一个热键和 Moment.js 模式。
> - 插件分类：[' 快捷键 ', ' 日期与时间 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/simplgy/obsidian-open-file-by-magic-date)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-open-file-by-magic-date)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimplGy/obsidian-open-file-by-magic-date/master/README.md)

![Open File by Magic Date](https://cdn.pkmer.cn/covers/obsidian-open-file-by-magic-date.png!pkmer)

## 概述

这是一个用于 Obsidian 的插件，可以让你通过灵活的日期模式打开特定的文件。你可以用它来打开“最近的星期一”对应的笔记，也可以用于任何有日期标记的文件。该插件支持指定特定日期模式，例如 `{YYYY-MM-DD} foo.md`，并通过按下一个键打开对应的文件。另外，它还支持在日期模式中指定“最近的星期一”，比如 `weekly notes/{mon: YYYY-MM-DD} week.md`。安装方法是在设置中禁用安全模式，然后浏览社区插件并搜索“Magic File Hotkey”进行安装。插件的核心代码是通过 `moment.js` 解析输入的文件模式，然后根据今天的日期或其他日期来打开对应的文件。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



