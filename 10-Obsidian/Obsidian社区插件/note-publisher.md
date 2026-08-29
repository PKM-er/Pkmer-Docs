---
uid: 1786577080971003
title: 'Obsidian 插件：Note publisher'
tags: ['第三方工具集成', '发布工具', '自动化与AI', '效率工具', 'obsidian插件']
description: '把一篇笔记（连同里面的图片）发布到一个私人的GitHub仓库，还能创建一个只有UUID的公共链接，这个链接由Cloudflare Worker渲染展示。——Obsidian官方人员还没对这个插件进行人工审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note publisher

> [!Note] 插件名片
> - 插件名称：Note publisher
> - 插件作者：bvn13
> - 插件说明：把一篇笔记（连同里面的图片）发布到一个私人的GitHub仓库，还能创建一个只有UUID的公共链接，这个链接由Cloudflare Worker渲染展示。——Obsidian官方人员还没对这个插件进行人工审核呢。
> - 插件分类：['第三方工具集成', '发布工具', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/obsidian-note-publisher/obsidian-plugin-note-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/obsidian-note-publisher/obsidian-plugin-note-publisher/master/README.md)



## 概述

### Note publisher插件总结
1. **主要功能**：将单个Obsidian笔记及其嵌入图片发布到用户的私有GitHub仓库，并生成一个仅含UUID的公共链接，该链接由用户自行部署的Worker渲染。
2. **适用场景**：适用于希望将Obsidian笔记以私密仓库存储，同时生成公共链接分享笔记内容的用户。
3. **核心特色**：
    - 零第三方后端：作者无法访问用户笔记、GitHub令牌或仓库，保障隐私。
    - 独立性强：整个流程在用户的Obsidian库、GitHub仓库和自行部署的Worker间完成。
4. **使用建议**：
    - 准备一个用于存放发布文档的私有GitHub仓库。
    - 创建一个细粒度的个人访问令牌，对该仓库有“内容读写”权限。
    - 部署一个可读取同一仓库并渲染公共页面的Worker，可参考Cloudflare Worker或自托管Worker的实现。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


