---
uid: 20230803231105
title: Obsidian 插件：Filename Emoji Remover
tags: ['界面相关', '笔记文件处理', 'obsidian插件', 'readme']
description: 可以自动将笔记文件名中的表情符号删除。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232518
---

# Obsidian 插件：Filename Emoji Remover

> [!Note] 插件名片
> - 插件名称：Filename Emoji Remover
> - 插件作者：Yüksel Tolun
> - 插件说明：可以自动将笔记文件名中的表情符号删除。
> - 插件分类：[' 界面相关 ', ' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/YTolun/obsidian-filename-emoji-remover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-filename-emoji-remover)

## 概述

可以自动将笔记文件名中的表情符号删除。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/YTolun/obsidian-filename-emoji-remover/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-filename-emoji-remover]] 插件的自述翻译

# Obsidian 文件名表情符号移除插件

这是一个简单的插件，适用于笔记应用 [Obsidian](https://obsidian.md)，它可以重命名您的文件，以删除文件名中的表情符号。

免责声明

### 🔴！请注意，这是我开发的第一个 Obsidian 插件，可能存在错误。在使用之前请备份，并谨慎使用！🔴

用例

自动从其他应用程序（如 Readwise）导入笔记的服务有时会将带有表情符号的内容导入到笔记文件名中。然而，这对其他服务来说可能是一个问题，主要是 Dropbox。

## 功能

- **手动删除：**扫描您的保险库中的所有现有文件，并从文件名中删除表情符号。可以从插件设置选项卡或通过命令面板中的命令触发。
- **创建时自动删除：**当创建新文件时，自动从标题中删除表情符号。如果您从其他平台导入内容（例如 Readwise），这将非常有用。_需要在插件设置中启用。_
- **重命名时自动删除：**当文件被重命名时，自动从标题中删除表情符号。_需要在插件设置中启用。_
- **无空文件名：**如果文件名仅由表情符号组成，并且在删除后变为空字符串，则此插件将为该文件生成一个通用且随机的名称，以防止其消失。

## 更新日志

### 1.0.1

- 根据评审意见提高了代码质量
- 改进生成的通用/随机文件名，以便在删除后不会变为空字符串。



