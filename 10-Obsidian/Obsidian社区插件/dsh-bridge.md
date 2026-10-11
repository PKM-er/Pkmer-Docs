---
uid: 1791709366646000
title: 'Obsidian 插件：DSH Bridge'
tags: ['自动化与AI', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
description: 'Embed your local DeepSeek Harness (DSH) agent in Obsidian to chat, edit, and manage notes in your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DSH Bridge

> [!Note] 插件名片
> - 插件名称：DSH Bridge
> - 插件作者：sky
> - 插件说明：Embed your local DeepSeek Harness (DSH) agent in Obsidian to chat, edit, and manage notes in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wozoulesky/dsh-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dsh-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wozoulesky/dsh-obsidian/master/README.md)



## 概述

**DSH Bridge 插件总结**

**主要功能**
该插件将本地运行的 DeepSeek Harness (DSH) 智能体原生嵌入 Obsidian。它通过 DSH 的 RPC 协议直接通信，允许 AI 在 Obsidian 界面内读取、搜索、编辑和管理你的笔记库，实现真正的本地化 AI 协作。

**适用场景**
适合希望利用本地 AI 辅助写作、整理笔记或管理知识库的高级用户。特别适用于需要严格数据隐私、不希望笔记上传至云端，且已部署本地 DSH 环境的桌面端 Obsidian 用户（需 Obsidian ≥ 1.7.2）。

**核心特色**
1. **原生 UI 体验**：非网页嵌入，聊天、工具卡片及审批流程均使用 Obsidian 原生界面，完美适配主题与快捷键。
2. **精细编辑**：支持词级 Diff 对比，选中文字后给出指令，可直观审查修改并一键撤销。
3. **无缝交互**：写操作确认和 AI 提问直接在侧边栏显示，无需切换窗口，且支持断线重连。
4. **智能诊断**：内置连接诊断功能，能自动检测端口并给出可操作的建议，降低配置门槛。

**使用建议**
使用前请确保本地已启动 DSH 实例（桌面版默认端口 19387，Web 版 3080），并确认 Obsidian 库位于 DSH 的可访问目录范围内。插件会自动检测连接，若遇问题请优先使用设置中的“诊断连接”功能排查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


