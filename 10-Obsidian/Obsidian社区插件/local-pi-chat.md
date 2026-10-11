---
uid: 1791709369201000
title: 'Obsidian 插件：Pi Chat'
tags: ['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
description: 'Chat with your local pi coding agent. Pi runs on your machine; this plugin provides the UI and exposes your vault over a local HTTP endpoint so pi can read it via curl. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pi Chat

> [!Note] 插件名片
> - 插件名称：Pi Chat
> - 插件作者：acewan
> - 插件说明：Chat with your local pi coding agent. Pi runs on your machine; this plugin provides the UI and exposes your vault over a local HTTP endpoint so pi can read it via curl. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/acewan-kai/obsidian-pi-chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-pi-chat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/acewan-kai/obsidian-pi-chat/master/README.md)



## 概述

**主要功能**
Pi Chat 是一款本地化 AI 编程助手插件。它在 Obsidian 侧边栏提供聊天界面，通过本地 HTTP 服务器将 Vault 笔记暴露给 `pi` 子进程，使其能读取笔记、标签及反向链接，实现基于个人知识库的对话与代码辅助。

**适用场景**
适合希望利用本地 AI 代理处理代码任务，同时需要 AI 直接访问 Obsidian 笔记内容的开发者或知识工作者。特别适用于离线环境或对数据隐私要求高、不愿将笔记上传至云端 API 的用户。

**核心特色**
1. **完全本地运行**：AI 进程在本地执行，数据不出内网，保障隐私安全。
2. **深度 Vault 集成**：通过 `curl` 接口让 AI 实时读取当前笔记、选中内容及搜索结果，实现上下文感知。
3. **轻量架构**：插件仅作为 UI 壳层，核心逻辑由独立的 `pi` 代理处理，职责分离清晰。

**使用建议**
1. **前置安装**：需先通过 npm 全局安装 `pi-coding-agent` 并配置好环境。
2. **手动部署**：目前需手动构建并复制插件文件至 `.obsidian/plugins/local-pi-chat/` 目录，注意文件夹名须与 manifest ID 一致。
3. **权限管理**：默认只读，若需 AI 修改笔记，请谨慎开启 POST 写入权限，防止误操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


