---
uid: 20230809121941
title: Obsidian 样式：超长文件名换行或多行显示
tags: [Obsidian, 样式, 文件名, 换行显示, 多行显示]
description: Obsidian 样式：超长文件名换行或多行显示
author: 宝藏彬少
type: other
draft: false
editable: false
modified: 20230809123145
---

# Obsidian 样式：超长文件名换行或多行显示

倘若笔记的命名一直简短那得多爽，但这是个不可能的事情，当我们的笔记命名过于长，又不想让左侧边栏占据整体画面空间太多，这时候就可以考虑到让文件名换行。

可以采用以下独立片段（snippets css）：

```css
/* 文件名换行 */
div.nav-file-title-content,
div.nav-folder-title-content {
white-space: normal;
}
```

启用前：

![fb16dd379302e332da25417e9a0d6a1.png](https://cdn.pkmer.cn/images/fb16dd379302e332da25417e9a0d6a1.png!pkmer)

启用后：

![20813ebd64491244e24776d835d6fae.png](https://cdn.pkmer.cn/images/20813ebd64491244e24776d835d6fae.png!pkmer)
