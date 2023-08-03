---
uid: 20230803231105
title: Obsidian 插件：Search++
tags: ['搜索/排序', '界面相关', '效率', 'obsidian插件', 'readme']
description: 允许在笔记中插入文本上下文搜索结果，这个插件是基于mrj-text-expand的代码。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232425
---

# Obsidian 插件：Search++

> [!Note] 插件名片
> - 插件名称：Search++
> - 插件作者：Noureddine Haouari
> - 插件说明：允许在笔记中插入文本上下文搜索结果，这个插件是基于 mrj-text-expand 的代码。
> - 插件分类：[' 搜索/排序 ', ' 界面相关 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nhaouari/searchpp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?searchpp)

## 概述

允许在笔记中插入文本上下文搜索结果，这个插件是基于 mrj-text-expand 的代码。

![Search++](https://cdn.pkmer.cn/covers/searchpp.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nhaouari/searchpp/master/README.md)
>

---

## Readme(翻译）

下面是 [[searchpp]] 插件的自述翻译

# Search++

![](./screenshots/2.gif)

这个插件基于 [mrj-text-expand](https://github.com/nhaouari/obsidian-text-expand) 的代码，它会将找到的结果插入到你正在编辑的笔记中。

## 安装

- 如果您有先前版本的插件，请将其删除
- 您需要 Obsidian v0.9.7+
- 获取 [最新版本]()
- 解压文件并将其放置在您的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/`
- 重新加载 Obsidian
- 如果提示安全模式，请禁用安全模式并启用插件。否则，请前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

如何使用

- 在您的笔记中键入 `{{SEARCH_TEXT/NUMBER_OF_CHARS}}`，其中 `SEARCH_TEXT` 是您想要搜索的文本，NUMBER_OF_CHARS 是您想要提取的找到的文本之前和之后的字符数。

示例：`{{My Note/300}}`，`{{tag:#tag/500}}`。

- 将光标放在该行上
- 打开命令面板并找到 `Search++:` 命令（您可以在设置菜单中附加热键）

它应该包装 `{{ }}` 行，并在下面添加找到的笔记。

您可以在 `{{ }}` 行中调用命令以更新结果。
