---
uid: 2023080322164262
title: Obsidian 插件：【Readme】Cron
tags: ['obsidian插件', 'readme']
description: 简单的CRON /调度程序插件，定期运行用户脚本或Obsidian命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Cron

> [!Note] 插件名片
> - 插件名称：Cron
> - 插件作者：Callum Loh
> - 插件说明：简单的CRON /调度程序插件，定期运行用户脚本或Obsidian命令。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/cdloh/obsidian-cron)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cron)

## 概述

简单的CRON /调度程序插件，定期运行用户脚本或Obsidian命令。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cdloh/obsidian-cron/master/README.md)
> 

---

## Readme(翻译）

下面是 [[cron]] 插件的自述翻译


# Obsidian Cron 插件

Obsidian Cron 是 Obsidian.md 的一个插件，允许用户在预定的时间自动运行 Obsidian 命令或自定义用户脚本。

# 安装
要安装Obsidian Cron，您可以通过Obsidian中的社区软件包下载，或者手动下载最新版本并手动添加。

# 用法

在插件设置页面中添加作业。

每个作业需要：

1. 一个名称
2. 要运行的 Obsidian 命令
3. 一个 cron 调度语法表达式
   * 这将是作业运行的频率。如果需要帮助编写 cron 调度，请访问 [crontab.guru](https://crontab.guru/)。

每个作业还有三个可切换的选项：

1. 启用在移动设备上运行作业
   * 默认情况下，所有作业都不在移动设备上运行。
2. 切换作业锁定
   * 如果作业由于错误日志而卡住，您可以在此处切换状态。有关更多详细信息，请参阅 [锁定](#locking)。
3. 切换同步检查
   * 在每个作业的基础上切换同步检查功能。有关更多详细信息，请参阅 [同步](#sync)。

# 功能性

API / UserScripts

通过Javascript公开了一个API来添加用户函数。名称被视为作业的UUID，以确保在Obsidian重新加载时保持一致，以确保锁定/上次运行的数据可用。

Obsidian应用程序的一个实例作为第一个和唯一的参数传递给所有用户函数。

要清除通过API添加的作业的锁定，您可以添加一个具有相应名称的作业，然后将名称传递给API中的`clearJobLock(name: string)`函数。

用户函数的示例

```javascript

const cron = app.plugins.plugins.cron.api;

cron.addCronJob('addCronJob', "* * * * 3", {"enableMobile": true}, function(app){console.log('Job has ran!')});

```

同步

Obsidian cron可以与原生的Obsidian Sync插件进行连接。当启用时，所有的锁定、cron运行和命令都会在运行任何cron作业之前等待Obsidian Sync完全完成。

如果您有多个Obsidian实例正在运行，并且希望确保cron作业仅在一个设备上运行或每个Obsidian vault只运行一次，这将非常有用。

在每个cron作业开始时，会将一个锁保存到插件设置中，以阻止多个相同作业的实例运行。有时，如果作业没有干净地完成，它们可能会保留锁定状态。可以在插件的设置页面上解锁它们。

# 许可证
Obsidian Cron 是根据 MIT 许可证发布的。有关更多信息，请参阅 LICENSE 文件。



