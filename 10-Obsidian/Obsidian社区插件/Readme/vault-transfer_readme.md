---
uid: 20240312193744
title: Obsidian 插件：【Readme】Vault Transfer
tags: ['obsidian插件', 'readme']
description: Transfers a note from one vault to another.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vault Transfer

> [!Note] 插件名片
> - 插件名称：Vault Transfer
> - 插件作者：ImaginaryProgramming
> - 插件说明：Transfers a note from one vault to another.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ImaginaryProgramming/obsidian-vault-transfer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-transfer)

## 概述

Transfers a note from one vault to another.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ImaginaryProgramming/obsidian-vault-transfer/main/README.md)

---

## Readme(翻译）

下面是 [[vault-transfer]] 插件的自述翻译

【机翻】

# 黑曜石保险库转移

将所选笔记的内容转移到另一个保险库，然后从原始笔记中链接到它。

## 如何使用

1. 在设置选项卡中设置输出保险库和（可选）输出文件夹。您还可以配置：
    - 在原始笔记中创建一个指向转移笔记的链接。如果设置为 `false`，您可以允许插件删除原始笔记。
    - 如果文件必须覆盖目标保险库中的现有文件。
2. 确认目标保险库和文件夹存在。
3. 打开您想要转移的笔记。
4. 运行 `Vault Transfer: Transfer current note to other vault`。

![vault-transfer](https://cdn.pkmer.cn/covers/vault-transfer_1_0.gif!pkmer)

也可以一次转移多个笔记。在这种情况下，插件将创建一个与原始文件夹同名的文件夹，并将其中的笔记转移过去。

您还可以使用文件菜单来转移文件夹或笔记，还可以发送到目标保险库中的特定文件夹，或在目标保险库中创建一个新文件夹，然后将笔记转移到其中。

## 其他命令

**在其他保险库中插入当前笔记的链接**

在其他保险库中插入当前笔记的链接，而不传输内容。当您知道另一个保险库中已经存在同名文件时使用。
