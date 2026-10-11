---
uid: 1791709366576000
title: 'Obsidian 插件：Docker Connector'
tags: ['第三方工具集成', '界面优化', '安全与隐私', '效率工具', 'obsidian插件']
description: 'A desktop Docker environment dashboard with secure local, Context, SSH, and mutual TLS connections. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Docker Connector

> [!Note] 插件名片
> - 插件名称：Docker Connector
> - 插件作者：Anthony Fitzpatrick
> - 插件说明：A desktop Docker environment dashboard with secure local, Context, SSH, and mutual TLS connections. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '界面优化', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/anthonyfitzpatrick/obsidian-docker-connector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?docker-connector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/anthonyfitzpatrick/obsidian-docker-connector/master/README.md)



## 概述

**1. 主要功能**
Docker Connector 是一款桌面端 Docker 环境仪表盘插件，支持通过本地 Socket、Docker Context、SSH 及双向 TLS 连接管理多个 Docker 主机。用户可在 Obsidian 内直接监控容器、镜像、卷、网络及 Compose 应用，执行启动、停止、重启及镜像更新等生命周期操作。

**2. 适用场景**
适用于需要在笔记工作流中同时监控和管理本地或远程（macOS/Windows/Linux）Docker 环境的开发者与运维人员，特别适合多主机环境切换及无需离开 Obsidian 即可处理容器状态的场景。

**3. 核心特色**
- **多传输支持**：兼容本地、SSH 及 mTLS 远程连接。
- **安全默认**：默认只读，管理权限需针对每个连接单独显式开启，且仅限会话有效。
- **统一视图**：提供一致的主机卡片界面，支持查看 Compose 应用详情。
- **智能更新**：支持 24 小时自动或手动检查镜像更新，具备备份优先的更新回滚机制。

**4. 使用建议**
鉴于 Docker 访问权限极高，请仅连接可信的主机和凭据。建议先熟悉只读监控功能，再谨慎启用具体的管理权限。注意 SSH 用户名仅在添加/编辑时显示，日常仪表盘不展示敏感信息，确保隐私安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


