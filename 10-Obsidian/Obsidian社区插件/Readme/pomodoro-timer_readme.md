---
uid: 2024022121220787
title: Obsidian 插件：【Readme】Pomodoro Timer
tags: ['obsidian插件', 'readme']
description: A pomodoro timer that helps manage your daily focus
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Pomodoro Timer

> [!Note] 插件名片
> - 插件名称：Pomodoro Timer
> - 插件作者：eatgrass
> - 插件说明：A pomodoro timer that helps manage your daily focus
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/eatgrass/obsidian-pomodoro-timer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pomodoro-timer)

## 概述

A pomodoro timer that helps manage your daily focus

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/eatgrass/obsidian-pomodoro-timer/master/README.md)
>

---

## Readme(翻译）

下面是 [[pomodoro-timer]] 插件的自述翻译

【机翻】

<h1 align="center">番茄钟计时器适用于Obsidian</h1>

## 简介

这个插件将一个可定制的番茄钟集成到你的 Obsidian 工作空间中，帮助你集中精力并有效管理时间。

## 特点

- **可定制的计时器**：设置工作和休息间隔，以适应您的生产力风格。
- **听觉提醒**：通过音频通知保持在正确的轨道上，提示每个会话结束。
- **状态栏显示**：直接从 Obsidian 的状态栏监视您的进度，保持专注。
- **每日笔记集成**：自动在您的每日笔记中记录您的会话，以便更好地跟踪。

## 截图

![image](https://cdn.pkmer.cn/covers/pomodoro-timer_1_0.png!pkmer)

Examples of Using with DataView

### 日志表

这个 DataView 脚本生成一个表格，显示番茄钟会话及其持续时间、开始和结束时间。

![image](https://cdn.pkmer.cn/covers/pomodoro-timer_1_1.png!pkmer)

<pre>
```dataviewjs
const pages = dv.pages()
const table = dv.markdownTable(['Pomodoro','Duration', 'Begin', 'End'],
pages.file.lists
.filter(item=>item.pomodoro)
.sort(item => item.end, 'desc')
.map(item=> {

    return [item.pomodoro, `${item.duration.as('minutes')} m`, item.begin, item.end]
})
)
dv.paragraph(table)

```
</pre>

### 概要视图

这个 DataView 脚本按日期对 Pomodoro 会话进行分类，呈现一个总结。

![image](https://cdn.pkmer.cn/covers/pomodoro-timer_1_2.png!pkmer)

<pre>
```dataviewjs
const pages = dv.pages();
const emoji = "🍅";
dv.table(
  ["日期", "Pomodoros", "总计"],
  pages.file.lists
    .filter((item) => item?.pomodoro == "WORK")
    .groupBy((item) => {
      if (item.end && item.end.length >= 10) {
        return item.end.substring(0, 10);
      } else {
        return "未知日期";
      }
    })
    .map((group) => {
      let sum = 0;
      group.rows.forEach((row) => (sum += row.duration.as("minutes")));
      return [
        group.key,
        group.rows.length > 5
          ? `${emoji} ${group.rows.length}`
          : `${emoji.repeat(group.rows.length)}`,
        `${sum} 分钟`,
      ];
    })
)
```
</pre>

### 任务跟踪

通过将番茄钟日志作为子列表来增强您的任务。每个条目详细说明了会话类型、持续时间和时间戳。

```dataviewjs
const pages = dv.pages();
const emoji = "🍅";
dv.table(
  ["任务", "番茄钟", "总计"],
  pages.file.tasks
    .filter((task) => task.children.some((child) => child.pomodoro == "WORK"))
    .map((task) => {
      let p = task.children
        .filter((child) => child.pomodoro == "WORK")
        .map((child) => child.duration.as("minutes"));
      let sum = p
        .reduce((a, b) => a+b,0)
      let pomodoros =
        p.length > 5 ? `${emoji} ${p.length}` : `${emoji.repeat(p.length)}`;
      return [task.text, pomodoros, `${sum} 分钟`];
    })
)
```

```



