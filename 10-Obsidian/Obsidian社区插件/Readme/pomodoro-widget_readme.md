---
uid: 2024031219330007
title: Obsidian 插件：【Readme】Pomodoro Widget
tags: ['obsidian插件', 'readme']
description: 提供了一个基于番茄钟的小部件。它被设计为触觉反馈，并具有持续的滴答声和可以切换的警报声。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Pomodoro Widget

> [!Note] 插件名片
> - 插件名称：Pomodoro Widget
> - 插件作者：bitegw
> - 插件说明：提供了一个基于番茄钟的小部件。它被设计为触觉反馈，并具有持续的滴答声和可以切换的警报声。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bitegw/obsidian-pomodoro-widget)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pomodoro-widget)

## 概述

提供了一个基于番茄钟的小部件。它被设计为触觉反馈，并具有持续的滴答声和可以切换的警报声。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bitegw/obsidian-pomodoro-widget/main/README.md)

---

## Readme(翻译）

下面是 [[pomodoro-widget]] 插件的自述翻译

【机翻】

# 黑曜石番茄钟小部件插件

这是一个为 Obsidian（<https://obsidian.md>）设计的插件，它为应用程序添加了一个番茄钟小部件。它基于原始的番茄厨房计时器，需要手动设置时间并在活动时不断地滴答以保持专注，尽管这个小部件也可以通过按钮设置并自动重置。还提供了一个秒表。

您可以自定义小部件切换是否出现在功能区或状态栏中，或仅作为一个命令。将小部件拖动到角落将使其锚定在那个角落，这样您就可以调整窗口大小。

## 主题支持

此插件使用官方样式名称，因此小部件将适应任何主题。

### 一些例子

![主题示例](https://cdn.pkmer.cn/covers/pomodoro-widget_2_0.png!pkmer)

如果您想自定义它，请参考 styles.css 中的类名。所有名称都以 '*pomo-*' 开头。

- 从发布页面下载 `main.js`、`styles.css`、`manifest.json` 文件，并将它们添加到您的保险库中的 `.obsidian/plugins/pomodoro-widget/` 文件夹中。

# 对于插件开发者

我已经将小部件功能与时钟分开，因此您应该能够在自己的插件中轻松使用小部件类，只需确保您复制相关的样式（'*pomo-hidden, pomo-widget-\**'）。

## 从源代码构建

- 将存储库克隆到您的保险库中的 `.obsidian/plugins/` 文件夹中。
- 确保您的 NodeJS 至少是 v16（`node --version`）。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 生成 `main.js` 文件。

## 贡献

这个项目欢迎贡献，只需提交一个拉取请求。
