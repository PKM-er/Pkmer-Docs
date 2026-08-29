---
uid: 1786577076929000
title: 'Obsidian 插件：Cloudflare R2 Sync'
tags: ['第三方工具集成', '图片与PDF', '自动化与AI', '效率工具', 'obsidian插件']
description: '把本地笔记图片同步到Cloudflare R2。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloudflare R2 Sync

> [!Note] 插件名片
> - 插件名称：Cloudflare R2 Sync
> - 插件作者：imaikosuke
> - 插件说明：把本地笔记图片同步到Cloudflare R2。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '图片与PDF', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/imaikosuke/obsidian-cloudflare-r2-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudflare-images-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/imaikosuke/obsidian-cloudflare-r2-sync/master/README.md)



## 概述

### 插件主要信息
1. **主要功能**：将本地笔记中的图片同步到 Cloudflare R2，上传后替换为公共 URL，还支持自动上传、上传封面图、删除 R2 图片和 WebP 转换。
2. **适用场景**：适用于需要将笔记中的本地图片存储到 Cloudflare R2 的用户，方便图片管理和分享笔记。
3. **核心特色**：
    - 可一次性同步活动笔记中的所有本地图片。
    - 支持拖放图片自动上传。
    - 能将封面图的公共 URL 写入 YAML 前言。
    - 可删除选中的 R2 对象并清理笔记引用。
    - 支持部分格式图片上传前转换为 WebP。
4. **使用建议**：使用前需创建带有公共 URL 的 R2 存储桶，配置 CORS 以允许 Obsidian 上传，创建 R2 API 访问凭证并存储在 Obsidian 中。按照文档中的快速开始步骤操作，注意仅处理本地图片引用格式，远程 URL 会自动跳过。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


