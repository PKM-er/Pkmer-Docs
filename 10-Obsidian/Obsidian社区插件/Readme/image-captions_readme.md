---
uid: 20230803204137
title: Obsidian 插件：【Readme】Image Captions
tags: ['obsidian插件', 'readme']
description: 当指定了alt文本时，为图像添加字幕
author: Alan Grainger
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Captions

> [!Note] 插件名片
> - 插件名称：Image Captions
> - 插件作者：Alan Grainger
> - 插件说明：当指定了alt文本时，为图像添加字幕
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/alangrainger/obsidian-image-captions)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-captions)

## 概述

当指定了alt文本时，为图像添加字幕



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alangrainger/obsidian-image-captions/main/README.md)
> 

---

## Readme(翻译）

下面是 [[image-captions]] 插件的自述翻译


# 添加图片标题

以以下格式添加图片：

```markdown
![[image.jpg|这是标题]]
```

或者以下格式：

```markdown
![这是标题](image.jpg)
```

它将在图片下方添加标题，如下所示：

![](example.png)

调整图片大小

您可以使用现有的 Obsidian 宽度参数来调整图片大小：

```markdown
![[image.jpg|这是标题|150]]
```

或者使用这种格式：

```markdown
![这是标题|150](image.jpg)
```

## 样式化

您可以通过定位 `.image-captions-figure` 和 `.image-captions-caption` 类来应用 CSS 样式。

## 限制

在**编辑**模式下，外部图片的标题不会显示。例如：

```markdown
![在编辑模式下不可见](https://obsidian.md/logo.png)
```

我找不到一个可靠的方法来定位它们。如果你知道如何做到这一点，请与我联系！

---

该插件基于https://github.com/bicarlsen/obsidian_image_caption的概念。



