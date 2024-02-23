---
uid: 20240223202321
title: Obsidian 样式 - 状态栏美化
tags: [obsidian, css, state-bar, 状态栏]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240223203021
---

# Obsidian 样式 - 状态栏美化

- 给状态栏增加透明度，使得平常不显眼。
- 鼠标悬浮 (hover) 时透明度恢复
- 去除边框，hover 恢复

```css
.status-bar {
  /* background-color: var(--background-primary); */
  border-width: 0;
  opacity: .5;
  transition: all .2s linear;
}

.status-bar:hover {
  opacity: 1;
  border-width: var(--status-bar-border-width);
}
```

如果浅浅的背景色也不需要，可以把上面的注释的 `/* background-color: var(--background-primary); */` 给取消注释（去掉开头结尾的 `/* */` 即可）

如何使用 css 请见 [[Obsidian的CSS代码片段]]