---
uid: 20230822234749
title: Obsidian 插件：Base Tag Renderer 嵌套标签显示缩略名
tags: [obsidian插件, 标签]
description: 这个插件在预览模式下渲染标签的基本名称。
author: Windysoul
type: other
draft: false
editable: false
modified: 20231122164821
---

# Obsidian 插件：Base Tag Renderer 嵌套标签显示缩略名

## 概述

这个插件在预览模式下渲染标签的基本名称。

> [!Note] 插件名片
> - 插件名称：Base Tag Renderer
> - 插件作者：Darren Kuro
> - 插件说明：这个插件在预览模式下渲染标签的缩略名称
> - 插件分类：['obsidian插件', '标签']
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

### 活用

如果不太喜欢标签前面的 `#` 号，用此插件通过简单设置，就可以在预览模式下，达到预期的效果。

#### 效果

这是一个隐藏了 `#` 标签 `#test`

![-20231120.png](https://cdn.pkmer.cn/images/-20231120.png!pkmer)

### 方法

在插件内部开启对应设置，尝试按照以往的方法输入标签，你会发现 `#` 不见了！

![-20231120-1.png](https://cdn.pkmer.cn/images/-20231120-1.png!pkmer)
