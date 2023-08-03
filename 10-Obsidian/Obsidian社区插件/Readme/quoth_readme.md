---
uid: 2023080322252988
title: Obsidian 插件：【Readme】Quoth
tags: ['obsidian插件', 'readme']
description: 更灵活的嵌入。嵌入精确的选择，内联嵌入，可选择性地包括作者和标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quoth

> [!Note] 插件名片
> - 插件名称：Quoth
> - 插件作者：Eric Rykwalder
> - 插件说明：更灵活的嵌入。嵌入精确的选择，内联嵌入，可选择性地包括作者和标题。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/erykwalder/quoth)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quoth)

## 概述

更灵活的嵌入。嵌入精确的选择，内联嵌入，可选择性地包括作者和标题。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/erykwalder/quoth/main/README.md)
> 

---

## Readme(翻译）

下面是 [[quoth]] 插件的自述翻译


# Quoth 插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，
它允许以比标准的嵌入语法更灵活的方式嵌入其他 Markdown 文件。

它可以实现以下功能：

- 嵌入单个块的部分内容
- 在一个“引用”中嵌入多个部分
- 内联嵌入，使其与其他内容对齐
- 自动添加嵌入的来源作者和标题

复制引用

使用该插件的最简单方法是使用复制引用命令。
这将从源模式或预览模式中选择一个引用代码块
并将其复制到剪贴板中，可以粘贴到其他文档中。
此操作的快捷键取决于您的操作系统，可以是`Ctrl-Shift-'`或`Cmd-Shift-'`。

## 代码块

代码块也可以手动构建，某些功能需要手动构建。
代码块中的所有字段如下所示：

    ```quoth
    path: [[文件名#标题]]
    ranges: "Hello " 到 "world.", "Foobar" 到 "Bizzbaz"
    join: " -- "
    display: inline
    show: 作者, 标题
    ```

### 字段

> #### `path`
>
> **语法:** `[[filename#subpath]]`
>
> **subpath 语法**:
>
> - 一个标题: `#Some heading`
> - 一个块标识: `#^blockid`
> - 一个列表项: `#-Some list item`
>
> **默认值:** 无
>
> **描述:** **必需**。要包含的内容的路径，格式类似于 Obsidian 链接。还支持指定列表项。子路径中可以链接多个标题或多个列表项。

> #### `ranges`
>
> **语法:** `range, range`
>
> **range 语法:**
>
> - `"text" to "text"`
> - `"whole quote"`
> - `line:col to line:col`
> - `after "text"`
> - `after line:col`
>
> **默认值:** 无
>
> **描述:** 要嵌入的路径的子选择。多个范围由 `, ` 连接。

> #### `join`
>
> **语法:** `"string"`
>
> **默认值:** `" ... "`
>
> **描述:** 如何组合多个范围。
> 只有在指定了2个或更多个范围时才使用该字段。

> #### `display`
>
> **语法:**
>
> - `embedded`
> - `inline`
>
> **默认值:** `embedded`
>
> **描述:** 如何显示嵌入内容。

> #### `show`
>
> **语法:** `option, option`
>
> **选项:**
>
> - `author`
> - `title`
>
> **默认值:** 无
>
> **描述:** 是否包含源作者或标题。
> 多个选项可以用 `, ` 连接。

### 已弃用的字段

| 行数      | 语法               | 描述                                                                                                                                   | 默认值 |
| --------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `file`    | `[[filename]]`       | **已弃用。请使用 path 替代。** 内部链接语法中的 markdown 文件名。                                                    | None    |
| `heading` | `#heading1#heading2` | **已弃用。请使用 path 替代。** 嵌入内容的父标题。这些标题区分大小写。可以链式使用多个以增加特定性。 | None    |
| `block`   | `^blockid`           | **已弃用。请使用 path 替代。** 包含引用的块 ID。                                                                          | None    |

限制

当前实现存在一些限制：

- 仅在可以重建底层markdown的情况下，从预览模式复制才有效。
  目前不支持诸如mathjax之类的内容。
  您始终可以从源代码/实时模式复制。
- 嵌入内容不能包含另一个quoth代码块，
  因为这可能导致无限递归。
- 渲染依赖于对Obsidian的renderMarkdown API的异步调用，
  因此依赖于后处理的嵌入（如其他嵌入）将无法工作。
- 它仅用于显示。它不能执行更新原始源代码的操作，例如勾选复选框。



