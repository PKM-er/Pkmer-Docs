---
uid: 2023080322293312
title: Obsidian 插件：【Readme】Wikilinks to MDLinks
tags: ['转换工具', 'obsidian插件', 'readme']
description: 将双链和 Markdown 链接互换。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Wikilinks to MDLinks

> [!Note] 插件名片
> - 插件名称：Wikilinks to MDLinks
> - 插件作者：Agatha Uy
> - 插件说明：将双链和 Markdown 链接互换。
> - 插件分类：[' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/agathauy/wikilinks-to-mdlinks-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wikilinks-to-mdlinks-obsidian)

## 概述

将双链和 Markdown 链接互换。

![Wikilinks to MDLinks](https://cdn.pkmer.cn/covers/wikilinks-to-mdlinks-obsidian.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/agathauy/wikilinks-to-mdlinks-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[wikilinks-to-mdlinks-obsidian]] 插件的自述翻译

# Wikilinks to MDLinks（一个 Obsidian.md 插件）

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/agathauy/wikilinks-to-mdlinks-obsidian)](https://github.com/agathauy/wikilinks-to-mdlinks-obsidian/releases/latest)

[![GitHub All Releases](https://img.shields.io/github/downloads/agathauy/wikilinks-to-mdlinks-obsidian/total)](https://github.com/agathauy/wikilinks-to-mdlinks-obsidian/releases)

该插件允许将单独选择的维基链接转换为 Markdown 链接，反之亦然。

![demo](https://raw.githubusercontent.com/agathauy/wikilinks-to-mdlinks-obsidian/master/demo2.gif)

### 如何操作

1. 在您想要转换的链接内的任意位置单击光标。
2. 要么使用热键 `Ctrl/cmd + shift + L`，要么按下 `Ctrl/cmd + p` 打开设置对话框，并搜索 `Wikilinks to MDLinks: Toggle selected wikilink to markdown link and vice versa`。只需输入一部分命令，例如 "toggle"，可能会使该命令通过搜索对话框提供的建议显示出来。
3. 所选链接将根据之前的格式切换为 wikilink 格式或 markdown 格式。

### 设置

- 切换选定的维基链接为 Markdown 链接，反之亦然

### 未来计划

1. 将所选文本中的所有维基链接转换为 Markdown 格式
2. 将所选文本中的所有 Markdown 链接转换为维基链接

## 安装

### 从 Obsidian 内部

1. 通过“第三方插件”设置安装。搜索“Wikilinks to MDLinks”。
2. 在设置中激活插件。

### 如何运行这个仓库

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### Obsidian API 文档

基于以下链接：

<https://github.com/obsidianmd/obsidian-sample-plugin>

<https://github.com/obsidianmd/obsidian-api>

# 版本历史

## 0.0.5

- 更新了回调检查

## 0.0.4

- 更新了 markdown 链接的正则表达式

## 0.0.3

- 根据 Obsidian 的拉取请求建议更新了某些函数

## 0.0.2

- 由于与之前的快捷键冲突，将快捷键更改为 `Ctrl/cmd + shift + =`。

## 0.0.1

- 初始版本。包括 `将选定的维基链接切换为Markdown链接，反之亦然`。



