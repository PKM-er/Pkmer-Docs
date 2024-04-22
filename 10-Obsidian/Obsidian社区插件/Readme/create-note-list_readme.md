---
uid: 2024042221332883
title: Obsidian 插件：【Readme】Create List of Notes
tags: ['obsidian插件', 'readme']
description: 在父文件夹中创建一个包含笔记的项目列表，并在YAML前置内容之后将其添加到当前笔记内容前。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Create List of Notes

> [!Note] 插件名片
> - 插件名称：Create List of Notes
> - 插件作者：Andrew Heekin
> - 插件说明：在父文件夹中创建一个包含笔记的项目列表，并在 YAML 前置内容之后将其添加到当前笔记内容前。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/andrewheekin/obsidian-create-note-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?create-note-list)

## 概述

在父文件夹中创建一个包含笔记的项目列表，并在 YAML 前置内容之后将其添加到当前笔记内容前。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewheekin/obsidian-create-note-list/main/README.md)

---

## Readme(翻译）

下面是 [[create-note-list]] 插件的自述翻译

# 黑曜石创建笔记列表插件

This plugin creates a bulleted list of all notes (or folder notes) contained within the current note's parent folder at the cursor position. This is useful for creating a table of contents or a list of related notes.

This plugin may be used with folder notes or regular notes. At the moment, there is no option to recursively list notes in subfolders.

## 命令

创建 NoteList：列出文件

此命令将在当前笔记的父文件夹中创建一个带有项目符号的列表。列表根据设置进行排序。

创建 NoteList：列出文件夹

这个命令会创建一个项目符号列表，列出当前笔记所在文件夹中的所有文件夹笔记。列表会根据设置进行排序。

## 设置

" 排序顺序 "

- 选项：升序（A-Z）或降序（Z-A）
- 此设置确定了笔记在项目列表中列出的顺序。

#### " 仅日期格式化的笔记 "

- 选项：是或否
- 此设置确定是否仅包括标题以 YYYY-MM-DD 日期开头的笔记在项目符号列表中。

## 示例输出

### 例子 1

示例文件夹结构＃1：

```
Roman Emperors
├── Roman Emperors.md
├── Augustus.md
├── Julius Caesar.md
└── Nero.md
```

在使用“创建笔记列表：列出文件”运行后的 `Sort Order: Ascending (A-Z)` 和 `Date Formatted Notes Only: No` 的 `Roman Emperors.md`

```markdown
---
title: "Roman Emperors"
---

- [[Augustus]]
- [[Julius Caesar]]
- [[Nero]]
```

### 例子 2

示例文件夹结构＃2：

```
My Folder
├── 2024-04-03 Note 1.md
├── 2024-04-04 Note 2.md
├── 2024-04-05 Note 3.md
├── Note 4.md
├── Note 5.md
└── My Note.md
```

在使用“创建 NoteList：列出文件”运行后的 `Sort Order: Descending (Z-A)` 和 `Date Formatted Notes Only: Yes` 的 `My Note.md`

```markdown
---
title: "My Note"
---

- [[2024-04-05 Note 3]]
- [[2024-04-04 Note 2]]
- [[2024-04-03 Note 1]]
```

### 示例 3（文件夹注释）

具有“文件夹注释”的示例文件夹结构＃3（文件夹中带有与注释相同名称的注释）：

```
Roman Emperors
├── Roman Emperors.md
├── Augustus
│   └── Augustus.md
├── Julius Caesar
│   └── Julius Caesar.md
└── Nero
    └── Nero.md
```

在使用“创建笔记列表：列出文件夹”运行后的 `Roman Emperors.md`，`排序顺序：升序（A-Z）` 和 `仅格式化日期的注释：否`

```markdown
---
title: "Roman Emperors"
---

- [[Augustus]]
- [[Julius Caesar]]
- [[Nero]]
```

## 更新日志

请查看 [CHANGELOG.md](CHANGELOG.md) 获取更改列表。
