---
uid: 20250207120118
title: Obsidian 插件：Recent Notes 按照时间分组排序的浏览历史插件
tags: ['文件管理', 'Obsidian 插件']
description: Obsidian 插件：Recent Notes 按照时间分组排序的浏览历史插件
author: OS
type: other
draft: false
editable: false
modified: 20250207130238
---

# Obsidian 插件：Recent Notes 按照时间分组排序的浏览历史插件

## 概述

相比用户量很多，老牌的 [[recent-files-obsidian]] 插件，这个插件推荐的理由除了完美兼容了老牌插件的能力，还提供了几个新特性。

> [!note] 插件名片
> 插件名称：Recent Notes
> 插件作者：Kamil Rudni
> 插件描述：按照自然时间段展示最近操作过的文件，且提供建议的预览功能
> 插件版本：1.0.9
> 插件分类：[ 文件管理 ', 'obsidian 插件 ']
> 插件项目地址：[链接](https://github.com/kamil-rudnicki/obsidian-recent-notes)
> 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?recent-notes)

## 效果&特性

1. 安装并启用后，会在左侧面板生成一个 时钟样式的图标，同 [[recent-files-obsidian]]
2. 点击该图标，可以看到最近浏览过的文档，同 [[recent-files-obsidian]]
3. 支持设置最多历史记录数量，同 [[recent-files-obsidian]]
4. 能够按照自然时间对历史文档进行分组，管理和查看更自然
5. 能够自己定义显示摘要的细节程度
6. 能够自定义是否排除某个文件和文件夹在最近历史的显示
7. 能够自定义哪一类型的文件显示在最近历史中

## 使用

1. 基本上属于开箱即用，许哟啊妮在侧边栏找到按钮，拖动到你习惯的位置【这点略逊于 [[recent-files-obsidian]]，后者默认会在左侧边栏】
2. 设置
	- Maximum notes to show：可以设定最大记录的历史数量，默认 100
	- Preview lines：用于控制每个历史条目摘要的预览内容细节程度，从 1 行到 3 行，自行设置
	- Excluded folders：可以设置哪些文件夹或者单独文件排除在历史记录外
	- File types to show：控制哪些文件格式的会显示在历史记录中
		- md
		- 图片
		- PDF
		- 音频
		- 视频
		- canvas
		- csv
