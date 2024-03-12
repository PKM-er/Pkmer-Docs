---
uid: 20231220115812
title: Obsidian 插件：【Readme】No Dupe Leaves
tags: ['obsidian插件', 'readme']
description: 不要重新打开已经打开的笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】No Dupe Leaves

> [!Note] 插件名片
> - 插件名称：No Dupe Leaves
> - 插件作者：Simon Cambier
> - 插件说明：不要重新打开已经打开的笔记
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/scambier/obsidian-no-dupe-leaves)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?no-dupe-leaves)

## 概述

不要重新打开已经打开的笔记

![No Dupe Leaves](https://cdn.pkmer.cn/covers/no-dupe-leaves.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/scambier/obsidian-no-dupe-leaves/master/README.md)

---

## Readme(翻译）

下面是 [[no-dupe-leaves]] 插件的自述翻译

# Obsidian“无重复叶子”插件

![自定义徽章](https://img.shields.io/endpoint?url=https%3A%2F%2Fscambier.xyz%2Fobsidian-endpoints%2Fno-dupe-leaves.json)

> 自动将焦点切换到打开的笔记，而不是重新打开它们

[导致创建此插件的讨论](https://forum.obsidian.md/t/ide-style-navigation-tab-reuse-on-link-opening-tab-management/46671/2)。

Obsidian 的默认行为是在打开新笔记 `B` 时替换旧笔记 `A`，

即使 `B` 已经在另一个窗格中打开，也会导致你有两个 `B` 的实例。

该插件将尽可能避免打开重复的笔记，同时仍然遵守所有“在新窗格中强制打开”的指令（例如，在链接上中键单击）。

---

⚠️ **警告** ⚠️ 该插件修改了 Obsidian 的默认行为。

在内部，它覆盖了公共函数 `openLinkText()`，该函数在单击笔记中的链接时调用。这也会影响使用此函数的其他插件（如 Omnisearch），但不适用于文件资源管理器等核心功能。

在 [原始功能请求](https://forum.obsidian.md/t/ide-style-navigation-tab-reuse-on-link-opening-tab-management/46671) 中添加您的意见，告诉 Obsidian 您希望将此行为作为默认行为 :)

---

![image](https://cdn.pkmer.cn/covers/no-dupe-leaves_1_1.png!pkmer)

![](https://cdn.pkmer.cn/covers/no-dupe-leaves_1_2.gif)

## 贡献

由于这只是对默认行为的快速修改，不会考虑任何功能请求。您可以提交有关错误修复的 PR。
