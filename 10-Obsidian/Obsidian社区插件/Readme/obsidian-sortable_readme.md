---
uid: 2023080322271620
title: Obsidian 插件：【Readme】Sortable
tags: ['表格', '搜索/排序', 'obsidian插件', 'readme']
description: 为 Obsidian 的表格增加排序功能
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Sortable

> [!Note] 插件名片
> - 插件名称：Sortable
> - 插件作者：alexandru-dinu
> - 插件说明：为 Obsidian 的表格增加排序功能
> - 插件分类：[' 表格 ', ' 搜索/排序 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/alexandru-dinu/obsidian-sortable)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-sortable)

## 概述

为 Obsidian 的表格增加排序功能

![Sortable](https://cdn.pkmer.cn/covers/obsidian-sortable.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alexandru-dinu/obsidian-sortable/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-sortable]] 插件的自述翻译

# Obsidian Sortable

[![构建](https://github.com/alexandru-dinu/obsidian-sortable/actions/workflows/main.yml/badge.svg)](https://github.com/alexandru-dinu/obsidian-sortable/actions/workflows/main.yml)

[![讨论](https://img.shields.io/badge/discussions-welcome-blueviolet)](https://github.com/alexandru-dinu/obsidian-sortable/discussions)

Sortable 是一个为 [Obsidian](https://obsidian.md) 设计的插件，旨在提供类似于 [维基百科](https://en.wikipedia.org/wiki/Help:Sorting#Example) 的可排序表格。点击表头进行排序：

- 第一次点击：升序排序
- 第二次点击：降序排序
- 第三次点击：默认排序

## 特点

<details>
<summary>演示</summary>

<https://user-images.githubusercontent.com/14110183/128138299-fd2a1bb2-6f87-4b50-b306-17550d8adc64.mov>

</details>

- 支持的数据类型：数字、字符串、[ISO日期](https://regex101.com/r/RfMAcx/1)。自定义比较函数是路线图的一部分（参见此 [问题](https://github.com/alexandru-dinu/obsidian-sortable/issues/12)）。
- 不会更改 Markdown 源代码。排序是通过重新排列表格行（即 `tr` 元素）来完成的。
- 没有依赖项。

请注意，开发仍处于测试阶段。

请查看 [项目的路线图](https://github.com/alexandru-dinu/obsidian-sortable/projects/1) 以获取更新。

## 安装

在 Obsidian 的社区插件中搜索“Sortable”（`设置 > 社区插件 > 浏览`），安装后启用。

或者，您可以从最新的 [发布页面](https://github.com/alexandru-dinu/obsidian-sortable/releases) 下载所需的文件，将它们移动到 `vault/.obsidian/plugins/obsidian-sortable` 目录下，并在“社区插件”设置中启用“Sortable”。

免责声明

我创建 Sortable 主要是为了满足我个人的需求，我很感激现在有很多人发现它有用。

然而，由于 Obsidian 有大量的插件、主题和调整选项，使用 Sortable 时可能会出现许多错误。

这些错误可能从 [界面不一致](https://github.com/alexandru-dinu/obsidian-sortable/discussions/23#discussioncomment-2376620) 到 [无法在某些状态下排序](https://github.com/alexandru-dinu/obsidian-sortable/issues/22) 等等。

虽然我尽力解决大部分问题，但请理解我无法满足每一个请求，

主要是因为我自己并没有使用很多 Obsidian 插件和特性。

谢谢！
