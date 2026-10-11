---
uid: 1791709367773000
title: 'Obsidian 插件：Influencer Sync'
tags: ['第三方工具集成', '任务管理', '数据处理', 'obsidian插件']
description: 'Periodically synchronizes influencer cards with Jira. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Influencer Sync

> [!Note] 插件名片
> - 插件名称：Influencer Sync
> - 插件作者：ASBIS
> - 插件说明：Periodically synchronizes influencer cards with Jira. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/web-chats/obsidian-influencers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?influencers)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/web-chats/obsidian-influencers/master/README.md)



## 概述

**主要功能**
Influencer Sync 插件实现了 Obsidian 笔记与 Jira 中网红（Influencer）数据的定期双向同步。它将每个网红卡片存储为独立的 Markdown 文件，支持下载 Jira 中的注册表、频道、活动及评论数据，并允许将本地修改上传回 Jira。

**适用场景**
适用于需要管理网红合作、营销活动或品牌大使信息的团队。特别适合使用 Obsidian 作为知识管理工具，同时依赖 Jira 进行项目追踪的营销或运营人员。

**核心特色**
1. **双向同步与保护**：提供明确的“下载”和“上传”命令，采用乐观锁机制防止远程数据冲突，且每次操作需显式确认。
2. **灵活调度**：支持从 5 分钟到 60 分钟不等的自动同步间隔，启动时不自动请求，仅在计划时间或手动触发时运行。
3. **安全与兼容**：利用 Obsidian 原生请求机制绕过浏览器 CORS 限制，支持桌面和移动端；若权限受限则自动进入只读模式。
4. **AI 支持**：可自动下载当前的 AI 合同至指定文件夹。

**使用建议**
安装后请配置 Jira API URL 和个人访问令牌。建议将笔记文件夹设为 `Influencers` 以保持结构清晰。根据数据更新频率调整同步间隔（默认 60 分钟）。注意，该插件未经 Obsidian 官方人工审核，使用前请确保令牌安全存储，并建议在非生产环境测试双向同步功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


