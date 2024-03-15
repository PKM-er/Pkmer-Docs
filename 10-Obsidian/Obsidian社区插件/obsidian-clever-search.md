---
uid: 20240229104120
title: Obsidian 插件：Clever Search 最强模糊搜索插件之一
tags: [Quicker, 插件, obsidain, AI, 模糊搜索]
description: 插件 Clever Search 将支持语义搜索，该功能依赖外置 AI 引擎，本文用 Quicker 实现自动跟随 Obsidian 开启或关闭该引擎。
author: ImmortalSty
type: advanced
draft: false
editable: true
modified: 
---

# Obsidian 插件：Clever Search 最强模糊搜索插件之一

## 概述

> [!info]+ 插件名片
>
> - 插件名称：Clever Search
> - 插件作者：yan42685
> - 插件说明：模糊搜索、语义搜索库中文章
> - 插件项目地址：[点我跳转](https://github.com/yan42685/obsidian-clever-search/)

这是一位大佬为 Obsidian 写的搜索插件，相比起其它同类插件有以下优势：

## 对中文更友好

众所周知，Obsidian 自带的搜索功能会被 Markdown 语法干扰，用关键词“笔记软件”是搜索不到内容“\*\* 笔记\*\* 软件”的。之前只有 Omnisearch 等插件支持自动分词，以解决该问题，但作者毕竟是国外友人，中文搜索结果依然不尽人意。

而本插件作者是国人，他使用更优的中文分词方法，成功解决了该问题。

## 搜索速度极快

相比起其它搜索插件和自带的搜索功能，本插件搜索极快，且同时支持全库搜索和当前文件搜索。

随着使用，Obsidian 库的体量会越来越大，几百万字都非常正常。这时如果用自带的搜索功能进行搜索，在输入搜索内容后还需要再等一小会儿才能看到结果。但如果使用 Clever Search 插件，搜索结果将几乎是实时显示的。

## 语义搜索

个人认为这是该插件的最大亮点。开启后，能输入“**电脑**”搜索到“**计算机**”、“**computer**”等词，还能输入**一段描述某个词的句子**，来搜索**该词**。

语义搜索依赖于外部的 AI 引擎，需要另行下载。操作方法如下：

1. 打开 Clever Search 插件设置；
2. 点击“语义搜索”右侧的“管理”；
3. 启用该功能；
4. 点击“下载”按钮；
5. 下载完成后，会弹出两个文件资源管理器（文件夹）页面；
6. 一个里面有一个名为 `clever-search-ai-helper.zip` 的压缩包，将其解压到另一个文件夹中；
7. 进入刚解压出来的 `.cache` 文件夹中；
8. 双击运行 `clever-search-ai-helper` 文件；
9. 等待第一次索引；
10. 完成。

每次使用语义搜索时，都要手动运行 `clever-search-ai-helper` 文件，来开启语义搜索 AI 引擎，不是很方便。所以本文下面将介绍，如何使用软件 [Quicker](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AF%E4%BB%B6/quicker/%E5%BC%80%E5%A7%8Bquicker%E5%90%A7/) 来实现 AI 引擎全自动跟随 Obsidian 开启或关闭。

## Clever 跟随开启/关闭

> [!info]+ Quicker 动作
>
> - [Obsidian 库](https://getquicker.net/Sharedaction?code=8d0550f1-c378-4cce-190d-08daa2ecb1a4)；
> - [Clever 全自动](https://getquicker.net/Sharedaction?code=15ba7374-5786-483f-ec5b-08dc3811d02e)。

上述动作中，“Obsidian 库”用于搜索并打开指定的 Obsidian 库，如果只有一个库，就会直接打开那个库；“Clever 全自动”则用于在 Obsidian 启动/关闭时，自动启动/关闭 Clever Search 的语义搜索引擎。

动作在开启/关闭 AI 引擎时会进行提示。如果不想要提示，可在动作“Clever 全自动”中，右键动作取消提示。

### 自动开启配置

要搭配动作“Obsidian 库”的前置项目功能使用。

右键编辑“Obsidian 库”的前置项目，在“项目命令”中填入 `15ba7374-5786-483f-ec5b-08dc3811d02e?open` 即可，“项目名”可以随便起。

打开 Obsidian 要使用“Obsidian 库”这个动作，不要直接打开 Obsidian。

如果有其它用于打开 Obsidian 的动作，能同样支持前置项目，或自己会写动作，那就直接用其它动作以参数 `open` 调用本动作，也能实现自启动的操作。

### 自动关闭配置

![](https://files.getquicker.net/_sitefiles/kb/sharedaction/15ba7374-5786-483f-ec5b-08dc3811d02e/2024/02/28/211005_514368_20240228_205104_910_copy.png)

按上图顺序，依次设置。

1. “事件类型”中选择“进程退出”；
2. “进程名（必填）”中填入 `Obsidian`；
3. “运行动作”中填入 `15ba7374-5786-483f-ec5b-08dc3811d02e`；
4. “动作参数中填入 `close`；
5. 节流阈中填入 100；
6. 廷迟执行时间中填入 10。

完成后点击“保存”和“应用设置”即可。