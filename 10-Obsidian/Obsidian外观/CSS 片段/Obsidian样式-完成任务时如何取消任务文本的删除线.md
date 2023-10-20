---
uid: 20231019171116
title: Obsidian 样式：完成任务时如何取消任务文本的删除线
tags:
  - Obsidian
  - CSS美化
description: Obsidian 样式：完成任务时如何取消任务文本的删除线
author: OS
type: other
draft: false
editable: false
modified: 20231019230645
---

# Obsidian 样式：完成任务时如何取消任务文本的删除线

## 引言

Obsidian 支持任务语法，让我们可以通过勾选框+文本列表的模式，对任务或者时嵌套任务进行管理（具体语法可以参考 [[Markdown#任务列表]]）

但默认主题和一些主流主题都会在完成任务时，针对任务内容文本进行样式变化，增加一条删除线，有些同学可能会觉得这个样式妨碍阅读。

## 解决

- 方法一：更换主题
- 方法二：使用自定义样式片段，具体插入自定义片段的方法参考：[[Obsidian的CSS代码片段]] 中如何操作

具体片段方法：

此方法时针对完成任务的设置，如果你的主题还有其他任务状态样式，可以参考下面语法灵活修改。

```CSS
.markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="x"], .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="X" {
text-decoration: unset;
}
```