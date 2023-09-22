---
uid: 20230822233837
title: Obsidian 插件：Base Tag Renderer 嵌套标签显示缩略名
tags: ['obsidian插件', 'readme']
description: 这个插件在预览模式下渲染标签的基本名称。
author: AI
type: readme
draft: false
editable: false
modified: 20230921161144
---

# Obsidian 插件：Base Tag Renderer 嵌套标签显示缩略名

## 概述

这个插件在预览模式下渲染标签的基本名称。

> [!Note] 插件名片
> - 插件名称：Base Tag Renderer
> - 插件作者：Darren Kuro
> - 插件说明：这个插件在预览模式下渲染标签的缩略名称
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/darrenkuro/obsidian-basetag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-basetag)

## 效果&特性

![image.png|375](https://cdn.pkmer.cn/images/20230921160634.png!pkmer)

![image.png|375](https://cdn.pkmer.cn/images/20230921160622.png!pkmer)

## 使用

该插件仅渲染嵌套标签，最子一级的名称【你可以理解成显示一个缩略名称】，同时其他地方保持嵌套结构。

比如你的标签是 `#animal/dog` 最终显示的结果就是 `dog`

比如你的标签是 `#计算机科学/编程/Java` 最终显示的结果就是 `Java`

### 进阶使用

它还附加了一个新的类名（`basename-tag`），因此可以为其添加自定义样式。

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