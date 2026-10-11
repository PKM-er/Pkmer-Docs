---
uid: 1791709366649000
title: 'Obsidian 插件：DSH Embedded'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Host DeepSeek Harness (dsh) inside Obsidian — unified surface, vault-aware agent, persistent memory. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DSH Embedded

> [!Note] 插件名片
> - 插件名称：DSH Embedded
> - 插件作者：bzlir
> - 插件说明：Host DeepSeek Harness (dsh) inside Obsidian — unified surface, vault-aware agent, persistent memory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bzlir/obsidian-dsh-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dsh-embedded)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bzlir/obsidian-dsh-plugin/master/README.md)



## 概述

**DSH Embedded** 是一款将 DeepSeek Harness (dsh) 智能代理深度集成至 Obsidian 的插件，旨在实现 AI 助手与个人知识库的无缝协作。

**主要功能**
插件在 Obsidian 侧边栏嵌入 dsh Web UI，自动启动绑定当前 Vault 根目录的 `dsh web` 子进程，并将 Vault 注册为 dsh 工作区。它支持读写 Vault 文件，并在 Vault 内维护代理的工作记忆，同时具备清理崩溃残留进程的能力。

**适用场景**
适合希望在 Obsidian 中直接调用 DeepSeek 能力进行笔记整理、内容生成或知识检索的用户。特别适用于需要 AI 助手直接访问本地笔记库、且对数据隐私有较高要求的桌面端用户。

**核心特色**
1. **环境自适应**：自动扫描 nvm、Homebrew 等常见路径定位 dsh 和 Node.js，解决 Obsidian 内置 Electron Node 版本过低的问题。
2. **协议兼容**：自动检测并适配 dsh 0.1.1+ 的旧版及 0.1.5+ 的新版 BrowserAuth 协议，无需手动配置。
3. **持久化记忆**：代理记忆直接存储在 Vault 中，确保上下文连续性与数据本地化。

**使用建议**
需确保安装 Obsidian 1.13.0+ 及 Node.js 22.20+。建议通过全局命令 `npm install -g @deepseek-ai/dsh` 安装依赖。若自动检测失败，请在设置面板使用“Search for dsh”按钮或手动添加自定义路径。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


