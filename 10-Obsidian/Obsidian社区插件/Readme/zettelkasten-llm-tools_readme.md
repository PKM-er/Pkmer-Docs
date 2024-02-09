---
uid: 2023102611090229
title: Obsidian 插件：【Readme】Zettelkasten LLM Tools
tags: ['obsidian插件', 'readme']
description: 由大型语言模型（例如语义搜索）驱动的Zettelkasten笔记记录。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Zettelkasten LLM Tools

> [!Note] 插件名片
> - 插件名称：Zettelkasten LLM Tools
> - 插件作者：Karl Smith
> - 插件说明：由大型语言模型（例如语义搜索）驱动的 Zettelkasten 笔记记录。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/glovguy/obsidian-gpt-zettelkasten)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zettelkasten-llm-tools)

## 概述

由大型语言模型（例如语义搜索）驱动的 Zettelkasten 笔记记录。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/glovguy/obsidian-gpt-zettelkasten/main/README.md)
>

---

## Readme(翻译）

下面是 [[zettelkasten-llm-tools]] 插件的自述翻译

<img src="NoteRobot.png" alt="Zettelkasten LLM Tools Logo" width="200" height="200" style="border-radius: 16px; border-style: solid; border-width: 4px; border-color: black;" />

# Zettelkasten LLM 工具

由大型语言模型驱动的 Zettelkasten 笔记记录。

## 特点

- 生成嵌入并索引当前笔记
- 对与当前笔记相似的笔记进行语义搜索
- 根据文件名模式批量生成嵌入并索引笔记

## 如何使用

首先，在设置页面中添加您的 OpenAI API 密钥。安装并激活插件后，在 Obsidian 中打开设置面板，然后点击 `Zettelkasten LLM Tools` 选项卡。[从OpenAI请求API密钥](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)，并将其粘贴到设置字段中。

### 为当前笔记生成索引

为了仅为一个笔记生成索引，打开 [Obsidian命令面板](https://help.obsidian.md/Plugins/Command+palette)，输入 "Generate embeddings for current note"，然后按回车键。该笔记将通过 OpenAI API 创建一个向量嵌入，并添加到本地索引中。

如果当前笔记已经被添加到索引中，并且自上次创建嵌入向量以来内容文本没有发生变化，将不会请求新的嵌入向量。如果内容文本发生了任何变化，将会请求一个新的嵌入向量。

### 批量生成笔记索引

要一次索引多个笔记，请打开 [Obsidian命令面板](https://help.obsidian.md/Plugins/Command+palette)，然后输入“打开批量生成嵌入模态框”。这将打开批量索引模态框。

通过输入“允许模式”和/或“禁止模式”来为您想要的笔记创建嵌入向量。这些模式不是正则表达式，但它们接受 `*` 作为通配符。当以逗号分隔时，“允许模式”还可以接受多个匹配模式。为了排除符合“允许模式”的文件，添加一个“禁止模式”来将其移除。

批量索引模态框将显示与给定模式匹配的文件路径列表。一旦您确认这是您要使用的列表，请点击开始批量嵌入，向 OpenAI 请求向量嵌入，并将其存储到本地索引中。

如果批处理中的笔记已经添加到索引中，并且自上次嵌入创建以来确切的内容文本没有更改，它将不会请求新的嵌入向量。如果内容文本有任何更改，将会请求一个新的嵌入向量。

使用语义搜索查找与当前笔记相似的笔记

要使用语义搜索查找与当前打开的笔记相似的笔记，打开 [Obsidian命令面板](https://help.obsidian.md/Plugins/Command+palette)，然后输入 "Semantic Search for notes similar to current note"。如果当前笔记尚未嵌入，将会从 OpenAI 请求一个嵌入。然后，相似的笔记将按照它们的相似度得分（余弦相似度）的顺序显示在模态框中，同时显示它们的内容文本。（请注意，这只会在已经使用嵌入进行本地索引的笔记上运行搜索。）要复制笔记的链接文本，请单击链接文本旁边的图标以将链接文本复制到剪贴板中。

## 手动安装插件

- 克隆这个仓库。
- 运行 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监视模式。
- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/obsidian-gpt-zettelkasten/` 目录下。



