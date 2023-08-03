---
uid: 20230803213246
title: Obsidian 插件：【Readme】Spotlight
tags: ['搜索/排序', 'obsidian插件', 'readme']
description: 在指定的项目或具有某种标签组合的情况下，提供随机笔记或从金库中提取笔记块的块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Spotlight

> [!Note] 插件名片
> - 插件名称：Spotlight
> - 插件作者：darakah
> - 插件说明：在指定的项目或具有某种标签组合的情况下，提供随机笔记或从金库中提取笔记块的块。
> - 插件分类：['搜索/排序', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Darakah/obsidian-spotlight)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-spotlight)

## 概述

在指定的项目或具有某种标签组合的情况下，提供随机笔记或从金库中提取笔记块的块。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-spotlight]] 插件的自述翻译



# Obsidian Spotlight
![GitHub发布](https://img.shields.io/github/v/release/Darakah/obsidian-spotlight)
![GitHub所有发布](https://img.shields.io/github/downloads/Darakah/obsidian-spotlight/total)

显示来自存储库/指定项目或具有特定标签组合的笔记的随机块。

## 示例

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Example_1.png" />

## 特点
- 渲染块以显示一个注释或一块注释
- 根据所有搜索参数随机选择注释，并在每次重新打开注释时更新
- 使用标签的组合进行过滤，例如 `tag1;tag2;tag3`
- 按路径位置/注释名称进行过滤
- 指定div的宽度/高度和对齐方式

## 用法

- 要显示一个笔记聚焦，使用渲染块 id `spotlight-note`
- 要显示一个块聚焦，使用渲染块 id `spotlight-block`
- 每一行代表一个特定的参数。参数的标识符采用以下语法：`argumentName`=`argumentValue`，例如，要设置 div 的宽度：`divWidth=50`，将容器的宽度设置为笔记宽度的 50%。
- 每个参数必须单独放在一行上。
- 参数可以以任何顺序出现。
- 未指定的参数将设置为默认值。
- 参数包括：`tags`、`match`、`divWidth`、`divHeight` 和 `divAlign`。
- 参数的含义如下：
  - `tags`：基于标签选择要显示的笔记池的标签列表。标签必须用 `;` 分隔，不包含 `#`。例如，要获取带有标签 `#test` 和 `#now` 的笔记，第一行必须是 `test;now` 或 `now;test`。
  - `Path of notes to get info from`：要从中获取信息的笔记路径。例如，`Project Main/Project 1` 表示 `Project Main/Project 1/` 中的所有笔记。
  - `Div container width in %`：以百分比表示的 div 容器宽度。
  - `Div Height in Pixels`：以像素表示的 div 高度。
  - `Div alignment`：div 的对齐方式，例如 `left` 或 `right`。

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Example_3.png"/>

## 设置：

<img src="https://raw.githubusercontent.com/Darakah/obsidian-spotlight/main/images/Settings.png"/>

## 发布说明

### v0.1.1
- 代码改进

### v0.1.0
- 初始版本发布

## 支持

[![Github赞助](https://raw.githubusercontent.com/Darakah/Darakah/e0fe245eaef23cb4a5f19fe9a09a9df0c0cdc8e1/icons/github_sponsor_btn.svg)](https://github.com/sponsors/Darakah) [<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/darakah)



