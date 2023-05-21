---
uid: 20230329145808
title: Obsidian 插件：Fast Image Cleaner 快速删除笔记中图片和引用链接
tags: [Obsidian, 插件, 引用链接, 无效链接]
description: Obsidian 插件：快速删除笔记中图片和引用链接
author: OS
type: other
draft: false
editable: false
modified: 20230516113508
---

# Obsidian 插件：Fast Image Cleaner 快速删除笔记中图片和引用链接

## 概述

> [!Note] 插件名片
> - 插件名称：Fast Image Cleaner
> - 插件作者：Nathaniel
> - 插件说明：快速删除文档中的图像附件和引用链接
> - 插件项目地址：[点我跳转](https://github.com/Vinzent03/find-unlinked-files)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230516113325.png!pkmer)

1. 鼠标右键图片点击删除菜单选项，会删除图片附件文件及其引用链接
2. 被删除的图片的情况
    1. 仅被当前文档引用且**一次**，则直接删除图片，同时移除链接。
    2. 仅被当前文档引用且**多次**，则弹出提示窗口，要求用户手动移除链接，不删除图片。（避免图片被错误删除）
    3. 被**多个文档**引用，则弹出提示窗口，用户可点击 `close` 按钮继续移除**当前文档**中的图片引用链接，不删除图片。（避免图片被错误删除）
3. 支持 `markdown` 和 `wiki` 链接风格的链接
4. 支持 三种不同格式的**内部链接类型**
    - 尽可能简短的形式
    - 基于当前笔记的相对路径
    - 基于仓库根目录的绝对路径
5. 支持的图片类型：`jpg, jpeg, png, gif, svg, bmp`
6. 支持设置图片删除后的处理方式：① 移动到系统回收站 ； ② 移动到 obsidian trash ; ③ 永久删除
7. 支持更多文件类型，除了支持 img 类型的附件，更多类型附件文件（目前不支持右键移除 `PDF` 附件）
    1. img 类型: img、gif、png、jpeg、svg, bmp
    2. file 类型: docx、pptx、html、epub...
    3. video: mp4、mkv...
8. 当删除笔记时同时删除此笔记中引用的所有附件文件
    1. 如果附件被其他笔记也引用，则不删除。
    2. 如果附件仅被当前**需被删除的笔记**引用一次或多次，则删除。
    3. 删除方式：通过插件提供的命令删除 ; 文件列表右键菜单删除

## 使用

这个插件可以允许你快速的删除文档中的图片附件文件以及引用链接

### 删除附件及链接

- 实时预览模式下
![image.png](https://cdn.pkmer.cn/images/20230516113325.png!pkmer)

- 阅读模式下
![image.png](https://cdn.pkmer.cn/images/20230516113431.png!pkmer)

### 删除附件当删除笔记

1. 方式 1：打开命令命板输入 `Delete file and clear...`，回车会删除当前笔记，同时删除笔记中的附件，不包括被其他笔记也引用的附件
2. 方式 2：鼠标右键文件列表文件，在弹出的菜单中，选择 `Delete the file and its all attachments`

### 删除内容的设置

![image.png](https://cdn.pkmer.cn/images/20230516113027.png!pkmer)

- 请确保你在 "Fast Images Cleaner Settings" 下选择了被删除图片的位置。你有 3 个选项：
	- 移动到黑曜石垃圾桶 - 文件将被移动到黑曜石保险库下的.trash。
	- 移动到系统垃圾箱 - 文件将被移动到操作系统垃圾箱。
	- 永久删除 - 文件将被永久销毁。你将不能再恢复了

## 插件演示

1. 插件演示视频：<https://www.bilibili.com/video/BV1U8411T7VH/?vd_source=bc02b194f06ee6c081a8d33ad7b3824d>