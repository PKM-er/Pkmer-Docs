---
uid: 2023080322192691
title: Obsidian 插件：Grandfather
tags: ['界面相关', '状态栏', 'obsidian插件', 'readme']
description: 状态栏上显示时间和日期的简单插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Grandfather

> [!Note] 插件名片
> - 插件名称：Grandfather
> - 插件作者：Danny Hernandez
> - 插件说明：状态栏上显示时间和日期的简单插件。
> - 插件分类：[' 界面相关 ', ' 状态栏 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/noatpad/obsidian-grandfather)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-grandfather)

## 概述

状态栏上显示时间和日期的简单插件。

![Grandfather](https://cdn.pkmer.cn/covers/obsidian-grandfather.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/noatpad/obsidian-grandfather/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-grandfather]] 插件的自述翻译

# 祖父

这是一个相当简单的插件，它在状态栏上显示时间（如果需要，还可以显示日期）。我只是为了尝试使用 Obsidian API 而制作了这个插件，因为我正在将我的笔记迁移到 Obsidian 上。

您可以从预定义的时间格式列表中进行选择，或者使用自定义格式，您可以在 [这里](https://momentjs.com/docs/#/displaying/format/) 找到有关它的信息。

![演示图片](demo.png)

## 安装

### 来自 Obsidian

- 在 Obsidian 中，浏览设置 -> 社区插件，搜索此插件
- 安装并启用 Grandfather 插件

### 来自 GitHub 发布

- 前往最新的发布版本 [这里](https://github.com/noatpad/obsidian-grandfather/releases/latest)，并下载 `grandfather.zip` 文件
- 将 zip 文件的内容解压到您的存储库的插件文件夹中：`<vault>/.obsidian/plugins`
- 重新加载 Obsidian，并在设置 ->社区插件中启用该插件

### 来自 GitHub 仓库

- 克隆仓库
- 运行 `npm i && npm run build` 在本地构建插件文件
- 将 `manifest.json` 和 `dist/main.js` 复制到你的笔记库插件文件夹中的一个新文件夹中：`<vault>/.obsidian/plugins`
- 重新加载 Obsidian 并在设置 -> 社区插件中启用插件

## 开发

您也可以继续开发和自定义插件以满足您的喜好（尽管它仍然是一个简单的时钟，所以说实话，我会感到惊讶）：

- 克隆存储库
- 运行 `npm i` 安装依赖项
- 运行 `npm run dev` 运行一个监视脚本，它会自动将更改移动到您的插件文件夹中
  - 记得在 `rollup.config.dev.js` 中将 `TEST_VAULT` 更改为您将在其上测试插件的 vault
- 如有必要，请重新加载 Obsidian



