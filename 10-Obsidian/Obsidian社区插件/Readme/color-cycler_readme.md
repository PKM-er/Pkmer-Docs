---
uid: 20240312193744
title: Obsidian 插件：【Readme】Color cycler
tags: ['obsidian插件', 'readme']
description: 动态更改主题的强调颜色。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Color cycler

> [!Note] 插件名片
> - 插件名称：Color cycler
> - 插件作者：Taylor Brennan
> - 插件说明：动态更改主题的强调颜色。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tjbrennan/obsidian-color-cycler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?color-cycler)

## 概述

动态更改主题的强调颜色。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tjbrennan/obsidian-color-cycler/main/README.md)

---

## Readme(翻译）

下面是 [[color-cycler]] 插件的自述翻译

# 黑曜石颜色循环器

你喜欢默认的黑曜石主题，但很快就对你的强调颜色感到厌倦了吗？通过颜色循环器为你的基础主题增添一些调味料吧！

使用这个插件可以通过功能区菜单或命令面板动态更改强调颜色。

循环行为可以配置为递增、随机或预设颜色。

颜色是使用 [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 定义的。

## 用法

- 使用命令面板：`Color cycler: Cycle accent color`
- 使用功能菜单：点击 `Palette` 图标 <img width="25" alt="Screenshot 2024-02-28 at 13 01 42" src="https://github.com/tjbrennan/obsidian-color-cycler/assets/2440702/2d66679a-877e-4205-a234-33acc64e1fe0">

## 配置

### 行为

该插件提供三种不同的颜色循环行为，每种都有自己的高级选项：

- Increment: 在指定角度循环穿过色轮
- Random: 随机选择一种颜色
- Preset: 在预设颜色列表中循环

### 计时器

一个计时器可以被设置为在指定的时间间隔内自动循环颜色。当插件加载或颜色被手动循环时，计时器会重置。

### 状态栏

强调色的当前 HSL 值可以显示在状态栏中。这对于调试很有用。

## 支持

如果您喜欢使用这个插件，请考虑支持我的工作。
