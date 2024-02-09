---
uid: 2023120719282626
title: Obsidian 插件：【Readme】File path to URI
tags: ['转换工具', 'obsidian插件', 'readme']
description: 将文件路径转换为uri以便更容易地使用链接到Obsidian之外的本地文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】File path to URI

> [!Note] 插件名片
> - 插件名称：File path to URI
> - 插件作者：Michal Bureš
> - 插件说明：将文件路径转换为 uri 以便更容易地使用链接到 Obsidian 之外的本地文件
> - 插件分类：[' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MichalBures/obsidian-file-path-to-uri)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-file-path-to-uri)

## 概述

将文件路径转换为 uri 以便更容易地使用链接到 Obsidian 之外的本地文件

![File path to URI](https://cdn.pkmer.cn/covers/obsidian-file-path-to-uri.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MichalBures/obsidian-file-path-to-uri/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-file-path-to-uri]] 插件的自述翻译

# 文件路径转 URI（Obsidian.md 插件）

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/MichalBures/obsidian-file-path-to-uri)](https://github.com/MichalBures/obsidian-file-path-to-uri/releases/latest)

[![GitHub All Releases](https://img.shields.io/github/downloads/MichalBures/obsidian-file-path-to-uri/total)](https://github.com/MichalBures/obsidian-file-path-to-uri/releases)

该插件允许您将本地路径转换为文件 URL 链接，以便链接到位于 Obsidian 保险库之外的文件或文件夹。

![演示](https://cdn.pkmer.cn/covers/obsidian-file-path-to-uri_1_2.gif)

使用 Obsidian 的原生行为❗

据我所知，这个插件实际上不再需要了，因为你可以在拖动任何文件或文件夹到笔记时按住 `Ctrl` 键，Obsidian 会将其粘贴为链接。

`C:\Users\Obsidian\Documents` 将被粘贴为 `[Documents](file:///C:%5CUsers%5CObsidian%5CDocuments)`

如何使用这个插件

### 转换书写路径

1. 选择要转换的整个路径。
2. 使用默认的快捷键 `Ctrl/Cmd + Alt + L` 或按下 `Ctrl/Cmd + P` 打开命令面板，并搜索 `File path to URI: Toggle selected file path to URI and back`。
3. 所选路径将在文件路径和文件 URL 之间切换。

### 将剪贴板中的路径转换为文件 URI

1. 将任何路径（例如 `C:\Users\Obsidian\Documents` 或 `\\network\folder\`）复制到剪贴板中。
2. 使用默认热键 `Ctrl/Cmd + Alt + Shift + L` 或按下 `Ctrl/Cmd + P` 打开命令面板，并搜索 `File path to URI: Paste file path as file uri`。
3. 转换后的路径将被粘贴到编辑器中（在本例中为 `file:///C:/Users/Obsidian/Documents` 或 `file:///%5C%5Cnetwork/folder/`）。

### 将剪贴板中的路径转换为链接

1. 复制任何路径，例如 `C:\Users\Obsidian\Documents` 或 `\\network\folder\` 到剪贴板中。
2. 按下 `Ctrl/Cmd + P` 打开命令面板并搜索
   `File path to URI: Paste file path as file uri link`。该命令没有默认的快捷键，如果您想使用键盘快捷键，可以在 Obsidian 设置中设置自定义快捷键。
3. 转换后的路径将被粘贴到编辑器中（例如，在本例中为 `[C:\Users\Obsidian\Documents](file:///C:/Users/Obsidian/Documents)` 或 `[\\\\network\folder\](file:///%5C%5Cnetwork/folder/)`）。

### 将剪贴板中的路径转换为只包含名称的链接

1. 复制任何路径，例如 `C:\Users\Obsidian\Documents` 或 `\\network\folder\` 到剪贴板中。
2. 按下 `Ctrl/Cmd + P` 打开命令面板并搜索
   `File path to URI: Paste file path as file uri link - Name only`。该命令没有默认的快捷键，如果您想使用键盘快捷键，可以在 Obsidian 设置中设置自定义快捷键。
3. 转换后的路径将被粘贴到编辑器中（例如，在本示例中，可能是 `[Documents](file:///C:/Users/Obsidian/Documents)` 或 `[folder](file:///%5C%5Cnetwork/folder/)`）。

如何更改热键

您可以在 Obsidian 设置中的热键下更改热键组合。查找“文件路径转换为 URI：切换所选文件路径为 URI 和返回”和“文件路径转换为 URI：将文件路径粘贴为文件 URI”。

![hotkeys](https://cdn.pkmer.cn/covers/obsidian-file-path-to-uri_1_3.png!pkmer)

## 转换

- `C:\Users\Obsidian\Documents` <-> `file:///C://Users//Obsidian//Documents`
- `\\network\folder\` <-> `file:///%5C%5Cnetwork/folder/`
- ` "C:\Users\Obsidian\Documents" ` -> `file:///C://Users//Obsidian//Documents`

从选择中去除前后的空格和双引号

# 版本历史

1.0.0（2021 年 1 月 17 日）

- 初始版本

1.1.0（2021 年 2 月 11 日）

- 增加对网络路径的支持，并从选择中删除空格和引号

## 1.2.0（2021 年 4 月 22 日）

- 添加命令，将转换后的文件路径从剪贴板粘贴为文件 URI

## 1.3.0（2021 年 7 月 25 日）

- 添加命令，将转换后的文件路径从剪贴板粘贴为文件 URI 链接

## 1.4.0（2022 年 7 月 1 日）

- 添加另一个命令，将从剪贴板粘贴的转换后的文件路径作为文件 URI 链接，但链接标题仅为文件/文件夹名称。

## 1.4.1（2022 年 9 月 4 日）

- 修复了文件/文件夹名称中只有链接的 '%20' 而不是空格的问题

## 鸣谢

代码和自述文件灵感来自于 [https://github.com/agathauy/wikilinks-to-mdlinks-obsidian](https://github.com/agathauy/wikilinks-to-mdlinks-obsidian)
