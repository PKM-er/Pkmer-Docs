---
uid: 2023102611072561
title: Obsidian 插件：【Readme】Birthday-Tracker
tags: ['obsidian插件', 'readme']
description: 跟踪您家人和朋友的所有生日。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Birthday-Tracker

> [!Note] 插件名片
> - 插件名称：Birthday-Tracker
> - 插件作者：Marius Wörfel
> - 插件说明：跟踪您家人和朋友的所有生日。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Raboro/Obsidian-Birthday-Tracker-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?birthday-tracker)

## 概述

跟踪您家人和朋友的所有生日。

![Birthday-Tracker](https://cdn.pkmer.cn/covers/birthday-tracker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Raboro/Obsidian-Birthday-Tracker-Plugin/master/README.md)

---

## Readme(翻译）

下面是 [[birthday-tracker]] 插件的自述翻译

# Obsidian 生日追踪插件

该插件允许您追踪您家人和朋友的所有生日。

![演示图片](assets/demoPlugin.png)

使用方法

您需要一个包含所有生日数据的文件。

要找到此文件，您需要在设置中添加位置。之后，您可以使用以下方式添加您的人员信息：

``name=<人员姓名>; birthday=<他们的出生日期>`` \

例如：``name=彼得·鲁道夫; birthday=17/08/2033``。

您需要逐行添加所有这些人员信息：

```
name=彼得·鲁道夫; birthday=17/08/2033
name=汉斯·阿普; birthday=01/05/2004
name=马茨·马蒂斯; birthday=21/03/1999
```

之后，您可以点击功能区图标或使用命令来触发插件。 \

您将收到所有今天过生日的人员的通知，并在单独的视图中获得按照下一个生日排序的所有人员的概览。

## 设置

您可以设置日期格式。默认为：``DD/MM/YYYY``。这是为了收集和显示日期。您还可以设置包含生日数据的文件的位置。文件名必须以 `.md` 作为后缀。默认值为：`birthdayNode.md`

![演示设置](assets/demoSettings.png)
