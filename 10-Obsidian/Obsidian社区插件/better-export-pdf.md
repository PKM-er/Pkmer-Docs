---
uid: 20231024153423
title: better-export-pdf 导出 pdf 带上目录
tags: [pdf, 导出]
description: 一个 Obsidian PDF 导出增强插件，与官方的 PDF 导出功能相比，增加了导出书签大纲和给 PDF 添加页码功能。
author: calmwaves
type: tutorial
draft: false
editable: false
modified: 20231024154600
---

# better-export-pdf 导出 pdf 带上目录

## 概述

> [!Note] 插件名片
> - 插件名称：Better Export PDF
> - 插件版本：1.3.2
> - 插件作者：l1xnan
> - 插件描述：增加了 PDF 导出书签大纲和添加页码功能
> - 插件项目地址：[点我跳转](https://github.com/l1xnan/obsidian-better-export-pdf)

## 功能

与官方导出 PDF 功能相比：

1. 自定义页边距
2. 导出包含书签大纲
3. 导出包含页码

## 安装

当前插件没有发布到官方插件商店，需要手动安装：

1. 在 [Release](https://github.com/l1xnan/obsidian-better-export-pdf/releases) 页面，下载 zip 包
2. 解压到: `{VaultFolder}/.obsidian/plugins/`
3. 重启 Obdisian，并在插件管理器中启用插件。

## 使用

1. 在当前 Markdown 视图的右上角三个点，点击更多选项，选择 `Better to PDF`；
2. 打开命令面板，搜索 `Better Export PDF: Export Current file to PDF`。

如果导出的 PDF 页面异常，尝试在外观中将颜色切换为浅色。

### 设置

可以简单地设置页码格式：

- `{page}`: 代表当前页码；
- `{pages}`: 代表总页码；

例如: 如果总页码为 5，那么设置 `{page} / {pages}`，表示 `1 / 5`, `2 / 5` ...
