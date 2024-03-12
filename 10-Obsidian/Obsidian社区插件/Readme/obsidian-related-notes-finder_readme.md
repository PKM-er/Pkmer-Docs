---
uid: 20230817224055
title: Obsidian 插件：Related Notes Finder
tags: ['搜索/排序', '任务管理', '关系图谱', 'obsidian插件', 'readme']
description: 用于产找当前笔记中出现的词汇，和其他可能相关的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Related Notes Finder

> [!Note] 插件名片
> - 插件名称：Related Notes Finder
> - 插件作者：Joshua Michalik
> - 插件说明：用于产找当前笔记中出现的词汇，和其他可能相关的笔记。
> - 插件分类：[' 搜索/排序 ', ' 任务管理 ', ' 关系图谱 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lifegems/obsidian-related-notes-finder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-related-notes-finder)

## 概述

用于产找当前笔记中出现的词汇，和其他可能相关的笔记。

![Related Notes Finder](https://cdn.pkmer.cn/covers/obsidian-related-notes-finder.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lifegems/obsidian-related-notes-finder/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-related-notes-finder]] 插件的自述翻译

# 相关笔记查找器

## 一个黑曜石插件

### 如何使用

<img src="https://github.com/lifegems/obsidian-related-notes-finder/blob/master/obsidian-related-notes.gif?raw=true">

### 特点

**命令：**显示可能的链接

搜索存储库中所有标题包含活动笔记中的任何单词的笔记。

* 搜索具有超过 X 个字符的单词。（默认值：3 个字符）
* 忽略每日路径。（默认值：禁用）
* 忽略在设置中指定的单词。（默认值：'the,and,but,not,then,they,will,not,your,from,them,was,with,what,who,why,where,this,over,than'）
* 相关笔记的链接附加到活动笔记。（默认值：启用）

默认快捷键：`<CMD>+6`

**命令：**切换附加链接设置

切换将相关笔记附加到活动笔记的设置。

* 使用*显示可能的链接*命令时，将相关笔记的链接附加到活动笔记。（默认值：启用）

### 设置

* **追加链接**
  * 在使用“显示可能链接”命令时，会在活动笔记后追加一个相关笔记的链接。（默认：启用）
  * 请参考上面的 GIF 图示例。
* **最小字母数**
  * 搜索具有超过 X 个字符的单词。（默认：3 个字符）
  * 例如，单词“for”包含 3 个字符，因此在搜索相关笔记时，“for”将不会被用作术语。
* **忽略日记路径**
  * 忽略日记路径。（默认：禁用）
  * 如果希望忽略特定目录中的所有笔记，可以在此处输入相对于存储库根目录的文件夹。
    * 如果您的存储库根目录中有一个名为“dailies”的文件夹，请在此设置中输入 `dailies` 以在使用“显示可能链接”命令时忽略其中的所有笔记。
* **过滤词汇**
  * 忽略设置中指定的单词。（默认：'the,and,but,not,then,they,will,not,your,from,them,was,with,what,who,why,where,this,over,than'）
  * 在使用“显示可能链接”命令时，忽略列出的任何单词。用逗号简单分隔它们。不区分大小写。

### 支持