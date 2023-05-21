---
uid: 20230509170900
title: Obsidian 插件：List Callouts 为大纲列表增加强化样式
tags: []
description: Obsidian 插件：List Callouts 为大纲列表增加强化样式
author: OS
type: other
draft: false
editable: false
modified: 20230517230049
---

# Obsidian 插件：List Callouts 为大纲列表增加强化样式

## 概述

Callouts 和 大纲是 Obsidian 原生提供的非常使用的功能，前者可以像书本一样，强化某个区域和信息的展示，后者让我们可以罗列梳理思路。

List Callouts 插件则是实现了两者结合的作用，在大纲列表上，通过设定的字符符号，生成对应的强化图标和强调高亮色。

> [!Note] 插件名片
> - 插件名称：List Callouts
> - 插件作者：mgmeyers
> - 插件说明：在大纲列表上，通过设定的字符符号，生成对应的强化图标和强调高亮色
> - 插件项目地址：[点我跳转](https://github.com/mgmeyers/obsidian-list-callouts)

## 效果&使用

![image.png](https://cdn.pkmer.cn/images/20230509171807.png!pkmer)

## 使用

- 输入：在大纲列表项的开头键入一个字符（可配置）将对应列表项变成一个高亮样式。
	- 如原来输入是 `- 我是列表项`，现在输入是：`- & 我是列表项
- 预设样式：触发字符，可以自己设定，内置 7 种常用的符号和常用颜色。
	- 内置 7 种预设样式，这些样式修改触发字符，和图标样式。
	- 不能修改对应的高亮颜色

### 自定义样式

 - 如果你对预设的样式不满意，或者觉得数量不满足你的诉求
	 - 该插件提供新增功能， 使用插件设置中的 `Create` 可以创造全新的样式
	 - 该插件中的样式，已经和 [[obsidian-style-settings]] li 可以使用样式设置插件调整标注的填充。