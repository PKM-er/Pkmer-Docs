---
uid: 20250524092606
title: Obsidian 插件：Pixel Perfect Image 简单实用的图片编辑工具
tags: ['图片与PDF', '文件管理', '编辑工具', 'obsidian插件']
description: 能实现像素级精准的100%图片缩放，还能复制到剪贴板、在“访达”（Mac）/“资源管理器”（Windows）里查看图片，也能在外部编辑器中编辑图片，功能多着呢！
author: AI
type: auto
draft: false
editable: false
modified: 20250711001501
---

# Obsidian 插件：Pixel Perfect Image 简单实用的图片编辑工具

## 概述

Pixel Perfect Image 是 Obsidian 的一款图片管理插件，提供精确到像素的图像调整（如 100%、50%、25% 缩放或自定义像素宽度）、鼠标滚轮快速缩放（按住 Alt/Option 滚动）、复制图像到剪贴板、在系统资源管理器/访达中显示图像、用外部编辑器（如 Photoshop）打开图像、重命名图像文件等功能，支持 Wiki 链接和标准 Markdown 图像链接，适用于需要精确控制图像尺寸、快速编辑或管理笔记中图像的用户，解决了 Obsidian 中图像调整不够灵活、操作繁琐的问题，用户可通过右键菜单或快捷键（如 CMD/CTRL+ 点击在新标签打开）快速操作，并可在设置中自定义缩放步长、快捷键和外部编辑器路径。

> [!Note] 插件名片
> - 插件名称：Pixel Perfect Image
> - 插件作者：Johan Sanneblad
> - 插件说明：能实现像素级精准的 100% 图片缩放，还能复制到剪贴板、在“访达”（Mac）/“资源管理器”（Windows）里查看图片，也能在外部编辑器中编辑图片，功能多着呢！
> - 插件分类：[' 图片与 PDF', ' 文件管理 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/johansan/pixel-perfect-image)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pixel-perfect-image)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johansan/pixel-perfect-image/main/README.md)

## 效果&特性

![Pixel Perfect Image](https://cdn.pkmer.cn/covers/pixel-perfect-image_1_0.png!pkmer)

- 📐 像素级调整图片大小：
	- 快速将图片调整为像素完美百分比（100%、50%、25%）或自定义像素宽度
	- 📋️ 鼠标滚轮支持：使用鼠标滚轮快速调整大小（按住 Alt/Option 并滚动）
- 📋 图片复制
	- 将图片复制到剪贴板：用于快速粘贴到其他程序中
	- 🔗 将本地文件路径复制到剪贴板：如果您想从终端访问图像
- 管理
	- 📂 在 Finder/Explorer 中显示：打开文件浏览器，选择图像
	- 🖼️ 在默认系统查看器中打开：在默认应用程序中打开图像
	- 🎨 在外部编辑器中打开：直接在外部编辑器（如 Photoshop 或 Affinity Photo）中打开图像
	- ✏️ 重命名图像：直接从上下文菜单快速重命名图像文件
	- 🔄 适用于维基链接和标准 Markdown 图像链接
	- 🔍 在新标签页中快速打开：CMD/CTRL+ 点击以在新标签中打开图像

## 使用

- 安装启用插件后
- 右键单击笔记中的图像
	- 可用选项：
		- 查看文件名和尺寸
		- 调整到预设百分比（默认 100%、50%、25%）
		- 复制、打开或在系统中显示
		- 在外部编辑器中打开
		- 重命名图像文件
- 使用鼠标滚轮快速调整大小：
	- 按住 Alt 键（macOS 上的选项）并滚动图像
	- 向上滚动可增大尺寸，向下滚动可减小尺寸
	- 可以在设置中更改修改键（Alt/Ctrl/Shift）
	- 缩放百分比可以在设置中调整（默认为 20%）
	- 每个滚动步长都会根据当前宽度的配置百分比改变大小
- 快捷键：
	- CMD/CTRL+ 单击：在新选项卡中打开图像

## 设置

该插件提供了几个设置来自定义其行为：

- 菜单选项：
	- 在上下文菜单中显示文件信息
	- 显示“在资源管理器/查找器中显示”选项
	- 显示重命名选项
	- 显示“在新选项卡中打开”选项
	- 显示“在默认应用程序中打开”选项
	- 显示调整大小选项
	- 自定义调整宽度（以像素为单位）（逗号分隔，例如 600/800/1200）
- 鼠标滚轮缩放：
	- 启用/禁用鼠标滚轮缩放
	- 选择修改键（Alt/Ctrl/Shift）
	- 调整缩放步长，即每次使用滚轮缩放的大小
	- 反转滚动方向：跳转滚轮控制大小的方向
- 外部编辑器：
	- 设置外部图片编辑器名字
	- 配置外部图片编辑器的路径（限定 Windows 操作系统）