---
uid: 20230729002915
title: Obsidian 插件：Style Text 简易的自定义文字大小颜色演示
tags: [Obsidian, 插件, 自定义, 文字样式]
description: Obsidian 插件：Style Text 简易的自定义文字大小颜色演示。它支持你自定义正文笔记的文字样式，并且通过简单的圈选，右键选择样式即可完成调整。
author: OS
type: basic
draft: false
editable: false
modified: 20230729010915
---

# Obsidian 插件：Style Text 简易的自定义文字大小颜色演示

## 概述

很多初次或者入门 Obsidian 的同学都会问到一个问题，我能自定义文本的大小，文字颜色这些嘛。不得不说很多可视化文字处理软件都有类似的功能，这导致我们长期习惯了这些标配。

虽然有些违反 markdown 的初衷，和记录优先的思路。但是 Style Text 确实可以实现很多人的想法。它支持你自定义正文笔记的文字样式，并且通过简单的圈选，右键选择样式即可完成调整。

> [!Note] 插件名片
> - 插件名称：Style Text
> - 插件版本：0.1.0
> - 插件作者：Juanjo Arranz
> - 插件描述：自定义 CSS 样式应用于笔记中的选定文本
> - 插件项目地址：[点我跳转](https://github.com/juanjoarranz/style-text-obsidian-plugin)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230729004357.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230729004626.png!pkmer)

- 支持自定文字样式，包括字色，背景色，大小等
- 支持命令面板和右键菜单两个模式应用自定义样式
- 提供快速移除样式的右键菜单

## 使用

- 安装后打开插件开关即可使用
- 使用方法
	- 增加样式
		- 直接全选文字后，右键，可以在菜单中看到开启的样式
		- 通过命令面板，输入 style text 看到筛选的命令结果
		- 通过设定快捷键，进行使用，可以根据你设定的样式，来逐一设定样式
	- 移除样式
		- 提供了一个“Remove Style”命令来删除不需要的样式。您只需要选择段落或文本，或者将光标放在样式文本前面，然后从右键菜单中选择命令

![image.png](https://cdn.pkmer.cn/images/20230729005918.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230729005828.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230729005648.png!pkmer)

这些样式也可以在编辑器的上下文菜单中使用。首先需要在插件设置中启用它们。

![image.png](https://cdn.pkmer.cn/images/20230729005805.png!pkmer)

### 样式设定

- 插件已经默认了几种样式，这些样式是为大家了解不同样式的声明语法样式
![image.png](https://cdn.pkmer.cn/images/20230729005019.png!pkmer)

- 也支持你学会了这些语法定义个时候，自己再新增或者修改
- 通过上下箭头的按钮，可以调整这些样式在右键菜单中的位置

![image.png](https://cdn.pkmer.cn/images/20230729010027.png!pkmer)
