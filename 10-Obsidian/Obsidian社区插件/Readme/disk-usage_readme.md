---
uid: 2024022117273132
title: Obsidian 插件：【Readme】Disk Usage
tags: ['obsidian插件', 'readme']
description: Measures disk usage for tracking size of folders and file types.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Disk Usage

> [!Note] 插件名片
> - 插件名称：Disk Usage
> - 插件作者：Promptier
> - 插件说明：Measures disk usage for tracking size of folders and file types.
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Promptier/disk-usage)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?disk-usage)

## 概述

Measures disk usage for tracking size of folders and file types.



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Promptier/disk-usage/master/README.md)
> 

---

## Readme(翻译）

下面是 [[disk-usage]] 插件的自述翻译

【机翻】
This plugin is currently in early development. It's purpose is simple, to manage the file space and size of your vault. Whether you want to know which folder is slowing your loading speed, or you are reaching your size limit for the sync service, this plugin will be helpful in managing your vault.
### 特点
##### 显示Vault的摘要

![image](https://cdn.pkmer.cn/covers/disk-usage_1_0.png!pkmer)
```mermaid
pie title 按文件类型和文件夹查看总磁盘使用情况
	"md" : 58581
	"jpeg" : 8528
	"gif" : 12303
	"jpg" : 87401
	"png" : 70515
	"canvas" : 645
	"pdf" : 99415
	"excalidraw" : 12646
```

```mermaid
pie title 按文件夹查看总磁盘使用情况
	"Academic" : 19488
	"Personal" : 13646
	"Professional" : 2309
	"todo" : 5300
	"Photos" : 25308
	"Drawings" : 11363
```
#### 按文件夹查看文件类型

```mermaid
pie title 照片
	"gif" : 1008
	"jpg" : 2089
	"png" : 408
```

```mermaid
pie title 学术
	"md" : 1008
	"pdf" : 4089
	"png" : 408
```

```mermaid
pie title 图纸
	"excalidraw" : 12646
	"Canvas" : 1280
```
### 如何使用

安装并启用此插件后，您将在屏幕左侧找到一个`磁盘使用情况报告`的带状图标/按钮。这将创建一个包含上面所有图表的markdown文件。完成后，您可以将其保存在某个地方或删除它。



