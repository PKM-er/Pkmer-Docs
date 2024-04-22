---
uid: 2024042221321263
title: Obsidian 插件：【Readme】Note Splitter
tags: ['obsidian插件', 'readme']
description: 将一个注释根据分隔符拆分为单独的注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Note Splitter

> [!Note] 插件名片
> - 插件名称：Note Splitter
> - 插件作者：Trey Wallis
> - 插件说明：将一个注释根据分隔符拆分为单独的注释。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/trey-wallis/obsidian-note-splitter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-splitter)

## 概述

将一个注释根据分隔符拆分为单独的注释。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trey-wallis/obsidian-note-splitter/master/README.md)

---

## Readme(翻译）

下面是 [[note-splitter]] 插件的自述翻译

# 注意分割器

此插件允许您根据指定的字符序列（分隔符）将 Obsidian 笔记拆分为单独的笔记。默认分隔符是一个新行。

## 关于

- [安装](#installation)
- [使用](#usage)
- [设置](#settings)

## 安装

1. 从 Obsidian 社区插件商店安装 [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) 插件
2. 启用插件
3. 打开插件设置
4. 点击**添加 beta 插件**
5. 输入仓库网址：**<https://github.com/trey-wallis/obsidian-note-splitter**>
6. 点击**添加插件**

## 用法

1. 打开您想要拆分的笔记
2. 打开 Obsidian 命令提示符（cmd + shift + p）
3. 输入 `Split by delimiter`
4. 按下回车键

### 前言

在拆分笔记时，此插件将忽略前言部分。只有在前言块之后的内容将被拆分。

## 设置

可以在插件设置中配置要分割的分隔符。默认分隔符是一个换行符 `\n`。
