---
uid: 2024031219324926
title: Obsidian 插件：【Readme】Persian Calendar
tags: ['obsidian插件', 'readme']
description: 波斯日历用于根据波斯太阳（夏历）日历管理周期性笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Persian Calendar

> [!Note] 插件名片
> - 插件名称：Persian Calendar
> - 插件作者：Hossein Maleknejad
> - 插件说明：波斯日历用于根据波斯太阳（夏历）日历管理周期性笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/maleknejad/obsidian-persian-calendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?persian-calendar)

## 概述

波斯日历用于根据波斯太阳（夏历）日历管理周期性笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/maleknejad/obsidian-persian-calendar/master/README.md)

---

## Readme(翻译）

下面是 [[persian-calendar]] 插件的自述翻译

I am learning Chinese.

# 黑曜石波斯历

这个黑曜石插件为您提供了一个简单而实用的视图，用于在太阳历上处理周期性笔记。

![黑曜石波斯历](<Instructions/Obsidian Persian Calendar.png>)

## 用法

- 可以添加每日笔记，一个点表示已存在的每日笔记。
- 可以添加每周笔记，一个点表示已存在的每周笔记。
- 可以通过点击月份添加每月笔记。
- 可以通过点击年份添加每年笔记。
- 修改创建笔记的路径。
- 与 Templater 插件完美配合。

# Persian Calendar Plugin for Obsidian

This plugin adds a Persian calendar to [Obsidian](https://obsidian.md/), allowing you to create and manage daily, weekly, monthly, and yearly notes using this plugin.

![Main view of the Persian Calendar plugin for Obsidian](Instructions/Obsidian.webp)

## 功能

- 可创建每日、每周、每月和每年的备忘录
- 对于每日和每周备忘录，将显示在预先定义的文件夹下的一个小圆点
- 与 Templater 插件完全兼容
- 与主要的 Obsidian 主题兼容

## 安装指南

在此插件被 Apsidan 确认并添加到插件存储库之前，您可以通过插件 [BRAT](https://tfthacker.com/brat-quick-guide) 进行安装。

只需按照下面的图解指南安装 GitHub 链接。

![通过BRAT插件安装指南](Instructions/installingwithbrat.webp)

如果您希望在没有 BRAT 插件的情况下执行此操作，您可以下载以下文件并将其添加到名为此插件的文件夹中的 Apsidan 插件存储库部分：

> `style.css` `main.js` `maifest.json`

## 使用指南

安装插件后，首要任务是定义创建文件的路径。为此，请转到插件设置并指定生成文件的路径。不要以/开头定义路径。

在定义路径后，安装插件 [Templater](https://github.com/SilentVoid13/Templater) 以定义生成模板的路径。

## 使用 Templater 插件教程

使用 [Templater](https://github.com/SilentVoid13/Templater) 插件，您可以为您的日常、每周、每月和每年笔记指定特定的模板：

只需安装 [Templater](https://github.com/SilentVoid13/Templater) 插件，并根据下面的图片为每种类型的文件指定一个模板。请注意，您为插件指定的路径必须与插件设置中指定的路径相同。一定要确保“在创建新文件时触发 Templater”选项是打开的。

![Templater使用指南](Instructions/templater.webp)

## 在插件中定义的命令

为了方便访问不同日期的文件，插件中包含以下命令，您可以为它们定义快捷键。

![在Absidean中定义的命令](Instructions/commands.webp)

## 插件开发参与路径

该插件是免费开发的，用于非商业目的，并且需要您的参与来完善。您可以在此存储库的 Issues 选项卡中报告想法和错误。我还在努力在 [卡尔费克尔](https://karfekr.ir) 网站和论坛上分享与 Absideen 相关的内容。如果您愿意支持这个插件的开发，请关注 [卡尔费克尔](https://karfekr.ir)。
