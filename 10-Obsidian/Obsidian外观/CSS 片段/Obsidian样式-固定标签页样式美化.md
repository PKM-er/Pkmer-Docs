---
uid: 20240223182902
title: Obsidian 样式 - 固定标签页样式美化
tags: [obsidian, css, pin, 标签页]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 20240223185802
---

# Obsidian 样式 - 固定标签页样式美化

右键标签栏的文件名，可以看到有个『Pin』的选项，选择后可以把页面定在标签栏中，通常我们会固定非常常用的页面，例如你的主页等。但是如果固定在那里，很长一条不那么美观，因此写了段 css 用于隐藏该标签页的文字和『Pin』的符号。

## 效果

使用前：

![image.png](https://cdn.pkmer.cn/images/20240223193053.png!pkmer)

使用后

![image.png](https://cdn.pkmer.cn/images/20240223192958.png!pkmer)

## 源码

css 代码使用方法见 [[Obsidian的CSS代码片段]]

**使用方法**：

如果 pin 的是**特定页面**，可以用这段 css，然后把 ... 改为你 pin 的页面对应的 data-type 和 aria-label

```css
.workspace-tab-header-container-inner .workspace-tab-header[data-type='...'][aria-label="..."] .workspace-tab-header-inner-title, 
.workspace-tab-header-container-inner .workspace-tab-header[data-type='...'][aria-label="..."] .workspace-tab-header-status-container {
  display: none;
}

.workspace-tab-header-container-inner .workspace-tab-header[data-type='...'][aria-label="..."] {
  margin-left: 0 !important;
  width: 34px !important;
  padding: 0 0 2px;
  max-width: 34px;
}
```

这段 css 会同时把标题和 pin 的图标都隐藏了，适用于你 pin 的内容本身有 icon，例如 kanban 和 surfing 打开的页面会有个图标。

- 如果你 pin 的页面是无图标的页面，可以去掉第一行的 `.workspace-tab-header-container-inner .workspace-tab-header[data-type='...'][aria-label="..."] .workspace-tab-header-inner-title,` （包括逗号），这样就可以显示部分文本。
- 也可以去掉第一行逗号往后的 `, .workspace-tab-header-container-inner .workspace-tab-header[data-type='...'][aria-label="..."] .workspace-tab-header-status-container` 这样就可以显示 pin 的图标了。

那么如何查询 pin 的页面的 data-type 和 aria-label 呢？

- 快捷键 <kbd>ctrl+shift+i</kbd> 打开开发者模式
- 点击弹出也页面左上角的有个箭头的按钮（鼠标悬浮在该按钮上时显示快捷键 <kbd>ctrl+shift+c</kbd>
- 点击后鼠标移动到你 pin 的标签页上，单击一下
- 在显示的一大堆代码中，当前高亮的那一行或者他的父级中可以找到

![image.png](https://cdn.pkmer.cn/images/20240223194510.png!pkmer)

如果想要一次性修改所有你 pin 的 markdown 页面的样式，可以用这个

```css
.workspace-tab-header-container-inner .workspace-tab-header:has(.mod-pinned) .workspace-tab-header-inner-title {
  display: none;
}

.workspace-tab-header-inner:has(.mod-pinned) {
  padding-left: 3px;
}

.workspace-tab-header-container-inner .workspace-tab-header:has(.mod-pinned) {
  margin-left: 0 !important;
  width: 34px !important;
  padding: 0 0 2px;
  max-width: 34px;
}
```