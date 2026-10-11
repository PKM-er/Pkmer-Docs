---
uid: 1791709369360000
title: 'Obsidian 插件：Publish to VPS'
tags: ['发布工具', '文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Publish selected vault folders to your personal VPS with property-based filtering and remote upload. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Publish to VPS

> [!Note] 插件名片
> - 插件名称：Publish to VPS
> - 插件作者：Jonathan ROUQUETTE
> - 插件说明：Publish selected vault folders to your personal VPS with property-based filtering and remote upload. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '文件管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jorouquette/vps-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vps-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jorouquette/vps-publish/master/README.md)



## 概述

**1. 主要功能**
该插件允许将 Obsidian 库中指定的文件夹发布到用户自建的 VPS 服务器。它支持基于 Frontmatter 属性进行文件筛选（包含/排除），并通过可配置的远程端点进行上传。

**2. 适用场景**
适用于希望将个人笔记、博客或文档发布到私有服务器，而非依赖第三方托管服务的用户。特别适合注重数据隐私、拥有 VPS 资源且需要自定义发布流程的技术型用户。

**3. 核心特色**
*   **完全自托管**：数据仅上传至用户自己的 VPS，无第三方服务器、遥测或分析，隐私安全。
*   **增量同步**：仅上传变更的文件，提升同步效率。
*   **灵活筛选**：通过笔记属性精确控制哪些文件被发布。
*   **一键部署**：提供 Docker 镜像，包含 Node API 和 Angular 站点，便于快速搭建后端。

**4. 使用建议**
*   **环境要求**：仅限桌面端使用（需 Node.js 文件系统访问权限）。
*   **部署准备**：需先通过 Docker 部署配套的服务端镜像，并在插件设置中配置 Base URL 和 API Key。
*   **版本匹配**：插件与服务端镜像版本需保持一致（如 v1.0 插件对应 v1.0 镜像）。
*   **安全配置**：务必修改默认的 API Key，并参考官方指南配置 Nginx TLS 和防火墙以保障生产环境安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


