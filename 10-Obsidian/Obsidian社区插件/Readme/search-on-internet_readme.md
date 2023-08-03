---
uid: 2023080322263075
title: Obsidian 插件：【Readme】Search on Internet
tags: ['搜索/排序', 'obsidian插件', 'readme']
description: 添加右键菜单，你可以针对圈选笔记文本，进行网络搜索。并且你可以使用自定义搜索引擎。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Search on Internet

> [!Note] 插件名片
> - 插件名称：Search on Internet
> - 插件作者：Emile
> - 插件说明：添加右键菜单，你可以针对圈选笔记文本，进行网络搜索。并且你可以使用自定义搜索引擎。
> - 插件分类：['搜索/排序', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/HEmile/obsidian-search-on-internet)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?search-on-internet)

## 概述

添加右键菜单，你可以针对圈选笔记文本，进行网络搜索。并且你可以使用自定义搜索引擎。

![Search on Internet](https://cdn.pkmer.cn/covers/search-on-internet.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/README.md)
> 

---

## Readme(翻译）

下面是 [[search-on-internet]] 插件的自述翻译


<p align="left">
    <a href="https://github.com/HEmile/obsidian-search-on-internet/releases">
        <img src="https://img.shields.io/github/downloads/HEmile/obsidian-search-on-internet/total.svg"
            alt="下载次数" width="110"></a> 
    <a href="https://github.com/HEmile/obsidian-search-on-internet/releases">
        <img src="https://img.shields.io/github/v/release/HEmile/obsidian-search-on-internet"
            alt="Github最新发布版本" width="100"></a>
   <a href="https://publish.obsidian.md/semantic-obsidian/Search+on+Internet+Plugin">
        <img src="https://img.shields.io/badge/docs-Obsidian-blue"
            alt="文档" width="100"></a>
    <a href="https://discord.gg/sAmSGpaPgM">
        <img src="https://img.shields.io/discord/794500624163143720?logo=discord"
            alt="在Discord上聊天" width="120"></a>
</p>

警告：右键菜单在最新的Obsidian版本中存在问题，因此此插件将无法正常工作！
## 在互联网上搜索
添加了在外部网站上搜索选定文本的选项，如Google和维基百科。
搜索在Obsidian中的iframe中打开。您可以添加自己的网站！

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/context_iframe.gif)

它还将搜索选项添加到文件上下文菜单中，以根据笔记标题进行搜索。
您还可以选择在默认浏览器中而不是Obsidian中打开搜索。

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/demo.gif)

您还可以右键单击内部链接以对该链接进行搜索：

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/internal_link.png)

对于外部链接也是如此：

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/external_link.png)

### 设置
注意：您需要安装最新的Obsidian v0.10.11才能使用此插件！

默认情况下，该插件带有对Google和Wikipedia的搜索功能。
您可以在设置中添加自己的网站进行搜索。

![](https://raw.githubusercontent.com/HEmile/obsidian-search-on-internet/master/resources/img.png)

对于每个网站，请填写以下三个字段：
- 名称：搜索的名称。这将显示在搜索栏和上下文菜单中。
- URL：要打开的URL。`{{title}}`将被当前笔记的标题替换。这将用作“查询”。
- 标签（可选）：用于在笔记上显示搜索选项的标签列表。
  在示例截图中，这用于仅在标记有`#actor`、`#movie`或`#director`（荷兰语）的笔记上添加IMDB搜索。

您还可以禁用iframe搜索，并在浏览器中打开搜索。

### 贡献者
- [nhaouari](https://github.com/nhaouari) 添加了不进行编码的设置，并开始处理在iframe中打开外部链接的工作。

### 鸣谢
设置代码主要来自 [Templater 插件](https://github.com/SilentVoid13/Templater) 由 [SilentVoid13](https://github.com/SilentVoid13) 开发。

模态框代码受到 [Citation 插件](https://github.com/hans/obsidian-citation-plugin/blob/master/src/modals.ts) 的启发。



