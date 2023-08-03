---
uid: 2023080322172864
title: Obsidian 插件：【Readme】Drag-n-Drop for blocks
tags: ['obsidian插件', 'readme']
description: 允许使用拖放的方式移动/复制/创建块，就像Logseq或Roam一样。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Drag-n-Drop for blocks

> [!Note] 插件名片
> - 插件名称：Drag-n-Drop for blocks
> - 插件作者：Artem Barmin
> - 插件说明：允许使用拖放的方式移动/复制/创建块，就像Logseq或Roam一样。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/artem-barmin/obsidian-block-drag-n-drop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-drag-n-drop-plugin)

## 概述

允许使用拖放的方式移动/复制/创建块，就像Logseq或Roam一样。

![Drag-n-Drop for blocks](https://cdn.pkmer.cn/covers/obsidian-drag-n-drop-plugin_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/artem-barmin/obsidian-block-drag-n-drop/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-drag-n-drop-plugin]] 插件的自述翻译


[![项目状态：不活跃 - 该项目已达到稳定、可用的状态，但不再进行积极开发；支持/维护将根据时间提供。](https://www.repostatus.org/badges/latest/inactive.svg)](https://www.repostatus.org/#inactive)
![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/artem-barmin/obsidian-block-drag-n-drop)
# 演示

![演示](https://raw.githubusercontent.com/artem-barmin/obsidian-block-drag-n-drop/master/demo/demo.gif)

# 特点

-   ✅ 在同一窗格和不同窗格中拖放列表项
-   ✅ 3种模式：
    -   嵌入块 - 在不同窗格之间移动的默认模式
    -   移动块 - 在同一窗格中移动的默认模式
    -   复制块 - Shift + 拖动
-   ✅ 重新排序项目时保持其嵌套级别（类似于Notion）
    -   将拖动的项目放在缩进点•的**右侧**，以将其嵌套在前一个项目下方
    -   将拖动的项目放在缩进点•的**左侧**，以保持缩进级别并重新排序项目
-   ✅ 自动生成拖动块的引用链接
-   ✅ 实时编辑器支持

# 没有计划

-   [ ] 支持任意块拖放 - 段落、标题等

请随意在此处创建功能请求：https://github.com/artem-barmin/obsidian-block-drag-n-drop/issues

如何使用

您可以在边栏中看到一个拖放处理程序。您可以将其拖动并放置在您想要的行上。

目前，您只能拖动列表项，因此处理程序只会出现在属于列表的行附近。

## 默认设置

-   在不使用修饰符的情况下，从一个窗格拖放到另一个窗格将创建块的嵌入链接。块的ID将自动创建。
-   在同一个窗格中不使用修饰符的情况下，拖放将移动块。
-   使用“Shift”修饰符进行拖放将复制块。

您可以在插件设置选项卡中更改设置的行为。

# 如何安装

从Obsidian内部

您可以通过以下步骤在Obsidian中激活此插件：

- 打开设置>第三方插件
- 确保安全模式已关闭
- 点击浏览社区插件
- 搜索“拖放”
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

## 手动安装

从最新版本中下载 main.js、manifest.json 和 styles.css 文件，并将它们放入 <vault>/.obsidian/plugins/obsidian-outliner 文件夹中。

# 限制

插件仅在实时预览编辑器中开发和测试。不支持旧版编辑器。



