---
uid: 20230619195908
title: Obsidian 样式 - 修改内链的链接颜色
tags: [Obsidian, 样式, 内链, 双链, 内链样式]
description: Obsidian样式-修改内链的链接颜色
author: OS
type: other
draft: false
editable: false
modified: 20230619201503
---

# Obsidian 样式 - 修改内链的链接颜色

## 引言

双链是 Obsidian 中非常令人惊艳的特性之一。它为用户提供了一种互相连接和组织笔记的新方式。通过使用双链，用户可以在 Obsidian 笔记之间建立双向链接，形成一个有机且灵活的知识网络。

但是默认主题的样式可能让你觉得不够习惯，如何自定义内链的样式呢？

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]
## 方法

1. 利用 Obsidian 特性，在设置 - 外观 中，直接调整 主题色，来实现切换内链链接的目的
2. 在 Obsidian 外观中安装并使用其他主题，很多主题都为双链设置了颜色。
3. 使用 CSS 片段，直接干预颜色，无视你使用主题具体是什么，也无视你设置的主题色

```CSS
.cm-hmd-internal-link .cm-underline {
	color:#eeab35 !important;
}
.internal-link {
	color:#eeab35 !important;
}
/*color: 后面可以防止你喜欢的颜色*/
```