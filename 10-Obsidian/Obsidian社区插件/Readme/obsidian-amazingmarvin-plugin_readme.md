---
uid: 2023080322135947
title: Obsidian 插件：【Readme】Amazing Marvin
tags: ['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
description: 一个简单的插件，可以帮助从Amazing Marvin获取数据
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Amazing Marvin

> [!Note] 插件名片
> - 插件名称：Amazing Marvin
> - 插件作者：Shirayuki Nekomata
> - 插件说明：一个简单的插件，可以帮助从Amazing Marvin获取数据
> - 插件分类：['第三方工具集成', '任务管理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ikuyarihS/obsidian-amazingmarvin-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-amazingmarvin-plugin)

## 概述

一个简单的插件，可以帮助从Amazing Marvin获取数据

![Amazing Marvin](https://cdn.pkmer.cn/covers/obsidian-amazingmarvin-plugin.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ikuyarihS/obsidian-amazingmarvin-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-amazingmarvin-plugin]] 插件的自述翻译


[![发布](https://github.com/ikuyarihS/obsidian-amazingmarvin-plugin/actions/workflows/release.yaml/badge.svg)](https://github.com/ikuyarihS/obsidian-amazingmarvin-plugin/actions/workflows/release.yaml)
[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/ikuyarihS/obsidian-amazingmarvin-plugin?style=flat&sort=semver)](https://github.com/ikuyarihS/obsidian-amazingmarvin-plugin/releases/latest)
![GitHub所有发布](https://img.shields.io/github/downloads/ikuyarihS/obsidian-amazingmarvin-plugin/total?style=flat)

这是一个Obsidian插件（https://obsidian.md）。

**注意：**

您将需要来自Amazing Marvin的API令牌。
您可以在此处获取 - https://app.amazingmarvin.com/pre?api

有关更多信息，请阅读此处 - https://github.com/amazingmarvin/MarvinAPI/wiki/Marvin-API
## 示例

![image](https://user-images.githubusercontent.com/19921765/123458209-fbf5ac80-d60e-11eb-81f8-767a2fd2142c.png)

将会渲染为

![image](https://user-images.githubusercontent.com/19921765/123458235-02842400-d60f-11eb-9af0-fd9399456742.png)

## 配置
配置必须以有效的JSON格式放置，如果无法转换（依赖于`JSON.parse`），插件实际上会引发错误。
有效配置的示例：
```json
{
    "title": "Due today",
    "type": "due-today",
    "showNote": true
}
```

### 所有配置项：

| 名称          | 描述                                                                                   | 类型                   | 默认值   |
|--------------|---------------------------------------------------------------------------------------|------------------------|---------|
| title        | 区块的标题                                                                             | 字符串                 | -       |
| type         | 区块的类型                                                                             | "today" \| "due-today" | -       |
| showNote     | 是否显示备注。默认为true。                                                             | 布尔值                | false   |
| colorTitle   | 是否给类别、项目和任务的名称上色。如果为false，则只给图标上色。                           | 布尔值                | true    |
| hideEmpty    | 是否隐藏空目录。默认为true。                                                           | 布尔值                | true    |
| inheritColor | 是否从最近的父级继承颜色。默认为true。                                                 | 布尔值                | true    |
| showLabel    | 是否渲染标签。默认为true。                                                             | 布尔值                | true    |
| isAnimated   | 是否使用动画过渡效果。                                                                 | 布尔值                | true    |

#### 配置接口

```ts
export interface Query {
  title?: string;
  type?: 'today' | 'due-today';
  showNote: boolean;
  colorTitle: boolean;
  hideEmpty: boolean;
  inheritColor: boolean;
  showLabel: boolean;
  isAnimated: boolean;
}

export const DEFAULT_QUERY: Query = {
  colorTitle: true,
  showNote: false,
  hideEmpty: true,
  inheritColor: true,
  showLabel: true,
  isAnimated: true,
};
```

## 支持
如果您觉得这个插件有价值，请让我知道！听到使用我所构建的东西的人的反馈是很棒的。如果您真的喜欢这个插件，并想通过给我买杯咖啡来表达这一点，请随意！

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K352ZLD)

_请永远不要感到有义务！_



