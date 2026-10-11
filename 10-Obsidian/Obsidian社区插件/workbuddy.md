---
uid: 1791709371112000
title: 'Obsidian 插件：WorkBuddy'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Chat with your locally installed WorkBuddy from your vault. Sends the current note or selection as context, streams replies in a sidebar, and lets WorkBuddy read and edit notes. Unofficial community plugin; needs WorkBuddy installed and signed in. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WorkBuddy

> [!Note] 插件名片
> - 插件名称：WorkBuddy
> - 插件作者：Jason
> - 插件说明：Chat with your locally installed WorkBuddy from your vault. Sends the current note or selection as context, streams replies in a sidebar, and lets WorkBuddy read and edit notes. Unofficial community plugin; needs WorkBuddy installed and signed in. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jsun2020/workbuddy-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?workbuddy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jsun2020/workbuddy-obsidian-plugin/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 内直接调用本地安装的腾讯 WorkBuddy 桌面应用进行 AI 对话。它支持将当前笔记或选中文本作为上下文发送，在侧边栏流式显示回复，并允许 AI 读取、搜索、创建及编辑库内笔记。

**2. 适用场景**
适用于已安装并登录 WorkBuddy 的 Windows（已验证）或 macOS/Linux（尽力支持）用户。适合需要在笔记写作过程中快速查询资料、生成内容或让 AI 辅助整理、修改文档的场景，无需额外配置 API 或服务器。

**3. 核心特色**
*   **零配置**：复用 WorkBuddy 本地登录状态，无需 API Key 或端口设置。
*   **深度集成**：支持多标签对话、上下文切换（当前笔记/选区）、回复复制及直接插入光标处。
*   **权限可控**：提供“只读”、“允许编辑笔记”（默认）和“完全访问”三种权限模式，保障数据安全。
*   **会话持久化**：聊天记录保存在本地，重新打开可恢复服务端上下文。

**4. 使用建议**
*   确保 WorkBuddy 桌面端已安装并至少登录一次。
*   若插件无法检测到 WorkBuddy，请进入设置手动指定 CLI 路径。
*   默认权限为“允许编辑笔记”，若仅需咨询建议，建议切换为“只读”模式以防误改。
*   利用“插入到光标处”功能可高效整合 AI 生成的内容至笔记中。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


