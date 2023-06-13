---
uid: 20230611184142
title: Obsidian 样式：待办任务样式
tags: [Obsidian, 美化, 待办, 已完成, 删除线]
description: Obsidian 样式：待办任务样式
author: OS
type: other
draft: false
editable: false
modified: 20230611184528
---

# Obsidian 样式：待办任务样式

## 引言

笔记软件除了能让我们流畅的书写，聚焦产出之外，还有集成了事务管理的能力，最简单某过于使用任务列表来完成一些日常的待办记忆。

但是有些主题和样式总是不那么令人满意，下面内容就收集了相关的任务完成的想过效果信息

## 待办完成但是任务文字上没有删除线

这是一些主题，或者主题中某些特殊配置方案引起的。

如果你喜欢那个主题，但是又想增加任务代办的完成删除线，那么可以参考下面代码

```CSS
.markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="x"], .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="X"] {
    text-decoration: var(--checklist-done-decoration) !important;
    color: var(--checklist-done-color);
}

ul > li.task-list-item[data-task="x"], ul > li.task-list-item[data-task="X"]{
	text-decoration: var(--checklist-done-decoration) !important;
    color: var(--checklist-done-color);
}
```