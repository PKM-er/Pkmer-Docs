---
uid: 2023120719424243
title: Obsidian 插件：【Readme】short tab name
tags: ['obsidian插件', 'readme']
description: 将选项卡名称设置为uid用户的简称
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】short tab name

> [!Note] 插件名片
> - 插件名称：short tab name
> - 插件作者：Shumpei Tanaka
> - 插件说明：将选项卡名称设置为 uid 用户的简称
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/shumpei-tanaka/obsidian-short-tab-name)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?short-tab-name)

## 概述

将选项卡名称设置为 uid 用户的简称

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Shumpei-Tanaka/obsidian-short-tab-name/main/README.md)
>

---

## Readme(翻译）

下面是 [[short-tab-name]] 插件的自述翻译

# 短标签名

![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/Shumpei-Tanaka/obsidian-short-tab-name?style=flat-squere&sort=semver)![GitHub许可证](https://img.shields.io/github/license/Shumpei-Tanaka/obsidian-short-tab-name?flat-squere)

[![Paypal](https://img.shields.io/badge/paypal.me-s6tanaka-white?style=flat-squere&logo=paypal)](https://paypal.me/s6tanaka)[![Buy me a coffee](https://img.shields.io/badge/buy_me_a_coffee-s6tanaka-white?style=flat-squere&logo=buymeacoffee&logocolor=#FFDD00)](https://www.buymeacoffee.com/s6tanaka)

该插件隐藏了标签名中的文件名头部，例如 zettel uid。

您可以使用正则表达式设置隐藏范围。

## 演示

### 图片

![before-image](https://cdn.pkmer.cn/covers/short-tab-name_2_0.png!pkmer)

![after-image](https://cdn.pkmer.cn/covers/short-tab-name_2_1.png!pkmer)

### 作为字符

|before|after|
|-|-|
|202311232124-a | a |
|202311232125-b | b |
|202311232126-c | c |

安装

### 使用 Obsidian

- 打开“设置”
- 打开“社区插件”
- 打开“浏览”
- 搜索“短标签名”
- 点击“安装”
- 点击“启用”
- 完成 :D

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/short-tab-name/` 中。
如何使用
只需安装此插件。

如果您的文件头不仅由数字组成，

您可以尝试在设置中创建正则表达式模式。

### 例子

|忽略头部正则表达式|样本文件名|结果标签名|
|-|-|-|
|(默认)`[0-9]+-`|2222-aaaa|aaaa|
|`[0-9]+_`|2222_aabb|aabb|
|`.+-`|5a5a-name|name|

## 许可证

源代码使用 MIT 许可证。

请参阅 LICENSE。

如果 Short-Tab-Name 使您的工作更加方便，

那么请给我买杯咖啡：D

链接如下。

[https://www.buymeacoffee.com/s6tanaka](https://www.buymeacoffee.com/s6tanaka)

[https://www.paypal.me/s6tanaka/](https://www.paypal.me/s6tanaka/)

<a href="https://www.paypal.me/s6tanaka/">
  <img alt="Support via PayPal" src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg" style="height: 60px !important;object-fit: cover;border-radius:10px;"/>
</a>



