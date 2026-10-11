---
uid: 1791709367256000
title: 'Obsidian 插件：Ghostwriter'
tags: ['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
description: 'Local Inline Completion - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ghostwriter

> [!Note] 插件名片
> - 插件名称：Ghostwriter
> - 插件作者：Amulya Jain
> - 插件说明：Local Inline Completion - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/amuhak/obsidian-copilot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ghostwriter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/amuhak/obsidian-copilot/master/README.md)



## 概述

**Ghostwriter** 是一款为 Obsidian 提供本地行内补全与 AI 编辑功能的插件。

1. **主要功能**：支持基于任意兼容 OpenAI 接口的 LLM 服务器（如 llama.cpp）进行实时文本补全，并允许用户通过指令对光标处或选中文本进行行内编辑（如转换格式）。
2. **适用场景**：适合希望利用本地大模型进行隐私安全写作辅助的用户，特别是使用 llama.cpp 等本地推理框架的场景，支持局域网或 Tailscale 远程连接。
3. **核心特色**：完全本地化，无需云端服务；智能键位绑定（Tab 接受整行，Ctrl+→ 接受单词，Esc 取消），不干扰常规编辑；针对 llama.cpp 优化，利用缓存复用显著降低延迟（实测从 700ms 降至 180ms）。
4. **使用建议**：需手动部署兼容服务器并配置 URL；Windows 用户建议指向 IP 地址而非 localhost 以避免 IPv6 连接问题；务必在服务器启动参数中设置 `--cache-reuse` 以提升性能；注意该插件尚未经过官方人工审核，需自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


