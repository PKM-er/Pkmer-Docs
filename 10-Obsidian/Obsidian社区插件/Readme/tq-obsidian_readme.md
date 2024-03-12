---
uid: 20231220115812
title: Obsidian 插件：【Readme】tq
tags: ['任务管理', 'obsidian插件', 'readme']
description: 基于文件的任务管理
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】tq

> [!Note] 插件名片
> - 插件名称：tq
> - 插件作者：Tony Grosinger
> - 插件说明：基于文件的任务管理
> - 插件分类：[' 任务管理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tgrosinger/tq-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tq-obsidian)

## 概述

基于文件的任务管理

![tq](https://cdn.pkmer.cn/covers/tq-obsidian_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tgrosinger/tq-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[tq-obsidian]] 插件的自述翻译

tq 是一个用于使用基于文件的工作流程管理任务的 [Obsidian](https://obsidian.md) 插件。每个任务都以一个 Markdown 笔记表示，其中包含一行任务和一些元数据在 frontmatter 中。任务通过在其他笔记中嵌入查询来查看，例如您的每日笔记。

![tq演示](https://cdn.pkmer.cn/covers/tq-obsidian_1_0.gif)

一个示例任务笔记：

```
---
due: '2021-06-30'
tags: 'work'
repeat: every Friday
completed:
  - '2021-06-18'
  - '2021-06-11'
---

- [ ] File TPS reports

```

该插件仍在积极开发中，尚未完全实现功能。但它具有基本功能，我将根据我的任务工作流程添加更多功能。

## 自定义代码块

可以使用自定义代码块在笔记中查询任务。以下是一个示例，它将包括指定日期的所有任务或已逾期的任务（与该日期相关）。它还将省略已完成的任务。

    ```tq
    select-day: 2021-06-06
    completed:  false
    overdue:    true
    ```

或者对于一个更复杂的示例：

    ```tq
    select-week: 2021-06-13
    select-tags: [ home, shopping ]
    completed: false
    group: due
    no-due: true
    ```

### 自定义块属性

| 属性           | 值                     | 描述                                                         | 默认值     |
| -------------- | ---------------------- | ------------------------------------------------------------ | ---------- |
| `select-day`   | Date                   | 仅包括此日期到期的任务                                       | 所有任务   |
| `select-week`  | Date                   | 仅包括此周到期的任务                                         | 所有任务   |
| `select-tags`  | String List            | 仅包括具有此标签的任务（可与 day/week 一起使用）                | 所有任务   |
| `omit-tags`    | String List            | 排除具有此标签的任务（可与 day/week 一起使用）                   | 不排除任何任务 |
| `overdue`      | true/false             | 如果任务逾期与所选的 day/week 相关，则包括该任务                | false      |
| `completed`    | true/false             | 仅包括已完成或未完成的任务。如果未提供 completed，则显示已完成和未完成的任务。如果设置为 true，则仅显示已完成的任务，如果设置为 false，则仅显示未完成的任务。 | 所有任务   |
| `due`          | true/false             | 包括具有到期日期的任务                                       | true       |
| `no-due`       | true/false             | 包括没有到期日期的任务                                       | true       |
| `sort`         | "score", "due", ""     | 指定任务的排序顺序                                           | ""         |
| `group`        | "due", "completed", "" | 指定列表中任务的分组方式                                     | ""         |

请注意，`select-tags` 和 `omit-tags` 支持嵌套标签。换句话说，`select-tags: work` 将匹配标记为 `work` 以及 `work/meetings` 的笔记。

您可以使用 Obsidian 链接在应用内部或外部与 tq 进行交互。

### 创建任务

```
obsidian://tq?create&due=2021-06-01&task=Water%20the%20garden
```

属性必须进行 URL 转义。

| 属性     | 值        | 描述                               |
| -------- | -------- | ------------------------------------ |
| action   | "create" | 表示正在创建一个任务                 |
| due      | 日期     | 任务的可选截止日期                   |
| task     | 字符串   | 任务的 URL 转义内容                   |
| repeat   | 字符串   | URL 转义的重复配置                    |
| tags     | 字符串   | 逗号分隔的标签列表                   |

使用 iOS 快捷方式

可以使用上面的 URL 从 iOS 快捷方式中创建一种快速的方式来添加任务，而不需要在 Obsidian 之外。但请注意，如果您使用 Obsidian Sync，除非您将 Obsidian 保持打开足够长的时间以完成同步，否则您的任务可能不会同步。

[示例快捷方式](https://www.icloud.com/shortcuts/ea7991d02bc24922ace9b49c670a1397)

<https://user-images.githubusercontent.com/597386/124496753-adfb4a00-dd6e-11eb-830f-3dd2cd87cc66.mp4>

定价

该插件免费提供给所有人使用，但如果您想表示感谢或帮助支持持续开发，可以通过以下方法之一向我提供一点帮助：

[![GitHub赞助商](https://img.shields.io/github/sponsors/tgrosinger?style=social)](https://github.com/sponsors/tgrosinger)

[![Paypal](https://img.shields.io/badge/paypal-tgrosinger-yellow?style=social&logo=paypal)](https://paypal.me/tgrosinger)

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/tgrosinger)

## 截图

到目前为止，我主要集中精力在功能上，所以用户界面还有一些不完善的地方。希望随着时间的推移会有所改善！

![create-task](https://cdn.pkmer.cn/covers/tq-obsidian_1_3.png!pkmer)

![edit task repeat](https://cdn.pkmer.cn/covers/tq-obsidian_1_4.png!pkmer)

![task details](https://cdn.pkmer.cn/covers/tq-obsidian_1_5.png!pkmer)
