---
uid: 20230803203935
title: Obsidian 插件：【Readme】Extract PDF Annotations
tags: ['obsidian插件', 'readme']
description: 提取PDF注释（笔记和高亮）并按主题分类
author: Franz Achermann
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Extract PDF Annotations

> [!Note] 插件名片
> - 插件名称：Extract PDF Annotations
> - 插件作者：Franz Achermann
> - 插件说明：提取PDF注释（笔记和高亮）并按主题分类
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/munach/obsidian-extract-pdf-annotations)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-extract-pdf-annotations)

## 概述

提取PDF注释（笔记和高亮）并按主题分类



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/munach/obsidian-extract-pdf-annotations/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-extract-pdf-annotations]] 插件的自述翻译


# Obsidian提取PDF批注插件

这是一个为[Obsidian](https://obsidian.md)设计的插件。它可以从PDF文件中提取批注。

## 用法

该插件访问给定目录中的所有PDF文件，并从PDF文件中提取注释和高亮显示。它将每个注释的第一行视为*主题*，以便对注释进行分组。

假设我们在我们的Vault中有一个包含PDF文件的文件夹，例如：

![vault_folder](https://github.com/munach/obsidian-pdf-annotations/blob/master/img/vault_folder.jpg?raw=true)

并且我们用一个名为'Hello World'的注释突出显示了Julia Hello World程序：

![pdf_note](https://github.com/munach/obsidian-pdf-annotations/blob/master/img/pdf_note.jpg?raw=true)

在编辑器中（例如\_Extract），我们运行插件的命令`Extract PDF Annotations`（所有命令的热键为Ctrl-P）。这将获取当前文件夹中PDF文件中的所有注释，并按*主题*进行排序：

![extracted_annotations](https://github.com/munach/obsidian-pdf-annotations/blob/master/img/extracted_annotations.jpg?raw=true)

因此，您可以将来自多个PDF文件的注释与您的主题（这里是'Hello World'）相关联。

### 命令
* `提取PDF批注` 在编辑markdown笔记时有效。搜索当前文件夹中的所有PDF文件的批注，并将它们插入到打开笔记的当前位置。
* `提取单个文件的PDF批注` 在显示PDF文件时有效。从该文件中提取批注，并将它们写入到笔记`Annotations for <文件名>`中。

### 插件设置：

* 是否使用评论的第一行作为“主题”（并相应地进行排序）
* 是否使用文件夹名称或PDF文件名进行排序

## 版本

1.0.4 清理连字符 https://github.com/munach/obsidian-extract-pdf-annotations/issues/5
1.0.3 更新了高亮提取，使用QuadPoints而不是矩形。

安装/构建

获取仓库：
```bash
$ git clone https://github.com/munach/obsidian-extract-pdf-annotations.git
$ cd obsidian-extract-pdf-annotations
```
安装依赖：
```
$ npm i
```

转译 `main.ts`：
```
$ npm run build
```

然后创建插件目录并复制文件 `main.js` 和 `manifest.json`，例如：
```
$ mkdir ~/MyVault/.obsidian/plugins/obsidian-extract-pdf-annotations
$ cp main.js manifest.json ~/MyVault/.obsidian/plugins/obsidian-extract-pdf-annotations/
```

在 Obsidian 的设置中启用插件。

## 问题 / 错误

[] 仅适用于从左到右的高亮。

## 鸣谢

该插件借鉴了Alexis Rondeaus的插件https://github.com/akaalias/obsidian-extract-pdf-highlights的思路，但使用了Obsidian内置的pdf.js库。

## 作者

Franz Achermann



