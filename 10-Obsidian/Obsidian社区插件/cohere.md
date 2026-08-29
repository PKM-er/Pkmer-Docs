---
uid: 1786577077008004
title: 'Obsidian 插件：Cohere'
tags: ['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '通过兼容OSS / S3的对象存储来同步仓库文件。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cohere

> [!Note] 插件名片
> - 插件名称：Cohere
> - 插件作者：Chaly
> - 插件说明：通过兼容OSS / S3的对象存储来同步仓库文件。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ichaly/cohere)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cohere)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ichaly/cohere/master/README.md)



## 概述

### Cohere 插件总结
1. **主要功能**：通过 OSS / S3 兼容对象存储同步 Obsidian 的 vault 文件，支持手动和自动同步、删除同步、冲突文件保留、可选空目录同步，还能复制/导入连接配置、导出完整配置。
2. **适用场景**：适用于希望借助对象存储实现笔记同步、多端同步以及私有云同步的用户，可搭配阿里云 OSS、腾讯云 COS、七牛云、Cloudflare R2、MinIO 等 S3/OSS 兼容服务。
3. **核心特色**：基于 `vaultId` 隔离多笔记仓库，基于 `deviceId` 区分多设备，支持 S3 Signature V4 对象存储，能清理已删除内容。
4. **使用建议**：同步端点需填写服务商提供的 S3 API Endpoint，地址风格默认选“自动”，若服务商有要求则选“Virtual Hosted Style”。本地安装时，需复制特定文件到目标 vault 的插件目录，也可用安装脚本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


