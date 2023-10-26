---
uid: 2023102611084313
title: Obsidian 插件：【Readme】Todo.txt Codeblocks
tags: ['obsidian插件', 'readme']
description: 根据Todo.txt规范，在代码块内管理您的任务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Todo.txt Codeblocks

> [!Note] 插件名片
> - 插件名称：Todo.txt Codeblocks
> - 插件作者：Benjamin Nguyen
> - 插件说明：根据Todo.txt规范，在代码块内管理您的任务。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/benjamonnguyen/obsidian-todotxt-codeblocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todotxt-codeblocks)

## 概述

根据Todo.txt规范，在代码块内管理您的任务。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/benjamonnguyen/obsidian-todotxt-codeblocks/master/README.md)
> 

---

## Readme(翻译）

下面是 [[todotxt-codeblocks]] 插件的自述翻译


# obsidian-todotxt-codeblocks
## 描述
基于[Todo.txt规范](https://github.com/todotxt/todo.txt)，这是一个替代mvgrimes的[obsidian-todotxt-plugin](https://github.com/mvgrimes/obsidian-todotxt-plugin)的代码块。

将您的任务添加到一个名为`todotxt`的代码块中，即可开始使用！

<img src="assets/demo.gif" />
## 特性
- [x] **排序**（按优先级列出）
  - string[]
    - `proj`（项目）
      - 例如 "sort:proj:Home,Work"
    - `ctx`（上下文）
      - "n/c" = 没有上下文
      - 例如 "sort:ctx:bug,feature,n/c,nice-to-have"
  - desc/asc（默认为升序）
    - `status`（状态）
    - `prio`（优先级）
    - `completed`（完成日期）
    - `due`（截止日期延期）
    - `created`（创建日期）
    - 例如 "sort:status sort:created:desc"
  - `default`（例如 "sort:default"）
- **实时预览**
  - [x] 可折叠的项目组
  - [x] 编辑、添加、删除按钮
  - [x] 渲染 Markdown 链接
- [x] 项目和上下文的**自动补全**
- [x] 将已完成的任务**归档**到 `archive.todotxt` 文件中
  - [x] **自动归档**设置
- [x] 可配置的默认设置

**命令**
- [x] `在焦点列表中创建新任务`
- [x] `撤销上一个用户操作`

**扩展**
  - [x] `due:`（截止日期）
  - [x] `rec:`（重复频率）

**语言行选项**
  - [ ] `get:` 查询现有的 Todo.txt 任务并移动到当前代码块
  - [ ] `link:` 将 *.todotxt 文件链接到 todotxt 代码块
  - [ ] `filter:`
## 扩展功能
  - 日期格式
    - \<YYYY-MM-DD>（例如 1996-08-06）
    - \<MM-DD>（例如 08-06）
    - \<n><[dateUnit]>（例如 1w = 从今天开始的1周）
      - 计算日期与当前日期相隔n个dateUnit
      - dateUnit: d（天），w（周），m（月），y（年），b（工作日）
      - 如果只提供一个数字，则计算**天**（例如 0 = 今天，1 = 明天，7 = 下周）
    - \<dayOfWeek>（例如 M = 下周一）
      - 计算下一个dayOfWeek的日期
      - M（周一），Tu（周二），W（周三），Th（周四），F（周五），Sa（周六），Su（周日）
    - dayOfWeek和dateUnit（除了b）可以组合使用（dayOfWeek必须在前面）
      - 1w2d = 9天（1 **周** + 2 **天**）
      - Su5d = 5天后的第一个即将到来的**周日**
    - 如果`rec:`值以加号为前缀（例如 rec:+1w），则日期是根据原始截止日期而不是完成日期确定的
捐赠
如果你喜欢这个插件，随意支持我！


致谢
感谢hieuthi的[joplin-plugin-metis](https://github.com/hieuthi/joplin-plugin-metis)提供的灵感。



