---
uid: 2023080322183743
title: Obsidian 插件：Focus and Highlight
tags: ['obsidian插件', 'readme']
description: Obsidian的一个插件，可以突出显示并专注于当前选定的标题
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Focus and Highlight

> [!Note] 插件名片
> - 插件名称：Focus and Highlight
> - 插件作者：BO YI TSAI
> - 插件说明：Obsidian 的一个插件，可以突出显示并专注于当前选定的标题
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nagi1999a/obsidian-focus-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-focus-plugin)

## 概述

Obsidian 的一个插件，可以突出显示并专注于当前选定的标题

![Focus and Highlight](https://cdn.pkmer.cn/covers/obsidian-focus-plugin_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nagi1999a/obsidian-focus-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-focus-plugin]] 插件的自述翻译

# 焦点和突出显示

一个用于 [obsidian](https://obsidian.md/) 的插件，用于在 [阅读模式](https://help.obsidian.md/How+to/Read+and+edit+modes) 下专注于特定段落。

## 特点

- 点击特定标题及其子项时，将重点关注它们。
    - 从 v1.2.0 开始，您还可以通过将设置“内容行为”更改为“仅关注元素”来关注特定段落。
    - 从 v1.2.0 开始，您可以通过点击标题的子项来进行关注。
    - 如果您不希望在选择文本时更改焦点状态，可以将“焦点灵敏度”的值设得更小。

![](demo.gif)

## 用法

1. 插件现在可以在社区插件列表中找到！您可以通过 Obsidian 的 `设置 > 社区插件` 选项卡直接下载插件。
    - 您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装，仓库名称为 `nagi1999a/obsidian-focus-plugin`。
2. 在 Obsidian 的 `设置 > 社区插件` 选项卡中启用名为 `Focus and Highlight` 的插件。

安装并启用插件后，您可以通过单击任何标题来聚焦于不同的标题。

## 选项

您可以通过访问 Obsidian 的“设置 > 焦点和高亮”选项卡来调整此插件的行为。

### 清除方法

此选项影响清除焦点状态的方式。

再次点击

通过再次点击已聚焦的标题来清除焦点状态。

#### 点击外部区域

通过在阅读区域左侧或右侧的空白区域点击来清除焦点状态，当“设置 > 编辑器 > 可读行长度”关闭时，可能无法正常工作。

### 焦点范围

此选项影响焦点状态的范围。

只关注您点击的区块。

也关注您点击的区块和相关内容。

### 内容行为

此选项影响点击内容元素（例如纯文本和标注块）时的行为。

只关注您点击的元素。

专注于您点击的元素和相关内容。

### 启用列表

专注于列表项（实验性功能，仅适用于第一级列表）

### 焦点敏感度

只有当鼠标静止一段时间后才进行聚焦（数值越大表示时间越长）。

### 样式设置

安装并启用 [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 插件后，您可以在 `设置 > 样式设置 > 焦点和高亮` 下进一步自定义一些视觉属性。

#### 不透明度

设置被调暗元素的不透明度。默认值为 0.1。

#### 调整速度

设置动画的速度，单位为秒。默认值为 0.5。

讨论

### 多窗格下的行为

该插件现在支持多窗格场景。不同的窗格将能够专注于它们的标题，如下面的 GIF 所示。

![](multi_pane.gif)

### 问题

如果您遇到任何问题或对插件有任何建议，请随时提出问题。

### 待办事项

- [ ] 在编辑模式下添加支持。

### 支持

> [!NOTE] 维护一个插件并不是一项容易的任务。
> 如果你喜欢这个插件，请考虑以下支持作者的方法：
> 1. 请给我一个星星！
> 2. [给我买杯咖啡](https://www.buymeacoffee.com/nagi1999a)！