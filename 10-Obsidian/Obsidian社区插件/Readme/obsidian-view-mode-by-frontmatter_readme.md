---
uid: 2023080322184697
title: Obsidian 插件：【Readme】Force note view mode
tags: ['界面相关', '效率', '编辑器', 'obsidian插件', 'readme']
description: 允许你在 front-matter 中使用 YAML 语法，自定义每个笔记文件的视图样式。如：obsidianUIMode: preview，强制使用阅读模式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Force note view mode

> [!Note] 插件名片
> - 插件名称：Force note view mode
> - 插件作者：Benny Wydooghe
> - 插件说明：允许你在 front-matter 中使用 YAML 语法，自定义每个笔记文件的视图样式。如：obsidianUIMode: preview，强制使用阅读模式
> - 插件分类：['界面相关', '效率', '编辑器', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/bwydoogh/obsidian-force-view-mode-of-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-view-mode-by-frontmatter)

## 概述

允许你在 front-matter 中使用 YAML 语法，自定义每个笔记文件的视图样式。如：obsidianUIMode: preview，强制使用阅读模式



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bwydoogh/obsidian-force-view-mode-of-note/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-view-mode-by-frontmatter]] 插件的自述翻译


## Obsidian强制笔记视图模式

该插件允许您通过前置元数据指示笔记应始终以特定的视图模式或编辑模式打开。

通过键`obsidianUIMode`可以更改**视图模式**，它可以取值`source`或`preview`。通过声明键`obsidianEditingMode`可以更改**编辑模式**，它可以取值`live`或`source`。

示例：将下面的片段（前置元数据）添加到您的笔记中...
```
---
obsidianUIMode: source
obsidianEditingMode: live
---
```
...这将强制笔记以“实时预览”编辑模式打开。

类似地，...将下面的片段添加到您的笔记中...
```
---
obsidianUIMode: preview
---
```
...这将始终以阅读（/预览）模式打开该笔记。

该插件还确保笔记始终以配置的默认模式打开（假设Obsidian设置的默认模式为“预览”，但面板当前处于“源代码”模式，则在同一面板中打开新笔记将以“预览”模式打开）。



