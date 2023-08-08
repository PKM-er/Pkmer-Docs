---
uid: 2023080322194428
title: Obsidian 插件：【Readme】Highlight Public Notes
tags: ['样式工具', 'obsidian插件', 'readme']
description: 这个插件通过将笔记着色为红色来警告笔记是公开的（基于frontmatter属性）。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Highlight Public Notes

> [!Note] 插件名片
> - 插件名称：Highlight Public Notes
> - 插件作者：dennis seidel
> - 插件说明：这个插件通过将笔记着色为红色来警告笔记是公开的（基于 frontmatter 属性）。
> - 插件分类：[' 样式工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dennisseidel/highlightpublicnotes-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-highlightpublicnotes-plugin)

## 概述

这个插件通过将笔记着色为红色来警告笔记是公开的（基于 frontmatter 属性）。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dennisseidel/highlightpublicnotes-obsidian-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-highlightpublicnotes-plugin]] 插件的自述翻译

# 突出显示公共笔记

这个适用于 [Obsidian](https://obsidian.md/) 的插件会突出显示标题栏，对于那些你在正文中**标记为公共**的笔记，或者**包含在特定文件夹中**的笔记。这样可以防止你在稍后通过脚本发布时，将机密数据写入笔记中。

![screenshot-full](https://raw.githubusercontent.com/dennisseidel/highlightpublicnotes-obsidian-plugin/master/images/example-highlightpublicnotes.png)

## 使用方法

在设置菜单中启用插件后，可以配置是否要在特定文件夹（例如 `03_ARTICLES`）中突出显示笔记，或者突出显示 frontmatter 属性和值（例如 `classification: public`）。您可以更新插件检查的 `attribute` 以及 `value`。关闭菜单，然后将笔记添加到突出显示的文件夹中，或者添加分类的 frontmatter 属性。**由于插件仅在加载文件时执行突出显示检查，因此您需要重新加载文件才能立即看到突出显示的标题栏。您可以通过切换到另一个笔记然后切换回来来重新加载文件**。加载页面时，您会看到插件检查 frontmatter（例如 `classification: public`）或路径，并将标题栏突出显示为红色。

## 替代方案：cssclasses

Obsidian 内置了一个 [cssclasses](https://forum.obsidian.md/t/apply-custom-css-to-certain-pages/15361)。将自定义的 css 片段与 frontmatter 中的 `cssclass:` 属性结合使用可以提供类似的功能。

## 兼容性

`obsidian-highlightpublicnotes-plugin` 目前需要 Obsidian v0.9.12 或更高版本才能正常工作。

## 安装

您可以通过 Obsidian 中的 Community Plugins 选项卡安装插件。只需搜索“highlight public notes”。

## 变更

您可以在 [此处](https://github.com/dennisseidel/highlightpublicnotes-obsidian-plugin/blob/master/CHANGELOG.md) 找到完整的变更日志。
