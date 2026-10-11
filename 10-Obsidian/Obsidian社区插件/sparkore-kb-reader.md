---
uid: 1791709370086000
title: 'Obsidian 插件：Sparkore KB Reader'
tags: ['移动端优化', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Read selected GitHub knowledge base folders in a mobile-friendly local cache. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sparkore KB Reader

> [!Note] 插件名片
> - 插件名称：Sparkore KB Reader
> - 插件作者：Sparkore
> - 插件说明：Read selected GitHub knowledge base folders in a mobile-friendly local cache. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['移动端优化', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sparkore/sparkore-kb-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sparkore-kb-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sparkore/sparkore-kb-reader/master/README.md)



## 概述

**主要功能**
Sparkore KB Reader 允许用户在 Obsidian 中直接读取 GitHub 仓库中指定的知识库文件夹。它通过 HTTP 请求将远程文件同步至本地 Vault 的指定目录，形成只读缓存，不克隆整个仓库，也不回传本地修改。

**适用场景**
特别适用于游戏开发或团队协作项目，需频繁查阅存放在 GitHub 上的文档。支持桌面端、Android 及 iOS 平台，适合需要移动端离线阅读团队知识库的用户。

**核心特色**
1. **精准同步**：仅下载配置的特定路径，利用 SHA 校验避免重复下载，支持增量更新。
2. **灵活配置**：支持多项目共存，每个项目可独立设置仓库、分支及本地存储路径，可临时切换分支。
3. **移动友好**：纯 Web API 实现，无需 Node.js 或 Git 可执行文件，完全兼容 Obsidian 移动端沙箱环境。
4. **安全存储**：GitHub Token 存储在 Obsidian SecretStorage 中，而非明文配置。

**使用建议**
配置时明确指定 KB 根路径以减小下载体积；建议开启“启动时刷新”以保持文档最新；注意该插件为只读缓存，如需编辑请直接在 GitHub 操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


