---
uid: 2024022121204546
title: Obsidian 插件：【Readme】open-as-md
tags: ['obsidian插件', 'readme']
description: 编辑非md文件类型的文件，将其转换为markdown文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】open-as-md

> [!Note] 插件名片
> - 插件名称：open-as-md
> - 插件作者：kursad-k
> - 插件说明：编辑非 md 文件类型的文件，将其转换为 markdown 文件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kursad-k/obsidian-openasmd)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-as-md)

## 概述

编辑非 md 文件类型的文件，将其转换为 markdown 文件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kursad-k/obsidian-openasmd/main/README.md)
>

---

## Readme(翻译）

下面是 [[open-as-md]] 插件的自述翻译

【机翻】

The quick brown fox jumps over the lazy dog.

### 它是如何工作的

这个插件让你可以像编辑 .md 文件一样在 Obsidian 中编辑非 markdown 文件。你可以通过在插件设置窗口中设置文件类型的扩展名来设置你想要在 Obsidian 中编辑的文件类型。请确保按照下面图片中显示的方式用逗号分隔它们。

在设置文件扩展名后，你需要禁用并启用插件。

![Alt text](https://cdn.pkmer.cn/covers/open-as-md_2_0.png!pkmer)

### 兼容性

所需的 API 仅在 Obsidian **0.10.12**中添加，因此，这是使用此插件所需的最低版本的 Obsidian。

## 安装

### 从 Obsidian 内部

您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开 设置 > 第三方插件
- 确保安全模式为**关闭**
- 点击 浏览社区插件
- 搜索此插件
- 点击 安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件
更新
您可以按照相同的步骤来更新插件
- 从 GitHub 存储库的“Releases”部分下载最新版本
- 从 zip 文件中提取插件文件夹到您的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，请禁用安全模式并启用插件。否则，前往设置，第三方插件，确保安全模式已关闭，并从那里启用插件。

## 开发

这个项目使用 Typescript 来提供类型检查和文档。

该存储库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api) 以 Typescript 定义格式，其中包含 TSDoc 注释描述其功能。

如果您想要为开发做出贡献和/或只是根据自己的需求进行自定义，

您可以执行以下操作：

- 克隆这个存储库。
- 运行 `npm i` 或 `yarn` 安装依赖
- 运行 `npm run build` 进行编译。
- 复制 `manifest.json`, `main.js` 文件夹（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）
- 重新加载 obsidian 以查看更改

或者，您可以直接将存储库克隆到您的插件文件夹中，一旦依赖项安装完成，使用 `npm run dev` 启动监视模式下的编译。

您可能需要重新加载 obsidian（`ctrl+R`）以查看更改。

# 版本历史

## 0.0.3

初始发布！
