---
uid: 20230803231105
title: Obsidian 插件：Auto Class
tags: ['obsidian插件', 'readme']
description: 根据笔记路径自动应用CSS类到markdown视图。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232616
---

# Obsidian 插件：Auto Class

> [!Note] 插件名片
> - 插件名称：Auto Class
> - 插件作者：OfficerHalf
> - 插件说明：根据笔记路径自动应用 CSS 类到 markdown 视图。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/OfficerHalf/obsidian-auto-class)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-class)

## 概述

根据笔记路径自动应用 CSS 类到 markdown 视图。

![Auto Class](https://cdn.pkmer.cn/covers/auto-class.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/OfficerHalf/obsidian-auto-class/main/README.md)
>

---

## Readme(翻译）

下面是 [[auto-class]] 插件的自述翻译

## 自动分类

[![质量门状态](https://sonarcloud.io/api/project_badges/measure?project=OfficerHalf_obsidian-auto-class&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=OfficerHalf_obsidian-auto-class)

一个 Obsidian 插件，可以根据笔记的路径和标签自动将 CSS 类应用于 Markdown 视图，就像您在 `cssClasses` YAML 键中添加了它们一样。结合针对 CSS 类的 CSS 代码片段，您可以在单个存储库中的不同路径上应用不同的代码片段，而无需自己添加任何 HTML 或 CSS 类。

### 安装

通过使用 [BRAT插件](https://github.com/TfTHacker/obsidian42-brat) 并使用存储库 `OfficerHalf/obsidian-auto-class`，从社区插件注册表中安装名为 Auto Class 的插件，或者通过将发布文件（`main.js`，`manifest.json` 和 `styles.css`）复制到您的 vault 中的 `.obsidian/plugins/auto-class` 目录中手动安装。

### 使用

可以根据笔记的路径或标签应用类。在设置中，配置文件夹路径或标签以及要应用于该文件夹的子文件夹或具有该标签的文件的类。对于高级用例，可以在设置中启用全局匹配。

![AutoClass](doc/screenshot.png)

配置完成后，下次更新视图时将应用这些类。

### 贡献

请随意提出问题或打开 PR。
