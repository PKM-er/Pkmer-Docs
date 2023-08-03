---
uid: 20230803204707
title: Obsidian 插件：【Readme】Scroll Offset
tags: ['obsidian插件', 'readme']
description: 在光标之前或之后保留自定义距离。
author: Lijyze
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Scroll Offset

> [!Note] 插件名片
> - 插件名称：Scroll Offset
> - 插件作者：Lijyze
> - 插件说明：在光标之前或之后保留自定义距离。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lijyze/scroll-offset)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-scroll-offset)

## 概述

在光标之前或之后保留自定义距离。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lijyze/scroll-offset/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-scroll-offset]] 插件的自述翻译


# Obsidian滚动偏移

这个插件可以在光标前后保持自定义的距离，就像vim中的`scrolloff`或VS-Code中的`cursor surrounding lines`一样。

## 使用方法

1. 在设置选项卡中定义您喜欢的距离。
2. 尽情享受吧！

您可以将距离设置为固定单位为`px`的距离，也可以设置为相对于内容区域高度的距离。

## 注意

该插件将检查边界情况。如果给定的距离超过内容区域的一半，它将被视为内容的一半（实际上少于一半，因为光标的高度）。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-scroll-offset/` 中。

## 捐赠





