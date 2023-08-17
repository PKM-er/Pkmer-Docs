---
uid: 20230726233220
title: Obsidian 插件：Badges 给你的笔记增加好看的徽章样式
tags: [Obsidian, 插件, 徽章, 自定义样式, 美化]
description: Obsidian 插件：Badges 给你的笔记增加好看的徽章样式，：一个简易插件，通过内置的样式来在 Obsidian 中获得简易的徽章效果
author: OS
type: basic
draft: false
editable: false
modified: 20230727115401
---

# Obsidian 插件：Badges 给你的笔记增加好看的徽章样式

## 概述

一个简易插件，通过内置的样式来在 Obsidian 中获得简易的徽章效果。它的作用类似于键值存储 (数据库)，用于通过默认搜索或 Dataview 插件进行查询。

> [!Note] 插件名片
> - 插件名称：Badges
> - 插件版本：1.0.0
> - 插件作者：gapmiss
> - 插件描述：一个简易插件，通过内置的样式来在 Obsidian 中获得简易的徽章效果
> - 插件项目地址：[点我跳转](https://github.com/gapmiss/badges)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?badges)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230726235457.png!pkmer)

## 使用

想要在笔记内插入徽章需要了解整个插件自定义的格式规则：

```格式规则如下：
`[!!KEY:VAL]`
```

|格式|描述|
|:--|:--|
|KEY|图标的类型和名称  |
|VAL|显示的值和文本|

> [!Warning] 警告
> - 此插件的徽章效果目前按仅能在阅读模式下显示
> - 注意：VAL 不能包含或<kbd>:</kbd>符号，因为它们被用作自定义语法的分隔符

### 简单示例

```简单示例
`[!!note:note]`
`[!!info:info]`
`[!!todo:todo]`
...
`[!!cite:cite]`
```

### Github 的徽章样式

```语法格式
`[!!|GHX>KEY:VAL]`
```

|格式| 描述 |
|:--|:--|
|<kbd>\|</kbd> |起始符号|`| |</kbd> |</kbd>|  |</kbd>|  |
|<kbd>GHX</kbd> |Github 样式，ghb 表示蓝色样式，ghs 表示绿色成功样式|
|<kbd>></kbd>|大于符号 (分隔符)|
|<kbd>KEY:VAL</kbd>|KEY 是类型或标签，VAL 是显示的值文本。如: 发布 1.0.0|
|  |  |

```简单示例
`[!!|ghb>release:1.2.1]`
`[!!|ghb>issues:2]`
`[!!|ghb>open issues:0]`
`[!!|ghb>closed issues:2]`
`[!!|ghb>contributors:3]`
`[!!|ghb>license:MIT]`
`[!!|ghs>checks:success]`
`[!!|ghs>build:success]`
```

![image.png](https://cdn.pkmer.cn/images/20230727000104.png!pkmer)

### Plain-text

```格式规则如下：
`[!!KEY:VAL]`
```

```简易示例
`[!!|foo:bar]`
```

![image.png](https://cdn.pkmer.cn/images/20230727000215.png!pkmer)

## 自定义样式

```格式
`[!!|ICON|KEY:VAL|COLOR-RGB]`
```

|格式|描述|
|:--|:--|
|<kbd>\|</kbd>|起始符号|
|icon|图标的名称。例如 lucide-dice|
|<kbd>\|</kbd> |分隔符号，用于分割符号和显示的文案|
|<kbd>KEY:VAL</kbd>|KEY 是类型或标签，VAL 是显示的值文本。如: 发布 1.0.0|
|<kbd>\|</kbd>|分隔符号，用于分割文案和颜色样式|
|COLOR-RGB|3 个 (rgb) 数字 (0-255) 值，用逗号分隔。例如 144,144,144 或 CSS 变量，例如 var(—color-red-rgb)|

```简易示例
`[!!|message-square|comment:edited by j.d.|var(--color-cyan-rgb)]`
`[!!|dice|roll:eleven|120,82,238]`
`[!!|gem|mineral:emerald|var(--my-custom-rgb)]`
`[!!|apple|fruit:snack|var(--color-red-rgb)]`
`[!!|brain|brain:pkm|var(--color-purple-rgb)]`
`[!!|sun|weather:sunny|var(--color-yellow-rgb)]`
`[!!|cloudy|weather:cloudy|var(--mono-rgb-100)]`
`[!!|sunset|weather:8.44pm|var(--color-orange-rgb)]`
`[!!|dumbbell|reps:3 sets of 50|var(--mono-rgb-00)]`
`[!!|gift|event:wedding|var(--color-blue-rgb)]`
`[!!|plus-square|credit:$100|var(--color-green-rgb)]`
`[!!|minus-square|debit:$10|var(--color-pink-rgb)]`
```

![image.png](https://cdn.pkmer.cn/images/20230727000436.png!pkmer)
