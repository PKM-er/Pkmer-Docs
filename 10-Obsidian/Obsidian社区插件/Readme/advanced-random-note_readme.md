---
uid: 2023080322134715
title: Obsidian 插件：【Readme】Advanced Random Note
tags: ['obsidian插件', 'readme']
description: 从自定义查询创建命令以打开随机笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Advanced Random Note

> [!Note] 插件名片
> - 插件名称：Advanced Random Note
> - 插件作者：Karsten Finderup Pedersen
> - 插件说明：从自定义查询创建命令以打开随机笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/karstenpedersen/obsidian-advanced-random-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-random-note)

## 概述

从自定义查询创建命令以打开随机笔记。

![Advanced Random Note](https://cdn.pkmer.cn/covers/advanced-random-note.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/karstenpedersen/obsidian-advanced-random-note/master/README.md)
>

---

## Readme(翻译）

下面是 [[advanced-random-note]] 插件的自述翻译

高级随机笔记 Obsidian 插件

该插件使您能够创建自定义查询以打开随机笔记。

## 特点

- 在设置选项卡上创建自定义查询
    - 使用文件名、路径和标签查找随机笔记
    - 将它们作为命令启用
- 打开随机笔记模态框：打开模态框以选择查询
- 打开随机笔记：从存储库中打开笔记
- 禁用文件夹包含在搜索中

### 设置选项卡

![设置图像](https://raw.githubusercontent.com/karstenpedersen/obsidian-advanced-random-note/master/settings-screenshot.png)

安装

### Obsidian

1. 打开设置
2. 进入 " 社区插件 "
3. 通过点击 " 启用社区插件 " 来启用社区插件
4. 点击 " 浏览 " 来浏览可用的社区插件
5. 搜索 " 高级随机笔记 "
6. 点击安装并启用插件
7. 关闭社区插件窗口

开始使用

### 查询

该插件使用类似于 [Obsidian Search](https://help.obsidian.md/Plugins/Search) 插件的语法来查询 Markdown 笔记，但更为原始。

#### 标签

您可以通过标签来查询文件。通过指定 `tag:` 关键字来实现。在此之后，您可以写入应包含和排除在文件中的多个标签。

- 如果文件中不应该有标签，则在它们前面加上 `!`，例如：`tag: idea !complete`。这将获取具有 `idea` 标签但没有 `complete` 标签的文件。
- 您还可以在标签前面加上 `#`，例如：`#idea` 和 `!#complete`。

#### 路径

您可以通过路径查询文件。为此，请指定 `path:` 关键字，并写下路径应包含的内容以包含在结果中。

#### 文件名

您可以通过文件名来查询文件。要做到这一点，指定 `file:` 关键字，并写下文件名应包含的内容以包含在结果中。

### 禁用文件夹

您可以禁用文件夹以将其从搜索范围中移除。如果您有一个模板文件夹，不希望从中打开文件，这将非常有用。

### 启用查询作为命令

在插件设置选项卡上，单击查询旁边的切换按钮可以将查询启用为命令。这在与 [Commander](https://github.com/phibr0/obsidian-commander) 插件结合使用时非常有用。

## 例子

### 在您的保险库中找到创意

找到一个随机的未完成的创意。

- 查询：`tag: idea !complete`。

### 查找无标题的文件

查找一个无标题的笔记。

- 查询：`file: Untitled`

在根目录中查找一个短暂的笔记。

您可以组合关键词。

- 查询：`path: / tag: fleeting`

版本历史

### 版本 0.0.6

- 添加“打开随机笔记”命令
- 添加“打开随机笔记模态框”命令
- 添加插件设置选项卡
- 添加用户查询
- 添加将用户查询作为命令切换的功能

## 联系方式

- 在插件的 GitHub 页面上联系我们



