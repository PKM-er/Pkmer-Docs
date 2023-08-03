---
uid: 2023080322291201
title: Obsidian 插件：【Readme】Vault Statistics
tags: ['统计', '状态栏', 'obsidian插件', 'readme']
description: 为整个仓库添加状态栏，并显示统计信息，如笔记数量、文件数量、附件数量和链接数量等等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vault Statistics

> [!Note] 插件名片
> - 插件名称：Vault Statistics
> - 插件作者：Bryan Kyle
> - 插件说明：为整个仓库添加状态栏，并显示统计信息，如笔记数量、文件数量、附件数量和链接数量等等。
> - 插件分类：['统计', '状态栏', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/bkyle/obsidian-vault-statistics-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-vault-statistics-plugin)

## 概述

为整个仓库添加状态栏，并显示统计信息，如笔记数量、文件数量、附件数量和链接数量等等。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bkyle/obsidian-vault-statistics-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-vault-statistics-plugin]] 插件的自述翻译


# Obsidian Vault统计插件

状态栏项目，显示包括笔记数量、文件数量、附件数量和链接数量在内的Vault统计信息。

## 使用方法

安装并启用插件后，您将在状态栏中看到一个新的项目，显示您的存储库中的笔记数量。

- 单击状态栏项目以循环浏览可用的统计信息。
- 将鼠标悬停在状态栏项目上以查看所有可用的统计信息。

高级用法

### 显示所有统计信息

可以通过创建并启用以下内容的CSS片段来显示所有统计信息。

```css
/* 显示所有保险库统计信息。 */
.obsidian-vault-statistics--item {
    display: initial !important;
}
```

### 显示选定的统计信息

与上述类似，可以使用类似的方法显示特定的统计信息。下面是一个隐藏除了笔记和附件统计信息之外的所有统计信息的代码片段。可以修改此代码片段以包含更多或不同的统计信息。

``` css
/* 隐藏所有统计信息。 */
.obsidian-vault-statistics--item {
    display: none !important;
}

/* 始终显示笔记和附件统计信息。 */
.obsidian-vault-statistics--item-notes,
.obsidian-vault-statistics--item-attachments {
    display: initial !important;
}
```

## 版本历史

所有重要的更改都将在此文件中记录。

该格式基于[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)，并且该项目遵循[语义化版本控制](https://semver.org/spec/v2.0.0.html)。

### [未发布]

- 添加
- 更改
- 废弃
- 移除
- 修复
  - 注释部分被明确处理，不计入统计数据（#22）

### [0.1.3] - 2022-10-25

- 修复
  - 修复已删除和重命名文件未正确更新文件统计信息的问题（#17）
  - 删除了错误的 `debugger` 语句（#14）

### [0.1.2] - 2022-08-05

- 新增
  - 新增设置面板
- 更改
  - 用户现在可以选择显示所有或部分指标，而不是默认的点击循环行为（#6）

### [0.1.1] - 2022-08-05

- 修复
  - 修复处理带有警告的文件时出现的问题 (#12)

### [0.1.0] - 2021-12-30

- 新增
  - 新增了单词计数指标 (#8)

### [0.0.8] - 2021-12-18

- 添加
  - 初始支持同时显示多个统计数据。 (#6)

### [0.0.6] - 2021-12-14

- 修复
  - 修复：报告的值只包含2个有效数字（#7）

### [0.0.5] - 2021-12-12

- 改变
  - 显示的统计数据采用分组格式，以增加可读性。
  - 添加了 Vault Size 统计数据，用于计算所有被 Obsidian 理解的 vault 中的文件的总大小。显示值会根据适当的单位进行缩放。 (#5)

### [0.0.4] - 2021-02-25

- 修复
  - 统计数据将在插件加载时自动计算。



