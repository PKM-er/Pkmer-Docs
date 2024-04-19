---
uid: 20240401220535
title: 如何关闭 Quicker Explorer 插件的自动预览
tags:
  - 常见问题
  - 插件
description: 如何关闭 Quicker Explorer 插件的自动预览
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240401220535
---

# 如何关闭 Quicker Explorer 插件的自动预览

- 插件：Quick Explorer
	- 文档：[[quick-explorer]]
	- 功能：像浏览器一样打开标题下的文件夹目录
	- Tips：<button>Tab 键</button>可以切换自动预览的开关

如果想默认保持关闭预览，而不是每次启动后按下 Tab 键来关闭，可以改下源码：

![2024-03-27_如何关闭Quicker Explorer插件的自动预览_IMG-1](https://cdn.pkmer.cn/images/202404012207729.png!pkmer)

> 即将 main.js 的 `this.parentFolder` 这段的代码的 `var x = !0` 改为 `var x = !1`

参考链接如下：

> <https://github.com/pjeby/quick-explorer/issues/80>
