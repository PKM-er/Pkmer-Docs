---
uid: 20230817224054
title: Obsidian 插件：Prettier Format
tags: ['文件重构', 'obsidian插件', 'readme']
description: 对您的笔记进行主观格式化。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Prettier Format

> [!Note] 插件名片
> - 插件名称：Prettier Format
> - 插件作者：Andrew Lisowski
> - 插件说明：对您的笔记进行主观格式化。
> - 插件分类：[' 文件重构 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hipstersmoothie/obsidian-plugin-prettier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-prettier)

## 概述

对您的笔记进行主观格式化。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hipstersmoothie/obsidian-plugin-prettier/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-plugin-prettier]] 插件的自述翻译

# obsidian-plugin-prettier

使用 [prettier](https://prettier.io/) 格式化笔记。

该插件提供以下命令：

| 操作                           | 快捷键            |
| ----------------------------- | ---------------- |
| 格式化整个笔记                | 默认为空白       |
| 格式化选定的部分              | 默认为空白       |

以及以下设置：

| 设置             | 默认值  |
| ----------------- | ------- |
| 保存时格式化      | false   |
| 格式化代码块      | false   |

将以下内容添加到笔记的前置元数据中，以启用特定文件的插件功能。

```yaml
---
plugin-prettier: true
---

```

## 安装

要么直接从 Obsidian 安装最新版本，要么将 [最新版本](https://github.com/hipstersmoothie/obsidian-plugin-prettier/releases/latest) 解压缩到 `<vault>/.obsidian/plugins/` 文件夹中。

安装完插件后，您需要确保“Prettier Format”开关已打开。

设置完成后，您将在命令面板（`CMD + P`）中看到此插件的命令。

您可以将命令分配给热键以便于使用。
