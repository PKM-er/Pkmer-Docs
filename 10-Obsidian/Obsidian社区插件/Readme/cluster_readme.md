---
uid: 2024042221420398
title: Obsidian 插件：【Readme】Cluster
tags: ['obsidian插件', 'readme']
description: Make the notes clustering simpler on mobile devices and work well on PCs ether, Notes Clustering is the process of creating hierarchical notes structures.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Cluster

> [!Note] 插件名片
> - 插件名称：Cluster
> - 插件作者：Lorens Osman
> - 插件说明：Make the notes clustering simpler on mobile devices and work well on PCs ether, Notes Clustering is the process of creating hierarchical notes structures.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lorens-osman-dev/cluster)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cluster)

## 概述

Make the notes clustering simpler on mobile devices and work well on PCs ether, Notes Clustering is the process of creating hierarchical notes structures.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lorens-osman-dev/cluster/master/README.md)

---

## Readme(翻译）

下面是 [[cluster]] 插件的自述翻译

【机翻】

![clusterSvg](https://raw.githubusercontent.com/lorens-osman-dev/cluster/16c7f97a3f24322de18d9540fa7170817b80a7cc/cluster-plugin-lorens-osman.svg)

## 集群插件主要设计用于简化在移动设备上为 [Obsidian](https://obsidian.md/) 进行笔记聚类的过程，并且在 PC 上也能很好地运行

### 笔记聚类

Note clustering is a way to create a hierarchy or structure among your notes, making it easier to navigate, search and understand the relationships between them.

### 集群插件

提供父子层次结构、命令、笔记内按钮和功能区按钮，使集群过程在移动设备上更加简便，并在 PC 上运行良好。

**简单示例：**

想象一下，您有关于不同动物的笔记。您可以创建 " 动物集群 "，如下所示：

- 动物（集群）
    - 哺乳动物（第一代笔记）
        - 狗（第二代笔记）
        - 猫（第二代笔记）
        - 鲸鱼（第二代笔记）
    - 鸟类（第一代笔记）
        - 鹰（第二代笔记）
        - 企鹅（第二代笔记）
        - 猫头鹰（第二代笔记）

使用 `Cluster` 插件可以轻松实现以上功能。

### 不要被这些话吓到

我知道这个解释可能听起来有点技术性，可能会让事情听起来复杂，但实际上使用这个插件非常简单、直观和直接。通过尝试使用插件，你会比先阅读所有细节更快地学会它。

### 在使用 `Cluster` 插件对笔记进行聚类之前

您需要两个文件夹 `CLUSTERS` 和 `ORPHANS`。`CLUSTERS` 文件夹将包含所有链接的笔记，而 `ORPHANS` 文件夹将包含未链接的笔记。

您可以手动创建这些文件夹，或者如果您点击工具栏上的 `创建新的聚类` 按钮，这些文件夹将会自动创建。此按钮将检查 `CLUSTERS` 和 `ORPHANS` 文件夹是否存在，如果这些文件夹不存在，它将在创建 `CLUSTERS` 文件夹内的新聚类之前先创建它们。

### 按钮

当您从 `CLUSTERS` 或 `ORPHANS` 文件夹中打开一个笔记时，`Cluster` 插件会显示两组按钮，一组是专门针对 `CLUSTERS` 文件夹中的笔记，另一组是针对 `ORPHANS` 文件夹中的笔记。

#### CLUSTERS 按钮

![clusters buttons](https://cdn.pkmer.cn/covers/cluster_1_1.png!pkmer)

#### ORPHANS Buttons

![ORPHANS Buttons](https://cdn.pkmer.cn/covers/cluster_1_2.png!pkmer)

![cluster](https://github.com/lorens-osman-dev/cluster/blob/assets/cluster.svg)

- This button creates new note inside `CLUSTERS` folder and the note's name will followed by `-cluster` added to the end.
- We refer to this note as the `cluster`, and it's the main note.
- The `cluster` has a generation value of `0` as property .
- The `cluster` has a tag called `Cluster`. All main notes (also known as `cluster`) will have this `Cluster` tag.

![baby](https://github.com/lorens-osman-dev/cluster/blob/assets/babdc.svg)

- This button creates a new note linked to the current note, we call it `son` note.
- `son` note means the new created note will contains link to the current note and tag with cluster's name.
- The generation property of the `son` note will be the current note's generation +1
- A new folder with the same name of current note will be created for all `son` notes of the current note.

![brother](https://github.com/lorens-osman-dev/cluster/blob/assets/git-compare.svg)

- This button creates a new note beside the current note, we call it `brother` note.
- `brother` note means the new created note will copy the parent link, the cluster's tag and the generation property from current note.

![orphan](https://github.com/lorens-osman-dev/cluster/blob/assets/disc.svg)

- This button creates a new note inside `ORPHANS` folder.
- `orphan` note has no parent link and no hierarchy.

![delete](https://github.com/lorens-osman-dev/cluster/blob/assets/trash-2.svg)

- This button deletes current note.
- If the current note has no brothers the containing folder will be deleted.
- If the current note has sons the sons will be deleted along with their own folders.
- If the current note is `cluster` all the cluster's files and folders will be deleted.

![extra buttons](https://github.com/lorens-osman-dev/cluster/blob/assets/arrow-left-square.svg?raw=true)

- Toggle extra buttons.

![deletes the current line](https://github.com/lorens-osman-dev/cluster/blob/assets/arrow-left-from-line.svg?raw=true)

- This button deletes the current line.
- Very useful for phone users.
- Very useful to delete images and links when using phone device.

### 🤩🪄 插件功能

- 在手机设备和电脑上轻松对笔记进行聚类。
- 直观的文件夹：将相关的笔记分组到文件夹中，以保持清晰的层次结构。
- 自动生成有用的笔记属性，有助于搜索、图形视图和维护笔记聚类过程。

### ⚙️ PC 推荐

- 将 `Ctrl+Shift+B` 热键设置为新建兄弟命令。
- 将 `Ctrl+Shift+S` 热键设置为新建子命令。
- 将 `Ctrl+Shift+C` 热键设置为新建集群命令。
- 将 `Ctrl+Shift+D` 热键设置为删除活动笔记命令。

如果您喜欢这个插件，请随意通过购买一杯咖啡来支持开发：

##

### 鸣谢

感谢 Obsidian 社区中所有为测试和报告错误做出贡献的人。

我们的一些灵感来自以下项目

<https://github.com/vanadium23/obsidian-advanced-new-file>
