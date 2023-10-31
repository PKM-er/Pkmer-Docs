---
uid: 2023080322244716
title: Obsidian 插件：Pivotal Tracker Integration
tags: ['obsidian插件', 'readme']
description: 从Pivotal Tracker中提取故事、错误和任务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pivotal Tracker Integration

> [!Note] 插件名片
> - 插件名称：Pivotal Tracker Integration
> - 插件作者：jondeates
> - 插件说明：从 Pivotal Tracker 中提取故事、错误和任务。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jonnydeates/obsidian-pivotal-tracker-integration-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pivotal-tracker-integration)

## 概述

从 Pivotal Tracker 中提取故事、错误和任务。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JonnyDeates/obsidian-pivotal-tracker-integration-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[pivotal-tracker-integration]] 插件的自述翻译

# Obsidian Pivotal Tracker 集成插件

这是一个为 Obsidian（<https://obsidian.md）开发的插件，用于集成> Pivotal Tracker（<https://www.pivotaltracker.com/）。>

该项目使用 Typescript 提供类型检查和文档。

## 设置插件

安装完插件后，您需要配置一些内容。

- 首先，您需要获取您的跟踪器 API 密钥
  - 这可以在您的帐户设置中找到
- 然后，您需要获取您的跟踪器项目 ID
  - 这可以在您的跟踪器项目的 URL 中找到
- 最后，您需要指定一个文件夹位置，用于存储拉取的故事。

如何使用

- 在插件中进入设置。
- 点击“Pull Tracker Stories Ribbon”或点击拉取故事的命令。
- 尽情享受！

## 克隆这个项目

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。
- 运行 `npm run build` 以编译插件。它将生成 main.js 文件。

## 手动安装插件

- 将 `main.js` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。



