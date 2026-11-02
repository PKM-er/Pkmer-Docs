---
uid: 1793625605641001
title: "Obsidian 插件：AI Scripts"
tags: ["自动化与AI", "编程与脚本", "安全与隐私", "效率工具", "obsidian插件"]
description: "Manage, categorize and safely run local automation scripts for AI agents with parameter validation, real-time streaming execution view, and strict process control. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Scripts

> [!Note] 插件名片
> - 插件名称：AI Scripts
> - 插件作者：Emanuell
> - 插件说明：Manage, categorize and safely run local automation scripts for AI agents with parameter validation, real-time streaming execution view, and strict process control. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编程与脚本', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuellcarvalhopires/obsidian-ai-scripts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-scripts)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuellcarvalhopires/obsidian-ai-scripts/master/README.md)



## 概述

AI Scripts 将本地自动化脚本管理引入 Obsidian，核心在于为 AI 代理提供安全、可控的执行环境。它允许用户通过 Markdown 笔记定义脚本，利用 YAML 元数据声明参数结构，并内置严格的参数验证机制。在脚本运行前，插件会校验必填项、数据类型及正则约束，自动填充默认值并剔除未声明的参数，确保只有符合规范的指令才能触发操作系统进程，从源头杜绝因参数错误导致的意外行为。

典型场景包括日常库维护与数据提取。例如，你可以运行内置的 `links_quebrados` 脚本，快速列出指向缺失笔记的断链，或执行 `notas_orfas` 找出没有任何链接关联的孤立笔记。此外，`backup_cofre` 脚本支持在库外创建带时间戳的 ZIP 备份，并自动轮换旧备份，无需手动编写复杂的 Shell 命令即可实现库的定期归档。

相比普通终端插件，AI Scripts 的最大特色是“安全网关”与实时可视化。它支持通过 `{{secret:NAME}}` 占位符注入环境变量，并在实时输出流中自动脱敏敏感信息，防止密钥泄露。执行面板提供实时终端输出、耗时计时及一键终止功能，且支持将脚本注册为 MCP 工具，让 Claude Code 等 AI 客户端能直接调用这些经过验证的本地脚本，实现人机协作的闭环。

使用前需确保系统 PATH 中包含 Python 环境，因为内置脚本依赖 Python 3 标准库。该插件不适合需要复杂图形界面交互或高频实时数据流处理的场景，其设计初衷是轻量级的库内自动化。若你仅需要简单的文件重命名或格式转换，原生 Obsidian 功能可能已足够；但若涉及跨文件逻辑处理、外部 API 调用或需要 AI 代理介入的复杂工作流，AI Scripts 提供了比手动运行脚本更稳健的解决方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


