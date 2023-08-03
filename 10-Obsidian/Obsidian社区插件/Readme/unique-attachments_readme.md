---
uid: 20230803213410
title: Obsidian 插件：【Readme】Unique attachments
tags: ['笔记文件处理', 'obsidian插件', 'readme']
description: 重命名附件，使它们的名称唯一（基于文件内容的哈希值）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Unique attachments

> [!Note] 插件名片
> - 插件名称：Unique attachments
> - 插件作者：Dmitry Savosh
> - 插件说明：重命名附件，使它们的名称唯一（基于文件内容的哈希值）。
> - 插件分类：['笔记文件处理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dy-sh/obsidian-unique-attachments)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unique-attachments)

## 概述

重命名附件，使它们的名称唯一（基于文件内容的哈希值）。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dy-sh/obsidian-unique-attachments/master/README.md)
> 

---

## Readme(翻译）

下面是 [[unique-attachments]] 插件的自述翻译



# 唯一附件

这个插件用于 [Obsidian](https://obsidian.md/)，它会重命名附件，使它们的名称变得唯一。
使用哈希函数（MD5）生成文件名，因此文件名确实是唯一的。

如果两个文件的内容完全相同（每个字节都相同），那么它们的名称也将相同。这样，如果你发现两个具有相同名称的文件，你可以确定它们是同一个文件的副本。

处理后，文件名看起来像这样：5be2a494d8c98092d803718d29fe14c0.png

这种附件命名方法将为你的笔记增加一些一致性。你可能希望将此插件与 [Consistent attachments and links](https://github.com/derwish-pro/obsidian-consistent-attachments-and-links) 插件一起使用。

在使用 **"Rename all attachments"** 后，插件会更新所有使用这些文件的笔记中的链接。或者，你可以使用 **''Rename only active attachments''** 来重命名仅链接到当前活动 MD 文件的附件。

如果这些重复文件（内容相同）位于同一个文件夹中，此插件还可以删除它们。这将使你的 vault 变得更加整洁。

在设置中还有一个选项 **"Rename only linked attachments"**。如果启用了此选项，你可以确保插件仅重命名那些在标准 markdown 格式的笔记中被引用的文件。因此，如果没有笔记引用该文件，或者以 wikilink 格式引用该文件，则该文件将被忽略。

**"Rename all attachments" 命令仅与标准 markdown 链接（`![](../attachments/title.png)`）兼容。不支持 wikilinks。你可以使用 [Consistent attachments and links](https://github.com/derwish-pro/obsidian-consistent-attachments-and-links) 插件将所有 wikilinks 转换为 markdown 链接。''Rename only active attachments'' 命令适用于所有类型的链接，并根据你的偏好生成链接。**

## 如何配置

在Obsidian热键设置中为**“唯一附件：重命名所有附件”**和/或**“唯一附件：仅重命名活动附件”**命令分配一个热键。

在插件设置中，您可以设置要处理的附件类型。或者您可以忽略一些您不想处理的文件夹。

如何使用

当您想要搜索和重命名附件时，请调用热键。您将会收到一个关于已重命名文件数量的通知。在控制台中，您可以看到更详细的关于发生了什么的信息。

建议在使用此插件之前备份您的文件。



