---
uid: 20230509181857
title: Obsidian 插件：Fuzzy Chinese Pinyin
tags: Obsidian,插件,拼音,模糊搜索
description: Obsidian 插件：Fuzzy Chinese Pinyin 可以基于汉语拼音进行模糊搜索
author: 
type: other
draft: false
editable: false
modified: 20230515231134
---

# Obsidian 插件：Fuzzy Chinese Pinyin

Obsidian 的搜索可以为我们提供多种模式的搜索，包括标题、标签等。但是我们的输入可能绝大部分还是以中文为主，这时候我们可能会习惯，一般搜索引擎提供的基于汉语拼音进行搜索的能力。

Fuzzy Chinese Pinyin 提供中文拼音搜索的功能，其他功能与核心插件一致。

> [!Note] 插件名片
> - 插件名称：Fuzzy Chinese Pinyin
> - 插件作者：lazyloong
> - 插件说明：可以基于汉语拼音进行模糊搜索
> - 插件项目地址：[点我跳转](https://github.com/lazyloong/obsidian-fuzzy-chinese)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230509182704.png!pkmer)

## 使用

- 通过 Ctrl/Cmd + P 呼出命令面板，输入 `Fuzzy Chinese Pinyin:Open Search`
- 回车进入插件提供的搜索框（可以在设置 -> 快捷键中设置，解决访问路径过长问题）
- 在插件的搜索框内，你可以直接使用全拼或首字母搜索
	- 支持标题的全拼和首字母搜索
	- 支持繁体文字的搜索
	- 支持按照文件路径的搜索
	- 支持搜索附件文件

>[!Tip] 提示
>- 虽然说是和 `搜索` 核心插件一样，但是该插件目前没有提供搜索面板。
>- 提供的搜索能力，没有整合到默认的搜索能能力。

### 搜索结果样式

- 显示标签（Tag）：在搜索结果对应的结果条目上，展示笔记的附件，如图片、视频、PDF 等附件文件。
- 显示搜索路径：当搜索结果少于 10 个时，搜索结果中对应条目上显示其路径