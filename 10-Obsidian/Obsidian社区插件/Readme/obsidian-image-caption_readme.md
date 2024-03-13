---
uid: 2023080322201164
title: Obsidian 插件：Image Caption
tags: ['obsidian插件', 'readme']
description: 为图片添加标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Caption

> [!Note] 插件名片
> - 插件名称：Image Caption
> - 插件作者：bicarlsen
> - 插件说明：为图片添加标题。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bicarlsen/obsidian_image_caption)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-caption)

## 概述

为图片添加标题。

![Image Caption](https://cdn.pkmer.cn/covers/obsidian-image-caption.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bicarlsen/obsidian_image_caption/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-image-caption]] 插件的自述翻译

# Obsidian 图像标题

**这是目前的中间版本，存在已知问题。**

### 为您的图片添加标题

![Obsidian图片标题示例](https://raw.githubusercontent.com/bicarlsen/obsidian_image_caption/main/example.png)

## 使用

**内部嵌入**

在嵌入图像的源后面使用管道符（|）来显示文本作为图像的标题。

例如：

```markdown
![[my_amazing_image.png|Check out this amazing picture.]]
```

**外部嵌入**

使用 alt 文本作为标题显示。

允许调整图像大小，与内部嵌入的工作方式完全相同。（见下文）

例如：

```markdown
![Another beautiful picture.](https://prettypicture.com/image01.png)
```

**调整大小**

当调整内部嵌入的图像大小时，通常可以在管道（|）字符后使用 `<width>x<height>`。使用关键字 `auto` 作为 `<width>` 或 `height` 来设置一个维度的大小并自动缩放另一个维度。

例如：

```markdown
![[my_amazing_image.png|50x50]]
![[my_long_photo|autox200]]
```

现在可以调整内部和外部嵌入的图像大小并带有标题。但是，如果存在标题文本，必须使用分隔符来区分。

例如，如果 `"` 是标题分隔符。

```markdown
![[my_amazing_image.png|50x50]]

![[my_amazing_image.png|50x50 "Look at my caption ma!"]]

!["I can caption anything!" 100x150](https://prettypicture.com/image01.png)

![100x150](https://prettypicture.com/image01.png)
```

## 设置

+ **标签：** 在所有标题前添加的文本。<br/>
要自动编号，请使用“#”。如果“#”字符要输出，请使用反斜杠（'\\'）进行转义，即 '\\#'。反斜杠也必须进行转义才能输出，即 '\\\\'。

+ **CSS：** 对图像标题应用自定义 CSS 样式。<br/>
使用“data-image-caption-index”属性对标题进行索引，以便根据图表编号进行样式设置。

+ **分隔符：** 指示标题文本的分隔符。<br/>
分隔符是一组用于标识要用作标题的文本的字符。分隔符必须将您希望显示为标题的文本括起来。

	+ 如果未设置分隔符，则使用整个文本。
	+ 可以使用单个分隔符作为开始和结束。<br/>
    例如 `"` -> `"我的标题"` 或 `!!` -> `!!我的标题!!`

	+ 可以使用逗号（,）将开始和结束分隔符分开使用。<br/>
    例如 `{, }` -> `{我的标题}` 或 `<<, >>` -> `<<我的标题>>`

	+ **注意：** 分隔符字符集中的空格将被修剪。
	+ **注意：** 只有第一个和最后一个分隔符会匹配，因此分隔符字符可以在标题中使用而无需特殊考虑，例如转义。
+ **将标题作为 HTML：** 允许将标题呈现为 HTML。<br/>
通过打开此选项，您的标题将作为 HTML 插入到文档中，而不是作为文本。

## 常见问题解答

+ **我的标题没有显示出来：** 只有在重新渲染图像时才会添加标题。尝试更改标题（必须多于一个尾随空格）并再次尝试。如果这解决了问题，请将其改回，否则请提交一个问题。

## 已知问题

+ 一些字幕缺失。
+ 无法与 Pandocs 导出兼容。
