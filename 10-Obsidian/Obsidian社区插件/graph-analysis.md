---
uid: 20230801182541
title: Obsidian 插件：Graph Analysis 让你的 Obsidian 像 Marginnote 一样，笔记和图谱活起来
tags: [Obsidian, 插件, 关系图谱, Marginnote]
description: Marginnote 与 Obsidian 的联动
author: 却能火里种金莲
type: other
draft: false
editable: false
modified: 20230801235457
---

# Obsidian 插件：Graph Analysis 让你的 Obsidian 像 Marginnote 一样，笔记和图谱活起来

## 概述

将图形分析能力添加到 Obsidian，此插件实现了一套算法，可以计算仓库中的笔记之间的关联关系。

> [!Note] 插件名片
> - 插件名称：Graph Analysis
> - 插件版本：0.15.4
> - 插件作者：SkepticMystic
> - 插件描述：将图形分析能力添加到 Obsidian，此插件实现了一套算法，可以计算仓库中的笔记之间的关联关系。
> - 插件项目地址：[点我跳转](https://github.com/juanjoarranz/style-text-obsidian-plugin)

## 基本功能

- 此插件是图谱的补充，用一系列参数来表现相互链接的笔记之间的关系。
依据参数，我们可以：
- 调整笔记的粒度，决定拆分与整合与否，使得知识库的粒度保持在合理区间。
- 发现笔记间的隐藏关系
	- 继 [[path-finder]] 之后的又一好用图谱插件

### 共同引用

- 参数反映的是 A 笔记和 B 笔记，在其他笔记中被共同双链的次数。
- 显示 5：即有五个笔记同时引用了 A 和 B 笔记。

![Snipaste_2023-08-01_18-20-11.png|586](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_18-20-11.png!pkmer)

![Snipaste_2023-08-01_18-19-55.png|586](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_18-19-55.png!pkmer)

### 相似性

- 参数表达两个笔记在图谱位置中的相似程度。（无关内容）

![Snipaste_2023-08-01_18-21-15.png|487](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_18-21-15.png!pkmer)

### 链接预测

- 参数表达两个笔记基于图谱应该相互链接的程度。

![Snipaste_2023-08-01_18-20-57 1.png|370](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_18-20-57%201.png!pkmer)

### Community Detection

- 用算法发现各组相似的笔记。

![Snipaste_2023-08-01_18-57-44.png|613](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_18-57-44.png!pkmer)

![Snipaste_2023-08-01_18-57-44.png|613](https://cdn.pkmer.cn/images/Snipaste_2023-08-01_19-53-06.png!pkmer)

## 注意事项

### 更新问题

- 此插件距离上次更新是两年前，可能会有一些冲突和 bug

### 参数算法问题

- 原网站提供了算法。
<https://github.com/SkepticMystic/graph-analysis>