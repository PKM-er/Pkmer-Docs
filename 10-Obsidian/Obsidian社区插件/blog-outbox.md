---
uid: 1791709365654000
title: 'Obsidian 插件：Blog Outbox'
tags: ['发布工具', '文件管理', '效率工具', 'obsidian插件']
description: 'Publish selected Markdown notes and local attachments to a configurable local blog project. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Blog Outbox

> [!Note] 插件名片
> - 插件名称：Blog Outbox
> - 插件作者：supralune
> - 插件说明：Publish selected Markdown notes and local attachments to a configurable local blog project. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/supralune/obsidian-blog-outbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?blog-outbox)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/supralune/obsidian-blog-outbox/master/README.md)



## 概述

**1. 主要功能**
Blog Outbox 是一款桌面端插件，用于将选定的 Obsidian Markdown 笔记及本地附件发布到可配置的本地博客项目中。它生成标准 Markdown 格式并包含 YAML Frontmatter，不依赖特定博客框架，且仅在配置的博客目录内写入文件。

**2. 适用场景**
适用于拥有本地博客项目（如 Hugo、Jekyll 等支持 Markdown 的框架）的用户，希望从 Obsidian 工作流中直接管理博客内容，实现笔记到博客文章的自动化同步，且无需联网或依赖 Git 部署。

**3. 核心特色**
*   **智能转换**：自动将 Obsidian 内部链接、别名及嵌入内容转换为博客友好的标准 Markdown。
*   **安全机制**：发布前可预览路径与冲突；采用 SHA-256 命名附件；具备事务回滚功能，防止覆盖或删除未知文件。
*   **灵活配置**：可独立设置文章与附件的存储路径及公开 URL；支持自定义保留哪些 YAML 字段。
*   **离线纯净**：完全离线运行，无遥测、广告或自动部署操作。

**4. 使用建议**
*   确保 Obsidian 版本在 1.13.7 以上，并赋予插件对博客项目文件夹的读写权限。
*   该插件仅负责文件复制与格式转换，不会执行博客构建、验证或部署命令，需手动或配合其他工具完成后续发布步骤。
*   建议先使用“预览”功能检查路径与警告，确认无误后再执行发布，以利用其防覆盖保护机制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


