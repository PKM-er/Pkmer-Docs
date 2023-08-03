---
uid: 2023080322272780
title: Obsidian 插件：【Readme】Structured Plugin
tags: ['obsidian插件', 'readme']
description: 使用“.”结构化插件，在笔记中创建层次结构。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Structured Plugin

> [!Note] 插件名片
> - 插件名称：Structured Plugin
> - 插件作者：dobrovolsky
> - 插件说明：使用“.”结构化插件，在笔记中创建层次结构。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/dobrovolsky/obsidian-structure)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-structured-plugin)

## 概述

使用“.”结构化插件，在笔记中创建层次结构。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dobrovolsky/obsidian-structure/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-structured-plugin]] 插件的自述翻译


# Obsidian结构化插件

该插件允许您使用`.`在笔记中构建层次结构（类似于[dendron](https://wiki.dendron.so/)）。

示例：`aws`，`aws.ec2`，`aws.ec2.security-groups`

**注意**：该插件目前处于早期测试阶段。

## 特性

-   正确的笔记重命名
-   通过笔记导航
    -   获取父级笔记列表
    -   获取子级笔记列表
    -   打开父级笔记
-   创建笔记
    -   在根目录或上次活动文件的路径中创建

如何组织你的工作空间

你可以将所有的笔记存储在一个文件夹中，或者创建一些带有文件夹的文件系统层次结构。

但是流程是相同的。

**创建一个新的笔记**

运行`Structured Plugin: Create a note`命令。

笔记将被放置在与当前笔记相同的文件夹中。（如果没有打开的笔记，则创建在根目录中）

**浏览笔记**

1. 打开一个笔记
2. 你可以使用
   - `Structured Plugin: Open parent note` - 打开父级笔记。

     例如：打开了`aws.ec2.security-groups`，运行命令后将打开`aws.ec2`

   - `Structured Plugin: Get parent notes`

     例如：打开了`aws.ec2.security-groups`，运行命令后将显示包含`aws.ec2`和`aws`的列表

   - `Structured Plugin: Get children notes`

     例如：打开了`aws`，运行命令后将显示包含`aws.ec2.security-groups`的列表

**重命名笔记**

1. 打开某个笔记
2. 运行`Structured Plugin: Rename current note`

   笔记不会移动到任何新的目录中。

## 提示

为插件操作添加快捷键绑定。

要查找所有可用命令，请按下 `ctrl+p` / `cmd+p` 并输入 `structured`

## 待办事项

-   [x] 创建新的笔记命令
-   [ ] 为新文件添加默认文件夹
-   [ ] 在尝试重命名或创建父笔记不存在的笔记时，向用户发出警告
    -   [ ] 在设置中配置此选项
-   [ ] 在父笔记附近创建子笔记，而不是当前打开的笔记。



