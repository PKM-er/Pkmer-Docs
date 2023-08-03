---
uid: 20230803213219
title: Obsidian 插件：【Readme】Show Diff
tags: ['obsidian插件', 'readme']
description: 在Obsidian文件中呈现Git差异
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Show Diff

> [!Note] 插件名片
> - 插件名称：Show Diff
> - 插件作者：Ivan Lednev
> - 插件说明：在Obsidian文件中呈现Git差异
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ivan-lednev/obsidian-automatic-changelog)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?show-diff)

## 概述

在Obsidian文件中呈现Git差异

![Show Diff](https://cdn.pkmer.cn/covers/show-diff.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivan-lednev/obsidian-automatic-changelog/master/README.md)
> 

---

## Readme(翻译）

下面是 [[show-diff]] 插件的自述翻译



🐞 [创建问题、功能请求、分享你的想法](https://github.com/ivan-lednev/obsidian-automatic-changelog/issues)

<!-- TOC -->
  * [目的](#purpose)
  * [用法](#usage)
    * [`dates`](#dates)
    * [`commits`](#commits)
    * [`path`](#path)
    * [`exclude`](#exclude)
    * [命令：生成今天的差异代码块](#command--generate-diff-code-block-for-today)
  * [贡献](#contributing)
  * [致谢](#acknowledgements)
<!-- TOC -->
## 目的

该插件允许您在笔记中呈现类似于以下的Git diff输出：
![](demo.png)

我个人将其与obsidian-git组合使用，以便在给定的一天中对我所做的工作进行修订，就像自动生成的更改日志一样，但您可以将其指向文件系统中的任何存储库。

## 用法

要使插件在您的vault上工作，它应该是一个git仓库。您可以使用[obsidian-git](https://github.com/denolehov/obsidian-git)为您的vault添加自动git备份。

该插件使用`show-diff`语言标签来渲染Markdown代码块。一个空的代码块将显示今天和昨天之间的差异：

<pre>
```show-diff
```
</pre>

### `dates`

使用 `dates` 可以指定一个日期范围来显示更改：
<pre>
```show-diff
dates:
  from: 2021-01-01
  to: 2021-01-02
```
</pre>

### `commits`

使用 `commits` 可以指定一个提交范围来显示更改：
<pre>
```show-diff
commits:
  from: HEAD^
  to: HEAD
```
</pre>

### `路径`

默认情况下，该插件会指向您所在的保险库，但您可以将插件指向文件系统中的任何存储库：
<pre>
```show-diff
路径：/path/to/my-pet-project
```
</pre>

### `exclude`

默认情况下，`.obsidian`（Obsidian的设置和缓存）被排除在外。您可以使用单个路径覆盖此设置：
<pre>
```show-diff
exclude: trash
```
</pre>

或者使用路径列表覆盖：
<pre>
```show-diff
exclude:
  - trash
  - archive
  - .obsidian
```
</pre>

### 命令：生成今天的差异代码块

该插件提供了一个命令，可以快速在笔记中插入一个类似于以下的代码块：
<pre>
```show-diff
dates:
  from: 2023-04-23
  to: 2023-04-24
```
</pre>

## 贡献

如果你发现了一个 bug 或者有一些改进插件的想法，欢迎创建一个 issue：https://github.com/ivan-lednev/obsidian-automatic-changelog/issues。

我们也欢迎 Pull-requests！如果你想贡献但不知道从何开始，你可以创建一个 issue 或者给我写封邮件：bishop1860@gmail.com。

你也可以通过给我买杯咖啡来支持我：



致谢

我参考了以下插件：

- [denolehov/obsidian-git: 使用git备份Obsidian.md vault](https://github.com/denolehov/obsidian-git)
- [kometenstaub/obsidian-version-history-diff: 查看Obsidian Sync、文件恢复和Git版本历史的差异视图](https://github.com/kometenstaub/obsidian-version-history-diff)



