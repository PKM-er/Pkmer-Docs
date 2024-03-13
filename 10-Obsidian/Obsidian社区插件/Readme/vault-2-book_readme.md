---
uid: 2023082011361877
title: Obsidian 插件：【Readme】Vault 2 Book
tags: ['obsidian插件', 'readme']
description: 将您的笔记转换为一本书，创建一个包含所有链接的笔记的单个文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vault 2 Book

> [!Note] 插件名片
> - 插件名称：Vault 2 Book
> - 插件作者：Mitra98t
> - 插件说明：将您的笔记转换为一本书，创建一个包含所有链接的笔记的单个文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Mitra98t/vault2book-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-2-book)

## 概述

将您的笔记转换为一本书，创建一个包含所有链接的笔记的单个文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Mitra98t/vault2book-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[vault-2-book]] 插件的自述翻译

# Obsidian 2 书籍

该插件将您的 Obsidian 保险库（或保险库的一部分）转换为使用链接的单个文件。然后，可以将该文件导出为 PDF，创建一本书籍。

## 安装

> **注意：**此插件尚未在官方的 Obsidian 插件库中提供。您可以按照以下说明手动安装。

1. 安装 [Node.js](https://nodejs.org/en/download/)
2. 安装 [Obsidian](https://obsidian.md/)
3. 在 Obsidian 设置中启用第三方插件：`设置 > 社区插件 > 启用`
4. 在您的计算机上导航到插件文件夹：`VaultFolder/.obsidian/plugins/`（如果该文件夹不存在，请创建它）
5. 在插件文件夹中克隆 [Obsidian 2 Book](https://github.com/Mitra98t/obsidian2book-plugin) 存储库
6. 在存储库文件夹中运行 `npm install`
7. 在存储库文件夹中运行 `npm run build`
8. 在 Obsidian 中，确保在 `设置 > 第三方插件 > Vault 2 Book > 启用` 中启用了该插件

## 用法

通过在命令面板（`Ctrl/Cmd + P`）中运行命令 `Vault 2 Book: Generate book from the entire vault`，从 Obsidian vault 生成一本书。该书将生成在您的 vault 的根目录下。

通过在命令面板（`Ctrl/Cmd + P`）中运行命令 `Vault 2 Book: Generate a book from a specified folder`，从 vault 中的特定文件夹生成一本书。该书将生成在您的 vault 的根目录下。

（您应该能够直接在命令面板内导航到要生成书籍的文件夹。）

可以使用带有丝带图标的命令作为 `Generate a book from a specified folder` 命令的替代方法。

通过在命令面板（`Ctrl/Cmd + P`）中运行命令 `Vault 2 Book: Remove all generated books from vault`，删除此插件生成的所有书籍。 （书籍通过包含此注释进行标识：`<!--book-ignore-->`）

配置

您可以通过转到“设置 > 社区插件 > Vault 2 Book > 设置”来配置插件。

## 待办事项

- [ ] 添加对文件和文件夹模式的支持，而不仅仅是名称
- [ ] 添加指定评论以识别书籍的可能性
- [ ] 添加指定间隔符以完善分页功能



