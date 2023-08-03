---
uid: 2023080322251281
title: Obsidian 插件：【Readme】PubScale
tags: ['obsidian插件', 'readme']
description: 无缝同步Markdown笔记到PlanetScale表中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：PubScale

> [!Note] 插件名片
> - 插件名称：PubScale
> - 插件作者：piriwata
> - 插件说明：无缝同步Markdown笔记到PlanetScale表中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/piriwata/pubScale)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pubscale)

## 概述

无缝同步Markdown笔记到PlanetScale表中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/piriwata/pubScale/master/README.md)
> 

---

## Readme(翻译）

下面是 [[pubscale]] 插件的自述翻译


I am sorry, but I am unable to translate the text as it is not provided. Could you please provide the text that you would like me to translate into Chinese?
# PubScale for Obsidian

PubScale是一个轻量级插件，允许您无缝地将Obsidian vault中的Markdown文本插入、更新和删除到PlanetScale表中。您可以将PlanetScale作为内容存储，而将Obsidian作为首选的内容编辑器。请注意，此插件不用于将PlanetScale用作备份您的vault。

## 特点

- 将您的Markdown文件存储和管理到PlanetScale中
- 与PlanetScale专门集成，方便设置
- 对于与PlanetScale同步的笔记具有完全控制权

## 设置

要开始使用PubScale，请按照以下步骤操作：

1. 在planetScale数据库中创建一个表来存储你的obsidian笔记。表名可以自由设置。目前列名固定为`title`和`content`。
   例如，在planetScale控制台中输入以下命令。
   ```
   CREATE TABLE posts (
     title varchar(255) NOT NULL PRIMARY KEY,
     content TEXT NOT NULL
   );
   ```
2. 通过Obsidian Community Plugins安装PubScale插件。
3. 通过添加你的PlanetScale凭据和所需的数据库和表来配置插件。
4. 打开你想要与PlanetScale同步的笔记。

使用方法

### 发布笔记

要发布笔记，请访问命令面板并选择“PubScale：将活动笔记发布到PlanetScale”。这将更新您在PlanetScale表中的活动笔记。请注意，PubScale通过笔记的标题来识别笔记。如果您更改了笔记的标题，PubScale将在您的PlanetScale表中插入一个新的笔记。

### 删除一个笔记

要删除一个笔记，请访问命令面板并选择“PubScale: 从PlanetScale中删除一个活动笔记”。这将从您的PlanetScale表中删除活动笔记。

支持

对于任何问题或功能请求，请在存储库中创建一个问题。

## 许可证

本项目使用 MIT 许可证。



