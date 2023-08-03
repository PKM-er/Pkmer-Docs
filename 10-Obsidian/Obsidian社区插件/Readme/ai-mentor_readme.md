---
uid: 20230803211924
title: Obsidian 插件：【Readme】AI Mentor
tags: ['obsidian插件', 'readme']
description: 在Obsidian中与您的开源AI导师见面。提问、获取答案并学习新知识。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AI Mentor

> [!Note] 插件名片
> - 插件名称：AI Mentor
> - 插件作者：clementpoiret
> - 插件说明：在Obsidian中与您的开源AI导师见面。提问、获取答案并学习新知识。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/clementpoiret/ai-mentor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-mentor)

## 概述

在Obsidian中与您的开源AI导师见面。提问、获取答案并学习新知识。

![AI Mentor](https://cdn.pkmer.cn/covers/ai-mentor.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/clementpoiret/ai-mentor/master/README.md)
> 

---

## Readme(翻译）

下面是 [[ai-mentor]] 插件的自述翻译



# Obsidian AI导师插件

## 作者和贡献者

- [@clementpoiret](https://www.github.com/clementpoiret)

## 简介

Obsidian AI导师插件是一款创新工具，旨在通过利用先进的人工智能技术，提升您的笔记记录体验。通过这个插件，您将得到Alfred的指导，Alfred是一个智能代理，负责提高您的写作技巧和格式化您的笔记。

目前，该插件使用OpenAI的API，但将来它将能够使用其他人工智能服务，如Cohere或Anthropic。

AI导师插件的优势

该插件的一个关键优势是，它允许您从世界上一些最伟大的思想家（如苏格拉底或史蒂夫·乔布斯）那里获得建议和灵感。您还可以使用该插件通过选择笔记中的文本来解释任何内容，这对于需要澄清复杂思想的任何人来说都是一个有用的功能。

此外，AI导师插件还可以使您从项目符号列表中删除任何内容，从而更容易组织和完善您的笔记。最后，该插件可以纠正和增强您编写的任何文本，确保您的笔记没有错误且写得漂亮。

通过使用AI导师插件，您将能够将您的笔记记录提升到一个新的水平，并在学习或职业生涯中取得更大的成功。

该存储库依赖于最新的插件API（obsidian.d.ts），其以TypeScript定义格式提供，并包含描述其功能的TSDoc注释。

**注意：**Obsidian API仍处于早期阶段，随时可能发生变化！

> Alfred编辑了这个介绍 :) 感谢Alfred！

## 如何使用

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的笔记库 `VaultFolder/.obsidian/plugins/ai-mentor/` 目录下。

## 设置

以下设置可用：

- 首选导师：您想要与之聊天的导师，
- 语言：您记笔记的语言，
- OpenAI API 密钥\*：**必填**

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)

## 贡献

欢迎贡献！

请参阅 `contributing.md` 以了解如何开始。

使用/示例

与导师聊天

只需点击功能区中的聊天图标即可打开聊天面板。然后，您可以与导师聊天并向他寻求建议。

![聊天面板](docs/assets/chat.png)

选择一个项目符号列表，右键单击以打开上下文菜单（也可在命令中找到）。然后，点击“删除”选项以从列表中删除文本。

解释一段文本

选择一段文本，右键点击打开上下文菜单（也可在命令中使用）。然后，点击“ELI5”选项来解释这段文本。

![解释](docs/assets/eli5.png)

增强文本

选择一段文本，右键点击打开上下文菜单（也可在命令中找到）。然后，点击“增强”选项来格式化文本。

![增强](docs/assets/enhance.png)

API文档

请参阅<https://github.com/obsidianmd/obsidian-api>



