---
uid: 1793625605749001
title: "Obsidian 插件：AI-Writer Assistant"
tags: ["自动化与AI", "文字处理", "第三方工具集成", "编辑工具", "obsidian插件"]
description: "Chat with Claude or ChatGPT about your current note, folder or vault, and let it draft and edit notes with your approval. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI-Writer Assistant

> [!Note] 插件名片
> - 插件名称：AI-Writer Assistant
> - 插件作者：gmaggess
> - 插件说明：Chat with Claude or ChatGPT about your current note, folder or vault, and let it draft and edit notes with your approval. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gmaggess/ai-assitant-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-writer-assistant)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gmaggess/ai-assitant-obsidian-plugin/master/README.md)



## 概述

AI-Writer Assistant 允许你直接调用 Claude 或 ChatGPT，针对当前笔记、指定文件夹或整个库进行对话。其核心功能在于让 AI 基于你选定的上下文范围，协助起草新内容或编辑现有笔记。所有修改操作默认都需要你手动批准，确保你对笔记内容的最终控制权，同时支持在设置中调整这一审批机制。

想象一下，当你整理某个项目文件夹时，可以询问 AI 该目录下所有笔记的共同主题，并让它生成一份总结文档；或者在撰写长文时，让 AI 基于当前文件内容优化段落结构。这种基于特定范围的交互，避免了 AI 因缺乏上下文而产生的幻觉，使辅助写作更加精准且贴合你的实际笔记体系。

与许多仅能处理单文件的插件不同，该工具支持将上下文扩展至文件夹或整个库，适合需要跨笔记关联分析的场景。此外，它具备独特的历史对话搜索功能，允许你用自然语言检索过往的聊天记录，并让 AI 总结相关对话内容，方便回溯之前的思路。需要注意的是，该插件没有内置遥测，但所有交互数据均通过你的 API 密钥直接发送至 Anthropic 或 OpenAI。

使用前需自行准备 Anthropic 或 OpenAI 的 API 密钥，并留意由此产生的 API 调用费用。由于 API 密钥存储在库内的 `data.json` 文件中，切勿将该文件公开同步或分享。如果你希望完全离线运行，或不想将笔记内容发送至第三方云端服务，此插件并不适合你。此外，若你不需要 AI 修改笔记的能力，建议在设置中关闭相关权限以增强安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


