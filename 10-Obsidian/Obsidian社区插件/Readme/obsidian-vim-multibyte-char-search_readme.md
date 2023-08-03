---
uid: 20230803205012
title: Obsidian 插件：【Readme】Vim Multibyte Char Search
tags: ['obsidian插件', 'readme']
description: 按输入法对应的ASCII编码的第一个字符搜索多字节字符。例如，对于中文，可以按拼音的第一个拼音进行搜索。
author: anselmwang
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vim Multibyte Char Search

> [!Note] 插件名片
> - 插件名称：Vim Multibyte Char Search
> - 插件作者：anselmwang
> - 插件说明：按输入法对应的ASCII编码的第一个字符搜索多字节字符。例如，对于中文，可以按拼音的第一个拼音进行搜索。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/anselmwang/obsidian-vim-multibyte-char-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vim-multibyte-char-search)

## 概述

按输入法对应的ASCII编码的第一个字符搜索多字节字符。例如，对于中文，可以按拼音的第一个拼音进行搜索。

![Vim Multibyte Char Search](https://cdn.pkmer.cn/covers/obsidian-vim-multibyte-char-search.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anselmwang/obsidian-vim-multibyte-char-search/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-vim-multibyte-char-search]] 插件的自述翻译


# Vim多字节字符搜索

这是一个黑曜石插件。它可以方便地在VIM中搜索多字节字符。VIM最好在英文输入模式下操作，要搜索像中文这样的多字节字符，用户必须在输入模式之间来回切换。

为了简化这个过程，该插件允许用户通过多字节字符对应输入法编码的首个字符来搜索多字节字符。

例如，在中文拼音输入法中，"用来"的编码是"yong lai"，我们可以通过"yl"来搜索这样的中文词汇。

# 安装

在Obsidian中，需要打开VIM模式。然后在Obsidian的"Community Plugin"选项卡中搜索"Vim Multibyte Char Search"，即可安装此插件。

# 用法
- 运行“搜索多字节”命令。
- 如果你想搜索“用来”，输入“yl”并按下回车键。
- 按下 `n` 触发搜索。

# 高级用法

为了获得最佳体验，我们最好安装"obsidian-vimrc-support"插件，并将以下行添加到`.obsidian.vimrc`文件中。
```
unmap <Space>
exmap enrich_vim_search_pattern obcommand obsidian-vim-multibyte-char-search:enrich-current-vim-search-pattern
exmap search_multibytes obcommand obsidian-vim-multibyte-char-search:search-multibytes
nmap <Space>n :enrich_vim_search_pattern
nmap <Space>/ :search_multibytes
```

然后我们可以通过`<Space>/`来触发"Search Multibytes"命令。

首先搜索单字节模式，然后切换到多字节模式是使用该插件的另一种方式。这种方式可能会带来一些不便。例如，如果您想搜索"吃了"，模式是"cl"，它会首先与英文单词"class"匹配。

- 输入"/yl"或"?yl"
- 按下`<space> n n`
    - 键序列的第一部分是`<space> n`。根据我们在`.obsidian.vimrc`中的配置，这个键序列将触发"Enrich Current VIM Search Pattern"命令。该命令会获取当前的搜索模式"yl"，并尝试根据当前编辑器中以"yl"开头的所有中文短语来重写它。在这个例子中，有两个中文短语"用来"和"原来"，所以搜索模式被重写为正则表达式`用来|原来`。
    - 然后再次按下`n`来使用新的正则表达式进行搜索。
- 继续输入"n"或"N"来跳转到上一个或下一个匹配项，就像正常的vim搜索一样。

![](docs/images/Animation.gif).

# 上线新语言

搜索功能是基于字典的。"用来" 被映射为 "yl"，因为在 `pinyin_search.dict.txt` 中的后续行中有如下映射关系：
```
用 y
来 l
```
字典支持同一字符的多种编码。例如，下面的行表示 "给" 可以以 "g" 或 "j" 开头。因此，"给予" 将匹配搜索模式 "gy" 或 "jy"。
```
给 gj
予 y
```

要上线任何新语言，只需为您的语言创建一个 `pinyin_search.dict.txt` 文件，并替换当前的文件即可。

# 致谢

该插件是 [GitHub - ppwwyyxx/vim-PinyinSearch: help vim search Chinese by Pinyin](https://github.com/ppwwyyxx/vim-PinyinSearch) 的 Obsidian 移植版本。ppwwyyxx 慷慨地允许我使用相同的算法。

我从 esm7 的优秀插件 [esm7/obsidian-vimrc-support: A plugin for the Obsidian.md note-taking software](https://github.com/esm7/obsidian-vimrc-support) 中学习了如何与 CodeMirror 编辑器一起工作。



