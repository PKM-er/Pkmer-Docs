---
uid: 2023102611074439
title: Obsidian 插件：【Readme】Email Reader
tags: ['obsidian插件', 'readme']
description: 为嵌入的 `*.eml` 文件提供预览模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Email Reader

> [!Note] 插件名片
> - 插件名称：Email Reader
> - 插件作者：Pulsovi
> - 插件说明：为嵌入的 `*.eml` 文件提供预览模式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pulsovi/obsidian_eml_reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?eml-reader)

## 概述

为嵌入的 `*.eml` 文件提供预览模式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pulsovi/obsidian_eml_reader/master/README.md)

---

## Readme(翻译）

下面是 [[eml-reader]] 插件的自述翻译

# 邮件阅读器

这个 Obsidian 插件允许你在笔记中预览 `*.eml` 文件的内容，就像你可以预览 `*.png` 或 `*.jpg` 文件的图片一样。

==不兼容移动设备==

使用案例

在我日常使用 Obsidian 时，有时需要插入来自电子邮件的信息。

我将电子邮件以 `*.eml` 格式下载，并像插入图像一样插入到笔记中。

当我切换到预览模式时，该文件会转换为一个按钮，其中包含文件的名称 `*.eml`，如果我点击该按钮，文件会在我的默认电子邮件阅读器应用中打开，这非常令人沮丧，你会同意的。

通过这个插件，Obsidian 预览模式能够直接显示电子邮件的内容。

## 用法

只需像导入图片一样导入 `*.eml` 文件（[与导入图片的方式相同](https://help.obsidian.md/Linking+notes+and+files/Embedding+files)）。

您可以通过在链接目标中添加 `|640x480` 来定义包含电子邮件的框架的尺寸，就像为图像添加尺寸一样，其中 640 是宽度，480 是高度。

```md
![[last-news.eml|640x480]]
```

如果只指定一个尺寸，它将被用作框架的高度。例如，`![[last-news.eml|100]].`

未指定的每个尺寸将被自动检测。

替代方案

以下插件可用于非常相似的目的。

### 邮件

允许您导入一个 `*.eml` 文件，根据可自定义的模板将其转换为 Markdown，并插入到当前笔记中。

您可以通过插件 [Email Block](obsidian://show-plugin?id=email-block-plugin) 来改进结果。

优点是邮件的内容直接显示在您的 Obsidian 原始笔记中，因此可以在全局 Obsidian 搜索中进行搜索。结果在移动设备上可查看。

缺点也是一样的：_邮件的内容直接显示在您的笔记中_。

根据邮件的内容，您可以将其视为污染或数据丢失。可能是因为您不是作者，只想在您的存储库中保留 _您自己的_ 话语，或者邮件内容太大，或者因为您想保留 `*.eml` 文件提供的确切可追溯性，但不想保留 Markdown。

您可以在 [GitHub](https://github.com/SkepticMystic/email-templates) 上获取它。

### Obsidian 代码预览

获取文本文件的内容并以代码块形式显示。

使用此插件，您可以使用以下代码显示包含所需文本的 `*.eml` 文件的一小部分：

````
```preview
path: ../attachments/last-news.eml
start: 文本开始行的行号
end: 文本结束行的行号
```
````

但是，非 [[ASCII]] 字符的渲染效果不佳...

您可以在 [github](https://github.com/zjhcn/obsidian-code-preview) 获取它

或在 [Obsidian插件目录](obsidian://show-plugin?id=obsidian-code-preview) 中获取它
