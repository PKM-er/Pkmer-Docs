---
uid: 1791709370376000
title: 'Obsidian 插件：Tencent Cloud COS Uploader'
tags: ['第三方工具集成', '图片与PDF', '文件管理', '移动端优化', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tencent Cloud COS Uploader

> [!Note] 插件名片
> - 插件名称：Tencent Cloud COS Uploader
> - 插件作者：datalink
> - 插件说明：
> - 插件分类：['第三方工具集成', '图片与PDF', '文件管理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/obsidian-link/tencent-cos-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tencent-cos-uploader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/obsidian-link/tencent-cos-uploader/master/README.md)



## 概述

**1. 主要功能**
该插件实现将 Obsidian 笔记中的图片及附件自动上传至腾讯云 COS，并智能替换为 Markdown 链接。支持批量上传本地附件、批量下载云端附件，以及上传后安全清理本地文件以节省存储空间。

**2. 适用场景**
适用于希望将笔记媒体资源云端化、实现多设备同步或减轻本地设备存储压力的用户。特别适合使用腾讯云作为个人图床或私有存储方案的 Obsidian 用户。

**3. 核心特色**
*   **全平台适配**：深度优化桌面端与移动端（iOS/Android），移动端采用轻量后台上传，避免应用卡死。
*   **智能解析**：精准区分真实附件、Emoji 及内部链接，避免误判报错。
*   **灵活安全**：支持公共读及私有桶预签名 URL；支持多种格式（图片、PDF、音视频等）；提供“移至回收站”的安全清理选项。

**4. 使用建议**
安装后需在设置中配置腾讯云 Secret ID/Key、Bucket 及 Region。建议日常使用“粘贴/拖拽自动上传”，定期使用右键菜单批量处理历史附件。若使用私有桶，请确保正确配置预签名 URL 策略以保障访问权限。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


