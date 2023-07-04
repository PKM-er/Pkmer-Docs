---
uid: 20230705001853
title: Obsidian 插件：Attachment Management 简单可行的附件管理
tags: [Obsidian, 插件, 附件管理, 自动化]
description: Obsidian 插件：Attachment Management 简单可行的附件管理
author: OS
type: basic
draft: false
editable: false
modified: 20230705003608
---

# Obsidian 插件：Attachment Management 简单可行的附件管理

## 概述

Obsidian 可以自动帮你管理重命名笔记中的附件，你可以通过插件提供的建议规则和设置，让每个笔记下面的笔记，变得有迹可循。

> [!Note] 插件名片
> - 插件名称：Attachment Management
> - 插件版本：0.6.1
> - 插件作者：trganda
> - 插件描述：可以基于一些建议规则，自动化归类你笔记中的附件内容
> - 插件项目地址：[点我跳转](https://github.com/trganda/obsidian-attachment-management)

## 特性&效果

- 将文件粘贴到 Markdown 或 Canvas 时自动命名附件
- 可以使用 `${notepath}`，`${notename}`，`${date}` 和 `${parent}` 设置附件位置
- 在重命名文章（Markdown 或 Canvas）文件时自动命名附件文件或文件夹
- 将文件放在 Markdown 或 Canvas 时自动命名附件

## 使用

- 必须选择一个文件夹来保存相关附件，当然这个附件的文件夹，可以保持和你的 Obsidian 设置一致，当然也可以你选择其他方式。
- 可喜的是，这个插件会在你修改笔记名称，修改路径的时候，也会自动变化归类附件的内容。
	- 无论是你修改笔记名称
	- 还是拖动笔记或者修改目录结构名称

![image.png](https://cdn.pkmer.cn/images/20230705002512.png!pkmer)

### 附件路径设置

附件可以存储在一个指定组合的目录结构下，你可以使用下面这些规则：

- `${notepath}`：仓库根下的 Markdown 或 Canvas 文件的目录。
- `${notename}`：Markdown 或 Canvas 文件的文件名（不包含文件扩展名）。
- `${parent}`：Markdown 或 Canvas 文件的父文件夹名称。

默认：会按照笔记或者白板的文件路径 + 具体路径名存储 `${notepath}/${notename}`.

### 附件名称格式设置

设置如何重命名附件，可用变量：

- `${notename}`：Markdown 或 Canvas 文件的文件名（不包含文件扩展名）。
- `${originalname}`：第一次创建附件文件的文件名。
- `${date}`：日期时间格式按时刻格式选项选项
- 默认值 `img-{date}`。