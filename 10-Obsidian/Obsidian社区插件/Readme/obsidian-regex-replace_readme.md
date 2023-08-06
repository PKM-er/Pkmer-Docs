---
uid: 2023080322255048
title: Obsidian 插件：【Readme】Regex Find and Replace
tags: ['obsidian插件', 'readme']
description: 提供一个可选择支持正则表达式和范围（全文或文本选择）的查找/替换对话框。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Regex Find and Replace

> [!Note] 插件名片
> - 插件名称：Regex Find and Replace
> - 插件作者：Martin Eder
> - 插件说明：提供一个可选择支持正则表达式和范围（全文或文本选择）的查找/替换对话框。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Gru80/obsidian-regex-replace)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-regex-replace)

## 概述

提供一个可选择支持正则表达式和范围（全文或文本选择）的查找/替换对话框。

![Regex Find and Replace](https://cdn.pkmer.cn/covers/obsidian-regex-replace.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Gru80/obsidian-regex-replace/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-regex-replace]] 插件的自述翻译

![发布](https://img.shields.io/github/v/release/Gru80/obsidian-regex-replace)

![下载量](https://img.shields.io/github/downloads/Gru80/obsidian-regex-replace/total.svg)

# Obsidian 插件 - 正则表达式查找/替换

提供一个对话框，用于在当前打开的笔记中查找和替换文本。

除了 Obsidian 自带的查找/替换功能外，该插件还提供以下选项：

- 使用正则表达式或纯文本
- 在当前选定的文本中替换找到的出现次数或在整个文档中替换

支持 Obsidian 的桌面和移动版本。

![Regex FindReplace对话框](res/dialog.png)

如何使用

- 从命令面板中运行“Regex Find/Replace: Find and Replace using regular expressions”命令，或者
- 为此命令分配一个快捷键，并使用它打开对话框
- 插件将记住最近的搜索/替换术语以及设置

如何安装

### 从 Obsidian 内部

可以通过 Obsidian 设置对话框中的“社区插件”选项卡安装此插件：

- 禁用安全模式（以启用社区插件的安装）
- 浏览社区插件，搜索“正则表达式查找/替换”
- 安装插件
- 安装后启用插件

### 手动安装

插件也可以从存储库手动安装：

- 在您的 vault 插件目录中创建一个新目录，例如
   `.obsidian/plugins/obsidian-regex-replace`

- 前往 <https://github.com/Gru80/obsidian-regex-replace/releases>
- 从最新的发布中下载以下文件
   - main.js
   - manifest.json
   - styles.css

  到您新创建的插件目录中

- 启动 Obsidian 并打开设置对话框
- 在“Community Plugins”选项卡中禁用安全模式（这将启用社区插件的启用）
- 启用新插件

## 版本历史

### 1.0.0

初始版本发布

### 1.1.0

- 现在可以在插件的设置面板中启用大小写不敏感的搜索（正则表达式标志/i）
- 如果在笔记中没有选择文本，则禁用选择中查找的切换开关
- 性能改进和错误修复

### 1.2.0

- 选项来解释替换字段中的 `\n`，以相应地插入换行符
- 选项来预填选中的单词或短语到查找字段
- 对话框中显示使用的正则表达式修饰符标志



