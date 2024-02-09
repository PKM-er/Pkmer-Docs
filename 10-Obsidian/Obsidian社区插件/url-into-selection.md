---
uid: 20230506165010
title: Obsidian 插件：Paste URL into selection 快速给文字添加链接
tags: [Obsidian, 插件, 链接]
description: Obsidian 插件：Paste URL into selection 快速给文字添加链接
author: OS
type: other
draft: false
editable: false
modified: 20230907161808
---

# Obsidian 插件：Paste URL into selection 快速给文字添加链接

## 概述

书写笔记的时候，会遇到需要给文本增加链接的情况，需要按照一定的链接格式才能让链接格式生效，不熟悉的情况下，会降低书写效率。

Paste URL into selection 解决了快速给文字添加链接的问题，使用 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中。

> [!Note] 插件名片
> - 插件名称：Paste URL into selection
> - 插件作者：denolehov
> - 插件说明：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
> - 插件分类：[' 链接处理 ', ' 效率 ', ' 编辑工具 ', 'obsidian 插件 ']
> - [插件项目地址：[点我跳转](https://github.com/denolehov/obsidian-url-into-selection)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?url-into-selection)
> - 插件兼容：Obsidian v0.9.8 及以上版本。

## 效果&特性

![Obsidian 插件：Paste URL into selection 快速给文字添加链接|cover](https://cdn.pkmer.cn/images/98997874-ed55fb80-253d-11eb-9121-709a316a4d1e.gif!pkmer)

## 使用

- 为选中的文本添加链接
	- 选中文本后，使用 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。

>[!Tip] 提示
>- 需要你的剪贴板中包含常规的链接格式
>	- <www.baidu.com>
>	- <http://www.baidu.com>

- 如果剪贴板中没有符合格式的链接，那么默认使用跟常规粘贴操作一样，粘贴剪贴板中的文本到选中位置。
- 如果剪贴板中有符合格式的链接，但没有选择任何文字。可以在插件中设置此情况触发的动作。在插件设置中找到 `Behavior on pasting URL when nothing is selected`
	- 默认：Do nothing，如果没有链接，直接使用常规粘贴操作。
	- Auto Select：自动选择相近字符组合成链接粘贴链接标题
	- `[](url)`：将链接变为对应格式；
	- `<url>`：将链接变为对应格式；

### 兼容性

自定义插件仅适用于 Obsidian v0.9.8+。

> [!Tip] 推荐阅读
> - [[supercharged-links-obsidian]]：可帮助您根据笔记元数据（例如标签或 YAML 前言属性）设置保管库中链接的样式。可以自动向链接添加颜色、表情符号或其他样式，使其更醒目的进行导航。
> - [[obsidian-auto-link-title]]：自动在粘贴时，提取网页链接标题，创建一个 Markdown 链接形式与正确的标题
> - [[external-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[link-favicon]]：可以在不使用任何自定义 CSS 的情况下看到链接对应的网站图标
> - [[obsidian-rich-links]]：为你笔记中的链接，增加美化样式
> - [[obsidian-link-embed]]：帮你将网页 URL 转换为嵌入预览卡片样式
> - [[auto-card-link]]：根据你设定的规则动态高亮显示文本