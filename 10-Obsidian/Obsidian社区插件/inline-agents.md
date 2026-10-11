---
uid: 1791709367793000
title: 'Obsidian 插件：Inline Agents'
tags: ['自动化与AI', '编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Turn "run this workflow" instructions in a note into a button that fires Claude Code or OpenCode at the note, with a live terminal underneath. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Agents

> [!Note] 插件名片
> - 插件名称：Inline Agents
> - 插件作者：Dan
> - 插件说明：Turn "run this workflow" instructions in a note into a button that fires Claude Code or OpenCode at the note, with a live terminal underneath. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/obsidian-inline-agents)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-agents)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/obsidian-inline-agents/master/README.md)



## 概述

**1. 主要功能**
该插件将笔记中的工作流指令转化为可点击的“智能体按钮”。点击后，它会在笔记下方启动实时终端，调用 Claude Code 或 OpenCode 对笔记内容进行处理；也可选择后台静默运行，完成后自动将结果写回笔记。

**2. 适用场景**
适用于需要自动化处理笔记内容的场景，特别是替代传统纯文本运行指令（如“运行某脚本”）的笔记系统。适合开发者或知识工作者在 Obsidian 中集成 AI 编程助手，实现从笔记到代码执行的无缝衔接。

**3. 核心特色**
- **跨平台兼容**：智能解析二进制路径，支持不同操作系统和环境（如 Mac 与容器），无需手动调整配置。
- **真实终端交互**：通过 Python PTY 技术提供真实的终端环境，确保 CLI 智能体正常交互，避免普通子进程导致的兼容性问题。
- **灵活部署**：支持本地符号链接直接加载，无需构建步骤，开箱即用。

**4. 使用建议**
启用前需在 Obsidian 设置中开启社区插件并激活 Inline Agents。建议在笔记中使用 `agent-button` 代码块定义工作流。由于插件依赖外部 CLI 工具，请确保已正确安装 Claude Code 或 OpenCode，并配置好相应的 API 密钥。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


