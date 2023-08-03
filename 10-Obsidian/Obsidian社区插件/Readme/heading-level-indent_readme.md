---
uid: 2023080322193758
title: Obsidian 插件：【Readme】Heading Level Indent
tags: ['obsidian插件', 'readme']
description: 根据标题级别缩进内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Heading Level Indent

> [!Note] 插件名片
> - 插件名称：Heading Level Indent
> - 插件作者：svonjoi
> - 插件说明：根据标题级别缩进内容。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/svonjoi/obsidian-heading-level-indent)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?heading-level-indent)

## 概述

根据标题级别缩进内容。

![Heading Level Indent](https://cdn.pkmer.cn/covers/heading-level-indent.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/svonjoi/obsidian-heading-level-indent/master/README.md)
> 

---

## Readme(翻译）

下面是 [[heading-level-indent]] 插件的自述翻译


# 标题级别缩进

根据其级别缩进标题下的内容是一种视觉技巧，可以创建视觉层次结构，使得更容易理解文档的结构和组织，并有助于对特定结构部分进行**选择性关注**。

- 目前，仅在阅读视图中可用
- 您可以在插件设置中为每个标题的内容指定边距
- 此外，您可以使用附加到阅读视图中的每个呈现部分的类`data_h1/2/3/4/5/6`和`heading_h1/2/3/4/5/6`添加自定义CSS样式到标题及其内容中。

## 预览

![plugin_preview](https://user-images.githubusercontent.com/58810368/220870821-1d7adf75-d6c8-4f6e-9634-5f10b34cfe95.png)

## 安装

您可以在Obsidian设置的*社区插件*中下载。

## 注意事项

您可以使用自定义CSS来组合不同的标题缩进。例如，我喜欢将h1标题作为自定义居中格式的笔记标题，而将其他标题作为层次结构，每个标题都有不同的格式，以便产生更大的视觉差异：

此外，它还可以与“折叠标题”选项和[creases](https://github.com/liamcain/obsidian-creases)插件结合使用，将特定标题级别的折叠分配给快捷键。

配置：
- h1缩进：0
- h2缩进：60
- h3缩进：120
- h4缩进：170

![2023-03-14_02-41](https://user-images.githubusercontent.com/58810368/224870488-eabae6d1-eed5-4aa9-b4fc-978d5152b466.png)

## 路线图

- [ ] 修复预览模式中的缩进延迟问题
- [ ] 修复在滚动到标题较长的部分时出现的故障
- [ ] 添加对源代码/实时预览模式的支持
- [ ] 绘制一个垂直缩进线，就像大纲中的那样
- [ ] 在引用中添加缩进



