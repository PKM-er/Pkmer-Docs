---
uid: 20250325155332
title: Obsidian 插件：Canvas Format Brush 为 Obsidian Canvas 添加格式刷功能
tags: [" 白板 ", " Canvas ", " 编辑工具 ", "obsidian 插件 "]
description: Obsidian 插件：Canvas Format Brush 为 Obsidian Canvas 添加格式刷功能
author: OS
type: other
draft: false
editable: false
modified: 20250415132454
---

# Obsidian 插件：Canvas Format Brush 为 Obsidian Canvas 添加格式刷功能

## 概述

白板因为其简单的容器特性，成为很多人整理分散信息的内容的首选，但是默认格式缺失，以及需要你每次调整初始大小，却也一直被诟病。

之前我们介绍了 [[advanced-canvas]]，来增强相关功能，今天再介绍一款，可以专门用来曲线解决格式化 canvas 样式的工具。

> [!Note] 插件名片
> - 插件名称：Canvas Format Brush
> - 插件作者：wenlzhang
> - 插件说明：为 Obsidian Canvas 添加格式刷功能
> - 插件分类： [' 白板 ', ' Canvas ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/wenlzhang/obsidian-canvas-format-brush)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-format-brush)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gfxholo/iconic/main/README.md)

## 效果&特性

- 允许你在画布元素之间复制和粘贴格式属性（大小和颜色），类似于 Word 中的格式刷。
- 画布元素之间复制和粘贴格式
- 支持复制：
	- 卡大小和颜色
	- 仅尺寸
	- 仅颜色
	- 根据对象不同的上下文菜单和命令
状态栏指示器显示何时复制格式

## 使用

- 粘贴格式：将复制的格式应用于当前选定的所有画布元素
- **Copy format**: 从当前选定的画布元素复制所有格式属性
- **Copy size**: 仅从所选画布元素复制大小属性
- **Copy color**: 仅复制所选画布元素的颜色属性
- **Paste format**: 将复制的格式应用于当前选定的所有画布元素

1. 单击您要从中复制格式的画布元素
2. 从“画布上下文”菜单中选择格式刷图标
3. 从子菜单选项中选择：
	- 复制格式：复制所有格式属性
	- 复制大小：仅复制大小属性
	- 复制颜色：仅复制颜色属性
	- 粘贴格式：应用复制的格式（复制后出现）
4. 要粘贴，选择一个或多个帆布元素，然后选择格式刷图标，然后选择“粘贴格式”

### 设置

- **Copy color**: 启用/禁用卡片颜色的复制
- **Copy size**: 启用/禁用卡大小的复制
- - **Show status bar item**: 在状态栏中显示/隐藏格式刷状态