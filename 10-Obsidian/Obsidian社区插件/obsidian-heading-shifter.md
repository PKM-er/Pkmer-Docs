---
uid: 20241225102133
title: Obsidian 插件：Heading Shifter 简单易用的批量修改标题工具
tags: ['编辑工具', '样式与美化', '快捷键', 'obsidian插件']
description: Obsidian 插件：Heading Shifter 简单易用的批量修改标题工具
author: OS
type: auto
draft: false
editable: false
modified: 20250314114016
---

# Obsidian 插件：Heading Shifter 简单易用的批量修改标题工具

> [!Note] 插件名片
> - 插件名称：Heading Shifter
> - 插件作者：kasahala
> - 插件说明：轻松调整和更改 Markdown 标题。
> - 插件分类：[' 编辑工具 ', ' 样式与美化 ', ' 快捷键 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/k4a-l/obsidian-heading-shifter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-heading-shifter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/k4a-l/obsidian-heading-shifter/main/README.md)

## 概述

Obsidian Heading Shifter 是一个可以轻松调整和更改 Markdown 标题的插件。通过该插件，用户可以批量更改标题的大小（即 `#` 的数量），而不需要手动逐个更改。这对于在 Obsidian 中链接多个 Markdown 文件以构建知识库时进行日常整理非常有用，可以快速处理文件间标题的变化，提高知识库的整体质量。插件提供了多种命令和设置，包括应用标题、移动标题等功能，用户可以通过快捷键或命令来操作，提高工作效率。插件还支持手动安装和 Obsidian 内安装两种方式，具有良好的灵活性和易用性。

> [!Note] 插件名片
> - 插件名称：heading-shifter
> - 插件作者：kasahala
> - 插件说明：轻松移动和更改 Obsidian 标题语法中层级
> - 插件分类：[' 标题 ',' 语法 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/k4a-l/obsidian-heading-shifter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?heading-shifter)

## 效果&特性

![Heading Shifter](https://cdn.pkmer.cn/covers/obsidian-heading-shifter.gif!pkmer)

- 通过快捷键，即可快速变化标题层级

## 使用

- 你可以通过命令面板和快捷键来修改某个具体标题等级，提升等级或者降低
- 批量，你可以直接权限内容，然后直接改变等级，插件会自动为标题语法修改等级

| Command           | Description                         | Hotkey |
| ----------------- | ----------------------------------- | ------ |
| Apply Heading 0   | Change Current line to no heading.  | -      |
| Apply Heading 1~6 | Change Current line to heading 1~6. | -      |

## 设置

| Setting                      | Description                                                                                                                                                                                                     | Value(Default) |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Lower limit of Heading       | The lower Heading Size that will be decreased by the Heading Shift                                                                                                                                              | 0~6(1)         |
| Enable override tab behavior | If true, Tab execute "Increase Headings" and Shift-Tab execute "Decrease Headings" [1](https://github.com/k4a-l/obsidian-heading-shifter?tab=readme-ov-file#user-content-fn-2-a395938d2b6e2b867a4dc18ed4d7ea65) | boolean(false) |

### 插入标题

| Command                            | Description                                       | Hotkey |
| ---------------------------------- | ------------------------------------------------- | ------ |
| Insert Heading at current level    | Change current line headings to current level     |        |
| Insert Heading at one level deeper | Change current line headings to current level + 1 |        |
| Insert Heading at one level higher | Change current line headings to current level - 1 |        |

### 标题样式

这是在“单个”行中应用标题时删除或保留特定样式之间的切换

`-` or `1.`,`2.`,`n.` or `user defined string(RegExp)`

| Before             | After(True) | After(False) |              |
| ------------------ | ----------- | ------------ | ------------ |
| `-` (ul)           | `- line`    | `## line`    | `## - line`  |
| `1.` (ol)          | `1. line`   | `## line`    | `## 1. line` |
| `🤔`(user defined) | `🤔line`    | `## line`    | `## 🤔line`  |

`**`, `_` , etc... or `user defined string(RegExp)`

|Before|After(True)|After(False)|
|---|---|---|
|`**`(bold)|`**line**`|`## line`|`## **line**`|
|`_`(italic)|`_line_`|`## line`|`## _line_`|
|`🤔`(user defined)|`🤔line🤔`|`## line`|`## 🤔line🤔`|