---
uid: 20240312193744
title: Obsidian 插件：【Readme】Markdown Media Card
tags: ['obsidian插件', 'readme']
description: 在Markdown中插入媒体信息卡，如书籍、音乐、电影等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown Media Card

> [!Note] 插件名片
> - 插件名称：Markdown Media Card
> - 插件作者：Zhou Hua
> - 插件说明：在 Markdown 中插入媒体信息卡，如书籍、音乐、电影等。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zhouhua/obsidian-markdown-media-card)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-media-card)

## 概述

在 Markdown 中插入媒体信息卡，如书籍、音乐、电影等。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhouhua/obsidian-markdown-media-card/master/README.md)

---

## Readme(翻译）

下面是 [[markdown-media-card]] 插件的自述翻译

# 黑曜石 Markdown 媒体卡片插件

![GitHub 发布版本](https://img.shields.io/github/v/release/zhouhua/obsidian-markdown-media-card?include_prereleases&style=flat) ![GitHub 下载量（所有资源，所有版本）](https://img.shields.io/github/downloads/zhouhua/obsidian-markdown-media-card/total?style=flat)

## 关于

这是一个用于 Obsidian 的插件，允许您在 Markdown 中插入媒体信息卡，如豆瓣图书、音乐、电影等。

这个项目受到了 [hexo-douban-card](https://github.com/TankNee/hexo-douban-card) 的启发，并参考了卡片样式的设计和实现。然而，它没有获取豆瓣信息的能力。相反，它允许用户自由配置卡片上显示的内容，这些内容可以与豆瓣完全无关。

这个 Obsidian 插件是 [Remark Media Card](https://github.com/zhouhua/remark-media-card) 的一个包装器。更多信息请参考 [Remark Media Card](https://github.com/zhouhua/remark-media-card)。

## 安装

在社区插件中搜索“Markdown Media Card”。

## Examples

<div align="cneter"><img src="./screenshots/book.png" width="677" /></div>

````
```media-card
type: book
url: https://book.douban.com/subject/35984787/
title: Blindness Chronicles
cover: https://img3.doubanio.com/view/subject/s/public/s34269503.jpg
publishDate: 2022-08-27
author: 若泽·萨拉马戈
rating: 9.1
width: 600
introduction: |-
  街上出现了第一个突然失明的人，紧接着是第二个、第三个……
  一种会传染的失明症在城市蔓延，无人知晓疫情为何爆发、何时结束。
  失明症造成了前所未有的恐慌与灾难，一批又一批感染者被集中隔离。
  食物短缺，组织崩溃，文明与尊严变得不堪一击。
  人们逐渐剥离道德的外衣，陷入比失明更绝望的苦难境地。
  在这些人中，只有一个女人还能看见。
  她的眼睛，是这个疯狂的世界里唯一尚存的理智。
```
````

---

<div align="cneter"><img src="./screenshots/music.png" width="677" /></div>

````
```media-card
type: music
url: https://music.163.com/#/song?id=19292984
title: Love Story
cover: https://p1.music.126.net/GZERNplXUdzTPkKqo2F4tA==/109951169217536854.jpg
artist: Taylor Swift
width: 600
```
````

---

<div align="cneter"><img src="./screenshots/movie.png" width="677" /></div>

````
```media-card
type: movie
url: https://movie.douban.com/subject/35267208/
title: 流浪地球2
cover: https://img9.doubanio.com/view/photo/s/public/p2885842436.jpg
director: 郭帆
actors: 吴京 / 刘德华 / 李雪健 / 沙溢 / 宁理
publishDate: 2023-01-22
rating: 8.3
introduction: |-
  在并不遥远的未来，太阳急速衰老与膨胀，再过几百年整个太阳系将被它吞噬毁灭。为了应对这场史无前例的危机，地球各国放下芥蒂，成立联合政府，试图寻找人类存续的出路。通过摸索与考量，最终推着地球逃出太阳系的“移山计划”获得压倒性胜利。人们着手建造上万台巨大的行星发动机，带着地球踏上漫漫征程。满腔赤诚的刘培强（吴京 饰）和韩朵朵（王智 饰）历经层层考验成为航天员大队的一员，并由此相知相恋。但是漫漫征途的前方，仿佛有一股神秘的力量不断破坏者人类的自救计划。看似渺小的刘培强、量子科学家图恒宇（刘德华 饰）、联合政府中国代表周喆直（李雪健 饰）以及无数平凡的地球人，构成了这项伟大计划的重要一环……
width: 600
```
````

## 用法

### Markdown 语法

例如，在这个示例中：

````
```media-card
type: music
url: https://music.163.com/#/song?id=19292984
title: Love Story
cover: https://p1.music.126.net/GZERNplXUdzTPkKqo2F4tA==/109951169217536854.jpg
artist: Taylor Swift
width: 600
```
````

我们扩展了 markdown 代码块语法，将 `media-card` 定义为媒体信息卡的标识符，然后在代码块中以 [yaml](https://yaml.org/) 格式输入卡片信息。有关可以在 YAML 中配置的参数的详细信息，请参阅 [Parameters](#Parameters)。

## 参数

| 参数         | 必填     |  类型   | 描述                                                                                                                               |
| ------------ | :------: | :----: | ---------------------------------------------------------------------------------------------------------------------------------- |
| type         |   是     | string | 类型，目前支持 `movie`, `music`, `book`                                                                                           |
| url          |    否    | string | 卡片跳转链接，例如，豆瓣介绍页面或音乐播放页面。如果未设置，点击卡片不会跳转                                                     |
| title        |   是     | string | 媒体名称（书名、音乐名、电影名等）                                                                                               |
| cover        |   是     | string | 封面图片                                                                                                                           |
| introduction |    否    | string | 简介，可以是多行文本，但卡片上只会显示前 3 行                                                                                      |
| width        |    否    | number | 卡片宽度（像素），如果未设置，默认为全宽                                                                                          |

此外，如果用户想要添加一些自定义信息，可以直接以 YAML 格式添加为 `key: value` 对（`value` 支持 HTML 标签）。除了上表中提到的参数之外的所有内容都将被呈现，例如：

````
```media-card
type: music
title: Love Story
cover: https://p1.music.126.net/GZERNplXUdzTPkKqo2F4tA==/109951169217536854.jpg
歌手: Taylor Swift
专辑: 
width: 600
```
````

呈现的结果如下所示：

<div align="cneter"><img src="./screenshots/custom.png" width="677" /></div>

`歌手` 和 `专辑` 是两个自定义字段，而 `专辑` 的值是一个链接，点击后将跳转到专辑页面。
