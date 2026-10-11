---
uid: 1791709371194000
title: 'Obsidian 插件：YC Pages Publish'
tags: ['发布工具', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Publish notes and folders as temporary (TTL) websites on Yandex Cloud Object Storage — with images, folder navigation, filters and QR codes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：YC Pages Publish

> [!Note] 插件名片
> - 插件名称：YC Pages Publish
> - 插件作者：avtarasov210
> - 插件说明：Publish notes and folders as temporary (TTL) websites on Yandex Cloud Object Storage — with images, folder navigation, filters and QR codes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/delfinchiknakite-netizen/obsidian-yc-pages-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yc-pages-publish)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/delfinchiknakite-netizen/obsidian-yc-pages-publish/master/README.md)



## 概述

**YC Pages Publish** 是一款将 Obsidian 笔记或文件夹发布为临时网站（TTL）的插件，支持 Yandex Cloud、AWS S3、Cloudflare R2 等 S3 兼容存储。

1.  **主要功能**：右键或移动端菜单一键将笔记/文件夹渲染为独立 HTML 页面并上传至云端，生成分享链接及二维码。支持图片同步上传，并自动记录发布日志。
2.  **适用场景**：适合需要快速分享文档、项目资料或教程，且希望内容在特定时间（7/30/90天）后自动失效的场景。无需服务器，适合隐私敏感或轻量级分享需求。
3.  **核心特色**：
    *   **零后端**：直接连接用户自有 S3 存储，无需部署服务。
    *   **自动过期**：支持 TTL 机制，过期内容自动隐藏并从存储中删除。
    *   **丰富渲染**：内置插件模块，支持 Dataview 查询、KaTeX 数学公式、Excalidraw 绘图、Kanban 看板及 Chord 和弦图等复杂内容渲染。
    *   **多端支持**：桌面与移动端通用，文件夹发布时提供面包屑导航及基于 Frontmatter 的筛选搜索。
4.  **使用建议**：用户需自备 S3 兼容存储桶并配置访问密钥。建议同时设置存储桶的生命周期规则以双重保障数据清理。适合追求简洁分享且注重数据时效性的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


