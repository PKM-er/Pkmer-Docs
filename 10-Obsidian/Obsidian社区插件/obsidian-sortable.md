---
uid: 20230430003417
title: Obsidian 插件：Sortable 为表格提供简单的排序功能
description: 
author: 
type: other
draft: false
editable: false
modified: 20230430004721
---

# Obsidian 插件：Sortable 为表格提供简单的排序功能

## 概述

就是用 Markdown 表格语法，生成的表格，或者使用 Dataview、Obsidian Query Language 等插件生成表格。或许你希望这个表格上有一个简单的排序功能，而不是每次就只能按照生成顺序预览。

> [!Note] 插件名片
> - 插件名称：Sortable
> - 插件作者：Alexandru Dinu
> - 插件说明：提供搜索 Obsidian 设置和插件设置选项的能力
> - 插件项目地址：[点我跳转](https://github.com/argenos/nldates-obsidian)

## 效果&特性

- 第一次点击：升序
- 第二次点击：降序
- 第三次点击：恢复默认顺序

## 使用

- 插件本身不包含任何设置项。

### 支持排序的数据类型

- 数字、字符串、ISO 日期
- 自定义比较函数是规划路线的一部分（请参见此 [issue](https://github.com/alexandru-dinu/obsidian-sortable/issues/12)
- 不会修改 Markdown 源代码。通过重新排列表格行（即 tr 元素）进行排序。
- 没有依赖项，不需要你额外再去下载或者安装其他插件。