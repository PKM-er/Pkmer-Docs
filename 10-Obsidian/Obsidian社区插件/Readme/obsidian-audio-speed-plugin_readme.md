---
uid: 20230817224053
title: Obsidian 插件：Audio Speed Plugin
tags: ['obsidian插件', 'readme']
description: 在 Markdown 预览期间改变音频文件的播放速率。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Audio Speed Plugin

> [!Note] 插件名片
> - 插件名称：Audio Speed Plugin
> - 插件作者：kaizau
> - 插件说明：在 Markdown 预览期间改变音频文件的播放速率。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kaizau/obsidian-audio-speed-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-audio-speed-plugin)

## 概述

在 Markdown 预览期间改变音频文件的播放速率。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kaizau/obsidian-audio-speed-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-audio-speed-plugin]] 插件的自述翻译

# Obsidian 音频速度插件

一个简单的 [Obsidian](https://obsidian.md) 插件，可以在 Markdown 预览期间更改音频文件的播放速度。

## 安装

1. 进入 `设置 > 社区插件`，关闭安全模式。
2. 安装此插件（可以从社区列表中安装，也可以手动安装）。
3. 打开插件并重新加载 Obsidian。

开发

第一次开发插件吗？

新插件开发者的快速入门指南：

- 使用“使用此模板”按钮将此存储库复制为模板（如果看不到，请登录 GitHub）。
- 将存储库克隆到本地开发文件夹。为方便起见，您可以将此文件夹放置在 `.obsidian/plugins/your-plugin-name` 文件夹中。
- 安装 NodeJS，然后在存储库文件夹下的命令行中运行 `npm i`。
- 运行 `npm run dev` 将 `main.ts` 编译为 `main.js`。
- 对 `main.ts` 进行更改（或创建新的 `.ts` 文件）。这些更改应自动编译为 `main.js`。
- 重新加载 Obsidian 以加载插件的新版本。
- 在设置窗口中启用插件。
- 对于 Obsidian API 的更新，请在存储库文件夹下的命令行中运行 `npm update`。

### 发布新版本

- 使用新的版本号更新你的 `manifest.json` 文件，例如 `1.0.1`，并指定你的插件所需的最低 Obsidian 版本。
- 在你的 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 就可以下载与其兼容的旧版本插件。
- 使用你的新版本号作为 "Tag version" 创建一个新的 GitHub 发布。使用精确的版本号，不要包含前缀 `v`。参考这里的示例：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- 将 `manifest.json`、`main.js` 和 `styles.css` 文件作为二进制附件上传。
- 发布该版本。

### 将您的插件添加到社区插件列表中

- 发布一个初始版本。
- 确保您的存储库的根目录中有一个 `README.md` 文件。
- 在 <https://github.com/obsidianmd/obsidian-releases> 上创建一个拉取请求，以添加您的插件。

### 如何使用

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。

### API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>
