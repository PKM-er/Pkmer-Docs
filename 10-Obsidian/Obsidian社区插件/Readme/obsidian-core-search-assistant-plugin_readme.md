---
uid: 20230803231105
title: Obsidian 插件：Core Search Assistant
tags: ['搜索/排序', '界面相关', '美化', 'obsidian插件', 'readme']
description: 增强内置搜索：键盘界面、卡片预览、更大的预览
author: AI
type: readme
draft: false
editable: false
modified: 20230803232527
---

# Obsidian 插件：Core Search Assistant

> [!Note] 插件名片
> - 插件名称：Core Search Assistant
> - 插件作者：qawatake
> - 插件说明：增强内置搜索：键盘界面、卡片预览、更大的预览
> - 插件分类：[' 搜索/排序 ', ' 界面相关 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qawatake/obsidian-core-search-assistant-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-core-search-assistant-plugin)

## 概述

增强内置搜索：键盘界面、卡片预览、更大的预览

![Core Search Assistant](https://cdn.pkmer.cn/covers/obsidian-core-search-assistant-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qawatake/obsidian-core-search-assistant-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-core-search-assistant-plugin]] 插件的自述翻译

# 核心搜索助手

该插件通过提供以下功能增强内置搜索功能：

- **键盘界面**，
- **卡片视图**，
- **更大的预览**，
- **自动预览**，

![main-min](https://user-images.githubusercontent.com/38106890/150084212-d47733c7-3e84-437c-a257-5dd7ee6a8be5.gif)

![focus-min](https://user-images.githubusercontent.com/38106890/151547284-739a18a3-3467-4964-b59b-de8c2673018c.gif)

如何使用

当您打开内置搜索面板时，您进入了**搜索模式**。

在搜索模式下，您可以使用以下热键。

| 键 | 动作 |
| -- | -- |
| `Ctrl + N`, `↓` | 选择下一个项目。 |
| `Ctrl + P`, `↑` | 选择上一个项目。 |
| `Ctrl + Space` | 预览所选项目。目前在旧版编辑器中**不支持**。（[手动预览](#manual-preview)） |
| `Ctrl + Enter` | 打开所选项目。 |
| `Ctrl + Shift + Enter` | 在新窗格中打开所选项目。 |
| `Shift + Space` | 设置搜索选项。 |
| `Ctrl + ]` | 移动到下一组卡片。（仅在 [卡片视图](#3-card-view) 中可用。） |
| `Ctrl + [` | 移动到上一组卡片。（仅在 [卡片视图](#3-card-view) 中可用。） |
| `Ctrl + I` | 复制所选项目的维基链接。 |

- 上述热键仅在搜索模式下可用，因此不必担心覆盖您的热键设置。
- 您可以在设置选项卡中**自定义热键**。
- 要**退出**搜索模式，请按 `Esc` 键或单击搜索面板以外的屏幕任意部分。

## 自动预览

有三个选项可供自动预览。

1. 无，
2. 单视图，
3. 卡片视图。

### 1. None

仍然可以通过 `Ctrl + Enter` 进行手动预览。

![none-view-min](https://user-images.githubusercontent.com/38106890/150082308-493df0a0-e9d4-46ee-8957-c11a2f5ce628.gif)

### 2. 单视图

与卡片视图不同，预览的项目可以滚动。

### 3. 卡片视图

可用布局：

- 2 x 2，
- 2 x 3，
- 3 x 2，
- 3 x 3。

如果渲染结果错误，请按下 `Enter` 键重新加载。

![card-view-min](https://user-images.githubusercontent.com/38106890/150082177-6a14a509-b6f9-449f-90d1-7e198ae2d3d3.gif)

## 手动预览

**目前在传统编辑器中不支持手动预览。**

在预览模态框中，可以使用以下热键。

| 键 | 动作 |
| -- | -- |
| `Ctrl + N`, `↓` | 向下滚动一点。 |
| `Ctrl + P`, `↑` | 向上滚动一点。 |
| `Space` | 向下滚动很多。 |
| `Shit + Space` | 向上滚动很多。 |
| `Ctrl + Enter` | 打开选定的项目。 |
| `Ctrl + Shift + Enter` | 在新窗格中打开选定的项目。 |
| `Esc`, `Ctrl + Space` | 关闭模态框。 |
| `Tab` | 焦点移到下一个匹配项。 |
| `Shift + Tab` | 焦点移到上一个匹配项。 |
| `Ctrl + E` | 切换预览模式。 |
| `Ctrl + I` | 复制选定项目的维基链接。 |

- 您**可以自定义热键**在设置选项卡中。

![focus-min](https://user-images.githubusercontent.com/38106890/151547284-739a18a3-3467-4964-b59b-de8c2673018c.gif)

## 搜索选项

![search-option-min](https://user-images.githubusercontent.com/38106890/150083314-0834e593-2cd6-46c6-8706-5582e987037a.gif)

故障排除

### 搜索后热键无效（[问题＃44]（<https://github.com/qawatake/obsidian-core-search-assistant-plugin/issues/44））>

请重新加载 Obsidian。

如果这没有帮助，请在设置选项卡中启用*手动渲染卡片*选项。
