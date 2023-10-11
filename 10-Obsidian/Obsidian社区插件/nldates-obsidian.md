---
uid: 20230428232851
title: Obsidian 插件：Natural Language Dates 使用自然语言来插入日期
tags: [Obsidian, 插件, 日期, 编辑, 效率]
description: Obsidian 插件：Natural Language Dates 使用自然语言来插入日期
author: OS
type: other
draft: false
editable: false
modified: 20230911162316
---

# Obsidian 插件：Natural Language Dates 使用自然语言来插入日期

## 概述

使用自然语言插入时间戳，并链接对应笔记中。Natural Language Dates 提供了一系列能力，这使得在 Obsidian 内添加或书写日期和时间变得非常方便。

> [!Note] 插件名片
> - 插件名称：Natural Language Dates
> - 插件作者：argenos
> - 插件说明：使用自然语言插入时间戳，并链接对应笔记中。
> - 插件分类：[' 日期相关 ', ' 效率 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/argenos/nldates-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nldates-obsidian)

>[!Tips] 提示
>- 该插件已经支持多种语言书写方式，包括英文、中文、日语等多国语言的日期描述词汇。比如中文的：今日，当日，昨日，明日等。
>- 如果对这些称呼不熟悉，可以在 JS 文件中替换对应的文本词汇。

## 使用

>[!Warning] 注意
>如果你的输入，是无法识别日期格式，则不会创建链接。

### 日期自动建议

在编辑视图中使用自然语言，输入正确的日期，会自动提示对应的日期笔记。

输入 `@today` 并按 `Enter` 键，将自动展开为当前日期。同时按 `Shift` 键可以将输入文本保留为别名（例如 `@today`→`[[2021-12-27 | today]]`）。

![116645561-1d565700-a944-11eb-9166-f55e72dc65bc.gif](https://cdn.pkmer.cn/images/a7607c768ef450c1973411cf249a3aab_MD5.gif!pkmer)

解析器支持大多数日期/时间格式，包括：

- 今天，明天，昨天，上周五等
- 2013 年 8 月 17 日至 2013 年 8 月 19 日
- 本周五从 13:00 至 16:00
- 5 天前
- 2 周后
- 2013 年 8 月 17 日星期六 18:40:39 GMT+0900（JST）
- 2014-11-30T08:15:30-05:30

### 设置

### 日期自动建议（Date Autosuggest）

| 设置项                              | 功能描述                             | 默认设置 |
| ----------------------------------- | ------------------------------------ | -------- |
| 是否开启（Enable date autosuggest） | 全局开关，用于启用或禁用自动建议     | 默认开启 |
| 触发符号（Trigger phrase）          | 触发自动建议所需的字符               | @        |
| 是否插入链接（Insert as link?）     | 将日期插入为 Wiki 链接（即 `[[<date>]]`） | Yes      |

### 格式

插件支持自定义不同 日期和时间格式

- 日期格式默认：YYYY-MM-DD
- 你可以自定义每周以周几开始（默认是周一）
- 时间格式默认：HH:mm

## 时间格式示例

插件支持大多数日期/时间格式，包括：

- Today, Tomorrow, Yesterday, Last Friday, etc
- 17 August 2013 - 19 August 2013
- This Friday from 13:00 - 16.00
- 5 days ago
- 2 weeks from now
- Sat Aug 17 2013 18:40:39 GMT+0900 (JST)
- 2014-11-30T08:15:30-05:30

### 扩展时间格式示例

- 星期（过去事件中离当前点最近的星期）："sunday", "monday","tuesday","wednesday","thursday","friday","saturday"
- **缩写的星期**：sun, mon, tue, wed, thu, fri, sat
- **月中的第几天**：first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10, eleventh: 11, twelfth: 12, thirteenth: 13, fourteenth: 14, fifteenth: 15, sixteenth: 16, seventeenth: 17, eighteenth: 18, nineteenth: 19, twentieth: 20, "twenty first": 21, "twenty-first": 21, "twenty second": 22, "twenty-second": 22, "twenty third": 23, "twenty-third": 23, "twenty fourth": 24, "twenty-fourth": 24, "twenty fifth": 25, "twenty-fifth": 25, "twenty sixth": 26, "twenty-sixth": 26, "twenty seventh": 27, "twenty-seventh": 27, "twenty eighth": 28, "twenty-eighth": 28, "twenty ninth": 29, "twenty-ninth": 29, thirtieth: 30, "thirty first": 31, "thirty-first": 31。
- **月度数据（每个月份的第一天**）：january, february, march, april, may, june, july, august, september, october, november, december。
- **中文**：今日,当日,昨日,明日,今夜,今夕,今晩,今朝。

### 其他命令

| 设置                                       | 描述                                                                                                                                                                                                                                                                                                                                                                             | 默认值                       |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| 插入当前日期                               | 插入当前日期，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                         | `YYYY-MM-DD`                  |
| 插入当前时间                               | 插入当前时间，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                         | `HH:mm`                       |
| 插入当前日期和时间                         | 插入当前日期和时间，使用设置菜单中指定的格式                                                                                                                                                                                                                                                                                                                                     | `YYYY-MM-DD HH:mm`            |
| 解析自然语言日期                           | 将选定的文本解析为自然语言日期。用设置菜单中指定的格式替换选定的文本，并将其替换为解析后的日期的 Obsidian 链接。<br /><br />对于单词日期（例如今天、明天、星期五等），可以在不先选择单词的情况下使用该命令。也可以使用类似于 Nov9、25Dec 的日期来使用此技巧。                                                                                                 | `[[YYYY-MM-DD]]`              |
| 解析自然语言时间                           | 将选定的文本解析为自然语言时间。用设置菜单中指定的格式替换选定的文本，并将其替换为解析后的时间戳。您可以尝试使用任何标准时间，例如现在、15 分钟后、1 小时后、5 分钟前等。                                                                                                                                                    | `HH:mm`                       |
| 解析自然语言日期（作为链接）               | 将选定的文本解析为自然语言日期。用指定格式的标准 Markdown 链接替换选定的文本                                                                                                                                                                                                                                                                                                     | `[选定的文本](YYYY-MM-DD)` |
| 解析自然语言日期（作为纯文本）             | 将选定的文本解析为自然语言日期。用指定格式的纯文本解析后的日期替换选定的文本                                                                                                                                                                                                                                                                                                    | `YYYY-MM-DD`                  |
