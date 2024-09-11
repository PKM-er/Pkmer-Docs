---
uid: 2024081307133697
title: Obsidian 插件：Lite Gallery
tags: ['笔记链接', 'obsidian插件']
description: 可以轻松创建旋转木马画廊，以更好地组织/查看笔记中的图像。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lite Gallery

> [!Note] 插件名片
> - 插件名称：Lite Gallery
> - 插件作者：Jordan Poles
> - 插件说明：可以轻松创建旋转木马画廊，以更好地组织/查看笔记中的图像。
> - 插件分类：['笔记链接', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jpoles1/obsidian-litegal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?litegallery)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jpoles1/obsidian-litegal/master/README.md)



## 概述

Obsidian Lite Gallery是Obsidian的一个插件，它可以轻松创建轮播图库，以更好地组织和查看笔记中的图片。通过该插件，您可以将多个图片整齐地组织到笔记中，提高可读性和可用性。

使用方法如下：
1) [安装插件](https://help.obsidian.md/Extending+Obsidian/Community+plugins)
2) 打开插件设置并配置您的图片目录（用逗号分隔）。为了更方便地插入图片，不需要提供完整的图片路径；插件将按照设置列表中的顺序搜索每个图片目录，使用找到的第一个匹配的图片：
   - 例如 `/,images,media` 将首先搜索您的vault根目录，然后是 `images` 目录，最后是 `media` 目录，以搜索图库中的每个图片。
3) 使用以下的 "codeblock" 格式在您的笔记中创建一个新的图库：
```
 ```litegal
[[image1.jpg]]
this_also_works.png
path/to/image3.jpg
 ```
```
   - 请注意，您可以在代码块中输入 `[[` 来使用Obsidian文件搜索；这不会包含文件的绝对路径，但只要文件在图片目录中即可。

演示效果如下：

![Lite Gallery Demo](https://raw.githubusercontent.com/jpoles1/obsidian-litegal/955cd5f6f50048b9f8593bf46aa5c477a30976d5/litegaldemo.gif)

这个插件非常适合那些希望在Obsidian笔记中更好地组织和查看图片的用户。它提供了一个简单而有效的方法来创建轮播图库，使您的笔记更加清晰和易于使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



