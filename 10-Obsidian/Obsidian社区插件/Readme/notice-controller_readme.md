---
uid: 2024031219323571
title: Obsidian 插件：【Readme】Notification Controller
tags: ['obsidian插件', 'readme']
description: Manages notifications at startup.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Notification Controller

> [!Note] 插件名片
> - 插件名称：Notification Controller
> - 插件作者：juan-miii
> - 插件说明：Manages notifications at startup.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/juan-miii/obsidian-notice-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notice-controller)

## 概述

Manages notifications at startup.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/juan-miii/obsidian-notice-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[notice-controller]] 插件的自述翻译

# 黑曜石通知插件

---

## 🌐 概述

通知插件是一个强大的工具，用于控制 Obsidian 应用程序中的通知。它主要用于自动删除社区插件的**调试启动时间**通知。

## 🚀 特性

- **移除启动通知**: 插件在指定延迟后在 DOM 加载后移除通知。
- **设置选项卡**: 插件在 Obsidian 设置视图中添加了一个设置选项卡。更多细节可以在 [设置](README.md#⚙️-settings) 部分找到。

## 🎯 使用

安装并通过 Obsidian 应用程序上的配置启用插件后，可以通过设置选项卡对插件进行配置。当 Obsidian 工作区准备就绪时，它将在指定的延迟后移除所有通知。

## ⚙️ 设置

`NoticePlugin` 的设置可以通过插件添加的设置选项卡进行访问和修改。默认设置可以在 `src/settings/settings` 中找到。

- `delayInSeconds`：接受 **0** 到 **60** 之间的值（*秒*）。**0** 保留用于保持通知持久。

## 📜 更新日志

要查看详细的更改列表，请查看 [CHANGELOG](.github/CHANGELOG.md)。

## 🛠️ 使用的技术

This project uses Typescript to provide type checking and documentation. The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

## 🎓 第一次开发插件吗？

请查看官方示例存储库<https://github.com/obsidianmd/obsidian-sample-plugin> 获取更多信息。

## 📚 API 文档

**注意：** Obsidian API 仍处于早期阶段，随时可能发生变化！

请参阅 <https://github.com/obsidianmd/obsidian-api>

## 📄 许可证

This project is licensed under the terms of the MIT [license](LICENSE).
