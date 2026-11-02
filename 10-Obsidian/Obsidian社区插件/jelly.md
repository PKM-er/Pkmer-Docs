---
uid: 1793625614344000
title: "Obsidian 插件：Jelly"
tags: ["自动化与AI", "图片与PDF", "效率工具", "obsidian插件"]
description: "Chat with your notes, read Markdown and PDFs, and organize your knowledge with an AI assistant. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Jelly

> [!Note] 插件名片
> - 插件名称：Jelly
> - 插件作者：fa3eng
> - 插件说明：Chat with your notes, read Markdown and PDFs, and organize your knowledge with an AI assistant. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fa3eng/jelly)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jelly)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fa3eng/jelly/master/README.md)



## 概述

Jelly 是一款专为桌面端 Obsidian 打造的 AI 助手，旨在帮助用户与笔记进行自然语言交互。它支持流式对话，能够读取 Vault 中的 Markdown 文件和文本型 PDF，并根据指令直接创建、编辑或删除笔记文件。插件内置独立的 Agent 服务进程，利用 Obsidian 自带的运行环境工作，用户无需额外安装 Node.js 即可快速上手，实现从问答到文件管理的闭环操作。

典型场景包括整理杂乱的知识库或处理长文档。例如，你可以让 Jelly 读取多篇 Markdown 笔记，总结核心观点并生成一份新的综述文档；或者在撰写报告时，直接要求它读取指定的 PDF 资料，提取关键数据并插入到当前编辑的笔记中。这种“边读边写”的能力，使得知识整理和文档创作变得更加高效，减少了手动复制粘贴和格式调整的繁琐步骤。

相比其他同类插件，Jelly 的特色在于其文件操作的安全性与独立性。它严格限制文件工具在当前 Vault 范围内运行，并检查路径与文件类型，防止越界访问。此外，它采用本地 JSONL 格式保存对话历史，数据完全存储在本地，不依赖云端同步。虽然目前仅支持文本型 PDF，不支持扫描件 OCR，但其对 Markdown 文件的版本检查编辑功能，使得自动化修改笔记更加可靠，适合对数据隐私有较高要求的用户。

使用前需注意，Jelly 目前仅在 macOS 上经过充分验证，Windows 和 Linux 用户可能遇到兼容性问题。由于文件删除操作是永久性的，且当前版本没有回收站或撤销功能，强烈建议在使用写入或删除功能前备份 Vault。此外，模型请求会将笔记内容发送至你配置的 API 服务商，请自行评估数据隐私风险。如果你需要处理大量扫描件 PDF 或依赖语义检索功能，Jelly 目前尚不满足这些需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


