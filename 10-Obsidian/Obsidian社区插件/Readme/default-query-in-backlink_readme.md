---
uid: 20240312193744
title: Obsidian 插件：【Readme】Default query in backlinks
tags: ['obsidian插件', 'readme']
description: 在文档中的反向链接搜索输入框中自动输入默认查询。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Default query in backlinks

> [!Note] 插件名片
> - 插件名称：Default query in backlinks
> - 插件作者：Benature
> - 插件说明：在文档中的反向链接搜索输入框中自动输入默认查询。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Benature/obsidian-default-query-in-backlink)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?default-query-in-backlink)

## 概述

在文档中的反向链接搜索输入框中自动输入默认查询。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Benature/obsidian-default-query-in-backlink/master/README.md)

---

## Readme(翻译）

下面是 [[default-query-in-backlink]] 插件的自述翻译

# 在反向链接中的默认查询

在文档中的反向链接搜索输入框中自动输入默认查询。

- 文件打开后自动触发查询。
- 自定义查询保留在同一叶子中。
- 如果设置更新，则覆盖旧的默认查询。

<center>
<img src="https://s2.loli.net/2024/03/04/N5yuQhaF3z6Anop.gif" />
</center>

## 我的故事

我使用“文档中的反向链接”功能来探索与其他笔记的连接。同时，许多笔记文件都链接到我的日常笔记中，比如待办事项或由 [List Modified](https://obsidian.md/plugins?id=obsidian-list-modified) 插件自动添加的笔记。

然而，由于有许多日常笔记链接到其他笔记，反向链接视图变得混乱，被那些并不提供太多有用信息的日常笔记所淹没。

为了避免显示日常笔记（例如，位于 `Diary/` 文件夹中的笔记），我必须每次在反向链接视图中手动输入搜索查询 `-path:Diary`。这就是为什么我开发了这个插件 - 简化在反向链接视图中输入搜索查询的过程。

## 安装

## 从社区插件安装

- 首先安装 [BRAT插件](https://obsidian.md/plugins?id=obsidian42-brat)：
- 在 BRAT 插件中，点击 `Add Beta plugin`
- 输入<https://github.com/Benature/obsidian-default-query-in-backlink>
- 在 `Community plugins` 中启用 `Default query in backlinks`
- 在 [Releases](https://github.com/Benature/obsidian-default-query-in-backlink/releases/latest) 中下载最新版本
- 将 `main.js`、`manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/default-query-in-backlink/` 中
- 在 `Community plugins` 中重新加载插件并启用 `Default query in backlinks`

## 如何构建

- `git clone https://github.com/Benature/obsidian-default-query-in-backlink` 克隆这个仓库。
- `npm i` 安装依赖
- `npm run dev` 启动监视模式下的编译。
- `npm run build` 构建生产环境。

## 支持

如果您发现这个插件很有用并希望支持它的开发，您可以通过 [给我买杯咖啡 ☕️](https://www.buymeacoffee.com/benature)、微信、支付宝或 [AiFaDian](https://afdian.net/a/Benature-K) 来赞助我。任何金额都受欢迎，谢谢！

<p align="center">
<img src="https://s2.loli.net/2024/01/30/jQ9fTSyBxvXRoOM.png" width="500px">
</p>



