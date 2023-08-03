---
uid: 2023080322171701
title: Obsidian 插件：【Readme】Diagrams.net
tags: ['图表生成', 'obsidian插件', 'readme']
description: 在 Obsidian 中创建和编辑 Draw.io 图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Diagrams.net

> [!Note] 插件名片
> - 插件名称：Diagrams.net
> - 插件作者：Jens M Gleditsch
> - 插件说明：在 Obsidian 中创建和编辑 Draw.io 图表
> - 插件分类：['图表生成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jensmtg/obsidian-diagrams-net)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-diagrams-net)

## 概述

在 Obsidian 中创建和编辑 Draw.io 图表

![Diagrams.net](https://cdn.pkmer.cn/covers/obsidian-diagrams-net.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jensmtg/obsidian-diagrams-net/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-diagrams-net]] 插件的自述翻译


> **警告**
> 很遗憾地说，我无法找到时间来维护这个插件。因此，问题将不会被阅读。我可能会不时地合并拉取请求。如果你认为你可以维护这个插件，请与我联系。
# Obsidian Diagrams.Net

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jensmtg/obsidian-diagrams-net?style=for-the-badge&sort=semver)

这是一个为[Obsidian](https://obsidian.md/)设计的插件，用于插入和编辑[diagrams.net](https://diagrams.net/)（之前称为draw.io）的图表。它与[drawio-obsidian](https://github.com/zapthedingbat/drawio-obsidian)插件的区别在于它嵌入了diagrams.net在线编辑器，需要活动的互联网连接，但可以使用完整的功能集和所有形状库。

![2022-06-23-obsidian-diagrams-net](https://user-images.githubusercontent.com/6455628/175336757-4a458fb8-7367-4305-8829-4e333982550e.gif)

> ## ⚠️ **注意事项**
> 由于Obsidian本身的API正在开发中，所以该插件也在不断发展中。如果您使用该插件，有一些事项需要注意：
> 
> - 图表以单独的文件（``MyDiagram.svg.xml``）保存，与其图像表示（``MyDiagram.svg``）一起保存。（.xml文件可以直接在任何diagrams.net编辑器中打开。）
> - 在Obsidian中移动和重命名图表将同时对图表文件和图像文件进行操作。然而，由于Obsidian API中没有“复制”事件可供监听，复制图表意味着新图表将没有与之关联的图表文件，因此无法在编辑器中打开。
> - 如果需要复制图表，解决方法是手动复制和重命名图像和图表文件。

> ## 🐛 **已知问题**
> - 编辑图表不会更新活动编辑器中的图像，您需要强制重新加载或导航离开并返回以查看更新。



