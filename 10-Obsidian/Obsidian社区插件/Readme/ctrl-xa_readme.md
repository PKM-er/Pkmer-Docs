---
uid: 2024022117271129
title: Obsidian 插件：【Readme】Ctrl-XA cycle various items
tags: ['obsidian插件', 'readme']
description: Cycle through various items with keyboard shortcuts. Such as days, months, true-false, log level,... anything you need.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ctrl-XA cycle various items

> [!Note] 插件名片
> - 插件名称：Ctrl-XA cycle various items
> - 插件作者：nbossard
> - 插件说明：Cycle through various items with keyboard shortcuts. Such as days, months, true-false, log level,... anything you need.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nbossard/obsidian-CtrlXA)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ctrl-xa)

## 概述

Cycle through various items with keyboard shortcuts. Such as days, months, true-false, log level,... anything you need.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nbossard/obsidian-CtrlXA/master/README.md)

---

## Readme(翻译）

下面是 [[ctrl-xa]] 插件的自述翻译

# Ctrl XA 插件

![GitHub发布（按日期最新）](https://img.shields.io/github/v/release/nbossard/obsidian-CtrlXA)

![GitHub发布日期](https://img.shields.io/github/release-date/nbossard/obsidian-CtrlXA)

![GitHub问题](https://img.shields.io/github/issues/nbossard/obsidian-CtrlXA)

![GitHub所有发布](https://img.shields.io/github/downloads/nbossard/obsidian-CtrlXA/total)

![GitHub](https://img.shields.io/github/license/nbossard/obsidian-CtrlXA)

受 vim 插件启发：<https://github.com/Konfekt/vim-CtrlXA>

这个 Obsidian 插件允许轻松循环浏览关键词列表，例如：

- 星期一/星期二/星期三/...
- 真/假
- 是/否
- 设定/取消设定
- 昨天/今天/明天
- 罗马数字 I、II、III...

它还可以自动增加/减少数字。

即将推出：日期支持。

## 用法

安装并启用此插件。

转到插件的设置，填写您需要的列表。

转到设置/快捷键，为命令“Ctrl-XA 循环各种项目：向上循环”和“Ctrl-XA 循环各种项目：向下循环”定义快捷键，

可以是 Ctrl-X 和 Ctrl-A（就像在 Vim 中一样），或者您想要的任何键...

## 各种

注意：此插件已经开始使用 <https://github.com/obsidianmd/obsidian-sample-plugin>

## 手动安装

这是为了获取最新的开发版本。

进入包含您的保险库的文件夹，然后进入子文件夹 ".obsidian/plugins"。

在那里克隆存储库：<https://github.com/nbossard/obsidian-CtrlXA>。

重新启动 Obsidian。

## 发布流程

- 检查 [changelog.md](./changelog.md) 的内容并添加发布日期
- 检查 [versions.json](./versions.json) 的内容
- 检查 [manifest.json](manifest.json) 中的**"version"**字段
- 检查 [package.json](package.json) 中的**"version"**字段
- 确保所有内容已保存并提交
- 打上 git 标签并推送
- 在 "changelog.md"、"versions.json"、"manifest.json"、"package.json" 中提升版本号



