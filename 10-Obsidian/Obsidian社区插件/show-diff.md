---
uid: 20231028225637
title: Obsidian 插件：Show Diff 展示文件同步历史对比
tags: [obsidian插件]
description: 在Obsidian文件中呈现Git差异
author: OS
type: other
draft: false
editable: false
modified: 20231028225720
---

# Obsidian 插件：Show Diff 展示文件同步历史对比

## 概述

将其与 obsidian-git 组合使用，以便在给定的一天中对所做的工作进行修订，就像自动生成的更改日志一样，但您可以将其指向文件系统中的任何存储库。

即有了这个插件，你可以精准控制你编辑的变动历史。

> [!Note] 插件名片
> - 插件名称：Show Diff
> - 插件作者：Ivan Lednev
> - 插件说明：在 Obsidian 文件中呈现 Git 差异
> - 插件分类：['obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/ivan-lednev/obsidian-automatic-changelog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?show-diff)

## 效果&特性

![Show Diff](https://cdn.pkmer.cn/covers/show-diff.png!pkmer)

## 使用

要使插件在您的 vault 上工作，它应该是一个 git 仓库。您可以使用 [[obsidian-git_readme]] 为您的 vault 添加自动 git 备份。

该插件使用 `show-diff` 语言标签来渲染 Markdown 代码块。一个空的代码块将显示今天和昨天之间的差异：

````
```show-diff
```
````

### dates

使用 `dates` 可以指定一个日期范围来显示更改：

````
```show-diff
dates:
  from: 2021-01-01
  to: 2021-01-02
```
````

### commits

使用 `commits` 可以指定一个提交范围来显示更改：

````
```show-diff
commits:
  from: HEAD^
  to: HEAD
```
````

### 路径

默认情况下，该插件会指向您所在的保险库，但您可以将插件指向文件系统中的任何存储库：

````
```show-diff
路径：/path/to/my-pet-project
```
````

### exclude

默认情况下，`.obsidian`（Obsidian 的设置和缓存）被排除在外。您可以使用单个路径覆盖此设置：

````
```show-diff
exclude: trash
```
````

或者使用路径列表覆盖：

````
```show-diff
exclude:
  - trash
  - archive
  - .obsidian
```
````

### 命令：生成今天的差异代码块

该插件提供了一个命令，可以快速在笔记中插入一个类似于以下的代码块：

````
```show-diff
dates:
  from: 2023-04-23
  to: 2023-04-24
```
````