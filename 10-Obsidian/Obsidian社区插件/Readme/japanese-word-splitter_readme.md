---
uid: 2023080322293716
title: Obsidian 插件：【Readme】Word Splitting for Japanese in Edit Mode
tags: ['obsidian插件', 'readme']
description: Obsidian 内置 CodeMirror 编辑器的补丁，支持日语分词
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Word Splitting for Japanese in Edit Mode

> [!Note] 插件名片
> - 插件名称：Word Splitting for Japanese in Edit Mode
> - 插件作者：sonarAIT
> - 插件说明：Obsidian 内置 CodeMirror 编辑器的补丁，支持日语分词
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/sonarAIT/cm-japanese-patch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?japanese-word-splitter)

## 概述

Obsidian 内置 CodeMirror 编辑器的补丁，支持日语分词

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/sonarAIT/cm-japanese-patch/main/README.md)
>

---

## Readme(翻译）

下面是 [[japanese-word-splitter]] 插件的自述翻译

# 在编辑模式下为日语进行单词分割

这是一个为 Obsidian 内置的 CodeMirror 编辑器添加支持日语单词分割的补丁。

该插件基于 [@linonetwo](https://github.com/linonetwo) 的 [chs word splitting module](https://github.com/linonetwo/segmentit) 进行修改，以适应日语版本。

对于日语单词分割，我们使用了 [Taku Kudo](https://github.com/taku910) 创建的 [tiny-segmenter](http://chasen.org/~taku/software/TinySegmenter/)。

特别感谢 [@linonetwo](https://github.com/linonetwo) 和 [Taku Kudo](https://github.com/taku910)！

## 演示

| 未应用 Obsidian 默认的单词分割补丁 | 已应用补丁 |
| ------------------ | ----------- |
| ![ob-default-splitting](https://github.com/sonarAIT/cm-japanese-patch/blob/main/img/off.gif)|![ob-patched-splitting](https://github.com/sonarAIT/cm-japanese-patch/blob/main/img/on.gif)|

兼容性

所需的 API 功能仅适用于 Obsidian v0.13.8+。

## Installation インストール方法

### 来自 Obsidian

1. 打开 `设置` > `社区插件`
2. 确保安全模式为**关闭**
3. 在 `社区插件` 中点击 `浏览`
4. 搜索此插件
5. 点击 `安装`
6. 安装完成后，点击 `启用`，补丁即可使用。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本。
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/japanese-word-splitter`。
3. 重新加载 Obsidian。
4. 如果提示安全模式，请禁用安全模式并启用插件。否则，请转到设置，第三方插件，确保安全模式关闭，并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您应该能够按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。

***

1. 从 GitHub 存储库的 Releases 部分下载最新版本。
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/japanese-word-splitter`。
3. 重新加载 Obsidian。
4. 如果提示安全模式，请禁用安全模式并启用插件。否则，请转到设置，第三方插件，确保安全模式关闭，并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您应该能够按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。