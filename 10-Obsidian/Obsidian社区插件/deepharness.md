---
uid: 1791709366473000
title: 'Obsidian 插件：DeepHarness'
tags: ['自动化与AI', '第三方工具集成', '编辑工具', 'obsidian插件']
description: 'Chat with a DeepSeek Harness agent inside your vault: it runs bash, edits files, and searches the web to work on your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DeepHarness

> [!Note] 插件名片
> - 插件名称：DeepHarness
> - 插件作者：陈景帅
> - 插件说明：Chat with a DeepSeek Harness agent inside your vault: it runs bash, edits files, and searches the web to work on your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cjs19890026-cmyk/dsh-obsidian-DeepHarness)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?deepharness)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cjs19890026-cmyk/dsh-obsidian-DeepHarness/master/README.md)



## 概述

**DeepHarness** 是一款为 Obsidian 打造的 AI 助手插件，它通过集成 DeepSeek Harness (DSH) 代理，让用户在侧边栏直接指挥 AI 处理笔记库任务。

**主要功能**：插件将 Obsidian 笔记库作为工作目录，调用 DSH 代理自主执行 Bash 命令、文件读写、网络搜索及子代理任务，实现从对话到实际操作的自动化闭环。

**适用场景**：适合需要深度自动化管理笔记的用户，如批量整理文件、执行复杂脚本、检索网络资料并整合进笔记，或进行跨文件的代码/数据操作。

**核心特色**：采用“执行下沉”架构，插件仅负责 UI 渲染与进程桥接，核心逻辑由 DSH 运行时处理。相比同类插件，它更轻量且充分利用了 DSH 的全套工具集，支持复用本地 DSH 配置与凭证。

**使用建议**：使用前需全局安装 DSH CLI 并配置 DeepSeek API 密钥。建议在插件设置页点击“Run check”确认环境就绪。由于代理拥有 Bash 执行权限，操作时需谨慎，确保任务指令清晰，避免误删重要文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


