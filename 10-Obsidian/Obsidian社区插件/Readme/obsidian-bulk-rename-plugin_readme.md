---
uid: 20231220115812
title: Obsidian 插件：【Readme】Bulk Rename
tags: ['obsidian插件', 'readme']
description: 现在，您可以根据模式重命名文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Bulk Rename

> [!Note] 插件名片
> - 插件名称：Bulk Rename
> - 插件作者：Oleg Lustenko
> - 插件说明：现在，您可以根据模式重命名文件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OlegLustenko/obsidian-bulk-rename)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-bulk-rename-plugin)

## 概述

现在，您可以根据模式重命名文件

![Bulk Rename](https://cdn.pkmer.cn/covers/obsidian-bulk-rename-plugin_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OlegLustenko/obsidian-bulk-rename/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-bulk-rename-plugin]] 插件的自述翻译

# Obsidian 批量重命名插件

[![](https://github.com/OlegLustenko/obsidian-bulk-rename/actions/workflows/CI.yml/badge.svg)](https://github.com/OlegLustenko/obsidian-bulk-rename/actions/workflows/CI.yml)

[![发布Obsidian插件](https://github.com/OlegLustenko/obsidian-bulk-rename/actions/workflows/release.yml/badge.svg)](https://github.com/OlegLustenko/obsidian-bulk-rename/actions/workflows/release.yml)

[![GitHub许可证](https://img.shields.io/github/license/OlegLustenko/obsidian-bulk-rename)](https://https://github.com/OlegLustenko/obsidian-bulk-rename/master/LICENSE)

[![Github所有版本下载量](https://img.shields.io/github/downloads/OlegLustenko/obsidian-bulk-rename/total.svg)](https://github.com/OlegLustenko/obsidian-bulk-rename/releases/)

[![GitLab最新版本发布](https://badgen.net/github/release/OlegLustenko/obsidian-bulk-rename/)](https://github.com/OlegLustenko/obsidian-bulk-rename/releases)

## 简介

现在，您可以从目录中重命名一组文件，并且所有引用也将在整个存储库中更新。

![](https://cdn.pkmer.cn/covers/obsidian-bulk-rename-plugin_2_0.gif)

> 在幕后，此插件使用 Obsidian API 进行重命名，但我们只是将其应用于多个文件。

# 特性

> 每当我们更新**替换符号**时，您也可以设置新的 _ 目录位置 _，以便将文件移动到 _ 另一个目录 _。

根据文件夹位置重命名/移动文件

点击“按文件夹搜索”

更新“文件夹位置”，指定要从中获取文件的位置，提取文件路径中的“现有字符”

然后更新“替换符号”，这些符号将用于新路径中。

根据标签重命名/移动文件

点击“按标签搜索”

在“标签名称”字段中输入标签，搜索将在整个存储库中完成，如果需要多个标签，请使用逗号分隔

点击刷新

使用现有笔记中您要查找的模式更新“现有字符”字段，设置“替换符号”

## 通过正则表达式搜索

使用正则表达式搜索

您有两个字段，正则表达式模式和正则表达式标志

正则表达式模式将被包裹在 `/ /` 中

## 支持的标志

- **g** - 全局匹配
- **i** - 忽略大小写
- **m** - 多行锚点
- **s** - 点匹配所有字符（也称为单行模式）- 即使不是原生支持也可以工作
- **u** - Unicode（ES6）
- **y** - 粘性匹配（Firefox 3+，ES6）
- **n** - 显式捕获
- **x** - 自由空格和行注释（也称为扩展模式）
- **A** - 星际（需要 Unicode 基础插件）

---

点击预览或 `Enter` 查看中间结果（不会更改/移动/重命名）。

完成后点击 `重命名`。

## API

- **文件夹位置** - 需要重命名的文件所在的文件夹
- **现有文件中的符号** - 文件中包含的符号/字符
- **替换符号** - 将要替换的新符号
- **文件夹中的文件** - 仅供信息目的
- **RegExp 模式** - 用于匹配的 RegExp 模式
- **RegExp 标志** - 将应用于 RegExp 模式的标志

重命名按钮将按照各自的路径开始重命名所有文件。

动机

这个插件是为了满足我的需求而开发的。最初，我开始使用带有**_**分隔符的日常文件。

所以我的文件看起来像这样：2022_01_01，随着时间的推移，我意识到其他平台默认配置为使用破折号，像这样 2022-01-01。

有很多关于如何重命名文件的指南，我们需要运行什么样的脚本，需要安装什么版本的 Python 或 Node.js 等等。

为什么不将这个功能内置到 Obsidian 中呢？

并且重命名一堆文件，并相应地更新它们在代码库中的引用。现在，您可以一次重命名一堆文件，并且所有的导入也将在 vault 中更新。

# 安装

按照以下步骤安装 Tasks 插件。

1）在 Obsidian 的社区插件浏览器中搜索“Bulk Rename”。

2）在 Obsidian 设置中启用插件（在“社区插件”下找到“Bulk Rename”）。

3）欢迎加入！按照上面的指南进行操作，分享你的发现！

## 支持开发

如果你喜欢 Bulk Rename，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/oleglustenko)，并在 Twitter 上关注我 [@oleglustenko](https://twitter.com/oleglustenko)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/oleglustenko)
