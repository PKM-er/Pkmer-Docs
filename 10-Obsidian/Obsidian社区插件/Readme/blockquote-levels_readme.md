---
uid: 20231220115812
title: Obsidian 插件：【Readme】Blockquote Levels
tags: ['obsidian插件', 'readme']
description: 添加命令用于增加/减少当前行或选择的引用块级别。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Blockquote Levels

> [!Note] 插件名片
> - 插件名称：Blockquote Levels
> - 插件作者：Carlo Zottmann
> - 插件说明：添加命令用于增加/减少当前行或选择的引用块级别。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/czottmann/obsidian-blockquote-levels)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blockquote-levels)

## 概述

添加命令用于增加/减少当前行或选择的引用块级别。

![Blockquote Levels](https://cdn.pkmer.cn/covers/blockquote-levels_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/czottmann/obsidian-blockquote-levels/main/README.md)

---

## Readme(翻译）

下面是 [[blockquote-levels]] 插件的自述翻译

<img src="https://raw.githubusercontent.com/czottmann/obsidian-blockquote-levels/main/readme-assets/blockquote-levels-256.png" height="128" alt="插件标志物：一个尖角，一个加号，一个尖角">

# 块引用级别

这个插件为 [Obsidian](https://obsidian.md) 添加了命令，用于增加/减少当前行或选定文本的块引用级别。

使用方法

该插件引入了两个新的命令，"Blockquote Levels: Increase"（增加引用级别）和 "Blockquote Levels: Decrease"（减少引用级别）。

"Increase"（增加）将 Markdown 引用前缀（`>`）添加到当前行、当前选择或多个选择中。后续调用将添加后续的前缀，从而增加引用级别。

"Decrease"（减少）从当前行、当前选择或多个选择中删除第一个 Markdown 引用前缀（`>`）。混合使用是可以的，因为每行都是单独处理的；当所选行的引用级别不同时，每行只会删除一个前缀（`>`）（如果存在）。

插件默认不设置热键，您可以根据需要自行设置，或者使用命令面板触发命令。世界由你掌控！

## 展示

![展示 GIF](https://cdn.pkmer.cn/covers/blockquote-levels_1_0.gif)

## 安装

1. 在 Obsidian 的社区插件浏览器中搜索 "Blockquote Levels"。([点击此链接](https://obsidian.md/plugins?id=zottmann) 可以直接打开)
2. 安装插件。
3. 在 Obsidian 设置的 "Community plugins" 下启用该插件。

就是这样。

## 通过 BRAT 安装（适用于预发布版或测试版）

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)。
2. 将“Blockquote Levels”添加到 BRAT：
    1. 通过设置→社区插件打开“Obsidian42 - BRAT”。
    2. 点击“添加 Beta 插件”。
    3. 使用存储库地址 `czottmann/obsidian-blockquote-levels`。
3. 在设置→选项→社区插件下启用“Blockquote Levels”。

开发

克隆存储库，运行 `pnpm install` 或 `npm install` 来安装依赖项。然后，运行 `pnpm dev` 或 `npm run dev` 来编译并监视文件更改。

感谢 [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 团队提供的 GitHub Action 工作流程的“起始模板”和方便使用的 `release.sh` 脚本。

## 作者

Carlo Zottmann，<carlo@zottmann.org>，<https://zottmann.org/>

## 许可证

MIT，参见 [LICENSE.md](https://github.com/czottmann/obsidian-blockquote-levels/blob/main/LICENSE.md)。
