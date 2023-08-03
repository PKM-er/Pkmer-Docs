---
uid: 20230803204520
title: Obsidian 插件：【Readme】Page Heading From Links
tags: ['模板', 'obsidian插件', 'readme']
description: 在空白页中插入文件名作为标题
author: Mark Beattie
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Page Heading From Links

> [!Note] 插件名片
> - 插件名称：Page Heading From Links
> - 插件作者：Mark Beattie
> - 插件说明：在空白页中插入文件名作为标题
> - 插件分类：['模板', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/beet/page-headings-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?page-heading-from-links)

## 概述

在空白页中插入文件名作为标题



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/beet/page-headings-obsidian-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[page-heading-from-links]] 插件的自述翻译


# 页面标题 Obsidian 插件

Obsidian 插件，用于从文件名中填充页面标题。

启用后，每当打开一个空白文件时，无论是通过从 wiki 链接刚刚创建它还是打开一个已存在的空白文件，都会在页面中插入一个由文件名构成的 Markdown 标题（有关详细信息，请参见下文）。

如果您以类似于 Zettelkasten 的方式构建笔记，或者喜欢在父页面中插入 wiki 链接，然后点击它们以创建子页面，并且您喜欢遵循页面标题与文件名匹配的约定（类似于 NotePlan），那么这个插件将为您处理这些事情。

从文件名到页面标题

页面标题由文件名和以下转换给出：

* 后缀（通常为`.md`）被移除。
* 下划线 `_` 被替换为一个空格 `' '`。
* 第一个单词首字母大写。

例如，`this_is_my_filename.md` 创建标题 `This is my filename`。

## 待办事项

- [ ] 暴露一个热键/命令，用于在没有标题的现有笔记中插入标题？



