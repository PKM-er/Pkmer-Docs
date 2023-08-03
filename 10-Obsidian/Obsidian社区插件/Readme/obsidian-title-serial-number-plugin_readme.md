---
uid: 20230803213344
title: Obsidian 插件：【Readme】Title Serial Number Plugin
tags: ['obsidian插件', 'readme']
description: 该插件为您的Markdown标题添加序列号。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Title Serial Number Plugin

> [!Note] 插件名片
> - 插件名称：Title Serial Number Plugin
> - 插件作者：Domenic
> - 插件说明：该插件为您的Markdown标题添加序列号。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/yalvhe2009/obsidian-title-serial-number-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-title-serial-number-plugin)

## 概述

该插件为您的Markdown标题添加序列号。

![Title Serial Number Plugin](https://cdn.pkmer.cn/covers/obsidian-title-serial-number-plugin.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yalvhe2009/obsidian-title-serial-number-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-title-serial-number-plugin]] 插件的自述翻译



# Obsidian标题序列号插件

该插件为您的Markdown标题添加了序列号。

![快速开始](https://raw.githubusercontent.com/yalvhe2009/obsidian-title-serial-number-plugin/master/assets/quick-start.gif)

现在，该插件仅提供两个命令及其图形界面进行配置！

- 命令：
  - `为标题设置序列号`
  - `清除标题的序列号`
- 配置界面：

![配置界面](https://raw.githubusercontent.com/yalvhe2009/obsidian-title-serial-number-plugin/master/assets/configuration-interface-v0_0_2.png)

关于配置

在版本v0.0.2中，我们改变了配置模式。您可以激活任何您想要的标题，而您文章中未激活的其他标题将不会生成序列号。

例如，我激活了H2和H4。

## 你好

#### 世界

#### 有

## A

好的

#### Day
```

当我在上面的文章中执行命令`Set Serial Number For Title`时，我得到了这个结果：

1 你好

1.1 世界

1.2 有

2 A

2.1 好的

2.2 天



