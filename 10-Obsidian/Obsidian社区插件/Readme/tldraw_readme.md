---
uid: 20240227160841
title: Obsidian 插件：【Readme】Tldraw
tags: ['obsidian插件', 'readme']
description: 将Tldraw集成到Obsidian中，允许用户在虚拟白板上绘制和编辑内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tldraw

> [!Note] 插件名片
> - 插件名称：Tldraw
> - 插件作者：Sam Alhaqab
> - 插件说明：将 Tldraw 集成到 Obsidian 中，允许用户在虚拟白板上绘制和编辑内容。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/holxsam/tldraw-in-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tldraw)

## 概述

将 Tldraw 集成到 Obsidian 中，允许用户在虚拟白板上绘制和编辑内容。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/holxsam/tldraw-in-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[tldraw]] 插件的自述翻译

# 在 Obsidian 插件中使用 Tldraw

<https://github.com/holxsam/holxsam/assets/41220650/1786cc75-3a15-431f-b13a-e8f51cfde952>

这个 Obsidian 插件允许用户在 Obsidian 中使用 [Tldraw](www.tldraw.com)，这是一个微型绘图应用程序。用户可以绘图、规划，并使用所有 Tldraw 的工具来增强他们的 Obsidian 体验。每个绘图的数据都存储为一个常规的 markdown 文件，类似于 Excalidraw 插件，这意味着用户始终可以以纯 markdown 的形式访问他们的数据。用户可以选择在 Tldraw 视图和 markdown 视图之间切换，以便在需要包含反向链接、标签或任何其他元素以便将他们的绘图与现有知识库链接起来时使用。

提示：您可以使用命令面板、键盘快捷键、右下角的状态栏切换、文件菜单和上下文菜单在视图模式之间切换。请查看插件设置选项卡以获取自定义选项。

## 发展目标

该插件和存储库的主要目标是与 Tldraw 的最新版本保持同步，并添加以下功能：

- 在 markdown 中引用 tldraw 文件时预览绘图。
- 将 markdown 注释添加到 tldraw 中。
- 导出和导入工具。

## 安装

### 简单方法

- 从社区插件中下载 `Obsidian42 - BRAT`。
- 进入 `Obsidian42 - Brat` 的设置，选择 `添加Beta插件`。
- 复制并粘贴此存储库：`https://github.com/holxsam/tldraw-in-obsidian`。
- 返回到 `社区插件`，确保启用 `Tldraw`。
- 据我所知，这也是在 Obsidian 移动应用程序中获取 Tldraw 的唯一方法。
- 前往 [releases](https://github.com/holxsam/tldraw-in-obsidian/releases) 并下载一个发布版本（推荐使用最新版本）。
- 导航到您首选的保险库中的插件文件夹：`VaultFolder/.obsidian/plugins/`
- 创建一个名为 `tldraw-in-obsidian` 的新文件夹
- 将 `main.js`、`styles.css`、`manifest.json` 复制粘贴到新创建的 `/tldraw-in-obsidian` 文件夹中。
- 确保您通过进入设置 > 社区插件 > 已安装插件 > 切换 'Tldraw' 来启用插件。

## 开发

- 克隆此存储库或分叉到本地开发文件夹。
- 将此文件夹放置在您的 `.obsidian/plugins` 文件夹中。
- 安装 NodeJS，然后在存储库文件夹下的命令行中运行 `npm i`。
- 运行 `npm run dev` 将插件从 `main.ts` 编译到 `main.js`。
- 对 `/src` 中的文件进行更改。这些更改应自动编译到 `main.js` 和 `styles.css` 中。
- 要刷新更改，请转到设置>社区插件>禁用并启用插件。您也可以关闭您的保险库，然后重新打开它，但这更加麻烦。
- 不要编辑存储库根目录中的 `styles.css` 文件。编辑 `/src/styles.css` 中的文件，更改将自动反映。

## 贡献

- 这个插件欢迎贡献。如果您有功能想法或想要报告错误，您可以创建一个问题。如果您是开发人员，想要修复错误或添加功能，请随时提交拉取请求。

## 许可和归属

所有 [Tldraw](https://github.com/tldraw/tldraw) 的代码都属于他们自己，我没有对其进行任何更改。同时也要感谢 [Excalidraw插件](https://github.com/zsviczian/obsidian-excalidraw-plugin) 对我如何构建这个 Tldraw 插件提供的灵感。
