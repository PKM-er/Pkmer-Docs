---
uid: 2023080322190855
title: Obsidian 插件：【Readme】Get Stock Information
tags: ['obsidian插件', 'readme']
description: 接受一个股票代码，并返回一个带有最新股票信息的调用块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Get Stock Information

> [!Note] 插件名片
> - 插件名称：Get Stock Information
> - 插件作者：Mike Jongbloet
> - 插件说明：接受一个股票代码，并返回一个带有最新股票信息的调用块。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mikejongbloet/obsidian-get-stock-information)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?get-stock-information)

## 概述

接受一个股票代码，并返回一个带有最新股票信息的调用块。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mikejongbloet/obsidian-get-stock-information/master/README.md)
> 

---

## Readme(翻译）

下面是 [[get-stock-information]] 插件的自述翻译


# 获取股票信息
使用Yahoo Finance API返回特定股票符号的信息。

## 如何使用

1. 在编辑模式下，运行命令“获取股票信息：插入股票信息”。
2. 输入股票代码（例如AAPL）。
3. 点击“获取股票信息”。

稍作等待（取决于API的响应速度，大约为0.5-8秒），页面将添加一个新的调用块，其中包含以下信息：

* 买入价
* 卖出价
* 价差百分比
* 名称
* 货币
* 成交量
* 市值
* 日价格范围（最低-最高）
* 52周价格范围（最低-最高）
* 信息时间

例如：
```
> [!info]- AAPL (买入价：164.9，卖出价：164.91，价差：0.006%)
> **名称：** Apple Inc.
> **货币：** USD
> **成交量：** 68,749,792
> **市值：** 2.6T
> **日价格范围：** 162.13 – 165
> **52周价格范围：** 124.17 – 178.49
>
><small>*Sun Apr 02 2023 18:28:05 GMT+0100 (British Summer Time)*</small>
```

https://github.com/phamleduy04/yahoo-stock-api - 我使用的项目，用于从Yahoo Finance获取信息



