---
uid: 20230822233946
title: Obsidian 插件：Metacopy & URL 快速复制 Front-matter 属性内容
tags:
  - Obsidian插件
description: 复制一个前文键的值。
author: OS
type: basic
draft: false
editable: false
modified: 20230914153850
---

# Obsidian 插件：Metacopy & URL 快速复制 Front-matter 属性内容

## 概述

让你快速复制当前笔记的 Front-matter 的值。

> [!Note] 插件名片
> - 插件名称：Metacopy & URL
> - 插件作者：Mara-Li
> - 插件说明：复制一个前文键的值。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-metacopy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-metacopy)

## 使用

该插件的目的是快速获取前置元数据键的值。您可以在设置中设置多个值，例如：`key1, key2, key3, ...`

如果插件在前置元数据中找到多个键：

1. 上下文将获取前置元数据的**第一个**值。
2. 该命令将创建一个菜单，您可以在其中选择所需的值。

该值将添加到您的剪贴板中，因此您可以将其粘贴到任何地方。

> [!Tip] 提示
> - 1.4.x 之后，Obsidian 带来了 Properties 的新特性，感觉有异曲同工之妙

### 基本选项

如果您想要创建一个指向页面的链接，您可以使用这个插件。

> ⚠️ 只有在有 frontmatter 的情况下，此功能才有效。

有三种可能的配置方式：

- 使用默认文件夹创建链接
- 使用基本链接 **加上** 相对 Obsidian 路径创建链接
- 使用 frontmatter 键创建链接。

### 固定文件夹

生成的链接将为 `{your_base_link}/{default_folder}/{filename}/`。

> 💭 使用此选项将禁用文件夹注释选项。

### 奥斯尼亚之路选项

生成的链接将为：`{你的基本链接}/{奥斯尼亚路径}/{文件名}/`。

### 前言

您可以使用前言键创建链接。

1. 键必须同时在 `键` 和 `键链接` 中。
2. 您需要配置 `基本链接`。

链接创建器作为主要插件工作：文件菜单将采用第一个值，

因此，如果此值是链接键，它将创建一个链接。

您还可以设置一个 `默认值`，以防缺少 `类别` 键和值。

此外，如果存在链接，编辑器菜单将添加一个选项来复制链接。

## 文件夹注释支持

您可以启用文件夹注释支持（使用“文件夹名称”行为），以便在链接键的最后一个文件夹与文件名相同时，创建无需文件名的链接。

> ️🗒️ 示例： <u>Obsidian 路径</u>
> - 如果您将其设置为“默认值”：`docs`
> - 如果您的文件名为 `noteIndex`，文件夹名为 `myFolder`
> - 链接将为 `{your_base_link}/{obsidian_path}/docs/myFolder/`

> 🗒️ 示例： <u>前置信息</u>
> - 如果您设置了 `link_key: folder1/folder2/noteIndex`
> - 如果您的文件名为 `noteIndex`
> - 结果链接将为：`{base_link}/folder1/folder2/noteIndex/`

> ⚠️ 此选项与“固定文件夹”选项不兼容。

禁用菜单

您可以使用前置元数据键禁用菜单。有两种行为：

1. 启用设置：
   必须存在该键，并设置为 true 以启用菜单。
2. 禁用设置：
   默认行为。
   该键必须不存在或设置为 false 以禁用菜单。

无论选项如何，命令模态都将继续工作。

此外，建议使用 [Obsidian To Mkdocs](https://github.com/Mara-Li/mkdocs_obsidian_publish) 插件，以便在不编辑源文件的情况下复制链接。

要在 Metacopy 中使用 Obsidian2mkdocs，需要进行以下配置：

此模板允许像在 Notion 或 Google Docs 中那样复制链接。

文件模板如下：

```yaml
title: 
category: something/like/that
share: true
```

该插件的灵感来自于 [Copy Publish URL](https://github.com/kometenstaub/copy-publish-url)，但适用于所有链接（而不仅仅是发布链接）。
