---
uid: 20230803212528
title: Obsidian 插件：【Readme】Highlightr
tags: ['编辑器', '美化', '效率', 'obsidian插件', 'readme']
description: 一个简洁而美观的高亮菜单，可以设置各种不同的高亮颜色，使彩色高亮变得更加容易阅读。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Highlightr

> [!Note] 插件名片
> - 插件名称：Highlightr
> - 插件作者：Chetachi
> - 插件说明：一个简洁而美观的高亮菜单，可以设置各种不同的高亮颜色，使彩色高亮变得更加容易阅读。
> - 插件分类：['编辑器', '美化', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/chetachiezikeuzor/Highlightr-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?highlightr-plugin)

## 概述

一个简洁而美观的高亮菜单，可以设置各种不同的高亮颜色，使彩色高亮变得更加容易阅读。

![Highlightr](https://cdn.pkmer.cn/covers/highlightr-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chetachiezikeuzor/Highlightr-Plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[highlightr-plugin]] 插件的自述翻译



# Highlightr-Plugin

![Highlightr-Plugin 下载量](https://img.shields.io/github/downloads/chetachiezikeuzor/Highlightr-Plugin/total.svg)
![Highlightr-Plugin 发布版本](https://img.shields.io/github/v/release/chetachiezikeuzor/Highlightr-Plugin)

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/Highlightr-Plugin/master/assets/Highlightr%20Demo%20Header.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

状态：此插件目前可在Obsidian插件商店中使用。

叹气。你是否希望通过突出显示你的笔记来满足你的创造驱动力？我的意思是，是的，我们可以使用Markdown语法来创建高亮，但是自定义颜色呢？哦，是的，我们知道所有那些“支持”这一点的酷CSS黑客，但是避免使用专有格式化的原则呢？好吧，我们可以使用HTML的`<mark>`标签，对吧？但是天哪，打出来太麻烦了！好吧好吧，那么模板生成器的模板怎么样？[就像这个](https://www.reddit.com/r/ObsidianMD/comments/nu0olr/multicolored_highlighting_in_obsidian/)。但是这感觉不太...本地。好吧，看来Highlightr来拯救我们了！

Highlightr是一个简单的插件，将一个简约而美观的高亮菜单带入Obsidian笔记应用程序中。该插件通过用户友好的一系列高亮颜色，使彩色高亮更加容易。

## 演示

<img src="https://user-images.githubusercontent.com/79069364/142739125-dad73e22-c6c4-4c49-8367-3e5a278659e7.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

使用便捷性

在您的笔记中进行美观的高亮显示，以补充您的记笔记过程。所选颜色在不同主题和明暗模式下都是通用的。使用内联CSS对于保持您的笔记的持久性至关重要。当您导出时，您不会依赖于任何外部CSS样式。这将使您的笔记更加灵活！

## 工作原理

虽然插件为您提供了一系列漂亮的颜色，但您可以根据自己的喜好自定义您的荧光笔菜单！通过打开插件设置选项卡来创建新的荧光笔颜色。在那里，您将看到一个输入框、颜色选择器和一个“保存”按钮。使用输入框设置全新荧光笔的名称，然后使用颜色选择器选择该荧光笔的颜色。然后使用“保存”按钮将新的荧光笔保存到荧光笔菜单中。

<img src="https://user-images.githubusercontent.com/79069364/142739491-f6f75912-8689-4eef-a10e-67a820471d3c.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://user-images.githubusercontent.com/79069364/142739119-be46413e-905a-47bb-a23b-a63babc586e1.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

Obsidian 应用程序版本 12.8 添加了一个强大的自定义上下文菜单，以便更轻松地进行笔记。该插件添加了两个菜单项：高亮和取消高亮。这些菜单项只能在选择文本时看到。单击“高亮”将触发高亮菜单，允许您从一系列颜色中进行选择。当您选择一种颜色时，您选择的文本将被包裹在 HTML 标记标签中，其中包括与您选择的颜色相对应的背景颜色。单击“取消高亮”将替换字符串 `<`、`/>` 中的文本。这意味着您可以使用它来删除 HTML 标记，而不仅仅是高亮标记。

<img alt="highlightr-demo" src="https://user-images.githubusercontent.com/79069364/144176804-c63a7e8d-f27c-48a6-bfeb-484cfe7d44e6.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://user-images.githubusercontent.com/79069364/142739490-e6824979-c339-449e-88c2-051979b7a6aa.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

您还可以使用版本 [1.0.0]() 中添加的新命令打开您的荧光笔菜单。现在，您可以使用自己选择的热键打开荧光笔菜单。您将能够为荧光笔菜单中的每个荧光笔添加热键，因为插件还为每个荧光笔创建了一个命令。

<img src="https://user-images.githubusercontent.com/79069364/142739122-aed7a0ee-e7d8-4595-90f5-9e809f44ef04.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://user-images.githubusercontent.com/79069364/142739489-8f1e3243-f07a-4b40-a9d7-9c36dd3a784b.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

版本 [1.1.2]() 添加了选择内联 CSS 和 CSS 类之间的能力。这将创建一个新的样式表，显示您所有的高亮颜色。每个类的名称为 `hltr-${highlight_title_here}`，并根据您为高亮命名的标题生成。尽管强烈推荐使用内联 CSS，但 CSS 类将使您的高亮更加灵活和易于自定义。

免责声明

插件组件将无法与[cMenu插件](https://github.com/chetachiezikeuzor/cMenu-Plugin)一起使用。

## 安装

此插件可在Obsidian社区插件商店中获得。您可以从那里安装它。如果要手动安装，您可以下载必要的文件并将它们放置在插件文件夹中。

## 更新日志

### [1.0.0](https://github.com/chetachiezikeuzor/Highlightr-Plugin/releases/tag/1.0.0) - 2021年10月10日

##### 添加

- 添加了新的设置来自定义高亮颜色。
  <img src="https://user-images.githubusercontent.com/79069364/142739119-be46413e-905a-47bb-a23b-a63babc586e1.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">
- 添加了打开高亮调色板的命令
- 添加了按高亮器添加命令的功能
  <img src="https://user-images.githubusercontent.com/79069364/142739122-aed7a0ee-e7d8-4595-90f5-9e809f44ef04.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

### [1.0.1](https://github.com/chetachiezikeuzor/Highlightr-Plugin/releases/tag/1.0.1) - 2021年10月12日

##### 添加

- 在颜色删除后，自动从命令库中删除命令的功能。

修复

- Bug: 添加了检查以确保activeView不为空

### [1.1.0](https://github.com/chetachiezikeuzor/Highlightr-Plugin/releases/tag/1.1.0) - 2021年10月14日

##### 添加

- 添加了删除高亮（`<mark>`）的命令
  <img src="https://user-images.githubusercontent.com/79069364/142739131-b7bd43da-7d76-4c51-bd21-935f0adf5807.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

##### 已更改

- 更新了撤销高亮功能
  <img alt="undohighlight" src="https://user-images.githubusercontent.com/79069364/144176697-379340a7-da36-485e-91ed-853dbfde5ab6.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">
- 创建空白高亮现在在末尾添加空格
  <img alt="addedspace" src="https://user-images.githubusercontent.com/79069364/144176500-79484143-b329-488b-855d-c46a42ece35c.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

### [1.1.1](https://github.com/chetachiezikeuzor/Highlightr-Plugin/releases/tag/1.1.1) - 2021年10月15日

##### 已更改

- 更新了光标重新定位的逻辑
  <img alt="betterCursorPos" src="https://user-images.githubusercontent.com/79069364/144176292-4df0ef0f-5478-4a31-9266-1852e7189026.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

## 清单

- [x] 高亮颜色命令
- [x] 使用命令打开高亮调色板
- [x] 使用命令取消高亮
- [x] 撤销高亮功能
- [x] 自定义高亮颜色
- [x] CSS类设置

支持

如果您喜欢这个插件并考虑捐赠以支持持续开发，请使用下面的按钮！

由Chetachi ❤️ 创建



<a href="https://paypal.me/chelseaezikeuzor">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/Highlightr-Plugin/master/assets/paypal.svg" height="70"></a>
<br/>
<a href="https://ko-fi.com/chetachi">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/Highlightr-Plugin/master/assets/kofi_color.svg" height="50"></a>



