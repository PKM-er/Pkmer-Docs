---
uid: 20231130142557
title: 去除 hover editor 插件弹窗中的 metadata 属性面板
tags: ["Obsidian", "CSS", "metadata", "hover editor"]
description: 去除hover editor插件弹窗中的metadata属性面板
author: ProudBenzene
type: other
draft: false
editable: false
modified: 20231130142744
---

# 去除 hover editor 插件弹窗中的 metadata 属性面板

Obsidian 更新 1.4 大版本后，带来了升级版 metadata 与属性面板新特性。但是种种插件适配问题也接踵而来，如 hover editor 插件悬浮预览时，弹窗中的属性面板在预览模式中依然显示，占据了大量空间。我们想要阅读笔记内容必须每次先手动下滑笔记，造成了一定的麻烦。但是如果在设置中直接关闭属性面板，则当前主笔记中的属性面板也会一同消失。

![Pasted image 20231011112445.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231011112445.png!pkmer)

对此，我们可以使用以下 css 片段，保留主笔记的 metadata，仅仅去除弹窗悬浮预览中的 metadata 属性面板。

```css
.popover.hover-editor .markdown-preview-view.show-properties .metadata-container {
    display: none;
}
```

效果如下：

![Pasted image 20231011112453.png](https://cdn.pkmer.cn/images/Pasted%20image%2020231011112453.png!pkmer)
