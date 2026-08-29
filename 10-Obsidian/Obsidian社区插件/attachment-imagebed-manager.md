---
uid: 1786577076112003
title: 'Obsidian 插件：Attachment Imagebed Manager'
tags: ['文件管理', '第三方工具集成', '图片与PDF', '模板与链接处理', '效率工具', 'obsidian插件']
description: '扫描本地笔记附件，上传到兼容 S3 的存储服务（如 R2、AWS S3、MinIO），并安全替换链接。——此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Imagebed Manager

> [!Note] 插件名片
> - 插件名称：Attachment Imagebed Manager
> - 插件作者：Patrick
> - 插件说明：扫描本地笔记附件，上传到兼容 S3 的存储服务（如 R2、AWS S3、MinIO），并安全替换链接。——此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['文件管理', '第三方工具集成', '图片与PDF', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perinchiang/obsidian-plugins-attachment-imagebed-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-imagebed-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perinchiang/obsidian-plugins-attachment-imagebed-manager/master/README.md)



## 概述

### 1. 主要功能
该插件可扫描Obsidian笔记中的本地附件（如图像、PDF、音视频等），将其上传至兼容S3的云存储（如Cloudflare R2、AWS S3、MinIO），并安全替换笔记中的本地链接为远程URL，还能选择替换后删除本地文件。

### 2. 适用场景
适用于希望将Obsidian笔记附件存储到云端，方便多设备访问和管理，避免本地空间占用的用户。

### 3. 核心特色
 - 支持多种S3兼容存储，适配桌面和移动端。
 - 基于类别展示附件，有列表和画廊视图。
 - 可自定义文件类型，替换安全，上传失败自动回滚。
 - 有重试机制，提供多种删除策略和自动扫描功能。
 - 具备干运行模式，支持中英双语，忽略代码块内链接。

### 4. 使用建议
安装插件后，在设置中连接云存储，填写凭证并测试连接。打开笔记后点击侧边栏云图标即可上传。移动端仅支持手动上传。在正式操作前，可使用干运行模式预览替换效果。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


