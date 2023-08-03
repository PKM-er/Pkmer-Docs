---
uid: 2023080322250214
title: Obsidian 插件：Prioritize
tags: ['obsidian插件', 'readme']
description: 在Obsidian中优先处理您的任务和笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Prioritize

> [!Note] 插件名片
> - 插件名称：Prioritize
> - 插件作者：EloiMusk
> - 插件说明：在 Obsidian 中优先处理您的任务和笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/EloiMusk/obsidian-prio-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?prioritize)

## 概述

在 Obsidian 中优先处理您的任务和笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/EloiMusk/obsidian-prio-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[prioritize]] 插件的自述翻译

# 优先级插件

Obsidian 的优先级插件允许您轻松地为笔记或任务标记优先级。您可以配置优先级级别的数量和名称，并在不同的预设之间切换或创建自己的预设。

## 安装

您可以通过 Obsidian 的 Community Plugin Browser 安装 Prioritize 插件，或者直接从 GitHub 存储库构建它：<https://github.com/EloiMusk/obsidian-prio-plugin>

### 来源

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监视模式。

### 手动安装插件

- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/your-plugin-id/` 中。

使用方法

安装并配置插件后，您可以通过选择要优先处理的文本并从不同的优先级级别中选择来优先处理笔记或任务。您可以在插件设置中配置级别数量，并为每个优先级级别分配一个名称。设置好偏好后，您可以轻松地在不同的预设之间切换或创建自己的预设。

以下是所有可用操作的列表：

- `设置优先级`：将选定的文本标记为优先级级别。
- `移除优先级`：移除先前设置的优先级级别。
- `增加优先级`：增加选定文本的优先级级别。
- `降低优先级`：降低选定文本的优先级级别。

要使用这些操作，您可以从命令面板中访问它们，或为每个操作创建一个热键。

### 配置

在设置选项卡中，您可以根据自己的喜好配置 Prioritize 插件。这包括设置优先级的级别数量，并为每个级别分配一个名称。要保存您的配置，您需要点击“保存”按钮。

插件中还提供了预设选项。要创建一个新的预设，按照您的喜好配置插件，然后点击“添加预设”按钮。这将打开一个窗口，您可以在其中输入一个唯一的预设名称。一旦您命名了预设，它将被保存为一个新的预设。记得之后保存设置以保留您的新预设。

要应用一个预设，点击您想要使用的预设上的“应用”按钮。这将用预设覆盖当前的设置。如果您想要覆盖一个预设，可以通过点击“覆盖”按钮来实现。这将用当前的配置覆盖预设。

如果您想要删除一个预设，只需点击“删除”按钮即可。

## 贡献

如果您想为 Prioritize 插件做出贡献，请 fork GitHub 存储库并提交拉取请求。

## 许可证

Prioritize 插件在 GNU 许可证下发布。

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
