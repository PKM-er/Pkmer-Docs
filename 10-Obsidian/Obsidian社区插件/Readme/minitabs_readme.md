---
uid: 2024022121195495
title: Obsidian 插件：【Readme】Minitabs
tags: ['obsidian插件', 'readme']
description: 通过代码块自定义一组嵌套标签页。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Minitabs

> [!Note] 插件名片
> - 插件名称：Minitabs
> - 插件作者：ssjy1919
> - 插件说明：通过代码块自定义一组嵌套标签页。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ssjy1919/Obsidian-minitabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?minitabs)

## 概述

通过代码块自定义一组嵌套标签页。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ssjy1919/Obsidian-minitabs/master/README.md)

---

## Readme(翻译）

下面是 [[minitabs]] 插件的自述翻译

## This is a plugin for the Obsidian note-taking software

It allows embedding multiple tabs using code blocks

## 例 1，tab 按钮在上

效果:

 ![Image 例一](Screenshots/例一.png)

 代码块语法：

````md
```minitabs
tabs
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````

## 例 2，tab 按钮在下

效果:

 ![Image 例二](Screenshots/例二.png)

 代码块语法：

````md
```minitabs
tabsBottom
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````

## 上下 tab 按钮相互套娃

效果:

 ![Image 例三](Screenshots/例三.png)

 代码块语法：

``````md
`````minitabs
tabs
`按钮1` `按钮2` `按钮3` 
---
>[!Note]+ 1
># 1
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 1.1
===
>[!Note]+ 1
># 1.2
===
>[!Note]+ 1
># 1.3
````
---
>[!Note]+ 1
># 2
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 2.1
===
>[!Note]+ 1
># 2.2
===
>[!Note]+ 1
># 2.3
````
---
>[!Note]+ 1
># 3
````minitabs
tabsBottom
`按钮3.1` `按钮3.2` `按钮3.3` 
===
>[!Note]+ 1
># 3.1
===
>[!Note]+ 1
># 3.2
===
>[!Note]+ 1
># 3.3
````
`````
``````

````

## Four Quadrant View

Effect:

![Four Quadrant View](Screenshots/FourQuadrantView.png)

Code block syntax:

`````md
````minitabs
fourQuadrant
---
### Not urgent but important⭐⭐⭐
- [ ] Dumb
### Urgent and important⭐⭐⭐⭐
- [ ] Stupid
### Not urgent not important⭐
- [ ] Dumb
### Urgent but not important⭐⭐
- [ ] Dull



