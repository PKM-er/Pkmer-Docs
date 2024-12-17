---
uid: 20241026225112
title: Obsidian 插件：Rich Foot
tags: [编辑工具, 文字处理, 笔记管理, obsidian插件, Obsidian]
description: 在您的笔记页脚添加反向链接标签以及创建/修改日期。
author: Chenghuang,OS
type: auto
draft: false
editable: false
modified: 20241217113809
---

# Obsidian 插件：Rich Foot

## 概述

这个插件体用了一个更加丰富的页脚/页底信息，这个信息包含了 Obsidian 的出链和入链能力，完全可以代替默认功能。

> [!example]
> - 插件名称：Rich foot
> - 插件作者：Justin Parker
> - 插件版本：1.6.2
> - 插件分类：[' 编辑工具 ', ' 文字处理 ', ' 笔记管理 ', 'obsidian 插件 ']
> - 插件说明：`Rich foot` 插件可以在标签页底部（插件英文名中的 "foot" 需要与 `脚注(footnote)` 区别开，二者唯一的相同点是都位于标签页底部）以胶囊形式展示当前笔记的 `出链` 和 `入链（即核心插件中的反向链接）`，也可展示笔记的 `创建日期` 和 `修改日期`，并针对分割线、链接和日期的样式提供了丰富的自定义选项。
> - 插件项目地址：[点我跳转](https://github.com/jparkerweb/rich-foot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rich%20foot)

![Rich Foot|800](https://cdn.pkmer.cn/covers/rich-foot.jpeg!pkmer)

## 用法

安装并启用 `rich foot` 后，它将自动将以下内容展示在标签页底部：

- `出链`，即当前笔记中已存在的指向其他笔记的链接（包括文档属性中的链接），与核心插件中的 ' 出链 ' 功能有重叠部分，但不会自动检测可能存在的链接
- `入链`，即指向当前笔记的链接，与核心插件中的 ' 反向链接 ' 插件唯一的设置项 ' 在标签页中显示反向链接 ' 是一个功能
- `创建日期`，即用户首次创建当前笔记的日期
- `修改日期`，即用户最近一次修改当前笔记的日期

## 选项

可通过选项中的 `Add excluded folder` 命令来关闭特定文件夹及其子文件夹下辖笔记内的展示行为。但如果被除外文件夹中的笔记包含指向其他文件夹笔记的 `出链`，则在其他笔记的脚注位置依然会显示

- Visibility Settings
	- `Show Backlinks``Show Outlinks` 可选择是否在脚注位置展示 `入链`、`出链`
	- `Rich-foot update delay`：你可以控制每次编辑出链和入链后，foot 中更新的时间
- Date Settings：
	- `Show Dates`：显示 `创建日期` 和 `修改日期`
	- 你可以通过 `Date Display Format` 来定义显示格式
- Style Settings
	- 可对分割线的宽度、样式、透明度和颜色进行自定义
	- 可对链接的透明度、文字颜色、背景颜色和边缘颜色进行自定义
	- 可对日期文字的透明度和颜色进行自定义
- Exlusion Rules
	- 控制哪些文件夹不显示 footer