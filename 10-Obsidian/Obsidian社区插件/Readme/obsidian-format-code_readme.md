---
uid: 2023080322184788
title: Obsidian 插件：Format code blocks of various languages
tags: ['obsidian插件', 'readme']
description: 这个插件引入了格式化代码的命令（内部使用prettier）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Format code blocks of various languages

> [!Note] 插件名片
> - 插件名称：Format code blocks of various languages
> - 插件作者：iVariable
> - 插件说明：这个插件引入了格式化代码的命令（内部使用 prettier）
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iVariable/Obsidian-Format-Code)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-format-code)

## 概述

这个插件引入了格式化代码的命令（内部使用 prettier）

![Format code blocks of various languages](https://cdn.pkmer.cn/covers/obsidian-format-code.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iVariable/Obsidian-Format-Code/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-format-code]] 插件的自述翻译

## Obsidian 格式化代码插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它引入了自定义命令来格式化代码。

目前支持以下语言：

- JSON
- YAML
- HTML
- GraphQL
- TypeScript

底层使用 [Prettier](https://github.com/prettier/prettier)。

### 如何使用

![如何使用](assets/obsidian-prettier-demo.gif)

### 如何安装

在 Obsidian 生态系统中尚未发布此插件之前，您可以按照 [如何开发](#how-to-develop) 的说明进行安装。

### 开发步骤

1. 克隆仓库到 `.obsidian/plugins/obsidian-format-code`
2. 运行 `npm i`
3. 运行 `npm run dev`
4. 启动 Obsidian
5. 在 Obsidian 设置中的 "Community plugins" > "Installed plugins" > "Format code" 下启用插件



