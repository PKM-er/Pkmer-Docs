---
uid: 1793625616085000
title: "Obsidian 插件：Meaningful Name"
tags: ["界面优化", "文件管理", "导航与状态栏", "obsidian插件"]
description: "Shows a readable name from a note's frontmatter in place of its filename: explorer, tabs, graph, search and more. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Meaningful Name

> [!Note] 插件名片
> - 插件名称：Meaningful Name
> - 插件作者：hacpaka
> - 插件说明：Shows a readable name from a note's frontmatter in place of its filename: explorer, tabs, graph, search and more. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '文件管理', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hacpaka/obsidian-meaningful-name)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?meaningful-name)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hacpaka/obsidian-meaningful-name/master/README.md)



## 概述

Meaningful Name 插件旨在解决 Obsidian 笔记文件名不便于阅读的问题，例如时间戳或随机 ID 命名的文件。它的核心功能是从笔记的 frontmatter 中提取指定的标题字段，并在应用界面的各个位置显示该标题，同时完全保留磁盘上的原始文件名不变。这意味着你可以继续按照自己的习惯命名文件，而在日常使用中看到更友好、更具描述性的名称，无需手动重命名任何文件。

典型的使用场景包括管理大量按日期或 ID 命名的笔记。例如，当你有一篇名为 `202208251731.md` 的笔记，其 frontmatter 中设置了 `name: 项目会议记录`，插件会在文件浏览器、标签页和搜索栏中直接显示“项目会议记录”。另一个场景是在图谱视图或画布中，节点和卡片也会显示这些友好的标题，帮助你更直观地理解笔记之间的关系，而不是面对一堆难以辨认的文件名。

相比同类插件，Meaningful Name 提供了更细粒度的显示控制，允许用户独立开启或关闭文件浏览器、搜索、快速切换器、书签、反向链接、标签页、笔记头部、内联标题、窗口框架、图谱和画布等位置的标题显示。此外，它还支持可选地重写链接文本，将 `[[202208251731]]` 这样的链接显示为笔记的实际标题。该插件基于 Front Matter Title 修改而来，默认读取 `name` 字段，并提供了模板功能以构建更复杂的标题逻辑。

使用前需注意，frontmatter 中用作标题的值必须是字符串、数字或列表，如果字段缺失或为空，插件会回退显示原始文件名。该插件仅改变显示效果，不会修改或重命名任何文件，因此不适合那些需要实际更改磁盘文件名的需求。如果你希望文件名本身在系统中就具有可读性，或者依赖文件名进行自动化脚本处理，此插件可能不是最佳选择，因为它仅影响 Obsidian 内部的视觉呈现。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


