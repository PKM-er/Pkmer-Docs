---
uid: 20230817224055
title: Obsidian 插件：PARA Shortcuts
tags: ['obsidian插件', 'readme']
description: 这个插件提供有用的命令来使用PARA方法设置和管理您的知识。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：PARA Shortcuts

> [!Note] 插件名片
> - 插件名称：PARA Shortcuts
> - 插件作者：gOAT
> - 插件说明：这个插件提供有用的命令来使用 PARA 方法设置和管理您的知识。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gOATiful/para-shortcuts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?para-shortcuts)

## 概述

这个插件提供有用的命令来使用 PARA 方法设置和管理您的知识。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gOATiful/para-shortcuts/master/README.md)

---

## Readme(翻译）

下面是 [[para-shortcuts]] 插件的自述翻译

# para-shortcuts

该插件提供了一些有用的命令，以使用 PARA 方法来设置和管理您的知识。

PARA 方法

关于 PARA 方法及其好处的完整文章可以在 Tiago Forte 的 [博客文章](https://fortelabs.co/blog/para/) 中找到。

PARA 文件夹结构的简要总结：

- **项目**：项目是“与目标相关联的一系列任务，有截止日期”。
- **领域**：责任领域是“一种需要长期维护的活动领域”。
- **资源**：资源是“一个持续感兴趣的主题或主题”。
- **归档**：归档包括“其他三个类别中的非活动项目”。

附加信息：将个人相关信息放在领域中，将通常有用的信息放在资源中。

## 命令

所有命令都可以在命令面板中访问。

默认：`CTRL+p`

概述：

- [初始化 Vault](init-vault)
- [创建新条目](create-new-entry)
- [移动到归档](move-to-archive)
- [从归档中恢复条目](restore-entry-from-archive)
- [推迟一个条目](postpone-an-entry)

### 初始化 Vault

Para 遵循简单的文件夹结构来组织您的知识。

此命令将在 Vault 的根目录中相应地创建文件夹。

### 创建新条目

在所选文件夹中使用基本模板创建一个新的 markdown 文件条目。

### 移动到存档

将当前打开的文件移动到存档中的相应文件夹中。

如果不存在，此命令将创建匹配的 para 文件夹和子文件夹。

请注意，此命令仅存在于非“存档”文件夹中。

### 从存档中恢复条目

此命令仅适用于“存档”文件夹中的文件。

它将选定的文件及其子文件夹恢复到其原始的 PARA 文件夹中。

推迟一个条目

您可以使用“推迟此条目”命令来推迟一个条目。

当前打开的文件将被移动到同一段落文件夹中的“推迟”文件夹中。

重新安排一个推迟的条目

可以通过“重新安排此条目”命令恢复“推迟”文件夹中的条目。

如果剩余的父文件夹为空，则将被删除。

进一步改进

如果您希望在此插件中看到其他功能，请随时在问题部分提交功能请求。

## 支持