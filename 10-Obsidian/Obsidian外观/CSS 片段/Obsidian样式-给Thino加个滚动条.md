---
uid: 20231111150219
title: Obsidian 样式：给 Thino 加个滚动条
tags: [obsidian, Thino, 美化]
description: Obsidian 样式：给 Thino 加个滚动条
author: Huajin
type: other
draft: false
editable: false
modified: 20231111175450
---

# Obsidian 样式：给 Thino 加个滚动条

```css
div[data-type=thino_view] .memolist-wrapper .memolist-container .list-view.masonry-memolist {
  max-height: 500px;
  overflow: auto;
}
```

当高度超过 500 像素的时候出现滚动条，高度可以自行调整。

![Obsidian 样式：给 Thino 加个滚动条](https://cdn.pkmer.cn/images/Pasted%20image%2020231111150749.png!pkmer)