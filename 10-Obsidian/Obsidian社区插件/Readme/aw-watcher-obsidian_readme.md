---
uid: 20230803211907
title: Obsidian 插件：【Readme】ActivityWatch
tags: ['obsidian插件', 'readme']
description: 这是一个插件，用于在ActivityWatch和Obsidian之间建立兼容性桥梁，以允许详细跟踪在Obsidian中花费的时间。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ActivityWatch

> [!Note] 插件名片
> - 插件名称：ActivityWatch
> - 插件作者：Grimmauld
> - 插件说明：这是一个插件，用于在ActivityWatch和Obsidian之间建立兼容性桥梁，以允许详细跟踪在Obsidian中花费的时间。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/LordGrimmauld/aw-watcher-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?aw-watcher-obsidian)

## 概述

这是一个插件，用于在ActivityWatch和Obsidian之间建立兼容性桥梁，以允许详细跟踪在Obsidian中花费的时间。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LordGrimmauld/aw-watcher-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[aw-watcher-obsidian]] 插件的自述翻译



# ActivityWatch和Obsidian的兼容性
[ActivityWatch](https://activitywatch.net/)是一个开源的时间跟踪器，能够追踪使用哪个程序花费了多少时间。为了获得详细信息，ActivityWatch允许添加*Watchers*，能够将相关信息发送到ActivityWatch API。

如何使用它？
aw-watcher-obsidian是一个ActivityWatch观察者，用于监视Obsidian vaults中的用户活动，并且插件处于活动状态。该观察者目前跟踪vault的名称以及当前活动的markdown文件的名称。然后，在ActivityWatch的评估屏幕中的时间线和活动视图将能够告诉用户他们在哪个文件上花费了多少时间。
要安装，请从Obsidian的社区插件列表中获取（在撰写本文时，该插件尚未获得批准），或者将main.js和package.json文件放置在`vaultName/.obsidian/plugins/aw-watcher-obsidian`文件夹下。

我的数据去哪了？
该插件收集的数据被发送到运行在本地主机上的ActivityWatch服务器，这意味着数据一开始并不离开您的本地机器。ActivityWatch允许在多个设备之间共享数据，但该插件本身不具备此功能。

## 鸣谢
为了构建此项目中使用的观察者API，我紧密遵循了官方API的指导，网址为https://github.com/ActivityWatch/aw-client-js。



