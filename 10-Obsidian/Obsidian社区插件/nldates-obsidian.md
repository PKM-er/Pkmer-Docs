---
uid: 20230428232851
title: Natural Language Dates 使用自然语言来记录日期
description: 
author: 
type: other
draft: false
editable: false
modified: 20230429231548
public: yes
---

# Natural Language Dates 使用自然语言来记录日期

## 概述

使用自然语言插入时间戳，并链接对应笔记中。Natural Language Dates 提供了一系列能力，这使得在 Obsidian 内添加或书写日期和时间变得非常方便。

> [!Note] 插件名片
> - 插件名称：Natural Language Dates
> - 插件作者：argenos
> - 插件说明：使用自然语言插入时间戳，并链接对应笔记中。
> - 插件项目地址：[点我跳转](https://github.com/argenos/nldates-obsidian)

>[!Tips] 提示
>- 该插件已经支持多种语言书写方式，包括英文、中文、日语等多国语言的日期描述词汇。比如中文的：今日，当日，昨日，明日等。
>- 如果对这些称呼不熟悉，可以在 JS 文件中替换对应的文本词汇。

## 使用

>[!Warning] 注意
>如果你的输入，是无法识别日期格式，则不会创建链接。

### 日期自动建议

在编辑视图中使用自然语言，输入正确的日期，会自动提示对应的日期笔记。

输入 `@today` 并按 `Enter` 键，将自动展开为当前日期。同时按 `Shift` 键可以将输入文本保留为别名（例如 `@today`→`[[2021-12-27 | today]]`）。

![116645561-1d565700-a944-11eb-9166-f55e72dc65bc.gif](https://cdn.pkmer.cn/images/a7607c768ef450c1973411cf249a3aab_MD5.gif)

### 设置

### 日期自动建议（Date Autosuggest）

| 设置项                              | 功能描述                             | 默认设置 |
| ----------------------------------- | ------------------------------------ | -------- |
| 是否开启（Enable date autosuggest） | 全局开关，用于启用或禁用自动建议     | 默认开启 |
| 触发符号（Trigger phrase）          | 触发自动建议所需的字符               | @        |
| 是否插入链接（Insert as link?）     | 将日期插入为 Wiki 链接（即 [[<date>]]） | Yes      |

### 格式

插件支持自定义不同 日期和时间格式

- 日期格式默认：YYYY-MM-DD
- 你可以自定义每周以周几开始（默认是周一）
- 时间格式默认：HH:mm

## 示例

插件支持大多数日期/时间格式，包括：

- Today, Tomorrow, Yesterday, Last Friday, etc
- 17 August 2013 - 19 August 2013
- This Friday from 13:00 - 16.00
- 5 days ago
- 2 weeks from now
- Sat Aug 17 2013 18:40:39 GMT+0900 (JST)
- 2014-11-30T08:15:30-05:30