---
uid: 2023080322151120
title: Obsidian 插件：Binary File Manager
tags: ['obsidian插件', 'readme']
description: 检测拱顶中的新二进制文件并创建具有元数据的Markdown文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Binary File Manager

> [!Note] 插件名片
> - 插件名称：Binary File Manager
> - 插件作者：qawatake
> - 插件说明：检测拱顶中的新二进制文件并创建具有元数据的 Markdown 文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qawatake/obsidian-binary-file-manager-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-binary-file-manager-plugin)

## 概述

检测拱顶中的新二进制文件并创建具有元数据的 Markdown 文件。

![Binary File Manager](https://cdn.pkmer.cn/covers/obsidian-binary-file-manager-plugin_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qawatake/obsidian-binary-file-manager-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-binary-file-manager-plugin]] 插件的自述翻译

## 二进制文件管理器插件

该插件可以检测存储库中的新二进制文件，并创建带有元数据的 Markdown 文件。

通过使用元数据文件，您可以利用 Obsidian 提供的丰富功能，例如：

- 全文搜索，
- 标签和别名，
- 内部链接等等。

例如，如果您在图像文件的元数据中添加标签，那么您可以通过标签搜索（并在元数据中跟随内部链接）间接访问图像文件。

[![Image from Gyazo](https://i.gyazo.com/6c46d863e4c31d0815bcf027fdb48f92.gif)](https://gyazo.com/6c46d863e4c31d0815bcf027fdb48f92)

### 快速开始

1. 安装并启用此插件。
2. 转到二进制文件管理器的设置选项卡，并启用自动检测。
3. 将一个静态文件（如 `sample.pdf`）添加到您的存储库中。

然后，您将在根目录中找到一个元数据文件 `INFO_sample_PDF.md`。

您可以自定义新文件的位置以及元数据文件的名称和内容的模板。

### 格式语法

您可以使用以下语法来格式化元数据文件的名称和内容。

#### 日期

| 语法 | 描述 |
| -- | -- |
| `{{CDATE:<FORMAT>}}` | 静态文件的创建时间。 |
| `{{NOW:<FORMAT>}}` | 当前时间。 |

- 用 [Moment.js 格式](https://momentjs.com/docs/#/displaying/format/) 替换 `<FORMAT>`。

#### 链接

| 语法 | 描述 |
| -- | -- |
| `{{LINK}}` | 内部链接，如 `[[image.png]]` |
| `{{EMBED}}` | 嵌入链接，如 `![[image.png]]` |

#### 路径

| 语法 | 描述 |
| -- | -- |
| `{{PATH}}` | 静态文件的路径。 |
| `{{FULLNAME}}` | 静态文件的完整名称。 |
| `{{NAME}}` | 去除扩展名的静态文件名称。 |
| `{{EXTENSION}}` | 静态文件的扩展名。 |

- 通过添加后缀 `:UP` 和 `:LOW`，您可以选择大写或小写字母。例如，`{{NAME:UP}}`。

### Templater 插件支持

您还可以使用 [Templater插件](https://github.com/SilentVoid13/Templater) 来格式化您的元数据文件。

只需安装 Templater 插件，并在二进制文件管理器的设置选项卡中设置 `Use Templater`。
