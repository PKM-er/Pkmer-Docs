---
uid: 20231128013051
title: Obsidian 插件：Links 各种链接形式的相互转换
tags: [链接处理, 转换工具]
description: 各种链接形式的相互转换
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231128013854
---

# Obsidian 插件：Links 各种链接形式的相互转换

> [!note] Links
> 插件 ID：links
> 插件作者：MiiKey
> 插件描述：操纵链接
> 插件版本：1.6.1
> 插件分类：['Links' ,' 右键转换链接 ']
> 插件源码地址：[Links](https://github.com/mii-key/obsidian-links)
> 插件文档地址：[Links](https://github.com/mii-key/obsidian-links)

## 插件设置

### 基本设置

![Links](https://cdn.pkmer.cn/images/Pasted%20image%2020231128012217.png!pkmer)

> Remove links form headings 用于转换没有文本的内部维基链接：
> ![Links](https://cdn.pkmer.cn/images/Pasted%20image%2020231128012839.png!pkmer)

### 鼠标右键命令

> 选中链接或者选中文本包含链接后鼠标右键下拉菜单会出现：

![Links](https://cdn.pkmer.cn/images/Pasted%20image%2020231128005016.png!pkmer)

### 鼠标右键按钮控制

![Links](https://cdn.pkmer.cn/images/Pasted%20image%2020231128012242.png!pkmer)

## 基本功能介绍

### 默认单个转换

- Unlinks：
	- 取消链接所选内容中的单个链接或所有链接，格式化为文本。
	- 可以单个或者批量操作
- Delete link：
	- 删除链接，包含 `[text](link)` 中的文本
- Convert markdown link to Wikilink：
	- 转换 md 链接为 ob 的 wikilink 链接形式
	- eg：`[text](link)` 转为 `[[text]]`
- Convert autolink to markdown link
	- 将 autolink 链接转换为 markdown 链接
	- 果自动链接具有以 http 或 https 为方案的绝对 URI，则将<title/>元素的内容设置为链接文本。如果请求失败或 URL 具有其他方案，则将光标放置在 Markdown 链接的 `[]` 中。对于电子邮件自动链接，将在电子邮件地址之前添加 mailto 方案。

### 转换多个链接功能

- Convert all Links to Markdown links
	- 将所有链接转换为 markdown 链接
- Convert Wikilinks to markdown links
	- 将 wiki 链接转换为 markdown 链接
- Convert Autolinks to markdown links
	- 将自动链接转换为 Markdown 链接
- Convert URLs to markdown links
	- 将 URL 转换为 Markdown 链接
- Convert HTML links to markdown links
	- 将 HTML 链接转换为 markdown 链接

## 文本编辑

- Edit link text
	- 编辑链接文本
- Edit link destination
	- 编辑链接目标

## 创建连接

- Create link from selection
	- 从所选内容创建链接
	- eg：选中文本 `text` 转为 `[[光标|text]]`，光标位于链接中。
- Create link from clipboard
	- 从剪贴板创建链接，通过获取剪切板的链接获取标题来组成链接。

## 嵌入样式转换

- Embed files
	- 嵌入嵌入文件
	- eg：`[[文件笔记.md]]` 转为 `![[文件笔记.md]]`
- Unembed files
	- 取消嵌入文件
	- eg：`![[文件笔记.md]]` 转为 `[[文件笔记.md]]`
