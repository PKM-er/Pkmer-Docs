---
uid: 20230803212912
title: Obsidian 插件：【Readme】Obsidian Tabs
tags: ['界面相关', 'obsidian插件', 'readme']
description: 为 Obsidian 添加标签页模式，像你的浏览器一样
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Tabs

> [!Note] 插件名片
> - 插件名称：Obsidian Tabs
> - 插件作者：foreveryone
> - 插件说明：为 Obsidian 添加标签页模式，像你的浏览器一样
> - 插件分类：['界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/gitobsidiantutorial/obsidian-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tabs)

## 概述

为 Obsidian 添加标签页模式，像你的浏览器一样



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-tabs]] 插件的自述翻译



# 堇青石标签

### Obsidian标签插件
在文件资源管理器中按住Ctrl并单击一个文档时，会在新窗格中打开该文档，从而激活标签视图。查看器中只显示一个文档，并且可以通过选择其他标签来切换活动文档。

[![video](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/demo.webp)](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/demo.webp)

### 特点：
- 在垂直分割时通过打开新窗格来创建选项卡，例如默认的工作区配置。

- 单击选项卡概览中的选项卡以将其聚焦。

- 适用于[pane relief插件](https://github.com/pjeby/pane-relief)。

- 当只有一个窗格打开时自动隐藏选项卡栏。

- 与[maximise pane插件](https://github.com/deathau/maximise-active-pane-obsidian)完全兼容。

- [多个选项卡窗格](https://i.imgur.com/O2fQx2U.mp4)。

- 打开足够多的选项卡后，可以打开[第二行](https://i.imgur.com/iZJ5byx.mp4)。（可选）

- 相对于主窗格的较小选项卡样式。（可选）

- 隐藏未聚焦选项卡上的按钮以提高标题的可见性。（可选）

- 通过ctrl+tab带出的下一个选项卡是下划线选项卡。相反，通过ctrl+shift+tab带入聚焦的选项卡是下划线选项卡左侧的选项卡。（可选）

- 并排视图\[[演示](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp)和[说明](#using-split-view)\]。

- 持续努力通过补丁来最大限度地提高[主题兼容性](https://github.com/gitobsidiantutorial/obsidian-tabs#theme-compatibility)。

### 使用方法：
您可以通过Obsidian中的Community Plugins选项卡安装插件。

#### 手动安装
- 从“Releases”部分下载最新版本。
- 从存档中提取插件文件夹到您的vault的插件文件夹：<vault>/.obsidian/plugins/
- 注意：在某些机器上，.obsidian文件夹可能是隐藏的。
- 重新加载Obsidian。
- 启用插件。

#### 使用分割视图
[![video](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp)](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/vids/horizontalconfigure.webp)

将单窗格工作区的唯一窗格水平分割。垂直分割左窗格（如果您不使用窗格缓解插件，也可以分割右窗格）。

如果您想调整分割大小，请在插件设置中启用**水平分割**，以便按比例调整窗格大小，或者关闭 Obsidian 标签。调整窗格大小后，您可以根据自己的喜好继续使用 Obsidian 标签。

[分割视图使用示例](https://i.imgur.com/lStwTNI.mp4)。已将一个标签链接到右侧的窗格，以便更轻松地更改其内容。当只有一个文档需要关注时，使用最大化窗格插件。

---

[<img src="https://ko-fi.com/img/Kofi_Logo_Blue.svg" height="40px" />](https://ko-fi.com/foreveryone)

[如果您喜欢这个插件，可以给我买杯咖啡 :) ](https://ko-fi.com/foreveryone)

---

### 问题：
- 当最后一个窗格被聚焦时，**没有**任何选项卡被下划线标记。通过按下ctrl+tab键来聚焦的选项卡是最左边的选项卡。当使用并排视图时，这个规则不适用。

- 选项卡不能水平分割。

- 聚焦的选项卡被从选项卡概览中移除。为了更容易使用Pane Relief快捷方式，使用选项卡编号和下划线。

- 在设置分割视图时必须遵守操作顺序，不能在已经处于选项卡模式时创建分割视图。

- 窗格插件中的反向链接会导致Pane Relief产生意外行为。这不是由该插件引起的。

- 在打开新选项卡或选择不同选项卡时，选项卡概览中会出现轻微闪烁。

如果您发现了此处未列出的问题，请[随时记录](https://github.com/gitobsidiantutorial/obsidian-tabs/issues)。

### 主题兼容性
请通过[问题功能](https://github.com/gitobsidiantutorial/obsidian-tabs/issues)通知我是否有主题与此插件的CSS冲突。如果我能找到一个简单的解决方案，我将分享一个额外的补丁，当使用该主题时也必须启用。

- Kepano的Minimal主题
  - [可用的补丁](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_minimal_theme.css)
- Nickmilo的Cybertron主题
  - [可用的补丁](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_cybertron_theme.css)
- Whyt-Byte的Blue Topaz主题
  - [可用的补丁](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_blue_topaz.css)
- SlRVB的ITS主题
  - [可用的补丁](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_ITS.css)
- SantiYounger的Wasp主题
  - 补丁已集成到主题中。
- mgmeyers的California Coast主题
  - [可用的补丁](https://raw.githubusercontent.com/gitobsidiantutorial/obsidian-tabs/main/compatch_california_coast.css)



