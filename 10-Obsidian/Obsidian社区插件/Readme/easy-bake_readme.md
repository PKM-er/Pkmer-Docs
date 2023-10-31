---
uid: 2023102611074201
title: Obsidian 插件：【Readme】Easy Bake
tags: ['obsidian插件', 'readme']
description: 轻松将许多 Obsidian 笔记编译成单个文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Easy Bake

> [!Note] 插件名片
> - 插件名称：Easy Bake
> - 插件作者：mgmeyers
> - 插件说明：轻松将许多 Obsidian 笔记编译成单个文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mgmeyers/obsidian-easy-bake)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-bake)

## 概述

轻松将许多 Obsidian 笔记编译成单个文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mgmeyers/obsidian-easy-bake/master/README.md)
>

---

## Readme(翻译）

下面是 [[easy-bake]] 插件的自述翻译

<p align="center">
  <img align="center" width="175" src="https://github.com/mgmeyers/obsidian-easy-bake/blob/master/assets/logo.png?raw=true">
</p>

<h1 align="center">Easy Bake</h1>

<p align="center">
将您的Obsidian笔记编译成更大的文档。这个插件专注于简单性。对于更复杂的编译场景，请尝试。
</p>

<br>

---

在 [Obsidian的命令面板](https://help.obsidian.md/Plugins/Command+palette) 中使用 `Bake current file` 命令来激活插件。

<img width="500" src="https://github.com/mgmeyers/obsidian-easy-bake/blob/master/assets/screenshot.png?raw=true">

独立行上存在的链接和嵌入内容将被复制到编译后的文档中。内联链接将被替换为链接的文本。这个过程是递归的，意味着链接文件中的链接也将被复制到最终文档中。

例如，

```markdown
## 第一部分

[[文件一]]
[[文件二]]
## 第三节

这是一个[[File three|inline link]]。

[[File four]]
```

将被编译为：

```markdown
## 第一部分

文件一的内容
文件二的内容
第三部分

这是一个内联链接。

文件四的内容
```