---
uid: 20230720160055
title: Obsidian 插件：BlindFold 简单易用的隐藏答案和挖空工具
tags: [Obsidian, 插件, 学习, 隐藏答案, 挖空]
description: Obsidian 插件：BlindFold 简单易用的隐藏答案和挖空工具。实现了不依赖主题，和示例库的方法，来制作答案的隐藏和展示。
author: OS
type: basic
draft: false
editable: false
modified: 20230720161044
---

# Obsidian 插件：BlindFold 简单易用的隐藏答案和挖空工具

## 概述

利用 Obsidian 进行学习，是很多人的想法，尤其是 [BT 示例库](https://github.com/PKM-er/Blue-topaz-example) 中通过 [[obsidian-admonition]] 插件和 CSS 联动实现了挖空效果，给大家提供了使用 Obsidian 来复习，增强记忆的工具方法。

BlindFold 实现了不依赖主题，和示例库的方法，来制作答案的隐藏和展示。

> [!Note] 插件名片
> - 插件名称：BlindFold
> - 插件版本：1.0.1
> - 插件作者：my99n
> - 插件描述：实现了不依赖主题，和示例库的方法，来制作答案的隐藏和展示
> - 插件项目地址：[点我跳转](https://github.com/vzsky/blindfold-obsidian)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230720160357.png!pkmer)

Blindfold 的目的是将不需要的文本部分从主屏幕上隐藏起来，将其放在正常折叠的部分。可以同通过按钮切换展示或隐藏文本内容。

## 使用

- 安装即可使用
- 语法格式

````语法格式
```blindfold
我是一段隐藏的答案，你也可以使用 latex 语法
```
````

## 实践

- 可以使用这个来隐藏数学证明过程，本插件支持内部实现 latex。
- 可以使用这个对需要背诵的东西进行挖空，缺点是这个插件还不支持行内模式，所以对于诗词或者段落挖空还有些差强人意。