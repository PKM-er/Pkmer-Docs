---
uid: "1791709370633000"
title: "Obsidian 插件：Uncommon Terminal"
tags: ['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: "Run a real shell in a pane, rendered by Ghostty's terminal parser. Mouse-aware TUIs scroll properly. macOS and Linux. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Uncommon Terminal

> [!Note] 插件名片
> - 插件名称：Uncommon Terminal
> - 插件作者：Ron Amosa
> - 插件说明：Run a real shell in a pane, rendered by Ghostty's terminal parser. Mouse-aware TUIs scroll properly. macOS and Linux. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ronamosa/uncommon-terminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?uncommon-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ronamosa/uncommon-terminal/master/README.md)



## 概述

**Uncommon Terminal** 是一款为 Obsidian 打造的真实终端插件，支持 macOS 和 Linux 系统。

**主要功能**：在 Obsidian 侧边栏中运行完整的登录 Shell，支持作业控制及全屏 TUI 应用，而非简单的命令执行器。

**适用场景**：适合需要在笔记旁直接运行复杂终端程序（如 `btop`、`htop` 等监控工具）或进行系统管理的用户，实现“笔记+终端”的高效工作流。

**核心特色**：
1. **高保真渲染**：采用 Ghostty 的 VT 解析器（WebAssembly 编译），确保转义序列处理与真实终端一致。
2. **零编译依赖**：通过 Python 标准库 `pty` 模块构建 PTY 代理，无需针对 Electron 版本重新编译原生插件，安装即用。
3. **鼠标滚动优化**：智能识别处于替代屏幕且启用鼠标追踪的 TUI 应用，将滚轮事件正确编码为鼠标报告（SGR/X10），解决了传统 Web 终端中此类应用滚动失效或误操作的问题。

**使用建议**：确保系统已安装 Python 3（macOS 和大多数 Linux 发行版默认自带）。该插件未通过 Obsidian 官方人工审核，建议在使用前备份数据，并关注其兼容性更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

