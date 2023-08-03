---
uid: 20230803231105
title: Obsidian 插件：Key Sequence Shortcut
tags: ['obsidian插件', 'readme']
description: 使用简短的快捷键序列执行黑曜石命令。例如，“tp”代表“切换预览”，“tb”代表“切换侧边栏”，更容易记住。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232510
---

# Obsidian 插件：Key Sequence Shortcut

> [!Note] 插件名片
> - 插件名称：Key Sequence Shortcut
> - 插件作者：anselmwang
> - 插件说明：使用简短的快捷键序列执行黑曜石命令。例如，“tp”代表“切换预览”，“tb”代表“切换侧边栏”，更容易记住。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/anselmwang/obsidian-key-sequence-shortcut)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-key-sequence-shortcut)

## 概述

使用简短的快捷键序列执行黑曜石命令。例如，“tp”代表“切换预览”，“tb”代表“切换侧边栏”，更容易记住。

![Key Sequence Shortcut](https://cdn.pkmer.cn/covers/obsidian-key-sequence-shortcut.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anselmwang/obsidian-key-sequence-shortcut/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-key-sequence-shortcut]] 插件的自述翻译

# 键序列快捷方式

键序列快捷方式是一个 Obsidian 插件，允许将键序列绑定到 Obsidian 命令。例如：

- 如果我们假设 "t" 代表 "toggle"，我们可以将 "tl" 绑定到 "Toggle Preview"，将 "tb" 绑定到 "Toggle Sidebar"。
- 如果我们假设 "x" 代表 "text"，我们可以将 "xl" 绑定到 "Toggle Bulllet List"，将 "xc" 绑定到 "Toggle Check list status"。

与典型的键盘快捷方式（如 "Ctrl-j"）相比，键序列更容易记忆。

# 安装

在 Obsidian 的 "Commnuity plugins" 选项中搜索 "Key Sequence Shortcut" 进行安装。

# 用法

- 命令“打开键序列菜单”（绑定到 `Ctrl-m`）。键入“xl”将执行 `editor:toggle-bullet-list`，无需键入“Enter”。
![](attachments/2022-02-26-07-33-19.png)
- 配置
  - 默认配置文件位于工作区根目录下的“kssrc.md”。可以进行自定义。
    - 注释行：使用双引号开始注释行
    - 普通行：键序列&lt;TAB&gt; 命令 ID&lt;TAB&gt; 描述。最后一部分“&lt;TAB&gt; 描述”是可选的。
  - 我们可以通过运行命令“插入命令 ID 和名称”（绑定到 `Ctrl-*`）轻松找到命令 ID
  - `Key Sequence Shortcut` 将运行相应的命令，只要用户输入与任何配置项匹配，因此“xh”将隐藏类似“xha”、“xhb”等键序列。请避免一个键序列成为其他键序列的前缀。
- 运行命令“重新加载键序列快捷配置文件”以在配置文件更改后重新加载

选择 TAB 作为分隔符是一个权衡。我理解在 Obsidian 中无法轻松输入 TAB，它会缩进行。然而，配置文件中的最后一列是“描述”，可以轻松包含字符如“;”、“|”或空格。考虑到这一点，我仍然选择了 TAB。要输入它，我只需在任何其他编辑器（例如 Windows 平台上的记事本）中键入 TAB，然后将其粘贴到 Obsidian 中。

# 配置示例

```
" p 代表项目
pf	darlal-switcher-plus:switcher-plus:open	"快速切换++：打开"

" x 代表文本
xh	editor:set-heading
xl	editor:toggle-bullet-list
xc	editor:toggle-checklist-status
xq	editor:toggle-blockquote
xw	editor:insert-wikilink
xe	editor:insert-embed
xi	editor:indent-list
xu	editor:unindent-list

" xx 代表重构
xxh	editor:rename-heading

" e 代表编辑器
em	obsidian-mark-and-select:set-mark
es	obsidian-mark-and-select:select-from-mark
"	以下两个命令仅在移动设备上可用
er	editor:redo
eu	editor:undo
```

# 与类似的插件进行比较

**按键序列快捷键**

- 输入 Ctrl-M 触发，然后支持像 "phw" 这样的字符序列作为热键。
- 自动命令建议以帮助记忆
- 基于文本的配置

**序列热键**，**热键和弦**

- 支持任意的热键序列，因此您可以使用像 "Alt-b Ctrl-a p h w" 这样的按键序列
- 没有命令建议
- 基于 UI 的配置

**和弦热键**

- 支持字符序列作为热键。
- 快速输入触发。这种触发方法对我来说听起来很奇怪，我在日常生活中没有使用过这个插件，不确定它的工作效果如何。

# 致谢

这个插件受到了 Vim 多键快捷键和 VSpaceCode 的启发。没有这样的键序列快捷方式，文本编辑将永远不会如此有趣。

在 Obsidian 世界中，我非常喜欢 vimrc-support 插件，几乎每天都在使用它。它已经支持编辑器 VIM 模式中的键序列快捷方式。那么为什么我要创建 `Key Sequence Shortcut` 插件呢？因为有许多情况下没有 VIM 模式，以下是一些痛点：

- 不喜欢 VIM 模式的用户
- 在 Obsidian 移动版上（移动工具栏上有太多按钮！）
- 在桌面上
  - 当我切换到 Markdown 预览模式时，我失去了 VIM 编辑器模式，无法通过键序列切换回来。



