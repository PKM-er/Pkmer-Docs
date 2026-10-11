---
uid: 1791709366507000
title: 'Obsidian 插件：Dev Runner'
tags: ['编程与脚本', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Run and manage package scripts and README shell commands in the background. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dev Runner

> [!Note] 插件名片
> - 插件名称：Dev Runner
> - 插件作者：Nico Blum
> - 插件说明：Run and manage package scripts and README shell commands in the background. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nblum/obsidian-dev-runner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dev-runner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nblum/obsidian-dev-runner/master/README.md)



## 概述

**Dev Runner** 是一款允许在 Obsidian 内直接运行和管理开发命令的插件，无需打开外部终端窗口。

**主要功能**：自动发现 `package.json` 脚本及 Markdown 中的 Shell 命令块，支持一键启动、停止、重启进程，并实时捕获输出日志。

**适用场景**：适合前端或全栈开发者在编写文档（README）或笔记时，直接测试代码片段或运行本地开发服务器（如 npm/pnpm/Yarn/Bun 项目）。

**核心特色**：
1. **进程管理**：所有命令在后台运行，保留最近 50 条会话历史，支持查看完整进程树。
2. **智能检测**：自动识别包管理器类型，防止同一工作目录重复运行相同命令。
3. **无缝集成**：在侧边栏提供控制面板，命令生命周期与 Obsidian 绑定，界面整洁。

**使用建议**：建议在笔记中启用 Shell 代码块执行功能，利用侧边栏监控长期运行的服务（如本地服务器）。注意该插件涉及执行系统命令，请确保对运行的脚本安全性有充分评估。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


