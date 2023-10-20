---
uid: 20231014160307
title: AltSnap-便捷的拖动和管理窗口工具
tags: [窗口管理]
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231020215141
---

# AltSnap- 便捷的拖动和管理窗口工具

> [!note]+ AltSnap
> [项目地址](https://github.com/RamonUnch/AltSnap)
> [查看 Wiki](https://github.com/RamonUnch/AltSnap/wiki)
> [原始文档](https://stefansundin.github.io/altdrag/doc/)

AltSnap（详情请戳 [作者项目地址](https://github.com/RamonUnch/AltSnap)）是一款免费开源支持单击窗口上的任意位置来移动和调整窗口大小的小工具，相当于移植了 Linux 功能。简言之，一个 Alt 键 或者其他设定热键 + 鼠标搭配使用即可实现。

## 基本功能

首次使用：（推荐默认，当然可到设置中进行自定义，同样适用于部分游戏类窗口模式）

- Alt + 左键：任意移动（程序）窗口【无需单击标题栏即可移动】
- Alt + 右键：任意调整窗口边界（框）大小【无需准确单击窗口边框即可调整】
- Alt + 中键：呼出实用动作菜单【无需移动鼠标即可关闭、置顶、最大化程序窗口等等】
- Alt + 滚轮：更改任意窗口透明度【临摹或摸鱼场景较好】
- Alt + 双击左键：窗口最大化或恢复小窗口原状
- Alt + 双击右键：吸附至边缘

## 常用设置

![Pasted image 20231014160541](https://cdn.pkmer.cn/images/202310202147095.png!pkmer)

## 自定义布局配置

从 AltSnap 版本 1.47 开始，可以配置区域/捕捉布局，类似于 Microsoft Powertoys.FancyZones 工具。为此，您必须在设置对话框的 " 通用 " 部分中启用 " 按住 Shift 吸附到布局（在托盘菜单中配置）" 选项。

![Pasted image 20231014160956](https://cdn.pkmer.cn/images/202310202147185.png!pkmer)

此时，您可以从托盘菜单中打开多个测试窗口，并根据需要排列这些窗口。请注意，打开一个测试窗口后，您可以使用 Ctrl+N 快捷键打开其他窗口。下面提供了一个示例：

![Pasted image 20231014160551](https://cdn.pkmer.cn/images/202310202147605.png!pkmer)

将窗口位于您想要的位置，请点击托盘中的 " 将测试窗口另存为捕捉布局 " 菜单项。它会要求您确认，点击 " 确定 "，然后所有测试窗口都应该关闭。

> [!tip]+ 使用布局
> 接下来当您用 AltSnap 移动窗口时，按住 Shift 键就可以开始捕捉到刚才布置的捕捉布局，这将非常方便对窗口排布为您自己的布局。