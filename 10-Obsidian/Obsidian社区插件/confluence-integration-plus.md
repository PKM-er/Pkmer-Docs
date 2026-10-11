---
uid: 1791709366204000
title: 'Obsidian 插件：Confluence Integration Plus'
tags: ['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
description: 'Publish notes to Atlassian Confluence and pull changes made in Confluence back into your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Confluence Integration Plus

> [!Note] 插件名片
> - 插件名称：Confluence Integration Plus
> - 插件作者：Jake
> - 插件说明：Publish notes to Atlassian Confluence and pull changes made in Confluence back into your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/flyxhub/obsidian-integration-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?confluence-integration-plus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flyxhub/obsidian-integration-plus/master/README.md)



## 概述

**1. 主要功能**
该插件实现 Obsidian 笔记与 Atlassian Confluence Cloud 的双向同步。支持将本地笔记发布至 Confluence，并将 Confluence 中的更新拉取回本地库。内容基于 Atlassian Document Format (ADF) 进行转换，确保格式兼容。

**2. 适用场景**
适用于需要与团队通过 Confluence 协作，同时希望保留 Obsidian 个人知识管理习惯的用户。特别适合混合工作流：在 Obsidian 中整理思路，发布到 Confluence 供团队审阅或编辑，再同步回本地归档。

**3. 核心特色**
*   **双向同步**：支持发布（Push）和拉取（Pull）变更，保持两端内容一致。
*   **格式转换**：利用 `@markdown-confluence/lib` 库，精准处理 Markdown 到 ADF 的转换。
*   **多媒体支持**：能处理图表、公式及嵌入内容，并支持从 Atlassian 媒体服务下载附件。
*   **安全连接**：通过 OAuth 认证，仅向配置的 Confluence 站点及 Atlassian 官方 API 发送数据。

**4. 使用建议**
*   **版本要求**：仅限桌面端使用，需 Obsidian 1.11.4 或更高版本。
*   **权限配置**：需拥有 Atlassian Cloud 账户及对应 Confluence 站点的访问权限。
*   **选择性发布**：建议配置“选择发布哪些笔记”规则，避免无关笔记被同步。
*   **网络依赖**：首次连接需联网进行 OAuth 登录；若启用 Kroki/PlantUML，需配置相应的渲染服务器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


