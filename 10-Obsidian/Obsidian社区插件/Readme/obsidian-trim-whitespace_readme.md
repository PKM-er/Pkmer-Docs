---
uid: 20230803213401
title: Obsidian 插件：【Readme】Trim Whitespace
tags: ['obsidian插件', 'readme']
description: 从你的 Obsidian 文档中删除不必要的空格
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Trim Whitespace

> [!Note] 插件名片
> - 插件名称：Trim Whitespace
> - 插件作者：Zack Lovatt
> - 插件说明：从你的 Obsidian 文档中删除不必要的空格
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/zlovatt/obsidian-trim-whitespace)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-trim-whitespace)

## 概述

从你的 Obsidian 文档中删除不必要的空格



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zlovatt/obsidian-trim-whitespace/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-trim-whitespace]] 插件的自述翻译



# 去除空白字符

[![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20下载量&query=$['obsidian-trim-whitespace'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=obsidian-trim-whitespace) ![GitHub stars](https://img.shields.io/github/stars/zlovatt/obsidian-trim-whitespace?style=flat)

Trim Whitespace 插件可以去除 Obsidian 文档中不必要的空白字符。这是代码编辑软件中常见的功能，主要用于减少烦人的文档混乱。

---

## 特点

该插件在三种不同类型的空白字符上操作，有三个不同的目标。

### 空白字符类型

1. **空格** - 空格字符 (` `, 样式化为 `·`)
2. **制表符** - 制表符 (`\t` 或 `	`, 样式化为 `→`)
3. **换行符** - 换行字符，可以是 `\r` 或 `\n` (样式化为 `¬`)

### 目标

#### 尾随修剪

修剪每行或文档末尾的空白字符。

|                      Before                       |                After                |
| ------------------------------------------------- | ----------------------------------- |
| <pre>Hello·World!····</pre>                       | <pre>Hello·World!</pre>             |
| <pre>Hello·World!→→→</pre>                        | <pre>Hello·World!</pre>             |
| <pre># Hello¬<br>¬<br>World!¬<br>¬<br>¬<br></pre> | <pre># Hello¬<br>¬<br>World!¬</pre> |

#### 首行缩进

删除每行或文档开头的空白字符。

  |                    Before                     |                After                |
  | --------------------------------------------- | ----------------------------------- |
  | <pre>····Hello·World!</pre>                   | <pre>Hello·World!</pre>             |
  | <pre>→→→Hello·World!</pre>                    | <pre>Hello·World!</pre>             |
  | <pre>¬<br>¬<br># Hello¬<br>¬<br>World!¬</pre> | <pre># Hello¬<br>¬<br>World!¬</pre> |

#### 多个

修剪连续的空白组（2个或更多连续的**内联**空格/制表符，或**连续的行**）

|                       Before                       |                After                |
| -------------------------------------------------- | ----------------------------------- |
| <pre>Hello···World!</pre>                          | <pre>Hello·World!</pre>             |
| <pre>Hello→→→World!</pre>                          | <pre>Hello→World!</pre>             |
| <pre># Hello¬<br>¬<br>¬<br>World!¬<br>¬<br>¬</pre> | <pre># Hello¬<br>¬<br>World!¬</pre> |

## 命令

* **修剪文档中的空白** 根据下面的设置，修剪活动文档中的所有空白
* **修剪选择区域中的空白** 根据下面的设置，修剪活动文档中所选区域的所有空白

修剪空白还会添加一个修剪文档空白的功能按钮。在单击按钮时按住**Shift**键，可以修剪所选区域中的空白。

## 设置

|          名称           |                                   描述                                   |
| ----------------------- | ------------------------------------------------------------------------------- |
| 手动保存时修剪     | 使用 CTRL / CMD + S **手动修剪文档**                                  |
| 自动修剪               | 根据下面的设置，**自动修剪文档**当被修改时。 |
| 自动修剪延迟         | 在自动修剪之前等待的时间，以**秒**为单位。                               |
| 保留代码块    | 是否保留代码块内的空白。                              |
| 修剪行尾空格    | 修剪每行**末尾的空格**。                                    |
| 修剪行尾制表符      | 修剪每行**末尾的制表符**。                                      |
| 修剪行尾空行     | 修剪文档**末尾的空行**。                            |
| 保留缩进列表 | 是否保留用于列表缩进的空白。                    |
| 修剪行首空格     | 修剪每行**开头的空格**。                                  |
| 修剪行首制表符       | 修剪每行**开头的制表符**。                                    |
| 修剪行首行      | 修剪文档**开头的行**。                                |
| 修剪多个空格    | 修剪**多个连续的空格**。                                  |
| 修剪多个制表符      | 修剪**多个连续的制表符**。                                    |
| 修剪多个空行     | 修剪**多个连续的空行**。                                    |

## 安装

要安装，请选择以下方式之一：

1. 从[Obsidian社区插件库](obsidian://show-plugin?id=obsidian-trim-whitespace)下载，或者
2. 使用[Releases](http://github.com/zlovatt/obsidian-trim-whitespace/releases)中的zip文件手动安装

### 已知的问题

- 如果原始位置在文档中的第一个非空格字符之前开始，整个文档的修剪不会正确地重置光标位置。

### 贡献

想要帮助开发或维护这个插件吗？请务必！非常欢迎PR和意见！

### 应该给予的赞誉

- 社区对[这个论坛帖子](https://forum.obsidian.md/t/trim-trailing-whitespace/17047)的兴趣
- 插件基础知识来自[@Benature](https://github.com/Benature)的[obsidian-text-format](https://github.com/Benature/obsidian-text-format)
- 得到了[Obsidian社区](https://obsidian.md/community)Discord服务器的大量支持



