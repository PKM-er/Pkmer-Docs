---
uid: 1786577081708006
title: 'Obsidian 插件：Pumice'
tags: ['第三方工具集成', '备份与恢复', '发布工具', '效率工具', 'obsidian插件']
description: '通过你自己搭建的gRPC服务器来同步、管理版本并发布你的仓库。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pumice

> [!Note] 插件名片
> - 插件名称：Pumice
> - 插件作者：Ji-ho Lee
> - 插件说明：通过你自己搭建的gRPC服务器来同步、管理版本并发布你的仓库。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/search5/pumice)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pumice)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/search5/pumice/master/README.md)



## 概述

### Pumice插件总结
1. **主要功能**：实现Obsidian库与自托管gRPC服务器（需自行运行pumice - server）的同步，支持库文件同步（仅上传/下载更改文件）、同步历史浏览与文件恢复、自动本地快照留存、选定文件夹选择性发布，还具备多语言支持。
2. **适用场景**：适用于需要在不同设备间即时同步Obsidian库文件，且希望对同步历史进行管理、恢复文件，以及选择性发布特定文件夹内容的用户。
3. **核心特色**：采用gRPC - Web传输，多文件可在单连接上并发传输；使用静态令牌认证，存储于Obsidian的秘密存储中；设置选项可通过Obsidian设置搜索查找。
4. **使用建议**：使用前需安装Node.js（含npm）、`protoc`，Obsidian版本需1.13.4及以上。可按`npm install`安装依赖，通过`npm run dev`进行开发模式，`npm run build`进行生产构建。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


