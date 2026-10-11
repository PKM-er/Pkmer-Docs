---
uid: 1791709366075000
title: 'Obsidian 插件：Cloud Image Uploader'
tags: ['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Upload pasted or dropped images and attachments to Alibaba Cloud OSS. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cloud Image Uploader

> [!Note] 插件名片
> - 插件名称：Cloud Image Uploader
> - 插件作者：huakaifang
> - 插件说明：Upload pasted or dropped images and attachments to Alibaba Cloud OSS. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/huakaifang/cloud-image-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloud-image-uploader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/huakaifang/cloud-image-uploader/master/README.md)



## 概述

**1. 主要功能**
该插件自动将粘贴或拖入Obsidian的图片、视频、音频及PDF文件上传至阿里云OSS，并在光标处插入Markdown嵌入链接，实现本地笔记与云端存储的无缝对接。

**2. 适用场景**
适用于希望减轻本地Vault存储压力、实现媒体文件云端归档，或需要为笔记生成稳定、可分享的外部链接（如CDN或临时签名URL）的用户。

**3. 核心特色**
*   **灵活配置**：支持自定义路径、多种命名策略（时间戳/UUID等）及公共/私有URL模式。
*   **稳健传输**：具备大文件分片上传进度显示、指数退避重试机制，以及重名文件的智能处理（重命名/覆盖/跳过）。
*   **安全高效**：集成Obsidian Keychain存储密钥，提供本地引用迁移功能，并设有30天延迟清理机制以防误删云端资源。

**4. 使用建议**
请创建专用RAM用户并仅授予最小必要权限（Put/Get/Delete），避免使用主账号AccessKey。建议先测试连接，并合理配置对象路径前缀以便管理。对于重要数据，建议保留本地副本或谨慎启用自动清理功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


