---
uid: 20240406170421
title: obsidian-sticky-heading
tags: [obsidian, 标题]
description: 让当前内容的标题始终处于页面上方
author: Huajin
type: other
draft: false
editable: false
modified: 20240408191253
---

# obsidian-sticky-heading

> [!Note] 插件名片
>
> - 插件名称：Sticky Headings
> - 插件版本：1.0.6
> - 插件作者：Shen Shen
> - 插件描述：让当前内容的标题始终处于页面上方
> - 插件项目地址：[点我跳转](https://github.com/imshenshen/obsidian-sticky-heading)

sticky heading 插件可以让当前内容的标题始终处于页面上方

![image.png](https://cdn.pkmer.cn/images/20240406170755.png!pkmer)

## 设置

插件只提供了一个设置，就是标题固定后距离顶部的空间大小，默认为 0 像素，你可以设置为例如五像素 5px 等，还可以设置其他单位例如 相对单位 rem

![image.png](https://cdn.pkmer.cn/images/20240406170934.png!pkmer)

## 已知问题

- 内容过长时标题会消失

这是因为 obsidian 用的是 codemirror 编辑器，codemirror 编辑器采用只渲染可见范围内的内容的方式以此做到能够无压打开超大文本。每当用户滚动浏览文档或文档本身发生更改时，当前视窗会重新渲染。正因为这个原因，当标题距离当前页面太远时，标题不会被编辑器渲染，自然会消失。（[Viewport - Developer Documentation (obsidian.md)](https://docs.obsidian.md/Plugins/Editor/Viewport)）

- 阅读模式下不工作

这个插件主要是为了解决这样的问题: 当我在碎片化的时间里写作时，我经常忘记我目前在哪个标题级别，或者我应该使用哪个级别作为下一个标题。如果在阅读模式下对这个特性有很大的需求，我们会考虑实现它。拉取请求是受欢迎的。
