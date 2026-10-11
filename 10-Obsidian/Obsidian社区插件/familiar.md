---
uid: 1791709366976000
title: 'Obsidian 插件：Familiar'
tags: ['自动化与AI', '第三方工具集成', '文字处理', '效率工具', 'obsidian插件']
description: 'An AI assistant that can read and write your notes. Bring your own model - OpenAI, Anthropic, Ollama, or any OpenAI-compatible endpoint. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Familiar

> [!Note] 插件名片
> - 插件名称：Familiar
> - 插件作者：Pier-Rick Lamontagne
> - 插件说明：An AI assistant that can read and write your notes. Bring your own model - OpenAI, Anthropic, Ollama, or any OpenAI-compatible endpoint. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bardicus-kilgore/familiar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?familiar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bardicus-kilgore/familiar/master/README.md)



## 概述

**Familiar** 是一款专为 Obsidian 打造的 AI 助手插件，核心在于具备直接读写笔记的能力，而非仅进行对话。

**主要功能**：
1. **笔记操作**：支持搜索库、读取、创建及编辑笔记。
2. **图片生成**：内置“图片工作室”，可组合提示词并通过 ComfyUI 生成图片插入笔记。
3. **灵活模型**：支持 OpenAI、Anthropic、本地 Ollama 或任何兼容 OpenAI 接口的端点，无需订阅第三方服务。

**适用场景**：
适合希望利用 AI 自动化整理知识、辅助写作，且重视数据隐私（可本地运行模型）的用户。

**核心特色**：
1. **安全可控**：所有编辑以 Diff 形式展示，需手动点击“应用”或“拒绝”，支持标记信任文件夹以跳过确认。
2. **版本备份**：覆盖笔记前自动将旧版存入 `AI-Versions/` 文件夹，确保可手动恢复。
3. **隐私优先**：API Key 仅存储于本地 Vault，仅发送至用户配置的端点。

**使用建议**：
该插件未上架社区市场，需手动克隆代码并执行 `npm install && npm run build` 构建安装。配置时需确保所选模型支持工具调用（Tool Calling），并根据需求选择云端或本地模型端点。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


