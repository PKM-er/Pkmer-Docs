---
uid: 2024042221415639
title: Obsidian 插件：【Readme】Bitcoin Block Stamp
tags: ['obsidian插件', 'readme']
description: Stamp your notes with the current Bitcoin block.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Bitcoin Block Stamp

> [!Note] 插件名片
> - 插件名称：Bitcoin Block Stamp
> - 插件作者：sefiro
> - 插件说明：Stamp your notes with the current Bitcoin block.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bitcoin-block-stamp)

## 概述

Stamp your notes with the current Bitcoin block.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sfr0xyz/obsidian-bitcoin-block-stamp/master/README.md)

---

## Readme(翻译）

下面是 [[bitcoin-block-stamp]] 插件的自述翻译

# 比特币区块戳记为黑曜石

![版本](https://img.shields.io/github/manifest-json/v/sfr0xyz/obsidian-bitcoin-block-stamp?style=flat-square) ![许可证](https://img.shields.io/github/license/sfr0xyz/obsidian-bitcoin-block-stamp?style=flat-square)

用比特币区块高度和莫斯科时间戳记您的笔记。您可以添加当前时间戳或过去任何时间的时间戳，直到创世区块。

<div align="center">
  <img src="./docs/bbs-demo.png" alt="BBS Demo" width="90%">
</div>

## 特点

- 插入当前或历史 _区块高度_。
- 插入当前或历史 [_莫斯科时间_](https://thebitcoinmanual.com/btc-culture/glossary/moscow-time/)。
- 插入当前或历史 _莫斯科时间 @ 区块高度_，[莫斯科时间机器人](https://njump.me/npub1030jfcwftah37a242jv0qqvmuyje5ew8tt59rs3477c4e8ugurhqzdwcta) 格式。
- 为区块高度添加您喜欢的区块浏览器链接。

## 用法

安装并启用插件后，您应该在侧边栏中看到一个比特币图标。

- 该图标打开一个窗口，让您为任何历史时刻或当前时刻添加时间戳。确保您处于编辑模式，以便能够插入时间戳。
  - 输入您希望最接近的区块高度或莫斯科时间的日期和时间。
  - 选择时间戳类型。
  - 选择**插入**以在当前光标位置插入时间戳。
- 同样，您也可以通过命令视图 `Ctrl + P` 打开此窗口。搜索“比特币区块时间戳：插入历史区块时间戳”。
- 在命令视图 `Ctrl + P` 中，您还可以快速添加当前的 _ 区块高度 _ / _莫斯科时间_ / _莫斯科时间 @ 区块高度_。搜索“比特币区块时间戳”。

## 设置

- **区块浏览器**：您可以选择您喜欢的区块浏览器。区块高度戳将被插入为 Markdown 链接到所选区块浏览器中的相应区块。
第三方来源

该插件使用 [mempool.space REST API](https://mempool.space/docs/api/rest) 来获取比特币区块链数据和比特币价格数据。

## 安装

### 在 Obsidian 中

转到 `设置 > 社区插件 > “浏览”社区插件`，并搜索“Bitcoin Block Stamp”。

选择**安装**，安装成功后选择**启用**。

现在您应该在设置视图中的“社区插件”下看到“Bitcoin Block Stamp”。

手动

从 [最新发布](https://github.com/sfr0xyz/obsidian-bitcoin-block-stamp/releases/latest) 下载发布文件。

转到您的保险库文件夹中的插件部分 `VaultFolder/.obsidian/plugins/`。

创建一个名为“bitcoin-block-stamp”的新文件夹，并将下载的 `main.js`、`styles.css` 和 `manifest.json` 文件复制粘贴到其中。

现在您的保险库中应该有文件 `main.js`、`styles.css` 和 `manifest.json`，位于 `VaultFolder/.obsidian/plugins/bitcoin-block-stamp/`。

转到您的 Obsidian 保险库，并通过在 `设置 > 社区插件 > 已安装插件` 下切换“Bitcoin Block Stamp”来启用插件。

## 支持我

如果你喜欢这个插件并想支持我，你可以通过比特币闪电网络向我发送一些 sats。访问我的 [Alby页面](https://getalby.com/p/sefiro)。

闪电地址：

```txtNote: 要允许特定的HTML元素，请使用allowed_elements参数。
sefiro@getalby.com
```

感谢您的支持，谢谢！

---

<div align="center">
在nostr上找到我
</div>



