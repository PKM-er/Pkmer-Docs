---
uid: 2023080322144708
title: Obsidian 插件：Awesome Image
tags: ['obsidian插件', 'readme']
description: 图像管理和查看的一站式解决方案。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Awesome Image

> [!Note] 插件名片
> - 插件名称：Awesome Image
> - 插件作者：AwesomeDog
> - 插件说明：图像管理和查看的一站式解决方案。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AwesomeDog/obsidian-awesome-image)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?awesome-image)

## 概述

图像管理和查看的一站式解决方案。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AwesomeDog/obsidian-awesome-image/master/README.md)

---

## Readme(翻译）

下面是 [[awesome-image]] 插件的自述翻译

# 精彩的图片

一个集成了 [Obsidian Image Toolkit](https://github.com/sissilab/obsidian-image-toolkit) 的出色图片管理解决方案，提供了令人惊叹的图片查看体验。

## 设计理念

- **始终可用**。没有网络？没问题。您的图片完全离线，网络或服务问题永远不会成为您的问题。
- **中心化管理**。图片不再散落四处，导致链接过时和无用文件。
- **恰到好处的自动化**。自动处理粘贴的图片，但让您了解发生的一切。

## 特点

- 💾 命令将图像复制到用户定义的文件夹中，并使用统一的名称更新笔记中的链接。
- 🔗 自动下载互联网图像。
- ⚡ 粘贴图像后立即自动处理，无论是来自互联网还是二进制格式。
- 🔎 命令列出所有未被笔记链接的图像，可以手动删除。

如何使用

**重要提示** 由于插件可以修改您的笔记，请在第一次使用之前备份您的存储库，以确保插件按照您的意愿进行操作。

使用此插件的最佳方法是在设置中切换到“粘贴处理”并运行“Awesome Image: Process images for all your notes”一次。

之后，您的所有图片都将得到妥善处理。

您可能还想切换到“文件和链接”下的“不使用 [[Wikilinks]]”（现在仅支持 Markdown 链接）。

以下是它提供的所有命令：

1. 按下 `Ctrl+P`（或 macOS 上的 `Cmd+P`）打开命令面板。
2. 输入您想要运行的命令的名称（或部分名称）。
3. 使用箭头键导航到命令。
4. 按 Enter 键。

命令名称为：

1. `Awesome Image: Process images for active file`
2. `Awesome Image: Process images for all your notes`
3. `Awesome Image: List images that are not linked by your notes`

要查看“List images that are not linked by your notes”的结果，您可能需要按 Ctrl+Shift+I 在 Windows 和 Linux 上打开开发者工具，或按 Cmd-Option-I 在 macOS 上打开。

工作原理

处理图像时：

1. 使用正则表达式在笔记中定位图像。
2. 从二进制数据或互联网（如果是 URL）获取图像，计算图像的 SHA256 哈希值。
3. 将图像文件复制到用户定义的文件夹中，图像文件名根据 SHA256 派生以避免冲突。
4. 更改笔记中的图像路径，使其指向新的图像文件。
5. 基于数据安全原因，旧图像不会被删除，您可以使用下面的命令找到它们。

列出图像时：

比较笔记中的图像文件和链接，并在开发者工具控制台中显示未被笔记链接的图像。

粘贴图像时：

对于粘贴的内容，与处理图像的操作类似，但是自动化（请确保在设置中切换打开“粘贴时处理”选项）。

归属

特别感谢 sissilab 的出色的 Obsidian Image Toolkit，该插件基于这个伟大的工作。
