---
uid: 20231220115812
title: Obsidian 插件：【Readme】Card View Mode
tags: ['界面相关', 'obsidian插件', 'readme']
description: 以卡片模式查看你的笔记。该插件已经无法使用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Card View Mode

> [!Note] 插件名片
> - 插件名称：Card View Mode
> - 插件作者：PADAone
> - 插件说明：以卡片模式查看你的笔记。该插件已经无法使用。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yo-goto/obsidian-card-view-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-card-view-mode)

## 概述

以卡片模式查看你的笔记。该插件已经无法使用。

![Card View Mode](https://cdn.pkmer.cn/covers/obsidian-card-view-mode.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yo-goto/obsidian-card-view-mode/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-card-view-mode]] 插件的自述翻译

# Obsidian 卡片视图模式

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/yo-goto/obsidian-card-view-mode)

![GitHub所有发布](https://img.shields.io/github/downloads/yo-goto/obsidian-card-view-mode/total?color=red)

![主要截图](https://cdn.pkmer.cn/covers/obsidian-card-view-mode_1_2.png!pkmer)

## 特性 1 卡片视图

这个插件的灵感来自于 [Scrapbox](https://scrapbox.io/product?lang=en)（一个基于网络的维基工具）和尼克拉斯·卢曼的 Zettelkasten 方法（卡片盒）。

我发现在开发过程中，所有的笔记都不处于同一个阶段。我们需要一些方法来区分这些阶段。卡片视图功能是一种衡量笔记并表达它们的方式。你可以评估你的笔记是否是**原子的**，然后，如果你觉得你的笔记太长而且不是原子的，你可以分割或提取内容。

每个笔记（也称为卡片）的垂直大小可以根据其上的内容量进行扩展或缩小。一眼就可以轻松地看出你的笔记在笔记记录、笔记制作或最终的**笔记发展**的早期阶段有多成熟。

我强烈推荐你将这个插件与滑动窗格插件一起使用。我设计这个插件与滑动窗格插件和嵌入式笔记标题插件兼容。

## 特性 2 注意力窗格

另一个特性是“注意力窗格”。一个活动的窗格卡片会被突出显示，其他窗格会变灰。这样可以让你轻松找到活动的窗格，并专注于笔记。你可以在众多笔记中关注特定的窗格！！

活动和非活动的卡片使用不同的 RGB 颜色值进行渲染。你可以在设置选项卡中设置数值差异。如果你想禁用这个特性，将数值设为 0。

## 演示

![屏幕截图](https://cdn.pkmer.cn/covers/obsidian-card-view-mode_1_3.gif)

## 设置

卡片颜色、背景颜色、卡片形状可以在设置选项卡中进行配置。

![设置 1](https://cdn.pkmer.cn/covers/obsidian-card-view-mode_1_4.png!pkmer)

![设置 2](https://cdn.pkmer.cn/covers/obsidian-card-view-mode_1_5.png!pkmer)

- 您可以随时使用命令全局开启/关闭此插件。
- 您可以自定义卡片设计（颜色、圆角半径、投影效果）。

## 兼容性

- [滑动窗格（Andy Matuschak 模式）](https://github.com/deathau/sliding-panes-obsidian)
- [嵌入式笔记标题](https://github.com/mgmeyers/obsidian-embedded-note-titles)
- [横幅](https://github.com/noatpad/obsidian-banners)（兼容性尚不稳定）

# 开发

[路线图](https://github.com/yo-goto/obsidian-card-view-mode/projects/1)

## 手动安装方法

- 克隆此仓库
- 运行 `npm i` 或 `yarn` 安装依赖
- 运行 `npm run dev` 进行编译
- 将 `manifiest.json`、`main.js` 和 `styles.css` 复制到插件文件夹的子文件夹中
- 重新加载 Obsidian 以查看更改

## 特别感谢

特别感谢这些令人惊叹的插件！我在开发我的第一个公共插件时参考了这些插件。插件的基本结构主要基于 Sliding Pane。我参考了其他插件来构建颜色配置系统。

- [Sliding Panes (Andy Matuschak Mode)](https://github.com/deathau/sliding-panes-obsidian) by deathau
- [Admonition](https://github.com/valentine195/obsidian-admonition) by valentine195
- [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) by kepano
- [Embedded Code Title](https://github.com/tadashi-aikawa/obsidian-embedded-code-title) by tadashi-aikawa
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) by liamcain

## 原始的 CSS

我将这个插件从一个自定义的 CSS 片段开发成了一个 SCSS 文件。如果你对 CSS 样式感兴趣，你可以点击下面的链接查看原始的片段。

[Gist链接](https://gist.github.com/yo-goto/742906c6463310e3f4e18c745dede016)
