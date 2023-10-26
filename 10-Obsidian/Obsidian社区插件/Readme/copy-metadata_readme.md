---
uid: 2023102611073813
title: Obsidian 插件：【Readme】Copy Metadata
tags: ['obsidian插件', 'readme']
description: 复制文件元数据，例如创建时间，到剪贴板。将复制的元数据插入到文件名中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Copy Metadata

> [!Note] 插件名片
> - 插件名称：Copy Metadata
> - 插件作者：wenlzhang
> - 插件说明：复制文件元数据，例如创建时间，到剪贴板。将复制的元数据插入到文件名中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/wenlzhang/obsidian-copy-metadata)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-metadata)

## 概述

复制文件元数据，例如创建时间，到剪贴板。将复制的元数据插入到文件名中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenlzhang/obsidian-copy-metadata/main/README.md)
>

---

## Readme(翻译）

下面是 [[copy-metadata]] 插件的自述翻译

# 复制元数据

![](https://img.shields.io/github/v/release/wenlzhang/obsidian-copy-metadata?style=flat-square) ![](https://img.shields.io/github/downloads/wenlzhang/obsidian-copy-metadata/total)

一个 [Obsidian](https://obsidian.md/) 插件，用于将元数据复制到剪贴板并插入到活动文件名中。

## 特点

- 将文件创建时间复制到剪贴板中
- 将文件创建时间追加到活动文件名中
用例

- 在 Obsidian Mobile 上可以轻松创建一个快速笔记，但在文件名中插入一个 Zettelkasten 时间戳可能不太方便。当以后在 Obsidian Desktop 上工作时，可以使用这个插件，它会自动将笔记创建时间追加到活动文件名中。
    - 实际上，开发这个插件的主要动机是频繁在移动设备上进行笔记记录和在桌面设备上进行笔记重命名。

## 用法

Copy Metadata 使用 [moment.js](https://momentjs.com/docs/#/displaying/format/) 来格式化元数据的时间信息。此外，需要用**方括号**将不属于格式字符串的内容括起来。

- 例如，如果希望得到 ` - 202301011200` 这样的文本，则需要在设置中配置 `[ - ]YYYYMMDDHHmm`。

## 鸣谢

- [Obsidian: 更新前置元数据修改日期](https://github.com/alangrainger/obsidian-frontmatter-modified-date)
    - 该插件作为一个起始模板。

## 支持我