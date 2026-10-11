---
uid: 1791709370632000
title: 'Obsidian 插件：Unchanged Attachments to OSS'
tags: ['文件管理', '第三方工具集成', '图片与PDF', '多媒体', '自动化与AI', 'obsidian插件']
description: 'Automatically upload images, audio, video, and PDFs to Aliyun OSS. Store as permanent oss:// references with dynamic signed URL rendering. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Unchanged Attachments to OSS

> [!Note] 插件名片
> - 插件名称：Unchanged Attachments to OSS
> - 插件作者：aohan
> - 插件说明：Automatically upload images, audio, video, and PDFs to Aliyun OSS. Store as permanent oss:// references with dynamic signed URL rendering. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '图片与PDF', '多媒体', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xudaren/unchanged-attachments-to-oss)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?unchanged-attachments-to-oss)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xudaren/unchanged-attachments-to-oss/master/README.md)



## 概述

**1. 主要功能**
该插件自动将图片、音视频及PDF附件上传至阿里云OSS，笔记中仅保留永久的 `oss://` 引用。通过动态生成并自动续签的签名URL实现安全访问，解决大文件同步难题。

**2. 适用场景**
适用于需要跨设备（PC/移动端）同步大型媒体文件的Obsidian用户，或需通过私有Bucket分享笔记内容、希望减轻本地Vault存储压力的场景。

**3. 核心特色**
*   **安全同步**：AK/SK经AES-GCM加密后随Vault同步，不暴露密钥；支持V4动态签名。
*   **稳定可靠**：支持断点续传，网络中断后可恢复；提供批量迁移工具。
*   **精细控制**：状态栏显示进度，支持右键显式删除OSS文件（原生删除不影响云端）。

**4. 使用建议**
安装后需配置Region、Bucket及加密主密码。建议先使用迁移工具处理历史附件，再启用自动上传。注意Markdown等非媒体文件仍保留在本地，仅媒体资源上云。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


