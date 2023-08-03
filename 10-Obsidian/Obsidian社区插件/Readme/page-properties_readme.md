---
uid: 2023080322242503
title: Obsidian 插件：【Readme】Page Properties
tags: ['obsidian插件', 'readme']
description: 添加类似于Logseq的页面属性。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Page Properties

> [!Note] 插件名片
> - 插件名称：Page Properties
> - 插件作者：Anton Bualkh
> - 插件说明：添加类似于Logseq的页面属性。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/necauqua/obsidian-page-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?page-properties)

## 概述

添加类似于Logseq的页面属性。

![Page Properties](https://cdn.pkmer.cn/covers/page-properties.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/necauqua/obsidian-page-properties/main/README.md)
> 

---

## Readme(翻译）

下面是 [[page-properties]] 插件的自述翻译


# Obsidian页面属性

这是一个为[Obsidian](https://obsidian.md)设计的插件，它添加了类似于Logseq中的页面属性。

![demo-1.png](https://user-images.githubusercontent.com/33968278/226478801-b8e9122d-78ff-4b1b-b4c0-6c6d25d57e9e.png)
![demo-2.png](https://user-images.githubusercontent.com/33968278/226478803-4ca621ba-cdce-4bd9-a408-4214d869f98d.png)

它的主要功能有两个：
- 为[Dataview](https://github.com/blacksmithgu/obsidian-dataview)中的整行内联字段添加漂亮的标签样式 - 注意，虽然Dataview不是依赖项，但没有它它们并不那么有用。
- 将字段名称转换为内部链接 - 这是Logseq中的一个可爱的小功能。

Logseq中*缺少*的另外两个功能是：
- 对于某些字段，值会按照指定的模式转换为链接 - 这是可配置的。
	- 当标签已经描述了主机应该是什么时，这非常有用，例如相关的GitHub存储库或维基页面 - 您只需设置用户名/存储库部分或维基页面名称，而不是完整链接。
	- 与[Surfing](https://obsidian.md/plugins?id=surfing)插件非常搭配 :)
- 一些字段可以在阅读视图中隐藏 - 也是可配置的。

## 安装
- 它在[Obsidian插件市场](https://obsidian.md/plugins?id=page-properties)上。
- 您可以使用[Brat](https://github.com/TfTHacker/obsidian42-brat)插件。
- 您可以从[发布页面](https://github.com/necauqua/obsidian-page-properties/releases)手动下载`main.js`、`styles.css`和`manifest.json`文件，并将它们放入`$VAULT/.obsidian/plugins/page-properties`文件夹中。
- 对于Nix用户，您也可以这样做：
```bash
nix profile install github:necauqua/obsidian-page-properties
ln -s ~/.nix-profile/share/obsidian/plugins/page-properties $VAULT/.obsidian/plugins/page-properties
```



