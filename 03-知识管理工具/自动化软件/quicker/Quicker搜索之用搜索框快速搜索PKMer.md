---
uid: 20231210160219
title: Quicker 搜索之用搜索框快速搜索 PKMer
tags: [Quicker, 查询, 第三方软件]
description: 用 Quicker 的搜索框，实现快速搜索 PKMer 的操作。
author: ImmortalSty
type: other
draft: false
editable: true
modified: 20231220115721
---

# Quicker 搜索之用搜索框快速搜索 PKMer

> [!note]+ 前言
>
> Quicker 有一个名为**搜索框**的功能，非常实用，但却少有人用，本文将介绍如何使用搜索框，更快捷的搜索 PKMer 网站。

## 操作方法

### 搜索引擎设置

1. 进入 Quicker 的设置中，找到**搜索**页面：
   ![](https://cdn.pkmer.cn/images/202312201156977.png!pkmer)
2. 通过点击右边三个点，打开**网络搜索**功能，并添加搜索引擎：
   ![](https://cdn.pkmer.cn/images/202312201156978.png!pkmer)
3. 按下图填入：
   ![](https://cdn.pkmer.cn/images/202312201156979.png!pkmer)

### 搜索框触发设置

可以直接在下图中设上快捷键：

![](https://cdn.pkmer.cn/images/202312201156980.png!pkmer)

也可以用其它方法触发，比如双击 Ctrl：

![](https://cdn.pkmer.cn/images/202312201156981.png!pkmer)

### 使用方法

通过上面设好的方法，触发唤出搜索框，在其中输入 `pkmer 关键字`，然后回车，就会快速打开网站搜索。

![](https://cdn.pkmer.cn/images/202312201156982.png!pkmer)

![](https://cdn.pkmer.cn/images/202312201156983.png!pkmer)

这种搜索方法可以省去找网站、等待浏览器打开的时间，直接一步到位，得到搜索结果。

## 原理

仔细看网址，你会发现网址是 `https://pkmer.cn/search/?key=熊猫别熬夜`，而我搜索用的关键字正是 `熊猫别熬夜`。换而言之，只要打开 `https://pkmer.cn/search/?key=关键字` 这种类型的网址，就会自动用关键字在 PKMer 中搜索。

Quicker 的这个功能，我最开始是用来搜索谷歌、百度那些的，但最近突发奇想：如果 PKMer 也能用这种搜索，那岂不是超爽？

于是我就超爽了。

一开始我以为 PKMer 搞不了这个操作，因为在 PKMer 官网搜的时候网址是没变化的。直到群里的大佬 cuman 告诉我“支持的，传 key”，我才知道原来 PKMer 还有这个界面，于是也就有了本文。