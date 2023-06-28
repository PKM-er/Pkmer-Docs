---
uid: 20230628205249
title: Obsidian 样式：待办事项美化复选框
tags: [Obsidian, 样式, CSS, 待办事项, 美化, 复选框]
description: Obsidian 样式：待办事项美化复选框
author: OS
type: other
draft: false
editable: false
modified: 20230628210154
---

# Obsidian 样式：待办事项美化复选框

## 引言

待办事项或者觉任务列表，是 Obsidian 在知识管理工具上提供的优质特性之一。默认样式，使用圆角矩形复选框 + 待办事务文案组成。

你可以通过使用不同的社区主题来改善这个复选框样式，让它看着与众不同，当然也可以使用 CSS 来完成这点。

## 使用

如果需要将圆角矩形复选框变为圆形，可以参考下面样式；

样式使用方法，参考 [[Obsidian的CSS代码片段]]

效果

![image.png](https://cdn.pkmer.cn/images/20230628210132.png!pkmer)

```CSS
input[type="checkbox"],
.cm-formatting-task {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: 1px solid var(--text-faint);
  padding: 0;
  vertical-align: middle;
}

.cm-s-obsidian span.cm-formatting-task {
  color: transparent;
  width: 1.25em !important;
  height: 1.25em;
  display: inline-block;
}

input[type="checkbox"]:focus {
  outline: 0;
}
input[type="checkbox"]:checked,
.cm-formatting-task.cm-property {
  background-color: var(--text-accent-hover);
  border: 1px solid var(--text-accent-hover);
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml; utf8, <svg width="12px" height="10px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-4.000000, -6.000000)" fill="%23ffffff"><path d="M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999"></path></g></g></svg>');
}
```