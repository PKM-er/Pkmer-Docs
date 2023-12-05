---
uid: 2023120522272385
title: Obsidian 插件：【Readme】Timestamp Link
tags: ['obsidian插件', 'readme']
description: 复制带有时间戳的链接到区块、标题和注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Timestamp Link

> [!Note] 插件名片
> - 插件名称：Timestamp Link
> - 插件作者：wenlzhang
> - 插件说明：复制带有时间戳的链接到区块、标题和注释。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/wenlzhang/obsidian-timestamp-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?timestamp-link)

## 概述

复制带有时间戳的链接到区块、标题和注释。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenlzhang/obsidian-timestamp-link/main/README.md)
> 

---

## Readme(翻译）

下面是 [[timestamp-link]] 插件的自述翻译


# 时间戳链接

[![GitHub release (Latest by date)](https://img.shields.io/github/v/release/wenlzhang/obsidian-timestamp-link)](https://github.com/wenlzhang/obsidian-timestamp-link/releases) ![GitHub all releases](https://img.shields.io/github/downloads/wenlzhang/obsidian-timestamp-link/total?color=success)

一个 [Obsidian](https://obsidian.md/) 插件，用于复制带有时间戳的链接到块、标题和笔记。
## 特点

- 复制带有时间戳的块链接，并附加时间戳
    - 例如，`[[Note#^20230101120030]]`
    - 例如，`[[Note#^20230101120030]] 📝 2023-11-04T12:00`
- 复制标题的链接，并附加时间戳
    - 例如，`[[Note#Heading]]`
    - 例如，`[[Note#Heading]] 📝 2023-11-04T12:00`
- 复制笔记的链接，并附加时间戳
    - 例如，`[[Note]]`
    - 例如，`[[Note]] 📝 2023-11-04T12:00`
- 为链接添加时间戳提供了上下文信息
    - 例如，在滑盒方法中，可以创建条目笔记来积累相似主题的笔记（链接）。通过时间戳信息，可以看到链接是何时创建并插入到条目笔记中的。
## 用法

Timestamp Link 使用 [moment.js](https://momentjs.com/docs/#/displaying/format/) 来格式化要附加的日期和时间。

- 例如，如果希望附加的文本是 `20230101120030`，那么在设置中需要配置 `YYYYMMDDHHmmss`。
- 另外，需要用**方括号**将不属于格式字符串的内容括起来。
- 另一方面，Obsidian 中不能使用 `:` 等符号作为块 ID。因此，应该尝试适当的时间戳格式。
## 鸣谢

- [Obsidian: Copy Block Link](https://github.com/mgmeyers/obsidian-copy-block-link)
    - 该插件作为一个起始模板。
## 支持我





