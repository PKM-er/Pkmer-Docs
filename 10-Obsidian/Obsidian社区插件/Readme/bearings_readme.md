---
uid: 2024042221321421
title: Obsidian 插件：【Readme】Bearings
tags: ['obsidian插件', 'readme']
description: Flow through dynamically-scoped collapsible tree views your vault's semantic and logical architectures.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Bearings

> [!Note] 插件名片
> - 插件名称：Bearings
> - 插件作者：Jeet Sukumaran
> - 插件说明：Flow through dynamically-scoped collapsible tree views your vault's semantic and logical architectures.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jeetsukumaran/obsidian-bearings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bearings)

## 概述

Flow through dynamically-scoped collapsible tree views your vault's semantic and logical architectures.

![Bearings](https://cdn.pkmer.cn/covers/bearings.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jeetsukumaran/obsidian-bearings/main/README.md)

---

## Readme(翻译）

下面是 [[bearings]] 插件的自述翻译

【机翻】

# 轴承

## 简介

通过链接遍历您的笔记图。

元数据由 frontmatter 属性跟踪。

Bearings 允许您通过结合这两种机制构建的笔记图的语义架构的逻辑走廊、高速公路和小路流动。

Bearings 提供了您知识库的逻辑走廊、高速公路和小路的多路动态作用域树视图，其结构由多个层次化或非层次化的语义关系定义，其中关系的逻辑结构由列在 frontmatter 元数据属性下的链接描述，语义来自与这些属性名称相关联的概念。

最初受到将我的笔记按照 Python 软件包索引的 [分类系统](https://pypi.org/classifiers/) 进行分类的启发，即具有多个并发层次结构，例如：

```
Topic :: Scientific/Engineering :: Artificial Life
Topic :: Scientific/Engineering :: Bio-Informatics
Intended Audience :: Science/Research
Development Status :: 4 - Beta
```

该框架现在支持多个双向层次结构（使用上位关系，例如 "`entry-parents`" 向上链接，或使用从属关系，例如 "`entry-children`" 向下链接），以及协调（非层次化或“根茎状”）关系（例如 "`entry-references`"，"`entry-associated`"）。

以下是一个假设性示例，展示了可能的情况：一个支持两个“父”项目的笔记，本身有子笔记，并且还具有各种类似 PyPI 的分类器，指示笔记的开发状态和主题等。

```
entry-parents:
  - "[[path/to/project1/project01-index]]"
  - "[[path/to/project2/project02-index]]"
entry-children:
  - "[[path/to/project1/child-note-01]]"
  - "[[path/to/project1/child-note-02]]"
entry-classifiers:
  - "[[00-classifiers/development/tasking/01-active]]"
  - "[[00-classifiers/development/status/04-beta]]"
  - "[[00-classifiers/development/phase/04-production-draft]]"
  - "[[00-classifiers/feature/topic/bio-informatics]]"
  - "[[00-classifiers/feature/topic/artificial-life]]"
  - "[[00-classifiers/feature/subject/mathematics/combinatorics/graph-theory]]"
  - "[[00-classifiers/feature/subject/mathematics/probability-theory-and-stochastic-processes/markov-processes]]"
  - "[[00-classifiers/feature/subject/biology/G16.075_biological-evolution]]"
entry-associated:
  - "[[path/to/related/project3]]"
  - "[[path/to/similar/note]]"
entry-references:
  - "[[sources/a/@avocado2024]]"
  - "[[sources/b/@blueberry2021]]"
  - "[[sources/s/@cilantro2019]]"
```

以下显示了我自己保险库中的一个“工作”笔记（比上面的虚构示例更加保守索引）。

![image](https://cdn.pkmer.cn/covers/bearings_1_0.png!pkmer)

> 图标和颜色目前是固定的。
> 未来计划包括自定义。

## 安装

### 先决条件

[Dataview](https://blacksmithgu.github.io/obsidian-dataview/) 必须已安装，可以从 [Obsidian Community Plugin Store](https://obsidian.md/plugins?id=dataview) 网站或在 Obsidian 应用程序内部安装。

### 通过社区插件商店安装

此插件可通过 [Obsidian社区插件商店](https://obsidian.md/plugins?id=bearings) 安装，通过上述链接或从应用程序中安装。

### 通过 BRAT 安装

要测试此插件的 Beta 版本，请按照以下步骤操作：

- 通过 Community Plugin Search 安装 BRAT 插件
- [阅读文档](https://tfthacker.com/BRAT)
- 添加 `https://github.com/jeetsukumaran/obsidian-bearings`
- 将 `main.js`、`manifest.json` 从 [https://github.com/jeetsukumaran/obsidian-bearings/releases](https://github.com/jeetsukumaran/obsidian-bearings) 复制到您的 vault `${VAULT}/.obsidian/plugins/obsidian-bearings/` 中。

## 用法

关系可以是上位的（例如，上位/下位，父母/子女，分类器/被分类）或平级的（例如，协调，相关，相邻，另请参见）。

通过在给定笔记的 frontmatter 属性中指定到另一个笔记的链接来定义关系。

```
entry-parents:
  - "[[parent1]]"
entry-classifiers:
  - "[[classifier/note1]]"
  - "[[classifier/note2]]"
```

语义通过定义的关系术语（例如，“entry-parents”或“entry-children”）应用，支持多个关系或层次结构（例如，“entry-classifiers”/“entry-classifieds”）。

视图可以以综合树状视图的形式呈现多个类别的关系（所有上位关系）。

图标提供关系类型和方向的信息。

节点可以独立展开或折叠。

将鼠标悬停在链接上会打开悬停编辑器（如果已安装）。

## 关系

### 默认关系

| 名称                        | 类别               | 焦点注释属性    | 焦点注释角色   | 关联注释角色  |
|-----------------------------|------------------------|------------------------|-------------------|-------------------|
| 父级                      | 上位              | `entry-parents`        | " 子级 "           | " 父级 "          |
| 子级                       | (隐含的下位) | `entry-children`       | " 父级 "          | " 子级 "           |
|                             |                        |                        |                   |                   |
| 分类器                  | 上位          | `entry-classifiers`    | " 分类 "  | " 分类器 "      |
| 分类              | (隐含的下位) | `entry-classifieds`    | " 分类器 "      | " 分类 "  |
|                             |                        |                        |                   |                   |
| 持有                     | 上位          | `entry-collections`    | " 持有 "         | " 收藏 "      |
| 收藏                  | (隐含的下位) | `entry-holdings`       | " 收藏 "      | " 持有 "         |
|                             |                        |                        |                   |                   |
| 来源                      | 上位          | `source-authors`       | " 来源 "          | " 作者 "          |
| 作者                      | (隐含的下位) | `source-sources`       | " 作者 "          | " 来源 "          |
|                             |                        |                        |                   |                   |
| 合作者                | 上位          | `entry-collaborators`  | " 制作 "      | " 合作者 "    |
| 制作                  | (隐含的下位) | `entry-collaborations` | " 合作者 "    | " 制作 "      |
|                             |                        |                        |                   |                   |
| 参考 (文献) | 协调             | `entry-references`     |                   | " 参考 "       |
| 关联                 | 协调             | `entry-associations`   | " 相关 "      | " 相关 "      |
| 转介                    | 协调             | `entry-referral`       | " 交叉参考 " | " 交叉参考 " |

### 自定义关系

您可以在设置中添加、删除、覆盖默认关系。

![image](https://cdn.pkmer.cn/covers/bearings_1_1.png!pkmer)

> **重要提示**
>
> 如果您定义自己的方案，请确保您的关系在类别字段中至少有一个“上位”或“坐标”关键字，以便被下面列出的预定义“视图”之一捕捉到。
>
> 未来计划包括自定义视图，其中将包括对自定义类别过滤器的支持，但目前关系需要与这两个类别之一关联。

## 视图

Views are dynamically-scoped collapsible hierarchical lists or "trees" of subgraphs rooted at the current note, considering the union of connections under a particular set of relationshions.

For example, the main "Positions" view shows all logically hierarchical relationships (superordinate-subordinate, parent-child, classifier-classifications) regardless of semantics (e.g., a "child" note will look the same as a "classified" note).

Future plans include custom views and dynamically custom views, but, for now, view are predefined.

### " 位置 "

当前笔记的所有上位关系，上位关系被跟踪为一系列上位关系到它们的根，所有下位关系被展开为完整的子树（跟踪到它们的叶子或直到指定的深度）。

![image](https://cdn.pkmer.cn/covers/bearings_1_2.png!pkmer)

### " 平行 "

所有*直接*上级的完整子树扩展（例如，当前笔记的所有父级的所有子级）扩展为完整子树（跟踪到它们的叶子或直到指定的深度）。

" 推荐 "

All coordinate relationships.

" 反向链接 "

所有指向此笔记的内部链接/反向链接。

## 代码块

导航视图可以使用代码块标识符 "`bearings-view`" 嵌入到笔记中

~~~
```bearings-view
```
~~~

![image](https://cdn.pkmer.cn/covers/bearings_1_3.png!pkmer)
