---
uid: 1791709365378000
title: 'Obsidian 插件：Ask AI'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Open selected text or an entire note in a new consumer AI chat. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ask AI

> [!Note] 插件名片
> - 插件名称：Ask AI
> - 插件作者：Alberto
> - 插件说明：Open selected text or an entire note in a new consumer AI chat. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/albibenni/obsidian-ask-ai)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ask-ai)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/albibenni/obsidian-ask-ai/master/README.md)



## 概述

**主要功能**
Ask AI 插件允许用户将 Obsidian 中选中的文本或整篇笔记快速传输至外部 AI 聊天平台（如 ChatGPT、Claude、Gemini 或自定义 HTTPS 链接）。它无需 API 密钥，直接利用浏览器现有的消费级 AI 服务，支持移动端和桌面端。

**适用场景**
适用于需要频繁利用外部 AI 助手处理笔记内容的用户，例如对特定段落进行润色、翻译、摘要生成，或基于整篇笔记内容提出复杂问题。特别适合不想配置复杂 API 接口，希望直接利用日常使用的 AI 网页版进行交互的场景。

**核心特色**
1. **零配置接入**：无需开发者订阅或 API Key，直接打开浏览器新标签页。
2. **智能传输机制**：短内容通过 URL 预填充（ChatGPT/Claude）或剪贴板（Gemini/自定义）传输；长内容强制使用剪贴板以避免浏览器历史泄露敏感数据。
3. **安全可控**：插件仅生成草稿并复制，绝不自动发送消息，用户需手动确认并发送。
4. **隐私保护**：长内容通过剪贴板传输，避免大段文本残留在浏览器 URL 历史中。

**使用建议**
- 处理敏感或隐私内容时，建议优先选择 Gemini 或自定义链接等使用剪贴板传输的提供商，避免 URL 预填充带来的历史泄露风险。
- 注意插件会在草稿末尾添加 `Request:` 标记，请在 AI 聊天框中补全具体指令后再发送。
- 确保 Obsidian 版本为 1.13.0 或更高，并正确配置目标 AI 平台的 HTTPS 新聊天 URL。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


