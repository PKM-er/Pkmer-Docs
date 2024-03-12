---
uid: 20240312193744
title: Obsidian 插件：【Readme】Gitlab Wiki Exporter
tags: ['obsidian插件', 'readme']
description: 使您的整个保险库与Gitlab Wiki兼容，并将其导出到指定位置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Gitlab Wiki Exporter

> [!Note] 插件名片
> - 插件名称：Gitlab Wiki Exporter
> - 插件作者：Josef Rabmer
> - 插件说明：使您的整个保险库与 Gitlab Wiki 兼容，并将其导出到指定位置。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jrabmer/obsidian-to-gitlab-wiki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitlab-wiki-export)

## 概述

使您的整个保险库与 Gitlab Wiki 兼容，并将其导出到指定位置。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrabmer/obsidian-to-gitlab-wiki/master/README.md)

---

## Readme(翻译）

下面是 [[gitlab-wiki-export]] 插件的自述翻译

# 黑曜石 Gitlab Wiki 转换器

## 📖 简要说明

这个插件用于将您的整个 Obsidian 保险库导出为 Gitlab Wiki。由于 Gitlab Flavoured Markdown (GFM) 和 Gitlab Wikis 有一些独特的方面，需要采取以下操作：

- 将文件名中的空格替换为 `-`，因为 Gitlab 使用页面 slug 用于链接
- 选择一个文件作为起始页面。这将被重命名为 `home`
- 删除链接中的文件扩展名，告诉 Gitlab 这是一个 wiki 页面，而不仅仅是一个文件
- 将文件导出到指定的文件夹

该插件只是临时重命名文件，不会对您的保险库进行任何永久更改。

## 🔓 先决条件

该插件假定您的保险库不使用 WikiLinks，而是使用相对路径作为链接格式。这在将来可能会更改。在那之前，请确保您将 `设置 -> 文件和链接 -> 新链接格式` 设置为 `相对文件路径`，并禁用 `使用[[Wikilinks]]`。

如果您的保险库中存在 WikiLinks，我个人使用以下 [插件](https://github.com/ozntel/obsidian-link-converter) 由 Ozan Tellioglu（使用相对路径设置！）。

## 💻 如何使用

一旦加载了插件，可以使用命令 `Export Vault as Gitlab Wiki` 来导出保险库。请确保首先在设置中指定导出位置和主页！

## 🌄 路线图

- [ ] 修复 Gitlab 上的换行问题
- [ ] 在文件中使用带空格的名称而不是页面标识符作为链接
- [ ] 在将来实现更多的 GFM 功能
- [ ] 添加 WikiLink 支持

## 📩 联系

如果您有任何问题或建议，请随时直接联系我：<jrabmer@outlook.com>。

## ☕ 支持

如果您喜欢这个插件，可以通过给我买杯咖啡来支持我的工作和热情：

<a href='https://ko-fi.com/jrabmer' target='_blank'>
    <img height='48' style='border:0px;height:48px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='在ko-fi.com给我买杯咖啡' />
</a>



