---
uid: 2023080322292319
title: Obsidian 插件：【Readme】WakaTime
tags: ['效率', '美化', '统计', 'obsidian插件', 'readme']
description: WakaTime Obsidian插件，用于从您的 Obsidian 使用活动中自动生成，使用情况的度量、数据报告和时间跟踪。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：WakaTime

> [!Note] 插件名片
> - 插件名称：WakaTime
> - 插件作者：WakaTime
> - 插件说明：WakaTime Obsidian插件，用于从您的 Obsidian 使用活动中自动生成，使用情况的度量、数据报告和时间跟踪。
> - 插件分类：['效率', '美化', '统计', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/wakatime/obsidian-wakatime)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-wakatime)

## 概述

WakaTime Obsidian插件，用于从您的 Obsidian 使用活动中自动生成，使用情况的度量、数据报告和时间跟踪。

![WakaTime](https://cdn.pkmer.cn/covers/obsidian-wakatime.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/wakatime/obsidian-wakatime/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-wakatime]] 插件的自述翻译


# Obsidian的WakaTime

[WakaTime][wakatime]是一个开源的Obsidian插件，可以根据您在Obsidian中的使用活动自动生成度量、洞察和时间跟踪。

## 安装

1. 在 Obsidian 中，点击 `设置` → `社区插件` → `浏览`。

2. 搜索 `wakatime`，点击 WakaTime 插件。

3. 点击 `安装` 按钮。

4. 点击 `启用` 按钮。

5. 输入你的 [API 密钥][api key]，然后按下 `enter` 键。

6. 使用 Obsidian，你的活动将显示在你的 [WakaTime 仪表盘](https://wakatime.com) 上。

使用方法

访问[https://wakatime.com](https://wakatime.com)以查看您的编码活动。

![项目概览](https://wakatime.com/static/img/ScreenShots/Screen-Shot-2016-03-21.png)

要编辑您的API密钥，请打开“命令面板”，然后键入“WakaTime”，选择“WakaTime API密钥”命令。

## 故障排除

[如何调试插件][how to debug]指南展示了如何使用[插件状态页面][plugins status page]来检查最后一次从编辑器接收到的编码活动。

有关更一般的故障排除信息，请参阅[wakatime-cli故障排除部分][wakatime-cli help]。

## 贡献

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

## 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。



