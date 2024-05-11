---
uid: 20240323140900
title: Obsidian 样式 -Thino 列表模式日期样式调整
tags:
  - obsidian
  - thino
description: Obsidian 样式 -Thino 列表模式日期样式调整
author: Huajin
type: other
draft: false
editable: false
modified: 20240429001251
id: 7a1f1f53555c62f6
---

# Obsidian 样式 -Thino 列表模式日期样式调整

Thino 专业版开启了 『在列表模式中展示日期标记』后，在列表模式中会出现日期标记，并且点击后可以折叠（Cmd + 点击还可以单独展示当天所有 thino）。

![image.png](https://cdn.pkmer.cn/images/20240323140944.png!pkmer)

对于这个部分我做了一下样式修改：放大、居左、更明显的鼠标悬浮变化

![image.png](https://cdn.pkmer.cn/images/20240323141234.png!pkmer)

## CSS 代码

> css 代码使用方法见：[[Obsidian的CSS代码片段]]

```css
div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark {
  justify-content: left;
  width: fit-content;
  margin: 15px 0 5px;
  font-family: Inter,ui-sans-serif,system-ui;
  font-size: 1.2rem;
  font-weight: 600;
}

div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark {
  color: var(--memos-text-black);
}

div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark .day-mark-text {
  opacity: 1;
  color: var(--memos-text-black);
}

div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark .day-mark-text:hover {
  color: var(--memos-text-black);
}


div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark.folded .day-mark-text {
  opacity: .2;
  color: var(--memos-text-black);
  transition: all .4s ease;
}

div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark.folded .day-mark-text:hover {
  opacity: 1;
}

div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark.folded::before,
div[data-type=thino_view] .memolist-wrapper .memolist-container .day-mark.folded::after {
  display: none;
}
```