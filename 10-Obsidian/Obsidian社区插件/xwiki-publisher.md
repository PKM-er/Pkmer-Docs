---
uid: 1791709371181000
title: 'Obsidian 插件：XWiki Publisher'
tags: ['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
description: 'Publish notes to XWiki and sync XWiki pages back into your vault as Markdown, using an XWiki access token. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：XWiki Publisher

> [!Note] 插件名片
> - 插件名称：XWiki Publisher
> - 插件作者：Tunahan ALTINTOP
> - 插件说明：Publish notes to XWiki and sync XWiki pages back into your vault as Markdown, using an XWiki access token. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tunahanaltintop/xwiki-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xwiki-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tunahanaltintop/xwiki-publisher/master/README.md)



## 概述

**XWiki Publisher** 是一款用于 Obsidian 与 XWiki 双向同步的社区插件。

1. **主要功能**：支持将 Obsidian 笔记发布至 XWiki，或将 XWiki 页面拉取为 Markdown 笔记。支持通过 URL 导入、同步整个空间，并自动处理非 Markdown 格式页面的转换。
2. **适用场景**：适合需要以 XWiki 为中央知识库，同时在 Obsidian 中进行个人知识管理或协作的用户，特别是依赖 HTTPS 和访问令牌认证的 XWiki 实例。
3. **核心特色**：
   - **双向同步**：基于 Markdown Syntax 1.2 扩展，保留源格式，支持双向旅行。
   - **结构镜像**：自动文件夹结构映射为 XWiki 嵌套页面，拉取时重建目录树。
   - **冲突保护**：双向修改时防止静默覆盖，确保数据安全。
   - **内置文件夹笔记**：父级页面自动作为文件夹笔记，无需额外插件。
   - **安全存储**：访问令牌保存在 Obsidian 秘密存储中。
4. **使用建议**：需确保 XWiki 实例已安装 Markdown Syntax 1.2 扩展并配置支持访问令牌的身份验证。使用前请检查 Obsidian 版本（≥1.13.0）及 XWiki 权限，利用侧边栏监控同步状态，注意处理双向修改冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


