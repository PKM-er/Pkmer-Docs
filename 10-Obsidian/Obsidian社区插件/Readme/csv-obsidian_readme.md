---
uid: 2023080322164774
title: Obsidian 插件：CSV Editor
tags: ['编辑器', 'obsidian插件', 'readme']
description: 在Obsidian中编辑CSV文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CSV Editor

> [!Note] 插件名片
> - 插件名称：CSV Editor
> - 插件作者：death_au
> - 插件说明：在 Obsidian 中编辑 CSV 文件
> - 插件分类：[' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/csv-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-obsidian)

## 概述

在 Obsidian 中编辑 CSV 文件

![CSV Editor](https://cdn.pkmer.cn/covers/csv-obsidian.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/csv-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[csv-obsidian]] 插件的自述翻译

# CSV 编辑器 Obsidian 插件

[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/deathau/csv-obsidian?style=for-the-badge&sort=semver)](https://github.com/csv-obsidian/releases/latest)

![GitHub所有发布](https://img.shields.io/github/downloads/deathau/csv-obsidian/total?style=for-the-badge)

这是一个用于 [Obsidian](https://obsidian.md) 的插件，允许以类似电子表格的表格格式查看和编辑 CSV 文件。

**备份你的 CSV 文件！** 这个插件非常新，因此是实验性的。在这个阶段，数据丢失是非常真实的可能性！

![截图](https://github.com/deathau/csv-obsidian/raw/main/screenshot.png)

### 特点

- 直接从 Obsidian 打开（和编辑）CSV 文件！
- 自动保存
- 每个文件都有包含标题的设置（在本地存储中保留）
- 对每个单元格进行 Markdown 编辑和预览（内部链接尚未正确工作）
- 通过点击列名对数据进行排序
- 按列值进行筛选
- 冻结列
- 插入新的列/行

安装

### 来自 GitHub

- 下载最新的主分支
- 将 zip 文件中的文件提取到您的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/ini-obsidian`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

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

然而，如果你非常喜欢它，非要给我寄钱的话，可以通过 [PayPal](https://paypal.me/deathau) 往我的帽子里扔一些硬币，或者通过 [GitHub赞助商](https://github.com/sponsors/deathau) 赞助我。

# 版本历史

0.0.1

csv-obsidian 的初始版本！请参见上面的 [功能](#Features)
