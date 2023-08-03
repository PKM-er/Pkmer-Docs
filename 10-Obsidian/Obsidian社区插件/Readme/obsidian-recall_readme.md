---
uid: 20230803213121
title: Obsidian 插件：【Readme】Recall
tags: ['文件重构', 'obsidian插件', 'readme']
description: 一款可配置的灵活间隔重复插件，提供多种算法可供选择。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Recall

> [!Note] 插件名片
> - 插件名称：Recall
> - 插件作者：Martin Jirlow
> - 插件说明：一款可配置的灵活间隔重复插件，提供多种算法可供选择。
> - 插件分类：['文件重构', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/martin-jw/obsidian-recall)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-recall)

## 概述

一款可配置的灵活间隔重复插件，提供多种算法可供选择。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/martin-jw/obsidian-recall/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-recall]] 插件的自述翻译



# 回忆 - Obsidian中的间隔重复系统！
这个插件为[Obsidian](https://obsidian.md/)实现了一个间隔重复系统，用于复习信息，可以使用任何SRS算法。

请查看[计划中的功能](https://github.com/martin-jw/obsidian-recall#planned-features)以获取即将推出的更新。如果您想要请求一个尚未计划的功能，或者报告一个错误，请[提出问题](https://github.com/martin-jw/obsidian-recall/issues)。

## 快速指南

1. [安装](https://github.com/martin-jw/obsidian-recall#installation) 插件。

2. 选择你想要使用的[算法](https://github.com/martin-jw/obsidian-recall#algorithms)。

3. 开始[跟踪笔记](https://github.com/martin-jw/obsidian-recall#tracking-notes)。

4. [复习](https://github.com/martin-jw/obsidian-recall#review)它们！

## 安装
该插件尚未在Obsidian的社区插件部分中提供，因此在此之前，必须手动安装该插件。

### 手动安装
在你的 vault 中，导航到 `.obsidian/plugins` 目录并创建一个名为 `obsidian-recall` 的文件夹。将[最新版本](https://github.com/martin-jw/obsidian-recall/releases)中的 `main.js`、`manifest.json` 和 `styles.css` 文件添加到该文件夹中。

## 跟踪笔记
该插件在一个可配置的位置跟踪笔记的审查，将其保存在一个名为`tracked_files.json`的单独文件中。这意味着您不需要对要审查的笔记进行任何更改。要跟踪一个笔记，可以右键单击文件资源管理器中的一个笔记，然后点击`Track Note`，或者运行命令`SRS: Track Note`来跟踪当前活动的文件。

您还可以通过右键单击资源管理器中的一个文件夹并按下`Track All Notes`来递归跟踪该文件夹中的所有笔记。

**目前，文件的最顶层标题将被视为笔记的问题。**如果没有标题，则使用文件名。这很可能很快会改变。

取消跟踪笔记的方法与之前相同，只需在资源管理器中右键单击一个笔记，然后点击“取消跟踪笔记”，或者运行命令“SRS: 取消跟踪笔记”。

您还可以通过在资源管理器中右键单击文件夹并按下“取消跟踪所有笔记”来递归地从SRS中删除文件夹中的所有笔记。

请注意，取消跟踪笔记会从系统中删除有关该笔记的所有信息，因此任何进度都将被重置。

### 状态栏

该插件在Obsidian的状态栏中添加了一个状态。该状态根据当前正在查看的笔记而变化：
- 当查看已跟踪的笔记时，它显示下次复习该笔记的时间。
- 当查看未跟踪的笔记时，它显示当前队列中的笔记数量。
- 当处于复习模式时，它显示剩余复习项的数量。

审核项目
要审核到期项目，请运行“SRS: Review”命令。这将构建队列并打开审核视图，显示所有需要审核的项目。

### 添加快捷键
在Obsidian的设置中的`Hotkeys`部分，可以将任何`SRS:`命令绑定到快捷键。目前还没有为复习视图的不同响应设置快捷键，但这是计划中的功能。

## 算法

该插件使用模块化的方式添加算法。这意味着您可以根据自己的需求选择要用于复习的算法。目前，只实现了一些算法。如果您想要请求添加特定的算法，请提交一个[功能请求](https://github.com/martin-jw/obsidian-recall/issues)。如果您觉得某个算法的行为不正确或缺少某些功能，请[报告错误](https://github.com/martin-jw/obsidian-recall/issues)。

### 更改算法

由于SRS算法可能会有很大的不同，一个算法可以定义自己的数据来跟踪重复项目。这意味着不同的算法可能会有冲突的数据，因此在已经存在项目的情况下切换算法可能会使现有项目的复习间隔被重置或改变。

因此，目前切换算法需要重新加载插件。

目前可用的算法

这是[Anki算法](https://faqs.ankiweb.net/what-spaced-repetition-algorithm.html)的一个实现。

它使用与SM2算法相同的数据结构，因此您可以在它们之间切换而不会丢失数据。

#### 设置

有关可用设置的更多详细信息，请参阅[Anki的文档](https://docs.ankiweb.net/#/deck-options)。

SM2

SuperMemo的算法实现，[SM2](https://www.supermemo.com/en/archives1990-2015/english/ol/sm2)。这是Anki算法基于的算法。

该算法目前没有暴露任何设置。它使用与Anki算法相同的数据结构，因此您可以在它们之间切换而不会丢失数据。

这是[Leitner System](https://www.wikiwand.com/en/Leitner_system)（也称为鞋盒法）的实现。项目被分成“盒子”（在设置中称为阶段），每个盒子之间有一定的复习时间间隔。

当一个项目被标记为正确时，它将进入下一个阶段。如果一个项目被标记为错误，它将返回到第一个阶段。

#### 设置

**阶段** - 阶段的数量。更改此项会更新系统可用的最大阶段数。

**错误时重置** - 是否在错误时返回到初始阶段，或者只是返回上一个阶段。

**时间** - 每个阶段的时间。

# 计划功能

这些是当前计划的功能，没有固定的优先顺序：

- [ ] 每个笔记可以有多个项目。
  - [ ] 将独立的标题提取为独立的问题和SRS项目。
- [ ] 更多识别重复项目的方法
  - [ ] 闪卡样式：`问题::答案`
  - [ ] 不同级别的标题
  - [ ] 分隔符
  - [ ] 隐去删除？
- [ ] 自定义队列和复习。
  - [ ] 利用Obsidian的搜索过滤器指定要复习的笔记，并在不更新其状态的情况下复习笔记。
- [ ] 向用户公开更多的SRS数据。
  - [ ] 显示SRS中所有当前项目的列表。
  - [ ] 公开项目的数据并允许用户手动更改。



