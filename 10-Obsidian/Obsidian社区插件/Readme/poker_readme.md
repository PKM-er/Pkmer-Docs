---
uid: 2023082011360762
title: Obsidian 插件：【Readme】Poker
tags: ['obsidian插件', 'readme']
description: 轻松记录和查看您的扑克牌手。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Poker

> [!Note] 插件名片
> - 插件名称：Poker
> - 插件作者：James DiGioia
> - 插件说明：轻松记录和查看您的扑克牌手。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mAAdhaTTah/obsidian-poker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?poker)

## 概述

轻松记录和查看您的扑克牌手。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mAAdhaTTah/obsidian-poker/main/README.md)
>

---

## Readme(翻译）

下面是 [[poker]] 插件的自述翻译

# 黑曜石扑克

轻松记录和查看你的扑克牌手。

## 截图

![渲染的卡片](rendered-editor.png)

如何安装

在 Obsidian 中，转到“设置 > 第三方插件 > 社区插件 > 浏览”，然后搜索“Poker”。

### 手动安装

将 [最新版本](https://github.com/mAAdhaTTah/obsidian-poker/releases/latest) 解压缩到您的 `<vault>/.obsidian/plugins/` 文件夹中。

如何配置

该插件允许您自定义内联卡片的前缀。转到“设置 -> 扑克”进行自定义。插件默认将前缀设置为“pkr”。

如何使用

### 渲染卡片

要渲染一张卡片，添加反引号作为你选择的前缀，然后加上冒号，然后以标准的两个字母符号表示卡片（例如，`As` 表示黑桃 A）。

这是一张牌：`pkr:As`。

您也可以一次处理多张牌：`pkr:AsAc`。

## 路线图

- 添加对没有花色的牌的支持（例如 `Kx`）
- 添加对未知花色或非同花的牌或其他牌的支持（例如 `KsXo`、`KsXs` 或 `KsX`）
- 添加生成随机数量的牌的命令（例如生成随机的翻牌）
- 使用 Markdown 代码块和 YAML 定义手牌并在预览中显示回放器，以便观看手牌回放



