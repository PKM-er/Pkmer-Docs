---
uid: 1791709365303000
title: 'Obsidian 插件：anbing-image-upload'
tags: ['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Upload images to S3-compatible storage - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：anbing-image-upload

> [!Note] 插件名片
> - 插件名称：anbing-image-upload
> - 插件作者：anbing cui
> - 插件说明：Upload images to S3-compatible storage - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cuianbing/obsidian-image-upload)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anbing-image-upload)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cuianbing/obsidian-image-upload/master/README.md)



## 概述

**anbing-image-upload** 是一款 Obsidian 图片上传插件，主要功能是将本地图片上传至 S3 兼容存储（如 AWS S3、Cloudflare R2、MinIO、七牛云）或 GitHub/GitLab，并自动将笔记中的图片链接替换为公开访问 URL。

**适用场景**：适合需要发布博客、Wiki 或公开文档的用户，特别是使用对象存储或代码托管平台作为静态资源服务器的场景。注意：GitHub/GitLab 方案要求仓库公开，且受 API 限制，不建议作为无限对象存储使用。

**核心特色**：
1. **多源支持**：兼容主流 S3 协议及 Git 平台。
2. **智能上传**：支持光标处单张、Vault 内多选、文档内批量上传及粘贴时自动上传。
3. **防冲突机制**：使用 UUID 重命名远程文件，避免同名覆盖。
4. **灵活清理**：可选将本地文件重命名为 UUID 或上传后移入回收站，失败时保留本地文件并显示详细错误。
5. **格式统一**：自动将 Wiki 链接和 Markdown 图片语法转换为标准 Markdown 格式。

**使用建议**：
- 仅支持桌面端，需 Obsidian 1.11.4+。
- 确保存储桶已配置公开读取权限及 CORS，插件不会自动修改权限。
- 若使用 GitHub/GitLab，请留意仓库体积增长及 API 速率限制。
- 批量上传时可查看进度统计及失败详情，便于排查问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


