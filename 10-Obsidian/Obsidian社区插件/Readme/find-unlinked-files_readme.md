---
uid: 2023080322182546
title: Obsidian 插件：【Readme】Find orphaned files and broken links
tags: ['链接处理', '效率', 'obsidian插件', 'readme']
description: 找到孤立的文件(没有引用的文件) 和 损坏的链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Find orphaned files and broken links

> [!Note] 插件名片
> - 插件名称：Find orphaned files and broken links
> - 插件作者：Vinzent
> - 插件说明：找到孤立的文件(没有引用的文件) 和 损坏的链接
> - 插件分类：['链接处理', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Vinzent03/find-unlinked-files)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?find-unlinked-files)

## 概述

找到孤立的文件(没有引用的文件) 和 损坏的链接



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Vinzent03/find-unlinked-files/main/README.md)
> 

---

## Readme(翻译）

下面是 [[find-unlinked-files]] 插件的自述翻译


# 查找孤立的文件（没有反向链接的文件）和损坏的链接
一个用于[Obsidian](https://obsidian.md)的插件

它是如何工作的？

### 查找孤立文件

该插件会遍历整个存储库，并搜索那些没有被链接到任何地方的文件，换句话说，就是没有反向链接的文件。

最后，它会创建一个包含这些孤立文件链接列表的文件。现在，您可以选择删除这些未使用的文件，或者将它们链接到存储库的其他地方。

### 查找损坏的链接

创建一个包含未创建链接文件的链接列表文件。

此外，还有一个命令可以创建这些链接文件。

### 查找空文件

创建一个包含空文件列表的文件。只有前置元数据的文件也被视为空文件。

如何使用
调用命令“查找孤立文件”，将在您的存储库根目录中创建文件“查找孤立文件插件输出.md”，并在新窗格中打开。

## 附加功能：
- 添加要忽略的文件
- 添加要忽略的目录
- 添加要忽略带有这些标签的文件
- 添加要忽略链接到这些文件的文件
- 添加要忽略的特定文件类型
- 更改输出文件名

将输出文件中具有特定扩展名的文件移动到系统垃圾箱（额外命令）
遍历输出文件中的每个链接。如果链接的扩展名在列表中（可以在设置中设置），则将文件移动到系统垃圾箱。对于删除许多未使用的媒体文件非常有用。

请注意，需要禁用“禁用工作链接”设置。

兼容性
自定义插件仅适用于Obsidian v0.9.7+。

安装

### 来自Obsidian
1. 打开设置 -> 第三方插件
2. 禁用安全模式
3. 点击浏览社区插件
4. 搜索“查找孤立文件和损坏链接”
5. 安装它
6. 在已安装插件下激活它

### 来自GitHub
1. 下载[最新版本](https://github.com/Vinzent03/find-unlinked-files/releases/latest)
2. 将`manifest.json`和`main.js`移动到`<vault>/.obsidian/plugins/find-unlinked-files`目录下
3. 重新加载Obsidian（Str + r）
4. 进入设置并禁用安全模式
5. 启用“查找孤立文件和损坏链接”

如果您觉得这个插件有用并想支持它的开发，您可以在[Ko-fi](https://Ko-fi.com/Vinzent)上支持我。

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)



