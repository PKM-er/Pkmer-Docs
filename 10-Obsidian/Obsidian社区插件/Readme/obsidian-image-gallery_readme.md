---
uid: 2023080322201382
title: Obsidian 插件：Image Gallery
tags: ['界面相关', '美化', '效率', '图片', 'obsidian插件', 'readme']
description: 为 Obsidian 添加一个画廊模式，以瀑布流的图片展示你的图片素材。需要你指定图片素材的路径。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Gallery

> [!Note] 插件名片
> - 插件名称：Image Gallery
> - 插件作者：Luca Orio
> - 插件说明：为 Obsidian 添加一个画廊模式，以瀑布流的图片展示你的图片素材。需要你指定图片素材的路径。
> - 插件分类：[' 界面相关 ', ' 美化 ', ' 效率 ', ' 图片 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lucaorio/obsidian-image-gallery)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-gallery)

## 概述

为 Obsidian 添加一个画廊模式，以瀑布流的图片展示你的图片素材。需要你指定图片素材的路径。

![Image Gallery](https://cdn.pkmer.cn/covers/obsidian-image-gallery.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucaorio/obsidian-image-gallery/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-image-gallery]] 插件的自述翻译

![Obsidian图库](assets/obsidian-image-gallery-header.jpg)

# Obsidian 图库

Obsidian 图库是一个零设置的砌体图库，适用于 [Obsidian](https://obsidian.md/)。

**目录**

- [要求](#requirements)
- [使用方法](#usage)
- [设置](#settings)
- [注意事项](#notes)
- [示例](#examples)
- [致谢](#acknowledgments)
- [许可证](#license)
- [联系方式](#contacts)

## 要求

- [Obsidian](https://obsidian.md/) `(版本 >= 1.1.8)`
- 位于您的存储库中某个位置的本地图像文件夹 (们)

## 安装

Obsidian Image Gallery 可以从 Obsidian 内部安装，就像 [其他社区插件](https://help.obsidian.md/Advanced+topics/Community+plugins#Discover+and+install+community+plugins) 一样。

## 用法

要创建一个动态图库，请将以下代码块之一添加到笔记中（确保自定义路径！）：

对于水平砌体：

````
```img-gallery
path: Attachments/Folder
type: horizontal
```
````

对于垂直砌体：

````
```img-gallery
path: Attachments/Folder
type: vertical
```
````

查看 [设置](#settings) 以了解如何调整图库的一些属性；上面提供的示例是最简配置。

在 *[实时预览](https://help.obsidian.md/Live+preview+update)*模式下，图库将在将光标移出代码块后生成。使用常规的*源模式 *，按下 `cmd+e`（或 `ctrl+e`）来触发 Obsidian 的笔记预览。

![Obsidian Image Gallery - Animation](assets/obsidian-image-gallery.gif)

`1.1.1` 版本引入了一个灯箱视图，通过点击图库中的任何图像来访问。然后，如果需要，点击右上角的按钮以在新标签页中打开原始图像。

![Obsidian Image Gallery - Animation](assets/obsidian-image-gallery-lightbox.jpg)

## 设置

设置可以按任意顺序以 `yaml` 语法进行自定义。可选属性的默认值如下表所示：

| 选项     | 默认值        | 可选值           | 必需    | 描述                                 |
| -------- | ------------ | --------------- | -------- | -------------------------------------- |
| `path`   | -            | -               | 是       | 相对于 vault 根目录的路径               |
| `type`   | `horizontal` | `vertical`      | 否       | 砖石排列的类型                        |
| `gutter` | `8`          | (任意数字)      | 否       | 图片之间的间距（以像素为单位）         |
| `radius` | `0`          | (任意数字)      | 否       | 图片的边框半径（以像素为单位）         |
| `sortby` | `ctime`      | `mtime`, `name` | 否       | 按照什么方式对图片进行排序             |
| `sort`   | `desc`       | `asc`           | 否       | 排序的顺序                            |

仅适用于 `type=horizontal` 的选项：

| 选项     | 默认值 | 可选值        | 必需    | 描述                     |
| -------- | ------- | ------------ | -------- | ------------------------ |
| `height` | `260`   | (任意数字)   | 否       | 所有行的高度（以像素为单位） |

仅适用于 `type=vertical` 的选项：

| 选项       | 默认值 | 可选值        | 必需    | 描述                          |
| --------- | ------- | ------------ | -------- | ----------------------------- |
| `columns` | `3`     | (任意数字)   | 否       | 桌面端的列数                  |
| `mobile`  | `1`     | (任意数字)   | 否       | 移动端的列数                  |

注意事项：

- 对于 `path`，不需要指定保险库的名称
- 如 [要求](#requirements) 部分所述，只接受本地图像。该插件是为了实现一个特定的用例而设计的：从一个图像文件夹中创建一个画廊，尽量减少设置。
- 确保要嵌入的图像具有合理的大小：生成一个包含 60 张 4k 照片的砌体很可能会使应用程序变得非常缓慢！

关于砌体的方向与其图像的分布的额外说明：在原生 `css` 网格中，直到有一个真正的砌体布局可用为止，垂直版本的排序是随机的。这是因为其元素的流动是从上到下的（有关更多信息，请参见 [此文章](https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout)）。如果排序很重要，请使用水平版本；它的图像有时会被裁剪，但它们的排序方式更直观。

## 示例

![Obsidian图库示例](assets/obsidian-image-gallery-examples.jpg)

## 更新日志

`1.1.1`

  - 修复了“在新标签页中打开图像”功能的错误

`1.1.0`

  - 修复了按字母顺序排序的问题
  - 引入了适用于桌面和移动设备的灯箱效果
  - 在灯箱中添加了一个“在新标签页中打开图像”的按钮
  - 修复了 README.md 的大小写问题，以便 Obsidian 可以正确检索文件

## 致谢

标题中的所有照片均由不同的摄影师拍摄，并可在 [Unsplash](https://unsplash.com/s/photos/architecture) 上获得。

## 许可证

![https://github.com/lucaorio/obsidian-image-gallery/blob/master/license](https://img.shields.io/badge/license-MIT-blue.svg)

## 联系方式

- Twitter：[@lucaorio_](http://twitter.com/@lucaorio_)
- 网站：[lucaorio.com](http://lucaorio.com)
- 电子邮件：[luca.o@me.com](mailto:luca.o@me.com)



