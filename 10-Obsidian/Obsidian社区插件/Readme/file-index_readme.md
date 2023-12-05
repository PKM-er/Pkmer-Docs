---
uid: 2023120522250252
title: Obsidian 插件：【Readme】File Index
tags: ['obsidian插件', 'readme']
description: 在Vault中创建一个关于文件的元数据文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】File Index

> [!Note] 插件名片
> - 插件名称：File Index
> - 插件作者：Steffo
> - 插件说明：在Vault中创建一个关于文件的元数据文件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Steffo99/obsidian-file-index)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-index)

## 概述

在Vault中创建一个关于文件的元数据文件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Steffo99/obsidian-file-index/master/README.md)
> 

---

## Readme(翻译）

下面是 [[file-index]] 插件的自述翻译


# Obsidian文件索引
关于

这个[Obsidian]插件在您的Vault根目录下创建并保持更新一个`file-index.json`文件，其中包含所有文件路径的列表和所有基本文件名到文件路径的映射。

在没有了解Vault文件结构的情况下，用于外部渲染Wikilinks非常有用，例如在[Obsiview]中。

```json
{
	"paths": [
		"README.md",
		"Garas/moto.md",
		"Garas/auto.md"
	],
	"basenames": {
		"moto": "Garas/moto.md",
		"auto": "Garas/auto.md"
	}
}
```

[Obsidian]: https://obsidian.md/
[Obsiview]: https://github.com/Steffo99/obsiview
## 忽略

可以通过在Vault的根目录下添加一个名为`file-index-ignore.json`的文件来排除文件，该文件包含一个JSON数组，其中包含将阻止匹配文件被添加到列表中的正则表达式：

```json
[
	"^Garas",
	".*HelloWorld.*"
]
```
## 已知问题

> [!WARNING]
> 
> 可能会在区分具有相同基本名称但位于不同文件夹中的文件时遇到一些问题。



