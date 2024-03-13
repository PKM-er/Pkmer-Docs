---
uid: 2023080322134521
title: Obsidian 插件：Advanced New File
tags: ['笔记文件处理', '效率', 'obsidian插件', 'readme']
description: 可以通过快捷键或者命令面板，建立新的笔记文件，并在建立过程中就指定好笔记位置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced New File

> [!Note] 插件名片
> - 插件名称：Advanced New File
> - 插件作者：Ivan Chernov
> - 插件说明：可以通过快捷键或者命令面板，建立新的笔记文件，并在建立过程中就指定好笔记位置。
> - 插件分类：[' 笔记文件处理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vanadium23/obsidian-advanced-new-file)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-advanced-new-file)

## 概述

可以通过快捷键或者命令面板，建立新的笔记文件，并在建立过程中就指定好笔记位置。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vanadium23/obsidian-advanced-new-file/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-advanced-new-file]] 插件的自述翻译

## Obsidian 高级新建文件

![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22obsidian-advanced-new-file%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Obsidian 高级新建文件是 [Obsidian](https://obsidian.md/) 的一个插件，提供了选择文件夹而不是笔记创建的功能。

新的笔记文件以 `Untitled.md` 文件名创建，以提供与默认 Obsidian 相同的行为。

该插件受到 [Note refactor](https://github.com/lynchjames/note-refactor-obsidian) 和 [类似扩展](https://marketplace.visualstudio.com/items?itemName=dkundel.vscode-new-file)（用于 Vs Code）的启发。

## 功能

**提示：**您可以将命令“高级新建文件”设置为快捷键，如 `Ctrl/Cmd` + `Alt` + `N`。

生成命令“高级新建文件”并选择目录。然后您可以输入文件的完整路径。

<https://user-images.githubusercontent.com/8286271/163267550-3699ec7d-27e3-4ea4-9bba-a0d9afeef44e.mp4>

### 如何开发

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。



