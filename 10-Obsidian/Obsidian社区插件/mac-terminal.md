---
uid: 1793625612526001
title: "Obsidian 插件：Embedded Mac Terminal"
tags: ["第三方工具集成", "效率工具", "编程与脚本", "obsidian插件"]
description: "Open a real terminal next to your note, already in its folder. macOS only. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embedded Mac Terminal

> [!Note] 插件名片
> - 插件名称：Embedded Mac Terminal
> - 插件作者：nestedshell
> - 插件说明：Open a real terminal next to your note, already in its folder. macOS only. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nestedshell/obsidian-mac-terminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mac-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nestedshell/obsidian-mac-terminal/master/README.md)



## 概述

Embedded Mac Terminal 旨在解决笔记与代码文件分离导致的上下文切换痛点。它允许你在 Obsidian 笔记旁直接打开一个真实的 macOS 终端，并自动定位到当前笔记所在的文件夹。这意味着你无需在应用间来回切换，也无需手动输入 `cd` 命令，即可在笔记旁边直接运行构建脚本、执行 Git 操作或启动 Vim 等全屏应用，实现文档与代码的无缝协作。

典型场景包括在撰写项目文档时，直接在侧边终端运行测试或查看日志；或者在整理技术笔记时，快速调用 `claude` 或 `htop` 进行调试。例如，当你正在编写 API 文档时，可以右键点击对应的代码文件夹，选择“在终端中打开”，随即在分屏中执行相关命令，保持工作流的连贯性。

相比其他仅模拟终端界面的插件，该插件调用的是你系统真实的登录 Shell（如 zsh 或 bash），完整保留你的环境变量、配置文件及颜色主题。它支持标准的 Mac 快捷键（如 ⌘C/⌘V）和 Option 键特殊字符输入，体验与原生终端一致。此外，它允许为不同项目的终端设置名称和颜色标记，便于区分，且界面风格可跟随 Obsidian 主题，视觉上更加统一。

需要注意的是，该插件仅支持 macOS 11 及以上系统，无法在 Windows、Linux 或移动端使用。它运行的是具有你用户权限的真实 Shell，因此操作需谨慎，避免误删文件。如果你需要的是跨平台支持，或者仅需要简单的命令执行而不涉及复杂的全屏交互应用，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


