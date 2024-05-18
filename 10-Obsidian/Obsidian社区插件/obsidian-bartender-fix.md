---
uid: 20230901212916
title: Obsidian 插件：利用 Bartender 实现文件拖拽排序
tags: [Obsidian, 文件排序]
description: Bartender 提供了拖拽排序文件夹功能，允许重新排列状态栏和侧边栏中的元素。
author: Huajin
type: basic
draft: false
editable: false
modified: 20240518191025
---

# Obsidian 插件：利用 Bartender 实现文件拖拽排序

## 概述

Obsidian 默认提供了三类文件的排序方式，分别是按照文件名、编辑时间以及创建时间。Bartender 则提供了更实用的拖拽排序功能。需要注意的是，当你拖拽排序的文件数目过多时，该插件可能会造成卡顿。

> [!Note] 插件名片
> - 插件名称：Bartender
> - 插件版本：0.5.9
> - 插件作者：NothingIsLost
> - 插件描述：允许重新排列状态栏和侧边栏中的元素
> - 插件项目地址：[点我跳转](https://github.com/nothingislost/obsidian-bartender)
> - 国内下载地址 (修复版)：[Bartender-fix](https://pkmer.cn/products/plugin/pluginMarket/?Bartender-fix)

> [!warning] 注意
> 由于 obsidian 在 1.5.3 版本更新了部分 API，该插件失效。可以在插件的 Github 仓库的 Issue 中找到网友的 [重制版](https://github.com/nothingislost/obsidian-bartender/issues/51#issuecomment-1870788233)，有需要可以使用。
>Pkmer 插件市场已经上架了社区修复版本 [Bartender-fix](https://pkmer.cn/products/plugin/pluginMarket/?Bartender-fix)
> **声明**：我们不对该重制版的安全做保障，但是目前我个人从 1.5.3 更新使用该重制版至今没有遇到问题。

## 使用方法

该插件提供了三个设置，但是我们完全可以不用修改，安装好插件就能用。但是**文件夹拖拽则需要下面几个步骤**

- 打开插件后，**重启 obsidian**
- 点击左上角工具栏中的按钮修改文件排序方式，**选择排序方式为 Custom**，此时在排序按钮右侧出现一个 Drag to rearrange 按钮
- 点击排序方式按钮右边的 Drag to rearrange 按钮，按钮亮起之后，就可以拖拽文件进行排序啦。

![![|475](https://cdn.pkmer.cn/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230901230447.png!pkmer)

> [!TIP] 注意💡
>  鼠标拖住一个文件移动时，只能够修改文件在原来的文件夹之中的排序位置。需要跨文件改变位置的时候需要再次点击 Drag to rearrange **关闭排序模式**，或者右键文件选择 Move folder to.. 选项来修改文件位置；
>
>  **另外，新创建的文件夹中的内容无法拖拽排序时，重启 obsidian 让插件读取一下新文件夹即可。**