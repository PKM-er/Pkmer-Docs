---
uid: 2023080322251643
title: Obsidian 插件：Query all the things
tags: ['obsidian插件', 'readme']
description: 在Obsidian中对数据执行基于SQL的查询，并使用模板按照您的要求进行渲染。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Query all the things

> [!Note] 插件名片
> - 插件名称：Query all the things
> - 插件作者：Sytone
> - 插件说明：在 Obsidian 中对数据执行基于 SQL 的查询，并使用模板按照您的要求进行渲染。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sytone/obsidian-queryallthethings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qatt)

## 概述

在 Obsidian 中对数据执行基于 SQL 的查询，并使用模板按照您的要求进行渲染。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sytone/obsidian-queryallthethings/main/README.md)
>

---

## Readme(翻译）

下面是 [[qatt]] 插件的自述翻译

# 查询所有的事物

<p align="center">
    <a href="https://github.com/sytone/obsidian-queryallthethings/releases/latest">
  <img src="https://img.shields.io/github/manifest-json/v/sytone/obsidian-queryallthethings?color=blue">
 </a>
    <img src="https://img.shields.io/github/release-date/sytone/obsidian-queryallthethings">
 <a href="https://github.com/sytone/obsidian-queryallthethings/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/sytone/obsidian-queryallthethings">
 </a>
 <img src="https://img.shields.io/github/downloads/sytone/obsidian-queryallthethings/total">
 <a href="https://github.com/sytone/obsidian-queryallthethings/issues">
  <img src="https://img.shields.io/github/issues/sytone/obsidian-queryallthethings">
 </a>
</p>

***在 [Obsidian](https://obsidian.md) 中对数据执行灵活的基于 SQL 的查询，并使用 Handlebars 模板按照您的需求进行渲染。***

---

## 特点

- 使用基于 SQL 的查询语句，可扩展并处理 JSON 和对象。
- 查询 Obsidian API 中的任何数据集合。
- 查询存储在 DataView 中的数据以及 DataView 数据的缓存视图，如任务。
- 使用 handlebar 模板在 HTML 或 Markdown 中进行渲染。
- 使用自定义的 handlebar 辅助函数和/或提供自己的函数。

开始使用

有关安装插件和使用它的文档可以在 [https://sytone.github.io/obsidian-queryallthethings/](https://sytone.github.io/obsidian-queryallthethings/) 找到。

开始 - 我不需要文档

简而言之，在安装插件后，创建一个类似以下示例的代码块，这将列出所有未完成的任务，并按照截止日期所在的月份进行分组。

如果您想要更多细节...请阅读文档，或者反向工程代码库。由您选择！

注意：此插件目前对 DataView 有一个硬依赖，请确保也安装了 DataView。

# logLevel: debug

查询: |

  SELECT moment(dueDate)->format("MMMM Do, YYYY") AS Month, page, task, status, line, tags, doneDate, priority

  from tasks

  where status != 'x'

  ORDER BY dueDate asc

模板: |

    {{#group result by="Month"}}

      <h4>{{ value }}</h4>

      <ul class='contains-task-list'>

      {{#each items}}

        <li class='task-list-item plugin-tasks-list-item'> {{ taskcheckbox this }} {{#markdown2}} {{task}} [[{{page}}|📝]] {{/markdown2}}</li>

      {{/each}}

      </ul>

    {{/group}}

```
````