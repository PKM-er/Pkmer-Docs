---
uid: 20230502011042
title: Obsidian 插件：ProgressBar 快速在笔记中增加进度条
description: 
author: 
type: other
draft: false
editable: false
modified: 20230502014522
created: 2023-03-10 09:48:22
---

# Obsidian 插件：ProgressBar 快速在笔记中增加进度条

## 概述

有时候我们为了管理自己的笔记，或者笔记中完成的进度，你需要未自己的笔记显示和管理一个进度条。这时很多人会想到 Dataview 插件，它很强大近乎无所不能。

但是学习一个插件的成本可能大于我们实际使用的用途时，这时候我们就可以思考其他方式。比如你就是想记录一些简单的日期倒计时，或者月度倒计时，自定义完成度和日期的倒计时等，那么 ProgressBar 会更适合你。

> [!Note] 插件名片
> - 插件名称：ProgressBar
> - 插件作者：Wei Zhang
> - 插件说明：主要作用是将 progressbar 格式的代码块渲染为基于时间或手动的进度条。
> - 插件项目地址：[点我跳转](https://github.com/zwpaper/obsidian-progressbar/blob/main/README.zh-CN.md)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230502011634.png)

## 使用

Obsidian ProgressBar 插件会检测 `progressbar` 类型的代码块，并使用 Yaml 进行配置。

- 注意代码块一定要包含 `progressbar`

````YAML
```progressbar
kind: day-year
name: This Year
```
````

将会生成如下进度（注意因为书写此文档的时间，可能下面的图片不是实际插件的结果）：

![image.png](https://cdn.pkmer.cn/images/20230502011727.png)

>[!Warning] 警告
>- 兼容：此插件对格式存在严格的要求，子选项必须顶格书写，或者使用 4 给连续的空格来完成缩进。注意一定不能使用 `Tab` 来缩进，否则会导致插件解析错误，整个笔记可能变成无法打开的状态。
>- 缓解：如果真的发了错误语法，导致笔记无法打开，可以选择关闭插件，然后把错误的 `progressbar` 删除或者修改正确来解决。

### 常用语法

````YAML
# == kind ==
# 当指定基于时间的进度条时必填
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

# == value ==
# 指定进度条当前值
# 如果指定了有效的 kind，则可选
# 如果未指定 kind，则必填
# 格式：数字
value: 10

# == max ==
# 指定进度条最大值
# 如果指定了有效的 kind，则可选
# 如果未指定 kind，则必填
# 格式：数字
max: 25
````

### 实践

比如：预定完成 50 篇文章，当前只写了一篇；

````YAML
```progressbar
    value: 1
    max: 50
    width: 50%
    name: 文章完成度
```
````

比如：4 级别背诵 5000 个单词，当前背诵了 1023 个；

````YAML
```progressbar
    value: 1023
    max: 5000
    width: 50%
    name: 预计4级别背诵5000个单词
```
````

