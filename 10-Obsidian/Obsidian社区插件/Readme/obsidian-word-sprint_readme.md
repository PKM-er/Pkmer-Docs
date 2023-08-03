---
uid: 20230803213449
title: Obsidian 插件：【Readme】Word Sprint
tags: ['obsidian插件', 'readme']
description: 为你的写作项目（如Nanowrimo）提供 Word Sprint 功能
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Word Sprint

> [!Note] 插件名片
> - 插件名称：Word Sprint
> - 插件作者：Andrew Lombardi
> - 插件说明：为你的写作项目（如Nanowrimo）提供 Word Sprint 功能
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kinabalu/obsidian-word-sprint)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-word-sprint)

## 概述

为你的写作项目（如Nanowrimo）提供 Word Sprint 功能



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kinabalu/obsidian-word-sprint/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-word-sprint]] 插件的自述翻译



Word Sprint for Obsidian是一个插件，它帮助Obsidian用户在进行任何写作任务时达到我们所追求的流动状态。它提供了创建时间段（默认为25分钟）和次数的能力，并在写作过程中给予指导，以保持你的写作状态，而不是去查看Twitter。

该插件的灵感来自于Discord上关于创意的NANOWRIMO 2021主题的讨论。

参考链接：https://www.wikiwrimo.org/wiki/Word_war

### 特点
- 一个番茄钟式的计时器，用于追踪写作（默认的工作时间为25分钟，但可配置）
- 可从设置中配置的目标
- 如果停止写作10或60秒，会有提示来保持流程（也可配置）
- 丰富的统计数据，包括工作时间长度、总字数、平均每分钟字数、最长的不写作时间段、总的不写作时间、总增加的字数、总删除的字数和总净字数
- 可以重新开始并重置每日统计数据或所有统计数据的能力

即将推出
- 在线冲刺，与朋友一起挑战和完成冲刺任务

### 安装
插件正在等待审核，以便包含在社区插件中。如果您希望引起更多关注，请点赞或收藏该拉取请求：https://github.com/obsidianmd/obsidian-releases/pull/601

### 手动安装
有两种方法，第一种更简单：

#### 方法1
- 启用社区插件并安装[Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)
- 进入设置，在Beta插件列表下点击“添加Beta插件”，然后输入`kinabalu/obsidian-word-sprint`

#### 方法2
- 在你的vault的`.obsidian/plugins`目录下创建一个`obsidian-word-sprint`文件夹。将[最新版本](https://github.com/kinabalu/obsidian-word-sprint/releases)中的`main.js`、`manifest.json`和`styles.css`文件添加到该文件夹中。

## 用法
成功安装插件后（目前使用BRAT）。可以点击一个跑步的人的带有丝带图标来显示右侧的叶子视图，其中包含大部分工具的功能。

该叶子包含开始、停止、查看统计信息和目标的功能（所有这些都可以在设置中进行设置）。

如果点击计时器，可以临时更改下一个冲刺的冲刺时间为新值。

有几个命令可用于与命令面板（Ctrl-P或⌘-P）一起使用，或者映射一个热键。

- 开始单词冲刺（`start-word-sprint`）
- 停止单词冲刺（`stop-word-sprint`）
- 更改单词冲刺长度（`change-word-sprint-length`）
- 显示单词冲刺叶子（`show-word-sprint-leaf`）
- 插入上次单词冲刺统计信息（`insert-last-word-sprint-stats`）
- 插入平均单词冲刺统计信息（`insert-average-word-sprint-stats`）

### NanoWriMo集成
如果您通过[nanowrimo.org](https://nanowrimo.org)注册了一个常规帐户，您可以使用插件设置登录，选择一个项目和挑战，以便从冲刺工具自动更新nanowrimo的进度。

对于使用Google或Facebook登录的用户来说，稍微有些困难。我的建议是安装一个名为[Live HTTP Headers](https://chrome.google.com/webstore/detail/live-http-headers/ianhploojoffmpcpilhgpacbeaifanid)的插件。

安装完成后，您可以激活它，点击设置，并关闭捕获中的所有内容，只保留`XMLHttpRequests`，我通常喜欢选择格式化视图头。

运行此插件并确保捕获已打开。在新的浏览器标签中打开NaNoWriMo，并确保您已登录并查看一个项目。在顶部附近找到以`https://api.nanowrimo.org...`开头的请求之一，并选择它。您应该在右侧看到一个名为“Authorization”的请求头。将其复制到剪贴板上。

一旦您获得了授权密钥，请关闭Obsidian，打开插件目录中的`data.json`文件，路径为`<您的vault>/.obsidian/plugins/obsidian-word-sprint`，并添加一个名为`nanowrimoAuthToken`的密钥，其值为令牌。

## 表达感谢 🙏

如果你喜欢这个插件并想请我喝杯咖啡，你可以这样做！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/andrewlombardi)



