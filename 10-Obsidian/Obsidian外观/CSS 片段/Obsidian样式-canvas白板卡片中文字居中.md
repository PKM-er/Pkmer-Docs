---
uid: 20230623102051
title: Obsidian 样式：Canvas 白板卡片中文字居中
tags: [Obsidian, 样式, Canvas, 白板, 卡片, 文字居中]
description: Obsidian 样式：Canvas 白板卡片中文字居中
author: OS
type: other
draft: false
editable: false
modified: 20230623102841
---

# Obsidian 样式：Canvas 白板卡片中文字居中

## 引言

Obsidian 白板是去年末出来的新特性，凭借着极简的操作和易用的特性，受到了很多人喜爱。但是做为刚诞生的不久的功能，那么肯定会有一些“差强人意”的地方，比如没有各种自定义外观的设置。

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]
## 样式设置

下面的方法可以帮助你调整白板中卡片的文字对齐情况，比如使用居中对齐方式

```CSS
.canvas-node-container .markdown-embed-content {
	text-align: center;
}
```

如果你只想标题居中，而其他段落文字不居中可以尝试这段：

```CSS
.canvas-node-container .markdown-embed-content h1 {
	text-align: center;
}
.canvas-node-container .markdown-embed-content h2 {
	text-align: center;
}
.canvas-node-container .markdown-embed-content h3 {
	text-align: center;
}
.canvas-node-container .markdown-embed-content h4 {
	text-align: center;
}
.canvas-node-container .markdown-embed-content h5 {
	text-align: center;
}
.canvas-node-container .markdown-embed-content h6 {
	text-align: center;
}
```

![image.png](https://cdn.pkmer.cn/images/20230623102806.png!pkmer)
