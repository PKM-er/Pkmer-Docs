---
uid: 2024022117272222
title: Obsidian 插件：【Readme】Daily note creator
tags: ['obsidian插件', 'readme']
description: Automatically creates missing daily notes
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Daily note creator

> [!Note] 插件名片
> - 插件名称：Daily note creator
> - 插件作者：Mario Holubar
> - 插件说明：Automatically creates missing daily notes
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/mario-holubar/obsidian-daily-note-creator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-note-creator)

## 概述

Automatically creates missing daily notes

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mario-holubar/obsidian-daily-note-creator/master/README.md)
>

---

## Readme(翻译）

下面是 [[daily-note-creator]] 插件的自述翻译

【机翻】

# 每日笔记创建者

您想让 [Obsidian](https://obsidian.md/) 自动创建您的 [每日笔记](https://help.obsidian.md/Plugins/Daily+notes)，而无需在启动时打开每日笔记，并包括您尚未打开的存储库中的日期吗？那么这个插件就是为您而设计的！

它作为 [Auto Journal](https://github.com/Ebonsignori/obsidian-auto-journal) 的替代品。Auto Journal 还具有回填功能，并带有更多功能，如月度笔记，但也强制执行特定的文件夹结构。

每日笔记创建者旨在作为每日笔记核心插件的附加组件，而不是替代品，并将使用您在那里定义的设置来创建缺失的笔记。

## 特点

![options](https://cdn.pkmer.cn/covers/daily-note-creator_2_0.png!pkmer)

**在启动时创建每日笔记** 允许您禁用内置的“在启动时打开每日笔记”选项。如果您想要打开上次打开的笔记或主页，则这很有用。

**在启动时自动创建未打开的每日笔记** 将为您没有打开保险库的日子填写每日笔记。如果超过一周，它将要求确认。

**创建缺失的每日笔记** 是一个您随时可以触发的命令，打开一个弹出窗口，让您填写任何时间范围内缺失的笔记。如果您想要填补过去一些缺失的日子，请使用此功能。

![modal](https://cdn.pkmer.cn/covers/daily-note-creator_2_1.png!pkmer)

## 已知问题

截至目前，如果您的日常笔记以文件夹结构（例如 `YYYY/MM/DD`）组织，或者文件名中除日期外还有其他文本（例如 `2023-12-31 元旦`），插件将无法正常工作。这两个问题都是由底层的 [obsidian-daily-notes-interface](https://github.com/liamcain/obsidian-daily-notes-interface) 包引起的，并且有未解决的问题：[#21](https://github.com/liamcain/obsidian-daily-notes-interface/issues/21), [#27](https://github.com/liamcain/obsidian-daily-notes-interface/issues/27)。一旦这些问题解决，我将更新此插件。
