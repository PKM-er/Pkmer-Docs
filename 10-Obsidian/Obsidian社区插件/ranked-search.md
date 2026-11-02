---
uid: 1793625620556000
title: "Obsidian 插件：Ranked Search"
tags: ["搜索与排序", "效率工具", "文件管理", "obsidian插件"]
description: "Search your vault with the closest match first, ranking exact titles and headings above notes that only mention your words. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ranked Search

> [!Note] 插件名片
> - 插件名称：Ranked Search
> - 插件作者：mprince
> - 插件说明：Search your vault with the closest match first, ranking exact titles and headings above notes that only mention your words. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mtptru/obsidian-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ranked-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mtptru/obsidian-search/master/README.md)



## 概述

Ranked Search 旨在解决 Obsidian 默认搜索排序不够智能的问题，通过重新排列结果，将最匹配的笔记置于列表顶端。它优先展示标题或标题完全一致的笔记，其次是标题包含关键词的笔记，最后才是正文中提及关键词的笔记。这种分层排序机制确保了当你寻找特定文档时，最相关的文件能第一时间出现在视野中，大幅减少了在大量无关结果中翻找的时间。

想象一下，当你搜索“reading list”时，插件会首先列出标题为“Reading List”的笔记，接着是“Reading List Archive”等以该短语开头的标题，然后才是“Fall Reading List”等包含该短语的标题。此外，它还能识别笔记中的别名（Aliases），将其视为标题进行匹配。如果搜索框为空，它还会列出你最近打开过的笔记，方便快速回溯工作进度。

相比同类插件，Ranked Search 具备强大的模糊匹配能力。它能自动处理复数形式（如“lists”匹配“List”）、驼峰命名（如“myReadingList”）以及拼写错误（如“reding”匹配“Reading”），甚至在输入过程中（如“reading li”）就能提供预测结果。对于排名相同的结果，它会优先显示最近编辑过的笔记。每条结果都附带文件夹路径和高亮预览，点击后直接定位到匹配行并选中文字，极大提升了检索效率。

需要注意的是，该插件完全在本地运行，不发送任何数据到网络，隐私安全。但它主要优化的是搜索结果的排序逻辑，而非增加新的搜索维度。如果你需要复杂的全文检索语法、正则表达式支持，或者希望替换 Obsidian 内置搜索的全部功能，它可能不是最佳选择。此外，它通过内存索引工作，对于超大库的初始加载可能需要短暂时间，且不支持排除特定文件类型，仅能按文件夹排除。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


