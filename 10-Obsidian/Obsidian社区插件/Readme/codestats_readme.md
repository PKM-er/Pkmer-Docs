---
uid: 20231220112631
title: Obsidian 插件：【Readme】Code::Stats
tags: ['obsidian插件', 'readme']
description: Code::Stats插件允许您跟踪您在Obsidian编辑器中编写Markdown的进度，并为此获得经验值。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Code::Stats

> [!Note] 插件名片
> - 插件名称：Code::Stats
> - 插件作者：MiskaMyasa
> - 插件说明：Code::Stats 插件允许您跟踪您在 Obsidian 编辑器中编写 Markdown 的进度，并为此获得经验值。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Miskamyasa/obsidian-codestats)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codestats)

## 概述

Code::Stats 插件允许您跟踪您在 Obsidian 编辑器中编写 Markdown 的进度，并为此获得经验值。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Miskamyasa/obsidian-codestats/main/README.md)

---

## Readme(翻译）

下面是 [[codestats]] 插件的自述翻译

# Obsidian Code::Stats 插件

描述

这是一个 Obsidian 插件，用于向<https://codestats.net/api> 发送更新。>

Obsidian 的 Code::Stats 插件允许您跟踪编码进度，并通过在 Obsidian 编辑器中编写代码来获得经验值。使用此插件，您可以使用 Code::Stats API 将 XP 数据发送到您的 Code::Stats 帐户。

要开始使用，请简单地安装插件并在设置面板中输入您的 Code::Stats API 密钥。然后，插件将监听 Obsidian 编辑器中的 keyup 事件，并在您键入字符时将 XP 数据发送到 Code::Stats。

请注意，您需要一个 Code::Stats 帐户和 API 密钥才能使用此插件。您可以在<https://codestats.net/signup> 免费注册帐户，并且 API 密钥可以在 <https://codestats.net/my/machines> 页面上找到或创建。>

该项目使用 TypeScript 提供类型检查和文档。

该存储库依赖于 TypeScript 定义格式中的最新插件 API（obsidian.d.ts），其中包含描述其功能的 TSDoc 注释。

手动安装插件

将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-codestats/` 中。

API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>

## 概述

**插件 ID：** codestats

**开发者：** Denis (MiskaMyasa) Zaitsev

**移动支持：** 否

#codestats #obsidian #plugin

## 许可证

[MIT许可证](./LICENCE.md)
