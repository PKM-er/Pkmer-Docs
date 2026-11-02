---
uid: 1793625612518000
title: "Obsidian 插件：Embed File Menu"
tags: ["文件管理", "界面优化", "效率工具", "obsidian插件"]
description: "Right-click menu for embedded files in reading view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embed File Menu

> [!Note] 插件名片
> - 插件名称：Embed File Menu
> - 插件作者：LXXVII
> - 插件说明：Right-click menu for embedded files in reading view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/llxzxzxll/embed-file-menu)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embed-file-menu)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/llxzxzxll/embed-file-menu/master/README.md)



## 概述

Embed File Menu 解决了在 Obsidian 阅读视图中，嵌入附件（如图片、PDF、压缩包）后难以直接操作底层文件的问题。它为核心功能提供了零配置的右键上下文菜单，让你无需在侧边栏中费力寻找文件，即可对嵌入项执行“在系统资源管理器中显示”、“在库中定位”、“复制文件对象”或“复制文件路径”等操作，极大简化了从笔记到系统文件的交互流程。

典型场景包括：当你需要在笔记中引用一份 PDF 报告，并想将其发送给同事时，只需右键点击嵌入的报告图标，选择“复制文件”，即可直接粘贴到 Telegram、Discord 或邮件客户端中，无需手动打开文件夹拖拽。另一个场景是快速定位源文件，例如嵌入了一张截图，你想查看其原始位置或重命名，右键选择“在系统资源管理器中显示”即可直接高亮该文件，省去了在文件系统中层层查找的麻烦。

相比其他仅支持打开文件的插件，Embed File Menu 的特色在于支持将“实际文件对象”复制到剪贴板，这在 Linux 系统上会自动适配 Wayland 或 X11 环境，确保二进制文件能正确粘贴。此外，它内置了 33 种语言支持，能自动跟随 Obsidian 界面语言切换，包括简体中文和繁体中文，无需额外配置即可获得本地化体验，对多语言用户非常友好。

需要注意的是，该插件主要面向桌面端用户，部分高级功能如“复制文件对象”在移动端不可用，仅支持复制路径。如果你主要在手机端使用 Obsidian，或者只需要简单的文件打开功能，此插件的增益有限。此外，它不修改文件内容，仅作为文件管理工具，不适合需要直接编辑嵌入文件内容的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


