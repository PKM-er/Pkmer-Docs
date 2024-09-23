---
uid: 20240914151909
title: Logseq 笔记软件介绍
tags: [Logseq, 笔记软件]
description: Logseq 笔记软件介绍
author: '1080'
type: other
draft: false
editable: false
modified: 20240923083058
---

# Logseq 笔记软件介绍

## 引言

在这个信息爆炸的时代，如何有效地整理与利用我们所接触的知识成为了一个重要议题。

无论是学生、研究人员还是职场人士，每个人都需要一种高效的方式来捕捉灵感、整理思路以及管理个人知识资产。

Logseq——作为一个基于本地存储和个人隐私保护的个人知识管理系统，为寻求灵活且强大笔记工具的人们提供了一个理想的选择。

它不仅借鉴了双向链接的思想，使笔记之间能够建立深层次的联系，而且还是一个开源项目，这意味着它的灵活性和可定制性达到了新的高度。

本文旨在为初次接触 Logseq 的朋友提供一份详尽的指南，帮助大家快速上手，体验 Logseq 带来的高效与便捷，让我们的思想与知识在互联中绽放光彩。

- [Logseq 官网](http://Logseq.com)
- [Logseq GitHub 网址](http://github.com/Logseq/Logseq)
- [Logseq 官方中文论坛](http://cn.Logseq.com)
- [Logseq 官方路线图](http://trello.com/b/8txSM12G/roadmap)
- [Logseq 数据库版线上体验](https://test.Logseq.com/)

**注：由于 Logseq 正在开发数据库版，所以本教程只介绍数据库版与 md 版共同的特点 (2024.9.13)**

**该教程是根据 md 版撰写**

**版本号小于等于 0.10.9 为 md 版**

**版本号大于等于 0.10.10 为数据库版**

## 特点

- 双向链接
- 日程规划
- 每日日记
- 数据控制

## 安装

### 安装与配置

你可以在 [GitHub 仓库](https://github.com/Logseq/Logseq/releases) 中找到安装包，官方提供了 Windows、macOS、Linux、Android 全平台的安装包（iOS 可以在 AppStore 下载），我这里在 Windows 下演示（Logseq 有一个 Nightly 版本，不建议下 Nightly 版本，建议下 Beat Testing 版本）

![图一.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E4%B8%80.png!pkmer)

找到你所需的安装包，下载安装

下载之后打开会出现这个界面

![图三.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E4%B8%89.png!pkmer)

点击这里，添加新的笔记库

![图四.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%9B%9B.png!pkmer)

添加完之后就是这样

![图五.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E4%BA%94.png!pkmer)

可以看见，首页是 `Seq 13th, 2024`，这就是 `journal`，作为中国人，我们不习惯这种叫法，所以我们修改一下

![图六.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%85%AD.png!pkmer)

![图七.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E4%B8%83.png!pkmer)

![图八.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%85%AB.png!pkmer)

修改成 YYYY-MM—DD 样式的

![图九.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E4%B9%9D.png!pkmer)

ok，快速入门指南就配置好了

## 使用

### 双向链接

Logseq 也是一个双向链接的笔记软件，双向链接可以帮助你更好的组织笔记，在 Logseq 中，通过 `[[]]` 来链接笔记，而且，在 Logseq 中，链接的粒度可以小到 “块”

在 Logseq 中 `[[]]` 可以创建笔记，也可以搜索笔记

正如前面提到的，在 Logseq 中，块可以是页面，页面也可以是块，所以 Logseq 的双向链接可以链接 “块与页面” “块与块” “页面与页面”，你可以在每篇笔记底部查看反链

![图十二.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81%E4%BA%8C.png!pkmer)

### 日程规划

你可以在笔记使用 `TODO` 来创建待办任务，点击 `TODO` 可以转换任务状态，有 `TODO` `DIONG` `DONE` 三种状态，在 md 版中，你所创建的任务会出现在每日日记的下方，时时提醒你

### 每日日记

Logseq 会每天自动创建一个 `journal`，也就是每日日记，默认是首页，每天打开 Logseq 都是一篇新的日记，可以做到打开即写，无压记录

### 数据控制

Logseq 是一个注重隐私、本地化的笔记软件，你可以把笔记放到任何你想要放的地方

以上四点是 Logseq 官网提到的四个特点，除此之外，Logseq 还有 git(md 版独有)、PDF 批注、白板、Query 查询、宏命令、文字补全等功能

附常用快捷键

|     快捷键      |         功能         |
| :----------: | :----------------: |
| Ctrl+Shift+P |       打开命令面板       |
|    Ctrl+K    |      搜索/创建页面       |
|    连按两次 t    |      切换浅色深色模式      |
|      回车      |        创建新块        |
|     Tab      |        缩进块         |
|  Shift+Tab   |       取消缩进块        |
|     t w      |       切换宽屏模式       |
|     g a      |        全部页面        |
|     g h      |         首页         |
|     g g      |        图谱视角        |
|     t d      | 切换文档模式（也就是隐藏块前的小点） |

### 创建页面

Logseq 中创建页面有两种，一种是快捷键 `Ctrl+K`，一种是用 `[[]]` 创建

Ctrl+K 呼出面板，输入名字就可以创建新页面，Logseq 没有文件夹概念，所以你无需关注新建的页面在哪儿，另一种是在页面中用 `[[]]` 创建

Logseq 有两个默认页面 `contents` 和 `Favorites`

因为 Logseq 没有文件夹概念，但如果你想分类笔记的话，可以在 `contents` 中这样记录

![图十.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81.png!pkmer)

也算是文件夹管理吧

`Favorites` 页面，正如它的名字，这是收藏页面，但我有一点想不懂，左侧栏的收藏页面和这个页面不是同一个，它是两个收藏，你得自己往 `Favorites` 里加收藏的笔记

### 块与页面

Logseq 有一个很重要的概念——块，在 Logseq 中，一个小点就是一个块，回车创建新块，你可以点击小点进入聚焦模式，这时你就会觉得，这个块是不是和页面非常像？没错，在 Logseq 中，块可以是页面，页面也可以是块，这就是 Logseq 的哲学，无文件夹管理、模糊页面与块的边界，主打一个无压记笔记

![图十一.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81%E4%B8%80.png!pkmer)

你还可以右键点击小点，它还提供了更多功能

### 白板

你可以在白板页面中新建白板

![图十三.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81%E4%B8%89.png!pkmer)

你可以通过右侧的几个选项在白板中建立元素，从上到下可以通过数字快捷键快速切换，Logseq 的白板可以搜索/创建块和页面，你可以在白板中引用页面/块并编辑它

![图十四.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81%E5%9B%9B.png!pkmer)

![图十五.png|800](https://cdn.pkmer.cn/images/%E5%9B%BE%E5%8D%81%E4%BA%94.png!pkmer)
