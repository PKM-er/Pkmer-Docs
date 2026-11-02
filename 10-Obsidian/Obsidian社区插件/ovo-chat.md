---
uid: 1793625619724001
title: "Obsidian 插件：OvO Chat"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Custom conversation plugin based on deepseek API. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OvO Chat

> [!Note] 插件名片
> - 插件名称：OvO Chat
> - 插件作者：munroe153
> - 插件说明：Custom conversation plugin based on deepseek API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/munroe153/OvO-Chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ovo-chat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/munroe153/OvO-Chat/master/README.md)



## 概述

OvO Chat 是一款基于 DeepSeek API 的分支对话插件，旨在解决传统线性聊天中“改一句就要重头再来”的痛点。它将每段对话构建为“问→答”的树状结构，允许同一问题保留多个不同版本的答案。用户不仅可以随时重新生成回答，还能直接编辑已发送的问题以创建新分支，所有数据均独立存储在插件目录中，确保对话逻辑清晰且互不干扰。

在典型场景中，当你需要对比不同措辞对 AI 回答的影响时，无需新建多个会话，只需在原有对话中编辑问题即可生成新分支。此外，若 AI 生成的回答包含数据图表或流程图，插件能直接渲染 Charts 代码块和 Mermaid 图表，避免了解析错误导致的显示空白，让复杂信息的可视化阅读更加直观。

相比同类插件，OvO Chat 的特色在于其强大的移动端适配性与只读工具组。它无需 Node.js 环境，完美支持 iOS 和 Android 设备。内置的只读工具允许 AI 搜索笔记、读取当前文件内容，从而结合你的知识库进行回答，但严格限制了对库文件的修改权限。此外，它还支持 DeepSeek 官方联网搜索，并能展示引用来源，增强了回答的可信度。

使用前需注意，该插件依赖 DeepSeek API 密钥，且密钥通过 Obsidian 的密钥存储管理，不同设备需单独配置。它不提供 Markdown 导出功能，仅支持复制单条消息。如果你需要 AI 直接修改或创建笔记文件，或者希望将对话历史同步到其他笔记应用中，这款插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


