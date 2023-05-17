---
uid: 20230517150916
title: Obsidian 插件：File Color 让你文件管理多姿多彩
tags: []
description: Obsidian 插件：File Color 让你文件管理多姿多彩
author: OS
type: other
draft: false
editable: false
modified: 20230517152156
---

# Obsidian 插件：File Color 让你文件管理多姿多彩

## 概述

很多人都喜欢让自己的笔记个性化起来，尤其是界面美化，是 Obsidian 诞生以来久经不衰的话题。

File Color 插件就是针对文件管理器而开发的，他能够让你针对不同的文件夹和文件设定独立的颜色。这种设计不光是美化了界面，让他不在单调，也可以辅助你快速区分不同用途和优先级的内容。

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20230517151054.png!pkmer)

- 根据你设定的颜色为每个文件夹，或者是文件增加自定义颜色

## 使用

- 需要你在插件的设置中预先设置好你喜欢的颜色
![image.png](https://cdn.pkmer.cn/images/20230517151636.png!pkmer)

- 然后在文件管理器中右键文件夹或文件，设定对应颜色即可

![image.png](https://cdn.pkmer.cn/images/20230517150917.png!pkmer)

### 与其他插件联动用法

- 与 [[obsidian-icon-folder]] 联用：
	- 可以配合这个插件一起，不光为文件夹增加图标，还能统一修改颜色
![image.png](https://cdn.pkmer.cn/images/20230517151930.png!pkmer)

### 兼容性

- 与 [[folder-note]] 一起使用时：文件夹或文件名称的下划线不会被着色，为了解决这一问题，你可以尝试添加代码

```CSS
.nav-folder.alx-folder-with-note>.nav-folder-title>.nav-folder-title-content {
  text-decoration-style: dotted;
  text-decoration-color: inherit;
}
```