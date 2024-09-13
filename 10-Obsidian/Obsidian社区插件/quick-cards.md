---
uid: 20240913171943
title: Obsidian 插件：Quick Cards 为 Obsidian 添加卡片摘要浏览
tags: ['obsidian插件', '卡片']
description: Obsidian 插件：Quick Cards 为 Obsidian 添加卡片摘要浏览
author: OS
type: other
draft: false
editable: false
modified: 20240913175014
---

# Obsidian 插件：Quick Cards 为 Obsidian 添加卡片摘要浏览

## 概述

Obsidian 作为一款 2020 年开始进入大家视野的软件，显然不是很多人最早接触的笔记工具。

这就延伸了一个问题，很多人因为有其他软件的习惯，所以希望迁移到 Obsidian 后也能够拥有和之前一样的体验，这种体验很多时候除了功能，更多是一种交互方式。

Quick Cards 插件就是模拟了很多笔记软件中自带的卡片式浏览栏，你可以在很多笔记软件中找到他的影子。

> [!Note] 插件名片
> - 插件名称：Camus Qiu
> - 插件说明：给 Obsidian 添加卡片式摘要浏览栏
> - 插件分类：[' 插件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/abcamus/obsidian-quick-card)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick_cards)

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20240913171956.png!pkmer)

- 打卡软件后，可以生成一个卡片视图
- 卡片视图可以和侧边栏合并，也可以独立

## 使用

- 安装插件并启用后，需要你使用 命令面板 `Quick Cards: Show Card View` 命令，才能看到新的视图模式
- 新的视图模式默认会出现在左侧边栏
- 交互：当你在 Obsidian 默认文件管理器中，点击某个目录，Quick Cards 会自动将该目录下的笔记文件，生成卡片视图，展示在插件的视图内
- 展示样式
	- 卡片列表
	- 新增笔记卡片按钮
- 卡片列表：Quick Cards 默认会展示如下信息：
	- 创建时间
	- 以及部分笔记正文摘要
	- 目前不支持显示目录下，md 外的文件类型，包括 Obsidian 默认 canvas 类型
- 新增笔记按钮
	- 点击后在你所处的目录位置，新建一个笔记

### 活用

如果你喜欢 印象笔记或者 bear 以及 一些笔记软件，将笔记变为一列卡片式摘要，可以随时浏览的的话，那么你可以将 Quick Cards 的视图，单独拖拽一列，类似本篇文章中，示意截图一样。

这样当你操作文件管理器时，你会发现 file cardify view 中的卡片会跟着目录进行变化。

>[!note] 遗憾
>遗憾的是，目前的版本，还没有支持在卡片视图上，显示笔记内地图片和富媒体内容