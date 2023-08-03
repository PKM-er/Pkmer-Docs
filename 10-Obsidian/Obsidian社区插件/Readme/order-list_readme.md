---
uid: 20230803231105
title: Obsidian 插件：Order List
tags: ['obsidian插件', 'readme']
description: 添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232434
---

# Obsidian 插件：Order List

> [!Note] 插件名片
> - 插件名称：Order List
> - 插件作者：Henry Gustafson
> - 插件说明：添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lizard-heart/obsidian-order-list-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?order-list)

## 概述

添加“排序选定列表”命令，以按末尾的数字对所选列表进行排序。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lizard-heart/obsidian-order-list-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[order-list]] 插件的自述翻译

# 订单列表

这个插件为 [Obsidian](https://obsidian.md/) 添加了一个 "Order selected list" 命令。这将按照末尾的数字对选定的列表进行排序。

如何配置

为“Order selected list”命令分配一个热键。

## 如何使用

- 在编辑器中选择任何带有或不带有项目符号的列表。
- 从命令面板中运行命令“Order selected list”（或您分配的热键）。

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
