---
uid: 2023080322204410
title: Obsidian 插件：Janitor
tags: ['obsidian插件', 'readme']
description: 在Obsidian Vault上执行清理任务
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Janitor

> [!Note] 插件名片
> - 插件名称：Janitor
> - 插件作者：Gabriele Cannata
> - 插件说明：在 Obsidian Vault 上执行清理任务
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Canna71/obsidian-janitor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?janitor)

## 概述

在 Obsidian Vault 上执行清理任务

![Janitor](https://cdn.pkmer.cn/covers/janitor.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Canna71/obsidian-janitor/master/README.md)
>

---

## Readme(翻译）

下面是 [[janitor]] 插件的自述翻译

# Janitor 插件

该插件帮助保持保险库的控制，可能会删除以下资源。

孤立文件

这些是媒体或附件，没有被任何地方引用。清理工具还会查找前置内容（例如 `annotation-target` 或类似内容）。

## 空文件

这些文件要么是空的，要么只包含空白字符（换行符、制表符等）。

大文件

您可以指定一个大小限制，Janitor 将提示您删除大文件。使用时请自行承担风险。默认情况下，即使“要求确认”设置被禁用，Janitor 也会在即将删除大文件时提示。

## 过期笔记

Janitor 使用类似于 [Obsidian Expiring Notes](https://github.com/joerncodes/obsidian-expiring-notes) 的方法，通过在 frontmatter 中查找（可配置的）属性来设置笔记的过期日期。例如：

```
---
expires: 2022-09-01
---
```

Janitor 还提供了实用的命令，用于轻松地将过期日期设置到笔记中。

## 排除的文件

Janitor 可以排除 Obsidian 排除的文件（设置 ->文件和链接 ->排除的文件），但用户也可以根据不同的标准指定排除的条件（例如基于文件扩展名或路径）。

如何运行

Janitor 可以设置在启动时运行。如果设置了“询问确认”，它将提示用户进行确认对话框。用户可以选择要删除的文件和要执行的操作（在 Obsidian 中垃圾箱、在操作系统中垃圾箱或永久删除）。

Janitor 扫描还可以通过功能区按钮或命令启动。

![扫描结果对话框](media/dialog.png)
