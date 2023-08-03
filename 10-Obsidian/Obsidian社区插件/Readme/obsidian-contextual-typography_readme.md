---
uid: 2023080322162970
title: Obsidian 插件：【Readme】Contextual Typography
tags: ['样式工具', 'obsidian插件', 'readme']
description: 在预览模式中，该插件为所有顶级div添加了一个data-tag-name属性，其中包含子标签的名称，从而允许上下文的排版样式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Contextual Typography

> [!Note] 插件名片
> - 插件名称：Contextual Typography
> - 插件作者：mgmeyers
> - 插件说明：在预览模式中，该插件为所有顶级div添加了一个data-tag-name属性，其中包含子标签的名称，从而允许上下文的排版样式。
> - 插件分类：['样式工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mgmeyers/obsidian-contextual-typography)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-contextual-typography)

## 概述

在预览模式中，该插件为所有顶级div添加了一个data-tag-name属性，其中包含子标签的名称，从而允许上下文的排版样式。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mgmeyers/obsidian-contextual-typography/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-contextual-typography]] 插件的自述翻译


# obsidian-contextual-typography

该插件为所有顶级预览`div`添加了一个`data-tag-name`属性，以实现上下文排版。注意：该插件不会添加任何样式，但会启用上下文样式。

这个插件的灵感来自于http://matejlatin.github.io/Gutenberg/。

## 示例

```
.markdown-preview-view div[data-tag-name="h1"] + div > h2 {
  margin-top: 1.8888888889rem;
}
```

**之前：**

<img src="https://github.com/mgmeyers/obsidian-contextual-typography/raw/main/images/before.png" alt="Before" width="350" />

**之后：**

<img src="https://github.com/mgmeyers/obsidian-contextual-typography/raw/main/images/after.png" alt="After" width="350" />



