---
uid: 20250108152913
title: Obsidian 样式：Thino 多文件模式超长文件名优化显示
tags: []
description: Obsidian 样式：Thino 多文件模式超长文件名优化显示
author: OS
type: other
draft: false
editable: false
modified: 20250108153128
---

# Obsidian 样式：Thino 多文件模式超长文件名优化显示

## 概述

此内容适用于 Thino Pro 用户，在选择多文件存储时，自行修改了多文件的存储文件名，且修改名过长的情况。

可能会导致移动端或者 PC 端，显示界面异常，但不影响使用。

通过添加 自定义样式，可以修复此问题

```CSS
span.time-text.source-path {
    /* 首先设置元素为不换行显示 */
    white-space: nowrap;
    /* 超出元素宽度部分隐藏 */
    overflow: hidden;
    /* 当文本溢出时显示省略号 */
    text-overflow: ellipsis;
    /* 这里可以根据你期望的最大宽度进行设置，比如设置宽度为100px，你可以按需调整具体数值 */
    width: 180px;
}

```