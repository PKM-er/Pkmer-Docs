---
uid: 2023120522265348
title: Obsidian 插件：【Readme】Remove Empty Folders
tags: ['obsidian插件', 'readme']
description: 轻松删除空文件夹。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Remove Empty Folders

> [!Note] 插件名片
> - 插件名称：Remove Empty Folders
> - 插件作者：fnya
> - 插件说明：轻松删除空文件夹。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/fnya/remove-empty-folders)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remove-empty-folders)

## 概述

轻松删除空文件夹。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/fnya/remove-empty-folders/main/README.md)
>

---

## Readme(翻译）

下面是 [[remove-empty-folders]] 插件的自述翻译

# 删除空文件夹

这是一个 Obsidian 插件，用于删除空文件夹。

## 注意

**在运行此插件之前，请务必备份 Obsidian 数据！！**

**在最坏的情况下，数据可能会丢失。**

如何使用

在文件资源管理器中选择要合并的笔记。

在文件资源管理器中选择要删除空文件夹的文件夹。

右键单击所选内容，然后选择“删除空文件夹”。

在图像示例中，将删除“subfulder1-2”和“subfulder1-3”。

限制

该插件在执行时会删除空文件夹。因此，运行插件后产生的空文件夹将不会被删除。

您可能需要多次运行插件才能删除所有空文件夹。

## 故障排除

如果不幸删除了一个意外的文件夹，请检查 `ObsidianValtPath/.trash` 文件夹内部。

该插件将空文件夹移动到 Obsidian 的 `.trash` 文件夹中，而不是物理上删除它，因此可以像下图所示检查和恢复其内容。

<img src="resources/image02.png" width="200">



