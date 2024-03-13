---
uid: 2023080322201953
title: Obsidian 插件：Image Toolkit
tags: ['界面相关', '图片', '编辑工具', 'obsidian插件', 'readme']
description: 为 Obsidian 中的图片添加增强功能，点击图片显示在一个弹出层中，您可以查看、拖动、缩放、旋转图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Toolkit

> [!Note] 插件名片
> - 插件名称：Image Toolkit
> - 插件作者：sissilab
> - 插件说明：为 Obsidian 中的图片添加增强功能，点击图片显示在一个弹出层中，您可以查看、拖动、缩放、旋转图像。
> - 插件分类：[' 界面相关 ', ' 图片 ', ' 编辑工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sissilab/obsidian-image-toolkit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-toolkit)

## 概述

为 Obsidian 中的图片添加增强功能，点击图片显示在一个弹出层中，您可以查看、拖动、缩放、旋转图像。

![Image Toolkit](https://cdn.pkmer.cn/covers/obsidian-image-toolkit.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sissilab/obsidian-image-toolkit/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-image-toolkit]] 插件的自述翻译

<h1 align="center">Obsidian 图像工具包</h1>

<p align="center">
    <img alt="发布版本" src="https://img.shields.io/github/v/release/sissilab/obsidian-image-toolkit?style=for-the-badge">
    <img alt="下载次数" src="https://img.shields.io/github/downloads/sissilab/obsidian-image-toolkit/total?style=for-the-badge">
</p>

<p align="center">
    <span>一个为 Obsidian 提供一些图像查看工具的插件</span>
    <br/>

    ·
    
</p>
关于插件
当您点击一张图片时，它将弹出，并且您可以预览、缩放、移动、旋转、翻转、反转和复制该图片。

## 基本功能

- 通过鼠标滚轮或点击工具栏缩放图标来放大或缩小图像
- 通过拖动鼠标光标或按下键盘箭头键来移动图像
- 在全屏模式下预览图像
- 通过点击页脚工具栏图标来旋转或翻转图像
- 反转图像的颜色
- 复制图像

## 正常模式

当您在设置页面关闭“固定图像”时，它处于**正常模式**。

![normal_mode_screenshot](https://raw.githubusercontent.com/sissilab/obsidian-image-toolkit/master/example/normal_mode_screenshot.png)

**规则**：

- 单击图像后，图像将弹出并在背景上显示透明的遮罩层
- 您一次只能单击和预览一个图像
- 在正常模式下，除了查看和操作图像外，您不能编辑和查看笔记或进行其他操作

**图库导航栏**：

- 当前笔记中的所有图像将显示在底部，您可以切换这些缩略图以查看任何图像
- 要使用此功能，您需要在插件设置页面上打开“显示图库导航栏”
- 图库导航栏的背景颜色和所选图像的边框颜色可以在插件设置页面上设置

**退出**：

- 单击图像外部
- 按下 Esc 键

> 如果处于全屏模式，您需要先退出全屏模式，然后退出图像预览页面并关闭弹出层。

**移动图像**：

- 将鼠标光标放在图像上，直接拖动图像进行移动
- 按下配置的箭头键来移动图像

  > 如果您为移动图像设置了修饰键（Ctrl、Alt、Shift），您需要同时按住修饰键和箭头键。

## 引脚模式

当您在设置页面上打开“固定图像”时，它处于**引脚模式**。

![pin_mode_screenshot](https://raw.githubusercontent.com/sissilab/obsidian-image-toolkit/master/example/pin_mode_screenshot.png)

**规则**：

- 您可以一次点击并弹出 1 到 5 张图像
- 与普通模式相比，点击图像后将不会弹出遮罩层
- 在图像弹出和预览时，可以编辑和查看笔记

**菜单**：

- 当您右键点击弹出的图像时，菜单将显示在光标的右侧。菜单包含多个功能，如缩放、全屏、刷新、旋转、翻转、复制、关闭等。

**退出**：

- 按 Esc 键关闭鼠标光标悬停的图像
- 在菜单中点击“关闭”按钮

**移动图像**：

- 将鼠标光标放在图像上，直接拖动图像进行移动
- 不支持使用箭头键移动图像

## 安装

**从 Obsidian 的社区插件中安装**：

1. 打开设置 > 社区插件
2. 关闭“安全模式”
3. 点击“浏览”按钮浏览插件
4. 搜索“Image Toolkit”
5. 点击“安装”按钮
6. 安装完成后，关闭插件浏览窗口，返回社区插件窗口，在已安装插件列表下方激活新安装的插件

**手动安装**：

1. 下载 [最新版本](https://github.com/sissilab/obsidian-image-toolkit/releases/latest)
2. 从压缩包中提取 obsidian-image-toolkit 文件夹到你的 vault 的插件文件夹 `<vault>/.obsidian/plugins/`（注意：`.obsidian` 文件夹可能是隐藏的，你需要先显示它）
3. 打开设置 > 社区插件，重新加载并激活已安装插件列表下方的插件

## 联系方式

如果您有任何反馈或问题，请随时通过 [GitHub问题](https://github.com/sissilab/obsidian-image-toolkit/issues) 联系我们。
