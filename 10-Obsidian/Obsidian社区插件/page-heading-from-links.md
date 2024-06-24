---
uid: 2024052909065499
title: Obsidian 插件：Page Heading From Links
tags: ['编辑工具', '文件管理', '标签', 'obsidian插件']
description: 在空白页中插入文件名作为标题
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Page Heading From Links

> [!Note] 插件名片
> - 插件名称：Page Heading From Links
> - 插件作者：Mark Beattie
> - 插件说明：在空白页中插入文件名作为标题
> - 插件分类：[' 编辑工具 ', ' 文件管理 ', ' 标签 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/beet/page-headings-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?page-heading-from-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/beet/page-headings-obsidian-plugin/main/README.md)

## 概述

Page Headings Obsidian 插件可以在空白页面中根据文件名插入标题。当启用该插件后，每当打开一个空白文件时，无论是通过从 wiki 链接创建还是打开已存在的空白文件，都会在页面中插入一个由文件名构建的 Markdown 标题（详情见下文）。如果您习惯使用 Zettelkasten 类似的方式建立笔记，或者喜欢在父页面中插入 wiki 链接然后点击它们创建子页面，并且希望页面标题与文件名匹配（类似于 NotePlan），那么这个插件将为您解决这个问题。

从文件名到页面标题的转换规则如下：

- 删除后缀（通常为 `.md`）。
- 下划线 `_` 替换为空格 `' '`。
- 第一个单词首字母大写。

例如，`this_is_my_filename.md` 的标题将会是 `This is my filename`。

待办事项：

- [ ] 提供一个快捷键/命令，用于在没有标题的现有笔记中插入标题？

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



