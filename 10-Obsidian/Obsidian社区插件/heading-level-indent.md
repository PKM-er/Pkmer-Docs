---
uid: 20230502002201
title: Obsidian 插件：Heading Level Indent 为不同等级标题增加缩进
description: 
author: 
type: other
draft: false
editable: false
modified: 20230502004257
---

# Obsidian 插件：Heading Level Indent 为不同等级标题增加缩进

## 概述

很多时候我们因长久的排版系统习惯，希望不同标题拥有不同的段落感，以保障在视觉上阅读感受。虽然这打破了 Markdown 的初衷，但是如果这能让你体验更好的笔记输入，提高书写感受，那就是最好的。

所以这时候就用到了 Heading Level Indent 插件，它能根据标题级别缩进内容，用于创建视觉层次结构，使文档的结构和组织更容易理解，并有助于在特定的结构部分上应用选择性注意力。

> [!Note] 插件名片
> - 插件名称：Heading Level Indent
> - 插件作者：svonjoi
> - 插件说明：能根据标题级别缩进内容，用于创建视觉层次结构，使文档的结构和组织更容易理解。
> - 插件项目地址：[点我跳转](https://github.com/svonjoi/obsidian-heading-level-indent)

>[!Tip]
>- 仅适用于阅读视图
>- 插件作者计划后续支持实时编辑模式等。

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230502003613.png)

## 使用

- 你可以在插件设置中为每个标题的内容指定间距。
- 支持设置 h1/2/3/4/5/6 的标题缩进距离。

### 默认值

- h1 identation: 0
- h2 identation: 60
- h3 identation: 120
- h4 identation: 170

### 自定义样式

你可以使用自定义 CSS 结合不同的标题缩进。例如，如果喜欢将 h1 标题作为带有自定义居中格式的笔记标题，对于剩下的标题，使用不同的格式来生成层次结构，以便更好地可视化它们的区别。

此外，还可以结合折叠标题选项和 creases 插件，将特定标题级别的折叠指定为一个快捷键。

## 插件计划

- 修复阅读模式中缩进延迟展示的问题
- 添加源代码/实时预览模式的支持
- 增加不同缩进等级之间的缩进线，类似大纲中绘制垂直缩进线。
- 支持 callout 中的缩进。