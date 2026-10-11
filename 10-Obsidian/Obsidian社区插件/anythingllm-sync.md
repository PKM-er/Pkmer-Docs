---
uid: 1791709365336000
title: 'Obsidian 插件：AnythingLLM Sync'
tags: ['第三方工具集成', '自动化与AI', '文件管理', 'obsidian插件']
description: 'Automatically sync Markdown notes from a configurable Obsidian folder to an AnythingLLM workspace. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AnythingLLM Sync

> [!Note] 插件名片
> - 插件名称：AnythingLLM Sync
> - 插件作者：hboot
> - 插件说明：Automatically sync Markdown notes from a configurable Obsidian folder to an AnythingLLM workspace. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ngd-b/obsidian-anythingllm-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anythingllm-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ngd-b/obsidian-anythingllm-sync/master/README.md)



## 概述

**主要功能**
该插件自动将 Obsidian 指定文件夹中的 Markdown 笔记同步至 AnythingLLM 工作区。支持新建、编辑、重命名及删除笔记时的自动同步，利用内容哈希跳过未变更文件，并通过防抖机制优化写入性能。

**适用场景**
适用于构建个人知识管理流程，特别是结合 Obsidian Web Clipper 将网页内容存入 Inbox，再自动同步至 AnythingLLM 进行向量化处理，最终实现基于笔记内容的 AI 问答检索。

**核心特色**
1. **自动化同步**：实时响应文件变更，删除笔记时自动从检索库移除。
2. **安全存储**：使用 Obsidian SecretStorage 安全保存 API 密钥。
3. **灵活配置**：支持自选监控文件夹和工作区，提供批量同步及手动同步当前笔记的命令。
4. **高效机制**：内容哈希去重与防抖写入，减少不必要的 API 调用。

**使用建议**
确保 Obsidian 版本不低于 1.11.4，且设备可访问 AnythingLLM 实例。配置时需在 AnythingLLM 生成 Developer API 密钥，并在 Obsidian 中正确设置 URL 及目标工作区。建议将 Web Clipper 的保存路径设为插件监控的 Inbox 文件夹，以实现从剪藏到 AI 问答的全自动闭环。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


