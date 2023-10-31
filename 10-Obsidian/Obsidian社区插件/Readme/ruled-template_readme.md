---
uid: 2023082011361006
title: Obsidian 插件：【Readme】Ruled template
tags: ['obsidian插件', 'readme']
description: 这个插件允许在创建新文件时使用基于规则的模板。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Ruled template

> [!Note] 插件名片
> - 插件名称：Ruled template
> - 插件作者：YPetremann
> - 插件说明：这个插件允许在创建新文件时使用基于规则的模板。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/YPetremann/obsidian-ruled-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ruled-template)

## 概述

这个插件允许在创建新文件时使用基于规则的模板。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/YPetremann/obsidian-ruled-template/master/README.md)
>

---

## Readme(翻译）

下面是 [[ruled-template]] 插件的自述翻译

# Obsidian Ruled Template

这是一个用于 Obsidian（<https://obsidian.md）的插件。>
这个插件是为了与像 templater 这样的插件一起使用。

描述

它允许根据规则在文件创建时自动选择模板。

在设置中，您可以定义所需的任意多个规则。

您为每个规则定义一个模式（正则表达式或通配符）和要使用的模板。

规则从上到下进行检查，第一个匹配的规则将被使用。

您可以使用方便的排序箭头和快速删除来重新组织它们。

您还可以通过键入路径来测试规则，它会告诉您哪个规则匹配。

在测试规则时，它会告诉您模式或模板是否无效。

周期性笔记、自然语言日期和模板是很棒的插件，但在完整的工作流中使用自动链接时，它们并不监听所有日志文件的创建，这可能会导致文件以不同的方式格式化，因此解决方案是不为它们定义模板，而是使用 Ruled 模板。

通过这些模板，可以检查文件名。

| 模式                               | 模板                   |
|-------------------------------------|-------------------------|
| `/\/[0-9]{4}-[0-9]{2}-[0-9]{2}.md/` | `Templates/Day.md`      |
| `/\/[0-9]{4}-W[0-9]{2}.md/`         | `Templates/Week.md`     |
| `/\/[0-9]{4}-[0-9]{2}.md/`          | `Templates/Month.md`    |
| `/\/[0-9]{4}-Q[0-9].md/`            | `Templates/Quaterly.md` |
| `/\/[0-9]{4}.md/`                   | `Templates/Year.md`     |