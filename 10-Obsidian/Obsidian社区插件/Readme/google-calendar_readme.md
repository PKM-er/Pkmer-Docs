---
uid: 20231220112631
title: Obsidian 插件：【Readme】Google Calendar
tags: ['日期相关', '第三方工具集成', 'obsidian插件', 'readme']
description: 让你的 Obsidian 与您的 Google 日历进行交互
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Google Calendar

> [!Note] 插件名片
> - 插件名称：Google Calendar
> - 插件作者：YukiGasai
> - 插件说明：让你的 Obsidian 与您的 Google 日历进行交互
> - 插件分类：[' 日期相关 ', ' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/YukiGasai/obsidian-google-calendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?google-calendar)

## 概述

让你的 Obsidian 与您的 Google 日历进行交互

![Google Calendar](https://cdn.pkmer.cn/covers/google-calendar.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/YukiGasai/obsidian-google-calendar/master/README.md)

---

## Readme(翻译）

下面是 [[google-calendar]] 插件的自述翻译

# Google 日历

在 Obsidian 内管理您的 Google 日历

## 特点

- 列出事件
- 创建事件
- 编辑事件
- 删除事件
- 自动从事件创建笔记
- 将事件链接插入到笔记中

## 安装

- 从 [社区插件商店](obsidian://show-plugin?id=google-calendar) 进行一键安装
- 进入设置并激活插件
- 进入插件设置
- 创建一个自己的 OAuth 客户端（公共测试客户端已满，将不再起作用）
- 点击登录并使用 Google 进行身份验证

### 创建自己的 OAuth 客户端（很简单）

[这里](https://yukigasai.github.io/obsidian-google-calendar/#/Basics/Installation) 是一个逐步指南，描述了该过程并附有图片。

- [创建Google Cloud项目](https://console.cloud.google.com/projectcreate?)
- [激活Google日历API](https://console.cloud.google.com/marketplace/product/google/calendar-json.googleapis.com)
- [配置OAUTH屏幕](https://console.cloud.google.com/apis/credentials/consent?)
  - 选择 Extern
  - 填写必要的输入
  - 如果使用“@gmail”，请将您的电子邮件添加为测试者，并添加 gmail 和 googlemail
- [添加OAUTH客户端](https://console.cloud.google.com/apis/credentials/oauthclient)
  - 选择 Web 客户端
  - 将 `http://127.0.0.1:42813` 添加为 JavaScript 来源
  - 将 `https://google-auth-obsidian-redirect.vercel.app` 添加为 JavaScript 来源（仅在您想在移动设备上使用插件时才需要）
  - 将 `http://127.0.0.1:42813/callback` 添加为重定向 URI
  - 将 `https://google-auth-obsidian-redirect.vercel.app/callback` 添加为重定向 URI（仅在您想在移动设备上使用插件时才需要）
- 在设置选项卡中打开“使用自己的身份验证客户端”
- 在插件设置下的字段中添加密钥
- 按下登录按钮

使用方法

### 视图

#### 网页视图

一个到原始谷歌日历页面的网页框架

![](https://cdn.pkmer.cn/covers/google-calendar_1_0.png!pkmer)

#### 月视图

基于 [obsidian-calendar-ui](https://github.com/liamcain/obsidian-calendar-ui) 的日历，用于显示一个月内的事件

![](https://cdn.pkmer.cn/covers/google-calendar_1_1.png!pkmer)

#### 日视图

一种时间轴视图，可以查看一天内的所有事件

![](https://cdn.pkmer.cn/covers/google-calendar_1_2.png!pkmer)

#### 周视图

一种时间轴视图，可以查看一周内的所有事件

![](https://cdn.pkmer.cn/covers/google-calendar_1_3.png!pkmer)

#### 年视图

一个类似 Github 的日历视图，可以查看一整年的所有事件

![](https://cdn.pkmer.cn/covers/google-calendar_1_4.png!pkmer)

日程视图

按顺序查看所有事件的日程视图

![](https://cdn.pkmer.cn/covers/google-calendar_1_5.png!pkmer)

### 命令

| 名称                                            | 描述                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| 打开 Google 日历网页视图                   | 打开网页视图                                                         |
| 打开 Google 日历月视图                 | 打开月/日历视图                                              |
| 打开 Google 日历日视图                   | 打开日/时间轴视图                                                |
| 打开 Google 日历日程视图              | 打开日程视图                                                    |
| 插入 Google 事件                            | 将事件插入到活动文件中作为表格或列表                     |
| 插入 Google 事件代码块                   | 将代码块插入到活动文件中以显示三个视图            |
| 插入 Google 事件模板                    | 将模板字符串插入到活动文件中以插入事件信息 |
| 列出 Google 事件                              | 打开下拉菜单以查看今天的事件                                     |
| 列出 Google 日历                           | 打开下拉菜单以查看所有日历                                     |
| 创建 Google 日历事件                    | 打开空的详细视图以创建新事件                          |
| 从正文创建 Google 日历事件   | 从打开文件的 YAML 创建事件                             |
| Google 日历触发器自动导入             | 再次运行自动创建笔记功能                                  |
| 创建事件笔记                               | 为所选事件创建事件笔记                                 |
| 为当前事件创建事件笔记             | 为当前运行的所选事件创建事件笔记               |

### @注释

在文本中通过输入@today 或@01.01.2022 来引用 Google 日历事件，然后选择要插入的事件。

其他选项包括@tomorrow（明天）、@yesterday（昨天）、@+1（后一天）、@-1（前一天）。

### CodeBlock

该插件添加了一个自定义的 codeBlock gEvent，用于在文件中插入 Web、Day、Week、Month、Year 和 Schedule 视图。选项使用 yaml 解析。您可以使用视图的设置将配置复制为代码块。

#### 参数

````
    ```gEvent
        type: [web, month, day, schedule] 必需
        date: [today, tomorrow, yesterday, 特定日期] 可选
        width: 数字 可选
        height: 数字 可选
        navigation: 布尔值 只适用于时间轴视图 可选
        timespan: 数字 只适用于日程视图 可选
        include: [日历ID或名称的列表]
        exclude: [日历ID或名称的列表]
        theme: [light, dark, auto] 只适用于网页视图
        hourRange: [开始时间, 结束时间] 只适用于日视图
    ```
````

### 自动创建笔记

该插件允许您从 Google 事件自动生成笔记。

1. 要实现此功能，请在设置中激活它。
2. 选择一个导入日期范围。这是检查事件的范围。中心始终是今天。
3. 如果插件启动，包含“:obsidian:”的 Google 事件将创建新的笔记。

您还可以通过添加模板标题“:obsidian-UniTemplate:”来定义创建新笔记时应使用的模板。请确保激活核心插件 Templates 或 Templater 插件。

您还可以通过在文本前面添加文件夹位置来定义新笔记应保存的位置，例如 `：Folder/Path-obsidian:`

示例 `：Uni/Math-obsidian-UniTemplate:` 在 Math 文件夹中使用 UniTemplate 模板创建节点。

要将事件信息插入模板，请对两个插件使用 `{{gEvent.AnyField}}`

示例

```
事件描述

{{gEvent.description}}

```

要使用的字段在 [Google日历API](https://developers.google.com/calendar/api/v3/reference/events) 中定义，并可以从下拉菜单中选择。

使用@Annotation 将模板字符串插入已插入事件的文件中，将自动用事件信息替换模板。

使用每日笔记

为了使这个插件成为 Obsidian 中日历的一站式解决方案，您可以启用“显示每日笔记”设置。这将允许您在月视图中查看您的每日笔记和 Google 事件，并在打开事件选择时添加查看或创建每日笔记的选项。

![带有每日笔记的模态框](https://cdn.pkmer.cn/covers/google-calendar_1_6.png!pkmer)

感谢以下插件：

[obsidian-calendar-plugin](https://github.com/liamcain/obsidian-calendar-plugin)

[Obsidian Custom Frames](https://github.com/Ellpeck/ObsidianCustomFrames)

[Hotkeys for templates](https://github.com/Vinzent03/obsidian-hotkeys-for-templates)

[obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes)

## 赞助商

如果你喜欢这个插件，也许可以考虑赞助一下 👉👈

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q1G07N2)
