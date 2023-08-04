---
uid: 2023080322281264
title: Obsidian 插件：【Readme】Theme Design Utilities
tags: ['美化', '效率', 'obsidian插件', 'readme']
description: 一些实用工具和提高生活质量的功能，供 Obsidian 主题设计者使用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Theme Design Utilities

> [!Note] 插件名片
> - 插件名称：Theme Design Utilities
> - 插件作者：pseudometa
> - 插件说明：一些实用工具和提高生活质量的功能，供 Obsidian 主题设计者使用。
> - 插件分类：[' 美化 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/obsidian-theme-design-utilities)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-theme-design-utilities)

## 概述

一些实用工具和提高生活质量的功能，供 Obsidian 主题设计者使用。

![Theme Design Utilities](https://cdn.pkmer.cn/covers/obsidian-theme-design-utilities.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/obsidian-theme-design-utilities/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-theme-design-utilities]] 插件的自述翻译

# 主题设计工具

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22obsidian-theme-design-utilities%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-theme-design-utilities?label=最新版本&style=plastic) [![](https://img.shields.io/badge/更新日志-点击这里-FFE800?style=plastic)](Changelog.md)

为 [Obsidian](https://obsidian.md/) 主题设计师提供一些实用工具和生活品质功能。

## 目录

<!--toc:start-->
- [目录](#目录)
- [新增的命令](#新增的命令)
  - [移动仿真](#移动仿真)
  - [在所有三种模式之间切换](#在所有三种模式之间切换)
  - [循环浏览已安装的主题](#循环浏览已安装的主题)
  - [浅色/深色模式切换](#浅色深色模式切换)
  - [冻结 Obsidian](#冻结-obsidian)
  - [切换开发者工具](#切换开发者工具)
  - [乱码文本](#乱码文本)
  - [`.foobar` 测试类](#foobar-测试类)
  - [用于调试的红色轮廓](#用于调试的红色轮廓)
  - [永久测试通知](#永久测试通知)
  - [CSS 特性兼容性（Chrome 版本）](#css-特性兼容性chrome-版本)
  - [显示备忘单](#显示备忘单)
- [文档和示例笔记](#文档和示例笔记)
  - [备忘单](#备忘单)
  - [Markdown 笔记：显示当前主题颜色](#markdown-笔记显示当前主题颜色)
  - [Markdown 笔记和 CSS 代码片段：玩转颜色](#markdown-笔记和-css-代码片段玩转颜色)
- [其他 Obsidian 主题设计资源](#其他-obsidian-主题设计资源)
  - [Obsidian 插件](#obsidian-插件)
  - [指南](#指南)
- [安装](#安装)
- [贡献](#贡献)
- [关于开发者](#关于开发者)
  - [个人资料](#个人资料)
  - [给我买杯咖啡](#给我买杯咖啡)
<!--toc:end-->

## 添加的命令

### 移动仿真

方便地启用 Obsidian 的移动仿真，即 Obsidian 在移动设备上的显示效果。这有助于为移动设备样式化您的主题。

### 在所有三种模式之间循环切换

在源代码模式、实时预览模式和阅读模式之间循环切换。设置一个快捷键，可以快速查看主题在所有三种视图模式下的外观。

### 循环浏览已安装的主题

循环浏览所有已安装的主题。与主题切换插件不同的是，它不会打开一个模态框，而是直接切换到下一个已安装的主题。

<img width=60% alt="主题循环演示" src="demo/theme-cycler.gif">

### 浅色/深色模式切换

一个简单的命令，用于在浅色和深色模式之间切换。设置一个快捷键，可以快速改变主题的模式。

<img src="https://user-images.githubusercontent.com/73286100/148293043-c16e8d32-489d-4f14-9b26-9d00c6a83901.gif" alt="Screen Recording 2022-01-05 at 22 36 10" width=60%>

### 冻结 Obsidian

在一小段延迟后，打开开发工具并冻结与 Obsidian 的交互。在此期间，您可以创建临时元素，如上下文菜单或工具提示，它们将保持在屏幕上。

要解冻 Obsidian，请点击出现在 Obsidian 顶部的“播放”按钮。

<img src="https://user-images.githubusercontent.com/73286100/144731519-2f64352e-5264-45c3-bb3c-eb05c56a8322.png" alt="image" width=25%>

### 切换开发者工具

打开/关闭开发者工具（开发者控制台）。与 Obsidian 内置的打开开发者工具的方法相同，但在命令面板中可用，可以为其设置自定义热键。

混淆文本

混淆整个应用程序中的所有文本。当悬停在元素上时，“解混淆”它们。这样，您可以在保持隐私的同时共享屏幕截图。

### `.foobar` 测试类

此命令将一个测试类 `.foobar` 添加/移除到 DOM 元素 `.app-container`。这样，您可以快速切换一些用于调试目的的 CSS 样式，而无需启用/禁用代码片段。

```css
.app-container.foobar h1 {
	color: red;
}
```

### 用于调试的红色轮廓

为所有元素添加红色轮廓。再次运行命令以删除轮廓。这些轮廓对于调试非常有用，[本质上相当于CSS中的`console.log()`](https://www.youtube.com/shorts/ii-lSK2_Nu4)。

### 永久测试通知

发布一个通知（通告），直到你点击它才会消失。这对于样式化通知非常有用，因为它们通常会很快消失。

<img width=40% alt="Screenshot 2022-01-05 22 28 09" src="https://user-images.githubusercontent.com/73286100/148292139-86847227-5048-41e4-a6dc-768e4b54728b.png">

### CSS 特性兼容性（Chrome 版本）

- 将显示 Obsidian 用于渲染 CSS 的当前 Chrome 版本的通知。像 [MDN](https://developer.mozilla.org/en-US/) 或 [W3-Schools](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp) 这样的网站通常在特定 CSS 特性的文档页面底部记录所需的最低 Chrome 版本。
- 在 iOS 上，Obsidian 使用的是 Safari 引擎，其版本与用户使用的 iOS 版本相匹配。[苹果自己发布了iOS版本的普及情况 - 从而确定了要针对的底层Safari版本](https://developer.apple.com/support/app-store/)。

如果您正在使用 [stylelint](https://stylelint.io/)，您还可以简单地使用方便的 [stylelint-no-unsupported-browser-features插件](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)，并将其添加到您的 `.stylelintrc.json` 文件中：

```json
{
	"extends": ["stylelint-config-recommended"],
	"plugins": ["stylelint-no-unsupported-browser-features"],
	"rules": [
		"plugin/no-unsupported-browser-features": [true, {
			"browsers": ["last 10 Chrome versions", "last 3 iOS versions"],
			"ignore": ["css-masks"],
			"ignorePartialSupport": true
		}],
	]
}
```

### 显示备忘单

打开一个显示 Obsidian CSS 类的备忘单。

<img src="./cheatsheets/css-classes.png" alt="Obsidian API Model" width=40%>

## 文档和示例笔记

您可以在不安装插件的情况下访问这些资源。

### 备忘单

您可以从 [备忘单文件夹](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/cheatsheets) 获取各种 Obsidian 设计备忘单。

### Markdown 笔记：显示当前主题颜色

[`theme-design-utilities-current_theme.md`](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-current_theme.md) 是一个 Markdown 文件，可以添加到您的保险库中以显示当前的主题颜色。

<img src="./demo/color-playground_note-current_theme-screenshot.png" alt="currrent_theme colors note, screenshots" width=40%>

### Markdown 笔记和 CSS 片段：玩转颜色

[`theme-design-utilities-colorplay.md`](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-colorplay.md) 是一个 Markdown 笔记，它和它的 [伴侣CSS片段](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-colorplay.md) 展示了彩色方块。将该笔记添加到您的保险库中，将 CSS 片段添加到您的片段集合中。您可以通过编辑 CSS 片段或使用 [Style Settings插件](https://github.com/mgmeyers/obsidian-style-settings) 来更改颜色。

<img src="./demo/color-playground_note-colorplay-screenshot.png" alt="colorplay colors note, screenshot" width=40%>

其他资源供 Obsidian 主题设计师使用

### Obsidian 插件

- [我的片段](https://github.com/chetachiezikeuzor/MySnippets-Plugin)
- [主题选择器](https://github.com/kenset/obsidian-theme-picker)
- [打印预览](https://github.com/nothingislost/obsidian-print-preview)（未列出）
- [主题热重载](https://github.com/mProjectsCode/obsidian-theme-hot-reload-plugin)

### 指南

- [主题设计师的资源和指南概述](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Theme+Designers)
- [为什么以及如何在Obsidian主题中使用Stylelint](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Why+and+How+to+use+Stylelint+for+your+Obsidian+Theme)
- [想要在你的Obsidian主题中使用Sass吗？这是如何和为什么](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Want+some+Sass+with+your+obsidian+theme%E2%80%BD+here's+How+and+Why)
- [如何使用Obsidian 1.0 CSS变量](https://www.youtube.com/watch?v=yl0pvIRTWWo)

## 安装

此插件可在 Obsidian 的社区插件浏览器中找到：`设置` → `社区插件` → `浏览` → 搜索 *"Theme Design Utilities"*

## 贡献

欢迎提交 Pull Requests 以添加更多的实用工具。

在提交 Pull Requests 之前，请使用存储库中的 `.eslintrc` 配置，并运行 eslint。🙂

```shell

# 运行 eslint 修复最常见的错误
eslint --fix *.ts

## 关于开发者
在我的日常工作中，我是一名社会学家，研究数字经济背后的社会机制。在我的博士项目中，我研究应用经济的治理以及软件生态系统如何处理创新和兼容性之间的紧张关系。如果您对这个主题感兴趣，请随时与我联系。

<!-- markdown-link-check-disable -->

### 个人资料
- [学术网站](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

### 请给我买杯咖啡




