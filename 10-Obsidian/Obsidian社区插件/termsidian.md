---
uid: 1793625621977000
title: "Obsidian 插件：System Terminal"
tags: ["编程与脚本", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Open a real terminal in the right sidebar, running your system shell on Windows, macOS and Linux. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：System Terminal

> [!Note] 插件名片
> - 插件名称：System Terminal
> - 插件作者：Inusui
> - 插件说明：Open a real terminal in the right sidebar, running your system shell on Windows, macOS and Linux. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/inusui/obsidian-termsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?termsidian)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/inusui/obsidian-termsidian/master/README.md)



## 概述

System Terminal 在 Obsidian 右侧边栏嵌入一个真实的系统终端，直接运行你电脑上的原生 Shell（如 Windows 的 PowerShell、macOS/Linux 的 bash 或 zsh）。它不依赖 Python 或 Node.js 环境，而是通过一个独立的 Go 程序建立真实的 PTY 连接，确保你能获得完整的终端体验，包括颜色显示、Tab 补全、Ctrl+C 中断以及运行交互式程序的能力。

想象一下，你正在撰写一篇关于服务器部署的技术笔记，无需切换窗口，直接在侧边栏输入 `ssh` 命令连接远程服务器，或运行 `git status` 检查代码状态。另一个场景是，你在整理本地文档时，需要快速执行 `ls -la` 查看文件权限，或运行 `code .` 启动编辑器，这些操作都能在笔记旁边即时完成，保持工作流的连贯性。

相比其他基于模拟的终端插件，System Terminal 的最大特色是“真实”与“轻量”。它使用 Go 编写的独立二进制文件，避免了因 Obsidian 更新 Electron 版本导致的兼容性问题，也无需用户额外安装 Python 环境。此外，它会自动适配 Obsidian 当前主题的等宽字体和配色方案，视觉上与笔记界面无缝融合，且关闭面板时会彻底清理进程，不留后台残留。

使用前请注意，该插件目前主要经过 Windows 11 和 Linux (Flatpak) 的测试，macOS 虽可构建但未经充分验证。如果你通过 Flatpak 安装 Obsidian，必须手动授予特定权限，否则终端将运行在沙箱内无法访问系统程序。此外，它不适合需要复杂多路复用（如 tmux 会话管理）或远程服务器直接映射的高级需求，仅作为本地系统 Shell 的便捷入口。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


