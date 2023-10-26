---
uid: 2023102611075071
title: Obsidian 插件：【Readme】Finnish Spellcheck
tags: ['obsidian插件', 'readme']
description: 使用Voikko的芬兰语拼写检查器。/ 使用Voikko的芬兰语拼写检查器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Finnish Spellcheck

> [!Note] 插件名片
> - 插件名称：Finnish Spellcheck
> - 插件作者：Anto Keinänen
> - 插件说明：使用 Voikko 的芬兰语拼写检查器。/ 使用 Voikko 的芬兰语拼写检查器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/antoKeinanen/obsidian-finnish-spellcheck)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?finnish-spellcheck)

## 概述

使用 Voikko 的芬兰语拼写检查器。/ 使用 Voikko 的芬兰语拼写检查器。

![Finnish Spellcheck](https://cdn.pkmer.cn/covers/finnish-spellcheck.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/antoKeinanen/obsidian-finnish-spellcheck/main/README.md)
>

---

## Readme(翻译）

下面是 [[finnish-spellcheck]] 插件的自述翻译

Obsidian 的芬兰语拼写检查是一个插件，可以将高级拼写检查和语法分析集成到 Obsidian 编辑器中。它利用 Voikko，这是一个用于芬兰语的工具，包括形态分析、拼写、语法检查、连字符以及其他语言数据。很遗憾，目前我们只支持 Obsidian 的计算机版本。

## 安装

**注意：目前无法直接从 Obsidian 插件市场安装此插件。**

### 手动安装

1. 从 [发布页面](https://github.com/antoKeinanen/obsidian-finnish-spellcheck/releases) 下载最新的 `main.js`、`styles.css` 和 `manifest.json` 文件。
2. 将这些文件复制到 Obsidian vault 中的以下目录：`{vault path}/.obsidian/plugins/finnish-spellcheck/`。
3. 在某些情况下，您可能需要下载 libvoikko。有关下载 libvoikko 的说明，请参阅：[Windows](https://www.puimula.org/htp/testing/voikko-sdk/win-crossbuild/)，[Apple](https://formulae.brew.sh/formula/libvoikko)，对于 Linux，大多数软件包仓库应该都有可用的 libvoikko。

## 使用方法

安装完成后，此插件会添加一个名为“拼写检查”的命令面板入口，可以通过按下 `Ctrl+P` 来访问。此外，您还可以通过点击右下角的“Aa”按钮来运行拼写检查。

## 贡献

欢迎和感谢对这个插件的贡献。请确保任何贡献都遵循代码库的约定，使用 Angular 风格的提交消息，并使用 `npm run format` 格式化代码。

## 从源代码构建

要从源代码构建插件，请按照以下步骤进行操作：

1. 使用提供的 Dockerfile 克隆并构建 `libvoikko-js`，网址为 [https://github.com/niilo/libvoikko-js](https://github.com/niilo/libvoikko-js)。
2. 将 `libvoikko-morpho.js` 和 `libvoikko-morpho.d.ts` 移动到此存储库中的 `src/voikko` 目录下。
3. 使用命令 `npm run build` 进行构建。

## 许可证

该存储库采用 GNU Affero 通用公共许可证 v3.0。有关更多信息，请阅读 [许可证](https://github.com/antoKeinanen/obsidian-finnish-spellcheck/blob/main/LICENSE) 文件。

## 致谢

该插件在很大程度上依赖以下开源项目，我要感谢它们的作者和维护者：

- [Obsidian LanguageTool Plugin](https://github.com/Clemens-E/obsidian-languagetool-plugin) 由 Clemens-E 开发（根据 AGPL-3.0 许可）
- [libvoikko](https://github.com/voikko/corevoikko/tree/master/libvoikko)（网站：[https://voikko.puimula.org](https://voikko.puimula.org)）（根据 GPL-3.0 许可）
- [libvoikko-js](https://github.com/niilo/libvoikko-js) 由 Niilo Ursin 开发（根据 GPL-3.0 许可）



