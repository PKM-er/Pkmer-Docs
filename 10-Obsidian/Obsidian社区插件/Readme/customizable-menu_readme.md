---
uid: 2023080322165539
title: Obsidian 插件：Customizable Menu
tags: ['快捷键', '效率', 'obsidian插件', 'readme']
description: 允许您将任何命令，包括 OB 自己的和插件提供的，添加到 Obsidian 的右键菜单中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Customizable Menu

> [!Note] 插件名片
> - 插件名称：Customizable Menu
> - 插件作者：kzhovn
> - 插件说明：允许您将任何命令，包括 OB 自己的和插件提供的，添加到 Obsidian 的右键菜单中。
> - 插件分类：[' 快捷键 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kzhovn/obsidian-customizable-menu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?customizable-menu)

## 概述

允许您将任何命令，包括 OB 自己的和插件提供的，添加到 Obsidian 的右键菜单中。

![Customizable Menu](https://cdn.pkmer.cn/covers/customizable-menu.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kzhovn/obsidian-customizable-menu/master/README.md)

---

## Readme(翻译）

下面是 [[customizable-menu]] 插件的自述翻译

# Obsidian 可定制的右键菜单

该插件允许您添加或隐藏任何命令，包括社区插件的命令，到右键菜单，并为它们分配自定义图标。请注意，添加命令仅在源代码和实时预览模式下的笔记菜单中可用，而不适用于预览模式或侧边栏中。

## 自定义图标

如果命令尚未具有图标，您可以从 Obsidian 的内部图标和 Lucide 图标中分配一个图标。您还可以通过在命令被注册后点击“编辑”按钮来重新分配具有预先存在图标的命令的图标。

## 删除命令

将要隐藏的命令名称添加到此处，与 Obsidian 菜单中显示的名称完全相同。请注意，此设置将从 Obsidian 的所有上下文菜单中删除具有该名称的*所有*命令（包括菜单、文件资源管理器菜单等），而不仅仅是在笔记中的菜单。这意味着，在某些情况下，如果同名命令出现在多个不同的菜单中（例如，文件资源管理器菜单和笔记菜单中的“在默认应用程序中打开”），目前无法仅隐藏其中一个。

如果您想自定义列出的命令的样式，而不仅仅是删除它们，选择器是 `div.custom-menu-hide-item`。

感谢

这个插件最初是基于 phibr0 的优秀 [可定制侧边栏](https://github.com/phibr0/obsidian-customizable-sidebar) 的分支，并且仍然使用了其中的许多元素。隐藏菜单项的代码部分来自 Panossa 的 [Mindful Obsidian](https://github.com/Panossa/mindful-obsidian/blob/master/main.ts)。
