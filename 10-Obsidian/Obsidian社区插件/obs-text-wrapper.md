---
uid: 20230513222803
title: Obsidian 插件：Text Wrapper 给选中文本加上 HTML 标签
tags: [Obsidian, 插件, 标签]
description: Obsidian 插件：Text Wrapper 给选中文本加上 HTML 标签
author: Bon
type: other
draft: false
editable: false
modified: 20230831160801
---

# Obsidian 插件：Text Wrapper 给选中文本加上 HTML 标签

## 概述

在 Obsidian 中，可以使用 HTML 标签来框住文本后，使用 CSS 对这些文本进行颜色、字体等的调整，而我们如果每次都需要手动一个个添加上去，这显然不够 Ober，而这个插件就是为了解决这个需求而存在的。

> [!Note] 插件名片
> - 插件名称：Text Wrapper
> - 插件作者：smx0
> - 插件说明：给选中文本加上 HTML 标签。
> - 插件项目地址：[点我跳转](https://github.com/smx0/obs-text-wrapper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obs-text-wrapper)

## 效果&特性

该插件允许用户在编辑器中快速使用可自定义的 HTML 标签包装所选文本。最多可以在设置中配置三个标签，并绑定到热键。您还可以使用从命令面板访问的模态框输入新标签。如果没有选择文本，则标签将相邻设置。该插件对于那些经常使用较少知名 HTML 标签（如 `<dd>`，`<dt>` 和 `<dl>`）的人特别有用。

- 选中文本后能通过快捷键来快速添加 HTML 标签，例如 `<div></div>` 或者一些很少见的 `<dt></dt>`

## 使用

- 开启后需要到设置页，加上 TagName，也就是上述的 div 、dt 之类的；
- 设置好后，可以到快捷键页面中给对应的 TagName 加上快捷键；

> [!tip]
> 这个插件只能添加三个快捷键，所以建议用 [[obsidian-wrap-with-shortcuts]]
