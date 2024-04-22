---
uid: 2023120522273311
title: Obsidian 插件：【Readme】TreeFocus
tags: ['obsidian插件', 'readme']
description: 根据预定义或自定义规则，在文件资源管理器（导航）中突出显示、调暗和设置样式您的文件和文件夹。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】TreeFocus

> [!Note] 插件名片
> - 插件名称：TreeFocus
> - 插件作者：iOSonntag
> - 插件说明：根据预定义或自定义规则，在文件资源管理器（导航）中突出显示、调暗和设置样式您的文件和文件夹。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iOSonntag/obsidian-plugin-treefocus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?treefocus)

## 概述

根据预定义或自定义规则，在文件资源管理器（导航）中突出显示、调暗和设置样式您的文件和文件夹。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iOSonntag/obsidian-plugin-treefocus/master/README.md)

---

## Readme(翻译）

下面是 [[treefocus]] 插件的自述翻译

# Obsidian 插件：TreeFocus

![Dynamic JSON

Badge](<https://img.shields.io/badge/dynamic/json?url=https>%3A%2F%2Fraw.githubusercontent.com%2FiOSonntag%2Fobsidian-plugin-treefocus%2Fmaster%2Fpackage.json&query=%24.version&label=版本)

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FiOSonntag%2Fobsidian-plugin-treefocus%2Fmaster%2Fmanifest.json&query=%24.id&label=obsidian-plugin&color=rgb(124%2C%2058%2C%20237))

![Static Badge](https://img.shields.io/badge/strict-d?label=TypeScript)

[![build](https://github.com/iOSonntag/obsidian-plugin-treefocus/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/iOSonntag/obsidian-plugin-treefocus/actions/workflows/release.yml)

### 有没有想过将 `文件` 或 `文件夹` 变暗？

*适用于很少使用或不重要的 `文件` 或 `文件夹`。*

**示例：**

<br/>
<br/>
<img src="resources/treefocus_dim_01.png?raw=true" width="100">

- `/_SYS/`（可能是您的模板和附件文件夹）
- `/some_dir/not_in_use/`（存储一些无关紧要的数据）

### 或者可能突出显示一些 `文件` 和 `文件夹`？

*为了好东西。*

**示例：**

<br/>
<br/>
<img src="resources/treefocus_highlight_01.png?raw=true" width="100">

- `/Main/`
- `/VeryImportantFolder_DoNotDelete_Plz/`

### 或者你的文件浏览器项目的任何其他可想象的配置？

*✅ 这个插件可能能解决问题！*

# TreeFocus - 简介

根据预定义或自定义规则，突出显示、变暗和样式化文件资源管理器中的 `文件` 和 `文件夹`。

左侧导航面板中的所有保险库项目都可以进行样式化。可以通过以下方式之一进行设置：

- **匹配规则** *或*
- 通过项目上下文菜单**显式设置**

文件资源管理器中的每个项目都会评估为以下之一的**TreeFocusModes**™：

- 💡 `HIGHLIGHT`（突出显示）
- 🥱 `DIM`（变暗）
- 🍆 `DEFAULT`（Obsidian 默认）

然后，每个项目将根据该**TreeFocusMode**™进行样式化。

与其他插件结合使用

你喜欢 **`Icon Folder`** 插件吗？

我也喜欢，所以这个插件完全兼容插件 [Icon Folder (`obsidian-iconize`)](https://github.com/FlorianWoelki/obsidian-iconize)。

> 好耶 🕺 🎊 🎉 !!!
> 特别感谢 [FlorianWoelki](https://github.com/FlorianWoelki) 的
> 出色插件。

## 它是如何工作的

*示例配置结果：*

<img src="resources/treefocus_01.png?raw=true" width="300">

<br/>

该截图是选择以下设置的结果：

- **样式转换预设：** `Fancy`

并应用以下规则：

1. **TreeFocusMode**™ - `DIM`
对所有以 `'_'` 开头的 `文件` 和 `文件夹` 应用

2. **TreeFocusMode**™ - `HIGHLIGHT`
对以下明确选择的项目应用：
    - `/Backend`
    - `/More`


<br/>
<br/>

## 设置

您可以通过定义通用规则或显式设置每个 `文件`/`文件夹` 的**TreeFocusMode**™来配置此插件的行为。

<img src="resources/settings_01.png?raw=true" width="400">


<br/>
<br/>

## 显式转换：项目级配置

在文件资源管理器中右键单击一个项目，可以选择显式应用**TreeFocusModes**™。这将覆盖所有定义的规则，并可以随时重置。

<img src="resources/context_menu_01.png?raw=true" width="200">

## 错误

请在以下位置报告任何问题：[TreeFocus - GitHub存储库](https://github.com/iOSonntag/obsidian-plugin-treefocus/issues)

## 贡献

欢迎提交拉取请求！

如果您有改进意见或认为您可以解决一个错误，请毫不犹豫地提交拉取请求。

即使您认为自己可能不够熟练，也不要担心。这纯粹是胡说八道。我们都是始终如一的初学者 :)

## 支持这个插件

如果你喜欢这个插件并想要支持它 - 提交一个功能请求、一个拉取请求或者简单地给我买杯咖啡 :) - 谢谢。

<a href="https://www.buymeacoffee.com/iOSonntag" target="_blank"><img

src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A

Coffee" style="height: 60px !important;width: 217px !important;" ></a>

或者直接通过以下方式支持：

- [给我买杯咖啡](https://www.buymeacoffee.com/iOSonntag)
- [GitHub 赞助](https://github.com/sponsors/iOSonntag)
- [PayPal](https://paypal.com/paypalme/iOSonntag/20)
- [主页](https://iOSonntag.com/buy-me-a-coffe)

<br/>
<br/>
免责声明

我不拥有**TreeFocusMode**™和**TreeFocusModes**™商标。这纯粹是对该商标愚蠢性质的恶搞。开发者们经常开这种玩笑 :D - 祝你有美好的一天！
