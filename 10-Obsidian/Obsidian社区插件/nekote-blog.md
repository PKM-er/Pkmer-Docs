---
uid: 1791709368781000
title: 'Obsidian 插件：Nekote Blog'
tags: ['发布工具', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Publish notes and their referenced assets from your vault to a Nekote Blog site. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nekote Blog

> [!Note] 插件名片
> - 插件名称：Nekote Blog
> - 插件作者：Ryo
> - 插件说明：Publish notes and their referenced assets from your vault to a Nekote Blog site. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nekote-labs/nekote-blog-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nekote-blog)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nekote-labs/nekote-blog-obsidian/master/README.md)



## 概述

**1. 主要功能**
将 Obsidian 笔记库中的指定文件夹内容发布至 Nekote Blog 网站。自动将 Obsidian 语法转换为标准 Markdown，并同步引用资源。发布过程单向同步，不会反向修改本地笔记。

**2. 适用场景**
适合希望将 Obsidian 作为博客内容管理系统的用户。支持桌面端（macOS/Windows/Linux）及移动端（iOS/Android），无需 Node.js 环境，适合跨平台写作与发布。

**3. 核心特色**
- **非破坏性发布**：仅上传内容，不改动本地库。
- **精细控制**：支持“全量发布”与“单篇更新”，后者仅同步指定笔记及其资源，不影响其他文章。
- **结构化管理**：通过 `posts/` 和 `pages/` 文件夹区分文章与页面，支持 Frontmatter `draft` 属性管理草稿状态。
- **安全机制**：发布前预览目标与文件列表，在首次发布、根目录变更或大量删除时提供额外确认。

**4. 使用建议**
- 需 Obsidian 1.13.0+ 及 Nekote Blog 账号。
- 首次使用需在设置中连接博客并授权设备。
- 建议指定一个文件夹作为“内容根目录”，日常写作后运行“Publish this note”快速更新单篇，定期运行完整“Publish”以同步文件移动、重命名或删除操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


