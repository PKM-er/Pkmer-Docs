---
uid: 20230803212616
title: Obsidian 插件：【Readme】IVRE
tags: ['obsidian插件', 'readme']
description: IVRE集成到Obsidian：从IVRE抓取数据并将其带入Obsidian笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：IVRE

> [!Note] 插件名片
> - 插件名称：IVRE
> - 插件作者：The IVRE contributors
> - 插件说明：IVRE集成到Obsidian：从IVRE抓取数据并将其带入Obsidian笔记中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ivre/obsidian-ivre-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-ivre-plugin)

## 概述

IVRE集成到Obsidian：从IVRE抓取数据并将其带入Obsidian笔记中。

![IVRE](https://cdn.pkmer.cn/covers/obsidian-ivre-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivre/obsidian-ivre-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-ivre-plugin]] 插件的自述翻译



[![加入 Gitter 聊天](https://badges.gitter.im/ivre/ivre.svg)](https://gitter.im/ivre/ivre)
[![在 Twitter 上关注](https://img.shields.io/twitter/follow/IvreRocks.svg?logo=twitter)](https://twitter.com/IvreRocks)
[![在 Mastodon 上关注](https://img.shields.io/mastodon/follow/109349639355238149?domain=https%3A%2F%2Finfosec.exchange&style=social)](https://infosec.exchange/@ivre)
[![GitHub 星标](https://img.shields.io/github/stars/ivre/obsidian-ivre-plugin?style=social)](https://github.com/ivre/obsidian-ivre-plugin)
[![Github 下载量](https://img.shields.io/github/downloads/ivre/obsidian-ivre-plugin/total.svg)](https://github.com/ivre/obsidian-ivre-plugin/releases/)
[![Linting 测试](https://github.com/ivre/obsidian-ivre-plugin/actions/workflows/linting.yml/badge.svg?branch=master)](https://github.com/ivre/obsidian-ivre-plugin/actions/workflows/linting.yml/?branch=master)
# Obsidian IVRE插件

这是一个用于[Obsidian](https://obsidian.md)的[IVRE](https://ivre.rocks)插件。它从IVRE中获取数据并将其带入Obsidian笔记中。它需要安装IVRE CLI。

它将IVRE的数据与Obsidian的组织结合起来，使得进行渗透测试或红队行动、事件响应、网络威胁情报等的笔记记录变得比以往更加容易。

只使用`ipdata`（Maxmind GeoIP，地址类型）和`view`。如果您有扫描结果或被动数据要使用，只需运行`ivre db2view`来创建或更新一个`view`。

# 了解更多

- 关于IVRE，请访问[ivre.rocks](https://ivre.rocks/)
- 关于Obsidian，请访问[obsidian.md](https://obsidian.md/)

# 用法

安装并启用插件，然后选择一些包含IP地址、网络或主机名的文本，点击`martini`图标（或运行命令`ivre-analyze-selection`）。

您还可以为`ivre-analyze-selection`命令添加热键：进入"设置"，然后选择"热键"，通过输入"ivre"进行筛选，找到"IVRE: 使用IVRE分析选择"，点击"(+)"按钮选择您的热键（我使用"Ctrl + Shift + I"）。

# 开发

运行以下命令，开始编码！
```sh
$ ln -s `pwd` "/path/to/your/Obsidian Vault/.obsidian/plugins/obsidian-ivre-plugin"
$ npm run dev
```

# 截图 #

![使用情况](doc/screenshots/usage.png)
![图表 `thunderbird.com`](doc/screenshots/graph_thunderbird.png)
![域名 `1password.com`](doc/screenshots/domain_1password.png)
![被 `1password.com` 使用的地址](doc/screenshots/address_1password.png)
![设置](doc/screenshots/settings.png)



