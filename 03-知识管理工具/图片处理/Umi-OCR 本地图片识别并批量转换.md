---
uid: 20230725164407
title: Umi-OCR 本地图片识别并批量转换
tags: [OCR, 图片识别, 手写体, 辅助工具]
description: Umi-OCR 是一款功能强大且易于使用的工具，可以使用它来识别 Obsidian 中的图片文字、手写文字或者批量识别图片能够极大地提升你的工作效率。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230729211252
---

# Umi-OCR 本地图片识别并批量转换

Umi-OCR 是一款功能强大且易于使用的工具，可以使用它来识别 Obsidian 中的图片文字、手写文字或者批量识别图片能够极大地提升你的工作效率。

> [!note] Umi-OCR
> 软件名称：Umi-OCR
> 软件作者：hiroi-sora
> 软件版本：1.3.5
> 项目地址：[Umi-OCR](https://github.com/hiroi-sora/Umi-OCR)
> 软件介绍：Umi-OCR 是一款基于 PaddleOCR 完全离线的 OCR 图片转文字识别软件，支持截屏/批量导入图片，多国语言识别，合并段落，竖排文字识别，排除水印区域，提取干净的文本。

==视频说明==

<iframe src="https://player.bilibili.com/player.html?aid=743993235&bvid=BV1Rk4y1g72v&cid=1209613692&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>


![Pasted image 20230725162817](https://cdn.pkmer.cn/images/202307292110639.png!pkmer)

## 单个图片识别

可以通过设置快捷键，对单个图片进行快速识别：

![Pasted image 20230725161814](https://cdn.pkmer.cn/images/202307292109316.png!pkmer)

在 Excalidraw 画板里面进行图片识别：

![Pasted image 20230725155336](https://cdn.pkmer.cn/images/202307292109332.png!pkmer)

> 这里在 Excalidraw 画板里复制为图片后通过快捷键来直接对剪切板的图片进行 ocr； 在 Excalidraw 画板里面，多行文字双击之后再粘贴，就不会按行分块。

也可以用于识别手写体，比 Excalidraw 画板的 ocr 插件更快还更准确，最重要的是它是本地的，完全免费。

另外在 Obsidian 的笔记中，推荐使用 `Copy Image and URL context menu` 插件，可以快速地复制笔记中的图片，和用 `Awesome Image` 方便查看图片。

![Pasted image 20230725162623](https://cdn.pkmer.cn/images/202307292109567.png!pkmer)

> [!note] Copy Image and URL context menu
> ![230725 162513](https://cdn.pkmer.cn/images/202307292110466.gif!pkmer)

> [!note] Awesome Image
> ![Pasted image 20230725162742](https://cdn.pkmer.cn/images/202307292110952.png!pkmer)

## 批量识别图片

批量识别的设置介绍：

![Pasted image 20230725160009](https://cdn.pkmer.cn/images/202307292110836.png!pkmer)

可以通过在文件夹中选择一个或多个图形文件，或者通过界面的选择文件夹按钮进行，识别的内容会显示在**识别内容**的窗口中，如果设置了输出结果为 `.md文件`，识别完后也会自动弹窗出来。

![Pasted image 20230725161254](https://cdn.pkmer.cn/images/202307292110335.png!pkmer)

> [!tip] 输出的 md 文件格式如下
> ![230725 161036 1](https://cdn.pkmer.cn/images/202307292110388.gif)

这样一来，你就可以在生成的 md 文件中进行搜索，方便快捷地查找需要的信息了。
