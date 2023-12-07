---
uid: 2023120719432281
title: Obsidian 插件：【Readme】Smarter Markdown Hotkeys
tags: ['obsidian插件', 'readme']
description: 智能选择单词和行的快捷键，在应用标记之前支持多个光标。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Smarter Markdown Hotkeys

> [!Note] 插件名片
> - 插件名称：Smarter Markdown Hotkeys
> - 插件作者：pseudometa
> - 插件说明：智能选择单词和行的快捷键，在应用标记之前支持多个光标。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-smarter-md-hotkeys)

## 概述

智能选择单词和行的快捷键，在应用标记之前支持多个光标。

![Smarter Markdown Hotkeys](https://cdn.pkmer.cn/covers/obsidian-smarter-md-hotkeys_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/obsidian-smarter-md-hotkeys/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-smarter-md-hotkeys]] 插件的自述翻译

# 🧠 更智能的 Markdown 快捷键

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22obsidian-smarter-md-hotkeys%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-smarter-md-hotkeys?label=最新版本&style=plastic) [![](https://img.shields.io/badge/更新日志-点击这里-FFE800?style=plastic)](Changelog.md)

这是一个为 [Obsidian](https://obsidian.md/) 提供的插件，提供了在应用标记之前以智能方式选择单词和行的快捷键 [^4]。同时支持多个光标。

![演示视频](https://cdn.pkmer.cn/covers/obsidian-smarter-md-hotkeys_2_0.gif!pkmer)

## 目录

<!-- MarkdownTOC -->

- [具有智能扩展的标记命令](#具有智能扩展的标记命令)
	- [命令特定细节](#命令特定细节)
- [具有智能扩展逻辑的非标记命令](#具有智能扩展逻辑的非标记命令)
	- [更智能的标点符号命令](#更智能的标点符号命令)
	- [更智能的大小写切换](#更智能的大小写切换)
	- [更智能的删除文本](#更智能的删除文本)
- [没有智能扩展的命令](#没有智能扩展的命令)
	- [更智能的切换标题](#更智能的切换标题)
	- [更智能的插入新行](#更智能的插入新行)
	- [更智能的删除当前笔记](#更智能的删除当前笔记)
	- [更智能的复制路径](#更智能的复制路径)
	- [更智能的复制文件名](#更智能的复制文件名)
	- [切换可读行长度和切换行号](#切换可读行长度和切换行号)
- [智能扩展的详细工作原理](#智能扩展的详细工作原理)
- [设置快捷键](#设置快捷键)
- [安装](#安装)
- [贡献](#贡献)
- [关于开发者](#关于开发者)
	- [个人资料](#个人资料)
	- [捐赠](#捐赠)
- [致谢](#致谢)

<!-- /MarkdownTOC -->

## 使用智能扩展的标记命令

- 更智能的加粗
- 更智能的斜体
- 更智能的下划线加粗（`__foobar__`）
- 更智能的下划线斜体（`_foobar_`）
- 更智能的注释\*
- 更智能的 HTML 注释\*
- 更智能的行内/围栏代码\*
- 更智能的高亮
- 更智能的加粗和高亮 [^3]
- 更智能的斜体和高亮 [^3]
- 更智能的删除线
- 更智能的 Markdown/图片链接
- 更智能的维基链接（内部链接）
- 带标题的更智能的维基链接
- 更智能的 Mathjax\*
- 更智能的 Callout 标签

所有命令还支持 __ 多光标 __，智能 __ 包含/排除特殊字符 __，以及通过触发相同的热键来 __ 撤销标记 __。

<small>\* 当在多行选择上触发热键时，这些命令会将整个块包装起来，而不是每行包装一次。它们还会切换到适当的语法，例如从行内代码语法切换到围栏代码语法。（详见下文。）</small>

### 特定命令的详细信息

以下命令具有一些特殊功能：

#### 更智能的 Markdown/图片链接

- __自动插入 URL__: 当你使用 `更智能的Markdown链接` 并且剪贴板中有一个 URL 时，URL 也会自动插入。
- __自动切换到图片语法__ 当剪贴板中的 URL 以图片扩展名结尾，比如 `.png`[^2]，该命令还会在图片链接前加上 `!`。

#### 更智能的内联/围栏代码

- __术语而非单词：__ `更智能的代码` 不会将标点符号或括号视为分隔符。这意味着光标在 "object.method" 的任何位置都会选择整个术语，并正确显示为 "`object.method`" 而不是 "`object`.method"。（类似于 Vim 中的 WORD。）
- __自动切换到围栏代码语法：__ 当选择多行时，`更智能的代码` 将使用 [围栏代码语法](https://help.obsidian.md/How+to/Format+your+notes#Code+blocks) 将选定的行包裹起来。此外，光标会移动到围栏代码块的开头，以便您可以方便地输入代码语言。
- 💡 `更智能的围栏代码` 与 [Codeblock Completer 插件](https://github.com/SkepticMystic/codeblock-completer) 配合得很好。

#### 更智能的注释

- __自动切换到块注释__：当选择多行时，`Smarter Comment` 命令将扩展选择到整个块，然后将它们全部 [一起包装](https://help.obsidian.md/How+to/Format+your+notes#Comments) 到注释语法中。

#### 更智能的 Wikilink

- __自动建议__：将文本转换为 wikilink 时，`更智能的Wikilinks` 会在之后触发建议功能。
- __为标题添加 Wikilink__：这是一个替代命令，它会插入一个 markdown 链接到一个标题的语法，并在此之后触发建议功能（即，使用 `[[## ]]` 而不是 `[[ ]]`）。

#### 更智能的 Mathjax

- __自动切换到块级模式__：当选择多行时，`Smarter MathJax` 命令将会 [扩展选择到整个块](https://help.obsidian.md/How+to/Format+your+notes#Math)，并且从 `$` 切换到 `$$`。（我自己不使用 Mathjax，所以如果 Mathjax 命令有任何改进的地方，请随时提出问题。）

#### 更智能的标注标签

将光标下的文本转换为标注的“标签”。

<details>
	<summary>演示</summary>
	<img width=60% alt="演示更智能的标注标签命令" src="demo/smarter-callout-label.gif">
</details>

## 具有智能扩展逻辑的非标记命令

### 更智能的标点命令

严格来说，引号和括号并不是一种标记形式，但我发现以相同的方式设置它们非常有用。因此，也添加了以下命令。

- 更智能的引号
- 更智能的圆括号
- 更智能的方括号
- 更智能的花括号

当没有选择时，更智能的标点命令基本上模拟了 [vim-surround](https://github.com/tpope/vim-surround) 中的 `ysiw"`、`ysiw)`、`ysiw]` 和 `ysiw}`。

### 更智能的大小写切换

相同的逻辑也可以应用于大小写切换命令。首先，选择范围扩展到整个单词。然后，更改整个选择的大小写。与为每种大小写类型设置多个热键不同，此命令根据当前状态智能地切换大小写。

- `小写` → `句子首字母大写`\*
- `句子首字母大写`\* → `大写`
- `大写` → `小写`
- `OTheR` → `句子首字母大写`

这样可以重复按下热键以达到特定的结果，例如在一个 `小写` 单词上按两次热键可以将其变为 `大写`。

<small>\* `句子首字母大写` 意味着字符串的第一个字母将被大写，就像在英语句子中一样。如果字符串只包含一个单词，`句子首字母大写` 会产生与 `首字母大写` 相同的结果。</small>

### 更智能的删除文本

从更智能的 Markdown 命令中删除具有相同文本扩展逻辑的文本。（此命令类似于 Vim 中的 `daw` 命令。）

## 没有智能扩展的命令

这些命令仅仅是为了方便而添加的。它们不使用任何选择扩展的方式，但仍然是对它们对应的普通命令的改进尝试。

### 智能切换标题

将光标下方的行的标题级别增加 1。如果已经是 6 级标题，则删除标题。旨在快速按下多次，例如按下快捷键 3 次将普通行转换为 h3 标题。

<img width=60% alt="演示智能切换标题命令" src="demo/smarter-toggle-heading.gif">

### 更智能的插入新行

即使光标位于嵌套列表中，也可以插入换行符。在嵌套列表中按下 `return` 键通常会插入一个换行符，后面跟着一个缩进的列表标记。（此命令与 Vim 中的 `o` 命令基本相同。）

### 更智能的删除当前笔记

删除当前笔记，但同时返回到上一个文件，而不是留下一个空白窗格。（这需要在 Obsidian 设置中禁用“确认文件删除”。）

### 更智能的复制路径

按一次以复制当前文件的相对于保险库的路径，按第二次以复制绝对路径。按第三次以复制（相对于保险库的）父文件夹的路径。

### 更智能的复制文件名

按一次复制当前文件的名称（不包括扩展名），再按一次复制带有扩展名的文件名。

### 切换可读行长度和切换行号

这些功能基本上就是按照名称所说的那样。

智能扩展的详细工作原理

`内联代码` 表示所选文本的部分。`|` 是一个没有选择的光标。此表用作此插件精确机制的参考。

|                                    |  正常热键                                        | 更智能的热键                                                    |
| ---------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| foo`\|`bar                         | foo\*\*\*\*bar                                         | \*\*__foobar__\*\*                                                 |
| f`oo`bar                           | f\*\*__oo__\*\*bar                                     | \*\*__foobar__\*\*                                                 |
| Lor`em Ips`um                      | Lor\*\*__em Ips__\*\*um                                | \*\*__Lorem Ipsum__\*\*                                            |
| `- [ ] foobar ^123`                | \*\*__- [ ] foobar ^123__\*\*                          | - [ ] \*\*__foobar__\*\* <sup>^123</sup>                           |
| `## Lorem Ipsum`                | ==__## Lorem Ipsum__==                                 | ## ==__Lorem Ipsum__==                                             |
| - Lor`em`<br>`- Ips`um         | - Lor\*\*__em<br>&nbsp;&nbsp;&nbsp;&nbsp;- Ips__\*\*um | - \*\*__Lorem__\*\*<br>&nbsp;&nbsp;&nbsp;&nbsp;- \*\*__Ipsum__\*\* |
| \*\*__foo__`\|`__bar__\*\* _(撤销)_| \*\*__foo\*\*\*\*bar__\*\*                             | foobar                                                             |
| \*\*__Lor`em Ips`um__\*\* _(撤销)_ | \*\*__Lor__\*\*em Ips\*\*__um__\*\*                    | Lorem Ipsum                                                        |

您可以通过查看 [`const.ts`](const.ts#L144) 来查看确切包含或排除的字符。

## 设置快捷键

如果你想替换 Obsidian 的默认命令，请记得在更改此插件的快捷键之前删除它们的快捷键绑定。以 `Smarter Bold` 为例：

1. 删除默认命令 `Toggle Bold` 的快捷键 `cmd/ctrl + B`[^1]。
2. 将 `cmd/ctrl + B` 分配为命令 `Smarter Bold` 的快捷键。

💡 对于更智能的标点命令，你也可以使用带有 `shift` 的快捷键，例如 `shift + 2` 表示更智能的引号。有趣的是，Obsidian 接受这样的快捷键，因此你基本上可以“覆盖”正常的标点输入。

然而，请注意，这样做会失去正常输入标点的能力。此外，这似乎会导致一些小错误，例如 [干扰Obsidian的文档内搜索](https://github.com/chrisgrieser/obsidian-smarter-md-hotkeys/issues/23)。

## 安装

该插件可以通过 Obsidian 的社区插件浏览器进行安装：`设置` → `社区插件` → `浏览` → 搜索 _"Smarter Markdown Hotkeys"_

贡献

最简单的方式是对 `const.st` 进行更改，因为其中的常量决定了命令和要包含/排除的内容。

请使用存储库中的 `.eslintrc` 配置，在提交拉取请求之前运行 eslint，并且不要使用 `prettier`。🙂

```shell

# 运行 eslint 修复最常见的错误
eslint --fix *.ts

## 关于开发者
在我的日常工作中，我是一名社会学家，研究数字经济背后的社会机制。在我的博士项目中，我研究应用经济的治理以及软件生态系统如何处理创新和兼容性之间的紧张关系。如果您对这个主题感兴趣，请随时与我联系！

### 个人资料
- [学术网站](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

### 捐赠


如果你非常慷慨，你也可以从我的亚马逊愿望清单中给我买点东西。但在考虑给我买愿望清单上的物品之前，请先向仍在上大学的开发者们捐赠一些东西！😊

[亚马逊愿望清单](https://www.amazon.de/hz/wishlist/ls/2C7RIOJPN3K5F?ref_=wl_share)
<!-- markdown-link-check-enable -->

## 鸣谢
感谢[@SkepticMystic](https://github.com/SkepticMystic)在开发过程中的支持。

[⬆️ 返回顶部](#目录)

[^1]: macOS使用`cmd`，Windows和Linux使用`ctrl`。
[^2]: 支持的图像扩展名在[这里列出](const.ts#L156)。
[^3]: 这些命令主要用于一些Obsidian主题（如[Sanctum](https://github.com/jdanielmourao/obsidian-sanctum)或[Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus)）提供的多色高亮。
[^4]: 当没有选择时，智能扩展基本上等同于[vim-surround](https://github.com/tpope/vim-surround)中的`ysiw{markup}`，但按键次数更少。



