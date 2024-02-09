---
uid: 2023082011355613
title: Obsidian 插件：【Readme】Link Tree
tags: ['obsidian插件', 'readme']
description: 将文件链接和反向链接视为可递归展开、可过滤的列表，具有可编辑的文本，结合了Dynalist和WorkFlowy等大纲工具的结构和Obsidian的灵活性。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Link Tree

> [!Note] 插件名片
> - 插件名称：Link Tree
> - 插件作者：Joshua Tazman Reinier
> - 插件说明：将文件链接和反向链接视为可递归展开、可过滤的列表，具有可编辑的文本，结合了 Dynalist 和 WorkFlowy 等大纲工具的结构和 Obsidian 的灵活性。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joshuatazrein/obsidian-link-tree)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-tree)

## 概述

将文件链接和反向链接视为可递归展开、可过滤的列表，具有可编辑的文本，结合了 Dynalist 和 WorkFlowy 等大纲工具的结构和 Obsidian 的灵活性。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshuatazrein/obsidian-link-tree/main/README.md)
>

---

## Readme(翻译）

下面是 [[link-tree]] 插件的自述翻译

Link Tree 以递归可展开的列表形式呈现当前笔记的链接和反向链接，类似于 WorkFlowy 或 Dynalist 等大纲工具。

# 特点

- 单击项目符号以展开或折叠节点，显示/隐藏其前向和后向链接（循环链接被过滤出层次结构）。
- 单击右上角的箭头按钮切换显示前向和后向链接。
- 通过在搜索框中输入路径名来过滤结果。
- 单击点按钮以显示笔记内容：单行文本、完整文本或无内容（文本可编辑，行将保存到笔记中）。

# 注意

- 该插件需要 Dataview 插件的支持才能正常运行，因为它使用 Dataview API 来提取链接和反向链接。请在使用该插件之前先安装 Dataview 插件。

# 鸣谢

- 非常感谢 Dataview 使解析链接和反向链接变得简单和同步！
- 该插件使用了包括 React、react-transition、react-contenteditable 和 Tailwind CSS 在内的库。
- WorkFlowy 的设计启发了该插件的外观。

如果您喜欢这个插件，我希望能得到您的支持，以便进一步开发！
