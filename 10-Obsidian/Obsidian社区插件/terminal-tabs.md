---
uid: 1793625622613000
title: "Obsidian 插件：Terminal Tabs"
tags: ["编程与脚本", "效率工具", "界面优化", "obsidian插件"]
description: "Open an integrated terminal with tabs in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Terminal Tabs

> [!Note] 插件名片
> - 插件名称：Terminal Tabs
> - 插件作者：krzysztofkut
> - 插件说明：Open an integrated terminal with tabs in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/krzysztofkut/obsidian-terminal-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terminal-tabs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/krzysztofkut/obsidian-terminal-tabs/master/README.md)



## 概述

Terminal Tabs 将集成终端直接嵌入 Obsidian 工作区，核心功能是在笔记旁开启多个标签页终端。它基于真实 PTY 技术，支持 vim、htop 等复杂命令行工具，并自动检测 zsh、PowerShell 等主流 Shell。所有操作均在本地运行，无网络请求、无遥测数据，确保隐私安全，让你无需切换窗口即可在笔记与代码间无缝协作。

典型场景包括在撰写技术文档时，直接运行 `git log` 查看提交历史，或执行 `grep` 搜索代码片段。例如，你可以将笔记中选中的命令直接发送到终端执行，或从文件资源管理器拖拽文件路径至终端。此外，终端输出中的笔记路径支持点击跳转，能迅速定位到相关文档，极大提升了调试与文档同步的效率。

相比其他终端插件，其特色在于终端标签页完全遵循 Obsidian 的标签管理逻辑，可自由分屏、固定或拖拽至侧边栏。它支持自定义 Shell 配置文件，不仅能启动 Shell，还能一键启动 Claude Code 等 CLI 工具。界面颜色自动跟随 Obsidian 主题，且支持多语言界面，包括简体中文，视觉体验与原生应用高度一致。

使用前需注意，该插件仅限桌面端（macOS、Linux、Windows），且依赖系统 Python 3 环境，Windows 用户需额外安装 pywinpty 库。它不适合移动端用户，也不适合需要完全隔离沙箱环境的场景，因为终端拥有当前用户的完整文件读写权限。若你主要使用移动端 Obsidian，或希望避免本地环境配置，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


