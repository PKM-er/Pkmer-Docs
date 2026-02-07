---
uid: 20250131213346
title: Bases
tags: []
description: 
author: chenghuang,ProudBenzene
type: other
draft: false
editable: false
modified: 20230829102931
---

Obsidian Bases 是 Obsidian 1.9.0 起推出、1.9.10 全面开放的**官方核心插件**，本质是把笔记以结构化数据库方式管理的工具，存储为 `.base` 后缀的 YAML 文件，可可视化整理笔记元数据、多视图展示并支持公式计算Obsidian。

### 核心定位与原理

- 核心目标：将散落的 Markdown 笔记（通过 YAML 前置元数据）转为结构化数据，用表格、卡片等视图统一管理，实现 “所见即所得” 的数据化整理，无需复杂代码，比第三方 Dataview 更原生高效
- 存储机制：每个 Base 是独立 `.base` 文件，内容为 YAML 格式，定义**过滤器（filters）**、**公式（formulas）**、**视图（views）**；修改 Base 会实时同步到对应笔记的元数据，双向联动Obsidian
- 依赖基础：完全基于本地库（Vault），不依赖云端；核心是读取 / 编辑笔记的 Properties（元数据），所以笔记需正确配置 YAML 前置属性

### 核心功能

1. 多视图展示：支持表格、卡片等视图，可自定义列、排序、分页，适配不同浏览需求Obsidian
2. 精准筛选：用 filters 规则（如按标签、文件夹、链接关系）快速定位目标笔记，规则支持与 / 或 / 非组合Obsidian
3. 公式计算：formulas 支持字段运算、条件判断等，生成派生字段（如日期差、状态标记），字段类型含文本、数字、日期、单选 / 多选等Obsidian
4. 双向编辑：在 Base 视图修改笔记属性，会直接写入笔记的 YAML 前置元数据；反之笔记元数据更新也会同步到 Base，无需额外同步操作


[[函数]]
[[数据库简介]]
[[数据库语法]]
[[创建数据库]]
[[视图]]
[[卡片视图]]
[[列表视图]]
[[表格视图]]
[[公式（Formulas）]]