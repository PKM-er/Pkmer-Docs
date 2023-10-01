---
uid: 20230918104801
title: Obsidian 样式：修复 banner 和 Properties 高度冲突以及多余留白改善
tags: []
description: Obsidian 样式：修复 banner 和 Properties 高度冲突以及多余留白改善
author: OS
type: basic
draft: false
editable: false
modified: 20230918105309
---

# Obsidian 样式：修复 banner 和 Properties 高度冲突以及多余留白改善

## 引言

更新 1.4.x 之后，很多人因为使用了 banner 插件，还有 properties 新核心插件而出现了高度问题，会出现莫名的留白

## 效果

这里是一个尝试的修复犯法

```
div.mod-header:has(+ div.obsidian-banner-wrapper) {
	margin-top:var(--banner-height) !important;
}
.obsidian-banner-wrapper {
	margin-top:unset;
}
```