---
uid: 2023080322194044
title: Obsidian 插件：Hidden Folder
tags: ['obsidian插件', 'readme']
description: 隐藏文件夹
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hidden Folder

> [!Note] 插件名片
> - 插件名称：Hidden Folder
> - 插件作者：ptrsvltns
> - 插件说明：隐藏文件夹
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ptrsvltns/hidden-folder-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hidden-folder-obsidian)

## 概述

隐藏文件夹

![Hidden Folder](https://cdn.pkmer.cn/covers/hidden-folder-obsidian.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ptrsvltns/hidden-folder-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[hidden-folder-obsidian]] 插件的自述翻译

Obsidian 中的隐藏文件夹：

- 正则表达式
- 用于启用或禁用的缎带图标
- 翻译

## 演示

![演示](doc/demo.gif)

# 示例

> `^folder1`

```txt
- folder1 <- 匹配
  - folder1
  - folder2
- folder2
  - folder1
  - folder2
```

> `abc`

```txt
- folder1
  - folder1
    - subabcfolder1 <- 匹配
  - folderabc2 <- 匹配
- folder2
  - foldabcer1 <- 匹配
  - folder2abc <- 匹配
```

> `\/folder$`

```txt
- folder1
  - folder1
  - folder2
- folder2
  - folder1 <- 匹配
  - folder2
```

> `\/?folder$`

```txt
- folder1 <- 匹配
  - folder1
  - folder2
- folder2
  - folder1 <- 匹配
  - folder2
```

> `folder1\/folder`

```txt
- folder1
  - folder1 <- 匹配
  - folder2
- folder2
  - folder1
  - folder2
```