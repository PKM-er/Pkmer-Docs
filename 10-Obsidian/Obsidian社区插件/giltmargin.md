---
uid: 1791709367259000
title: 'Obsidian 插件：Giltmargin'
tags: ['自动化与AI', '移动端优化', '第三方工具集成', 'obsidian插件']
description: 'Ask a Cursor cloud agent questions about your vault from iPhone, Android, or desktop. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Giltmargin

> [!Note] 插件名片
> - 插件名称：Giltmargin
> - 插件作者：Gokulnathan B
> - 插件说明：Ask a Cursor cloud agent questions about your vault from iPhone, Android, or desktop. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '移动端优化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gokulnathan66/giltmargin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?giltmargin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gokulnathan66/giltmargin/master/README.md)



## 概述

**1. 主要功能**
Giltmargin 允许用户通过 iPhone、Android 或桌面端，向 Cursor 云端代理提问关于本地 Obsidian 库的问题。插件在本地读取当前笔记并检索相关上下文，仅将筛选后的文本发送给 AI，实现跨设备问答。

**2. 适用场景**
适合需要在移动设备上快速查询本地知识库、回顾笔记内容或进行多轮对话的用户，尤其适用于无法直接访问服务器或复杂代码库的个人笔记管理场景。

**3. 核心特色**
*   **隐私安全**：无需 GitHub/GitLab 仓库，AI 仅能访问插件提供的笔记片段，无法直接访问整个 Vault。
*   **本地检索**：在设备本地进行关键词匹配，仅发送最高排名的上下文，保护数据隐私。
*   **上下文保持**：后续问题复用同一代理，保留对话记忆。
*   **零服务器依赖**：无需自建服务器或模型密钥，直接消耗 Cursor 订阅额度。

**4. 使用建议**
*   需安装 Obsidian 1.13.0 及以上版本，并在 Cursor 后台生成 API Key 填入插件设置（密钥通过 SecretStorage 加密存储）。
*   移动端因不支持流式响应，答案需轮询获取，首次响应因启动虚拟机可能需约一分钟，请耐心等待。
*   注意：目前 Cursor 不支持 OAuth/SSO 登录，必须使用 API Key 认证。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


