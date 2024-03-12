---
uid: 20240227160841
title: Obsidian 插件：【Readme】Arrows
tags: ['obsidian插件', 'readme']
description: 在你的笔记的不同部分画箭头，就像在纸上一样。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Arrows

> [!Note] 插件名片
> - 插件名称：Arrows
> - 插件作者：artisticat
> - 插件说明：在你的笔记的不同部分画箭头，就像在纸上一样。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/artisticat1/arrows)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?arrows-in-md)

## 概述

在你的笔记的不同部分画箭头，就像在纸上一样。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/artisticat1/arrows/main/README.md)

---

## Readme(翻译）

下面是 [[arrows-in-md]] 插件的自述翻译

【机翻】

# 箭头

一个用于 [Obsidian](https://obsidian.md/) 的插件，可以让您在笔记中绘制箭头，类似于您在纸上绘制箭头连接不同部分的方式。

**仅在实时预览模式下工作。**

![演示](https://cdn.pkmer.cn/covers/arrows-in-md_2_0.png!pkmer)

## 用法

### 画箭头

键入 `{arrow-identifier|color}` 来标记箭头的起点，例如 `{my-arrow|#1e90ff}`。

然后，在其他地方键入 `{arrow-identifier}` 来标记箭头的终点；在这种情况下，是 `{my-arrow}`。

箭头将沿着边缘从起始标识符绘制到终止标识符。

```
Lorem ipsum dolor sit amet, consectetur {my-arrow|#1e90ff} adipiscing elit. Tempus tortor ac, commodo purus.

Morbi et lacus suscipit, dignissim purus at, dapibus augue. {my-arrow} Aliquam non lectus varius.
```

<img width=450 src="./screenshots/drawing-arrows.png">

---

### 对角箭头

要创建对角箭头，请在箭头的起始标识符后附加 "`|diagonal`"，例如 `{my-arrow|#ff5555|diagonal}`。

```
Lorem ipsum dolor sit amet, consectetur {my-arrow2|#ff5555|diagonal} adipiscing elit. Tempus tortor ac, commodo purus.

Morbi et lacus suscipit, dignissim purus at, dapibus {my-arrow2} augue. Aliquam non lectus varius.
```

<img width=450 src="./screenshots/diagonal.png">

### 画更多箭头

您可以通过使用不同的箭头标识符来添加更多箭头，例如 `{this-is-another-arrow|orange}`:

```
Lorem ipsum dolor sit amet, {this-is-another-arrow|orange} consectetur adipiscing elit. {my-arrow3}

Morbi et lacus suscipit, dignissim purus at, dapibus augue. Aliquam non lectus varius, {my-arrow3|#1e90ff|diagonal} tempus tortor ac, commodo purus. {this-is-another-arrow}
```

<img width=450 src="./screenshots/more-arrows.png">

---

### 多箭头

您可以为单个起始标识符设置多个终止标识符。每个箭头将对应一个：

```
Lorem ipsum dolor sit amet, {multi-arrow|limegreen} consectetur adipiscing elit.

Morbi et lacus suscipit, dignissim purus at, dapibus augue. Aliquam non lectus varius, tempus tortor ac, commodo purus. {multi-arrow}

Pellentesque posuere ex non facilisis bibendum. Integer iaculis dolor dignissim, ultrices ligula eu, malesuada metus. {multi-arrow}
```

<img width=450 src="./screenshots/multi-arrows.png">

### 调整边距箭头

通过在起始标识符后附加 "`|x-pos`" 来调整边距箭头的 x 位置，其中 `x-pos` 是 0 到 30 之间的数字，例如 `{my-arrow|blue|10}`。

```
Lorem ipsum dolor sit amet, {first|dodgerblue|20} consectetur adipiscing elit. {second|limegreen|10}

Morbi et lacus suscipit, dignissim purus at, dapibus augue. {third|tomato} Aliquam non lectus varius, tempus tortor ac, commodo purus.

Pellentesque posuere {third} ex non facilisis bibendum. {second}
Integer iaculis dolor dignissim, ultrices ligula eu, malesuada metus. {first}
```

<img width=450 src="./screenshots/adjusting-margin-arrows.png">

### 箭头头部

通过在起始标识符后附加 "`|arrow`" 来在箭头头部添加箭头。

通过在结束标识符后附加 "`|no-arrow`" 来移除箭头末端的箭头。

```
Lorem ipsum dolor sit amet, {double-arrow|#3d6eff|arrow} consectetur adipiscing elit.

Morbi et lacus suscipit, {double-arrow} dignissim purus at, dapibus augue. {line|#9d6efa} Aliquam non lectus varius, tempus tortor ac, commodo purus.

Pellentesque posuere ex non facilisis bibendum. {line|no-arrow}
```

<img width=450 src="./screenshots/arrowheads.png">

### 在箭头之间导航

当光标移出 `{arrow-identifier}` 语法范围时，该语法将呈现为一个小圆圈●，以便更整洁地显示。

您可以单击任何箭头标识符●，以自动滚动到下一个匹配的标识符。这样可以让您在长文档中快速导航到箭头的起始/结束位置。

## 完整箭头语法

写

- `{arrow-identifier|color|opacity|type|x-position|arrowhead}` 来表示箭头的起始点，其中：
    - `arrow-identifier` 是充当箭头标识符的字符串
    - `color` 是 CSS 表示法中的任何有效颜色，例如 `red`, `#ff0000`
    - `opacity`（可选）是介于 0 和 1 之间的浮点数，例如 `0.6`。默认为 1。
    - `type`（可选）是 "`diagonal`" 或 "`margin`" 中的一个。默认为 "`margin`"。
    - `x-position`（可选）是介于 0 和 30 之间的整数。设置边距箭头的 x 位置。默认为 0。
    - `arrowhead`（可选）是 "`no-arrow`" 或 "`arrow`" 中的一个。使用 "`arrow`" 来在箭头的起始点添加箭头。默认为 "`no-arrow`"。
- `{arrow-identifier}` 表示箭头的结束点。
    - 若要删除箭头末端的箭头，请改为写 `{arrow-identifier|no-arrow}`。

箭头将从每个起始标识符绘制到所有对应的结束标识符。

## 限制

仅在实时预览模式下工作。

## 贡献

欢迎任何贡献和 PR！

## 致谢

This project uses the [leader-line](https://anseki.github.io/leader-line/) library to draw arrows.
