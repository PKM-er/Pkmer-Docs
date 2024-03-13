---
uid: 2024022117273920
title: Obsidian 插件：【Readme】Encoder/Decoder
tags: ['obsidian插件', 'readme']
description: None
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Encoder/Decoder

> [!Note] 插件名片
> - 插件名称：Encoder/Decoder
> - 插件作者：Rudi Häusler
> - 插件说明：None
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rudimuc/obsidian-coder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?coder)

## 概述

None

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rudimuc/obsidian-coder/master/README.md)

---

## Readme(翻译）

下面是 [[coder]] 插件的自述翻译

# 编码器/解码器黑曜石插件

这是一个用于 [Obsidian](https://obsidian.md) 的插件，用于编码/解码文本。

第一个版本仅支持文本到 base64 编码。

用于编码的库是 [base64-js](https://github.com/beatgammit/base64-js)。

## 安装步骤

### 从 Obsidian 内部

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式为**关闭**
- 点击浏览社区插件
- 搜索 " 编码/解码插件 "
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件
- 克隆这个存储库
- 按照官方 [Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin) 的说明在本地安装中部署它

## 用法

键入 `transform-text-base64` 关键字来使用该插件。

````markdown
```transform-text-base64
this is a text to encode
```
````

结果将会是这样的：

dGhpcyBpcyBhIHRleHQgdG8gZW5jb2Rl

## 版本历史

### 1.0.0

- 将文本转换为 base64 的第一个版本



