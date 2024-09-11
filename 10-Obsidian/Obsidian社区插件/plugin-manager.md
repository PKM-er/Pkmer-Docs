---
uid: 20240603103524
title: Obsidian 插件：Plugin Manager 启动顺序和时间由你掌握，插件重度用户的福音
tags: ['第三方工具集成', '编辑工具', 'obsidian插件']
description: 管理 Obsidian 插件的启动时间和顺序
author: AI
type: auto
draft: false
editable: false
modified: 20240902175304
---

# Obsidian 插件：Plugin Manager 启动顺序和时间由你掌握，插件重度用户的福音

> [!Note] 插件名片
> - 插件名称：Plugin Manager
> - 插件作者：ohm-en
> - 插件说明：扩展 Obsidian 的插件管理功能。
> - 插件分类：[' 第三方工具集成 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/ohm-en/obsidian-plugin-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-manager)

## 概述

很多用户使用一段时间之后，随着插件数量增多，启动缓慢，逐渐开始对如何裁剪插件产生困惑。对于有着“鱼与熊掌我想兼得”的想法的使用者，之前需要了解，脚本，利用 template 等插件的脚本方法来完成，对于初学者或者对配置，或者脚本不太了解的用户，难度较高，所以之前 [[Blue Topaz 示例库简介]] 中就有类似的方案，可以大家简单迁移。

Plugin Manager 可以用最直白的方式来控制每个插件的启动时间

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20240902173953.png!pkmer)

- 支持通过该插件启用和关闭插件
- 支持对已经开启的插件进行设置启动时间

## 使用

- 对于已经打开启动的插件，手动修改后面数字，以秒为单位，在 Obsidian 后自动打开这个插件
	- 比如，我对 [[zotlit]] 插件设置，10，则会在 10 秒后进行启动
- 如果是 0，则在 Obsidian 加载插件时候，立刻加载
	- 比如，如果我对 [[obsidian-memos|Thino]] 插件，设置为 0，则会随着 Obsidian 一起启动

## 活用

由于这个插件是可以给每个插件设置启动时间，所以它的自由度更高，甚至可以达到控制插件启动先后顺序的作用。