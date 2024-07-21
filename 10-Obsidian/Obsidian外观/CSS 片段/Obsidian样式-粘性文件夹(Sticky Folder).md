---
uid: 20240721184803
title: Obsidian 样式 - 粘性文件夹 (Sticky Folder)
tags: [文件夹管理, 样式与美化]
description: 粘性文件夹
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240721184945
---

# Obsidian 样式 - 粘性文件夹 (Sticky Folder)

![24.07.21_Obsidian样式-粘性文件夹(Sticky Folder)](https://cdn.pkmer.cn/images/202407210748082.gif!pkmer)

```css
/* !设置文件夹粘性 by 熊猫2024-06-23_23-22 */
.nav-files-container>div>.tree-item.nav-folder .nav-folder-title .nav-folder-title-content {
  background-color: var(--background-secondary);
  z-index: 4;
}
.nav-files-container>div>.tree-item.nav-folder .nav-folder-title {
  z-index: 1;
}
.nav-files-container>div>.tree-item.nav-folder>.nav-folder-title {
  position: sticky;
  z-index: 4;
  top: 0rem;
}
.nav-files-container>div>.tree-item.nav-folder>div>.tree-item.nav-folder>.nav-folder-title {
  position: sticky;
  z-index: 3;
  top: 1.5rem;
}

.nav-files-container>div>.tree-item.nav-folder>div>.tree-item.nav-folder>div>.tree-item.nav-folder>.nav-folder-title {
  position: sticky;
  z-index: 2;
  top: 3rem;
}
```
