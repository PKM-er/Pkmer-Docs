---
uid: 2023080322291542
title: Obsidian 插件：【Readme】Vextab
tags: ['obsidian插件', 'readme']
description: 用于渲染 Vextab 图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vextab

> [!Note] 插件名片
> - 插件名称：Vextab
> - 插件作者：Luis Guzman
> - 插件说明：用于渲染 Vextab 图。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/luigman/obsidian-vextab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vextab)

## 概述

用于渲染 Vextab 图。

![Vextab](https://cdn.pkmer.cn/covers/vextab.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/luigman/obsidian-vextab/master/README.md)
> 

---

## Readme(翻译）

下面是 [[vextab]] 插件的自述翻译


# Obsidian Vextab

这是一个用于使用[Vextab](https://vexflow.com/vextab/)渲染吉他谱和音乐符号的[Obsidian](https://obsidian.md)插件。来自Vextab的创作者：

> VexTab是一种语言，可以轻松创建、编辑和共享标准符号和吉他谱。与为可读性而设计的ASCII谱表不同，VexTab是为可写性而设计的。

## 安装

### 选项1：在Obsidian中安装（推荐）
推荐的安装此插件的方法是通过Obsidian社区插件浏览器。要这样做，请在Obsidian中打开设置，然后转到Community Plugins->Browse，然后搜索“Vextab”。点击“安装”和“启用”以启用插件。

或者，您可以使用以下方法之一手动安装它：

### 选项2：安装最新版本
前往[最新版本](https://github.com/luigman/obsidian-vextab/releases/latest)，并下载类似于`obsidian-vextab-X.X.X.zip`的文件。

将此文件解压缩到您的保险库中的`.obsidian/plugins/`目录中。您可能需要在文件浏览器中启用*显示隐藏文件*才能看到此文件夹。

然后重新启动Obsidian，并在Community Plugin设置中激活Vextab。

### 选项3：手动构建
进入`.obsidian/plugins/`目录并运行以下命令：
```
git clone https://github.com/luigman/obsidian-vextab.git
cd obsidian-vextab
npm run deploy
```
然后重新启动 Obsidian 并在 Community 插件设置中激活 Vextab。

## 入门指南
要渲染您的第一个选项卡，请创建一个新的`vextab`代码块并输入您的记谱。例如，这样：
````
```vextab
tabstave notation=true
notes 4-5-6/3 ## | 5-4-2/3 2/2
```
````

将被渲染为：

![example1](./images/example1.png)

您可以使用`vextab`或`tab`关键字来创建一个vextab代码块。

查看[Vextab教程](https://vexflow.com/vextab/tutorial.html)获取更多示例和有关如何编写vextab的指南。

### Quicktab
该插件还定义了一种简写符号来创建vextab，这对于快速记录想法特别有用，尤其是在移动设备上。简写符号将应用于`quicktab`代码块，并以以下方式修改您的符号：
- `tabstave`在第一行被推断出来，并在任何双换行符后插入一个新的tabstave
- 如果一行不以`notes`、`text`或`options`开头，则推断该行包含音符。

例如，这个：
````
```quicktab
4-5-6b7/3 10/4 | 5-4-2/3 2/2

6-7b9b7/3 7/4 | 9-8-7-6/2
```
````
被转换为这个
````
```tab
tabstave
notes 4-5-6b7/3 10/4 | 5-4-2/3 2/2

tabstave
notes 6-7b9b7/3 7/4 | 9-8-7-6/2
```
````
并生成以下图片：

![example-quicktab](./images/example-quicktab.png)

您可以在Vextab插件设置中切换是否在quicktab中包含符号。

故障排除
已知Scales and Chords插件与其使用的`tab`代码块存在不兼容性。目前，请确保一次只启用其中一个插件。将来的版本中，该插件将包括禁用`tab`代码块并改用`vextab`的选项。



