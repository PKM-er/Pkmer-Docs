---
uid: 2023080322274097
title: Obsidian 插件：Table Extended
tags: ['编辑工具', '界面相关', '表格', 'obsidian插件', 'readme']
description: 非可视化操作表格，但因为表格增加了新扩展，能够支持单元格合并等效果，但是需要你熟悉下新的语法格式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Table Extended

> [!Note] 插件名片
> - 插件名称：Table Extended
> - 插件作者：AidenLx
> - 插件说明：非可视化操作表格，但因为表格增加了新扩展，能够支持单元格合并等效果，但是需要你熟悉下新的语法格式
> - 插件分类：[' 编辑工具 ', ' 界面相关 ', ' 表格 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/table-extended)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-extended)

## 概述

非可视化操作表格，但因为表格增加了新扩展，能够支持单元格合并等效果，但是需要你熟悉下新的语法格式

![Table Extended](https://cdn.pkmer.cn/covers/table-extended.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/table-extended/master/README.md)

---

## Readme(翻译）

下面是 [[table-extended]] 插件的自述翻译

# 扩展表格

使用 MultiMarkdown 表格语法扩展 Obsidian 中的基本表格。

![image](https://user-images.githubusercontent.com/31102694/123046427-ad89b780-d42e-11eb-9588-b7028954bcfc.png)

- [扩展表格](#table-extended)
  - [简介](#intro)
  - [已知问题](#known-issue)
  - [如何使用](#how-to-use)
    - [实验性：扩展原生语法](#expermental-extended-native-syntax)
    - [多行](#multiline)
    - [多行标题](#multiline-header)
    - [无标题](#headerless)
  - [兼容性](#compatibility)
  - [安装](#installation)
    - [从Obsidian安装](#from-obsidian)
    - [从GitHub安装](#from-github)
  - [幕后](#behind-the-scene)

## 简介

Obsidian 的 [内置表格语法](https://help.obsidian.md/How+to/Format+your+notes#tables) 只能定义表格的基本内容。当用户尝试应用具有 `colspan` 或多个表头的复杂表格时，他们唯一的选择是回退到原始的 HTML，这样很难阅读和编辑。

该插件将 [MultiMarkdown 表格语法][mmd6-table] 引入到 Obsidian 中，它提供了以下功能，并保持内部链接和嵌入的完整性：

- [单元格跨列](#colspan)
- [单元格跨行](#rowspan)
- [块级元素](#multiline)，如列表、代码...
- [多个表头](#multiline-header)
- 表格标题
- [省略表头](#headerless)

[mmd6]: <https://fletcher.github.io/MultiMarkdown-6/>
[mdit]: <https://markdown-it.github.io/>
[mmdt]: <https://github.com/RedBug312/markdown-it-multimd-table>

已知问题

- 此插件尚不与 [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian) 兼容，因为其自动格式化会破坏 mmd6 表格语法。
  - 相关问题：[advanced-tables-obsidian #59](https://github.com/tgrosinger/advanced-tables-obsidian/issues/59#issuecomment-812886995)
- 带有“-tx-”的表格有时会忽略转义字符，例如，`\|` 无法在表格中转义 `|`，只有 `\\|` 有效。
- 扩展的原生语法有时可能无法正常工作，控制台输出为：“无法获取 Markdown 文本，正在转义...”

如何使用

最新版本使用了一种新的语法来表示扩展表格，以取代围栏式的 `tx` 代码块，这样可以更好地支持反向链接和前向链接，在表格之前使用 `-tx-` 前缀：

PS：对于实验性的扩展原生语法支持，可以在 [这里](#expermental-extended-native-syntax) 查看。

```md

-tx-
|             |          Grouping           || 
First Header  | Second Header | Third Header | 
 ------------ | :-----------: | -----------: | 
Content       |          *Long Cell*        || 
Content       |   **Cell**    |         Cell | 
New section   |     More      |         Data | 
And more      | With an escaped '\|'       || 
[Prototype table]

```

将被渲染为：

<div class="block-language-tx"><table>
<caption id="prototypetable">Prototype table</caption>
<thead>
<tr>
<th></th>
<th style="text-align:center" colspan="2">Grouping</th>
</tr>
<tr>
<th>First Header</th>
<th style="text-align:center">Second Header</th>
<th style="text-align:right">Third Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content</td>
<td style="text-align:center" colspan="2"><em>Long Cell</em></td>
</tr>
<tr>
<td>Content</td>
<td style="text-align:center"><strong>Cell</strong></td>
<td style="text-align:right">Cell</td>
</tr>
</tbody>
<tbody>
<tr>
<td>New section</td>
<td style="text-align:center">More</td>
<td style="text-align:right">Data</td>
</tr>
<tr>
<td>And more</td>
<td style="text-align:center" colspan="2">With an escaped '|'</td>
</tr>
</tbody>
</table>
</div>

有关更详细的指南，请查看 [markdown-it-multimd-table README][mmdtg] 和 [MultiMarkdown User's Guide][mmd6-table]

[mmdtg]: <https://github.com/RedBug312/markdown-it-multimd-table/blob/master/README.md#usage>
[mmd6-table]: <https://fletcher.github.io/MultiMarkdown-6/syntax/tables.html>

实验性：扩展原生语法

注意：以下功能不受支持：

- [多行表头](#multiline-header)
- 表格标题
- [省略表头](#headerless)

当在设置选项卡中启用该选项时，Obsidian 的常规表格允许使用扩展语法：

下面的表格：

```md
First Header  | Second Header | Third Header |
 ------------ | :-----------: | -----------: |
Content       |          *Long Cell*        ||
Content       |   **Cell**    |         Cell |
New section   |     More      |         Data |
And more      | With an escaped '\|'       ||
```

将被渲染为：

<div class="block-language-tx"><table>
<thead>
<tr>
<th>First Header</th>
<th style="text-align:center">Second Header</th>
<th style="text-align:right">Third Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content</td>
<td style="text-align:center" colspan="2"><em>Long Cell</em></td>
</tr>
<tr>
<td>Content</td>
<td style="text-align:center"><strong>Cell</strong></td>
<td style="text-align:right">Cell</td>
</tr>
</tbody>
<tbody>
<tr>
<td>New section</td>
<td style="text-align:center">More</td>
<td style="text-align:right">Data</td>
</tr>
<tr>
<td>And more</td>
<td style="text-align:center" colspan="2">With an escaped '|'</td>
</tr>
</tbody>
</table>
</div>

多行

末尾的反斜杠与下面的行内容合并。

```markdown
|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python       \
|    .1 + .2   | .1 + .2         \
|    ```       | ```           |
```

解析如下：

<table>
<thead>
<tr>
<th>Markdown</th>
<th>Rendered HTML</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<pre><code>*Italic*
</code></pre>
</td>
<td>
<p><em>Italic</em></p>
</td>
</tr>
<tr>
<td>
<pre><code>- Item 1
- Item 2</code></pre>
</td>
<td>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
</td>
</tr>
<tr>
<td>
<pre><code>```python
.1 + .2
```</code></pre>
</td>
<td>
<pre><code class="language-python">.1 + .2
</code></pre>
</td>
</tr>
</tbody>
</table>

### 跨行合并

`^^` 表示上方合并的单元格。<br>

```markdown
阶段 | 直接产物 | ATP产量
----: | --------------: | ---------:
糖酵解 | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
丙酮酸氧化 | 2 NADH | 5 ATP |
柠檬酸循环 | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
```

解析如下：

<table>
<thead>
<tr>
<th align="right">阶段</th>
<th align="right">直接产物</th>
<th align="right">ATP产量</th>
</tr>
</thead>
<tbody>
<tr>
<td align="right" rowspan="2">糖酵解</td>
<td align="right" colspan="2">2 ATP</td>
</tr>
<tr>
<td align="right">2 NADH</td>
<td align="right">3–5 ATP</td>
</tr>
<tr>
<td align="right">丙酮酸氧化</td>
<td align="right">2 NADH</td>
<td align="right">5 ATP</td>
</tr>
<tr>
<td align="right" rowspan="3">柠檬酸循环</td>
<td align="right" colspan="2">2 ATP</td>
</tr>
<tr>
<td align="right">6 NADH</td>
<td align="right">15 ATP</td>
</tr>
<tr>
<td align="right">2 FADH2</td>
<td align="right">3 ATP</td>
</tr>
<tr>
<td align="right" colspan="3"><strong>30–32</strong> ATP</td>
</tr>
</tbody>
</table>

### 多行标题

```tx
|             |          分组           ||
第一列标题     | 第二列标题     | 第三列标题   |
 ------------ | :-----------: | -----------: |
内容          |          *长单元格*        ||
```

渲染为：

<div class="block-language-tx"><table>
<thead>
<tr>
<th></th>
<th style="text-align:center" colspan="2">分组</th>
</tr>
<tr>
<th>第一列标题</th>
<th style="text-align:center">第二列标题</th>
<th style="text-align:right">第三列标题</th>
</tr>
</thead>
<tbody>
<tr>
<td>内容</td>
<td style="text-align:center" colspan="2"><em>长单元格</em></td>
</tr>
</tbody>
</table>
</div>

### 无表头

表头可以被省略。

```markdown
|--|--|--|--|--|--|--|--|
|♜|  |♝|♛|♚|♝|♞|♜|
|  |♟|♟|♟|  |♟|♟|♟|
|♟|  |♞|  |  |  |  |  |
|  |♗|  |  |♟|  |  |  |
|  |  |  |  |♙|  |  |  |
|  |  |  |  |  |♘|  |  |
|♙|♙|♙|♙|  |♙|♙|♙|
|♖|♘|♗|♕|♔|  |  |♖|
```

解析如下：

<table>
<tbody>
<tr>
<td>♜</td>
<td></td>
<td>♝</td>
<td>♛</td>
<td>♚</td>
<td>♝</td>
<td>♞</td>
<td>♜</td>
</tr>
<tr>
<td></td>
<td>♟</td>
<td>♟</td>
<td>♟</td>
<td></td>
<td>♟</td>
<td>♟</td>
<td>♟</td>
</tr>
<tr>
<td>♟</td>
<td></td>
<td>♞</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>♗</td>
<td></td>
<td></td>
<td>♟</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>♙</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>♘</td>
<td></td>
<td></td>
</tr>
<tr>
<td>♙</td>
<td>♙</td>
<td>♙</td>
<td>♙</td>
<td></td>
<td>♙</td>
<td>♙</td>
<td>♙</td>
</tr>
<tr>
<td>♖</td>
<td>♘</td>
<td>♗</td>
<td>♕</td>
<td>♔</td>
<td></td>
<td></td>
<td>♖</td>
</tr>
</tbody>
</table>

兼容性

所需的 API 功能仅适用于 Obsidian v0.12.0+。

安装

### 来自 Obsidian

1. 打开 `设置` > `第三方插件`
2. 确保安全模式为**关闭**
3. 点击 `浏览社区插件`
4. 搜索此插件
5. 点击 `安装`
6. 安装完成后，关闭社区插件窗口，补丁即可使用。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/table-extended`
3. 重新加载 Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭，
   然后从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。

幕后

由于当前 Obsidian API 的限制，内置的 Markdown 解析器不可配置。相反，该插件包含一个独立的 Markdown 解析器 [markdown-it][mdit] 和插件 [markdown-it-multimd-table][mmdt]，表格部分和带有语言标签 `tx` 的代码块内的文本将被传递给 `markdown-it`。然而，内部链接和嵌入内容将被提取并传递给 Obsidian，因此 Obsidian 的核心功能仍然完整。

请注意，该插件的行为可能与官方的 MultiMarkdown 编译器和 Obsidian 的解析器不同，如果对于合理的输入出现意外结果，请提出问题。
