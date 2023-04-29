---
uid: 20230329145808
title: Obsidian 插件：Force note view mode 自定义每个笔记的视图
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181107
public: yes
---

# Obsidian 插件：Force note view mode 自定义每个笔记的视图

## 概述

虽然 Obsidian 在编辑器中提供了常规编写模式的一些视图定义选项。但是对于一些用户来说，这样对所有笔记”一视同仁“的方法很不自由。

- 比如我的文献导入内容，可能不需要编辑主要是阅读，那么我希望进入时候都是阅读模式。
- 比如我的日记，就是进入就需要经常编辑。

在不同的使用场景下，统一化的设置似乎就会有所制约。

> [!Note] 插件名片
> - 插件名称：Force note view mode by front matter
> - 插件作者：Benny Wydooghe
> - 插件说明：自定义隐藏界面 UI。
> - 插件项目地址：[点我跳转](https://github.com/bwydoogh/obsidian-force-view-mode-of-note)

## 特性&功能

允许你在 front-matter 中使用 YAML 语法，自定义每个笔记文件的视图样式。如：obsidianUIMode: preview，强制使用阅读模式

## 使用

- 几乎不需要你的任何设置

语法：在笔记顶部输入

```YAML
---
obsidianUIMode: preview
---
```

表示使用预览视图

或者

```YAML
---
obsidianUIMode: source
obsidianEditingMode: live
---
```