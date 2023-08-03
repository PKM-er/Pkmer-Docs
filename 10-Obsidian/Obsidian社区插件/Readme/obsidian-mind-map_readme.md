---
uid: 2023080322223587
title: Obsidian 插件：Mind Map
tags: ['界面相关', '思维导图', 'obsidian插件', 'readme']
description: 将 Obsidian 笔记作为思维导图使用和查看。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Mind Map

> [!Note] 插件名片
> - 插件名称：Mind Map
> - 插件作者：James Lynch
> - 插件说明：将 Obsidian 笔记作为思维导图使用和查看。
> - 插件分类：[' 界面相关 ', ' 思维导图 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lynchjames/obsidian-mind-map)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-mind-map)

## 概述

将 Obsidian 笔记作为思维导图使用和查看。

![Mind Map](https://cdn.pkmer.cn/covers/obsidian-mind-map.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lynchjames/obsidian-mind-map/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-mind-map]] 插件的自述翻译

# Obsidian 思维导图

![GitHub工作流状态](https://img.shields.io/github/workflow/status/lynchjames/obsidian-mind-map/Release%20Build?logo=github&style=for-the-badge) ![GitHub发布（最新的SemVer）](https://img.shields.io/github/v/release/lynchjames/obsidian-mind-map?style=for-the-badge&sort=semver)

该存储库包含一个用于 [Obsidian](https://obsidian.md/) 的插件，可以使用 [Markmap](https://markmap.js.org/) 将 Markdown 笔记显示为思维导图。

类似的插件也适用于 [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode)。

## 特点

- 将当前笔记预览为思维导图
- 当您选择其他窗格时，思维导图预览会更新，类似于 [本地图](https://forum.obsidian.md/t/how-to-open-a-local-graph-view-pane-on-the-right-sidebar/7190)、[大纲](https://publish.obsidian.md/help/Plugins/Outline) 和 [反向链接](https://publish.obsidian.md/help/Plugins/Backlinks) 窗格

![思维导图演示图片](https://raw.githubusercontent.com/lynchjames/obsidian-mind-map/main/images/mind-map-demo.png)

## 用法

您可以使用命令打开当前笔记的思维导图预览。

![思维导图预览命令](https://raw.githubusercontent.com/lynchjames/obsidian-mind-map/main/images/mind-map-preview-command.png)

### 预览更多选项菜单

思维导图预览视图有来自“更多选项”菜单的 2 个选项：

![思维导图预览更多选项](https://raw.githubusercontent.com/lynchjames/obsidian-mind-map/main/images/mind-map-view-more-options.png)

#### 锁定

允许您将思维导图预览窗格固定在当前笔记上，以便您可以选择其他笔记，同时保持当前思维导图不变。在思维导图预览窗格的标题栏中会出现一个锁定图标。单击锁定图标即可取消锁定。

#### 复制截图

将思维导图的 SVG 副本复制到剪贴板，以便您可以将其粘贴到 Obsidian 的笔记中或粘贴到您选择的图像编辑器中。

## 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.9.20**。

安装

从 Obsidian 的 0.9.7 版本开始，可以直接在应用程序内安装此插件。该插件可以在“设置”窗格下的“第三方插件”中找到，该窗格可以访问“社区插件”目录。

## 手动安装

1. 下载 [最新版本](https://github.com/lynchjames/obsidian-mind-map/releases/latest)
2. 从压缩包中提取出 obsidian-day-planner 文件夹，放入你的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，你可以按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
3. 重新加载 Obsidian
4. 如果提示安全模式，你可以禁用安全模式并启用插件。

## 对于开发者

欢迎并感谢您的 Pull requests。😀

如果您想为该插件的开发做出贡献，请按照 [CONTRIBUTING.md](CONTRIBUTING.md) 中提供的指南进行操作。

捐赠

此插件免费提供。如果您想向我捐赠一些东西，可以通过 [PayPal](https://paypal.me/lynchjames2020) 进行捐赠。谢谢！
