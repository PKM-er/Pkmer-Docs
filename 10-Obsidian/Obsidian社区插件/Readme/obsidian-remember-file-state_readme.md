---
uid: 2023080322255928
title: Obsidian 插件：【Readme】Remember File State
tags: ['obsidian插件', 'readme']
description: 记住每个文件的光标位置、选择、滚动等等
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Remember File State

> [!Note] 插件名片
> - 插件名称：Remember File State
> - 插件作者：Ludovic Chabant
> - 插件说明：记住每个文件的光标位置、选择、滚动等等
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ludovicchabant/obsidian-remember-file-state)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-remember-file-state)

## 概述

记住每个文件的光标位置、选择、滚动等等



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ludovicchabant/obsidian-remember-file-state/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-remember-file-state]] 插件的自述翻译


# 记住文件状态

这个 [Obsidian](https://obsidian.md) 插件在你切换文件时记住了编辑器的状态。它会恢复光标位置、滚动位置等等。该插件不会进行任何轮询，并且努力只在打开和关闭文件时进行工作，以避免减慢编辑体验。

请注意，该插件目前不会跨会话记住状态。

## 开发者快速入门

我在开发这个插件时的工作流程如下：

1. 在一个测试的 vault 中安装 "_Remember File State_" 插件。不要忘记启用它。
2. 克隆 `obsidian-remember-file-state` 仓库。
3. 运行常规命令，如 `npm install`。
4. 以监听模式运行构建过程，以便编译 TypeScript 代码并覆盖测试 vault 的插件：`npm run dogfood /path/to/vault/.obsidian/plugins/obsidian-remember-state`。
5. 在进行更改时，触发 "_Reload App Without Saving_" 命令以重新加载 Obsidian。
6. 可选地，按下 `Ctrl-Shift-I` 打开开发者控制台并查看控制台日志。



