---
uid: 20230901102530
title: Obsidian 插件：Edit History 也许是最好的笔记历史管理器
tags: [obsidian插件]
description: 保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑。
author: OS
type: readme
draft: false
editable: false
modified: 20230908150420
---

# Obsidian 插件：Edit History 也许是最好的笔记历史管理器

> [!Note] 插件名片
> - 插件名称：Edit History
> - 插件作者：Antonio Tejada
> - 插件说明：保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑。
> - 插件分类：['Obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/antoniotejada/obsidian-edit-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?edit-history)

## 概述

该插件将每次对笔记的编辑保存到编辑历史文件中，建议理解为自动编辑历史记录，可以随后进行差异比较或复制。

![Edit History|944](https://cdn.pkmer.cn/covers/edit-history.png!pkmer)

- 可以保留任何类型文件的编辑历史，可通过设置进行选择
- 开源的编辑历史文件格式
- 历史文件独立保存在每个保险库和文件中
- 可以外部访问、检查、复制或删除历史文件
- 历史文件可以通过外部手段进行备份
- 高效的压缩差异存储，因此可以无限制地启用（编辑次数、编辑间隔、最大编辑年龄等）
- 透明的存储大小，易于查看给定保险库或笔记的编辑历史占用了多少空间

## 使用

- 保存历史记录
	- 手动：可以通过调用命令【*Edit History: Save current edit in the Edit History*】手动保存编辑
	- 自动：通过是这【Minimum seconds between edits】编辑历史频率（设置保存到历史文件的编辑之间的最大时间间隔）
		- 默认时间 60s
- 查看历史记录
	- 点击时钟带状图标
	- 或调用命令【*Edit History: Open Edit History For This File*】打开此文件的编辑历史记录
![Edit History|525](https://cdn.pkmer.cn/covers/edit-history.png!pkmer)

- 当在 Obsidian 下对笔记进行修改时，编辑历史文件会自动管理
  - 当笔记被重命名时（包括文件夹更改），编辑历史文件也会被重命名。
  - 当笔记被删除时，编辑历史文件会被删除
- 历史记录数量控制
	- 通过【Maximum age of edits】编辑数量限制编辑历史文件大小（保留文件中少于一定数量的编辑，删除较旧的编辑）
	- 通过【Maximum size of the history file (KB)】限制历史文件大小（历史文件超过限制后，会删除早于给定时间的编辑）

![image.png|625](https://cdn.pkmer.cn/images/20230908145057.png!pkmer)

### 独立的历史记录存储文件

- 该插件为每个笔记创建一个编辑历史（.edtz）文件，保存在与笔记相同的文件夹中。
- 可以安全地在 Obsidian 之外删除编辑历史文件以释放存储空间。
- 可以为所有文件或仅为设置中指定的扩展名保留编辑历史文件。

编辑历史文件是一个使用 [diff-match-patch](https://github.com/google/diff-match-patch) 生成的差异压缩文件。

最新版本的笔记始终以完整形式存储在压缩文件中，因此编辑历史文件不依赖于笔记。

如果设置了非零的编辑时间间隔，那么最新版本可能不是笔记的最新版本。

文件中的每个条目都以 UTC 时间戳（以秒为单位）命名，编码为字符，并以 "$" 结尾，如果条目以完整形式存储，则以差异形式存储。
