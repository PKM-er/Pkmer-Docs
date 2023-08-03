---
uid: 2023080322205643
title: Obsidian 插件：【Readme】Jupyter
tags: ['自动化', 'obsidian插件', 'readme']
description: 在Obsidian中使用Jupyter运行Python代码。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Jupyter

> [!Note] 插件名片
> - 插件名称：Jupyter
> - 插件作者：tillahoffmann
> - 插件说明：在Obsidian中使用Jupyter运行Python代码。
> - 插件分类：['自动化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tillahoffmann/obsidian-jupyter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-jupyter)

## 概述

在Obsidian中使用Jupyter运行Python代码。

![Jupyter](https://cdn.pkmer.cn/covers/obsidian-jupyter.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tillahoffmann/obsidian-jupyter/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-jupyter]] 插件的自述翻译


⚠️ 这个插件已经被弃用，不再维护。

Obsidian已经发展了，将插件与新的实时预览编辑器集成起来并不容易。这里有一种替代设置，它是未来可靠的，不容易出错，并支持许多所需的功能（如存储输出和支持`input`调用）。

1. 设置你的Python发行版，安装Jupyter Lab和Jupytext以进行基于Markdown的笔记本：`pip install jupyterlab jupytext [其他依赖]`。
2. 在你的vault的根目录下运行`jupyter lab`。
3. 右键点击任何Markdown文件，选择`Open With > Notebook`以将Obsidian笔记作为Jupyter笔记本打开。

可选地，你可以将基于Markdown的笔记本与经典笔记本文件（`.ipynb`扩展名）["配对"](https://jupytext.readthedocs.io/en/latest/paired-notebooks.html)，以便在关闭和重新打开笔记本时保留结果。为此，请在你的vault的根目录中添加一个包含以下代码的`jupytext.toml`文件。这将创建一个隐藏的`.ipynb`目录，其中包含笔记本的结果供以后使用。

```toml
formats = "md,.ipynb//ipynb"
```

不幸的是，这个选项不支持Obsidian内部的Jupyter笔记本，但是复制Jupyter的体验将是一项重大工作。

---

# Obsidian Jupyter 插件 ![](https://img.shields.io/badge/stability-alpha-f4d03f.svg) [![Release Obsidian Plugin](https://github.com/tillahoffmann/obsidian-jupyter/actions/workflows/release.yml/badge.svg)](https://github.com/tillahoffmann/obsidian-jupyter/actions/workflows/release.yml) ![](https://img.shields.io/badge/python-≥3.7-blue)

该插件允许使用 `jupyter` 语言的代码块在围栏中作为 Jupyter 笔记本执行。

![](obsidian-jupyter.gif)

## 安装

1. 在Obsidian的社区插件设置选项卡中安装插件。
2. 在插件的设置选项卡中指定Python解释器路径。如果您不知道解释器路径是什么，请从控制台运行`python -c 'import sys; print(sys.executable)'`命令。Python版本应至少为3.7。
3. 验证是否已安装Jupyter。如果您不确定，请从控制台运行`pip install jupyter --upgrade`命令以安装最新版本。您也可以使用设置中的“安装依赖项”按钮来安装所需的依赖项。

此插件已经通过以下Python依赖项进行了测试。如果遇到问题，请在报告问题之前更新您的Python依赖项。

```
jupyter==1.0.0
jupyter-client==7.0.2
jupyter-console==6.4.0
jupyter-core==4.7.1
jupyterlab-pygments==0.1.2
jupyterlab-widgets==1.0.1
nbclient==0.5.4
nbconvert==6.1.0
nbformat==5.1.3
notebook=6.4.3
```

## 设置

* Python解释器：用于执行代码的Python解释器的路径，例如`/usr/bin/python`。
* 设置脚本：在每次执行Python代码块之前运行的脚本。

还可以使用YAML前置元数据为每个文档指定Python解释器。

```yaml
---
obsidian-jupyter:
 interpreter: interpreter-path
---
```



