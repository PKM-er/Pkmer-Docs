---
uid: 2023080322230857
title: Obsidian 插件：【Readme】Number Headings
tags: ['自动化', '目录/标题', '效率', 'obsidian插件', 'readme']
description: 自动编号或重新编号 Obsidian 文档中的标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Number Headings

> [!Note] 插件名片
> - 插件名称：Number Headings
> - 插件作者：Kevin Albrecht
> - 插件说明：自动编号或重新编号 Obsidian 文档中的标题。
> - 插件分类：['自动化', '目录/标题', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/onlyafly/number-headings-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?number-headings-obsidian)

## 概述

自动编号或重新编号 Obsidian 文档中的标题。

![Number Headings](https://cdn.pkmer.cn/covers/number-headings-obsidian.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/onlyafly/number-headings-obsidian/master/README.md)
> 

---

## Readme(翻译）

下面是 [[number-headings-obsidian]] 插件的自述翻译


# Obsidian的编号标题插件

使用大纲样式的编号为文档中的标题添加编号。例如，"1.1.2"。

## 安装方法

有两种方法可以获取插件：

1. 直接从 Obsidian 安装最新版本。进入设置 -> 社区插件 -> 浏览。
2. 将最新版本解压缩到 `<vault>/.obsidian/plugins/` 文件夹中。您可以在 <https://github.com/onlyafly/number-headings-obsidian/releases/latest> 找到最新版本。

安装完插件后，请确保 "Number Headings" 的开关已打开。

如何使用插件

要使用此插件：

1. 打开命令面板（在Mac上键入`CMD + P`，其他平台上键入相应的快捷键）。
2. 开始输入其中一个操作的名称。请参见下表：

| 操作                                               | 快捷键          |
| -------------------------------------------------- | --------------- |
| 对文档中的所有标题进行编号（并显示选项）           | 默认无快捷键    |
| 对文档中的所有标题进行编号                          | 默认无快捷键    |
| 从文档中的所有标题中删除编号                        | 默认无快捷键    |
| 将设置保存到正文前事项中                            | 默认无快捷键    |

您还可以将这些命令分配给快捷键以便于使用。

有关插件的详细设置说明，请参阅插件的设置页面。

## 版本历史

### 1.13.0（2023年1月6日）

* 增加了对右括号作为分隔符的支持。

### 1.12.0（2023年1月1日）

* 增加对罗马数字作为数字的支持。请参阅<https://github.com/onlyafly/number-headings-obsidian/issues/34>。

### 1.11.0（2023年1月1日）

* 添加了“start-at”设置，允许编号从1以外的数字开始。请参见<https://github.com/onlyafly/number-headings-obsidian/issues/33>。
* 修复了目录在没有其他标题的情况下导致Obsidian冻结的错误。请参见<https://github.com/onlyafly/number-headings-obsidian/issues/37>。

### 1.10.1（2022年12月31日）

* 修复了一个bug，当出现像" -"（破折号前的空格）这样的分隔符时，会导致标题更新时出现循环。请参见<https://github.com/onlyafly/number-headings-obsidian/issues/36>。

### 1.10.0（2022年6月29日）

* 添加了新的命令“对文档中的所有标题进行编号（并显示选项）”，在编号后显示选项对话框。将旧命令“对文档中的所有标题进行编号”更改为在不显示对话框的情况下进行编号。请参阅<https://github.com/onlyafly/number-headings-obsidian/issues/15>。

### 1.9.0（2022年6月19日）

* 修复了几个错误。请参阅<https://github.com/onlyafly/number-headings-obsidian/issues/29>，<https://github.com/onlyafly/number-headings-obsidian/issues/23>和<https://github.com/onlyafly/number-headings-obsidian/issues/13>。

### 1.8.1（2021年12月15日）

* 修复了某些情况下设置未传递到正文的错误。请参阅<https://github.com/onlyafly/number-headings-obsidian/issues/19>。

### 1.8.0（2021年10月26日）

* 添加自动目录渲染功能
* 添加一级设置，允许跳过多个标题级别
* 修复了跳过以数字开头的标题会被删除的错误

### 1.7.3（2021年8月24日）

* 清理了设置屏幕中前置内容的解释。

### 1.7.2（2021年8月19日）

* 改进了插入编号的方式，以便更好地保留撤消历史记录并提高速度。

### 1.7.1（2021年8月18日）

* 修复了跳过标题时可能会错误插入分隔符的错误。

### 1.7.0（2021年8月18日）

* 增加了对标题编号和标题文本之间自定义分隔符的支持。

### 1.6.1（2021年8月15日）

* 改进了标题的插入方式，以避免在撤销历史记录中出现过多无关的更改。

### 1.6.0（2021年8月14日）

* 简化了前置设置，使用单个键。

### 1.5.1（2021年8月14日）

* 修复了一些错误，当用户删除一个标题后，有时会在行首打印出“undefined”。

## 鸣谢

我在设计这个插件时部分受到了 Obsidian 插件 <https://github.com/hipstersmoothie/obsidian-plugin-toc> 的启发，其中一些代码逻辑也是从该插件继承而来的。谢谢！



