---
uid: 2023080322145516
title: Obsidian 插件：Base Tag Renderer
tags: ['obsidian插件', 'readme']
description: 这个插件在预览模式下渲染标签的基本名称。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Base Tag Renderer

> [!Note] 插件名片
> - 插件名称：Base Tag Renderer
> - 插件作者：Darren Kuro
> - 插件说明：这个插件在预览模式下渲染标签的基本名称。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/darrenkuro/obsidian-basetag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-basetag)

## 概述

这个插件在预览模式下渲染标签的基本名称。

![Base Tag Renderer](https://cdn.pkmer.cn/covers/obsidian-basetag.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/darrenkuro/obsidian-basetag/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-basetag]] 插件的自述翻译

# Obsidian 基本标签渲染器

该插件仅渲染标签的基本名称，同时保持其他地方的嵌套结构。

它还附加了一个新的类名（`basename-tag`），因此可以为其添加自定义样式。

![](pic/basetag.gif)

上述示例应用的自定义 CSS 样式 -

```css
a.basename-tag[href*="animal"]::before{
    content: "😍 ";
}
a.basename-tag[href*="cat"]::before {
    content: "🐱 ";
}
a.basename-tag[href*="dog"]::before {
    content: "🐶 ";
}
```

# 版本 1.2（2023 年 7 月 30 日）

- 同样为属性中的标签添加文本更改。

# 版本 1.1（2023 年 2 月 23 日）

- 添加对编辑器模式的支持，包括在前言中添加标签。



