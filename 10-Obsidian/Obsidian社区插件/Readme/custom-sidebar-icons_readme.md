---
uid: 2024042221321105
title: Obsidian 插件：【Readme】Custom Sidebar Icons
tags: ['obsidian插件', 'readme']
description: 自定义侧边栏工作区文档图标。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Custom Sidebar Icons

> [!Note] 插件名片
> - 插件名称：Custom Sidebar Icons
> - 插件作者：RavenHogWarts
> - 插件说明：自定义侧边栏工作区文档图标。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-sidebar-icons)

## 概述

自定义侧边栏工作区文档图标。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RavenHogWarts/obsidian-custom-sidebar-icons/master/README.md)

---

## Readme(翻译）

下面是 [[custom-sidebar-icons]] 插件的自述翻译

# 自定义侧边栏图标

自定义 Obsidian 侧边栏中固定文件的图标。

<div align="center">

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22custom-sidebar-icons%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json) ![GitHub stars](https://img.shields.io/github/stars/RavenHogWarts/obsidian-custom-sidebar-icons?style=flat) ![latest download](https://img.shields.io/github/downloads/RavenHogWarts/obsidian-custom-sidebar-icons/latest/total?style=plastic)

[![Github release](https://img.shields.io/github/manifest-json/v/RavenHogWarts/obsidian-custom-sidebar-icons?color=blue)](https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons/releases/latest) ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/RavenHogWarts/obsidian-custom-sidebar-icons?include_prereleases&label=BRAT%20beta)

[ [中文](https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons/blob/master/README_ZH.md) | English ]

</div>

该插件允许您自定义 Obsidian 侧边栏中固定文件的图标，使您的工作区更加个性化和易于导航。

## 用法

图像可以从在线 URL、本地相对（或绝对）文件路径、base64 编码或内联 SVG 标记加载：

- 在线 URL
  - 示例：`https://www.baidu.com/favicon.ico`
- 本地图像
  - 相对路径：`.obsidian/svg/RavenHogwarts.svg`
  - 绝对路径（Unix 风格）：`/Users/RavenHogwarts/Pictures/RavenHogwarts.jpg`
  - 绝对路径（Windows 风格）：`D:\RavenHogwarts.png`，`D:/RavenHogwarts.png`
- Base64 编码
  - 以 `data:` 开头
- SVG 标记
  - 包含在 `<svg></svg>` 标记中

## 支持

如果您发现这个插件很有用，并希望支持它的开发，您可以通过以下方式赞助我：微信、支付宝，或者 [爱发电捐赠](https://afdian.net/a/ravenhogwarts)。任何金额都欢迎，谢谢！

<p align="center">
<img src="https://s2.loli.net/2024/04/02/4lCUdaSf5bOXEPM.png" width="500px">
</p>

## 安装

### 从插件社区安装

[点击安装](https://obsidian.md/plugins?id=custom-sidebar-icons)，或者：

- 打开 Obsidian 并转到 设置 > 社区插件
- 搜索 `Custom Sidebar Icons`
- 点击 `安装`
- 首先，安装 [BRAT插件](https://obsidian.md/plugins?id=obsidian42-brat)：
- 在 BRAT 插件中，点击“添加 Beta 插件”
- 输入<https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons>
- 在“第三方插件”中启用“自定义侧边栏图标”

### 手动安装

- 从 [发布页面](https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons/releases/latest) 下载最新版本
- 将 `main.js` 和 `manifest.json` 复制到您的保险库文件夹 `VaultFolder/.obsidian/plugins/custom-sidebar-icons/`
- 重新加载插件并在 `第三方插件` 中启用 `Custom Sidebar Icons`

## 如何构建

- `git clone https://github.com/RavenHogWarts/obsidian-custom-sidebar-icons` 克隆存储库。
- `npm i` 安装依赖项。
- `npm run dev` 启动实时编译。
- `npm run build` 构建用于生产。

## 致谢

在开发 `Custom Sidebar Icons` 插件期间，我从 [Benature](https://github.com/Benature) 的项目 [obsidian-metadata-icon](https://github.com/Benature/obsidian-metadata-icon) 中汲取灵感并整合了一些代码结构。我特别感谢这个项目及其贡献者为开源社区所做的贡献，这些贡献极大地促进了 Obsidian 插件生态系统的发展。如果您也对他们的项目感兴趣，请支持并关注 [obsidian-metadata-icon](https://github.com/Benature/obsidian-metadata-icon)。
