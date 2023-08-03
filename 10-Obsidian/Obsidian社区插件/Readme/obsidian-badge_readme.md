---
uid: 2023080322231422
title: Obsidian 插件：【Readme】Obsidian Badge
tags: ['任务管理', '美化', '效率', 'obsidian插件', 'readme']
description: 可以自定义一个进度样式，方便你传入任何地方。需要了解下简单的语法规则。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Badge

> [!Note] 插件名片
> - 插件名称：Obsidian Badge
> - 插件作者：Jun Lin
> - 插件说明：可以自定义一个进度样式，方便你传入任何地方。需要了解下简单的语法规则。
> - 插件分类：['任务管理', '美化', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/linjunpop/obsidian-badge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-badge)

## 概述

可以自定义一个进度样式，方便你传入任何地方。需要了解下简单的语法规则。

![Obsidian Badge](https://cdn.pkmer.cn/covers/obsidian-badge.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/linjunpop/obsidian-badge/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-badge]] 插件的自述翻译


## Obsidian 徽章插件

![GitHub 发布徽章](https://badgen.net/github/release/linjunpop/obsidian-badge)

这是一个在 Obsidian（https://obsidian.md）中渲染徽章的插件。

## 用法

`obsidian-badge` 围栏代码块将会将每一行渲染为一个嵌入式徽章。

```obsidian-badge
阅读 - 平面国：11/23

锻炼：77/100
```

```obsidian-badge
我的年度计划：29/40
```

将会渲染为

<img width="781" alt="image" src="https://user-images.githubusercontent.com/214616/164978149-e968feab-d43c-459f-9180-31ba6a8dce4e.png">

## 安装

### 从 Obsidian 应用程序安装

在设置 -> 社区插件中搜索“Badge”，您可以找到并安装此插件。

您可以查看官方指南 https://help.obsidian.md/Advanced+topics/Third-party+plugins#Discover+and+install+community+plugins。

### 手动安装插件

找到最新的发布版本：https://github.com/linjunpop/obsidian-badge/releases，然后将 `main.js` 和 `manifest.json` 复制到你的 vault 的 `.obsidian/plugins/obsidian-badge` 目录下（例如 `VaultFolder/.obsidian/plugins/obsidian-badge/`）。

## 开发

新插件开发者的快速入门指南：

- 使用“使用此模板”按钮（如果看不到，请登录GitHub）将此存储库复制为模板。
- 将存储库克隆到本地开发文件夹。为方便起见，您可以将此文件夹放在`.obsidian/plugins/your-plugin-name`文件夹中。
- 安装NodeJS，然后在存储库文件夹下的命令行中运行`npm i`。
- 运行`npm run dev`将`main.ts`编译为`main.js`。
- 对`main.ts`进行更改（或创建新的`.ts`文件）。这些更改应自动编译为`main.js`。
- 重新加载Obsidian以加载插件的新版本。
- 在设置窗口中启用插件。
- 对Obsidian API进行更新，请在存储库文件夹下的命令行中运行`npm update`。

### 发布新版本

- 使用新的版本号更新你的 `manifest.json`，例如 `1.0.1`，以及你的最新版本所需的最低 Obsidian 版本。
- 使用 `"new-plugin-version": "minimum-obsidian-version"` 更新你的 `versions.json` 文件，这样旧版本的 Obsidian 可以下载与其兼容的旧版本插件。
- 使用你的新版本号作为 "Tag version" 创建新的 GitHub 发布。使用确切的版本号，不要包含前缀 `v`。参考这里的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将 `manifest.json`、`main.js`、`styles.css` 文件作为二进制附件上传。注意：`manifest.json` 文件必须在你的仓库的根路径和发布中都存在。
- 发布该版本。

> 你可以通过在 `manifest.json` 中手动更新 `minAppVersion` 后运行 `npm version patch`、`npm version minor` 或 `npm version major` 来简化版本升级过程。
> 这个命令将会在 `manifest.json` 和 `package.json` 中升级版本，并在 `versions.json` 中添加新版本的条目。

### 将您的插件添加到社区插件列表中

- 检查 https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- 发布一个初始版本。
- 确保您的存储库的根目录中有一个 `README.md` 文件。
- 在 https://github.com/obsidianmd/obsidian-releases 上创建一个拉取请求，以添加您的插件。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。

### 使用eslint提高代码质量（可选）

- [ESLint](https://eslint.org/) 是一个分析代码以快速发现问题的工具。您可以运行ESLint来分析您的插件，以找出常见的错误和改进代码的方法。
- 要在此项目中使用eslint，请确保从终端安装eslint：
  - `npm install -g eslint`
- 要使用eslint分析此项目，请使用以下命令：
  - `eslint main.ts`
  - eslint将根据文件和行号创建一个报告，提供代码改进的建议。
- 如果您的源代码在一个文件夹中，比如`src`，您可以使用以下命令使用eslint分析该文件夹中的所有文件：
  - `eslint .\src\`

### API文档

请参阅https://github.com/obsidianmd/obsidian-api



