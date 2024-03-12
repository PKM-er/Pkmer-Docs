---
uid: 20231026111420
title: Obsidian 插件：【Readme】Header Enhancer
tags: ['obsidian插件', 'readme']
description: 升级您的标题，定制您的笔记。标题增强器使您的笔记标题更好、更有用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Header Enhancer

> [!Note] 插件名片
> - 插件名称：Header Enhancer
> - 插件作者：Hobee Liu
> - 插件说明：升级您的标题，定制您的笔记。标题增强器使您的笔记标题更好、更有用。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HoBeedzc/obsidian-header-enhancer-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?header-enhancer)

## 概述

升级您的标题，定制您的笔记。标题增强器使您的笔记标题更好、更有用。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HoBeedzc/obsidian-header-enhancer-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[header-enhancer]] 插件的自述翻译

<h1 align="center">Obsidian Header Enhancer</h1>
<div align="center">

[[中文](./README.zh.md)] [[English](./README.md)]

</div>

该插件旨在增强 [Obsidian](https://obsidian.md) 的标题。插件将自动检测标题级别并将数字添加到标题中。

**警告：**

- 该插件仍处于开发的早期阶段，可能存在一些错误。如果您发现任何错误，请随时在 [问题](https://github.com/HoBeedzc/obsidian-header-enhancer-plugin/issues) 中报告。
- 数据是无价的，因此在使用测试版插件（版本号为 0.x.x）时，请记得创建备份。
核心特点

### 1. 标题自动编号

标题自动编号功能可以为标题添加编号。当您按下 `Enter` 键创建新行时，编号将添加到标题中，并且在更改标题级别时会更新编号。

**示例：**

![header-auto-numbering-example](./doc/header-auto-numbering-example.gif)

**警告：**

- 标题自动编号使用 `\t` 来分隔自动编号和标题。如果您的标题包含 `\t`，标题自动编号可能无法正常工作。
- 标题自动编号将直接修改您的 Markdown 源文件，以便在其他 Markdown 编辑器中呈现。
1. 隔离标题字体 [进行中]
隔离标题字体提供了将标题字体与内容隔离的能力。
安装

### 来自 Obsidian

1. 打开设置 -> 第三方插件
2. 禁用安全模式
3. 点击浏览社区插件
4. 搜索“Header Enhancer”
5. 点击安装
6. 安装完成后，关闭社区插件窗口并启用新安装的插件

### 来自 GitHub

1. 下载 [最新版本](https://github.com/HoBeedzc/obsidian-header-enhancer-plugin/releases/latest)
2. 将 zip 文件解压到 `<vault>/.obsidian/plugins/` 目录下，确保 `main.js` 文件位于 `<vault>/.obsidian/plugins/header-enhancer/` 文件夹中。
3. 重新加载 Obsidian
4. 如果提示安全模式，可以禁用安全模式并启用插件。
使用方法

### 标题自动编号

默认情况下启用标题自动编号。您可以在插件设置中禁用它。

您可以在插件设置中更改自动编号的起始标题级别。默认值为 `1`，这意味着自动编号从 H1 或 `#` 开始。

b. 自定义编号样式

您可以自定义编号样式，并在插件设置中预览样式。目前，仅支持自定义分隔符。

## 待办事项列表

- [ ] 支持不同的分隔符自动编号和标题。（目前只支持 `\t`）- 标题自动编号
- [ ] 设置支持中文。- 标题增强

## 更新日志

完整的更新日志可以在 [这里](./doc/changelog.md) 找到。

## 致谢

- <https://github.com/Yaozhuwa/easy-typing-obsidian>

## 支持

如果你喜欢这个插件，你可以通过以下方式支持我：
