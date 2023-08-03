---
uid: 2023080322185162
title: Obsidian 插件：【Readme】Front Matter Title
tags: ['obsidian插件', 'readme']
description: 允许您在前面的事情中定义一个标题，以显示为文件名
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Front Matter Title

> [!Note] 插件名片
> - 插件名称：Front Matter Title
> - 插件作者：Snezhig
> - 插件说明：允许您在前面的事情中定义一个标题，以显示为文件名
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/snezhig/obsidian-front-matter-title)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-front-matter-title-plugin)

## 概述

允许您在前面的事情中定义一个标题，以显示为文件名



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/snezhig/obsidian-front-matter-title/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-front-matter-title-plugin]] 插件的自述翻译


# 前言标题

这是一个为[Obsidian](https://obsidian.md)设计的插件。

为什么需要这个插件？我使用了Zettelkasten方法，这意味着我所有的文件都以时间戳命名，比如`202208251731`。
插件提供了一些选项，可以显示来自yaml块的数据，而不是原始的文件名。

---

- [安装](#installation)
- [开始使用](#get-started)
- [模板示例](./docs/TemplateExamples.md)
- [功能](./docs/Features.md)
- [处理器](./docs/Processor.md)
- [API](#api)

---

# 安装

### 使用 Obsidian.md 应用程序

* 通过 `Community plugins` 从 Obsidian 下载它

使用[BRAT](https://github.com/TfTHacker/obsidian42-brat)插件

### 手册

* 从 [最新版本](https://github.com/Snezhig/obsidian-front-matter-title/releases/latest/) 下载 `obsidian-front-matter-title-#LAST_RELEASE#.zip` 并将其解压到你的存储库路径：`.obsidian/plugins`。

# 入门指南

插件**不会重命名文件**，它只是在资源管理器或图表中使用 markdown 文件的元块中的特定值作为显示的文件名。

> 特定键的值**必须是**字符串、数字或数组（列表）

安装完成后，您可能想要做的第一件事是设置自己的标题路径。

打开插件的设置页面，将默认值为`title`的`Template`更改为您自己的路径。

`title`的值意味着插件将尝试在任何*.md文件的yaml块中查找`title`键，并使用其值作为新的显示标题。

此外，您还可以使用点表示法，如果您设置了`foo.bar`，插件将尝试在`foo`中查找`bar`键并使用其值。

```yaml

title: 'A new shown title' # 如果模板是title，则将使用此值
foo:
  bar: 'Dot-notation shown title' # 如果模板是foo.bar，则将使用此值
```

[**查看更多**](./docs/TemplateExamples.md)

## Api

寻找集成？请尝试[API提供者](https://github.com/Snezhig/front-matter-plguin-api-provider)。

如果您喜欢这个插件，并想请我喝杯咖啡，您可以！
<a href="https://www.buymeacoffee.com/snezhig" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

注意事项

欢迎随意提出关于此插件的错误、错误或想法。



