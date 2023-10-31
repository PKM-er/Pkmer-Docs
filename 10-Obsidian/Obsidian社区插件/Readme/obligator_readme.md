---
uid: 2023082011360356
title: Obsidian 插件：【Readme】Obligator
tags: ['obsidian插件', 'readme']
description: Obligator是daily-todos的替代品，它会将未勾选的待办事项复制到指定标题下。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Obligator

> [!Note] 插件名片
> - 插件名称：Obligator
> - 插件作者：Dimitar Dimitrov
> - 插件说明：Obligator 是 daily-todos 的替代品，它会将未勾选的待办事项复制到指定标题下。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Newbrict/obsidian-obligator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obligator)

## 概述

Obligator 是 daily-todos 的替代品，它会将未勾选的待办事项复制到指定标题下。

![Obligator](https://cdn.pkmer.cn/covers/obligator.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Newbrict/obsidian-obligator/master/README.md)
>

---

## Readme(翻译）

下面是 [[obligator]] 插件的自述翻译

# Obligator

Obligator 替代并扩展了内置的 daily-notes 插件的功能。

使用这个插件，你可以指定一个包含待办事项的标题。未勾选的待办事项将被复制到新的日记中。这样，你就可以保留一个待办事项的历史记录。

![](preview.gif)

目前，它会复制指定标题和终止序列 `----` 之间的所有内容（除了已勾选的待办事项）。这将很快得到改进。

如何使用 Obligator

当您点击胡萝卜图标时，如果今天的笔记尚不存在，将会创建一个新的笔记文件，反映今天的日期。除了已完成的待办事项之外，所有在指定标题和终止序列之间的项目都将被复制过来。

### 模板变量

{{date}}、{{time}} 和 {{title}} 的使用方式与平常一样。

此外，您还可以使用 {{previous_note}} 和 {{previous_note_path}} 来创建从当前笔记到上一笔记的返回链接。如果没有上一笔记，则这些变量将为空白。

## TODO

* 添加更好的终端序列支持
* <https://marcus.se.net/obsidian-plugin-docs/publishing/release-your-plugin-with-github-actions>

## 构建

* `yarn install`（安装依赖）
* `yarn run dev`（将 typescript 编译为 javascript `main.js`）
* 重新启动 Obsidian

### 归属

* 文件建议代码取自 [mirnovov](https://github.com/mirnovov/obsidian-homepage/blob/main/src/suggest.ts)。
