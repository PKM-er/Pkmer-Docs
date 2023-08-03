---
uid: 20230803231105
title: Obsidian 插件：Linked Data Helper
tags: ['obsidian插件', 'readme']
description: 准备Linked Data词汇所需的数据。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232548
---

# Obsidian 插件：Linked Data Helper

> [!Note] 插件名片
> - 插件名称：Linked Data Helper
> - 插件作者：kometenstaub
> - 插件说明：准备 Linked Data 词汇所需的数据。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kometenstaub/linked-data-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linked-data-helper)

## 概述

准备 Linked Data 词汇所需的数据。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kometenstaub/linked-data-helper/main/README.md)
>

---

## Readme(翻译）

下面是 [[linked-data-helper]] 插件的自述翻译

# Linked Data Helper

> [!important]
>
> 此插件已更新以与美国国会图书馆的新批量导出兼容。
>
> 此更新还包括一些修复。

[![Test Linked Data Helper](https://github.com/kometenstaub/linked-data-helper/actions/workflows/test.yml/badge.svg)](https://github.com/kometenstaub/linked-data-helper/actions/workflows/test.yml)

[![Build obsidian plugin](https://github.com/kometenstaub/linked-data-helper/actions/workflows/releases.yml/badge.svg)](https://github.com/kometenstaub/linked-data-helper/actions/workflows/releases.yml)

此插件用于生成 [Linked Data Vocabularies](https://github.com/kometenstaub/obsidian-linked-data-vocabularies) Obsidian 插件所依赖的数据。

设置中为每个实现的数据集提供了逐步指南。（目前支持 LCSH，但计划扩展支持其他链接数据。）

默认情况下，如果可能的话，生成的文件将存储在附件文件夹中的 `linked-data-vocabularies` 子文件夹中。如果不可能，设置将告诉您。

在这种情况下，您将需要输入另一个路径。如果愿意，您还可以输入替代输出路径。

转换完成后，可以禁用此插件，直到您想要更新数据或添加另一个数据集为止。

## 鸣谢

该插件使用了 'split2' npm 包 (<https://www.npmjs.com/package/split2)。它在> 'ISC 许可证 ' 下获得许可。许可证可以在 [这里](https://github.com/kometenstaub/linked-data-helper/blob/main/esbuild.js) 找到。
