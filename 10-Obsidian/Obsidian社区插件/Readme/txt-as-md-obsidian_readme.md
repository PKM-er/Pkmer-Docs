---
uid: 2023080322285077
title: Obsidian 插件：txt as md
tags: ['编辑器', '编辑工具', 'obsidian插件', 'readme']
description: 允许你在 Obsidian 中编辑 txt 文本文件，和编辑 Markdown 文件一样。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：txt as md

> [!Note] 插件名片
> - 插件名称：txt as md
> - 插件作者：death_au
> - 插件说明：允许你在 Obsidian 中编辑 txt 文本文件，和编辑 Markdown 文件一样。
> - 插件分类：[' 编辑器 ', ' 编辑工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/txt-as-md-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?txt-as-md-obsidian)

## 概述

允许你在 Obsidian 中编辑 txt 文本文件，和编辑 Markdown 文件一样。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/txt-as-md-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[txt-as-md-obsidian]] 插件的自述翻译

# txt as md Obsidian 插件

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/deathau/txt-as-md-obsidian?style=for-the-badge&sort=semver)](https://github.com/deathau/txt-as-md-obsidian/releases/latest)

![GitHub All Releases](https://img.shields.io/github/downloads/deathau/txt-as-md-obsidian/total?style=for-the-badge)

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，允许将 txt 文件以 markdown 的形式进行编辑。

![Screenshot](https://github.com/deathau/txt-as-md-obsidian/raw/main/screenshot.png)

### 兼容性

所需的 API 仅在 Obsidian **0.10.12**中添加，因此，这是使用此插件所需的最低版本的 Obsidian。

安装

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自 GitHub

- 从 GitHub 存储库的 Releases 部分下载最新版本
- 从 zip 文件中提取插件文件夹到您的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

## 安全性

> 第三方插件可以访问您计算机上的文件，连接到互联网，甚至安装其他程序。

该插件的源代码可在 GitHub 上获取，供您自行审查，但将插件安装到 Obsidian 中目前是基于信任的。

我在这里向您保证，我不会采集您的数据，也不会将信息发送到互联网或以其他方式对您的系统进行任何不正当操作。然而，请注意，我*有可能*这样做，您只能相信我的话。

## 开发

该项目使用 Typescript 提供类型检查和文档。

该仓库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api)，以 Typescript 定义格式提供，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将仓库克隆到插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。

您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

定价

咦？这是我为了好玩而制作的开源插件。它完全免费。

然而，如果你非常喜欢它，非要给我钱的话，可以通过以下方式向我投币：

[![GitHub赞助商](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)

[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# 版本历史

初始版本发布！
