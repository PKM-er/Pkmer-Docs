---
uid: 2023080322295483
title: Obsidian 插件：【Readme】Zen
tags: ['obsidian插件', 'readme']
description: 让你的 Obsidian 进入到禅模式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Zen

> [!Note] 插件名片
> - 插件名称：Zen
> - 插件作者：Maxymillion
> - 插件说明：让你的 Obsidian 进入到禅模式
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Maxymillion/zen)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zen)

## 概述

让你的 Obsidian 进入到禅模式

![Zen](https://cdn.pkmer.cn/covers/zen_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Maxymillion/zen/main/README.md)
> 

---

## Readme(翻译）

下面是 [[zen]] 插件的自述翻译


# 禅

[![GitHub release (latest)](https://img.shields.io/github/v/release/Maxymillion/zen?style=flat-square&sort=semver)](https://github.com/Maxymillion/zen/releases/latest) 
[![Total Downloads](https://img.shields.io/github/downloads/Maxymillion/Zen/total?style=flat-square)](https://github.com/Maxymillion/zen/releases/latest) 

一个专注模式的 Obsidian 插件。灵感来自于 "iA Writer"。有时候你需要消除所有的干扰，或者至少减少一些。如果你可以随心所欲地禁用一些元素呢？

安装插件后，您可以很容易地从设置选项卡中更改“隐藏项目”。

### （可选）使用[Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)安装测试版
1. 在Obsidian的Community Plugins中安装BRAT。
2. 打开命令面板，运行命令BRAT: Add a beta plugin for testing。
3. 将此仓库的链接粘贴到弹出窗口中。
   a. `https://github.com/Maxymillion/zen`。
4. 点击Add Plugin - 等待几秒钟，BRAT会告诉您正在发生的事情。
5. 在设置中，转到**Community plugins**选项卡。
6. 刷新Community plugins列表。
7. 启用**Zen**插件。
8. 如果您发现任何错误，请在[此处](https://github.com/Maxymillion/zen/issues)报告。

## 集成
该插件包含一个系统，允许最终用户编写集成，遵循提供的[接口](src/plugin.integrations.ts)。这允许在进入和离开禅定模式时调用函数。我已经为以下插件编写了一个集成：
- [Typewriter Scroll Obsidian Plugin by deathau](https://github.com/deathau/cm-typewriter-scroll-obsidian)，该集成在进入/离开禅定模式时启用/禁用打字机界面。

截图

### 启用/禁用禅模式
![截图](https://s3.gifyu.com/images/Screen-Recording-2023-02-14-at-15.07.12.gif)

### 选项 - 高亮
有时候这些名称可能相当复杂，按住切换按钮旁边的眼睛按钮，可以一瞥你将隐藏的元素。

## 待办事项 / 未来计划
- [ ] 将命令宏添加到集成中（允许您在启动和关闭时运行命令）。
- [ ] 提供“焦点配置文件”，允许您进入多种“焦点模式”。

其他插件
这个插件与我的另一个插件[Simple Zoom](https://github.com/Maxymillion/simple-zoom)完美配合，它允许你使用`CMD/CTRL`和`=`或`-`键仅增加编辑器的字体大小，而不是整个用户界面。

## 鸣谢
- [@ces3001](https://github.com/ces3001) 对于 [Stille](https://github.com/michaellee/stille) 集成的贡献
- [@joshestein](https://github.com/joshestein) 对于提升用户体验的改进的贡献



