---
uid: 2023080322250376
title: Obsidian 插件：ProgressBar
tags: ['obsidian插件', 'readme']
description: 将CodeBlock根据时间或手动方式渲染为进度条。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ProgressBar

> [!Note] 插件名片
> - 插件名称：ProgressBar
> - 插件作者：Wei Zhang
> - 插件说明：将 CodeBlock 根据时间或手动方式渲染为进度条。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zwpaper/obsidian-progressbar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?progressbar)

## 概述

将 CodeBlock 根据时间或手动方式渲染为进度条。

![ProgressBar](https://cdn.pkmer.cn/covers/progressbar.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zwpaper/obsidian-progressbar/main/README.md)

---

## Readme(翻译）

下面是 [[progressbar]] 插件的自述翻译

# Obsidian ProgressBar

这是一个为 Obsidian（<https://obsidian.md>）生成进度条的代码块插件。

Obsidian ProgressBar 插件可以将 `progressbar` 代码块渲染为基于时间或手动的进度条，

支持以下类型：

- **day-year**：显示今年过去了多少天的进度条。
- **day-month**：显示本月过去了多少天的进度条。
- **day-week**：显示本周过去了多少天的进度条。
- **month**：显示今年过去了多少个月的进度条。
- **manual**：由用户指定的进度条。

![各种类型](./images/all-kinds.jpg)

## 配置

Obsidian ProgressBar 插件将在创建 `progressbar` 代码块时生效，并使用 [Yaml](https://yaml.org/) 进行配置。

例如：

```
    ```progressbar
    kind: day-year
    name: This Year
    ```
```

将生成：

![this year](./images/this-year.jpg)

### 支持的配置

这是一个示例配置，支持 obsidian 进度条，并附有一些备注

``` yaml

== 类型 ==

# 在指定基于时间的进度条时需要

# 如果手动指定值，则可选

种类：年中的天数

# == 名称 ==

# 指定进度条名称，在进度条前面

# 可选项，如果未指定将使用kind作为名称
名称：day-year

== 宽度 ==

指定进度条的宽度

# 可选的

宽度：50%

== 值 ==

指定进度条的当前值

# 在指定有效的类型时可选

当没有种类时需要

# 可能的格式：数字
值：10

# == 最大值 ==

指定进度条的最大值

# 在指定有效的类型时可选

当没有种类时需要

# 可能的格式：数字
值：25



