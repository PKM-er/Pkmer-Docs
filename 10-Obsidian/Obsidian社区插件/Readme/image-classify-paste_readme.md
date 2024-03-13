---
uid: 2023120522253599
title: Obsidian 插件：【Readme】Image Classify Paste
tags: ['obsidian插件', 'readme']
description: 像Typora一样粘贴您的图片，图片链接的名称不是![[Paste xxx]]，而是使用相对目录的![some name](relative-directory/xxx.png)。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Image Classify Paste

> [!Note] 插件名片
> - 插件名称：Image Classify Paste
> - 插件作者：tianfx
> - 插件说明：像 Typora 一样粘贴您的图片，图片链接的名称不是 ![[Paste xxx]]，而是使用相对目录的![some name](relative-directory/xxx.png)。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ostoe/Ob-ImagePastePlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-classify-paste)

## 概述

像 Typora 一样粘贴您的图片，图片链接的名称不是 ![[Paste xxx]]，而是使用相对目录的![some name](relative-directory/xxx.png)。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ostoe/Ob-ImagePastePlugin/master/README.md)

---

## Readme(翻译）

下面是 [[image-classify-paste]] 插件的自述翻译

# Obsidian 图像分类粘贴插件

这个插件有两个特点

### 1. 使用 Markdown 标准语法粘贴网络图片或本地图片，使文档更加兼容。图片将被放置在与 Markdown 文档同名的文件夹中

示例：

假设我正在编辑一个名为 `Mytest.md` 的文件，我将按照以下步骤进行操作：

1. 从 Chrome 浏览器或本地磁盘复制图片。
2. 粘贴到 `Mytest.md` 的 Markdown 文档中。
3. 文档将添加一行或多行内容，类似于 `![Paste Image 20230101.png]` 或 `![](Paste Image 20230101.png)`。如果没有这个插件，图片文件位置取决于软件设置。
**与默认操作不同**，此插件允许您使用标准的 Markdown 链接语法插入图片，并将自动创建与 Markdown 文档同名的 `MyTest` 目录。图片将放置在与 Markdown 文档相同路径的目录中。

PS：Typora 使用这种方式。

演示：

![feature-1](./feature1.gif)

## 2. 批量将 Markdown 文档中的多个图片链接转换为兼容的语法格式

假设有一个名为 Mytest.md 的文件，其中包含一些内容：

```md
第一行
第二行
......
![[Paste Image xxxx1.png]]
![[Paste Image xxxx2.png]]
![[Paste Image xxxx3.png]]
......
```

用法：

1. 使用 `Ctrl + P` 搜索此插件命令 `reconstrut-image` 以批量转换多个图片链接。
2. 如果不存在与 Markdown 文件同名的目录 `MyTest`，则自动创建该目录。
3. 自动将多个链接文件（如 `Paste Image xxxx...png`）移动到 `MyTest` 目录中。
4. 更新 Markdown 文件内容，将 `![[Paste Image xxxx1.png]]` 更改为 `![img](MyTest/Paste-Image-xxx.png)`
![feature-2](./feature2.gif)

## TODO

 - 设置粘贴名称
 - 自动调整大小
 - 文件夹定期保存

调试快捷键：

如果更新了 ob 版本后 ，ctrl+shift+i 无法调出 devtool，在设置里面搜索“调试快捷键”，取消设置 ctrl+shift+i，然后再使用该快捷键即可生效

False
