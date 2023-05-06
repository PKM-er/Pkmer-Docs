---
uid: 20230329145808
title: Obsidian 插件：Obsidian Gallery 让你的笔记变成画廊
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidian 插件：Obsidian Gallery 让你的笔记变成画廊

## 概述

让你收集的图片，在笔记中可以按照画廊模式展示。

> [!Note] 插件名片
> - 插件名称：Obsidian Gallery
> - 插件作者：Darakah
> - 插件说明：让你收集的图片，在笔记中可以按照画廊模式展示。
> - 插件项目地址：[点我跳转](https://github.com/Darakah/obsidian-gallery)

> [!WARNING]
> 需要 Obsidian 版本至少 1.1.8
> 需要你自己指定仓库中的图片的路径

## 效果&特性

![Pasted image 20230310105749](https://cdn.pkmer.cn/images/a47c4a5e7fff172bdf5caef0a47c0648_MD5.png)

![obsidian-image-gallery](https://cdn.pkmer.cn/images/3a0181128f67d2918d9c8ced32e3f807_MD5.gif)

## 使用

要创建画廊，需要将以下代码块添加到笔记中（提醒：确保自定义图片在仓库中的路径正确）：

水平堆砌滚动方式：

````语法
```img-gallery
path: Attachments/Folder
type: horizontal
````

垂直堆砌滚动方式：

````语法
```img-gallery
path: Attachments/Folder
type: vertical
```
````

![Pasted image 20230310110903](https://cdn.pkmer.cn/images/d1d04025ab1c0330a3778e0013eb599b_MD5.jpg)

- 通过单击图库的任何图像部分可访问的 Lightbox 视图。
- 如果需要，单击右上角的按钮以在新选项卡中打开原始图像。

## 设置

可以在 YAML 语法中按任何顺序自定义设置。可选属性默认为下表中概述的值

| 参数项 | 默认       | 其他选项     | 是否必填 | 功能描述                                   |
| ------ | ---------- | ------------ | -------- | ------------------------------------------ |
| path   | -          | -            | Yes      | 图片素材的存储路径（相对于仓库的根目录）   |
| type   | horizontal | vertical     | No       | 滚动堆砌类型，水平或者垂直                 |
| gutter | 8          | (any number) | No       | 图片之间留白间距                           |
| radius | 0          | (any number) | No       | 图片边框圆角弧度大小（px）                 |
| sortby | ctime      | mtime, name  | No       | 图片排序的方式（创建时间，修改时间，名称） |
| sort   | desc       | asc          | No       | 排序方式，正序 asc 倒序 desc               |

仅适用于水平堆砌的选项：

| 参数项 | 默认 | 其他选项     | 是否必填 | 功能描述                         |
| ------ | ---- | ------------ | -------- | -------------------------------- |
| height | 260  | (any number) | No       | 每一行的高度（像素），默认 260px |

仅适用于垂直堆砌的选项：

| 参数项  | 默认 | 其他选项     | 是否必填 | 功能描述                                 |
| ------- | ---- | ------------ | -------- | ---------------------------------------- |
| columns | 3    | (any number) | No       | 桌面模式下，垂直堆砌有垂直方向有几列图片 |
| mobile  | 1    | (any number) | No       | 移动端下，垂直堆砌有垂直方向有几列图片   |

## 其他注意事项

- 路径，无需指定仓库的名称
- 仅接受本地图片作为源；
- 如果你设置的仓库中包含笔记和图像，那么这个插件只会识别图片；
- 确保要嵌入的图像具有合理的大小：用 60 张 4k 照片生成一个堆砌结构，很可能会使应用程序迟缓卡顿。
