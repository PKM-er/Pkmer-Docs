---
uid: 1791709370655000
title: 'Obsidian 插件：UnitedShare'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Ask the model behind api.unitedshare.ai from the current note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：UnitedShare

> [!Note] 插件名片
> - 插件名称：UnitedShare
> - 插件作者：united-share
> - 插件说明：Ask the model behind api.unitedshare.ai from the current note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/united-share/obsidian-unitedshare)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unitedshare)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/united-share/obsidian-unitedshare/master/README.md)



## 概述

**1. 主要功能**
UnitedShare 插件允许用户在 Obsidian 侧边栏中，基于当前笔记或选中文本向 UnitedShare 平台的 AI 模型提问。它支持流式响应，实时显示答案，并能通过 `@` 符号引用库内其他笔记作为上下文。

**2. 适用场景**
适用于需要结合本地笔记内容进行 AI 辅助写作、代码生成或知识检索的场景。特别适合希望将 AI 响应直接转化为本地文件（如 Python、JavaScript 脚本）并执行的用户。

**3. 核心特色**
*   **本地优先与安全**：API 密钥仅存储在本地 `data.json` 中，不随插件文件夹分发；数据隐私受保护。
*   **代码自动化**：若 AI 返回代码块（Python/JS/Bash），插件可自动将其写入本地库文件，并支持直接启动执行。
*   **流式交互**：采用流式传输技术，文本生成即时显示，提升交互体验。
*   **上下文引用**：支持通过 `@` 提及特定笔记，将其内容作为 `<linked_content>` 发送给模型。

**4. 使用建议**
*   需先自行部署 UnitedShare 服务或获取官方 API 密钥。
*   在插件设置中填入密钥后，即可在侧边栏开始对话。
*   注意：该插件未通过 Obsidian 官方人工审核，请自行评估安全性。
*   利用其代码执行功能时，请确保对 AI 生成的脚本内容进行审查，避免安全风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


