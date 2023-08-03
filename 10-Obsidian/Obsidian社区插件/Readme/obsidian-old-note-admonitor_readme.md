---
uid: 2023080322235945
title: Obsidian 插件：【Readme】Old Note Admonitor
tags: ['obsidian插件', 'readme']
description: 这个Obsidian插件会在笔记未更新超过特定天数时显示警告。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Old Note Admonitor

> [!Note] 插件名片
> - 插件名称：Old Note Admonitor
> - 插件作者：tadashi-aikawa
> - 插件说明：这个Obsidian插件会在笔记未更新超过特定天数时显示警告。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tadashi-aikawa/obsidian-old-note-admonitor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-old-note-admonitor)

## 概述

这个Obsidian插件会在笔记未更新超过特定天数时显示警告。

![Old Note Admonitor](https://cdn.pkmer.cn/covers/obsidian-old-note-admonitor.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tadashi-aikawa/obsidian-old-note-admonitor/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-old-note-admonitor]] 插件的自述翻译


# 旧笔记提醒器

[![release](https://img.shields.io/github/release/tadashi-aikawa/obsidian-old-note-admonitor.svg)](https://github.com/tadashi-aikawa/obsidian-old-note-admonitor/releases/latest)
[![CI](https://github.com/tadashi-aikawa/obsidian-old-note-admonitor/workflows/CI/badge.svg)](https://github.com/tadashi-aikawa/obsidian-old-note-admonitor/actions)
![downloads](https://img.shields.io/github/downloads/tadashi-aikawa/obsidian-old-note-admonitor/total)

这个 Obsidian 插件会在笔记超过特定天数未更新时显示提醒。

![image](https://raw.githubusercontent.com/tadashi-aikawa/obsidian-old-note-admonitor/master/resources/image.png)

👥 对于用户

### ⏬ 安装

您可以通过 `Community plugins` > `Browse` 进行下载。

![image](https://raw.githubusercontent.com/tadashi-aikawa/obsidian-old-note-admonitor/master/resources/install.png)

### ⚙ 设置

#### 消息模板

如果今天是2022-09-11，便签上的日期是2022-09-01，

- 如果设置`${numberOfDays} days passed!`，则显示`10 days passed!`
- 如果设置`${numberOfDays} days passed since ${date}`，则显示`10 days passed since 2022-09-01`

`默认：内容已经超过${numberOfDays}天没有更新`

#### 参考日期的设置

该设置用于决定从哪里引用日期。

- 修改时间
- 前置内容
- 捕获组

`默认值：修改时间`

##### 修改时间

文件最后修改日期（= TFile.stat.mtime）。

##### 前置内容

![前置内容](https://raw.githubusercontent.com/tadashi-aikawa/obsidian-old-note-admonitor/master/resources/front-matter.png)

`前置内容键`选项可以指定任何键名。

`默认值：updated`

##### 捕获组

如果将`^// updated: (?<date>[0-9]{4}/[0-9]{2}/[0-9]{2})`设置为`捕获组模式`，则日期将被提取如下。

![capture-group](https://raw.githubusercontent.com/tadashi-aikawa/obsidian-old-note-admonitor/master/resources/capture-group.png)

`默认值：^// (?<date>[0-9]{4}/[0-9]{2}/[0-9]{2})`

#### 显示警告的最少天数

如果今天是2022年9月11日，而便签上的日期是2022年9月1日。

- 如果设置为10或更多，则显示警告
- 如果设置为小于10，则不显示警告

`默认值：180`

#### 触发器更新

- `打开文件时`：在切换活动文件后更新警告
- `打开或保存文件时`：在切换活动文件或（自动）保存文件后更新警告

#### 排除前缀路径模式

如果设置了，它不会在路径以其中一个模式开头的文件中显示警告。可以通过换行设置多个模式。

例如，您想要忽略以下文件。

- `Daily Report/10/2022-10-01.md`
- `Daily Report/10/2022-10-02.md`
- `Daily Report/11/2022-11-05.md`
- `Daily Report/11/2022-11-06.md`

您需要设置

```
Daily Report/
```

或者

```
Daily Report/10/
Daily Report/11/
```

### 🎨 样式

您可以通过编辑以下类来自定义警告框的样式。

- `.old-note-admonitor__old-note-container`
- `.old-note-admonitor__old-note-container:before`
- `.old-note-admonitor__old-note-container__warning`
- `.old-note-admonitor__old-note-container__warning:before`
- `.old-note-admonitor__old-note-container__error`
- `.old-note-admonitor__old-note-container__error:before`

详细信息请参考 `style.css`。

## 🖥️ 开发者需求

- 需求
  - [任务]

### 开发

```console
任务 初始化
任务 开发
```

### 发布

```console
task release VERSION=1.2.3
```

[Task]: https://github.com/go-task/task



