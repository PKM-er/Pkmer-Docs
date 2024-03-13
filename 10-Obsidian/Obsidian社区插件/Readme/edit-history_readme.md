---
uid: 2023082011354716
title: Obsidian 插件：【Readme】Edit History
tags: ['obsidian插件', 'readme']
description: 保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Edit History

> [!Note] 插件名片
> - 插件名称：Edit History
> - 插件作者：Antonio Tejada
> - 插件说明：保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/antoniotejada/obsidian-edit-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?edit-history)

## 概述

保留您的笔记的自动编辑历史记录，可以查看历史记录，与之对比或恢复以前的编辑。

![Edit History](https://cdn.pkmer.cn/covers/edit-history.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/antoniotejada/obsidian-edit-history/master/README.md)

---

## Readme(翻译）

下面是 [[edit-history]] 插件的自述翻译

# Obsidian 编辑历史插件

该插件将每次对笔记的编辑保存到编辑历史文件中，可以随后进行差异比较或复制。

![image](https://github.com/antoniotejada/obsidian-edit-history/assets/6446344/fa9456d5-0de0-4160-bd06-6a38494f7c57)

这类似于 [文件恢复](https://help.obsidian.md/Plugins/File+recovery) 核心插件，具有以下优点：

- 可以保留任何类型文件的编辑历史，可通过设置进行选择
- 开源的编辑历史文件格式
- 历史文件独立保存在每个保险库和文件中
- 可以外部访问、检查、复制或删除历史文件
- 历史文件可以通过外部手段进行备份
- 高效的压缩差异存储，因此可以无限制地启用（编辑次数、编辑间隔、最大编辑年龄等）
- 透明的存储大小，易于查看给定保险库或笔记的编辑历史占用了多少空间

## 特点

- 浏览以前的编辑记录
- 将一个编辑与以前的编辑进行对比
- 手动复制和粘贴以前的编辑或部分以前的编辑
- 限制编辑历史频率（设置保存到历史文件的编辑之间的最大时间间隔）
- 通过编辑数量限制编辑历史文件大小（保留文件中少于一定数量的编辑，删除较旧的编辑）
- 通过编辑的年龄限制编辑历史文件大小（从历史文件中删除早于给定时间的编辑）
- 当在 Obsidian 下对笔记进行修改时，编辑历史文件会自动管理
  - 当笔记被重命名时（包括文件夹更改），编辑历史文件也会被重命名。
  - 当笔记被删除时，编辑历史文件会被删除
- 可以安全地在 Obsidian 之外删除编辑历史文件以释放存储空间。
- 可以为所有文件或仅为设置中指定的扩展名保留编辑历史文件。

## 使用方法

- 根据需要修改插件设置
- 像往常一样编辑笔记，编辑将保存在设置中指定的编辑历史文件中
- 可以通过调用命令*Edit History: Save current edit in the Edit History*手动保存编辑
- 点击时钟带状图标或调用命令*Edit History: Open Edit History For This File*打开此文件的编辑历史记录
  - 弹出一个带有存储的编辑下拉列表的对话框
  - 通过从下拉列表中选择来浏览不同的编辑
  - 插入显示为绿色，删除显示为红色
  - 使用复制按钮复制当前编辑内容
编辑历史文件

该插件为每个笔记创建一个编辑历史（.edtz）文件，保存在与笔记相同的文件夹中。

### 格式

编辑历史文件是一个使用 [diff-match-patch](https://github.com/google/diff-match-patch) 生成的差异压缩文件。

最新版本的笔记始终以完整形式存储在压缩文件中，因此编辑历史文件不依赖于笔记。

如果设置了非零的编辑时间间隔，那么最新版本可能不是笔记的最新版本。

文件中的每个条目都以 UTC 时间戳（以秒为单位）命名，编码为字符，并以 "$" 结尾，如果条目以完整形式存储，则以差异形式存储。

## 版本

[Github发布](https://github.com/antoniotejada/obsidian-edit-history/releases)

### [0.1.3](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.3) (2023-08-11)

- 在 README.md 中添加了版本部分

### [0.1.2](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.2) (2023-08-11)

- 修复问题 #4 <https://github.com/antoniotejada/obsidian-edit-history/issues/4>

### [0.1.1](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.1) (2023-06-23)

- 根据插件提交指南进行更改

### [0.1.0](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.2) (2023-06-17)

- 第一个完全功能的版本

## 待办事项

- 允许指定编辑历史根文件夹？
- 编辑差异的上一个/下一个导航
- 恢复给定的编辑
- 将一个编辑与另一个任意编辑进行差异比较
- 通过时间线/滑块/日历视图选择编辑日期
- 抽象出/重构对编辑历史文件的访问
- 编辑历史文件管理：
  - 查找孤立文件
  - 每个文件/存储库的统计信息
  - 合并/删除编辑
  - ...



