---
uid: 2023102611081073
title: Obsidian 插件：【Readme】Mononote
tags: ['obsidian插件', 'readme']
description: 确保每个笔记只占用一个标签页。如果一个笔记已经打开，将会聚焦到它现有的标签页，而不是在当前标签页中打开相同的文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Mononote

> [!Note] 插件名片
> - 插件名称：Mononote
> - 插件作者：Carlo Zottmann
> - 插件说明：确保每个笔记只占用一个标签页。如果一个笔记已经打开，将会聚焦到它现有的标签页，而不是在当前标签页中打开相同的文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/czottmann/obsidian-mononote)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mononote)

## 概述

确保每个笔记只占用一个标签页。如果一个笔记已经打开，将会聚焦到它现有的标签页，而不是在当前标签页中打开相同的文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/czottmann/obsidian-mononote/main/README.md)

---

## Readme(翻译）

下面是 [[mononote]] 插件的自述翻译

# Mononote

此插件确保每个笔记仅占用一个标签页。如果一个笔记已经打开，将会聚焦到它现有的标签页，而不是在当前标签页中打开相同的文件。适用于通过链接、菜单、热键打开笔记。

场景

以一个例子为例，假设有以下打开的标签页：

- 标签页 1 包含笔记 A
- 标签页 2 包含笔记 B

发生了什么变化：

- 在笔记 B（标签页 2）中，点击到笔记 A 的链接将聚焦到标签页 1，而标签页 2 将继续显示笔记 B。
- 在笔记 B（标签页 2）中，尝试在新标签页中打开到笔记 A 的链接将聚焦到标签页 1，不会打开新的标签页。

没有发生变化的事情：

- 在笔记 B（标签页 2）中，点击到笔记 C 的链接：笔记 C 将像往常一样被打开。
- 标签页分割
- 在图形视图中点击链接
错误报告和讨论

请使用此存储库的“问题”部分进行错误报告 - 谢谢！

我已将所有插件的**讨论**移至 ActionsDotWork 论坛，该论坛是我 Obsidian 插件和我正在构建的 macOS/iOS 生产力应用的中心：[Carlo's Obsidian Plugins - ActionsDotWork Forum](https://forum.actions.work/c/obsidian-plugins/8)。

该论坛支持通过 GitHub、Apple 和 Google 进行单点登录，这意味着您可以使用 GitHub 帐户登录。

已知问题

当焦点在固定的笔记上时，它可能会在另一个标签页中再次打开。例如，如果当前的日常笔记被聚焦并固定，使用它的快捷键将在另一个标签页中打开它。由于某种原因，当固定标签页在前台时，`onFileOpen` 事件并不总是被触发。我的工作理论是这是 Obsidian 的一个 bug；我会继续关注它。

## 安装

**2023-06-09：该插件尚未通过 Community Notes 提供，因此这些说明目前无法使用！**

1. 在 Obsidian 的社区插件浏览器中搜索“Mononote”。（[此链接应该可以找到它。](https://obsidian.md/plugins?id=zottmann)）
2. 安装它。
3. 在 Obsidian 的设置中启用插件，选择“Community plugins”。

就是这样。

## 通过 BRAT 进行安装（适用于预发布版或测试版）

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)。
2. 将 "Mononote" 添加到 BRAT：
    1. 通过设置 → 社区插件 打开 "Obsidian42 - BRAT"。
    2. 点击 " 添加 Beta 插件 "。
    3. 使用仓库地址 `czottmann/obsidian-mononote`。
3. 在设置 → 选项 → 社区插件 下启用 "Mononote"。
开发

克隆存储库，运行 `pnpm install` 或 `npm install` 来安装依赖项。然后，运行 `pnpm dev` 或 `npm run dev` 来编译并监视文件更改。

## 作者

Carlo Zottmann，<carlo@zottmann.co>，<https://zottmann.co/>，<https://github.com/czottmann>

免责声明

使用风险自负。事情可能会出现严重问题。我对任何数据丢失或损坏不负责任。你已经被警告。

始终备份你的数据。真的。

## 许可证

MIT，参见 [LICENSE.md](LICENSE.md)。
