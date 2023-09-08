---
uid: 20230710164535
title: Obsidian 插件：Open with 使用其他软件打开对应的资源
tags: [Obsidian, 插件, 打开方式, 第三方软件]
description: Obsidian 插件：Open with 使用其他软件打开对应的资源，允许你通过在 Obsidian 中使用其他软件，打开笔记中常见格式文件。
author: OS
type: basic
draft: false
editable: false
modified: 20230724174615
---

# Obsidian 插件：Open with 使用其他软件打开对应的资源

## 概述

说到笔记，显然不光是纯文字的内容，除了常见各种图片格式，偶尔我们也会希望插入一些其他文档。

Obsidian 已经内置了对一些文件格式的支持，比如图片，pdf，但是可能你还希望使用其他更加常用的软件来打开它。这时候可能就需要用到 Open with 插件，它能够针对仓库内的文件进行设定

> [!Note] 插件名片
> - 插件名称：Open with
> - 插件版本：0.3.1
> - 插件作者：phibr0
> - 插件描述：允许你通过在 Obsidian 中使用其他软件，打开笔记中常见格式文件。
> - 插件分类：[' 笔记文件处理 ', 'obsidian 插件 ']
> - 插件项目地址：[点我跳转](https://github.com/phibr0/obsidian-open-with)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-with)

## 效果&特性

- 支持你自定义不同右键菜单选项，用于在笔记中，选择打开的方式。这点上类似把 windows 的打开方式集成到了 windows

## 使用

支持你自定义不同右键菜单选项，用于在笔记中，选择打开的方式。这点上类似把 windows 的打开方式集成到了 windows

### 基本使用

- Display Name：你希望在右键菜单上显示的菜单名
- Path/Command：以 windows 为例需要你精确到具体软件的路径，具体到应用程序
- Arguments：允许你配置一些参数，一般情况会较少用到。
- 可以通过 Show in File-Menu 来增加
- 比如下面就是我的配置
	- 使用 xnview 打开 Obsidian 仓库中的一些图片类型文件
	- 使用 foxit 打开 Obsidian 仓库中的一些 PDF 类型文件

![image.png](https://cdn.pkmer.cn/images/20230710230224.png!pkmer)

> [!Tip] 提示
> - 这个插件虽然长期没有更新了，但是依然可以运行
> - 能够选择的文件或者链接，只能是仓库内的文件
> - 如果你使用了绝对路径来应用仓库外的文件，其实可以选择点击链接，Obsidian 会弹出打开方式的对话框，使用系统默认应用打开对应文件。