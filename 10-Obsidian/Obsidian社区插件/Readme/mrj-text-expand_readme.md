---
uid: 2023120719442713
title: Obsidian 插件：【Readme】Text expand
tags: ['obsidian插件', 'readme']
description: 搜索并粘贴/引用找到的文件链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Text expand

> [!Note] 插件名片
> - 插件名称：Text expand
> - 插件作者：MrJackphil
> - 插件说明：搜索并粘贴/引用找到的文件链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mrjackphil/obsidian-text-expand)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mrj-text-expand)

## 概述

搜索并粘贴/引用找到的文件链接

![Text expand](https://cdn.pkmer.cn/covers/mrj-text-expand_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mrjackphil/obsidian-text-expand/master/README.md)
>

---

## Readme(翻译）

下面是 [[mrj-text-expand]] 插件的自述翻译

# 文本扩展

![](https://cdn.pkmer.cn/covers/mrj-text-expand_2_0.gif!pkmer)

该插件将使用 [Obsidian搜索功能](https://publish.obsidian.md/help/Plugins/Search) 搜索文件，然后粘贴结果。可以使用 [模板功能](#template-engines) 自定义输出。

## 目录

- [基本用法](#how-to-use)
- [搜索功能]()
- [模板引擎](#template-engines)
    - [eta](#eta-template-engine)
    - [sequences](#sequence-template-engine-legacy)
        - [可用序列](#special-sequences)

如何使用

- 您应该像这样包装您的搜索请求

```
    ```expander
    SEARCH_QUERY
    ```
```

- 打开命令面板（`Ctrl + P`）
- 查找并运行“Text expand: expand”命令
- 它应该在包装的请求下方搜索并放置结果

## 搜索功能

扩展代码块中的第一行始终是一个搜索请求。

您可以将其留空以使用搜索面板中的结果。

一旦开始搜索，插件会等待一段时间（可配置），然后将搜索面板中的结果提取到模板引擎中。

模板引擎

### eta 模板引擎

您可以使用 [eta](https://eta.js.org) 模板引擎来管理结果。

```

## <%= it.current.frontmatter.title %>

<% it.files.forEach(file => { %>
   - <%= file.link %> 
<% }) %>
```

使用 `it` 对象来访问搜索结果和当前文件的字段。

| 路径         | 类型                  | 描述                      |
|--------------|-----------------------|----------------------------------|
| `it.current` | FileParameters        | 当前文件的信息          |
| `it.files`   | Array<FileParameters> | 搜索面板中文件的信息 |

`FileParameters` 类型具有以下字段。

| 名称        | 类型   | 描述                                      | 示例                                                      |
|-------------|--------|--------------------------------------------------|--------------------------------------------------------------|
| basename    | string | 文件名                                 | `Obsidian`                                                   |
| name        | string | 带扩展名的完整文件名             | `Obsidian.md`                                                |
| content     | string | 文件内容                              | `Obsidian\nContent of the file.`                             |
| extension   | string | 文件扩展名                            | `.md`                                                        |
| link        | string | Wiki 或 MD 链接（取决于 Obsidian 的设置） | `[[Obsidian]]`                                               |
| path        | string | 相对于 vault 根路径的文件路径          | `resources/Obsidian.md`                                      |
| frontmatter | Object | 返回 frontmatter 的所有值              | `{ title: "Obsidian", author: MrJackphil }`                  |
| stat        | Object | Obsidian 返回的文件统计信息                  | `{ ctime: 1654089929073, mtime: 1654871855121, size: 1712 }` |
| links       | Array  | 文件中的链接数组                     |                                                              |
| headings    | Array  | 文件中的标题数组                  |                                                              |
| sections    | Array  | 文件的章节数组                   |                                                              |
| listItems   | Array  | 文件的列表项数组                |                                                              |

### 序列模板引擎（遗留版本）

使用模板功能可以自定义输出。

- 将模板放在 SEARCH_QUERY 行下方
- 在代码块中放置光标和模板
- 打开命令面板（`Ctrl+P`）并找到 `Text expand: expand` 命令

创建列表的示例：

    ```expander
    SEARCH_QUERY
    - [[$filename]]
    ```

或者创建表格的示例：

    ```expander
    SEARCH_QUERY
    ^|文件名|内容|
    ^|---|---|
    |$filename|$lines:1|
    ```

语法如下：

    ```expander
    SEARCH_QUERY
    ^这是一个标题
    这一行将会为每个文件重复
    同样，[[$filename]] <- 这将是一个链接
    >这是一个页脚
    ```

- 以 `^` 开头的行是标题。它将添加在列表的顶部
- 以 `>` 开头的行是页脚。它将添加在列表的底部
- 没有特殊符号开头的行将为每个文件重复。此外，所有特殊序列将被替换。

#### 特殊序列

| 正则表达式               | 描述                                                                                                                   | 用法示例                                                     |
|--------------------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| `$filename`              | 文件的基本名称                                                                                                         | `$filename`                                                |
| `$link`                  | Wiki 链接                                                                                                               | `$link`                                                    |
| `$searchresult`          | 根据在搜索窗口中选择的上下文数量显示的 Obsidian 搜索结果的上下文                                                         | `$searchresult`                                            |
| `$matchline`             | 包含搜索查询的行                                                                                                       | `$matchline`                                               |
| `$matchline:NUMBER`      | 包含搜索查询和匹配行之前和之后的 NUMBER 行的行                                                                               | `$matchline:10`                                            |
| `$matchline:+NUMBER`     | 包含搜索查询和匹配行之后的 NUMBER 行的行                                                                                   | `$matchline:+10`                                           |
| `$matchline:COUNT:LIMIT` | 包含搜索查询和周围 NUMBER 行以及通过 LIMIT 字符限制行的行                                                                   | `$matchline:0:10`                                          |
| `$lines`                 | 文件的完整内容                                                                                                         | `$lines`                                                   |
| `$lines:NUMBER`          | 文件中的 NUMBER 行                                                                                                       | `$lines:10`                                                |
| `$ext`                   | 文件的扩展名                                                                                                           |                                                            |
| `$created`               |                                                                                                                        |                                                            |
| `$size`                  |                                                                                                                        |                                                            |
| `$parent`                | 父文件夹                                                                                                               |                                                            |
| `$path`                  | 文件的路径                                                                                                             |                                                            |
| `$frontmatter:NAME`      | 来自字段 `NAME` 的 frontmatter 值                                                                                          |                                                            |
| `$header:##`             | 所有标题作为链接                                                                                                       |                                                            |
| `$header:###HEADER`      | 标题作为链接                                                                                                           | `$header:##Ideas`<br/> `$header:"## Plugins for Obsidian"` |
| `$blocks`                | 笔记中所有块的路径作为链接                                                                                             |                                                            |

## 设置

- 延迟（默认：`100ms`）- 插件不会等待搜索完成。它会等待一段延迟时间，然后粘贴结果。
- 行尾（默认：`<-->`）- 展开内容下方的线条的样式
- 默认模板（默认：`- [[$filename]]`）- 当没有提供模板时，展开内容的样式
- 前缀 - 在模板部分中使用哪个前缀来识别页眉/页脚

## 安装

- 只需使用内置插件管理器，找到 `Text expand` 插件

### 手动安装

- 您需要 Obsidian v0.9.18+ 版本以获取插件的最新版本
- 获取 [最新版本](https://github.com/mrjackphil/obsidian-text-expand/releases/latest)
- 解压文件并将其放置在您的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/`
- 重新加载 Obsidian
- 如果提示安全模式，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保安全模式已关闭，并从那里启用插件。



