---
uid: 2024042221305595
title: Obsidian 插件：【Readme】Outline Converter
tags: ['obsidian插件', 'readme']
description: 将大纲转换为连续文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Outline Converter

> [!Note] 插件名片
> - 插件名称：Outline Converter
> - 插件作者：masaki39
> - 插件说明：将大纲转换为连续文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/masaki39/outline-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?outline-converter)

## 概述

将大纲转换为连续文本。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/masaki39/outline-converter/main/README.md)

---

## Readme(翻译）

下面是 [[outline-converter]] 插件的自述翻译

I am learning Chinese.

# Obsidian 大纲转换器插件

- Obsidian 大纲转换器插件
	- 特点
		- 该插件将项目符号列表大纲转换为连续文本。
		- 它包括命令以在缩进级别 1-3 处折叠文本。
		- 预设转换命令将 `[[@citekey]]` 转换为 Pandoc 引用样式，假设与引用插件一起使用。
	- 安装
		- 您可以从 Obsidian 设置中的“社区插件”中下载。
	- 自定义转换器
		- 您可以选择转换所选文本，或者如果未选择任何文本，则将访问活动笔记中的所有内容。
		- 自定义如何处理从 1 到 5 级缩进的文本。
		- 选项包括在内容之前或之后插入文本，忽略内容以及使用换行符。
	- 选择导出方法
		- 从以下选项中选择导出文本的方法：
		- 复制到剪贴板。
		- 追加到光标当前位置。
		- 追加到活动笔记底部。
		- 替换一个部分；如果不存在，则在笔记底部创建它。
	- 预设命令
		- 此功能专为学术写作而设计。
		- 它将大纲转换为 Pandoc 引用样式，与后续使用 Pandoc 插件的手稿提交要求兼容。
		- “部分”表示 h2 标题。
		- “段落”引入双行间距。
		- “跳过”忽略一个缩进级别。
		- “内容”转换为连续文本。
		- “参考”提取并将 `[[@citekey]]` 转换为 Pandoc 引用样式。
	- 注意
		- 此大纲已转换为下面的文本。

## 黑曜石大纲转换器插件

### 特点

此插件将项目符号列表大纲转换为连续文本。它包括将文本折叠到缩进级别 1-3 的命令。预设转换命令将 `[[@citekey]]` 转换为 Pandoc 引用样式，假设与引用插件一起使用。

### 安装

您可以在 Obsidian 设置中的“社区插件”中下载。

### 自定义转换器

您可以选择转换所选文本，或者如果没有选择任何内容，则将访问活动笔记中的所有内容。自定义如何处理每个缩进级别从 1 到 5 的文本。选项包括在内容之前或之后插入文本，忽略内容，并使用换行符。

### 选择导出方法

选择以下选项来导出您的文本：复制到剪贴板。追加到光标当前位置。追加到活动笔记的底部。替换一个部分；如果不存在，则在笔记底部创建它。

### 预设命令

此功能专为学术写作定制。它将大纲转换为 Pandoc 引用样式，与后续使用 Pandoc 插件符合手稿提交要求。 "Section" 表示 h2 标题。 "Paragraph" 引入双行间隔。 "Skip" 忽略缩进级别。 "Content" 转换为连续文本。 "Reference" 提取并将 `[[@citekey]]` 转换为 Pandoc 引用样式。

### 注意

这个大纲已经被转换成下面的文本。
