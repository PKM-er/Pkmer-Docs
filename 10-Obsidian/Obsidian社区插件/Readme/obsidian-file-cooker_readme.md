---
uid: 2023080322181156
title: Obsidian 插件：【Readme】File Cooker
tags: ['obsidian插件', 'readme']
description: 从搜索结果、当前文件、Dataview查询字符串中处理批注。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Cooker

> [!Note] 插件名片
> - 插件名称：File Cooker
> - 插件作者：iuian
> - 插件说明：从搜索结果、当前文件、Dataview查询字符串中处理批注。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ivaneye/obsidian-files-cooker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-file-cooker)

## 概述

从搜索结果、当前文件、Dataview查询字符串中处理批注。

![File Cooker](https://cdn.pkmer.cn/covers/obsidian-file-cooker.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivaneye/obsidian-files-cooker/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-file-cooker]] 插件的自述翻译


> Welcome to join our WeChat discussion group: SuppleThinking

> [Chinese documentation](README_zh.md)
# obsidian-file-cooker

这个 Obsidian 插件处理来自搜索结果、当前文件、Dataview 查询字符串的多个笔记...

## 特性

- 将多个文件添加到目标画布 --- **v1.7.0中的新功能**
- 将多个文件移动/复制到目标文件夹
- 重命名多个文件
- 添加或更改多个文件的属性（需要安装**MetaEdit**插件）
- 删除多个文件
- 将多个文件合并到目标文件中
- 从未解析的链接创建文件
- 将多个文件同步到flomo
- 将Dataview结果链接复制到剪贴板（支持DataviewJS页面查询，自**v1.7.1**起）

> - 来自剪贴板的文件
> - 当前文件中的文件链接
> - 来自dataview查询的文件（需要安装**dataview**插件）

![obsidian-file-cooker演示图片](demo.png)

## 使用方法

- **选择**: 选择至少一个您想要处理的文件
- **处理**: 执行目标命令（例如移动/复制，删除...）
- **确认**: 确认执行

### 选择

支持3种选择方式：
- 将文件链接复制到剪贴板。例如，复制闪电搜索结果
- 当前文件中的内容或链接
- Dataview搜索命令/DataviewJS页面查询（**v1.7.1中新增**）

### 烹饪

根据不同的选择方式，执行不同的命令。确保：
- 在执行处理剪贴板命令之前进行复制。
- 在执行处理当前文件命令之前打开文件。
- 在执行处理数据视图命令之前选择数据视图命令。

### 确认

所有命令都会打开一个弹出窗口进行确认。

如何安装

### 从Obsidian内部
您可以通过以下步骤在Obsidian内部激活此插件：
- 打开设置 > 第三方插件
- 确保安全模式已关闭
- 点击浏览社区插件
- 搜索"File Cooker"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

### 手动安装

- 下载[最新版本](https://github.com/ivaneye/obsidian-files-cooker/releases/latest)
- 从压缩包中提取出obsidian-file-cooker文件夹，放入你的vault的插件文件夹中：`<vault>/.obsidian/plugins/`  
注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，你可以按下`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，你可以禁用安全模式并启用该插件。



