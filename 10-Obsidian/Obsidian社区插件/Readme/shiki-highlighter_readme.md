---
uid: 2024042221330072
title: Obsidian 插件：【Readme】Shiki Highlighter
tags: ['obsidian插件', 'readme']
description: 使用Shiki突出显示代码块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Shiki Highlighter

> [!Note] 插件名片
> - 插件名称：Shiki Highlighter
> - 插件作者：Moritz Jung
> - 插件说明：使用 Shiki 突出显示代码块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mProjectsCode/obsidian-shiki-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?shiki-highlighter)

## 概述

使用 Shiki 突出显示代码块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mProjectsCode/obsidian-shiki-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[shiki-highlighter]] 插件的自述翻译

【机翻】

# 黑曜石 Shiki 插件

This plugin integrates [shiki](https://shiki.style/) via [Expressive Code](https://expressive-code.com/) into Obsidian, providing better syntax highlighting for over 100 languages.

This plugin works in reading mode and in live preview mode, as long as your cursor is not inside the code block.

Below is an example with line numbers, a custom header, and line highlighting.

![exampleImage](https://cdn.pkmer.cn/covers/shiki-highlighter_1_0.png!pkmer)

## 比较

默认的 Obsidian 语法高亮：

![exampleImageObsidian](https://cdn.pkmer.cn/covers/shiki-highlighter_1_1.png!pkmer)

Shiki 插件的语法高亮：

![exampleImagePlain](https://cdn.pkmer.cn/covers/shiki-highlighter_1_2.png!pkmer)

## 用法

该插件将自动突出显示您的笔记中的代码块。

要配置代码块，您可以在开头的三个反引号后的同一行上添加配置选项。

````md
```language configurationHere
...
```
````

有关配置选项的更多信息，请访问 [Expressive Code主页](https://expressive-code.com/)。

### 行号

行号可以通过 `showLineNumbers` 来启用。

````md
```language showLineNumbers
...
```
````

### 标题

可以使用 `title="Title Here"` 添加标题。

````md
```language title="Title Here"
...
```
````

### 行高亮

行高亮可以通过 `{1, 5-10}` 来启用。

行可以是单行，也可以是范围。

````md
```language {1, 5-10}
...
```
````

#### 差异突出显示

差异突出显示可以通过 `ins={1}` 和 `del={5-10}` 来启用。

在 `ins` 中指定的行将被突出显示为绿色，而在 `del` 中指定的行将被突出显示为红色。

行可以再次是单行或范围。

````md
```language ins={1} del={5-10}
...
```
````

当语言设置为 `diff` 时，插件将自动为以 `+` 或 `-` 为前缀的行启用差异突出显示。

## 许可证

[MIT](https://github.com/mProjectsCode/obsidian-shiki-plugin/blob/master/LICENSE)

## 安装

### 黑曜石市场（推荐）

1. 在你的保险库中打开“设置 -> 社区插件”
2. 点击“社区插件”部分的“浏览”按钮
3. 搜索“Shiki Highlighter”
4. 选择“Shiki Highlighter”，先点击“安装”，然后点击“启用”

### BRAT

1. 安装并启用 `BRAT` 插件
2. 运行 `BRAT: Plugins: Add a beta plugin for testing` 命令
3. 在文本字段中输入 `https://github.com/mProjectsCode/obsidian-shiki-plugin`
4. 点击 `Add Pluign`

## 鸣谢

This plugin uses [shiki](https://shiki.style/), [Expressive Code](https://expressive-code.com/), and parts of the Dracula VSCode theme for syntax highlighting.

Special thanks to:

- Hippo (hippotastic) for their work and support with Expressive Code
- sailKite for CSS help and testing the plugin



