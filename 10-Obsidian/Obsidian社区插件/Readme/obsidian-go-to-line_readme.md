---
uid: 2023080322191720
title: Obsidian 插件：Go to Line
tags: ['导航工具', 'obsidian插件', 'readme']
description: 这个插件提供了一个跳转行命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Go to Line

> [!Note] 插件名片
> - 插件名称：Go to Line
> - 插件作者：phibr0
> - 插件说明：这个插件提供了一个跳转行命令。
> - 插件分类：[' 导航工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/phibr0/obsidian-go-to-line)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-go-to-line)

## 概述

这个插件提供了一个跳转行命令。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/phibr0/obsidian-go-to-line/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-go-to-line]] 插件的自述翻译

# Obsidian Go To Line [![GitHub tag (Latest by date)](https://img.shields.io/github/v/tag/phibr0/obsidian-go-to-line)](https://github.com/phibr0/obsidian-go-to-line/releases) ![GitHub all releases](https://img.shields.io/github/downloads/phibr0/obsidian-go-to-line/total)

> 此插件是根据 Discord 上的 @arvn 的要求创建的。

此插件添加了在 Obsidian 中转到特定行和字符的新命令。

您可以使用命令面板找到命令，或为其设置热键。

默认情况下，单个光标的位置保存为 `行:列`，多个光标保存为 `行:列,行:列,...`。可以在“转到行”设置窗格中自定义分隔符 `:` 和 `,`。

### 命令

#### 1. `转到行`

将出现一个文本字段，您可以输入行号或使用 `行：列` 的格式，例如 `15:27` 表示第 15 行第 27 个字符。

#### 2. `跳转到剪贴板内容所在的行`

绕过弹出窗口，不要求输入行号，而是使用剪贴板的内容自动设置活动面板中的光标。如果剪贴板内容不是有效的行信息，则不会执行任何操作。

#### 3. `复制光标行号`

将主要的行号和字符信息复制到剪贴板中（会销毁当前剪贴板的内容）。如果存在多个光标，则只会复制一个。

#### 4. `复制所有光标行号`

将所有光标行和字符信息复制到剪贴板中（会销毁当前剪贴板内容）。

## 安装方法

1. 在 [Obsidian](https://www.obsidian.md) 的设置中找到 **Community Plugins**，然后**禁用**安全模式
2. 点击 **浏览** 并搜索 "Go to Line"
3. 点击安装
4. 在 **Community Plugins** 标签中切换插件开启状态

## 支持我

如果你觉得这个插件对你有帮助，请考虑支持我：
