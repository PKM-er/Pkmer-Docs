---
uid: 20230817224052
title: Obsidian 插件：Find and replace in selection
tags: ['编辑工具', '搜索/排序', '效率', 'obsidian插件', 'readme']
description: 为搜索和替换进行增强，除了查找的内容并将其替换为指定的文本外，还支持正则，通配符的查找方式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Find and replace in selection

> [!Note] 插件名片
> - 插件名称：Find and replace in selection
> - 插件作者：Dmitry Savosh
> - 插件说明：为搜索和替换进行增强，除了查找的内容并将其替换为指定的文本外，还支持正则，通配符的查找方式。
> - 插件分类：[' 编辑工具 ', ' 搜索/排序 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dy-sh/obsidian-find-and-replace-in-selection)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?find-and-replace-in-selection)

## 概述

为搜索和替换进行增强，除了查找的内容并将其替换为指定的文本外，还支持正则，通配符的查找方式。

![Find and replace in selection](https://cdn.pkmer.cn/covers/find-and-replace-in-selection.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dy-sh/obsidian-find-and-replace-in-selection/master/README.md)

---

## Readme(翻译）

下面是 [[find-and-replace-in-selection]] 插件的自述翻译

# 在选定内容中查找和替换

这个插件为 [Obsidian](https://obsidian.md/) 添加了一个 " 在选定内容中查找和替换 " 的命令。该命令在选定的文本中进行搜索，并将找到的所有字符/单词/文本结构替换为其他内容。该插件可以搜索普通文本或正则表达式。

如何配置

为“在选定内容中查找和替换”命令分配一个热键。

如何使用

- 在插件设置中，指定要搜索的文本（纯文本或正则表达式）以及要替换的内容。
- 只需选择文本（可以选择整个笔记）并按下快捷键或调用“在选择中查找和替换”命令即可。要快速在一行文本中进行替换，只需将光标放在该行上并按下快捷键即可。

### 示例

**删除所有文本的粗体高亮**：

- 要查找的文本： "**"
- 替换为： ""（空）

**将所有 H2 标题替换为 H3 标题**：

- 要查找的正则表达式： "^## "（末尾有空格）
- 正则表达式标志： "gm"（全局，多行）
- 替换为： "### "（末尾有空格）

如果您想将所有 H1 变为 H2，所有 H2 变为 H3，H3 变为 H4，则需要从 H3 开始，然后是 H2，然后是 H1。

**删除所有嵌入链接的显示文本**：

- 要查找的正则表达式： "```(?<!\\)\!\[(.*?)(?<!\\)\]\((.*?)(?<!\\)\)```"
- 正则表达式标志： "gm"
- 替换为： "```![]($2)```"

结果如下：

```![Description](URL)```

将变为：

```![](URL)```
