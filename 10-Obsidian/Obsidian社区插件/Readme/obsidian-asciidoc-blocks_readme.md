---
uid: 2023080322141713
title: Obsidian 插件：【Readme】AsciiDoc Blocks Plugin
tags: ['obsidian插件', 'readme']
description: Obsidian中渲染asciidoc块的插件，最初是asciidoc表格。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AsciiDoc Blocks Plugin

> [!Note] 插件名片
> - 插件名称：AsciiDoc Blocks Plugin
> - 插件作者：Juracy Filho
> - 插件说明：Obsidian中渲染asciidoc块的插件，最初是asciidoc表格。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/juracy/obsidian-asciidoc-blocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-asciidoc-blocks)

## 概述

Obsidian中渲染asciidoc块的插件，最初是asciidoc表格。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/juracy/obsidian-asciidoc-blocks/master/README.adoc)
> 

---

## Readme(翻译）

下面是 [[obsidian-asciidoc-blocks]] 插件的自述翻译


= Obsidian AsciiDoc Blocks 插件
:prewrap:
ifdef::env-github[]
:tip-caption: :bulb:
:note-caption: :information_source:
:important-caption: :heavy_exclamation_mark:
:caution-caption: :fire:
:warning-caption: :warning:
endif::[]

[.lead]
这是一个在 Obsidian 中渲染 AsciiDoc 块的插件，最初*专注于表格*。因为 Markdown 表格太有限了！

== 示例

=== 无标题表格（无网格和边框）

[cols="1a,1a"]
|===
| Markdown
| 结果

|
[source]
----
```asciidoc-table
[frame="none", grid="none", cols="^3,^1,^2"]
\|===
\| 2 × 1 \| = \| 2
\| 2 × 2 \| = \| 4
\| 2 × 3 \| = \| 6
\|===
```
----

| image:images/multiplication-table.png[]
|===

=== CSV 表格

[cols="1a,1a"]
|===
| Markdown
| 结果

|
[source]
----
```asciidoc-table
[%header, format=csv]
\|===
Artist, Track, Genre
Baauer, Harlem Shake, Hip Hop
The Lumineers, Ho Hey, Folk Rock
\|===

```
----

| image:images/csv-table.png[]
|===

=== 跨行和跨列

[cols="1a,1a"]
|===
| Markdown
| 结果

|
[source]
----
```asciidoc-table
\|===
\| Column 1 \| Column 2 \| Column 3

3+\| colspan="3" - 全行

.2+\| rowspan="2" - 两行
\| Line 2 - Column 2
\| Line 2 - Column 3
\| Line 3 - Column 2
\| Line 3 - Column 3

\| Line 4 - Column 1
2.2+\| rowspan="2" colspan="2" - 两行两列
\| Line 5 - Column 1
\|===
```
----

| image:images/span-table.png[]
|===

[TIP]
有关 https://docs.asciidoctor.org/asciidoc/latest/tables/build-a-basic-table/[AsciiDoc 表格] 的更多信息。

== 重要提示

目前可能可以使用任何 AsciiDoc 功能，但没有任何保证和支持！我希望将来能够正式支持其他功能！

[WARNING]
也许我会限制 `asciidoc-table` 仅支持表格，并创建另一个不受支持的块：`asciidoc-raw`。

== 感谢

* 第一个灵感（和一些代码）来自 https://github.com/valentine195/obsidian-admonition[Obsidian Admonition]，感谢 @valentine195；
* 非常感谢 @francbreno，介绍我使用 Obsidian 并花时间讨论这个插件的想法。


