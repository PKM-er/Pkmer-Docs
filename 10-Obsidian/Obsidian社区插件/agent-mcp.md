---
uid: 1786577075907004
title: 'Obsidian 插件：Agent MCP'
tags: ['编程与脚本', '第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
description: '在Obsidian里运行代码代理（Claude Code、Codex、Ollama）。自带一个内置终端，还能通过MCP展示当前选中内容和打开的编辑器。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent MCP

> [!Note] 插件名片
> - 插件名称：Agent MCP
> - 插件作者：Robert Spaans
> - 插件说明：在Obsidian里运行代码代理（Claude Code、Codex、Ollama）。自带一个内置终端，还能通过MCP展示当前选中内容和打开的编辑器。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编程与脚本', '第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rospaans/obsidian-agent-mcp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-mcp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rospaans/obsidian-agent-mcp/master/README.md)



## 概述

### Agent MCP 插件总结
1. **主要功能**：可在 Obsidian 内运行 Claude Code、Codex、Ollama 等编码代理，自带内置终端，还支持通过 WebSocket 实现 IDE 集成，开启本地服务器与编码代理连接。
2. **适用场景**：适用于需要借助大语言模型（LLMs）维护知识库或任务管理的场景，让 LLMs 处理主要工作。
3. **核心特色**：内置终端基于 xterm.js 和 Python 3，无需编译原生二进制文件；可直接启动所选代理，能在面板顶部切换代理，还能在设置中仅启用常用代理；终端默认从保险库根目录启动，遵循系统 `$SHELL`；IDE 集成可让编码代理自动发现并连接 Obsidian。
4. **使用建议**：可通过 ribbon 图标或“Open Agent Terminal”命令打开终端；若选择未安装 CLI 的代理，按终端提示安装；在设置中按需启用代理并调整默认选项。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


