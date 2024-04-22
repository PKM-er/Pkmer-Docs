---
uid: 2024042221333971
title: Obsidian 插件：【Readme】Click Clack
tags: ['obsidian插件', 'readme']
description: 模拟打字机/机械键盘声音。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Click Clack

> [!Note] 插件名片
> - 插件名称：Click Clack
> - 插件作者：Acylation
> - 插件说明：模拟打字机/机械键盘声音。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Acylation/obsidian-click-clack)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?click-clack)

## 概述

模拟打字机/机械键盘声音。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Acylation/obsidian-click-clack/main/README.md)

---

## Readme(翻译）

下面是 [[click-clack]] 插件的自述翻译

# 黑曜石 Click Clack

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22click-clack%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[简体中文](README-ZH.md) | [English](README.md)

在 Obsidian 中模拟打字机/机械键盘的声音。

> [!Note]
> 最新版本：0.1.2
> 文档版本：0.1.2

## 安装

这个插件仍处于早期开发阶段。目前还无法从插件市场获取。您可以手动下载或使用 BRAT 插件。

### 手动安装

前往 [最新版本发布页面](https://github.com/Acylation/obsidian-click-clack/releases/latest)，下载 `main.js` 和 `manifest.json`，并将它们放在 `[yourvault]/.obsidian/plugins/click-clack` 目录中。

插件已捆绑了默认的声音资源。如果您想要更多变体，可以在插件的设置选项卡中找到 `下载` 按钮。点击它会从发布页面获取 `resources.zip` 并将其解压缩到 `[yourvault]/.obsidian/plugins/click-clack/resources` 目录中。如果自动下载出现错误，您也可以手动下载和解压缩资源。

### 通过 BRAT 安装

您可以在 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件中注册此存储库路径以安装并获取更新。

## 配置

在插件的设置选项卡中，您可以调整所有按键的声音音量，切换按键声音的开关并选择您喜欢的声音方案。

您还可以通过命令面板（`Ctrl` + `P`）切换按键声音的开关，搜索 `enable click clack sound` 或 `disable click clack sound`。

## 鸣谢

该项目基于论坛讨论 <https://forum.obsidian.md/t/typewriter-sounds/15474>，其中包含许多宝贵的设计建议。

第一批声音方案取自 [Writemonkey 3](https://writemonkey.com/wm3/index.php) 的 Click Clack 插件。非常感谢您提供迷人的资源！

## 路线图

- 设置界面
  - 自定义来源（常见的，返回？，ping？，）
    - 录音机和声音编辑器集成/工作流
  - 资源适应
    - 猴子类型
    - 机械振动
- 处理控制器字符
- 处理非编辑器区域
  - 包括画布 md 嵌入节点



