---
uid: 2023080322132709
title: Obsidian 插件：【Readme】13th Age Statblocks
tags: ['obsidian插件', 'readme']
description: 在黑曜石中渲染13世纪的状态块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：13th Age Statblocks

> [!Note] 插件名片
> - 插件名称：13th Age Statblocks
> - 插件作者：ben
> - 插件说明：在黑曜石中渲染 13 世纪的状态块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ben/obsidian-13th-age-statblocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?13th-age-statblocks)

## 概述

在黑曜石中渲染 13 世纪的状态块。

![13th Age Statblocks](https://cdn.pkmer.cn/covers/13th-age-statblocks.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ben/obsidian-13th-age-statblocks/master/README.md)
>

---

## Readme(翻译）

下面是 [[13th-age-statblocks]] 插件的自述翻译

# 13th Age 属性块

该插件用于渲染 13th Age 插件，并包含基于 SRD 内容的怪物基础。

![](https://user-images.githubusercontent.com/39902/149404290-3dcb6793-0437-496d-b066-b2d7d5355374.png)

![](https://user-images.githubusercontent.com/39902/149404315-5a9d6d45-55da-421b-b424-9596d2f95d55.png)

### 开发

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/13th-age-statblocks/` 目录下。

### 使用 eslint 提高代码质量（可选）

- [ESLint](https://eslint.org/) 是一个分析代码以快速发现问题的工具。您可以运行 ESLint 来分析您的插件，以找出常见的错误和改进代码的方法。
- 要在此项目中使用 eslint，请确保从终端安装 eslint：
  - `npm install -g eslint`
- 要使用 eslint 分析此项目，请使用以下命令：
  - `eslint main.ts`
  - eslint 将根据文件和行号创建一个报告，提供代码改进的建议。
- 如果您的源代码在一个文件夹中，比如 `src`，您可以使用以下命令使用 eslint 分析该文件夹中的所有文件：
  - `eslint .\src\`

### API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>
