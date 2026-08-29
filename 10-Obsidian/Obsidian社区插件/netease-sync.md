---
uid: 1786577080873004
title: 'Obsidian 插件：NetEase + Discogs Sync'
tags: ['第三方工具集成', '数据处理', '多媒体', '效率工具', 'obsidian插件']
description: '把网易云音乐和Discogs的收藏同步到笔记里，还带上元数据、歌词和曲目列表，并且通过ID去重。——Obsidian官方人员还没对这个插件进行人工审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NetEase + Discogs Sync

> [!Note] 插件名片
> - 插件名称：NetEase + Discogs Sync
> - 插件作者：meowphy & Fable
> - 插件说明：把网易云音乐和Discogs的收藏同步到笔记里，还带上元数据、歌词和曲目列表，并且通过ID去重。——Obsidian官方人员还没对这个插件进行人工审核呢。
> - 插件分类：['第三方工具集成', '数据处理', '多媒体', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/miaoche2-cell/obsidian-netease-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?netease-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/miaoche2-cell/obsidian-netease-sync/master/README.md)



## 概述

### NetEase + Discogs Sync 插件总结
1. **主要功能**：将网易云音乐听过的歌曲和 Discogs 收藏的实体唱片，以“一歌一笔记/一张唱片一笔记”形式同步到 Obsidian，仅同步元数据、歌词和曲目，不下载音频。
2. **适用场景**：适用于音乐爱好者管理数字音乐收藏（通过网易云）和实体唱片收藏（通过 Discogs），在 Obsidian 中整理音乐信息。
3. **核心特色**：支持两个数据源，网易云从 MusicLyricApp 本地缓存读取信息，Discogs 用官方 API 和个人令牌拉取数据；笔记按 ID 去重，模板可替换；封面可选择在线 URL 或本地下载；有实时状态面板显示进度，可随时停止。
4. **使用建议**：该插件仅支持桌面端，因网易云同步需读取保险库外的本地缓存目录。Last.fm 密钥和 Discogs 令牌存于本地 data.json，不会写入笔记。若使用非网易云音乐管理数字歌曲，可考虑将歌曲批量导入网易云歌单或自行修改配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


