---
uid: 2023080322160781
title: Obsidian 插件：Code Preview
tags: ['obsidian插件', 'readme']
description: 文件路径预览代码块
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Code Preview

> [!Note] 插件名片
> - 插件名称：Code Preview
> - 插件作者：Hank
> - 插件说明：文件路径预览代码块
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zjhcn/obsidian-code-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-code-preview)

## 概述

文件路径预览代码块

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zjhcn/obsidian-code-preview/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-code-preview]] 插件的自述翻译

# Obsidian 代码预览插件

[Chinese](./README.CN.md)

具体的例子可以使用 `Open folder as vault` 打开 [example.zip](https://github.com/zjhcn/obsidian-code-preview/releases/download/1.3.11/example-1.3.11.zip)。

### 路径

<details open>
<summary> 基本 </summary>

代码语言由路径的扩展名确定

<pre><code>```preview
路径：hello.js
```</code></pre>

</details>

<details open>
<summary> 相对路径 </summary>

<pre><code>```preview
路径：./hello.js
```</code></pre>

</details>

<details open>
<summary> 绝对路径 </summary>

根路径是 Vault 文件夹

<pre><code>```preview
路径：/sub/color.css
```</code></pre>

<pre><code>```preview
路径：/hello.js
```</code></pre>

</details>

### CodeBlock 语言

代码语言通过路径的扩展名确定

语言键：`language`、`lang`

<details open>
<summary> language、lang </summary>

<pre><code>```preview
path: ./hello.js
lang: ts
```</code></pre>

<pre><code>```preview
path: ./hello.js
language: ts
```</code></pre>

</details>

### 选择显示行范围

自定义起始或结束

<details open>
<summary> 文件的第三行结束 </summary>

<pre><code>```preview
路径：/sub/color.css
起始：3
```</code></pre>

</details>

<details open>
<summary> 第一行到第三行 </summary>

<pre><code>```preview
路径：/sub/color.css
结束：3
```</code></pre>

</details>

<details open>
<summary> 仅预览第三行 </summary>

<pre><code>```preview
路径：/sub/color.css
起始：3
结束：3
```</code></pre>

</details>

<details open>
<summary> 行范围 </summary>

<pre><code>```preview
路径：/sub/color.css
起始：2
结束：3
```</code></pre>

</details>

<details open>
<summary> 结束增加起始 </summary>

`结束："+1"`，配置中需要使用 `"`。

<pre><code>```preview
路径：/sub/color.css
起始：2
结束："+1"
```</code></pre>

</details>

<details open>
<summary> 使用正则表达式或搜索文本 </summary>

`/dd\d{2}/`

<pre><code>```preview
路径：/sub/color.css
起始：body
结束：/dd\d{2}/
```</code></pre>

如果您不了解正则表达式，可以直接使用文本。例如：

`起始：body`：匹配行内的 `body`

`结束：dd00dd`：匹配行内的 `dd00dd`

<pre><code>```preview
路径：/sub/color.css
起始：body
结束：dd00dd
```</code></pre>

</details>

### 高亮

<details open>
<summary> 按行 </summary>

<pre><code>```preview
path: /sub/color.css
highlight: 1
```</code></pre>

</details>

<details open>
<summary> 范围 </summary>

<pre><code>```preview
path: /sub/color.css
highlight: 1-3
```</code></pre>

</details>

<details open>
<summary> 搜索文本 </summary>

<pre><code>```preview
path: /sub/color.css
highlight: dd00dd
```</code></pre>

</details>

<details open>
<summary> 正则表达式 </summary>

<pre><code>```preview
path: /sub/color.css
highlight: /dd\d{2}/
```</code></pre>

</details>

<details open>
<summary> 多个规则 </summary>

分隔符 `,`。

<pre><code>```preview
path: /sub/color.css
highlight: /dd\d{2}/, 1, body
```</code></pre>

YAML 列表

<pre><code>```preview
path: /sub/color.css
highlight:
  - /dd\d{2}/
  - 1
  - body
```</code></pre>

</details>

## CodeBlock YAML 配置

| 配置项 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| path | 文件路径 | 字符串 |  必填 |
| start | 预览起始行。从 1 开始计数 | 数字或字符串或正则表达式 |  - |
| end | 预览结束行 | 数字或字符串或正则表达式 |  - |
| highlight | 高亮显示的行 | 数字或字符串或正则表达式 | - |
| linenumber | 显示行号，优先级高于插件配置 | true 或 false | 插件配置 |

## 插件配置

| 配置项 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| watchAlias | 监听别名文件夹的变化，更新输入建议。可能会影响性能 | 布尔值 | false |
| watchCode | 监听预览的代码文件的变化，当文件发生变化时更新渲染。可能会影响性能 | 布尔值 | false |
| highLightColor | 高亮背景颜色 | CSS 颜色 | #2d82cc20 |
| include | 包含的路径，留空表示全部 | `Array<string or RegExp>` |  [] |
| exclude | 排除的路径 | `Array<string or RegExp>` |  ["node_modules", ".obsidian"] |
| includeFile | 包含的文件，必填 | `Array<string or RegExp>` |  ["/\\.js$/", "/\\.css$/"] |
| excludeFile | 排除的文件 | `Array<string or RegExp>` |  [] |
| alias | 别名路径 | 字符串或别名 |  code |
| linenumber | 显示行号 | true 或 false | true |

linenumber, highlight 基于 [obsidian-better-codeblock](https://github.com/stargrey/obsidian-better-codeblock) 的实现
