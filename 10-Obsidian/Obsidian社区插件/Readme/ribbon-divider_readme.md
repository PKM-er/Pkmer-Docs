---
uid: 2024022121235230
title: Obsidian 插件：【Readme】Ribbon Divider
tags: ['obsidian插件', 'readme']
description: Allows you to add dividers to the ribbon to space out your icons.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ribbon Divider

> [!Note] 插件名片
> - 插件名称：Ribbon Divider
> - 插件作者：Andrew McGivery
> - 插件说明：Allows you to add dividers to the ribbon to space out your icons.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/andrewmcgivery/obsidian-ribbon-divider)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ribbon-divider)

## 概述

Allows you to add dividers to the ribbon to space out your icons.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewmcgivery/obsidian-ribbon-divider/main/README.md)
>

---

## Readme(翻译）

下面是 [[ribbon-divider]] 插件的自述翻译

【机翻】

# 黑曜石丝带分隔符

一个用于 Obsidian.MD 的插件，允许您在丝带上添加分隔符来间隔您的图标。

![一张显示在Obsidian丝带界面上的分隔符的截图](https://cdn.pkmer.cn/covers/ribbon-divider_2_0.png!pkmer)

## 如何安装

插件将很快添加到官方仓库中。

## 如何使用

可以通过设置屏幕添加和移除分隔符。一旦添加了分隔符，您可以直接在功能区中拖动它们到您想要的位置，就像拖动图标一样。

![设置屏幕显示您可以添加和移除分隔符的位置](https://cdn.pkmer.cn/covers/ribbon-divider_2_1.png!pkmer)

## 自定义

要自定义分隔符的外观，您可以利用 CSS 来定位该元素。

```css
/* 示例：更改分隔符周围的间距 */
.side-dock-actions .side-dock-ribbon-action.ribbon-divider {
	padding: 8px 0;
}

/* 示例：更改分隔符的宽度 */
.side-dock-actions .side-dock-ribbon-action.ribbon-divider {
	width: 50%;
}

/* 示例：更改分隔符的颜色 */
.side-dock-actions .side-dock-ribbon-action.ribbon-divider &:before {
	background-color: #ff0000;
}
```

如果您想要定位一个 _ 特定的 _ 分隔符，每个分隔符都有一个附加的类，其中包含它的唯一 id（在设置中找到）。

例如，要定位具有 id `4714cc30-fb33-4da8-857a-a5d6478c9f9a` 的分隔符：

```css
/* 示例：更改特定分隔符周围的间距 */
.side-dock-actions
	.side-dock-ribbon-action.ribbon-divider.ribbon-divider-4714cc30-fb33-4da8-857a-a5d6478c9f9a {
	padding: 8px 0;
}
```

## 报告问题

如果您在使用此插件时遇到任何问题，请 [提交问题](https://github.com/andrewmcgivery/obsidian-ribbon-divider/issues/new)，并尽可能包含详细信息，包括截图。
