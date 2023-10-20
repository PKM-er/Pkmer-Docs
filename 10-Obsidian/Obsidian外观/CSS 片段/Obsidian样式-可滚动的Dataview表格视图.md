---
uid: 20231008182049
title: Obsidian 样式：可滚动的 Dataview 查询结果
tags: [Obsidian, dataview]
description: 除了 limit，你还可以这样限制 dataview 的输出结果
author: Huajin
type: other
draft: false
editable: false
modified: 20231010212421
---

# Obsidian 样式：可滚动的 Dataview 查询结果

当你使用 Dataview 检索时，如果查询结果过多，但是我们又不想用 limit 来限制获取的结果时，可以试试用下面这段 css。它可以把 dataview 查询结果的长度限制在一定长度，超出这个长度就会出现滚动条，以滚动的方式浏览下面的结果。

效果如图：

![Pasted image 20231008183416.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231008183416.png!pkmer)

```css
.block-language-dataview {
  display: block;
  height: 400px;
  overflow: auto;
}

.block-language-dataviewjs {
  display: block;
  height: 400px;
  overflow: auto;
}
```

代码中的两个 400 px 代表把 dataview 和 dvjs 的查询结果的高度限制为 400px，如果觉得尺寸不合适可以自行修改。

添加 CSS 可以参考这篇：[[Obsidian的CSS代码片段]]
