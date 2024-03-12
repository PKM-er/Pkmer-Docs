---
uid: 20231220112631
title: Obsidian 插件：【Readme】Markdown table checkboxes
tags: ['obsidian插件', 'readme']
description: 为Markdown表格中的有状态复选框添加支持。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown table checkboxes

> [!Note] 插件名片
> - 插件名称：Markdown table checkboxes
> - 插件作者：DylanGiesberts
> - 插件说明：为 Markdown 表格中的有状态复选框添加支持。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/DylanGiesberts/obsidian-table-checkboxes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-checkboxes)

## 概述

为 Markdown 表格中的有状态复选框添加支持。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/DylanGiesberts/obsidian-table-checkboxes/master/README.md)

---

## Readme(翻译）

下面是 [[table-checkboxes]] 插件的自述翻译

# Obsidian 表格复选框

这个插件用于 [Obsidian](https://obsidian.md)，它将 markdown 表格中的 `-[]` 替换为 HTML 复选框。

<https://github.com/DylanGiesberts/obsidian-table-checkboxes/assets/66573865/7a218dd4-2575-41e8-b615-01f97c0a9bdb>

## 安装插件

1. 导航到插件文件夹（设置 => 社区插件 -> 点击“已安装插件”旁边的文件夹图标）
2. 创建一个插件文件夹，比如 `obsidian-table-checkboxes`
3. 从发布选项卡下载 `main.js` 和 `manifest.json`，并将它们放入 `obsidian-table-checkboxes` 文件夹中

## 使用 BRAT 安装插件

1. 滚动到 Beta 插件列表部分
2. 添加 Beta 插件
3. 指定此存储库：DylanGiesberts/obsidian-table-checkboxes
如何使用
- 只需启用插件并在表格中输入一个 Markdown 复选框。它将被转换为 HTML 复选框。
- 在实时预览或查看模式下，(取消) 选中复选框，状态将反映在您的文件中。

## 工作原理

- 每当键入一个闭合括号 `]` 来关闭一个复选框时，它将被替换为一个 HTML 复选框 `<input type="checkbox" unchecked id="...">`。
- 当在预览中点击复选框时，通过其 ID 找到文件中的复选框。
- 复选框的 `checked` 状态将被切换。



