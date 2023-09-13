---
uid: 20230902162908
title: relation-pane：显示 与当前笔记相关的笔记的信息
tags:
  - 插件
  - Obsidian
  - 统计
description: relation-pane：显示 与当前笔记相关的笔记的信息
author: Nathaniel
type: other
draft: false
editable: false
modified: 20230902164622
---

# relation-pane：显示 与当前笔记相关的笔记的信息

> [!Note] 插件名片
> - 插件名称：Relation Pane
> - 插件版本：0.0.4
> - 插件作者：[mottox2](https://mottox2.com/)
> - 插件描述：显示一个总结笔记间关系的面板
> - 插件项目地址：[点我跳转](https://github.com/mottox2/obsidian-relation-pane)

## 特性效果

插件功能是创建一个 leaf 用于显示 与当前笔记相关的笔记的信息。

关系包括如下几种情况

1. 当前笔记包含的笔记（入链 Outgoing Link ）
2. 引用当前笔记的笔记（出链 Backlink）
3. 引用了当前笔记引用的笔记的笔记（有点绕口）
4. 当前笔记中创建的空笔记链接（存在引用，但是笔记未创建）

 > [!NOTE] 关于第三个说明：
 > 假设当前笔记 `current.md` 引用了笔记 `foo.md`，存在其他的笔记 `other.md` 也引用了 `foo.md`，那么这个笔记 `other.md` 就是第三种情况。
 >

****

![](image-20230902162708111.png)

## 使用

调用命令面板打开插件面板

 ```bash
Ctrl + p 
``` 

输入 `Relation-Pane: Open relation view`

![](image-20230902161625708.png)

如果当前笔记存在上述的几种情况

面板上会有链接显示

![](image-20230902162647798.png)

![](image-20230902162727949.png)
