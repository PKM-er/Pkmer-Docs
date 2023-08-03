---
uid: 2023080322273427
title: Obsidian 插件：【Readme】Surfing
tags: ['obsidian插件', 'readme']
description: 在黑曜石上网络冲浪
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Surfing

> [!Note] 插件名片
> - 插件名称：Surfing
> - 插件作者：Boninall
> - 插件说明：在黑曜石上网络冲浪
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/PKM-er/Obsidian-Surfing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?surfing)

## 概述

在黑曜石上网络冲浪

![Surfing](https://cdn.pkmer.cn/covers/surfing.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/PKM-er/Obsidian-Surfing/main/README.md)
> 

---

## Readme(翻译）

下面是 [[surfing]] 插件的自述翻译


## 冲浪

[中文文档](README-ZH.md) ｜ [英文文档](README.md)

## 简介

这是一个 Obsidian 插件，允许你在 Obsidian 中使用 v1.0 标签浏览网页。

该插件的核心功能是渲染网页视图，受到了 Ellpeck 的 Obsidian Custom Frames 插件的很大影响，没有它，这个插件就不可能存在。

![](assets/obsidian-web-browser.png)

## 待办事项

- [ ] 支持扩展
- [ ] 支持自定义 CSS
- [ ] 支持自定义 JS

## 功能

- 核心功能
	- 浏览任意网页：该插件劫持 Obsidian 的文件、http、https 协议，使得链接可以直接在 Obsidian 中打开，而不是在外部浏览器中打开。是的，本地的 HTML 和其他资源也被支持。
	- 编辑器中的网页搜索：您可以在编辑器中选择关键词，然后右键点击以在网页浏览器中打开并使用默认搜索引擎进行搜索。
	- 页面内网页搜索：同样，您可以在网页中右键点击以使用默认搜索引擎进行搜索。
	- 复制指向高亮的链接：与浏览器一样，您可以选择文本并复制指向它的链接。
	- 在浏览器中使用书签工具打开 URL。
	- 复制视频时间戳（实验性功能：目前仅支持哔哩哔哩）：右键点击文本弹出菜单以复制时间戳，目前存在一些错误，已知有时菜单不会弹出。
- 辅助功能
	- 使用外部浏览器打开当前 URL：右键菜单
	- 默认搜索引擎：设置项
	- 默认复制高亮模板：设置项（目前仅支持非常简单的模板），请避免使用一些特殊字符
	- 支持浏览历史记录：在页面之间来回跳转
	- 清除浏览历史记录：命令面板
	- 所有链接在右侧的同一面板中打开：设置
	- 切换是否在右侧的同一面板中打开：命令面板
	- 简单的暗黑模式：非常简单

使用方法

使用BookmarkLets打开URL

该插件注册了一个Obsidian URI协议，允许您使用URL `obsidian://web-open?url=<url>`在Obsidian中打开eb-broswer。其中`<url>`指的是网址链接。
匹配的[bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet)可以通过在浏览器中点击书签来在Obsidain中打开当前浏览器的URL。

1. 在插件设置中打开`Open URL In Obsidian Web`选项。
2. 在此选项下有一个bookmarklets的链接，将此链接拖到浏览器的书签栏中。您也可以点击此链接（将复制bookmarklets代码），然后自己创建bookmarklets。
3. 现在您可以点击书签，在Obsidian中打开您浏览器的当前页面。

### 在Surfing中使用Quickadd在ChatGPT中搜索选定的内容

1. 基于这个脚本创建一个宏：[search-in-surfing](https://gist.github.com/Quorafind/c70c6c698feeed66465d59efc39e4e1c)
2. 在Surfing中打开ChatGPT，并选择一些文本，然后运行该宏。

## 安装

- 尚未准备好上市
- 可以通过[Brat](https://github.com/TfTHacker/obsidian42-brat)插件进行安装
- 手动安装

1. 在此github页面上找到发布页面并点击
2. 下载最新的发布zip文件
3. 解压缩文件，将解压后的文件夹复制到Obsidian插件文件夹中，确保文件夹中有main.js和manifest.json文件
4. 重新启动Obsidian（如果不重新启动，您必须刷新插件列表），在设置界面中启用插件
5. 完成！

## 贡献

- [Windily-cloud(皮皮)](https://github.com/windily-cloud) - 中文翻译 && 功能

## 支持

如果您喜欢这个插件，请通过在[https://www.buymeacoffee.com/boninall](https://www.buymeacoffee.com/boninall)上给我买杯咖啡来支持我的工作和热情。





