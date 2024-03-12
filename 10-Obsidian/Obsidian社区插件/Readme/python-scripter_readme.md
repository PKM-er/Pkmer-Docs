---
uid: 20231220112631
title: Obsidian 插件：【Readme】Python Scripter
tags: ['obsidian插件', 'readme']
description: 直接将Python脚本作为Obsidian命令运行
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Python Scripter

> [!Note] 插件名片
> - 插件名称：Python Scripter
> - 插件作者：Nick Allison
> - 插件说明：直接将 Python 脚本作为 Obsidian 命令运行
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nickrallison/obsidian-python-scripter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?python-scripter)

## 概述

直接将 Python 脚本作为 Obsidian 命令运行

![Python Scripter](https://cdn.pkmer.cn/covers/python-scripter.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nickrallison/obsidian-python-scripter/master/README.md)

---

## Readme(翻译）

下面是 [[python-scripter]] 插件的自述翻译

# Obsidian Python Scripter

## 概述

这是一个程序，可以让您快速从 Obsidian 内部运行自己的 Python 脚本。要开始使用，请启用此插件，它将在您指定的.obsidian 文件夹内创建一个 scripts/python 文件夹。对于每个脚本，它将在 Obsidian 命令面板中添加一个自定义命令。

## 要求

- 安装您首选的 Python 版本，并确保它可以从命令行运行，例如：```python .obsidian/scripts/python/main.py```
- 该插件适用于裸露的 Python 脚本，例如 scripts/python/example.py
- 或者您可能需要一个更复杂的脚本，您可以将一个文件夹作为脚本。您只需要在 src 文件夹中有一个 main.py 文件，它就可以作为一个命令运行，否则它将无法执行。请确保按照以下结构组织 scripts/python
<pre>
  scripts
    |
    ---- python
           |
           ---- example
                  |
                  ---- src
                        |
                        ---- main.py
                        |
                        ---- hello.py
</pre>

   您的结果脚本文件夹应该具有以下结构：

  <pre>
  scripts
    |
    ---- python
           |
           ---- example
           | |
           | ---- src
           | |
           | ---- main.py
           | |
           | ---- hello.py
           |
           ---- example2.py
</pre>

## 操作步骤

 - 按照要求部分指定的格式添加您的 Python 脚本。
 - 一旦 Obsidian 启动，您的命令将添加到命令窗口中，并可以按照您的意愿运行。
 - 在上面的示例中，将添加 2 个命令：
 	- 运行 example
  	- 运行 example2.py

   ![commandwindow](https://cdn.pkmer.cn/covers/python-scripter_1_0.png!pkmer)

- 当 Python 目录更新时自动重新加载



