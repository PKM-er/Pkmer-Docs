---
uid: 20230609143302
title: 0_0Zotero简介
tags: [zotero, 教程]
description: Zotero 简介
author: darkluna999
type: other
draft: false
editable: false
modified: 20231001225258
---

# 0_0Zotero 简介

## Zotero 是什么

官网地址：[Zotero | Your personal research assistant](https://www.zotero.org/)

引用其官网的 Slogan：

> Your personal research assistant
> 您的个人研究助手
> Zotero is a free, easy-to-use tool to help youcollect, organize, annotate, cite, and share research.
> Zotero 是一款免费且易于使用的工具，可帮助您收集、组织、注释、引用和分享研究成果。

Zotero 是一款免费的参考文献管理软件，它可以帮助用户轻松地收集、组织和引用各种类型的文献。用户可以使用 Word 或 libre Office 插件在写作论文或其他学术作品时方便地引用这些文献。

Zotero 支持多种文献类型，包括书籍、期刊文章、网页、报告等等。用户可以通过 Zotero 插件方便地从各种来源中保存文献信息，例如从图书馆目录、Google 学术、PubMed、Web of Science 等学术数据库中获取文献信息。Zotero 还支持自动提取文献信息的功能，用户只需要在网页上点击一下 Zotero 插件，就可以自动保存文献信息到自己的账户中。

除了文献管理功能，Zotero 还提供了一些其他有用的功能。例如，用户可以使用 Zotero 的协作功能与其他人共享文献库，方便多人合作写作；用户还可以使用 Zotero 的笔记功能在文献中添加自己的注释和评价；用户可以为文献添加标签和文件夹，方便分类和检索；用户还可以使用 Zotero 的搜索功能快速找到需要的文献。

## 关于文献管理软件

文献管理软件是一种帮助用户管理和组织各种文献资源的工具。这些软件通常可以帮助用户收集、存储、分类、检索和引用文献，提高学术写作的效率和质量。

## 主流产品横向对比

| 软件名称    | 中文支持 | 开源 | 收费情况         | 插件支持 | 同步                              |
| ----------- | -------- | ---- | ---------------- | -------- | --------------------------------- |
| Zotero      | 中上     | 是   | 免费             | 丰富     | 简单 官方/WebDAV/本地文件         |
| Mendeley    | 中       | 是   | 免费（可选付费） | 稀少     | 简单（网络问题难解）官方/本地文件 |
| EndNote     | 中       | 否   | 收费             | 丰富     | 官方/本地文件                     |
| NoteExpress | 上       | 否   | 收费             | 稀少     | 官方/本地文件                     |

此外还有以下几点：

1. EndNote 只支持二级目录、不支持多级目录、不支持标签，而 Zotero 的分类 Collection 则差强人意，且有一定的曲线方案，见 [[2_05使用SQL解决批量标签修改问题]]
2. Mendeley 最大的问题就是数据迁移困难以及特殊的网络环境需求
3. NoteExpress 则因为只支持 Windows 系统，而 Zotero 则支持几乎全部平台 Linux、Mac、IOS、甚至仅仅是 Web 亦可使用，Android 虽无官方 APP，但有大量第三方替代方案以及开放的 API，见 [[2_06Researcher的联动使用]]
4. 知网研学...除了支持 CAJ 以外我实在找不到其他亮点，甚至 Zotero 有更丰富的翻译替代方案，见 [[zoteropdftranslate]]

## 为什么选择 Zotero

通过上述表格我们大概会觉得 Zotero 似乎并不是上上之选，但其依然有几点不可替代的可取之处

- 插件丰富，可扩展，详见 [[0_04Zotero插件简述]]
- 更强大的网页抓取，详见 [[0_03ZoteroConnector]]
- PDF 自动识别，题录元数据抓取（需要正确抓取或命名 pdf 文件，或借助第三方插件）
- 全平台同步（Android 虽尚未开发官方程序但替代方案繁多）[[0_05Zotero备份与同步]]
- 原生支持 PDF 文件全文档搜索，高亮搜索关键词，多维度搜索
- 支持团队协作：意味着整个科研小组的文献与行动都可以互相促进，传递文章
- 开源：意味着社区里有更多的可询问者，且 bug 修复速度也会比较快
- 参考文献引用格式，可自定义修改 CSL [[2_08ZoteroCSL简述]]
- 中文文献支持性好（需要配置茉莉花插件与翻译器抓取引擎）

## 为什么 ~~不~~ 选择 Zotero

但显然凡事均有其弊端，那么为什么不选择 Zotero 呢？

- 我接受不了使用前需要的陡峭（其实并不算陡峭）学习曲线（而这正是我们写下这系列引路文档的目的与初衷）
- 我不想花费大量时间在研究插件的使用上而耽误了我宝贵的时间（实际上只需要做一次最基础的配置即可快乐轻松的使用，而跟随本系列引路文档将大幅缩减其消耗）
- 我不想抛弃已经使用很久的文献管理软件（请参考官方文档 [moving to zotero ](https://www.zotero.org/support/moving_to_zotero) 或移步 [[0_06迁移到Zotero]]）
- Zotero 的 UI 实在是太丑了！（这点真的是英雄所见略同，但 Zotero7 已经大幅度提升其 UI 与性能，您也可以向开发社区发起 UI 建议，相信他们也是很欢迎的）