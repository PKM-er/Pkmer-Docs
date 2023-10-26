---
uid: 2023080322204634
title: Obsidian 插件：Jelly Snippets
tags: ['obsidian插件', 'readme']
description: 一个简单的文本片段插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Jelly Snippets

> [!Note] 插件名片
> - 插件名称：Jelly Snippets
> - 插件作者：Spencer Gouw
> - 插件说明：一个简单的文本片段插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rabirabirara/obsidian-jelly-snippets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jelly-snippets)

## 概述

一个简单的文本片段插件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rabirabirara/obsidian-jelly-snippets/main/README.md)
>

---

## Readme(翻译）

下面是 [[jelly-snippets]] 插件的自述翻译

# jelly-snippets

一个简单的 Obsidian.md 文本片段插件。

它是做什么的？

非常简单。你可能之前已经遇到过代码片段。

1. 在设置选项卡中指定代码片段到替换的映射。

   `snippet. |+| replacement!`

2. 如果光标位于代码片段的末尾...

   `snippet.<光标在这里>`

3. ..然后触发代码片段转换...

   `snippet.<光标在这里 - 触发！>`

4. ..将用替换内容替换代码片段！

   `replacement!<光标在这里>`

更详细地说：

代码片段在设置中的文本区域（如文件）中定义。每个代码片段有两个部分：lhs 和 rhs。

lhs（左侧）确定要替换的文本；rhs（右侧）确定要替换文本的内容。

自然地，有一个符号来分隔代码片段的这两个部分，称为代码片段部分分隔符：

` |+| `，例如（两端有空格）。

lhs |+| rhs

因此，当您键入 `lhs` 并触发代码片段命令时，它将用 `rhs` 替换文本 `lhs`。

而且，有一个符号来分隔代码片段列表中的每个单独的代码片段，称为代码片段分隔符：

`-==-`，例如。

因此，如果您有以下代码片段文件：

```
lhs |+| rhs
-==-
superb |+| superbowls
```

那么您将有两个代码片段。如果您的分隔符仍然是 `-==-`，并且您有以下文件：

```
lhs |+| rhs
superb |+| superbowls
```

然后键入 `lhs` 并触发代码片段命令将用以下内容替换 `lhs`：

```
rhs
superb |+| superbowls
```

为什么？

我想制作一个通用的代码片段插件，它可以操作文本并按照我的需求工作。已经有一个现有的代码片段插件，[Text Snippets](https://github.com/ArianaKhit/text-snippets-obsidian) 由 ArianaKhit 开发，但是这个插件的代码有点过时且有些复杂，而且似乎使用的是旧的 API。（顺便说一句，这是一个非常好的插件。）

我写这个插件的目标之一是按照 [非官方文档](https://marcus.se.net/obsidian-plugin-docs/) 和纯 TypeScript 所描述的 API 编写一个简单的插件。我还希望使插件的核心功能更加灵活，尽管我还没有添加某些真正提供这种功能的特性。

另一个动机是我想制作一个可以输入我的个人笔记语法（称为 JellyNote）的插件；最初我打算编写一个完整的编辑器扩展，但最终我意识到我可以用代码片段来实现它。因此，只要我需要 JellyNote 语法，我就会为这个插件添加功能。

这个插件也让我想起了 LaTeX2Unicode，这是我在大学的前两年里广泛使用的一个 neovim 插件。我喜欢它，因为它可以在按下空格键时自动将 LaTeX 转换为 Unicode；就是这样，不需要按 Tab 键。

它后来被合并回 [julia.vim](https://github.com/JuliaEditorSupport/julia-vim)。我最初并不打算编写一个可以提供这种功能的插件，但我想文本翻译的概念确实非常有用！

## 未来改进/待办事项

- [ ] 控制片段中的控制字符（例如空格，特别是换行符？当前片段在两端都被修剪；可能不应该修剪空格）
- [ ] 片段中的语义符号（例如光标之后去哪里？带有大括号的片段可能会受益于将光标放在内部...）
- [ ] 正则表达式功能
- [ ] 修复错误和审计？
- [x] 添加换行符选项以使简单的片段易于创建而不是繁琐
- [ ] 在 Obsidian 插件存储库中执行 liamcain 建议的操作。（一半已完成）

### 其他注意事项

- 目前，代码片段的左侧（lhs）不能包含换行符。这种类型的代码片段将无法正常工作；它们会被注册，但永远不会触发。原因是因为我只在光标到行首的范围内搜索代码片段文本；这样做既高效又简单。要修复这个问题，我们需要从光标位置向后查找，并与代码片段的左侧进行匹配。可能不是一个难题，但考虑到这种用例相对较少（在我看来），我忽略了它。请提交一个问题报告。编辑：问题已经提交。是时候开始工作了。



