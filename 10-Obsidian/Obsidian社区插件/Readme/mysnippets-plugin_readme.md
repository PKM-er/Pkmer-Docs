---
uid: 2023080322224514
title: Obsidian 插件：MySnippets
tags: ['obsidian插件', 'readme']
description: MySnippets是一个插件，它添加了一个状态栏菜单，允许用户快速开启和关闭他们的片段🖌。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：MySnippets

> [!Note] 插件名片
> - 插件名称：MySnippets
> - 插件作者：Chetachi
> - 插件说明：MySnippets 是一个插件，它添加了一个状态栏菜单，允许用户快速开启和关闭他们的片段🖌。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chetachiezikeuzor/MySnippets-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mysnippets-plugin)

## 概述

MySnippets 是一个插件，它添加了一个状态栏菜单，允许用户快速开启和关闭他们的片段🖌。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/README.md)

---

## Readme(翻译）

下面是 [[mysnippets-plugin]] 插件的自述翻译

# MySnippets 插件

![MySnippets-Plugin 下载量](https://img.shields.io/github/downloads/chetachiezikeuzor/MySnippets-Plugin/total.svg)

![MySnippets-Plugin 发布版本](https://img.shields.io/github/v/release/chetachiezikeuzor/MySnippets-Plugin)

<img alt="mysnippets-header" src="https://user-images.githubusercontent.com/79069364/144681107-0ff0aada-b8a7-4e0e-8e2d-945b0386ee2d.png">

### 状态：此插件目前可在 Obsidian 插件商店中使用

还记得有一次，你想要测试一些酷炫的新片段吗？但是你不得不不停地在工作区和设置选项卡之间来回切换，以便打开和关闭它们。我也有过同样的经历...但是等等！如果你能...我不知道...直接在你面前就能看到你的片段呢？如果你能在工作区舒适的环境中打开和关闭你的片段呢？那将非常酷，对吧？我知道！那么，你来对地方了！

MySnippets 是一个插件，它添加了一个状态栏菜单，让用户可以在工作区舒适的环境中快速管理他们的片段🖌。这个插件通过一个美丽的迷你菜单，让管理片段变得轻而易举，只需点击一个按钮即可显示出来！

## 演示

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144683686-b8cfd625-e864-489d-8d0b-2fc36b7bd260.gif" alt="open-menu-in-statusbar" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

易用性

我们都喜欢使用各种片段来修改 Obsidian，但我敢打赌，我们大多数人都不喜欢不得不反复触发设置选项卡才能访问我们的片段。有了 MySnippets，我们终于可以轻松地访问和切换我们的片段！可以将其视为设置选项卡中“CSS Snippets”部分的简化和隐藏版本。我不知道你怎么想，但当我想编辑我的片段时，我不想不得不在设置选项卡中翻找它们！这可能会分散注意力，浪费时间，总之很烦人！所以让我们结束“设置>外观>CSS Snippets”的时代，迎接新时代的<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><path d="M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053l-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855a1 1 0 0 1 .75 1.855z" fill="currentColor"/></svg> ← _点击_！

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/configureSnippets.png" width="280px">

## 如何使用

MySnippets 在您的工作区中添加了一个可爱的小状态栏图标。您只需点击即可在菜单中查看所有可爱的代码片段！在这里，您将在菜单底部看到两个按钮。第一个是“重新加载”按钮，第二个是“文件夹”按钮。点击“重新加载”按钮将允许插件重新读取您的代码片段文件夹，以防您决定创建新的代码片段或删除代码片段。点击“文件夹”按钮将打开包含您的代码片段的文件夹。这些按钮模仿了设置选项卡中的功能。

<img src="https://user-images.githubusercontent.com/79069364/144683689-e125c321-8757-4afd-956a-4227b55363bf.gif" alt="open-snippet-folder" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

每个代码片段项都有一个切换和一个按钮。您可以使用切换将代码片段打开/关闭。

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

您还可以使用按钮使用默认应用程序打开代码片段。

<img src="https://user-images.githubusercontent.com/79069364/144683696-b8c29740-94e4-48b0-b865-b2f9f6fffd61.gif" alt="open-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

在 Mac 上，您可以通过右键单击任何 CSS 文件，然后点击“获取信息”来更改默认应用程序。然后，转到“打开方式”部分，选择您想要使用的应用程序。使用“全部更改...”按钮将此应用程序设置为打开 CSS 文件的默认应用程序。

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/defaultApp.png" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

使用 MySnippets，您可以更改设计美学。您可以选择在设置选项卡中为 MySnippets 选择“玻璃”样式，这样它就具有独特而未来感的外观！

<img src="https://user-images.githubusercontent.com/79069364/144682628-d38979c2-c0d1-4709-8ecb-d9ab72c2cb77.png" alt="glass-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144682602-d31beed0-ed0e-4194-a71f-faa6a05dc945.png" alt="default-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

### 创建新的 CSS 代码片段

版本 [1.1.0](https://github.com/chetachiezikeuzor/MySnippets-Plugin/releases/tag/1.1.0) 现在添加了使用模态框创建新的 CSS 代码片段的功能。您只需要提供文件的名称和文件内容即可。您还可以在设置选项卡中设置新代码片段的模板。添加了一些设置选项，您可以决定是否在创建后自动打开新的代码片段，以及是否在创建后自动切换打开新的代码片段。

<img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## 安装

此插件现在可以在社区插件商店中获得。您可以从那里安装并启用它。对于手动安装，您可以下载必要的文件并将它们放置在插件文件夹中。

---

## 更新日志

### [1.1.0](https://github.com/chetachiezikeuzor/MySnippets-Plugin/releases/tag/1.1.0) - 2021 年 12 月 4 日

##### 添加

- 创建新的 CSS 代码片段功能
  <img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

##### 修复

- MySnippets 菜单的定位现在依赖于窗口坐标（解决了隐藏状态栏的问题）。

## 清单

- [x] 打开代码片段菜单的命令
- [x] 创建新的 CSS 代码片段函数

---

## 支持

如果您喜欢这个插件并考虑捐赠以支持持续开发，请使用下面的按钮！

由 Chetachi ❤️ 创建

<a href="https://paypal.me/chelseaezikeuzor">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/paypal.svg" height="70"></a>
<br/>
<a href="https://ko-fi.com/chetachi">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/kofi_color.svg" height="50"></a>



