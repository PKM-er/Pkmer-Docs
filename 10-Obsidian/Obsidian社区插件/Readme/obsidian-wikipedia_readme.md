---
uid: 20230817224055
title: Obsidian 插件：Wikipedia
tags: ['obsidian插件', 'readme']
description: 从维基百科获取第一节的标题作为笔记的标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Wikipedia

> [!Note] 插件名片
> - 插件名称：Wikipedia
> - 插件作者：Jonathan Miller
> - 插件说明：从维基百科获取第一节的标题作为笔记的标题。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jmilldotdev/obsidian-wikipedia)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-wikipedia)

## 概述

从维基百科获取第一节的标题作为笔记的标题。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jmilldotdev/obsidian-wikipedia/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-wikipedia]] 插件的自述翻译

# Obsidian Wikipedia

这是一个为 Obsidian（<<https://obsidian.md>）开发的插件。>

该插件获取维基百科的第一节内容，并将其粘贴到您的活动笔记中。

## 用法

该插件有两个命令：

- `获取活动笔记的维基百科`，使用活动笔记的标题作为搜索词获取维基百科的第一节内容。
- `获取搜索词的维基百科`，获取搜索词的维基百科的第一节内容。

## 设置

此插件的设置包括：

- **语言前缀**：访问所需的维基百科语言之前的前缀。 （默认值：'en'）
- **提取模板**：用于粘贴提取内容的模板。可用变量为{{text}}、{{searchTerm}}和{{url}}
- **搜索词加粗？**：如果设置为 True，则在提取内容中加粗第一个搜索词的实例
- **使用段落模板？**：如果设置为 true，则会为主模板中的{{text}}的每个段落插入段落模板。
- **段落模板**：如果*使用段落模板*设置为 true，则会为提取内容中的每个段落插入此模板。可用变量：{{paragraphText}}。



