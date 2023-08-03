---
uid: 20230803231105
title: Obsidian 插件：Argument Map with Argdown
tags: ['思维导图', 'obsidian插件', 'readme']
description: 允许您编写argdown代码块并在预览中查看地图
author: AI
type: readme
draft: false
editable: false
modified: 20230803232534
---

# Obsidian 插件：Argument Map with Argdown

> [!Note] 插件名片
> - 插件名称：Argument Map with Argdown
> - 插件作者：amdecker
> - 插件说明：允许您编写 argdown 代码块并在预览中查看地图
> - 插件分类：[' 思维导图 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/amdecker/obsidian-argdown-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-argdown-plugin)

## 概述

允许您编写 argdown 代码块并在预览中查看地图

![Argument Map with Argdown](https://cdn.pkmer.cn/covers/obsidian-argdown-plugin_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/amdecker/obsidian-argdown-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-argdown-plugin]] 插件的自述翻译

# 使用 Obsidian 中的 Argdown 进行论证图的制作

## 版本 2.0 的变化

* 版本 2.0 带有 Argdown 处理器。无需安装任何额外的程序！
* 要开始使用，请只需从 Obsidian 社区插件列表中安装插件并开始绘制思维导图。就这样。
* 在设置页面上，您可以将默认视图更改为源格式或思维导图。

## 特点

* 语法高亮
* 使用 argdown 或 argdown-map 启动代码块
* 在预览窗格中查看您的地图
* 一个文件中可以有多个 Argdown 块

## 演示

![演示](https://raw.githubusercontent.com/amdecker/obsidian-argdown-plugin/master/demo.gif)

## 如何使用

请访问<https://argdown.org 以获取有关用法和语法的更多信息。>

在您的笔记中添加一个 Argdown 代码块，然后开始输入。预览将自动更新。

````markdown
```argdown 
[Statement]: this is a statement
    + pro one
    + pro 2
    - con 1
```
````

或者

````markdown
```argdown-map
[Statement]: this is a statement
    + pro one
    + pro 2
    - con 1
```
````

## 暗黑模式

查看 [@trungng2006](https://github.com/trungng2006) 的建议：<https://github.com/amdecker/obsidian-argdown-plugin/issues/3>
