---
uid: 20240227160841
title: Obsidian 插件：【Readme】Canvas Daily Note
tags: ['obsidian插件', 'readme']
description: 在画布上添加一个每日笔记节点，它将始终显示今天的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Canvas Daily Note

> [!Note] 插件名片
> - 插件名称：Canvas Daily Note
> - 插件作者：Andrew McGivery
> - 插件说明：在画布上添加一个每日笔记节点，它将始终显示今天的笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/andrewmcgivery/obsidian-canvas-dailynote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-dailynote)

## 概述

在画布上添加一个每日笔记节点，它将始终显示今天的笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewmcgivery/obsidian-canvas-dailynote/main/README.md)

---

## Readme(翻译）

下面是 [[canvas-dailynote]] 插件的自述翻译

【机翻】

# 黑曜石画布每日笔记

一个用于 Obsidian.MD 的插件，允许您在画布上添加一个每日笔记节点，始终显示今天的笔记。

![画布上每日笔记的屏幕截图和底部控件中的“添加每日笔记”按钮](https://cdn.pkmer.cn/covers/canvas-dailynote_2_0.png!pkmer)

## 如何安装

插件可以从 [官方社区插件](https://obsidian.md/plugins?id=canvas-dailynote) 中安装。

## 如何使用

在画布视图上，将添加一个新按钮。当您点击此按钮时，它将为您的每日笔记添加一个新的文件节点。每当您打开画布时，插件将自动保持此文件节点与最新的每日笔记同步。

![显示“添加每日笔记”按钮的截图](https://cdn.pkmer.cn/covers/canvas-dailynote_2_1.png!pkmer)

> [!NOTE]
> 此插件通过向文件节点添加特殊元数据（`unknownData`）来工作。它仅适用于通过插件创建的这些节点，不适用于现有文件节点。

> [!WARNING]
> 将每日笔记更新为今天的笔记涉及删除现有的画布节点并用新节点替换它。因此，该插件目前不支持从每日笔记节点到其他节点的连接。

## 设置

在插入新节点或更新现有节点为今天的日常笔记时，默认情况下插件会创建日常笔记（如果尚不存在）。

如果您不希望插件这样做，或者不希望在特定星期几这样做，您可以在设置中更新此设置。

![设置屏幕截图](https://cdn.pkmer.cn/covers/canvas-dailynote_2_2.png!pkmer)

## 自定义

要自定义每日笔记节点的外观，您可以利用 CSS 来定位元素。

```css
/* 更改按钮外观 */
.canvas-button-adddailynote {
}
/* 更改每日笔记节点外观 */
.canvas-node-dailynote {
}
/* 更改每日笔记节点标签外观 */
.canvas-node-dailynote .canvas-node-label {
}
/* 更改每日笔记节点标签前文本外观 */
.canvas-node-dailynote .canvas-node-label:before {
}
```

## 报告问题

如果您在使用此插件时遇到任何问题，请 [提交问题](https://github.com/andrewmcgivery/obsidian-ribbon-divider/issues/new)，并尽可能包含详细信息，包括截图。

# 给小费