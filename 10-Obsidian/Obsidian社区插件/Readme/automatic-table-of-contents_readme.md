---
uid: 2023102611072402
title: Obsidian 插件：【Readme】Automatic Table Of Contents
tags: ['obsidian插件', 'readme']
description: 在笔记中创建一个目录，当笔记发生变化时，目录会自动更新。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Automatic Table Of Contents

> [!Note] 插件名片
> - 插件名称：Automatic Table Of Contents
> - 插件作者：Johan Satgé
> - 插件说明：在笔记中创建一个目录，当笔记发生变化时，目录会自动更新。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/johansatge/obsidian-automatic-table-of-contents)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?automatic-table-of-contents)

## 概述

在笔记中创建一个目录，当笔记发生变化时，目录会自动更新。

![Automatic Table Of Contents](https://cdn.pkmer.cn/covers/automatic-table-of-contents.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/johansatge/obsidian-automatic-table-of-contents/main/README.md)

---

## Readme(翻译）

下面是 [[automatic-table-of-contents]] 插件的自述翻译

# Obsidian 自动目录

> 一个 Obsidian 插件，用于在笔记中创建一个目录，当笔记发生变化时自动更新

---

![演示](images/demo.gif)

- [安装](#installation)
- [使用](#usage)

## 安装

将插件克隆到您的 `.obsidian/plugins` 目录中：

```shell
cd /path/to/your/vault/.obsidian/plugins
git clone git@github.com:johansatge/obsidian-automatic-table-of-contents.git
```

或者，下载 [最新版本](https://github.com/johansatge/obsidian-automatic-table-of-contents/releases)，并将其解压缩到您的 `.obsidian/plugins` 目录中。

## 用法

使用 `table-of-contents` 语法插入一个代码块。

````
```table-of-contents
option1: value1
option2: value2
```
````

或者，命令面板中有两个可用的命令：

- 插入目录
- 插入目录（已记录）

以下选项可用：

| 选项 | 默认值 | 描述 |
| --- | --- | --- |
| `style` | `nestedList` | 目录样式（可以是 `nestedList` 或 `inlineFirstLevel`） |
| `maxLevel` | `0` | 包括指定级别的标题（`0` 表示无限制） |
| `includeLinks` | `true` | 使标题可点击 |
| `debugInConsole` | `false` | 在 Obsidian 控制台中打印调试信息 |

## 更新日志

该项目使用 [semver](http://semver.org/)。

| 版本 | 日期 | 注释 |
| --- | --- | --- |
| `1.0.1` | 2023-09-09 | 修复对全局 `App` 实例的引用 |
| `1.0.0` | 2023-08-27 | 初始版本 |

## 许可证

该项目在 [MIT许可证](license.md) 下发布。
