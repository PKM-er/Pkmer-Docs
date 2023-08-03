---
uid: 2023080322282069
title: Obsidian 插件：【Readme】TimeDiff plugin
tags: ['obsidian插件', 'readme']
description: 在“timediff” markdown块中计算并显示两个日期之间的小时和分钟差异
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：TimeDiff plugin

> [!Note] 插件名片
> - 插件名称：TimeDiff plugin
> - 插件作者：Grzegorz Dominiczak
> - 插件说明：在“timediff” markdown块中计算并显示两个日期之间的小时和分钟差异
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dominiczaq/obsidian-plugin-time-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-time-diff)

## 概述

在“timediff” markdown块中计算并显示两个日期之间的小时和分钟差异



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dominiczaq/obsidian-plugin-time-diff/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-plugin-time-diff]] 插件的自述翻译


这是一个为Obsidian（https://obsidian.md）开发的插件。

## 如何使用

* 在 `timediff` markdown 块中计算时间差
```
	```timediff
	11:10 - 12:20
	12:38 - 14:00
	23:20 - 23:59
	00:00 - 00:55
	```
```
在阅读模式下，日期之间的差异将被解析并以可读格式呈现。
差异的总和将显示在块的底部。

### 命令
* `TimeDiff plugin - 在当前文件中显示总时间差计数` 命令，计算页面上所有 `timediff` 块的总和。
* `TimeDiff plugin - 插入 timediff 块` 命令，在当前光标位置插入 `timediff` 块。
* `TimeDiff plugin - 插入当前时间` 命令，在当前光标位置插入当前时间。

## 本地开发

- 将你的仓库克隆到本地开发文件夹。为了方便起见，你可以将这个文件夹放在你的`.obsidian/plugins/your-plugin-name`文件夹中。
- 安装NodeJS，然后在你的仓库文件夹下的命令行中运行`yarn`。
- 运行`yarn run dev`将`main.ts`编译为`main.js`。
- 对`main.ts`进行更改（或创建新的`.ts`文件）。这些更改应该会自动编译到`main.js`中。
- 重新加载Obsidian以加载你的插件的新版本。
- 在设置窗口中启用插件。



