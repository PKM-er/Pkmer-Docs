---
uid: 2024031219333002
title: Obsidian 插件：【Readme】Tab Shifter
tags: ['obsidian插件', 'readme']
description: Enables shifting tabs between different tab splits
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tab Shifter

> [!Note] 插件名片
> - 插件名称：Tab Shifter
> - 插件作者：Joshua Rozner
> - 插件说明：Enables shifting tabs between different tab splits
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jsrozner/obsidian-tab-shifter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tab-shifter)

## 概述

Enables shifting tabs between different tab splits

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jsrozner/obsidian-tab-shifter/main/README.md)

---

## Readme(翻译）

下面是 [[tab-shifter]] 插件的自述翻译

# 标签切换器

这是一个标签切换插件，其行为类似于代码编辑器中的标签切换器。它的行为与 WebStorm 的 tab-shifter 插件相同。

标签可以移动到上一个或下一个“标签组”。

## 注意事项

### 非官方 API

这个插件并不使用官方 API。相反，它从 leaf（标签）和 tabs（标签“组”）对象中读取属性，这些对象似乎总是存在的。

它目前可以工作，但如果这些属性消失，它将会出现问题。

您可以查看我们假定存在的属性在 `typesUnofficial.ts` 中。

### 逻辑

要决定将标签移动到哪个标签组：

我们相信现有叶子（标签）的顺序与标签组的顺序相匹配。根据我的经验，这通常是正确的，但如果您有大量分割，可能会表现出奇怪的行为。（另一种方法是重新计算视图树，但这更复杂，目前似乎是不必要的！）

### 支持

- 我将此设置为仅桌面端，因为我不确定逻辑是否在移动端上能够正常工作。如果您希望在移动端上可用，请测试其是否有效，然后提交一个功能请求。
- 目前，此功能仅处理包含打开的 Markdown 文件的选项卡组。我们可以支持其他类型。



