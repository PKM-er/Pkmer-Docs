---
uid: 2024031219333207
title: Obsidian 插件：【Readme】Tekken Notation
tags: ['obsidian插件', 'readme']
description: 渲染铁拳记号。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tekken Notation

> [!Note] 插件名片
> - 插件名称：Tekken Notation
> - 插件作者：OpTi9
> - 插件说明：渲染铁拳记号。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OpTi9/obsidian-tekken-notation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tekken-notation)

## 概述

渲染铁拳记号。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OpTi9/obsidian-tekken-notation/master/README.md)

---

## Readme(翻译）

下面是 [[tekken-notation]] 插件的自述翻译

# 黑曜石铁拳记谱

在 [黑曜石](https://obsidian.md) 中渲染 [铁拳记谱](https://tekken.fandom.com/wiki/Move_Terminology) 图表

![演示](https://i.imgur.com/hCePE7w.gif)

## 用法

创建一个使用 `tekken` 作为语言的围栏代码块。

在内部指定您的符号。

输入列表在 [Wiki](https://github.com/OpTi9/obsidian-tekken-notation/wiki) 中。

### 例子

- 默认输入:
~~~markdown
```tekken
f,n,d,df,2
```
~~~

<img src="https://i.imgur.com/OKTceN5.png" width="400">

- 添加名称:
要添加名称，您需要以 "name" 开头:
~~~markdown
```tekken
"EWGF",f,n,d,df,2
```
~~~

<img src="https://i.imgur.com/gD8dCph.png" width="400">

- 在结尾添加信息:
要在结尾添加信息（例如：伤害等），您需要以 "text" 结尾:
~~~markdown
```tekken
"EWGF",f,n,d,df,2,"50 damage"
```
~~~

<img src="https://i.imgur.com/eA2l7dh.png" width="400">

- 添加自定义文本作为输入:
要将自定义文本作为输入的一部分添加，只需将其作为文本写入，不需要引号:
~~~markdown
```tekken
"EWGF",f,n,d,df,2,same frame input,"50 damage"
```
~~~

<img src="https://i.imgur.com/mgxpkY3.png" width="500">

- 添加连击箭头/括号:
要添加连击箭头或括号:
~~~markdown
```tekken
1,-,1+2,-,[,3,4,]
```
~~~

<img src="https://i.imgur.com/wfdub4P.png" width="400">

## 安装

`设置 > 社区插件 > 社区插件 > 浏览`，搜索 `铁拳记号`。

## 支持创作者

[给我买杯咖啡](https://www.buymeacoffee.com/opti9)
