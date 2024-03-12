---
uid: 20230817224055
title: Obsidian 插件：Update Relative Links
tags: ['obsidian插件', 'readme']
description: 更新相对链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Update Relative Links

> [!Note] 插件名片
> - 插件名称：Update Relative Links
> - 插件作者：val
> - 插件说明：更新相对链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/val3344/obsidian-update-relative-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?update-relative-links)

## 概述

更新相对链接

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/val3344/obsidian-update-relative-links/master/README.md)

---

## Readme(翻译）

下面是 [[update-relative-links]] 插件的自述翻译

# 更新相对链接

[中文](./README_zh.md)

## 插件功能

Obsidian 的“自动更新内部链接”选项的实现存在问题。在文件移动后，只有对该文件的链接会自动更新，而对该文件中其他文件的链接不会更新。该插件用于解决这个问题。还有一个命令可以批量修复所有现有的链接。

例如，有两个文件如下：

`dirA/fileA`:

````markdown
[fileB](../dirB/fileB.md)
````

`dirB/fileB`:

````markdown
[fileA](../dirA/fileA.md)
````

将 `fileA` 从 `dirA` 移动到 `dirB` 后：

`dirB/fileA`:

````markdown
[fileB](../dirB/fileB.md)
````

`dirB/fileB`:

````markdown
[fileA](fileA.md)
````

该插件的功能是将 `dirB/fileA` 中的 `[fileB](../dirB/fileB.md)` 修复为 `[fileB](fileB.md)`。

## 说明

该插件包含两个功能：

第一个功能：在文件移动后，自动修复链接的相对路径。一旦安装并启用插件，移动文件时会自动触发，无需进一步操作。

第二个功能：批量修复所有文件中的链接为相对路径。打开命令面板（默认快捷键为 `Ctrl + P`），搜索 "Update all relative links"，然后按 Enter 键执行。

插件限制

为了使用 Markdown 的链接语法，必须关闭“使用 [[Wikilinks]]”选项。使用相对路径的目的也是为了使笔记更通用，如果您还使用 Wiki 链接，就没有必要使用相对路径。

为什么使用相对路径

Obsidian 的一个巨大优势是笔记完全由 Markdown 文件组成，因此无需担心迁移问题。使用相对路径可以使笔记更加灵活多用。例如，可以使用其他 Markdown 编辑器查看和编辑笔记。如果将笔记与 Git 同步，还可以直接在网页上查看笔记。如果不使用相对路径，在 Obsidian 之外的地方，链接在笔记中将无法被识别。
