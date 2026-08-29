---
uid: 1786577083451003
title: 'Obsidian 插件：Twine'
tags: ['第三方工具集成', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
description: '把你的仓库同步到你自己的兼容S3的对象存储里，像Cloudflare R2或者Backblaze B2都行，全程端到端加密，而且不需要服务器哦。——Obsidian官方人员还没对这个插件进行人工审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Twine

> [!Note] 插件名片
> - 插件名称：Twine
> - 插件作者：twine
> - 插件说明：把你的仓库同步到你自己的兼容S3的对象存储里，像Cloudflare R2或者Backblaze B2都行，全程端到端加密，而且不需要服务器哦。——Obsidian官方人员还没对这个插件进行人工审核呢。
> - 插件分类：['第三方工具集成', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/engassa/obsidian-twine)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?twine)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/engassa/obsidian-twine/master/README.md)



## 概述

### 主要功能
Twine 是一款端到端加密的 Obsidian 库同步插件，可将库直接同步到用户拥有的 S3 兼容对象存储（如 Cloudflare R2、Backblaze B2），无需运行服务器和订阅。

### 适用场景
适用于希望免费或低成本进行 Obsidian 库同步，又不想自行维护服务器的用户。

### 核心特色
- 无自定义后端，所有同步、冲突解决和版本控制逻辑都在插件内，通过 S3 API 与存储桶通信。
- 端到端加密，文件内容、路径和文件夹结构在客户端加密后上传，保障数据安全。
- 安全处理冲突，同一文件不同设备修改后都会保留，不会自动覆盖。
- 响应及时，文件变化、前台定时及应用开启/恢复时自动同步，无需服务器推送。

### 使用建议
建议创建存储桶时优先选择 Cloudflare R2，其免费额度高且无出口流量费用。按插件说明在对应平台创建存储桶和 API 令牌后即可使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


