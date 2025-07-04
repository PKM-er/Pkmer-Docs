---
uid: 20250704152922
title: Obsidian 样式：定义标题行背景色
tags: [标题, CSS美化, CSS片段]
description: Obsidian 样式：定义标题行背景色
author: OS
type: other
draft: false
editable: false
modified: 20250704153824
---

# Obsidian 样式：定义标题行背景色

可以自定义笔记标题行的背景色和文字颜色，当然你也可以使用 [[Blue Topaz]] 这样的主题，配合 [[obsidian-style-settings]] 这样的插件达成类似的效果

- 通过使用 自定义样式来完成，使用方法参考 [[Obsidian的CSS代码片段]]

## 样式安装与配置

```CSS
/*编辑视图的标题背景色和文字色*/
.HyperMD-header.HyperMD-header-1.cm-line{
    background-color:#A41F1F ;
    color:white;
}

.HyperMD-header.HyperMD-header-2.cm-line{
    background-color:#A41F1F ;
    color:white;
}

.HyperMD-header.HyperMD-header-3.cm-line{
    background-color:#A41F1F ;
    color:white;
}

/*阅读视图的标题背景色和文字色*/
h1 {
    background-color:#A41F1F ;
    color:white;   
}

h2 {
    background-color:#A41F1F ;
    color:white;   
}

h3 {
    background-color:#A41F1F ;
    color:white;   
}
```