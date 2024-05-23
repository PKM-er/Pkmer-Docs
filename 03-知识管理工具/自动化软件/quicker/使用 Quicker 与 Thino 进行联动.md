---
uid: 20231215132000
title: 使用 Quicker 与 Thino 进行联动
tags: [obsidian, thino, Quicker]
description: 通过 Thino HTTP Api 实现 Quicker 动作与 Thino 的联动
author: Alexinea
type: other
draft: false
editable: false
modified: 20240429172525
---

# 使用 Quicker 与 Thino 进行联动

[[obsidian-memos|Thino]] 出于 Memos 而胜于 Memos，从 2.1.4 版本开始支持通过 HTTP APIs 创建 thino 条目。因此，可以通过 Quicker 动作来实现这种联动。

[Quicker 动作安装地址](https://getquicker.net/Sharedaction?code=e4e73311-9c98-4498-9610-08dbfd0d4b63)

可以结合快捷键等来实现该动作的快速唤出。

该动作按以下顺序获取文本：

- 读取选中文本
- 读取剪贴板文本
- 手工输入文本

提交后，该动作将把阁下输入的文本插入 Obsidian Thino 中（非 TODO 模式，插入到 DAILY 下，请注意 Thino 的配置）。
