---
uid: 2024052908594902
title: Obsidian 插件：Cardify
tags: ['模板与链接处理', '文件管理', '白板', 'obsidian插件']
description: 为markdown文件中的块创建链接，并为文件夹中的每个链接生成markdown文件。实现将卡片拖放到画布上的功能。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cardify

> [!Note] 插件名片
> - 插件名称：Cardify
> - 插件作者：joshuakto
> - 插件说明：为 markdown 文件中的块创建链接，并为文件夹中的每个链接生成 markdown 文件。实现将卡片拖放到画布上的功能。
> - 插件分类：[' 模板与链接处理 ', ' 文件管理 ', ' 白板 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/joshuakto/obsidian-cardify)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cardify)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshuakto/obsidian-cardify/master/README.md)

## 概述

Obsidian Cardify 插件可以为 Markdown 文件中的块创建链接，并为文件夹中的每个链接生成 Markdown 文件。同时，它还支持将卡片拖放到画布上。

该插件的基本功能包括：

- 选择分隔符（目前仅支持两个换行或 ---）。
- 检测内容中是否存在内部链接，如果不存在则自动分配链接。
- 为每个分隔的内容创建一个 Markdown 文件（保留前置数据）。
  - 根据分隔内容的位置为创建的页面提供索引。
  - 从内容中提取注释作为创建页面的标题。
- 创建一个用于存储生成的 Markdown 文件的文件夹。
- 生成并插入一个内部链接来替换当前选择。

计划中的功能包括：

- 切换功能以自动分配内部链接。
- 按优先级排列的正则表达式列表，用作创建的 Markdown 文件的标题。
- 允许用户在弹出模态窗口中查看插件的使用说明。
- 允许用户查看从活动文件生成的卡片的预览。

使用方法：

1. 安装插件后，在工具栏上会出现一个重叠的方块图标。
2. 转到要使用 Cardify 的 Markdown 文件。
3. 单击重叠的方块图标，将生成一个与活动文件同名的文件夹，并将创建的 Markdown 文件存储在其中。

注意：目前插件在插入内部链接时会更改 Markdown 文件的内容。如果文档的间距很重要，请暂时不要使用该插件。将来将提供选择是否修改现有文件内容的选项。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



