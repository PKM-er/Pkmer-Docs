---
uid: 2023120719465767
title: Obsidian 插件：【Readme】Yaml Manager
tags: ['obsidian插件', 'readme']
description: 直接管理编辑 Yaml 的内容
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Yaml Manager

> [!Note] 插件名片
> - 插件名称：Yaml Manager
> - 插件作者：Lijyze
> - 插件说明：直接管理编辑 Yaml 的内容
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lijyze/obsidian-state-switcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-state-switcher)

## 概述

直接管理编辑 Yaml 的内容

![Yaml Manager](https://cdn.pkmer.cn/covers/obsidian-state-switcher_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lijyze/obsidian-state-switcher/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-state-switcher]] 插件的自述翻译

# Obsidian Yaml 管理器

让您远离直接操作 yaml 前置内容，以免出错。

## 演示

![演示](https://cdn.pkmer.cn/covers/obsidian-state-switcher_1_0.gif!pkmer)

## 使用方法

- 更新单个字段
  - 在命令面板中选择 `Yaml Manager: key-value update` 来更新 `key-value` 字段。
  - 在命令面板中选择 `Yaml Manager: key-array insert` 或 `Yaml Manager: key-array remove` 来向 `key-array` 字段插入项目或从 `key-array` 字段中删除项目。
  - 按顺序选择字段名称和字段值。
- 批量更新
  - 在命令面板中选择 `Yaml Manager: bulk update`，您将了解其余操作。

**这些命令仅在编辑模式下可用！**

您可以为这些命令分配热键以方便使用；

## 注意

该插件仅切换放置在 yaml 前置元数据中的字段的值，如果没有找到前置元数据，它将创建一个然后将刚刚选择的键值对插入其中。

## 正在进行的工作

1. 使其支持更多的数据结构，例如键 - 对象（仍然不清楚并且不确定是否有必要）。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-state-switcher/` 中。

发布

### 1.3.0

可自定义 yaml 数组的形式（`- item` 或 `[item]`）！

### 1.2.0

现在您可以一次更新多个字段！

### 1.1.0

如果您曾经设置过热键，您可能需要重置热键来调用此插件。

1. 支持键数组结构
2. 在子菜单中添加返回选项

捐赠
