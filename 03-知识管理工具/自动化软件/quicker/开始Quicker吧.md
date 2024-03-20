---
uid: 20231202230700
title: 开始 Quicker 吧
tags: [Quicker, 教程, 编程]
description: 本文将从三个方面介绍 Quicker 的功能，并给大家推荐一些好用的、可以与 Obsidian 搭配使用的 Quicker 动作。
author: ImmortalSty
type: awesome
draft: false
editable: true
modified: 20240105203946
---

# 开始 Quicker 吧

[Quicker](https://getquicker.net/) 是一个效率软件，至于啥是效率软件……这不重要。

他有很多的功能，其中包括 [剪贴板](https://getquicker.net/Sharedaction?code=9ec53d43-5539-4571-6886-08d8c752bfcb)、[截图OCR](https://getquicker.net/Sharedaction?code=ba82e11a-f845-4ca3-44ee-08d690b5076c)、[翻译](https://getquicker.net/Sharedaction?code=04393db9-f4bc-4871-7fb6-08db2506d1ed)……但这些都不是本文想说的重点。

本文将从**三个方面**简单介绍 Quicker 到底有多强大，以及该如何用 Quicker 来与笔记软件结合使用。

## 简单介绍

虽然很想直接开讲，但考虑到不少朋友从未接触过此类软件，还是先简单介绍一下 Quicker 吧。

新安装的 Quicker 启动后，需要先**注册登录**，成功后，可用**鼠标中键**唤出一个面板，这就是动作面板。

![Pasted image 20231204183231.png](https://cdn.pkmer.cn/images/202312092351994.png!pkmer)

动作面板上有很多**大按钮**，每个大按钮的功能都可以看作一个单独的软件，我们将其称之为**“动作”**，点击即可运行。

有的按钮上是空着的，我们可以在 [动作库](https://getquicker.net/Share/Recommended) 中查找需要的动作，并安装到空的按钮上。同理，如果有些动作不需要了，也可以**右键删除**，节省空间。

![Pasted image 20231204183439.png](https://cdn.pkmer.cn/images/202312092352588.png!pkmer)

如有特殊需求，在动作库找不到能实现的动作，还可以自己学着写一个动作。不要怛心，这并不难，**比编程简单多了**。

接下来，我们将从三个角度来了解 Quicker 的主要功能。

## Quicker 的三大要素

### 模块

看到这个词了不？没学过编程的朋友不要怕，Quicker 提供的模块是已经封装好了的，大多只要**用鼠标点点点就可以使用**。

现在，**右键**动作面板**空白按钮**处，点击“新建组合动作”。在打开的新窗口的**左侧**，我们可以的到有很多好用的模块，比如截图、OCR、翻译、模拟按键、获取日期……

![Pasted image 20231204183810.png](https://cdn.pkmer.cn/images/202312092352467.png!pkmer)

再次强调，**不用太担心它的难度**，大多复杂、看不慬的模块你们都用不上，只要了解其中部分即可（我到现在还有不少不会用的模块）。

想要学习如何使用这个模块，可以点击每个模块右侧的ℹ，跳转到 Quicker 的**在线文档**。这里面详细的介绍了每个模块的使用方法。

![Pasted image 20231204184016](https://cdn.pkmer.cn/images/202312092352207.png!pkmer)

对于未学习过编程的人，可以先把 [组合动作文档](https://getquicker.net/KC/Help) 中的**组合动作基础**看一遍。

### 流程

不要关闭“新建组合动作”的窗口，让我们看向它**正中间的一大片空白**，这里就是我们组装动作的地方。

一般来说，它会**从上往下**执行你拖进来的模块，但这样实现的功能就太过单一了，于是就有了一些特殊的模块：如果/否则、重复、跳出循环……

利用这些模块，我们可以组合出无尽的可能：

- 截图 +OCR[^1]+ 显示文本：提取屏幕上无法复制的文本；
- 获取选中的文本 + 翻译 + 显示文本：翻译选中的文本，并显示出来；
- 读取模板文件 + 模拟输入文本：快速输入模板内容；
- ……

以上只是最最最简单的应用，想要学习更多有意思的组合，可以右键大佬们的动作，点击编辑，进入查看大佬们是怎样组合模块成为动作的。

### 触发

问题来了，想要的功能太多，在面板上一个个找又太慢，怎样才能更快速、更方便的使用这些动作呢？

点击鼠标中键唤出面板，在面板的左上角，我们能看到一个小小的齿轮，点击它进入设置。随后找到最左侧的一个三角形、正方形、圆形堆在一起的图案，点击它。

这里有着所有触发动作的方式：

- **鼠标手势**、**轮盘菜单**，画条线就能触发；
- **搜索框**、**快捷键**，键盘党的最爱；
- **自动运行动作**、**事件触发**，全自动高效运行动作；
- ……

![Pasted image 20231204184132](https://cdn.pkmer.cn/images/202312092352135.png!pkmer)

只有你想不到，没有它做不到。

## 用于学习的简单动作实例

说完了功能，有兴趣的不妨自己试一试，跟着下例的步聚，一步步走，实现几个比较简单但很实用的操作。

- [[./Quicker 简单实例/Quicker动作之截图贴图|动作实例 1：截图贴图]]。

## 与笔记软件的联合使用

- [[表格操作占用快捷键过多的解决方案]]：ImmortalSty；
- [[Quicker动作之以PotPlayer为基础的视频时间戳]]：ImmortalSty；
- [[Quicker动作之自定义Zotero标注到Obsidian]]：熊猫别熬夜；
- [[Quicker动作之BookxNote和Obsidian联动]]：熊猫别熬夜;
- [[Quicker动作之发送Zotero图片标注至Eagle素材库]]：熊猫别熬夜;
- [[Quicker动作之截图贴图]]
- [[使用 Quicker 与 Thino 进行联动
- [[Quicker搜索之用搜索框快速搜索PKMer]]


## 动作作者推荐

以下是我随手写的，主要好作者太多了，写太多不方便，我懒。

- [CL](https://getquicker.net/User/Actions/3-CL)：Quicker 官方作者；
- [darcyc](https://getquicker.net/User/Actions/95689-darcyc)：又称“地球”，写了许多示例动作，供大家学习，Mac 版 Quicker 的作者；
- [Cea](https://getquicker.net/User/Actions/113342-Cea)：Quicker 知名大佬；
- [李考凡](https://getquicker.net/User/Actions/478204-%E6%9D%8E%E8%80%83%E5%87%A1)：为 Obsidian 写了许多好用的动作；
- [ImmortalSty](https://getquicker.net/User/Actions/514368-ImmortalSty)：我就臭不要脸的把自己放进来啦；

[^1]: OCR 就是从图片中提取文本