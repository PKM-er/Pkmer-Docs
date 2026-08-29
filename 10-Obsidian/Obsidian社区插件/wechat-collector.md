---
uid: 1786577083726001
title: 'Obsidian 插件：WeChat Collector'
tags: ['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: '把微信公众号文章同步到你的仓库里，保存为 Markdown 格式，还能按日期归档。——这个插件还没经过 Obsidian 官方人员的人工审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WeChat Collector

> [!Note] 插件名片
> - 插件名称：WeChat Collector
> - 插件作者：lizhen
> - 插件说明：把微信公众号文章同步到你的仓库里，保存为 Markdown 格式，还能按日期归档。——这个插件还没经过 Obsidian 官方人员的人工审核哦。
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lizhen0628/obsidian-wechat-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wechat-collector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lizhen0628/obsidian-wechat-sync/master/README.md)



## 概述

### 主要功能
将微信公众号文章同步到 Obsidian vault，自动转换为 Markdown 格式，按日期归档，同时把图片下载到本地。

### 适用场景
适用于需要在 Obsidian 中收集和整理微信公众号文章资料的用户。

### 核心特色
- **增量同步**：仅拉取新文章，节省资源。
- **按日期归档**：文章自动按 `YYYY-MM` 存于指定目录。
- **图片本地化**：避免微信 CDN 图片过期问题。
- **跨平台**：支持桌面端和移动端。
- **同步灵活**：可配置轮询间隔自动同步，也能手动触发。

### 使用建议
1. 需先部署 [后端服务器](https://github.com/Lizhen0628/wechat-obsidian-sync/tree/main/server) 并获取 API Token。
2. 可选择手动安装插件，或从源码构建。
3. 安装后在插件设置中配置服务器地址、API Token、轮询间隔和保存目录等信息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


