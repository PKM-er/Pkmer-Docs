---
uid: 20250419184452
title: Obsidian 插件：Browser History 打通你的浏览器浏览历史到 Obsidian
tags: ['浏览器', '浏览历史', '第三方集成']
description: 
author: OS
type: other
draft: false
editable: false
modified: 20250419201421
---

# Obsidian 插件：Browser History 打通你的浏览器浏览历史到 Obsidian

## 概述

这个插件，可以同步你的浏览器历史记录到笔记，让你可以快速基于浏览器整理自己知识库。

> [!Note] 插件名片
> - 插件名称：Browser History
> - 插件作者：noy4
> - 插件说明：同步你的浏览器浏览历史到 Obsidian 仓库
> - 插件分类：[' 浏览器 ',' 浏览历史 ', ' 第三方集成 ']
> - 项目地址：[点我访问](https://github.com/mariusvw/obsidian_browser-history)
> - 国内下载地址：[下载安装]((<https://pkmer.cn/products/plugin/pluginMarket/?browser-history>)
> - 自述文件：[Readme](https://github.com/mariusvw/obsidian_browser-history/blob/master/README.md)

## 效果 & 特性

![image.png](https://cdn.pkmer.cn/images/20250419185120.png!pkmer)

- 可以同步常用的浏览器浏览历史到仓库
- 支持 Chrome，Edge
- 支持设置同步浏览记录到具体位置
- 支持选定同步的时间跨度
- 自持定时同步

## 设置

### 设置浏览器历史位置

- 这个插件并不是一个开箱即用插件，因为你要先选择自己常用浏览器的情况
- 比如 Edge 或 Chrome，因为插件对浏览器读取历史记录文件需要自行设定
- 如图
![image.png](https://cdn.pkmer.cn/images/20250419192449.png!pkmer)

- Chrome 参考路径：`/Users/noy/Library/Application Support/Google/Chrome/Default/History`
- Edge 参考路径：`/Users/noy/Library/Application Support/BraveSoftware/Brave-Browser/Default/History`

> ![imoportant] 注意
> - **如果你有发布笔记的习惯，请轻易将历史记录发布。**，因为 URL 可能包含认证信息。
> - 由于访问浏览器数据，某些防病毒软件可能会将此插件标记为可疑。这是一个误报，因为插件只读取浏览器的历史数据库文件。

- 可以使用插件中的 Check 按钮来检查，测试与浏览器历史记录数据库的连接是否正确。

### 设置同步位置

通过插件设置可以指定，保存浏览器历史记录笔记的目录。设置的目录下，会根据每天的浏览器浏览历史保存一个对应文件。

**警告**： 请选择与您的每日笔记不同的文件夹，以避免任何冲突。违约：`Browser History`

### 设置开始日期

设置历史浏览器记录同步的开始日期，每次同步后，会从设定日期，自动更新到当前日期开始。

### 启动时同步

在 Obsidian 启动时启用自动同步。

### 自动同步

设置自动历史记录注释同步的间隔。可用选项：

- 禁用
- 1 分钟
- 5 分钟
- 10 分钟
- 30 分钟
- 5 秒（用于测试）