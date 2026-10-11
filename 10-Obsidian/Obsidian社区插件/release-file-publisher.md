---
uid: 1791709369633000
title: 'Obsidian 插件：Release File Publisher'
tags: ['第三方工具集成', '发布工具', '文件管理', '多媒体', 'obsidian插件']
description: 'Upload files to daily GitHub Release assets and insert ready-to-use links or media players. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Release File Publisher

> [!Note] 插件名片
> - 插件名称：Release File Publisher
> - 插件作者：Christina
> - 插件说明：Upload files to daily GitHub Release assets and insert ready-to-use links or media players. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '文件管理', '多媒体', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/christinahyh/Release-File-Publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?release-file-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/christinahyh/Release-File-Publisher/master/README.md)



## 概述

**主要功能**
将本地文件上传至 GitHub 仓库的当日 Release 资源中，并在笔记中自动插入媒体播放器或下载链接，同时复制 URL 到剪贴板。

**适用场景**
适用于 Obsidian 桌面端用户，需将本地音视频、图片等文件托管至 GitHub 并嵌入笔记，实现跨设备访问或分享。

**核心特色**
1. **非 Git 工作流**：不执行 Git 命令，不提交文件至仓库树，仅作为 Release 资产存储。
2. **智能嵌入**：根据文件类型自动生成音频/视频播放器、Markdown 图片或带图标链接。
3. **自动管理**：按日期创建或复用 Release，支持中文文件名，提供“替换”或“保留两者”冲突处理模式，并可远程浏览及删除资产。
4. **安全配置**：支持细粒度个人访问令牌，确保上传权限最小化。

**使用建议**
1. 仅限桌面端使用（需 Node.js 支持上传进度）。
2. 若链接需对未登录用户可见，请使用公开仓库。
3. 确保仓库已初始化且未启用“不可变 Release”，以便插件进行资产增删改。
4. 配置仅限目标仓库的细粒度 Token 以保障安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


