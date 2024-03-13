---
uid: 2023080322290020
title: Obsidian 插件：Upcoming
tags: ['obsidian插件', 'readme']
description: 可以快速查看即将来的每日笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Upcoming

> [!Note] 插件名片
> - 插件名称：Upcoming
> - 插件作者：Charlie Chao
> - 插件说明：可以快速查看即将来的每日笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/charliecm/obsidian-upcoming)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-upcoming)

## 概述

可以快速查看即将来的每日笔记。

![Upcoming](https://cdn.pkmer.cn/covers/obsidian-upcoming.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/charliecm/obsidian-upcoming/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-upcoming]] 插件的自述翻译

# Obsidian Upcoming

一个 [Obsidian](https://obsidian.md) 插件，可以在自己的面板/标签/窗口中打开即将到来（和/或过去）的 [每日笔记](https://help.obsidian.md/Plugins/Daily+notes)，以便您可以提前查看和计划。在使用提供的命令之前，请查看插件设置：

- **打开即将到来的笔记：** 如果当前活动面板中有每日笔记，则此命令将打开相对于该日期的即将到来的笔记。否则，它将从今天开始。
- **关闭笔记：** 关闭插件之前打开的所有每日笔记。

![演示](https://raw.githubusercontent.com/charliecm/obsidian-upcoming/main/demo.gif)

## 安装方法

从 Obsidian 内部...

1. 进入设置 → **社区插件**。
2. 禁用**安全模式**。
3. 点击**浏览**，搜索**Upcoming**，然后点击**安装**。
4. 点击切换按钮以启用插件。

对于手动安装，请下载此存储库并将 `main.js` 和 `manifest.json` 复制到您的保险库中：`VaultFolder/.obsidian/plugins/obsidian-upcoming/`。

## 开发

1. 克隆这个仓库。
2. 运行 `yarn` 安装依赖。
3. 运行 `yarn dev` 以启动编译并进入监视模式。
4. 运行 `bash install-built.sh /path/to/your/vault -d` 以创建内置文件的符号链接到你的保险库，以便进行快速开发。

## 发布

1. 运行 `yarn build`。
2. 在 `manifest.json` 和 `versions.json` 中提升版本号。
3. 在 `CHANGELOG.md` 中添加变更内容。
4. 在 Github 中创建一个新的发布，附上变更日志文本以及构建好的 `main.js` 和 `manifest.json` 文件。

## 支持

如果您真的喜欢这个插件并希望支持它的开发，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/charliecm) 🙂 谢谢！
