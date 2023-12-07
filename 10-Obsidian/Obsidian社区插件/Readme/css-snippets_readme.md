---
uid: 2023120719255469
title: Obsidian 插件：【Readme】css snippets
tags: ['样式工具', '美化', 'obsidian插件', 'readme']
description: 用于加载自定义css片段
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】css snippets

> [!Note] 插件名片
> - 插件名称：css snippets
> - 插件作者：Daniel Brandenburg
> - 插件说明：用于加载自定义 css 片段
> - 插件分类：[' 样式工具 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jdbrice/obsidian-css-snippets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?css-snippets)

## 概述

用于加载自定义 css 片段

![css snippets](https://cdn.pkmer.cn/covers/css-snippets_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jdbrice/obsidian-css-snippets/master/README.md)
>

---

## Readme(翻译）

下面是 [[css-snippets]] 插件的自述翻译

# Obsidian CSS Snippet Manager

一个用于加载自定义 CSS 代码片段的 Obsidian 插件

![示例动画](https://cdn.pkmer.cn/covers/css-snippets_2_0.gif!pkmer)

## 用法

将 `.css` 文件放入笔记库根目录下的 `css-snippets` 文件夹中。当插件加载时，它们将自动加载。

这将添加两个命令：

1. "css snippet: Reload" - 加载或重新加载 css 文件，如果您将新文件添加到文件夹中，请使用此命令。
2. "css snippet: Unload" - 卸载所有已加载的样式片段。

## 路线图

- [ ] 设置选项卡，允许用户设置存储代码片段的文件夹
- [ ] 单独切换代码片段（命令面板？）
- [ ] 考虑添加 SCSS 和 Sass 编译功能???
- [ ] 作用域样式（在页面前言中定义或基于标签等）- 但需要找到一种解决方案，使作用域样式仅适用于页面而不是全局。

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 针对 Obsidian **v0.9.7+**。

安装

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索“css snippets”
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自 GitHub

- 下载 [最新版本](https://github.com/jdbrice/obsidian-css-snippets/releases/latest)
- 从 zip 文件中提取 `obsidian-css-snippets` 文件夹到你的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，你可以按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，你可以禁用安全模式并启用插件。
否则，前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

## 开发

该项目使用 Typescript 提供类型检查和文档。
该仓库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api) 以 Typescript 定义格式，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到您的插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/cm-editor-syntax-highlight-obsidian/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将该仓库克隆到您的插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。
您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

# 版本历史

v0.1.0

初始版本。基本功能。
