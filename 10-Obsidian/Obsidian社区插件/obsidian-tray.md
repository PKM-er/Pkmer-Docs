---
uid: 20230329145808
title: Obsidian 插件：Obsidian tray 将 Obsidian 最小化到系统托盘
tags: []
description: Obsidian 插件：Obsidian tray 将 Obsidian 最小化到系统托盘
author: OS
type: other
draft: false
editable: false
modified: 20230515233928
---

# Obsidian 插件：Obsidian tray 将 Obsidian 最小化到系统托盘

## 概述

Obsidian Windows 端并不支持收缩到右下角的栏目中（也就是 Tray），而这一款插件的主要功能就是为了给桌面端的 Obsidian 加上收缩到 Tray 盘中，且还额外增加了一系列的功能使桌面端的 Obsidian 更好用（这里适用于 Mac & Windows）。

> [!Note] 插件名片
> - 插件名称：Obsidian tray
> - 插件作者：dragonwocky
> - 插件说明：让 Obsidian 关闭窗口时，可以自动缩小到系统托盘。
> - 插件项目地址：[点我跳转](https://github.com/dragonwocky/obsidian-tray)

## 效果&特性

![Pasted image 20230220215705](https://cdn.pkmer.cn/images/3e09386e560c68443ea02b03e5fb60e4_MD5.png!pkmer)

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

- 启用后，右下角会默认出现一个 Icon，右键 Icon 会包含几个功能：
	- Quick Note：会自动创建一个笔记，用于记录内容，这个笔记名和对应的存放文件夹可以在设置中设置；
	- Show Vault：可以从全局不管什么地方直接展示库（可以用快捷键进行使用）
	- Hide Vault：顾名思义，是隐藏库；
	- Relaunch Obsidian：用于重开 Obsidian；
	- Close Obsidian：用于关闭 Obsidian；
- 设置页中也有几个需要自行开启的功能
	- Launch On Startup：在系统启动完成后自动开启 Obsidian，注意，开启的是你有插件的这一个库；
	- Hide On Launch：当你打开 Obsidian 后会自动缩小或者缩小至 Tray；
	- Run in Background：当你关闭 Obsidian 会自动缩小至 Tray 而不是关闭；
	- Hide Taskbar icon：开启后，你的任务栏中的 Obsidian 会消失，而只保留 Tray 中的 Obsidian；
	- Create Tray Icon：创建 Tray Icon，注意关闭这个功能后，你可能会无法从 Run In Background 恢复；
	- Tray Icon Image：顾名思义，你可以设置 Tray 的 Icon 图片样式；
	- Tray Icon ToolTip：当你悬浮在你的 Tray Icon 上时，会显示对应的浮动条；
	- Toggle window foucs hotkey：注册后用于全局隐藏或者显示 Obsidian，这个命令比较特殊，建议按原来的样式；
- 设置页的最后还有一个关于 Quick Notes 的设置，
	- Quick Note Location：用于放置你的 Quick Note 的文件夹，留空则为根目录；
	- Quick Note date format：设定你的日期格式；
	- Quick Note Hotkey：你可以全局创建 Quick Note 且跳转至 Obsidian 中编辑；

> [!Warning] 警告
> - MacOS 用户请谨慎开启，开机启动功能，会导致不可预料的异常。