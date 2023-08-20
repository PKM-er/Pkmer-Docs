---
uid: 2023080322280739
title: Obsidian 插件：【Readme】Text Progress Bar
tags: ['obsidian插件', 'readme']
description: 在你的笔记中显示低保真文本进度条。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Text Progress Bar

> [!Note] 插件名片
> - 插件名称：Text Progress Bar
> - 插件作者：Michael Adams
> - 插件说明：在你的笔记中显示低保真文本进度条。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/michaeladams/obsidian-text-progress-bar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?text-progress-bar)

## 概述

在你的笔记中显示低保真文本进度条。

![Text Progress Bar](https://cdn.pkmer.cn/covers/text-progress-bar.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/master/README.md)
>

---

## Readme(翻译）

下面是 [[text-progress-bar]] 插件的自述翻译

# Obsidian 的文本进度条

[![发布](https://img.shields.io/github/v/release/michaeladams/obsidian-text-progress-bar?display_name=tag)](https://github.com/michaeladams/obsidian-text-progress-bar/releases/latest)

[![测试](https://github.com/michaeladams/obsidian-text-progress-bar/actions/workflows/test.yml/badge.svg)](https://github.com/michaeladams/obsidian-text-progress-bar/actions/workflows/test.yml)

为 Obsidian 添加了基于文本和表情符号的进度条。

## 用法

要创建一个进度条，请在代码块中以 "text-progress-bar" 开始。

一个最简单的进度条包含了进度条的标签、完成的数量和总数。

默认值将从插件设置中获取。

~~~
```html-progress-bar
已读书籍：1/10
```
~~~

![默认示例](images/example-default.jpg)

可选地，可以指定所有设置：

~~~
```html-progress-bar
已读书籍：5/10
transition:|
fill:▓
empty: 
prefix:[
suffix:]
length:10
```
~~~

![默认示例](images/example-all-settings.jpg)

注意，空字符是 "` `" - 一个特殊的空字符。

想要表情符号吗？我们有：

~~~
```html-progress-bar
孵化的小鸡：5/10
fill:🐥
empty:🥚
prefix:[
suffix:]
length:10
```
~~~

![默认示例](images/example-emoji.jpg)

指定一个过渡来显示部分完成的字符：

~~~
```html-progress-bar
那不是月亮：10/20
transition: 🌘,🌗,🌔
fill:🌕
empty:🌑
prefix:[
suffix:]
length:3
```
~~~

![默认示例](images/example-transition-emoji.jpg)

并使用小数来指定表情符号的部分完成情况

~~~
```html-progress-bar
已读书籍：5.5/10
transition:📖
fill:📗
empty:📕
length:10
```
~~~

或者使用 ASCII 字符来进行过渡：

~~~
```html-progress-bar
已读书籍：5/10
transition:⣦
fill:⣿
empty:⣀
prefix:⎸
suffix:⎹
length:3
```
~~~

![ASCII过渡](images/example-transition-ascii.jpg)

### 多个进度条

可以使用多个标签将进度条分组在一个块中。

~~~
```html-progress-bar
JAN:10.0/10
FEB:1.0/10
MAR:5.5/10
transition:📖
fill:📗
empty:📕
length:10
```
~~~

![分组的进度条](images/example-multiple.png)

## 安装

该插件可以手动安装：

1. 下载最新版本
2. 将内容解压到 ./obsidian/plugins/ 文件夹中
3. 重新加载 Obsidian
4. 在设置中启用插件



