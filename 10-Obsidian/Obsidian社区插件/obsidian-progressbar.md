---
uid: 20230513222807
title: Obsidian 插件：Progressbar 给你的笔记加上进度条
description: Obsidian 插件：Progressbar 给你的笔记加上进度条！
author: Bon
type: other
draft: false
editable: false
modified: 20230515115727
---

# Obsidian 插件：Progressbar 给你的笔记加上进度条

## 概述

之前，我们如果想要在笔记中加上进度条，我们可能有两个方案，一个是用 `<progress value=5 max=10></progress>` 来实现，一个则是用 DataviewJS 来实现。而 Progressbar 插件则是一个看似简单但是功能丰富的一个 Progressbar 专用插件；你不需要再烦恼倒计时咋做，也不需要再烦恼每次要加入过多的代码了。

> [!Note] 插件名片
> - 插件名称：Progress Bar
> - 插件作者：Wei Zhang
> - 插件说明：给你的笔记加上进度条！
> - 插件项目地址：[点我跳转](https://github.com/zwpaper/obsidian-progressbar)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230514141810.png!pkmer)

- 主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条，支持以下几种进度条：
	- day-year：显示今年过去了多少天的进度条。
	- day-month：显示本月过去了多少天的进度条。
	- day-week：显示本周过去了多少天的进度条。
	- month：显示今年过去了多少个月的进度条。
	- manual：由用户指定的进度条。

## 使用

- 打开一篇 Markdown 笔记，然后在其中插入一个如下的代码块：

````
```progressbar
kind: day-year
name: This Year
```
````

就会自动生成一个进度条。

- 其中它支持以下的配置：

```
# == kind ==
# 当指定基于时间的进度条时必填，如果不填的话没办法正确显示
# 如果手动指定值，则可选
# 可选项：day-year、day-month、day-week、month
kind: day-year

# == name ==
# 指定进度条名称，在进度条前面显示
# 可选，如果未指定，将使用 kind 作为名称
name: day-year

# == width ==
# 指定进度条宽度
# 可选
# 可选格式：50%、100px
width: 50%

# 如果你上述的内容中没有设置具体的 kind: 的话，那你一定要加上这个内容；
# == value ==
# 指定进度条当前值
# 如果指定了有效的 kind，则可选
# 如果未指定 kind，则必填
# 格式：数字
value: 10

# 如果你上述的内容中没有设置具体的 kind: 的话，那你一定要加上这个内容；
# == max ==
# 指定进度条最大值
# 如果指定了有效的 kind，则可选
# 如果未指定 kind，则必填
# 格式：数字
max: 25
```

以下是一些具体的例子：

- 今年过去了多少天：

````
```progressbar
kind: day-year
name: 今年过去了多少天
```
````

- 我这个月做了多少俯卧撑：

````
```progressbar
name: 俯卧撑
value: 10
max: 50
```
````

- 我这个月做了多少俯卧撑（一行的宽度）：

````
```progressbar
name: 俯卧撑
width: var(--file-line-width) # 或者 100%
value: 10
max: 50
```
````

> [!tip]
> 开启即用
