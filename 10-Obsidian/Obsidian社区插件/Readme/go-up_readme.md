---
uid: 2024031219312413
title: Obsidian 插件：【Readme】Go Up
tags: ['obsidian插件', 'readme']
description: 快速导航到指定的“父”页面
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Go Up

> [!Note] 插件名片
> - 插件名称：Go Up
> - 插件作者：JinMu Go
> - 插件说明：快速导航到指定的“父”页面
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/JinMuGo/obsidian-go-up)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?go-up)

## 概述

快速导航到指定的“父”页面

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/JinMuGo/obsidian-go-up/main/README.md)

---

## Readme(翻译）

下面是 [[go-up]] 插件的自述翻译

# 黑曜石 - 向上

> 转到上一页

该插件允许用户通过利用页面前置属性中的自定义属性，快速导航到指定的“父”页面。

# 如何使用

1. 安装插件：通过社区插件部分在你的 Obsidian vault 中下载并安装**Go Up 插件**。
2. 添加 'up' 属性：在你的笔记中，在 front matter 中包含一个 up 属性。<br/>

    例如：

    ```yaml
    ---
    up: [[ParentNote]]
    ---
    ```

    将 ParentNote 替换为你希望导航到的页面链接。<br/>

3. 使用键盘快捷键：设置了 up 属性后，按下 `Cmd + Shift + U` 键导航到指定的父页面。



