---
uid: 20230901212916
title: Obsidian 插件：利用 Bartender 进行拖拽排序侧边栏和状态栏
tags: [Obsidian, 文件排序]
description: Bartender 提供了拖拽排序文件夹功能，允许重新排列状态栏和侧边栏中的元素。
author: Huajin
type: other
draft: false
editable: false
modified: 20230902003926
---

# Obsidian 插件：利用 Bartender 进行拖拽排序侧边栏和状态栏

## 概述

Obsidian 默认提供了三类文件的排序方式，分别是按照文件名、编辑时间以及创建时间。Bartender 则提供了更实用的拖拽排序功能。除此之外，Bartender 还允许重新排列状态栏和侧边栏中的元素。

> [!Note] 插件名片
> - 插件名称：Bartender
> - 插件版本：0.5.9
> - 插件作者：NothingIsLost
> - 插件描述：允许重新排列状态栏和侧边栏中的元素
> - 插件项目地址：[点我跳转](https://github.com/nothingislost/obsidian-bartender)

## 使用方法

该插件提供了三个设置，但是我们完全可以不用修改，安装好插件就能用。重新排列侧边栏元素的方式就是直接拖拽，但是文件夹拖拽是不会直接变化的，需要下面几个步骤

1. 打开插件后，重启 obsidian
2. 点击左上角工具栏中的按钮修改文件排序方式，选择排序方式为 Custom

![![|475](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230901230447.png!pkmer)

1. 点击排序方式按钮右边的 Drag to rearrange 按钮，按钮亮起之后，就可以拖拽文件进行排序啦。

> [!TIP] 注意💡
>  鼠标拖住一个文件移动时，只能够修改文件在原来的文件夹之中的排序位置。需要跨文件改变位置的时候需要再次点击 Drag to rearrange 关闭排序模式，或者右键文件选择 Move folder to.. 选项来修改文件位置；
>  另外，新创建的文件夹中的内容无法拖拽排序时，重启 obsidian 让插件读取一下新文件夹即可。