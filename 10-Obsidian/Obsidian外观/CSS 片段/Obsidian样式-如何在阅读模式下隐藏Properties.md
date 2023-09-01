---
uid: 20230901161052
title: Obsidian 外观：1.4 Properties 新特性如何在阅读模式下隐藏
tags: [CSS美化, CSS自定义]
description: Obsidian 外观：1.4 Properties 新特性如何在阅读模式下隐藏
author: OS
type: other
draft: false
editable: false
modified: 20230901161829
---

# Obsidian 外观：1.4 Properties 新特性如何在阅读模式下隐藏

## 概述

新的 Obsidian 更新带来了很多惊喜，还有更强的稳定性。

但是一些老的示例库仓库，还有 snippets 片段就会失效

## 现象

比如 BT 示例库中小伙伴就会提问，更新后出现了属性交互菜单影响展示的情况

![image.png|450](https://cdn.pkmer.cn/images/20230901161454.png!pkmer)

## 解决

依然可以通过 cssClass 进行处理

在 snippets 下新建样式文件，并输入如下内容

```css
.noprop .metadata-container {
	display:none !important;
}
```

保存成 后缀名.css，文件名大家随意

然后在 Obsidian 设置 -> 外观 中找到并打开

最后，在你需要隐藏的页面，新增 cssClass 属性，并输入 noprop，即可