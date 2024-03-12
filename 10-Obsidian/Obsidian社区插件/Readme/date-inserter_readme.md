---
uid: 20240312193744
title: Obsidian 插件：【Readme】Date Inserter
tags: ['obsidian插件', 'readme']
description: 在光标位置使用日历插入日期。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Date Inserter

> [!Note] 插件名片
> - 插件名称：Date Inserter
> - 插件作者：namikaze-40p
> - 插件说明：在光标位置使用日历插入日期。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/namikaze-40p/obsidian-date-inserter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?date-inserter)

## 概述

在光标位置使用日历插入日期。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/namikaze-40p/obsidian-date-inserter/main/README.md)

---

## Readme(翻译）

下面是 [[date-inserter]] 插件的自述翻译

# 黑曜石日期插入器

这是一个 [Obsidian](https://obsidian.md/) 插件，可以使用日历在光标位置插入日期。

可以通过以下方式调用日历。

- 使用快捷键。（**推荐**）
- 从命令面板中选择 `Date Inserter: Open Calendar`。

![演示](https://raw.githubusercontent.com/namikaze-40p/obsidian-date-inserter/master/demo/%20date-insert.gif)

- 您可以自定义日期格式。
  - 例如 1）`mm/dd/yyyy` => `01/23/2024`
  - 例如 2）`DD mm-dd` => `Tuesday 01-23`
  - 例如 3）`yyyy.mm.dd(D)` => `2024.01.23(Tue)`

**注意：** 该插件的日历使用 [vanillajs-datepicker](https://mymth.github.io/vanillajs-datepicker/#/)。请查看此链接（[vanillajs-datepicker > Date String & Format](https://mymth.github.io/vanillajs-datepicker/#/date-string+format)）以获取格式详细信息。

## 安装

在以下方式中的一种安装插件。

- [Community Plugins browser](#community-plugins-browser)
- [Manually](#manually)
- [BRAT Plugin Manager](#brat-plugin-manager)

### 社区插件浏览器

This plugin is available in Obsidian's Community Plugins Browser.

1. Launch the Obsidian application.
2. Open the `Settings`, select `Community Plugins`, and select `Browse`.
3. Search for `Date Inserter`, and click it.
4. Click the `Install`.

### 手动安装

您也可以手动安装此插件。

1. 访问 [Releases](https://github.com/namikaze-40p/obsidian-date-inserter/releases)，并下载最新版本的 3 个文件（`main.js`，`manifest.json`，`style.css`）。
2. 创建一个名为 `date-inserter` 的新文件夹。
3. 将下载的 3 个文件移动到 `date-inserter` 文件夹中。
4. 将文件夹放置在您的 `.obsidian/plugins` 目录中。如果您不知道在哪里，可以在 Obsidian 中的 Community Plugins 中找到。已安装插件右侧有一个文件夹图标。单击该图标，即可打开您的插件文件夹。
5. 重新加载插件。（最简单的方法就是重新启动 Obsidian）
6. 正常激活插件。

### BRAT 插件管理器

您还可以使用 BRAT 插件来安装此插件。

1. 使用 Obsidian 插件管理器安装 BRAT
2. 在左侧的 Obsidian 设置中，选择列表中的 BRAT。
3. 在 BRAT 设置中，点击“添加 Beta 插件”按钮
4. 在文本框中，提供此存储库的 URL
	- <https://github.com/namikaze-40p/obsidian-date-inserter>
5. 安装 `Date Inserter` 后，在 Obsidian 设置中激活它。



