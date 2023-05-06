---
uid: 20230506120039
title: Obsidian 插件：Paste URL into selection 快速给文字添加链接
description: 
author: 
type: other
draft: false
editable: false
modified: 20230506122211
---

# Obsidian 插件：Paste URL into selection 快速给文字添加链接

## 概述

书写笔记的时候，会遇到需要给文本增加链接的情况，需要按照一定的链接格式才能让链接格式生效，不熟悉的情况下，会降低书写效率。

Paste URL into selection 解决了快速给文字添加链接的问题，使用 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中。

> [!Note] 插件名片
> - 插件名称：Paste URL into selection
> - 插件作者：denolehov
> - 插件说明：使用常规 Ctrl/Cmd+V 将链接（URL）插入到选定的文本中。也可以反过来，通过命令面板/快捷键将文本插入到选定的链接（URL）中
> - [插件项目地址：[点我跳转](https://github.com/denolehov/obsidian-url-into-selection)
> - 插件兼容：Obsidian v0.9.8 及以上版本。

## 效果&特性

![98997874-ed55fb80-253d-11eb-9121-709a316a4d1e.gif](https://cdn.pkmer.cn/images/98997874-ed55fb80-253d-11eb-9121-709a316a4d1e.gif)

## 使用

- 为文本添加链接
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
