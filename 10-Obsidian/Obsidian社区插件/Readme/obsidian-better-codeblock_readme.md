---
uid: 2023080322145909
title: Obsidian 插件：Better CodeBlock
tags: ['obsidian插件', 'readme']
description: 在阅读视图中为代码块添加标题、行号和折叠按钮
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Better CodeBlock

> [!Note] 插件名片
> - 插件名称：Better CodeBlock
> - 插件作者：StarGrey
> - 插件说明：在阅读视图中为代码块添加标题、行号和折叠按钮
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/stargrey/obsidian-better-codeblock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-better-codeblock)

## 概述

在阅读视图中为代码块添加标题、行号和折叠按钮

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/stargrey/obsidian-better-codeblock/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-better-codeblock]] 插件的自述翻译

这是一个为 Obsidian（<https://obsidian.md>）开发的插件。

该插件的大部分代码来自以下两个插件（感谢他们的贡献），图标来自 Admonition。

<https://github.com/tadashi-aikawa/obsidian-embedded-code-title>

<https://github.com/nyable/obsidian-code-block-enhancer>

我将两个插件的代码合并并修改了其中一些功能。

### 特性

增强了预览模式下的 Markdown 代码块。添加了标题、行号和代码块的高亮显示，您可以点击标题来折叠或展开代码块。

在 1.0.5 版本中，使用下面的语法来设置代码块的标题、高亮和折叠：

- 使用 `TI:"your title"` 来添加标题
- 使用 `HL:"numbers"` 来添加高亮，比如 `HL:"1,2,3"`、`HL:"1-3"`，用逗号分隔
- 使用 `"FOLD"` 来设置默认折叠

如果您有更好的想法，请提交一个问题

![image20220606011534.png](screenshots/image20220606011534.png)

在 1.0.4 版本中，添加了右上角的语言显示，如下所示：

![screenshots/image-20220601202203.png](screenshots/image-20220601202203.png)

### 已知问题

- 有时会出现自动换行错误，可以通过切换预览模式来解决
- PDF 导出不能自动换行

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-better-codeblock/` 中。



