---
uid: 2023102611073661
title: Obsidian 插件：【Readme】Contentful Publisher
tags: ['obsidian插件', 'readme']
description: 从Obsidian管理您的Contentful内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Contentful Publisher

> [!Note] 插件名片
> - 插件名称：Contentful Publisher
> - 插件作者：Ziya Fenn
> - 插件说明：从Obsidian管理您的Contentful内容。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ziyafenn/obsidian-contentful-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contentful-publisher)

## 概述

从Obsidian管理您的Contentful内容。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ziyafenn/obsidian-contentful-publisher/main/README.md)
> 

---

## Readme(翻译）

下面是 [[contentful-publisher]] 插件的自述翻译


# Contentful发布者

Contentful是一个无头CMS，可以让您创建并将内容传递到任何平台。

该插件可以从Contentful中提取内容类型，并基于它们创建Obsidian模板。它还可以从Contentful中提取所有内容条目，并基于它们创建笔记，根据内容类型将它们组织到文件夹中。

您还可以从Obsidian更新内容并将其推送回Contentful。如果插件检测到内容不同步（它将检查内容是否在Contentful上更新），它将警告您并创建内容的副本。

除了标题和正文之外，所有内容字段都将作为frontmatter参数添加。目前，该插件将忽略以下字段：_RichText_，_ResourceLink_，_Link_，_Object_和_Location_。
## 如何使用

1. 从**设置 -> Contentful Publisher**中设置插件
2. 使用侧边栏中的“与Contentful同步”操作来拉取您的内容
3. 在编辑完一个笔记后，从命令面板(ctrl+p)中选择“更新Contentful条目”来更新Obsidian中的Contentful条目
## 要求

-   必须启用并配置 Obsidian 核心模板插件
-   应禁用 _Wikilinks_，从 **设置 -> 文件和链接** 中使用默认的 Markdown 链接
-   在 Contentful 中创建内容模型
-   每个内容模型必须有一个字段表示内容的条目标题
-   内容类型模型应该至少有一个表示条目正文的文本字段
## 计划功能

-   [ ] 从Obsidian创建内容
-   [ ] 从Obsidian上传图片
-   [ ] 支持多种语言环境



