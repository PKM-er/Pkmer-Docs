---
uid: 20230803212229
title: Obsidian 插件：【Readme】Daily Activity
tags: ['文件历史', '效率', '文件管理', 'obsidian插件', 'readme']
description: 通过命令面板火快捷键，为你生成修改过的文件，创建的文件的统计或者是文件链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Daily Activity

> [!Note] 插件名片
> - 插件名称：Daily Activity
> - 插件作者：trydalch
> - 插件说明：通过命令面板火快捷键，为你生成修改过的文件，创建的文件的统计或者是文件链接。
> - 插件分类：['文件历史', '效率', '文件管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/trydalch/obsidian-daily-activity)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-activity)

## 概述

通过命令面板火快捷键，为你生成修改过的文件，创建的文件的统计或者是文件链接。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trydalch/obsidian-daily-activity/master/README.md)
> 

---

## Readme(翻译）

下面是 [[daily-activity]] 插件的自述翻译



# Obsidian 活动插件

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/trydalch/obsidian-daily-activity?style=for-the-badge&sort=semver)](https://github.com/trydalch/obsidian-daily-activity/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/trydalch/obsidian-daily-activity/total?style=for-the-badge)

这是一个为 Obsidian（https://obsidian.md）开发的插件。

该插件非常年轻且编写迅速，但可以与日常笔记一起有效地使用，记录完成的工作以及您继续回到的文件。

请在 https://github.com/trydalch/obsidian-daily-activity/issues/new 提出任何错误、功能请求或反馈。

## 命令

| 命令                                 | 描述                                                                                                                                                                                                      |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 插入今天创建的文件链接            | 插入一个链接列表，其中包含今天创建的文件                                                                                                                                                                   |
| 插入今天修改的文件链接           | 插入一个链接列表，其中包含今天修改的文件                                                                                                                                                                  |
| 插入今天创建的文件的纯文本列表  | 插入一个列表，其中包含今天创建的文件                                                                                                                                                                            |
| 插入今天修改的文件的纯文本列表 | 插入一个列表，其中包含今天修改的文件                                                                                                                                                                           |
| 插入日期的统计信息                          | 插入一个表格，其中包含按日期计算的修改文件数和创建文件数。默认为今天，但可以通过在编辑器中选择日期来指定。支持自然语言日期。请参阅下面的示例。 |
| (已弃用) 今天的统计信息              | 插入一个包含今天写作活动统计信息的表格。<br\> **将在将来的版本中删除**                                                                                                      |

## 示例

- **日期的统计**

  - 没有选择：输出今天的统计数据

  - `yesterday`：昨天的统计数据

  - `2021-02-20`：2021-02-20的统计数据

  - `2021-02-15 to 2021-02-20`：这些日期之间的统计数据，包括这个范围。

  - `5 days ago to today`：该范围内的统计数据



  更多自然语言日期格式的示例，请参见此处：https://github.com/wanasit/chrono

## 路线图

- [x] 添加活动统计命令（创建的文件数量，修改的文件数量）
- [x] 添加插入日期统计的选项
- [x] 添加日期范围的统计
- [x] 添加对自然语言日期的支持
- [ ] 添加模板功能
- [ ] 添加按标签筛选统计数据



