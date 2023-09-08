---
uid: 20230822233839
title: Obsidian 插件：Order List 超级方便的大纲排序小工具
tags:
  - obsidian插件
  - readme
description: 添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。
author: AI
type: readme
draft: false
editable: false
modified: 20230908161242
---

# Obsidian 插件：Order List 超级方便的大纲排序小工具

## 概述

添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序

> [!Note] 插件名片
> - 插件名称：Order List
> - 插件作者：Henry Gustafson
> - 插件说明：添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/lizard-heart/obsidian-order-list-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?order-list)

## 效果&特性

这个插件为 [Obsidian](https://obsidian.md/) 添加了一个 "Order selected list" 命令。这将按照段落末尾的数字对选定的列表进行排序。

## 使用

- 在编辑器中圈选任何带有或不带有项目符号的列表。
- 从命令面板中运行命令“Order selected list”（你也可以设置快捷建）。
- 移动规则
	- 项目会按照数字大小，自小至大排序
	- 没有序号数字的不排序
	- 包含子项目的会跟着父级项目一起移动

### 示例

**无项目符号的重新排序列表：**

```markdown
replace blinds 10
clean my room 5
buy a new shelf 6
get new boxes 7
```

变为

```markdown
clean my room 5
buy a new shelf 6
get new boxes 7
replace blinds 10
```

**带有 * 项目符号的重新排序列表**：

```markdown
* replace blinds 10
* get new boxes 7
* clean my room 5
* buy a new shelf 6
```

变为

```markdown
* clean my room 5
* buy a new shelf 6
* get new boxes 7
* replace blinds 10
```

**如果有子项目，它们将与顶级项目一起移动**：

```markdown
- replace blinds 7/2
- buy a new shelf 6/100
	- sub-item
- get new boxes 4/2
- clean my room 5/6
	- test
	- second thing
```

变为

```markdown
- buy a new shelf 6/100
	- sub-item
- clean my room 5/6
	- test
	- second thing
- get new boxes 4/2
- replace blinds 7/2
```

请注意，即使末尾的数字不是整数，插件也会正确排序。
