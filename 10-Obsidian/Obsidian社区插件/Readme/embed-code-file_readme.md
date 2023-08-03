---
uid: 20230803231105
title: Obsidian 插件：Embed Code File
tags: ['编程', '美化', '文件管理', 'obsidian插件', 'readme']
description: 支持从本地路径，远程文件等方式，在笔记中加载对应代码，并展示对应的语法高亮方案。甚至支持指定文件中具体那块内容（M行到N行），
author: AI
type: readme
draft: false
editable: false
modified: 20230803232601
---

# Obsidian 插件：Embed Code File

> [!Note] 插件名片
> - 插件名称：Embed Code File
> - 插件作者：Abdullah Almariah
> - 插件说明：支持从本地路径，远程文件等方式，在笔记中加载对应代码，并展示对应的语法高亮方案。甚至支持指定文件中具体那块内容（M 行到 N 行），
> - 插件分类：[' 编程 ', ' 美化 ', ' 文件管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/almariah/embed-code-file)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embed-code-file)

## 概述

支持从本地路径，远程文件等方式，在笔记中加载对应代码，并展示对应的语法高亮方案。甚至支持指定文件中具体那块内容（M 行到 N 行），

![Embed Code File](https://cdn.pkmer.cn/covers/embed-code-file.GIF!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/almariah/embed-code-file/main/README.md)
>

---

## Readme(翻译）

下面是 [[embed-code-file]] 插件的自述翻译

# 嵌入代码文件（Obsidian 插件）

该插件允许从 Obsidian vault 或远程文件（例如 GitHub）中嵌入代码文件。它与 Obsidian 的实时预览功能更加配合。

## 设置

该插件默认包含多种语言（`c,cpp,java,python,go,ruby,javascript,js,typescript,ts,shell,sh,bash`）。您可以在逗号分隔的列表中包含任何需要的语言。

## 如何使用

首先，您需要从社区插件中激活该插件。然后，您可以按照以下方式嵌入代码：

````yaml
```embed-<某种语言>
PATH: "vault://<代码文件的某个路径>" 或者 "http[s]://<远程文件的某个路径>"
LINES: "<某行号>,<其他行号>,...,<某个范围>"
TITLE: "<某个标题>"
```
````

示例：

#### 保险库文件

````yaml
```embed-cpp
路径："vault://Code/main.cpp"
行数："2,9,30-40,100-122,150"
标题："一些标题"
```
````

#### 远程文件

````yaml
```embed-cpp
PATH: "https://raw.githubusercontent.com/almariah/embed-code-file/main/main.ts"
LINES: "30-40"
TITLE: "Some title"
```
````

其中 `PATH`、`LINES` 和 `TITLE` 属性被设置为 YAML 键值对：

* `PATH` 应该是存储在保险库或远程的代码文件。例如，如果你使用 GitHub，请确保使用 `https://raw.githubusercontent.com/...`
* `LINES` 将只包括指定代码文件的行。每组包含的行，无论是范围还是明确的行，都会在新行中添加省略号 (`...`)。如果你想去掉省略号，请通过尽可能使用一个范围来减少组数。
* 如果未设置 `TITLE`，则代码块的标题将是 `PATH` 的值。

你也可以在普通代码块（不带 `embed-`）中使用 `TITLE`，但请确保标题值用双引号括起来：

````cpp
```cpp TITLE: "Some title"
// some code
...
```
````

使用实时预览功能将增强嵌入体验。

## 演示

#### 嵌入代码文件

![Gif](https://github.com/almariah/embed-code-file/blob/main/demo/embed-code-file.gif?raw=true)

#### 嵌入代码文件中的行

#### 嵌入远程文件的代码行（例如，GitHub）

![Gif](https://github.com/almariah/embed-code-file/blob/main/demo/embed-remote-code-file.gif?raw=true)

#### 为普通代码块添加标题

![Gif](https://github.com/almariah/embed-code-file/blob/main/demo/normal-code-block-title.gif?raw=true)
