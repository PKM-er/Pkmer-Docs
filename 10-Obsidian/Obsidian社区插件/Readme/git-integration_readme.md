---
uid: 2024022117280688
title: Obsidian 插件：【Readme】Git Integration
tags: ['obsidian插件', 'readme']
description: Easily backup vault on a remote repository.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Git Integration

> [!Note] 插件名片
> - 插件名称：Git Integration
> - 插件作者：noradroid
> - 插件说明：Easily backup vault on a remote repository.
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/noradroid/obsidian-git-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-integration)

## 概述

Easily backup vault on a remote repository.



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/noradroid/obsidian-git-integration/master/README.md)
> 

---

## Readme(翻译）

下面是 [[git-integration]] 插件的自述翻译

【机翻】
# 黑曜石Git集成插件

这是一个为Obsidian（https://obsidian.md）设计的Git集成插件，允许用户轻松地将他们的Obsidian保险库备份到远程存储库。

该插件适用于Windows 10+，并要求在本地系统中安装Git。

- [打开git菜单](#open-the-git-menu)
- [设置远程存储库](#setup-remote-repository)
- [创建一个提交](#create-a-commit)
- [与远程存储库同步](#sync-with-remote-repository)
### 打开git菜单

点击“打开git菜单”的带状图标。

![Git菜单带](https://cdn.pkmer.cn/covers/git-integration_2_0.png!pkmer)

菜单将弹出，显示初始化、提交或同步的选项。

![Git菜单模态框](https://cdn.pkmer.cn/covers/git-integration_2_1.png!pkmer)
### 设置远程仓库

在GitHub上创建一个空仓库。

打开git菜单，选择“Git init”或者打开命令面板（在Windows上按`Ctrl+P`），搜索“打开初始化仓库模态框”。

![Git init模态框](https://cdn.pkmer.cn/covers/git-integration_2_2.png!pkmer)

粘贴远程仓库的URL，然后点击“初始化”完成设置。
### 创建一个提交

打开git菜单，选择“Git commit”，或者打开命令面板（在Windows上按`Ctrl+P`），搜索“打开提交更改模态框”。

![Git commit模态框](https://cdn.pkmer.cn/covers/git-integration_2_3.png!pkmer)

输入提交消息，然后点击“提交”。这相当于执行`git add .`，然后是`git commit -m "<message>"`。
您也可以勾选“自动推送到远程仓库”，以便在提交后立即推送。
### 同步远程存储库

打开git菜单，选择“Git同步”，或者打开命令面板（在Windows上按`Ctrl+P`），搜索“同步远程存储库”。

![Git同步模态框](https://cdn.pkmer.cn/covers/git-integration_2_4.png!pkmer)

点击“同步”将新更改推送到远程。



