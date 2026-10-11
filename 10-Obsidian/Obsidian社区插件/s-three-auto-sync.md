---
uid: 1791709369769000
title: 'Obsidian 插件：S3 Auto Sync'
tags: ['文件管理', '第三方工具集成', '备份与恢复', '自动化与AI', 'obsidian插件']
description: 'Sync notes and attachments with S3 or Cloudflare R2, manually by default or automatically when enabled. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：S3 Auto Sync

> [!Note] 插件名片
> - 插件名称：S3 Auto Sync
> - 插件作者：hlyang1992
> - 插件说明：Sync notes and attachments with S3 or Cloudflare R2, manually by default or automatically when enabled. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hlyang1992/s3-auto-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s-three-auto-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hlyang1992/s3-auto-sync/master/README.md)



## 概述

**S3 Auto Sync** 是一款用于将 Obsidian 笔记及附件同步至 S3 或 Cloudflare R2 存储的插件。

**主要功能**：支持手动或自动同步。默认采用手动模式，用户可一键拉取远程更改并上传本地内容；开启自动模式后，启动时自动拉取并持续同步。

**适用场景**：适合希望使用自有对象存储（如 AWS S3、Cloudflare R2）进行数据备份或多设备同步的用户，特别是那些希望摆脱对特定第三方同步服务依赖、追求数据自主权的场景。

**核心特色**：
1. **灵活控制**：默认手动同步，避免意外网络请求；自动模式独立配置，互不干扰。
2. **连接验证**：提供“检查连接”功能，通过临时对象测试读写权限及条件写入支持，确保配置正确。
3. **中文界面**：设置界面为中文，操作直观（如“立即同步”、“保存 S3 配置”）。
4. **兼容性**：要求 Obsidian 1.8.7+，需禁用 Remotely Save 等同类插件以防冲突。

**使用建议**：
1. 建议使用专用 Bucket 或前缀，避免与其他数据混淆。
2. 确保存储服务商支持对象列表、读写删除及 `If-Match` 条件写入。
3. 首次使用前，务必在所有参与同步的设备上禁用其他同步插件，再执行首次“立即同步”。
4. 注意插件未经 Obsidian 官方人工审核，安装前请确认来源可靠。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


