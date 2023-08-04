---
uid: 2023080322243519
title: Obsidian 插件：【Readme】Path Title
tags: ['obsidian插件', 'readme']
description: 将路径（或可选替换）添加到每个窗格的文件名标题
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Path Title

> [!Note] 插件名片
> - 插件名称：Path Title
> - 插件作者：Justin Deal
> - 插件说明：将路径（或可选替换）添加到每个窗格的文件名标题
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jdeal/obsidian-path-title-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-path-title)

## 概述

将路径（或可选替换）添加到每个窗格的文件名标题

![Path Title](https://cdn.pkmer.cn/covers/obsidian-path-title.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jdeal/obsidian-path-title-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-path-title]] 插件的自述翻译

# 黑曜石路径标题

在文件名旁边显示当前文件的路径。

![](https://cdn.zappy.app/2480008e89fcb8b9ca52eacaf7022f8b.png)

## 使用方法

安装完成后，您将获得上述显示的行为，即在文件名之前显示完整路径。有一个基本选项可以更改外观：

**路径字体大小：** 默认为中等大小，略小于文件名字体。将其设置为大号，使其与文件名字体大小相同，或者设置为小号，使其更小。

高级用法

路径替换设置允许您根据需要缩短或修改路径。您可以添加多个替换设置，并且它们将按照从第一个到最后一个的顺序运行。

### 精确路径替换

您可以将整个路径的精确匹配替换为另一个路径。例如，这里我们将 "Notes/Ideas" 替换为 "💡"。

![](https://cdn.zappy.app/c7c80545823b131908a173aff455059a.png)

![](https://cdn.zappy.app/b3f04d7599f777aba73faf432df023de.png)

### 精确文件夹替换

您可以将路径中的一个文件夹的精确匹配替换为另一个文件夹。例如，我们将“Notes”替换为“📝”，将“Ideas”替换为“💡”。

![](https://cdn.zappy.app/44c39537ea4aef649577a854a335f92c.png)

![](https://cdn.zappy.app/2ebeb35ecd46ce5325f071323f9f8e66.png)

### 文本替换

您可以在路径的任何位置用替代文本替换文本。例如，这里我们将“001.”替换为“1.”。

![](https://cdn.zappy.app/54641a2295ecde28d2b3ab08d43f074e.png)

![](https://cdn.zappy.app/1ce42f3bce22a390ffb31bf218e5a61b.png)

### 正则表达式替换

您可以使用正则表达式在路径中的任何位置匹配文本，并使用 $1、$2 等来插入正则表达式匹配的组，将其替换为替代文本。这样可以通过单个规则更改多个路径。

![](https://cdn.zappy.app/4a49fc9af3368e517121c63a2c7274ad.png)

![](https://cdn.zappy.app/1ce42f3bce22a390ffb31bf218e5a61b.png)

![](https://cdn.zappy.app/8ca611abe0aefcac318ec13c149a6c11.png)
