---
uid: 20231003020632
title: Quicker动作之自定义Zotero标注到Obsidian
tags: []
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231020211308
---

# Quicker 动作之自定义 Zotero 标注到 Obsidian

> [!note]+ Quick 的动作分享：[ZoteroToObsidian](https://getquicker.net/Sharedaction?code=b7727e44-4933-4ec5-8103-08dbc1cb1ea7)
> Quicker 动作：[ZoteroToObsidian](https://getquicker.net/Sharedaction?code=b7727e44-4933-4ec5-8103-08dbc1cb1ea7)

 之前介绍了一篇 Zotero 无缝衔接 Excalidraw 画板的脚本，但是很多情况我们还是以 Markdown 为主的来记录 Zotero 的文献笔记，本文将介绍如何通过 Quicker 来制作 Zotero 到 Obsidian 的自动化动作，可以根据自己习惯选择性的自定义粘贴格式。

![273108604-388e10ae-18bc-4833-b78a-cc72e1259ccf.png](https://cdn.pkmer.cn/images/202310202114602.png!pkmer)


## 制作 Quiker 动作的思路

首先介绍一下 Zotero 的 Annotation 的组成部分，在 Zotero 设置中编辑器中搜索 `noteTemplates`，可以看到 Zotero 的标注信息组成部分：

![Pasted image 20231003020902](https://cdn.pkmer.cn/images/202310202110508.png!pkmer)

Zotero 的 **标注信息** 部分主要有**高亮 + 引用 + 评论**组成，通过快捷键 `Ctrl + C`，来获取选中的标注信息。通过 `Ctrl + Shift + C` 可以获取当前**条目的基本信息**，包含文件名、条目链接等。

制作 Quicker 的动作的要素就是通过 **标注信息** + **条目信息** 拆分出几个基本元素，如：条目名称、外部回链、高亮区域、Comment、作者名等等，然后相互组合成粘贴格式。

## 第一步 获取标注信息和条目信息后正则匹配各个基本元素

![Pasted image 20231003020908](https://cdn.pkmer.cn/images/202310202110264.png!pkmer)

> [!caution]+ 注意 Zotero 6 和 Zotero 7 的匹配有点区别
> Zotero 6 的 RegZoteroComment 为：`annotation=.*\)\) +(.*$)`
> Zotero 7 的 RegZoteroComment 为：`\)\) +(.*$)`

## 第二步 根据匹配的元素判断标注类型

![Pasted image 20231003020915](https://cdn.pkmer.cn/images/202310202111829.png!pkmer)

默认的 Zotero 的框选区域的图片通过 `Ctrl + C` 只能获取外部回链和评论，其他的图片不管拖拽还是粘贴都无法在 Obsidian 正确显示，所以还是要提前复制图片 (Zotero 图片存储位置如下示意图) 到 Obsidian 的笔记库中，通过双链 `![[图片名]]` 来引用了。

![Pasted image 20231003020923](https://cdn.pkmer.cn/images/202310202111943.png!pkmer)

## 第三步 通过正则匹配的元素自定义组合粘贴文本格式

匹配到的各个元素根据自己需求进行组合吧

![Pasted image 20231003020930](https://cdn.pkmer.cn/images/202310202111612.png!pkmer)

> [!tip]+ 在组合元素时，可以根据 ZoteroComment 是否存在来进行不同的组合形式：
>![Pasted image 20231003020939](https://cdn.pkmer.cn/images/202310202111648.png!pkmer)

## Quicker 动作的小技巧

由于这个 ZoteroToObsidian 的动作只针对 Zotero 就行了，所以在 Quicker 里面设置这个动作的快捷键，直接 `Shift + C` 之后粘贴到 Obsidian 文档中。

![Pasted image 20231003020949](https://cdn.pkmer.cn/images/202310202111453.png!pkmer)

## 具体操作演示

![ZoteroToObsidian_PDF标注](https://cdn.pkmer.cn/images/202310202112805.gif)

> [!tip]+ 利用 Zotero 7 来对离线的 HTML 网页进行标注：
> ![ZoteroToObsidian_HTML标注](https://cdn.pkmer.cn/images/202310202112614.gif)
