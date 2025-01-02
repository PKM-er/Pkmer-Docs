---
uid: 20241211104150
title: Obsidian 插件：Markdown Tags 通过标签和箭头标签增强标签样式，直观地跟踪任务和状态
tags: ['标签管理', '数据处理', '效率工具', 'obsidian插件']
description: Obsidian 插件：Markdown Tags 通过标签和箭头标签增强标签样式，直观地跟踪任务和状态
author: OS
type: other
draft: false
editable: false
modified: 20241211152336
---

# Obsidian 插件：Markdown Tags 通过标签和箭头标签增强标签样式，直观地跟踪任务和状态

> [!Note] 插件名片
> - 插件名称：Markdown Tags
> - 插件作者：John Smith III
> - 插件说明：通过标签和箭头标签增强您的文档。使用预定义或自定义标签、可自定义颜色和箭头指示器，以直观地跟踪任务和状态。
> - 插件分类：[' 标签管理 ', ' 数据处理 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/binarynoir/obsidian-markdown-tags)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-tags)

## 概述

**Markdown Tags** 插件为 Obsidian 用户提供了一种增强 Markdown 中 tag 的书写方式。

## 效果&特性

## 使用

- 允许用户通过自定义标签样式来高亮和美化文本。
- 该插件支持预定义和自定义颜色，以及可选的箭头指示器，帮助用户直观地跟踪任务和状态。
- 用户可以使用简单的语法添加标签，如“((tag|todo))”或“((<tag|planned))”，并可自定义背景和前景颜色，以满足不同的样式美化需求。
- 比如展示状态
![image.png|500](https://cdn.pkmer.cn/images/20241211151844.png!pkmer)

```
((tag|todo))
((tag|in-progress|#ffcc00)) 
((tag|done|#28a745|#ffffff))
```

- 比如展示城箭头标签样式
![image.png|500](https://cdn.pkmer.cn/images/20241211151855.png!pkmer)

```
((<tag|planned)) ((<tag|custom test))
```

- 自定义样式
	- 你可以自定义标签的背景色：如 `background|#ff4500`
	- 文字颜色：如：`foreground||#ff6347`

```
((tag|background|#ff4500)) ((tag|foreground||#ff6347)) ((tag|both colors|#32cd32|#ffffff))
```

> [!note]
> 虽然这样给 tag 美化颜色的方式很简单，但是有两个笔者认为的限制，这里提示给用户
> 1. 这样的输入需要你熟悉 hex 颜色，当然网上有很多转化工具，取色工具
> 2. 这样的输入，Obsidian 并不会将标签认为是一个正常标签，所以你基于标签构建知识体系和结构、关联上会受到限制