---
uid: 2023080322171556
title: Obsidian 插件：DEVONlink
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 在DEVONthink中打开或显示当前笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：DEVONlink

> [!Note] 插件名片
> - 插件名称：DEVONlink
> - 插件作者：ryanjamurphy
> - 插件说明：在 DEVONthink 中打开或显示当前笔记。
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ryanjamurphy/DEVONlink-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?DEVONlink-obsidian)

## 概述

在 DEVONthink 中打开或显示当前笔记。

![DEVONlink](https://cdn.pkmer.cn/covers/DEVONlink-obsidian_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryanjamurphy/DEVONlink-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[DEVONlink-obsidian]] 插件的自述翻译

DEVONlink - 将 Obsidian 与 DEVONthink 集成

在 DEVONthink 中打开或显示当前笔记。或者，使用 DEVONthink 的 AI 功能插入相关文件。

与配套的 AppleScript 配对，将 Obsidian 和 DEVONthink 的笔记集成在一起。在此处阅读有关插件的更多信息，并找到 AppleScript：<https://axle.design/devonlink-integrate-obsidian-and-devonthink>

![此视频展示了用户如何使用插件和AppleScript在Obsidian和DEVONthink之间来回打开笔记。](https://i.imgur.com/VRurr9L.gif)

![版本2引入了一种将DEVONthink的AI中的相关项目插入到Obsidian笔记中的方法。](https://user-images.githubusercontent.com/3618647/113517367-c6c04d80-953c-11eb-81ca-5f898c776ff0.gif)

### 如何使用

1. 确保你的笔记已经在 DEVONthink 数据库中建立索引，并且数据库在 DEVONthink 中是打开的。
2. 点击插件设置中可配置的 DEVONlink 命令之一的丝带按钮来调用。或者，通过命令面板使用这些命令（按下 <kbd>cmd</kbd>+<kbd>p</kbd>，然后搜索 "DEVONlink"）。或者，在 Obsidian 的热键首选项中为这些命令分配热键。

### 它是如何工作的

该插件使用您活动笔记的名称来查找在您打开的任何数据库中具有该名称的文件的第一个实例。

如果您在多个位置拥有相同的文件（例如，通过复制品或重复项），或者如果您有多个与您的笔记同名的文件，则可能无法获得理想的结果。

### 安装插件

在 Obsidian 的社区插件库中查找并选择 " 安装 "。

### 手动安装插件

- 将 `main.js` 和 `manifest.json` 复制到你的 Vault 文件夹中的目录 `VaultFolder/.obsidian/plugins/DEVONlink-obsidian/`。



