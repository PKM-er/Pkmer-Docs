<!--
 * @Author: cumany cuman@qq.com
 * @Date: 2023-12-06 09:21:08
 * @LastEditors: cumany cuman@qq.com
 * @LastEditTime: 2023-12-06 09:24:15
 * @Description: 
-->
---
uid: 20231204101133
title: Obsidian 插件：Cache-Area 给你一份电子草稿纸
tags:
  - obsidian
  - 插件
description: 为你提供了一个临时草稿纸
author: Huajin
type: other
draft: false
editable: false
modified: 20231204111955
---

# Obsidian 插件：Cache-Area 给你一份电子草稿纸

## 概述

这是一个缓存文件，如果你突然有什么想法想写下来，但是一时之间你又没有想好到底存在哪个文件里边，或者说就不打算单独存在某个文件中。以往这种情况需要建立一个文件放在根目录来应对，不那么丝滑且强迫症可能无法接受。但是现在，Cache-Area 为你提供了一个临时草稿纸，亦可以把他作为一个 ob 内部的便签，这是一个缓存文件，你输入到里面的数据不会保存到实际文件中，完美解决了这个问题。

> [!Note] 插件名片
> - 插件名称：Cache-Area
> - 插件作者：Boninall
> - 插件说明：自动将链接变成卡片样式
> - 插件项目地址：[点我跳转](https://github.com/Quorafind/Obsidian-Cache-Area)

顺带一提，插件作者是社区的 Boninall 大佬。起因是大佬在群里问了下：“有没有什么插件，可以在 ob 中新建笔记的时候不要直接保存到文件中，而是缓存，后边丢了就丢了，类似于白纸（参考 emeditor）”，然后 “我在想找不到就写一个了“、”我主要是连文件产生的这个行为都不希望有”、“会出现历史记录污染”。于是两天后，Cache-Area 应运而生。

## 使用

你输入到编辑器里面的数据不会保存到实际文件中，当你按 `Ctrl+s` 的时候才会实际弹出窗口让你保存，你只要关掉页面就这辈子都找不到了（当然可以从 localstorage 里面找找试试看，在关闭之前也会有提示是否需要保存）

### 方式一：借助命令面板

ctrl + p 打开命令面板，搜索 cache，选择 Create new cache area

![1701657552540.png](https://cdn.pkmer.cn/images/1701657552540.png!pkmer)

### 方式二：借助快捷键

在==设置 -> 快捷键==中搜索 cache-area，就可以看到插件提供的五个快捷键。给 Cache Area: Create new cache area 设置一个你习惯的快捷键即可。由于我平常不用 ctrl + n 新建文件，因此我把 ctrl + n 快捷键设置于生成这个电子草稿纸。

![Pasted image 20231204103802.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231204103802.png!pkmer)

其他的几个选项也可以设置快捷键，他们的功能分别为

|                  功能                   |                                              作用                                              |
|:---------------------------------------:|:----------------------------------------------------------------------------------------------:|
|            Clear all history            |  清除所有历史记录。你在 cache 编辑器中输入的内容会记录到缓存里面，这个功能可以清楚缓存记录。   |
|      Copy all history to clipboard      |                                 把所有缓存记录都复制到剪切板中                                 |
|  Create new cache area from clipboard   |                   生成缓存文件，并且把你剪切板中的内容粘贴进 cache 编辑器中                    |
| Create new cache area from current file | 有点像为文件生成副本，但是这个副本又不会生成文件，而是以缓存的形式存在，你可以自由编辑这个副本 |

另外，本作者 Boninall 历时数月完成的另一款插件 Thino 正在 Pkmer 内测，走过路过不要错过。[Thino](https://pkmer.cn/products/productDetails/)。文末的==更新进展==处可以查看插件的具体功能以及使用方法。
