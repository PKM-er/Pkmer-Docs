---
uid: 20230329145829
title: Obsidian 插件：Image Caption 给图片增加说明题注
tags: [Obsidian, 插件, 图片增强]
description: Obsidian 插件：Image Caption 如何给图片增加说明，增加图标标题
author: OS
type: other
draft: false
editable: false
modified: 20230911144659
---

# Obsidian 插件：Image Caption 给图片增加说明题注

## 概述

我们平时阅读的书籍、文献&各种文档，其中都会包含诸多图片，而且在图片的旁边会有非常详细的说明文字（Caption），常用的编辑软件，如 Word、在线编辑工具中，也有类似的功能。

正因为有了说明文字（Caption），我们才能更加清楚地了解此图的含义。

![Pasted image 20230213152216](https://cdn.pkmer.cn/images/f0bda348c1e7c43fa25a2b2751d15739_MD5.jpg!pkmer)

在你使用 Obsidian 写笔记时，如何为图片增加说明文字（Caption）呢？

> [!Note] 插件名片
> - 插件名称：Image Captions
> - 插件作者：bicarlsen
> - 插件说明：为你笔记中的图片添加标题、说明
> - 插件项目地址：[点我跳转](https://github.com/bicarlsen/obsidian_image_caption)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-caption)

有关于图片注释，你看还可以看社区多方面的实践 [[在Obsidian中为图片添加注释]]

## 效果&特性

- 为图片加 caption 效果

## 配置

改插件目前没有任何配置选项，安装即可使用

## 使用

```语法
![[my_amazing_image.png|Look at my caption ma!]]
![[my_amazing_image.png|"Look at my caption ma!"]]
![[my_amazing_image.png|50x50 "Look at my caption ma!"]]

```

![image.png](https://cdn.pkmer.cn/images/20230507131245.png!pkmer)

### 调整大小

当调整内部嵌入的图像大小时，通常可以在管道（|）字符后使用 `<width>x<height>`。使用关键字 `auto` 作为 `<width>` 或 `height` 来设置一个维度的大小并自动缩放另一个维度。

### 外部嵌入

使用 alt 文本作为标题显示。

允许调整图像大小，与内部嵌入的工作方式完全相同。（见下文）

例如：

```
![[my_amazing_image.png|50x50]]
![[my_long_photo|autox200]]
```

现在可以调整内部和外部嵌入的图像大小并带有标题。但是，如果存在标题文本，必须使用分隔符来区分。

例如，如果 `"` 是标题分隔符。

```
![[my_amazing_image.png|50x50]]

![[my_amazing_image.png|50x50 "Look at my caption ma!"]]

!["I can caption anything!" 100x150](https://prettypicture.com/image01.png)
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

> [!Tip] 相关推荐
> - [[obsidian-image-toolkit]]：提供笔记中查看图片的基本操作
> - [[obsidian-local-images-plus]]：将你粘贴的网络图片，自定下载到本地并插入到你粘贴的位置
> - [[obsidian-file-link]]：可以很容易地将文件链接添加到笔记中，提供界面化的选择文件
> - [[mousewheel-image-zoom]]： 能够通过按住可配置键（默认为左 alt），在编辑/阅读模式下通过滚轮来调节图像的大小