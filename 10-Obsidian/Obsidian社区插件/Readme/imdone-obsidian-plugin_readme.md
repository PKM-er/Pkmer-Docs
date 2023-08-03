---
uid: 2023080322240402
title: Obsidian 插件：【Readme】Open cards in imdone from obsidian.
tags: ['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
description: 从Obsidian中打开imdone看板中的卡片，从imdone中在Obsidian中打开卡片的源头。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Open cards in imdone from obsidian.

> [!Note] 插件名片
> - 插件名称：Open cards in imdone from obsidian.
> - 插件作者：saxmanjes
> - 插件说明：从Obsidian中打开imdone看板中的卡片，从imdone中在Obsidian中打开卡片的源头。
> - 插件分类：['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/imdone/imdone-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?imdone-obsidian-plugin)

## 概述

从Obsidian中打开imdone看板中的卡片，从imdone中在Obsidian中打开卡片的源头。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/imdone/imdone-obsidian-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[imdone-obsidian-plugin]] 插件的自述翻译


Imdone Obsidian插件
====

[Imdone](https://imdone.io)是一个简单而强大的看板工具，可以在本地文件夹中的纯文本Markdown文件或代码上使用。

该插件将把所有的imdone卡片转换为obsidian中的imdone链接。点击链接将打开imdone到该卡片。

如果在您的看板设置中打开了**在卡片源代码行处打开obsidian**，则Imdone将以编辑模式打开obsidian到卡片源代码。

适用于imdone 1.14.0及更高版本。

<!--
# [资源](#NOTE:10)
<card>
- [在Finder中打开](/)
- [imdone/imdone-obsidian-plugin](https://github.com/imdone/imdone-obsidian-plugin)
- [obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)

<!--
创建时间：2021-03-15T13:25:07.843Z
-->
</card>

## Obsidian示例插件

这是一个用于Obsidian（https://obsidian.md）的示例插件。

该项目使用TypeScript提供类型检查和文档。
该存储库依赖于TypeScript定义格式中的最新插件API（obsidian.d.ts），其中包含描述其功能的TSDoc注释。

**注意：** Obsidian API仍处于早期Alpha版本，随时可能发生更改！

此示例插件演示了插件API的一些基本功能。
- 使用`styles.css`将默认字体颜色更改为红色。
- 添加了一个带有通知的丝带图标，点击后显示通知。
- 添加了一个名为“打开示例模态框”的命令，用于打开模态框。
- 在设置页面上添加了一个插件设置选项卡。
- 注册了一个全局点击事件，并将'click'输出到控制台。
- 注册了一个全局间隔，将'setInterval'记录到控制台。

第一次开发插件吗？

新插件开发者的快速入门指南：

- 使用“使用此模板”按钮将此存储库复制为模板。
- 将存储库克隆到本地开发文件夹中。为方便起见，您可以将此文件夹放置在`.obsidian/plugin/your-plugin-name`文件夹中。
- 安装NodeJS，然后在存储库文件夹下的命令行中运行`npm i`。
- 运行`npm run dev`将`main.ts`编译为`main.js`。
- 对`main.ts`进行更改（或创建新的`.ts`文件）。这些更改应自动编译为`main.js`。
- 重新加载Obsidian以加载插件的新版本。

### 发布新版本

- 使用新的版本号更新你的 `manifest.json` 文件，例如 `1.0.1`，并指定你的插件所需的最低 Obsidian 版本。
- 在你的 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 就可以下载与其兼容的旧版本插件。
- 使用你的新版本号作为 "Tag version" 创建一个新的 GitHub 发布。使用精确的版本号，不要包含前缀 `v`。参考这里的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将 `manifest.json`、`main.js` 和 `styles.css` 文件作为二进制附件上传。
- 发布该版本。

### 将您的插件添加到社区插件列表中

- 发布一个初始版本。
- 确保您的存储库的根目录中有一个 `README.md` 文件。
- 在 https://github.com/obsidianmd/obsidian-releases 上创建一个拉取请求，以添加您的插件。

### 如何使用

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。

### API文档

请参阅https://github.com/obsidianmd/obsidian-api -->



