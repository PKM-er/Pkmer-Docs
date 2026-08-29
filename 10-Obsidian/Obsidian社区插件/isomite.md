---
uid: 1786577079167004
title: 'Obsidian 插件：Isomite'
tags: ['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '把你的仓库连接到一个私有的Cloudflare R2存储桶，实现可控同步。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Isomite

> [!Note] 插件名片
> - 插件名称：Isomite
> - 插件作者：glam
> - 插件说明：把你的仓库连接到一个私有的Cloudflare R2存储桶，实现可控同步。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ratatulieoi/obsidian-isomite)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?isomite)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ratatulieoi/obsidian-isomite/master/README.md)



## 概述

### Isomite插件总结
1. **主要功能**：实现Obsidian保险库与私有Cloudflare R2存储桶的可控同步，涵盖配置R2端点和存储桶、存储凭证、测试连接、初始化加密元数据、导出导入恢复密钥、构建同步计划、执行同步操作等，还能保存加密历史版本和删除记录。
2. **适用场景**：适用于需要在不同设备间安全、可控同步Obsidian笔记，且希望利用Cloudflare R2存储桶的用户。
3. **核心特色**：无需VPS、Worker或自定义同步服务器，直接从Obsidian连接R2；采用端到端加密，保障数据安全；支持桌面和移动设备，利用原生WebCrypto和Obsidian API，避免CORS限制；同步前可查看变更计划，支持多设备配对。
4. **使用建议**：由于同步功能较新，建议从复制的测试保险库和专用空R2存储桶开始使用，评估期间做好独立备份。可通过Obsidian社区插件或手动方式安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


