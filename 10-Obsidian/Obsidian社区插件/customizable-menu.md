---
uid: 20230809110431
title: Obsidian 插件：Customizable Menu 自定义你的右键菜单，好用的功能集成起来
tags: [Obsidian, 插件, 快捷键, 效率, 自定义, 右键菜单]
description: Obsidian 插件：Customizable Menu 自定义你的右键菜单，好用的功能集成起来
author: OS
type: other
draft: false
editable: false
modified: 20230911161601
---

# Obsidian 插件：Customizable Menu 自定义你的右键菜单，好用的功能集成起来

## 概述

Obsidian 提供了一个简约专注的交互方式，但是丰富的插件市场提供了我们很多自定义的功能和工作流选项。

但大部分插件提供的命令，都默认优先集成在了 [[命令面板]]，对于很多习惯图形化操作界面的人，这样的方式可能有些不够方便。

Customizable Menu 这个插件可以将命令加入进右键菜单中，需要的时候点一下就好了。我愿意成为鼠标爱好者福音。

> [!Note] 插件名片
> - 插件名称：Customizable Menu
> - 插件作者：kzhovn
> - 插件版本：2.2.0
> - 插件说明：允许您将任何命令，包括 OB 自己的和插件提供的，添加到 Obsidian 的右键菜单中。
> - 插件分类：[' 快捷键 ', ' 效率 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/kzhovn/obsidian-customizable-menu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?customizable-menu)

## 效果&特性

- 此插件允许您在右键菜单中添加或隐藏任何命令，包括社区插件的命令，并为其分配自定义图标。
- 请注意，添加命令仅在“源”和“实时预览”模式下的注释菜单上可用，但在“预览”模式或边栏中不可用。

## 使用

- 安装并开启插件
- 在插件的设置页面，添加命令和命令对应的图标
![Customizable Menu](https://cdn.pkmer.cn/covers/customizable-menu.PNG!pkmer)

- 点击 “Add Command” 添加命令
- 选择命令后，可以选择为这个右键菜单添加对应图标。

### 自定义图标

如果命令尚未具有图标，您可以从 Obsidian 的内部图标和 Lucide 图标中分配一个图标。您还可以通过在命令被注册后点击“编辑”按钮来重新分配具有预先存在图标的命令的图标。

如果您想自定义列出的命令的样式，而不仅仅是删除它们，选择器是 `div.custom-menu-hide-item`。

### 删除命令

将要隐藏的命令名称添加到此处，与 Obsidian 菜单中显示的名称完全相同。请注意，此设置将从 Obsidian 的所有上下文菜单中删除具有该名称的*所有*命令（包括菜单、文件资源管理器菜单等），而不仅仅是在笔记中的菜单。这意味着，在某些情况下，如果同名命令出现在多个不同的菜单中（例如，文件资源管理器菜单和笔记菜单中的“在默认应用程序中打开”），目前无法仅隐藏其中一个。

## 范例

- 比如我这里将之前介绍过的一个插件 [[obsidian-file-link]]，我将插件文件的命令继承到了右键，就不用每次键盘去查找命令了（当然你使用快捷键也可以）

![image.png](https://cdn.pkmer.cn/images/20230809111657.png!pkmer)
