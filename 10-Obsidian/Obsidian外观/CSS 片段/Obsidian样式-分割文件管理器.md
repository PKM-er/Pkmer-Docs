---
uid: 20240323132950
title: Obsidian 样式 - 分割文件管理器
tags: [obsidian, css, file-explorer]
description: Obsidian 样式 - 分割文件管理器
author: Huajin
type: other
draft: false
editable: false
modified: 20240429001210
---

# Obsidian 样式 - 分割文件管理器

如果你的根目录有太多文件夹，不方便查找，可以试试这个 css。他可以在文件文件管理器中添加一些分割线，帮助你为文件分区。

## 效果

使用前：

![image.png](https://cdn.pkmer.cn/images/20240323133302.png!pkmer)

使用后

![image.png](https://cdn.pkmer.cn/images/20240323133513.png!pkmer)

## 代码及使用方法

来源：<https://github.com/replete/obsidian-minimal-theme-css-snippets>

```css
/*
    File Explorer Separators
    So this is super handy, I found a way to add visual separators below and above navigation items in the file explorer. 
    This works nicely along side the 'Custom File Explorer Sorting' plugin, and there's a thread on their github about my solution.
    You need to customize the rule below in accordance with your file structure.
    These styles go with
    https://github.com/replete/obsidian-minimal-theme-css-snippets
*/
:root {
    --replete-custom-separators-vertical-padding: 6px;
    --replete-custom-separators-left-margin: -12px;
}

/* Separator below */
.nav-folder-children>[class*=nav-]:has([data-path="03-知识管理工具"])::after {
    content: '';
    display: block;
    height: 1px;
    width: calc(100% + 32px);
    background: var(--tab-outline-color);
    margin: var(--replete-custom-separators-vertical-padding) 0 var(--replete-custom-separators-vertical-padding) var(--replete-custom-separators-left-margin);
}
```

> 如何添加 CSS 片段，参考 [[Obsidian的CSS代码片段]] 中的方法

如果你想在你的库中使用这段 css，你**需要手动添加你需要添加分割线的位置**。例如上面代码中的 <kbd>"03- 知识管理工具 "</kbd>。把他们替换成你需要分割的文件夹的名称（文件名也可以）

**如果你要添加的分割线多于三条**，只需要依葫芦画瓢复制粘贴一份即可：

```css
.nav-folder-children>[class*=nav-]:has([data-path="03-知识管理工具"])::after,
.nav-folder-children>[class*=nav-]:has([data-path="13-Sophosia"])::after {
    content: '';
    display: block;
    height: 1px;
    width: calc(100% + 32px);
    background: var(--tab-outline-color);
    margin: var(--replete-custom-separators-vertical-padding) 0 var(--replete-custom-separators-vertical-padding) var(--replete-custom-separators-left-margin);
}
```

**如果你想在某个文件夹前添加分割线**（前面是添加在文件夹后），只需要把 after 改为 before 即可（用逗号分割即可）

```css
.nav-folder-children>[class*=nav-]:has([data-path="03-知识管理工具"])::before,
.nav-folder-children>[class*=nav-]:has([data-path="13-Sophosia"])::after {
    content: '';
    display: block;
    height: 1px;
    width: calc(100% + 32px);
    background: var(--tab-outline-color);
    margin: var(--replete-custom-separators-vertical-padding) 0 var(--replete-custom-separators-vertical-padding) var(--replete-custom-separators-left-margin);
}
```

你还可以自定义分割线的样式，让他不仅仅只是一条横线。例如可以让它变成彩色，让他左右渐变等（[[Obsidian样式-分割线样式美化]]）