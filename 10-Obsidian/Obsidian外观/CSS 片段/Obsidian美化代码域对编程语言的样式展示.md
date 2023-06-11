---
uid: 20230608155414
title: Obsidian 美化代码域对编程语言的样式展示
tags: [Obsidian, 代码域, 高亮方案, snippets]
description: 美化代码域对编程语言的样式展示
author: OS
type: other
draft: false
editable: false
modified: 20230611100826
---

# Obsidian 美化代码域对编程语言的样式展示

## 引言

有很多同学在自己学习，或者本职工作，甚至是接触 Obsidian 后，对编程产生了很大兴趣，但又对 Obsidian 默认支持的语法高亮方案不够满意，觉得样高亮过于素雅。

就会产生疑问有无方法，自己定义样式

## 实践

以下代码可以对所有编程语言或者代码域里的内容生效，而非针对不同编程语言的高亮方案。

但是统一的高亮配色方案，可能会让很多同学觉得很舒服。

### 效果

![image.png](https://cdn.pkmer.cn/images/20230608155915.png!pkmer)

## Snippets

如何使用自定样式的方法，可以参考 [[Obsidian的CSS代码片段]]（2 步安装自定义样式）

```CSS
.cm-hmd-codeblock.cm-keyword {
    color:#7bafea !important;
}
.cm-hmd-codeblock.cm-meta {
    color:#3fb87a !important;
}
.cm-hmd-codeblock.cm-type {
    color:#c9305c !important;
}
.cm-hmd-codeblock.cm-variable {
    color:#eaefed !important;
}
.cm-hmd-codeblock.cm-number {
    color:#c9305c !important;
}
.cm-comment.cm-hmd-codeblock {
    color:#e7e186 !important;
}
.cm-hmd-codeblock.cm-string{
    color:#e7e186 !important;
}
.cm-hmd-codeblock {
    color:rgb(255, 255, 255)
}
.cm-hmd-codeblock.cm-operator {
    color:coral;
}
.cm-def.cm-hmd-codeblock {
    color: rgb(137, 220, 220) !important;
}
.cm-builtin.cm-hmd-codeblock{
    color:rgb(157, 216, 143) !important;
}
```