---
uid: 2023080322285750
title: Obsidian 插件：【Readme】Unfilled Stats Highlighter
tags: ['obsidian插件', 'readme']
description: 通过自动识别和添加未填写的统计数据，简化您的统计/习惯追踪过程，使其更容易被发现和填写。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Unfilled Stats Highlighter

> [!Note] 插件名片
> - 插件名称：Unfilled Stats Highlighter
> - 插件作者：Zachary Hynes
> - 插件说明：通过自动识别和添加未填写的统计数据，简化您的统计/习惯追踪过程，使其更容易被发现和填写。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/White7292/obsidian-hd-unfilled-stats-highlighter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unfilled-stats-highlighter)

## 概述

通过自动识别和添加未填写的统计数据，简化您的统计/习惯追踪过程，使其更容易被发现和填写。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/White7292/obsidian-hd-unfilled-stats-highlighter/master/README.md)
>

---

## Readme(翻译）

下面是 [[unfilled-stats-highlighter]] 插件的自述翻译

未填充的统计信息高亮插件

未填充的统计信息高亮插件是一个实用的 [Obsidian](https://obsidian.md) 插件，旨在通过自动识别和添加前缀来简化您的统计/习惯跟踪过程，使其更容易发现和填写。该插件非常适合经常使用模板并需要快速简便地定位和完成缺失信息的用户。

该项目使用 Typescript 提供类型检查和文档。

该存储库依赖于最新的插件 API（obsidian.d.ts），其格式为 Typescript 定义格式，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期阶段，随时可能发生变化！

# 许可证

MIT

# 特点

- **自动添加前缀**：该插件会扫描您的笔记，找出未填写的统计信息，并使用可自定义的标记符号为其添加前缀，以便更容易找到并完成缺失的信息。
- **可自定义的标记符号**：您可以选择自己喜欢的未填写统计信息的前缀，例如表情符号、特殊字符或文本，以引起对需要完成的区域的注意。
- **实时更新**：当您填写缺失的信息时，插件会自动删除前缀，保持您的笔记整洁和最新。
- **可配置**：未填写统计信息高亮插件与 Obsidian 无缝集成，您可以轻松配置高亮插件，仅针对您的统计文件进行操作。

将您的插件添加到社区插件列表中

- 检查 <https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md>
- 发布一个初始版本。
- 确保您的存储库根目录中有一个 `README.md` 文件。
- 在 <https://github.com/obsidianmd/obsidian-releases> 上创建一个拉取请求，以添加您的插件。

## 如何使用

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。

使用 eslint 提高代码质量（可选）

- [ESLint](https://eslint.org/) 是一个分析代码以快速发现问题的工具。您可以运行 ESLint 来分析您的插件，以找出常见的错误和改进代码的方法。
- 要在此项目中使用 eslint，请确保从终端安装 eslint：
  - `npm install -g eslint`
- 要使用 eslint 分析此项目，请使用以下命令：
  - `eslint main.ts`
  - eslint 将根据文件和行号创建一个报告，提供代码改进的建议。
- 如果您的源代码在一个文件夹中，比如 `src`，您可以使用以下命令使用 eslint 分析该文件夹中的所有文件：
  - `eslint .\src\`

API 文档

请参阅<https://github.com/obsidianmd/obsidian-api>
