---
uid: 20230504230750
title: Obsidian 插件：Highlightr
description: 
author: 
type: other
draft: false
editable: false
modified: 20230504233222
---

# Obsidian 插件：Highlightr

## 概述

虽然 Obsidian 中你可以使用 Markdown 语法来让文本高亮，但是这种高亮方式有时候显得单一，可能我们更习惯用不同的高亮颜色，来标记不同的内容用以区分。

Highlightr 就是以此目诞生的，将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。

> [!Note] 插件名片
> - 插件名称：Highlightr
> - 插件作者：chetachi
> - 插件说明：将小而美的高亮菜单添加到了 Obsidian 中，通过所见即所得的方式，为笔记内容中文本增加高亮颜色。
> - 插件项目地址：[点我访问](https://github.com/chetachiezikeuzor/Highlightr-Plugin)

## 效果&特性

## 使用

### 高亮样式

![image.png](https://cdn.pkmer.cn/images/20230504232528.png)

- 插件默认支持多种高亮样式：Lowlight、Floating、Readlistic、Rounded。

### 自定义高亮样式

- 插件除了提供 9 种高亮样式颜色外，还允许你新增，或者修改默认提供的样式颜色。

### 兼容和导出

- 兼容：在浅色和深色模式下，高亮配色是通用的。
- 兼容：高亮是通过 CSS 样式插入到笔记中的（一般称作内联样式，inline-style），具体是通过 `<mark style="background: #FF5582A6;">你高亮的内容</mark>` 来实现的。
- 兼容：正式因为采用了内联样式的方式，当你导出笔记时，将不依赖任何外部 CSS 样式，笔记将完整包含你的高亮记录。