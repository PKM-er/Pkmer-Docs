---
uid: 2024042221335274
title: Obsidian 插件：【Readme】Hierarchical Outgoing Links
tags: ['obsidian插件', 'readme']
description: 在树形结构中显示外部链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Hierarchical Outgoing Links

> [!Note] 插件名片
> - 插件名称：Hierarchical Outgoing Links
> - 插件作者：Jason Motylinski
> - 插件说明：在树形结构中显示外部链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jasonmotylinski/hierarchical-outgoing-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hierarchical-outgoing-links)

## 概述

在树形结构中显示外部链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jasonmotylinski/hierarchical-outgoing-links/master/README.md)

---

## Readme(翻译）

下面是 [[hierarchical-outgoing-links]] 插件的自述翻译

【机翻】

# 层次化外部链接

## 概述

根据引用的文件夹结构，以层次结构的形式显示活动文档的外部链接。

![image](https://cdn.pkmer.cn/covers/hierarchical-outgoing-links_2_0.png!pkmer)

## 动机

在古老的文件夹与标签之争中，我倾向于更加重视将笔记物理结构化为高级别类别。标签层次结构显示提供了标签的概览以及它们之间的关系，我希望有类似的东西，利用文件夹结构将外部链接显示为树形结构。

这是核心插件与分层外链插件的比较示例。

这是开箱即用的核心外链插件显示链接的方式：

![image](https://cdn.pkmer.cn/covers/hierarchical-outgoing-links_2_1.png!pkmer)

这是这个插件显示链接的方式：

![image](https://cdn.pkmer.cn/covers/hierarchical-outgoing-links_2_2.png!pkmer)

## 特点

- 可折叠的树状结构使您可以轻松专注于最重要的内容
- 可点击的引用链接
- 未解决链接列表，指示您可能想要创建的任何悬空引用。

## 命令

以下命令可在 Obsidian 命令面板中使用：

| 命令 | 描述 |
|---------|-------------|
| 显示分层的外链 | 在关闭的情况下显示面板 |

## 开发

### 设置

```bash
npm install
```

### 运行

```bash
npm run dev
```