---
uid: 1791709366046000
title: 'Obsidian 插件：Claudian Mobile'
tags: ['自动化与AI', '移动端优化', '文字处理', 'obsidian插件']
description: 'A minimal AI writing and knowledge agent for your vault. Calls the Anthropic API directly, so it works on mobile as well as desktop. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Claudian Mobile

> [!Note] 插件名片
> - 插件名称：Claudian Mobile
> - 插件作者：charlesxiaomi
> - 插件说明：A minimal AI writing and knowledge agent for your vault. Calls the Anthropic API directly, so it works on mobile as well as desktop. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '移动端优化', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/charlesxiaomi/claudian-mobile)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?claudian-mobile)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/charlesxiaomi/claudian-mobile/master/README.md)



## 概述

**主要功能**
Claudian Mobile 是一个极简的 AI 写作与知识代理插件。它直接调用 Anthropic API，在右侧侧边栏提供流式聊天面板。AI 代理可通过内置工具（如读取、写入、修补、创建笔记及全库搜索）直接操作你的 Obsidian 库，并在执行编辑前以差异对比（Diff）形式展示变更。

**适用场景**
适用于需要 AI 辅助写作、整理笔记或查询知识库的用户。由于采用客户端直连 API 架构，无需 Node.js 或本地服务器，完美支持 Android/iOS 移动端及桌面端，适合移动办公场景。

**核心特色**
1. **跨平台原生支持**：无依赖本地环境，移动端体验流畅。
2. **安全可控**：所有路径严格限制在 Vault 内部，无法访问外部文件；支持自定义 Base URL，可指向代理或兼容网关。
3. **灵活交互**：支持在输入框直接切换模型及推理力度，无需进入设置；界面支持中英文自动适配。
4. **透明操作**：工具调用过程内联渲染，编辑结果需确认后才生效。

**使用建议**
需自备 Anthropic API 密钥（明文存储于插件数据文件中，请注意 Vault 安全性）。若使用自定义 Base URL，请确保该端点的安全性与隐私政策。注意 API 调用费用将计入你的个人账户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


