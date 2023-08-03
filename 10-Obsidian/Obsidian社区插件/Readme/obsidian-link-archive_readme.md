---
uid: 20230803212652
title: Obsidian 插件：【Readme】Link Archive
tags: ['obsidian插件', 'readme']
description: 这个插件会把你笔记中的链接归档，这样即使原网站关闭或者被移除，你也可以访问到它们。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Link Archive

> [!Note] 插件名片
> - 插件名称：Link Archive
> - 插件作者：Tamás Deme
> - 插件说明：这个插件会把你笔记中的链接归档，这样即使原网站关闭或者被移除，你也可以访问到它们。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tomzorz/obsidian-link-archive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-link-archive)

## 概述

这个插件会把你笔记中的链接归档，这样即使原网站关闭或者被移除，你也可以访问到它们。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tomzorz/obsidian-link-archive/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-link-archive]] 插件的自述翻译



# Obsidian链接存档

该插件会将您笔记中的链接存档，即使原始网站关闭或删除，您仍然可以访问这些链接。

## 工作原理

在点击工具栏/左侧边栏上的“存档链接”按钮后，插件会执行以下操作：

1. 查找当前笔记中的每个外部链接，
2. 将每个链接提交到https://archive.org，
3. 一旦链接被保存，它会在笔记中的常规链接后面嵌入一个“(已存档)”链接。

插件将尝试不为已存档的链接（以及存档链接本身）重新创建存档链接，但这依赖于不修改存档链接的格式。

## 安装

在 Obsidian 中，导航到 **设置 > 社区插件**，如果你还没有关闭**安全模式**，请关闭它，然后点击**浏览**按钮 - 你应该能在列表中找到它。

或者，下载仓库的最新版本，将 `main.js`、`manifest.json` 和 `style.css` 文件复制到你的 vault 的 `.obsidian/plugins/obsidian-link-archive` 文件夹中，然后在 **设置 > 社区插件** 下启用它（上面关于禁用的说明也适用于这里）。

## 更新日志

**v0.2.0**

- 添加错误处理。
- 插件正确处理Markdown链接。
- 添加更好的进度报告。
- 将插件重构为多个文件。
- 添加自定义链接文本的设置。
- 改进检测已归档链接的逻辑。

**v0.1.1**

- 添加缺失的许可证。

**v0.1.0**

初始发布。

- 支持其他存档提供者



