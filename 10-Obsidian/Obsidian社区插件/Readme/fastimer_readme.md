---
uid: 2024022117274761
title: Obsidian 插件：【Readme】Fastimer
tags: ['obsidian插件', 'readme']
description: Intermittent fasting tracker.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fastimer

> [!Note] 插件名片
> - 插件名称：Fastimer
> - 插件作者：vkostyanetsky
> - 插件说明：Intermittent fasting tracker.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vkostyanetsky/ObsidianFastimer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fastimer)

## 概述

Intermittent fasting tracker.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vkostyanetsky/ObsidianFastimer/main/README.md)

---

## Readme(翻译）

下面是 [[fastimer]] 插件的自述翻译

# Fastimer ⌛ ⏲️ ⌚

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，旨在帮助您监控您的 [禁食间隔](https://en.wikipedia.org/wiki/Intermittent_fasting)。

## 🙂 如何使用它？

这个想法很简单：当你开始一次新的禁食时，在一个笔记中添加一个 `fastimer` 块，设置一个你开始的日期和时间。

例如：

```
```fastimer
2024-02-06 18:50
```

你可以使用“插入禁食追踪器”命令来做到这一点，或者，你知道的，手动操作。

插件会接受这个块，并显示已经过去的时间、剩余时间，以及类似进度条的东西来可视化你流出的汗水和眼泪 :)

这里是一个例子：

```
进行中的禁食

从：2024-02-06, 18:50
目标：2024-02-07, 10:50

禁食区间：

1. 合成代谢     2024-02-06, 18:50 ← 你在这里
2. 分解代谢    2024-02-06, 22:50
3. 脂肪燃烧  2024-02-07, 10:50
4. 酮症      2024-02-07, 18:50
5. 深度酮症 2024-02-09, 18:50

####----------------------------------- 10%

已过时间：1小时36分钟
剩余时间：14小时23分钟
```

当一个块被渲染时，以上所有内容都会更新。要触发这一过程，你可以编辑该块或重新打开笔记。

要标记一个进行中的禁食已经结束，你可以在同一个块中添加结束的日期和时间。

```
```fastimer
2024-02-06 18:50
2024-02-07 15:00
```

## 🤔 问题

### 我如何设置禁食间隔的长度？

假设常规禁食的长度为 16 小时，因为这相当受欢迎。但是，您可以在插件的设置中更改默认值，或者直接为一个特定的禁食设置它。

下面，我们将进行 18 小时的禁食：

```
```fastimer
18
2024-02-06 18:50
```