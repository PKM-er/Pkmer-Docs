---
uid: 2023080322282408
title: Obsidian 插件：【Readme】TimeStamper
tags: ['obsidian插件', 'readme']
description: 在当前光标位置插入自定义或预定义的时间戳或日期戳。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：TimeStamper

> [!Note] 插件名片
> - 插件名称：TimeStamper
> - 插件作者：Martin Eder
> - 插件说明：在当前光标位置插入自定义或预定义的时间戳或日期戳。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Gru80/obsidian-timestamper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-timestamper)

## 概述

在当前光标位置插入自定义或预定义的时间戳或日期戳。

![TimeStamper](https://cdn.pkmer.cn/covers/obsidian-timestamper.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Gru80/obsidian-timestamper/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-timestamper]] 插件的自述翻译


![发布](https://img.shields.io/github/v/release/Gru80/obsidian-timestamper)
![下载量](https://img.shields.io/github/downloads/Gru80/obsidian-timestamper/total.svg)
时间戳 - Obsidian插件
向您的笔记添加时间戳或日期戳：
- 两个格式字符串可以在插件设置中预先配置（并通过命令或热键插入）
- 可以通过对话框插入即席自定义时间戳（最近使用的格式将被保存并提供为建议）

![TimeStamper](res/dialog.png)

支持Obsidian的桌面和移动版本。

## 插件设置
该插件带有一些配置选项：
- 一个用于快速插入时间戳的默认模板字符串（通过命令或可配置的热键）
- 一个用于快速插入日期时间戳的默认模板字符串（通过命令或可配置的热键）
- 一个选项，用于指定是否在插入时间/日期时间戳后自动添加换行符

![PluginSettings](res/settings.png)

## 快捷键配置
可以在Obsidian快捷键选项页面中配置快捷键，以便快速访问以下命令：
- 打开对话框以输入自定义的时间/日期格式字符串
- 插入预定义的时间戳
- 插入预定义的日期戳

![快捷键](res/hotkeys.png)

格式字符串
该插件使用了Obsidian默认提供的moment.js，因此可以使用moment.js中的所有已知标记来创建自定义的时间/日期戳：
[支持的所有标记列表](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

|                             | 标记               | 输出                                     |
| --------------------------- | ------------------ | ---------------------------------------- |
| 月份                        | M                  | 1 2 ... 11 12                            |
|                             | Mo                 | 1st 2nd ... 11th 12th                    |
|                             | MM                 | 01 02 ... 11 12                          |
|                             | MMM                | Jan Feb ... Nov Dec                      |
|                             | MMMM               | January February ... November  December  |
| 季度                        | Q                  | 1 2 3 4                                  |
|                             | Qo                 | 1st 2nd 3rd 4th                          |
| 月份中的日期                | D                  | 1 2 ... 30 31                            |
|                             | Do                 | 1st 2nd ... 30th 31st                    |
|                             | DD                 | 01 02 ... 30 31                          |
| 年份中的日期                | DDD                | 1 2 ... 364 365                          |
|                             | DDDo               | 1st 2nd ... 364th 365th                  |
|                             | DDDD               | 001 002 ... 364 365                      |
| 星期中的日期                | d                  | 0 1 ... 5 6                              |
|                             | do                 | 0th 1st ... 5th 6th                      |
|                             | dd                 | Su Mo ... Fr Sa                          |
|                             | ddd                | Sun Mon ... Fri Sat                      |
|                             | dddd               | Sunday Monday ... Friday  Saturday       |
| 星期中的日期（本地化）      | e                  | 0 1 ... 5 6                              |
| 星期中的日期（ISO）         | E                  | 1 2 ... 6 7                              |
| 年份中的周数                | w                  | 1 2 ... 52 53                            |
|                             | wo                 | 1st 2nd ... 52nd 53rd                    |
|                             | ww                 | 01 02 ... 52 53                          |
| 年份中的周数（ISO）         | W                  | 1 2 ... 52 53                            |
|                             | Wo                 | 1st 2nd ... 52nd 53rd                    |
|                             | WW                 | 01 02 ... 52 53                          |
| 年份                        | YY                 | 70 71 ... 29 30                          |
|                             | YYYY               | 1970 1971 ... 2029 2030                  |
| 年代                        | y                  | 1 2 ... 2020 ...                         |
| 年份中的周数                | gg                 | 70 71 ... 29 30                          |
|                             | gggg               | 1970 1971 ... 2029 2030                  |
| 年份中的周数（ISO）         | GG                 | 70 71 ... 29 30                          |
|                             | GGGG               | 1970 1971 ... 2029 2030                  |
| 上午/下午                   | A                  | AM PM                                    |
|                             | a                  | am pm                                    |
| 小时                        | H                  | 0 1 ... 22 23                            |
|                             | HH                 | 00 01 ... 22 23                          |
|                             | h                  | 1 2 ... 11 12                            |
|                             | hh                 | 01 02 ... 11 12                          |
|                             | k                  | 1 2 ... 23 24                            |
|                             | kk                 | 01 02 ... 23 24                          |
| 分钟                        | m                  | 0 1 ... 58 59                            |
|                             | mm                 | 00 01 ... 58 59                          |
| 秒                          | s                  | 0 1 ... 58 59                            |
|                             | ss                 | 00 01 ... 58 59                          |
| 毫秒                        | S                  | 0 1 ... 8 9                              |
|                             | SS                 | 00 01 ... 98 99                          |
|                             | SSS                | 000 001 ... 998 999                      |
|                             | SSSS ... SSSSSSSSS | 000[0..] 001[0..] ... 998[0..]  999[0..] |
| 时区                        | z or zz            | EST CST ... MST PST                      |
|                             | Z                  | -07:00 -06:00 ... +06:00 +07:00          |
|                             | ZZ                 | -0700 -0600 ... +0600 +0700              |
| Unix时间戳                  | X                  | 1360013296                               |
| Unix毫秒级时间戳            | x                  | 1,36001E+12                              |



