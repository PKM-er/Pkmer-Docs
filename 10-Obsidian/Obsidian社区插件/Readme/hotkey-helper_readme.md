---
uid: 20230803231105
title: Obsidian 插件：Hotkey Helper
tags: ['快捷键', '效率', 'obsidian插件', 'readme']
description: 一个快捷键助手，让你更容易的管理 Obsidian 的快捷键。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232553
---

# Obsidian 插件：Hotkey Helper

> [!Note] 插件名片
> - 插件名称：Hotkey Helper
> - 插件作者：PJ Eby
> - 插件说明：一个快捷键助手，让你更容易的管理 Obsidian 的快捷键。
> - 插件分类：[' 快捷键 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/pjeby/hotkey-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hotkey-helper)

## 概述

一个快捷键助手，让你更容易的管理 Obsidian 的快捷键。

![Hotkey Helper](https://cdn.pkmer.cn/covers/hotkey-helper.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pjeby/hotkey-helper/master/README.md)
>

---

## Readme(翻译）

下面是 [[hotkey-helper]] 插件的自述翻译

## 快捷键助手：更轻松地管理 Obsidian 的快捷键和选项

> 新功能...
>
> * 0.3.13：通过输入插件名称打开快捷键或设置的命令
> * 0.3.12：使用 Ctrl- 或 Cmd-Enter 从命令面板跳转到编辑快捷键！
> * 0.3.8：在社区插件搜索框中输入回车键以使用该搜索打开插件目录
> * 0.3.5：插件搜索被保存，并在浏览插件目录时保留
> * 0.3.2：使用 [插件URL](#plugin-urls) 链接到插件，并在插件浏览器中添加配置按钮
> * 0.2.1：支持核心插件和非插件快捷键以及社区插件

该插件通过在每个插件旁边（在核心和社区插件选项卡中）添加图标，使得在 [Obsidian.md](https://obsidian.md) 中更容易管理插件的快捷键和选项。您可以使用这些图标来打开插件的选项或快捷键分配。

![](https://raw.githubusercontent.com/pjeby/hotkey-helper/master/hotkey-helper.gif)

更好的是：将鼠标悬停在快捷键图标上，可以显示插件具有多少个命令，其中有多少个命令分配了快捷键，以及这些分配中有多少与其他快捷键分配冲突。（如果存在任何冲突，图标还会以您的主题错误背景颜色进行突出显示。）

这些图标会随着您启用或禁用插件而自动出现、消失或更改颜色，因此您可以立即找出冲突发生的位置，并轻松查看或设置新插件的快捷键或设置。

此外，当您从社区插件查看器中启用插件时，您可以立即访问其配置和快捷键：

![插件浏览器视图](https://raw.githubusercontent.com/pjeby/hotkey-helper/master/plugin-browser.png)

### 安装

要安装该插件，请在 Obsidian 的 Community Plugins 界面中搜索“hotkey helper”。或者，如果还没有，请访问 [Github发布页面](https://github.com/pjeby/hotkey-helper/releases)，从最新版本中下载插件.zip 文件，并将其解压缩到您的 vault 的 `.obsidian/plugins/` 目录中。

无论哪种方式，您都可以在该 vault 的 Obsidian“Community Plugins”选项卡中启用它。

如果您在使用插件时遇到任何问题，请将错误报告提交到此存储库，而不是使用 Obsidian 论坛：我不会每天（甚至每周）检查论坛，但我会收到 Github 的电子邮件通知，并会比看到论坛评论更快地回复您。

### 插件 URL

当启用此插件时，您可以使用 `obsidian://goto-plugin?id=plugin-id` 形式的 URL 打开插件信息。这将在当前存储库的 Community Plugins 浏览器中打开，显示该插件的信息。例如，URL <obsidian://goto-plugin?id=hotkey-helper>将在 Obsidian 的插件浏览器中打开此页面（如果您当前的存储库已启用 Hotkey Helper）。

这意味着，如果您是插件作者，并且希望使人们能够轻松找到和安装您的插件（即无需输入插件名称），您只需在推广插件的任何地方（或其他人共享插件）包含一个 URL 即可。（注意：Github 会从 markdown 中删除 `obsidian://`URL，因此如果您想在项目的 README 中包含链接，您可以链接到例如<https://obsidian-plugins.peak-dev.org/goto/hotkey-helper/以获取重定向到实际的 Obsidian> URL。希望将来可以用官方域名的重定向器替换这个 URL。）

除了 `id=` 参数外，您还可以在 URL 中添加 `&show=config` 或 `&show=hotkeys`，以直接转到该插件的设置或热键配置（如果已安装、启用并且有设置选项卡或命令）。这可以通过提供链接而不是冗长的说明来更容易地支持您的用户，以定位所需的特定项目/区域。

### 已知问题/当前限制

* 如果在“快捷键”选项卡中搜索不带空格的字符串，以 `:` 结尾，它只会显示由命名插件提供的命令；例如，搜索 `workspaces:` 只会列出内置的工作区插件（如果启用），而不是所有命令中包含单词 workspaces 后跟一个 `:` 的命令。
