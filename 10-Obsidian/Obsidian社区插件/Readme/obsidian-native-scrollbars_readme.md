---
uid: 2023080322224594
title: Obsidian 插件：Native Scrollbars
tags: ['obsidian插件', 'readme']
description: 在Obsidian中启用本机操作系统滚动条
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Native Scrollbars

> [!Note] 插件名片
> - 插件名称：Native Scrollbars
> - 插件作者：mgmeyers
> - 插件说明：在 Obsidian 中启用本机操作系统滚动条
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mgmeyers/obsidian-native-scrollbars)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-native-scrollbars)

## 概述

在 Obsidian 中启用本机操作系统滚动条

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-native-scrollbars]] 插件的自述翻译

## Obsidian 原生滚动条

该插件在 Obsidian 中启用原生滚动条。默认情况下，Obsidian 的滚动条是经过主题化的，无法仅通过 CSS 恢复，因此需要使用插件。

**Obsidian 的默认滚动条**

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/non-native-scrollbars.gif" alt="一个演示Obsidian默认滚动条的短gif">

**原生 macOS 滚动条**

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/native-scrollbars.gif" alt="一个演示原生滚动条的短gif">

已知问题：暗模式下的浅色滚动条

在 macOS 上，本机滚动条的背景颜色由滚动容器的背景颜色确定。如果未设置背景颜色，则滚动条将处于浅色模式。几乎透明的背景颜色可用于此，例如：`background-color: #00000001;`

<img src="https://raw.githubusercontent.com/mgmeyers/obsidian-native-scrollbars/main/screenshots/darkmode-issue.gif" alt="A short gif demonstraiting issues with dark-mode scrollbars">

<https://codepen.io/mgmeyers/pen/KKXyjYv>

**注意：**当此插件处于活动状态时，`.native-scrollbars` 类将添加到 body 元素中。

## 支持

如果您觉得这个插件有用，请考虑支持它的开发：

[![GitHub Sponsors](https://img.shields.io/github/sponsors/mgmeyers?label=Sponsor&logo=GitHub%20Sponsors&style=for-the-badge)](https://github.com/sponsors/mgmeyers)
