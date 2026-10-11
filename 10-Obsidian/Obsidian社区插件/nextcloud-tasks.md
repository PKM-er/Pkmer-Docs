---
uid: 1791709368812000
title: 'Obsidian 插件：Nextcloud Tasks'
tags: ['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Read, create, edit and complete your Nextcloud Tasks in a note, over CalDAV. Your tasks stay on the server: no markdown mirror, no checkboxes in your notes, nothing that can drift out of sync. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nextcloud Tasks

> [!Note] 插件名片
> - 插件名称：Nextcloud Tasks
> - 插件作者：Juan Ferranti
> - 插件说明：Read, create, edit and complete your Nextcloud Tasks in a note, over CalDAV. Your tasks stay on the server: no markdown mirror, no checkboxes in your notes, nothing that can drift out of sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/junskix1/obsidian-nextcloud-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nextcloud-tasks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/junskix1/obsidian-nextcloud-tasks/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 笔记中直接读取、创建、编辑和完成 Nextcloud 任务。它通过 CalDAV 协议与服务器实时交互，实现任务的增删改查及状态更新。

**2. 适用场景**
适用于使用 Nextcloud 进行任务管理，且希望将任务列表嵌入 Obsidian 笔记中查看或处理的场景。特别适合需要跨设备（桌面端与移动端）同步任务，且不希望笔记内容被任务数据污染的用户。

**3. 核心特色**
*   **零本地镜像**：坚持“单一数据源”原则，所有任务仅存在于 Nextcloud 服务器。插件不在 Vault 中生成 Markdown 复选框或缓存文件，彻底消除数据同步漂移风险。
*   **轻量高效**：采用纯 JavaScript 编写，无外部依赖或原生代码，兼容桌面与移动端，启动快且资源占用低。
*   **安全认证**：仅存储 Nextcloud 应用密码，支持独立撤销，保障账户安全。

**4. 使用建议**
*   配置时，Nextcloud 地址只需填写基础域名（如 `https://cloud.example.com`），无需包含 `/remote.php/dav` 路径。
*   务必在 Nextcloud 设置中生成专用的“应用密码”用于插件连接，切勿使用主账户密码。
*   安装后需在 Obsidian 社区插件市场启用，并正确配置服务器地址与凭据即可开始使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


