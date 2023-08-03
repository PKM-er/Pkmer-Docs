---
uid: 20230803231105
title: Obsidian 插件：Code Files
tags: ['obsidian插件', 'readme']
description: 在Obsidian中使用VS Code强大的Monaco编辑器编辑代码文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232609
---

# Obsidian 插件：Code Files

> [!Note] 插件名片
> - 插件名称：Code Files
> - 插件作者：Lukas Bach
> - 插件说明：在 Obsidian 中使用 VS Code 强大的 Monaco 编辑器编辑代码文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lukasbach/obsidian-code-files)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-files)

## 概述

在 Obsidian 中使用 VS Code 强大的 Monaco 编辑器编辑代码文件。

![Code Files](https://cdn.pkmer.cn/covers/code-files.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lukasbach/obsidian-code-files/master/README.md)
>

---

## Readme(翻译）

下面是 [[code-files]] 插件的自述翻译

# Obsidian 代码文件

> ObsidianMD 的插件，用于显示和编辑代码文件。

该插件为 Obsidian 添加了一个代码编辑器视图。代码编辑器使用强大的 [Monaco Editor](https://microsoft.github.io/monaco-editor/)，该编辑器也是 VS Code 的核心。

**注意：该插件目前依赖于托管的依赖项，因此需要互联网连接。

请阅读下面的 [注意事项-在线依赖项](#caveat-online-dependency) 获取更多信息。**

在插件设置中，您可以配置默认编辑器可用的文件扩展名。您还可以通过右键单击侧边栏中的文件夹并点击“创建代码文件”，在命令面板中搜索“创建新的代码文件”，或使用“创建代码文件”按钮来创建新的代码文件。

![img_1.png](img_1.png)

![img_2.png](img_2.png)

![img.png](img.png)

警告：在线依赖

由于捆绑 Monaco 编辑器的复杂性，该插件目前依赖于托管版本的编辑器。这意味着插件需要互联网连接才能工作，并且依赖于托管的编辑器，目前可在<https://embeddable-monaco.lukasbach.com 上使用。>

我希望将来能够消除这种依赖，但目前这是使插件正常工作的最简单的方法。
