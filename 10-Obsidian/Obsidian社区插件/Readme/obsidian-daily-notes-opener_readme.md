---
uid: 2023120719262241
title: Obsidian 插件：【Readme】Daily notes opener
tags: ['obsidian插件', 'readme']
description: 轻松在新窗格中打开日记和周期性记录；自定义周期性记录的背景；快速添加新行到日记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Daily notes opener

> [!Note] 插件名片
> - 插件名称：Daily notes opener
> - 插件作者：Reorx
> - 插件说明：轻松在新窗格中打开日记和周期性记录；自定义周期性记录的背景；快速添加新行到日记中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/reorx/obsidian-daily-notes-opener)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-daily-notes-opener)

## 概述

轻松在新窗格中打开日记和周期性记录；自定义周期性记录的背景；快速添加新行到日记中。

![Daily notes opener](https://cdn.pkmer.cn/covers/obsidian-daily-notes-opener_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/reorx/obsidian-daily-notes-opener/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-daily-notes-opener]] 插件的自述翻译

## Obsidian 每日笔记打开器

该插件添加了一个命令，用于在新窗格中打开每日笔记（以便可以使用键盘快捷键！），并且可以对每日笔记的行为进行额外控制。

功能：

- ⚡️ 提供命令和侧边栏按钮，用于“在新窗格中打开今天的每日笔记”
- 🔎 查找并聚焦已经打开的笔记，以避免重复
- 🕐 确定一天的结束时间，让您在午夜时打开正确的每日笔记
- 📝 在打开笔记后，将行追加到特定部分
- 🌈 通过使用 [样式设置](https://github.com/mgmeyers/obsidian-style-settings) 来为每日笔记窗格着色，使其突出显示（支持主题颜色）

安装：在社区插件中搜索“**Daily notes opener**”。

## 用法

### 1. 以幂等的方式在新窗格中打开今天的周期性笔记

![dnnt-demo-1](https://cdn.pkmer.cn/covers/obsidian-daily-notes-opener_1_0.gif!pkmer)

### 2. 使用样式设置更改今天的周期性笔记的背景颜色

![dnnt-demo-2](https://cdn.pkmer.cn/covers/obsidian-daily-notes-opener_1_1.gif!pkmer)

### 3. 在新窗格中添加今天的周期性笔记行

![dnnt-demo-3](https://cdn.pkmer.cn/covers/obsidian-daily-notes-opener_1_2.gif!pkmer)

## 设置

- 每日结束时间

    确定今天的日期，如果值为 03:00，当前日期时间为 2022-03-03 02:59，则今天的日期为 2022-03-02。

    默认值：`05:00`

- 总是打开新窗格

    设置为 true，即使每日笔记已经打开，也总是打开一个新窗格；否则，插件将尝试找到现有的每日笔记并将焦点放在上面。

    默认值：`false`

- 背景颜色

    每日笔记新窗格插件支持为今天的周期性笔记添加背景颜色，此功能依赖于另一个名为“Style Settings”的插件，请安装并启用它，以便您可以调整周期性笔记的背景颜色。

    <img width="773" alt="image" src="https://user-images.githubusercontent.com/405972/161797925-0074ec9d-e696-4014-8745-35823525ac70.png">

## 常见问题解答

- 问：这个插件能和 [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) 一起使用吗？

	答：是的，如果在**Periodic Notes**插件中启用了*Daily Notes*，它将使用 Periodic Notes 的设置，否则，它将使用**Daily notes core plugin**的设置。

- 问：在样式设置中找不到“Daily notes opener”部分。

	答：请尝试禁用然后重新启用样式设置插件。

## 鸣谢

本项目得以实现，要归功于周围的社区，尤其是在本文档中列出的出色项目。

### 项目

- [Obsidian每日笔记界面](https://github.com/liamcain/obsidian-daily-notes-interface)
- [QuickAdd](https://github.com/chhoumann/quickadd)
- [Obsidian样式设置插件](https://github.com/mgmeyers/obsidian-style-settings)
- [Lumberjack](https://github.com/ryanjamurphy/lumberjack-obsidian)
- [可自定义的侧边栏插件](https://github.com/phibr0/obsidian-customizable-sidebar)
- [Obsidian.md插件的热重载插件](https://github.com/pjeby/hot-reload)



