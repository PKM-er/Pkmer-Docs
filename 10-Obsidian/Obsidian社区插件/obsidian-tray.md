---
uid: 20230329145842
title: Obsidian 插件：Tray 将 Obsidian 最小化到系统托盘
tags: [Obsidian, 插件, 增强工具]
description: Obsidian 插件：Obsidian tray 将 Obsidian 最小化到系统托盘,让 Obsidian 关闭窗口时，可以自动缩小到系统托盘。
author: OS
type: other
draft: false
editable: false
modified: 20230711152618
---

# Obsidian 插件：Tray 将 Obsidian 最小化到系统托盘

## 概述

Obsidian Windows 端通常不支持将其缩小至右下角的托盘区域。本插件主要解决这个问题，为桌面版 Obsidian 添加缩小到 Tray 托盘功能，并且还能额外增加一系列功能，因此该插件适用于 Windows 和 Mac 操作系统，可以大大改善 Obsidian 的使用体验。

> [!Note] 插件名片
> - 插件名称：Tray
> - 插件作者：dragonwocky
> - 插件说明：让 Obsidian 关闭窗口时，可以自动缩小到系统托盘。
> - 插件项目地址：[点我跳转](https://github.com/dragonwocky/obsidian-tray)

## 效果&特性

![Pasted image 20230220215705](https://cdn.pkmer.cn/images/3e09386e560c68443ea02b03e5fb60e4_MD5.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20230518153122.png!pkmer)

- 点击 Obsidian 窗口的关闭按钮后，不会关闭 Obsidian，而是最小化到系统右下角托盘，处于后台运行的状态。（上图就是以 Windows 为例）
- 允许 Obsidian 变为开机启动。

## 安装与使用

- 此插件名为 obsidian-tray，还未上架 Ob 插件商店，可在 github 下载安装包，链接如下
    [Release 0.1.2 · dragonwocky/obsidian-tray · GitHub 57](https://github.com/dragonwocky/obsidian-tray/releases/tag/0.1.2)
- 目前只能通过 Brat 插件安装：dragonwocky/obsidian-tray[]

## 使用和配置

![Pasted image 20230220215846](https://cdn.pkmer.cn/images/7a76c9b7793176741aef4a790af98b9b_MD5.png!pkmer)

> [!Tip] 提示
> 1. 该插件首次安装后，需要重启 OB，才能使托盘生效。
> 2. 如果你打开多仓库，那么系统多盘会按照打开仓库的数量生成。

### 窗口管理功能

右下角会默认出现一个托盘 Icon，右键 Icon 会包含几个功能：

- Show Vault：可以从全局不管什么地方直接展示库（可以用快捷键进行使用）
- Hide Vault：顾名思义，是隐藏仓库的名字；
- Relaunch Obsidian：用于重新启动 Obsidian；
- Close Obsidian：用于彻底关闭 Obsidian；

### 快速笔记

- Quick Note：会自动创建一个快速笔记，用于快速记录灵感
	- Quick note location：设定快速笔记的保存位置
	- Quick note date format：新的快速笔记使用格式化的命名方式，默认：YYYY-MM-DD
- Quick note hotkey：设定快速笔记的快捷键

### 后台管理功能

- Launch On Startup：在操作系统启动后，自动开启 Obsidian，注意，开启的是你有此插件的这一个库；
- Hide On Launch：无论何时启动应用程序，都会自动最小化黑石。如果启用了“在后台运行”选项，则窗口将隐藏在系统任务栏/菜单栏中，而不是最小化到任务栏/底座中。
- Run in Background：当你关闭 Obsidian 会自动缩小至 Tray 而不是关闭；
- Hide Taskbar icon：开启后，你的任务栏中的 Obsidian 会消失，而只保留 Tray 中的 Obsidian；注意：这可能在基于 Linux 的操作系统上不起作用。
- Create Tray Icon：创建 Tray Icon，注意关闭这个功能后，你可能会无法从 Run In Background 恢复；
- Tray Icon Image：顾名思义，你可以设置 Tray 的 Icon 图片样式；
- Tray Icon ToolTip：当你悬浮在你的 Tray Icon 上时，会显示对应的浮动条；
- Toggle window foucs hotkey：注册后用于全局隐藏或者显示 Obsidian，这个命令比较特殊，建议按原来的样式；

> [!Warning] 警告
> - MacOS 用户请谨慎开启，开机启动功能，会导致不可预料的异常。