---
uid: 2023080322295970
title: Obsidian 插件：【Readme】Zotero Link
tags: ['obsidian插件', 'readme']
description: 该插件方便在 Obsidian 中插入 Zotero Item 链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Zotero Link

> [!Note] 插件名片
> - 插件名称：Zotero Link
> - 插件作者：Shmavon Gazanchyan
> - 插件说明：该插件方便在 Obsidian 中插入 Zotero Item 链接
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vanakat/zotero-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zotero-link)

## 概述

该插件方便在 Obsidian 中插入 Zotero Item 链接



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vanakat/zotero-link/main/README.md)
> 

---

## Readme(翻译）

下面是 [[zotero-link]] 插件的自述翻译


# Zotero链接

## 先决条件

1. 在您的本地 Zotero 应用程序中安装 [ZotServer](https://github.com/MunGell/ZotServer) 插件
2. 在 Obsidian 中安装 [Zotero Bridge](https://github.com/vanakat/zotero-bridge) 插件

## 用法

安装此插件后，它会在命令面板中添加一个新的命令：`Zotero Link: Insert`。
链接的确切文本可以通过设置中的模板配置进行更改。

模板中可接受以下关键字：

* `{{ key }}` – Zotero项目键
* `{{ title }}` – 项目标题
* `{{ date.year }}` – 发表年份，例如2011
* `{{ date.month }}` – 发表月份，例如10
* `{{ date.day }}` – 发表日期，例如31
* `{{ firstAuthor.fullName }}` – 第一作者的全名
* `{{ firstAuthor.firstName }}` – 第一作者的名字
* `{{ firstAuthor.lastName }}` – 第一作者的姓氏
* `{% for author in authors %}{{ author.lastName }}, {{ author.firstName | first }}., {% endfor %}` – 模板的高级用法，用于输出所有作者

模板语言基于[Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters)，因此其语法和内置过滤器也可用。

此外，还有一个由Curtis McHale制作的插件的[视频评论和演示](https://www.youtube.com/watch?v=44vV7Tr484Q)。

## 许可证

MIT



