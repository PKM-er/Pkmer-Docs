---
uid: 20230616135009
title: Obsidian 样式 - 多彩文件夹样式
tags: [Obsidian, css, 美化, 多彩文件夹]
description: Obsidian多彩文件夹样式
author: cuman
type: other
draft: false
editable: false
modified: 20230616171208
---

# Obsidian 样式 - 多彩文件夹样式

## 概述

Obsidian [[文件浏览器样式]] 美化提到了给文件夹添加图标，如果想让文件夹看起来不那么单调可以通过给文件夹添加背景色。

## 多彩文件夹样式

应用片段的效果如图，可以看到默认的文件夹都添加了背景色。

> [!info] 注意
> 本片段对文件夹添加背景色，是根据文件夹显示的顺序添加，跟文件夹命名无关。

![60.gif](https://cdn.pkmer.cn/images/202306161708440.gif!pkmer)

```css
/***
可以根据喜好更改对应的色值
**/
.theme-light,
.theme-dark {
    --Fold0: #ffe2e2;
  --Fold1: #ffdee9;
  --Fold2: #f6e1ff;
  --Fold3: #e9dfff;
  --Fold4: #e1e5ff;
  --Fold5: #d4eaff;
  --Fold6: #cdedff;
  --Fold7: #ccf2f7;
  --Fold8: #d5f8f4;
  --Fold9: #d8f8da;
  --FoldA: #ecffdb;
  --FoldB: #f4fbd2;
}


/* ===folder-colorful-order ============ */
 .nav-folder.mod-root>.nav-folder-children .nav-folder-title
{
  color: #000000;
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder .nav-file-title {
  color: var(--FoldText);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder .nav-folder-title.is-active,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder .nav-folder-title:hover {
  font-weight: bold;
  filter: saturate(150%);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+2) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+2) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold0);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+3) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+3) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold1);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+4) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+4) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold2);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+5) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+5) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold3);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+6) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+6) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold4);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+7) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+7) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold5);
}

 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+8) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+8) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold6);
}

 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+9) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+9) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold7);
}

 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+10) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+10) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold8);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+11) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+11) .nav-folder-title+.nav-folder-children {
  background-color: var(--Fold9);
}

 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+12) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+12) .nav-folder-title+.nav-folder-children {
  background-color: var(--FoldA);
}
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+13) .nav-folder-title,
 .nav-folder.mod-root>.nav-folder-children>.nav-folder:nth-child(12n+13) .nav-folder-title+.nav-folder-children {
  background-color: var(--FoldB);
}
```