---
uid: 1793625608703000
title: "Obsidian 插件：Branch Mover"
tags: ["文件管理", "模板与链接处理", "图谱", "obsidian插件"]
description: "Right-click a note in Graph View to move its branch of linked notes into folders, with links kept intact. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Branch Mover

> [!Note] 插件名片
> - 插件名称：Branch Mover
> - 插件作者：Mohan Das Adhikari
> - 插件说明：Right-click a note in Graph View to move its branch of linked notes into folders, with links kept intact. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jokeroct/branch-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?branch-mover)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jokeroct/branch-mover/master/README.md)



## 概述

Branch Mover 旨在解决 Obsidian 库中笔记结构混乱的问题，核心功能是通过右键点击图谱视图中的笔记，将其关联的“分支”笔记批量移动至指定文件夹。该插件能自动识别笔记间的链接关系，在移动文件的同时保持所有内部链接完好无损，无需手动调整引用，从而帮助用户快速整理散落在根目录或杂乱无章的主题笔记。

典型使用场景包括整理长期积累的主题库。例如，当“生物化学”笔记下积累了大量子笔记且散落在库根目录时，只需在图谱中选中该主笔记，选择目标文件夹，插件即可将相关子笔记及其子级笔记一并归档。另一个场景是处理带有复杂层级结构的笔记，如将“碳水化合物”及其下属的单糖、双糖等子笔记，按照层级关系自动整理进对应的子文件夹中，实现一步到位的结构化存储。

相比同类插件，Branch Mover 的特色在于其智能的层级处理与冲突解决机制。它允许用户选择移动的深度（仅子级、两级或全部），并支持根据笔记层级自动创建子文件夹结构。此外，它具备严谨的安全机制：对于被分支外笔记共享的附件或笔记，默认不移动以避免破坏外部链接；遇到同名文件时，会提供跳过或重命名选项，确保绝不覆盖现有文件。这种对链接完整性和数据安全的细致考量，使其在批量操作时更加可靠。

使用前需注意，该插件主要依赖图谱视图操作，文件资源管理器中需通过命令面板调用。它不适合需要频繁手动微调单个笔记位置的用户，也不支持移动端使用。此外，若笔记中存在向上链接至父级以上的复杂循环引用，插件会将其排除在移动范围外并在对话框中提示，用户需确认这些被排除的文件是否符合预期。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


