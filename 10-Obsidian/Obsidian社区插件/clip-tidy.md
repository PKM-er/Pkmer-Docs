---
uid: 1791709366066000
title: 'Obsidian 插件：Clip Tidy'
tags: ['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Automatically organize clipped notes into existing folders with AI summaries and related notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clip Tidy

> [!Note] 插件名片
> - 插件名称：Clip Tidy
> - 插件作者：heiyuai
> - 插件说明：Automatically organize clipped notes into existing folders with AI summaries and related notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/heiyuai/obsidian-clip-tidy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clip-tidy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/heiyuai/obsidian-clip-tidy/master/README.md)



## 概述

**主要功能**：Clip Tidy 是一款 Obsidian 插件，用于自动整理剪藏笔记。它利用 AI 生成摘要、标签及分类理由，并建立相关笔记链接。插件支持自动检测目标文件夹或自定义列表，将高置信度笔记自动归档，低置信度则留待人工确认。

**适用场景**：适合使用 Obsidian Web Clipper 或其他工具保存大量 Markdown 剪藏，但缺乏系统化管理的用户。特别适用于希望利用 AI 辅助知识整理、建立个人知识库关联，且偏好中文界面的桌面端用户。

**核心特色**：
1. **AI 智能整理**：基于 OpenAI 兼容接口（支持本地模型），自动添加摘要与关联链接，保留原文。
2. **安全可控**：提供“已整理/待处理/需审核/失败”分类视图，支持撤销移动操作及原始文本备份，防止误操作。
3. **灵活配置**：支持启动时、新笔记到达时或手动触发整理，自动处理文件名冲突。

**使用建议**：
1. 目前需手动安装（下载 release 文件至插件目录），尚未上架社区目录。
2. 务必配置支持 OpenAI 格式的 API 端点（如本地 LLM 或云端服务）。
3. 切勿复制他人的 `data.json`，以免泄露 API 密钥或混淆备份数据。
4. 建议定期查看“需审核”标签页，确认 AI 分类准确性，以优化后续自动归档效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


