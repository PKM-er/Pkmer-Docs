---
uid: 2023080322245615
title: Obsidian 插件：【Readme】Pocketbook Cloud Highlight Importer
tags: ['obsidian插件', 'readme']
description: 将您的Pocketbook Cloud帐户中的笔记和高亮导入到您的保险库中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pocketbook Cloud Highlight Importer

> [!Note] 插件名片
> - 插件名称：Pocketbook Cloud Highlight Importer
> - 插件作者：Lena Brüder
> - 插件说明：将您的Pocketbook Cloud帐户中的笔记和高亮导入到您的保险库中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lenalebt/obsidian-pocketbook-cloud-highlight-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pocketbook-cloud-highlight-importer)

## 概述

将您的Pocketbook Cloud帐户中的笔记和高亮导入到您的保险库中。

![Pocketbook Cloud Highlight Importer](https://cdn.pkmer.cn/covers/pocketbook-cloud-highlight-importer.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lenalebt/obsidian-pocketbook-cloud-highlight-importer/main/README.md)
> 

---

## Readme(翻译）

下面是 [[pocketbook-cloud-highlight-importer]] 插件的自述翻译


这是一个为Obsidian（https://obsidian.md）设计的插件，用于导入您在[Pocketbook E-Ink阅读器](https://pocketbook.de/)上或在手机上的[Pocketbook应用程序](https://play.google.com/store/apps/details?id=com.obreey.reader&hl=de&gl=US)上创建的高亮，使用[Pocketbook Cloud](https://cloud.pocketbook.digital)账户。

需要“dataview”插件才能正常工作-并且不检查是否已安装；-）。仅适用于“使用密码登录”。

它将：

- 从您的Pocketbook账户中读取所有的高亮内容
- 将它们转储为带有yaml前置内容的小型markdown文件
- 创建dataview查询以将所有评论一起获取

## 设置

安装完成后，进入设置页面：

![设置页面](docs/settings-page.png)

您需要填写您的用户名。之后，点击“登录”开始登录过程。
这将要求您输入密码，但密码不会被保存（但会保存刷新令牌）。

如果您在Pocketbook账户下有多个商店，您可以填写您想要使用的“商店名称”（名称的子字符串即可）。
“导入文件夹”是您的亮点将保存到的位置。

使用方法

设置完成后，您可以在命令面板中找到PocketBook云端高亮导入。

## 许可证

它是AGPL-3.0许可的，因为使用的库“epub-cfi-resolver”是AGPL-3.0许可的。否则，我会选择ISC许可。



