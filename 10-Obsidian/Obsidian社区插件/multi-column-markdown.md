---
uid: 20230329145808
title: Obsidian 插件：Multi-Columan Markdown Obsidian 也能分栏，超级方便无需 CSS 代码
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidian 插件：Multi-Columan Markdown Obsidian 也能分栏，超级方便无需 CSS 代码

## 概述

在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。

> [!Note] 插件名片
> - 插件名称：Multi-Column Markdown
> - 插件作者：ckRobinson
> - 插件说明：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。
> - 插件项目地址：[点我跳转](https://github.com/ckRobinson/multi-column-markdown)

## 效果&特性

![Pasted image 20230221174425](https://cdn.pkmer.cn/images/28aa9456049bdb0e79b47755d15af857_MD5.png)

- 通过命令面板可以快速生成语法模板
- 语法模板里面进行配置，生成对应的填写空间
- 填写空间里面可以放入任意 Markdown 语法内容

## 安装

1. 进入 Obsidian 插件中心
2. 搜索 Multi-Column Markdown
3. 安装
4. 开启插件

## 使用

通过 命令面板，或者自定义快捷键方式，快速输入多栏语法

![Pasted image 20230221213034](https://cdn.pkmer.cn/images/5ed3d6714f9742d671fb2b437d251765_MD5.png)

- 选择后会自动插入对应的模板
- 代码域内 `star-multi-column` ,表示的是 ID，用于引用
- 代码域内 Number of Columns，代表你需要分栏的数量
- 代码域内 可通过 border 参数:
    - on：开启多栏的边框
    - off：关闭，不显示多栏的边框。
- 代码域内 可通过 Largest Column 参数，来控制分栏大小。
    - 双列或三列布局
        - Standard：平分
        - Left：最左侧的大一些
        - First：左数第一列大一些
        - Right：最右侧的大一些
        - Second：左数第二列大一些
    - 仅使用三列布局
        - Center：中间列大一些
        - Third：左数第三列大一些
        - Middle：中间列大一些
- 代码域内 Shadow 参数
    - off ，关闭阴影
    - on ，显示阴影
- 代码域 Column size 参数：控制单栏的大小，仅能用于单列
    - Small
    - Medium
    - Large
    - Full
- 代码域内 Column Position or Column Location: 参数：仅能用于单列，控制栏的对齐位置
    - Left
    - Right
    - Center
    - Middle
- 代码域内 Alignment 参数：控制栏内文本对齐方式 - Left (Default) - Center - Right
    ![Pasted image 20230221214142](https://cdn.pkmer.cn/images/0fd834d8560094b69271079e4c5daba6_MD5.png)

- 每一栏的内容：就按照平时输入笔记的方法输入内容就是了
- 每一栏后面都要跟一条结束语句<kbd>=== end-column ===</kbd>
- 最后一栏内容结束时没有此<kbd>=== end-column ===</kbd>语句，而是跟此<kbd>=== multi-column-end</kbd>语句

> [!提醒]

> 这个方法，会引入一个插件，如果你担心插件的稳定性或是希望更加清爽，那么可以参考别的方法 [[Obsidian 能像其他笔记样分栏嘛]]
