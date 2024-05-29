---
uid: 2024052908400268
title: Obsidian 插件：Scroll Speed
tags: ['界面优化', '快捷键', 'obsidian插件']
description: 此插件帮你改变 Obsidian 笔记中的页面滚动速度。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Scroll Speed

> [!Note] 插件名片
> - 插件名称：Scroll Speed
> - 插件作者：Florian Ludewig
> - 插件说明：此插件帮你改变 Obsidian 笔记中的页面滚动速度。
> - 插件分类：[' 界面优化 ', ' 快捷键 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/flolu/obsidian-scroll-speed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scroll-speed)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flolu/obsidian-scroll-speed/master/README.md)

![Scroll Speed](https://cdn.pkmer.cn/covers/scroll-speed.PNG!pkmer)

## 概述

这个插件允许你在 Obsidian 笔记中改变滚动速度。

功能：

- 滚动速度：调整鼠标滚动灵敏度，1 为超慢，10 为非常快。

安装：

1. 前往最新的 [发布页面](https://github.com/flolu/obsidian-scroll-speed/releases/latest)
2. 下载 `main.js` 和 `manifest.json`
3. 创建 `.obsidian/plugins/scroll-speed` 目录
4. 将 `main.js` 和 `manifest.json` 移动到 `.obsidian/plugins/scroll-speed`
5. 重新启动 Obsidian

使用：

从 `设置` -> `插件选项` -> `滚动速度` 访问插件设置

- 鼠标滚动速度（`1` 为默认速度，数值越大滚动越快）
- Alt 键倍数（按下 `ALT` 键时，将滚动速度乘以此数）

开发：

1. 将存储库克隆到 `.obsidian/plugins/` 目录
2. 安装依赖 `npm install`
3. 运行 `npm run dev` 并进行更改
4. `CTRL+P` -> `重新加载应用程序，但不保存` 以在 Obsidian 中重新加载插件

Credits：

- 图标由 [Darius Dan](https://www.flaticon.com/authors/darius-dan) 制作，来自 [www.flaticon.com](https://www.flaticon.com)

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



