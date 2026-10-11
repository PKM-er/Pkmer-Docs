---
uid: 1791709371060000
title: 'Obsidian 插件：WeKnora Bridge'
tags: ['第三方工具集成', '文件管理', '发布工具', 'obsidian插件']
description: 'Publish notes and files to WeKnora, track parsing, and archive completed uploads while preserving document associations. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WeKnora Bridge

> [!Note] 插件名片
> - 插件名称：WeKnora Bridge
> - 插件作者：dewada9
> - 插件说明：Publish notes and files to WeKnora, track parsing, and archive completed uploads while preserving document associations. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dewada9/weknora-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?weknora-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dewada9/weknora-bridge/master/README.md)



## 概述

**1. 主要功能**
WeKnora Bridge 是一款 Obsidian 桌面插件，用于将选定的笔记和文件（支持 Markdown、PDF、Word、图片等，限 20MiB）发布至自建 WeKnora 知识库。它独立追踪上传成功与远程解析状态，支持将已发布且未修改的文件归档至指定文件夹，并在编辑或移动时保留文档 ID 关联。

**2. 适用场景**
适用于希望将本地 Obsidian 笔记同步至私有 WeKnora 知识库进行检索或管理的用户。适合需要保持本地草稿安全、按需发布、并追踪文档处理进度的知识管理场景。

**3. 核心特色**
*   **本地优先与安全**：默认关闭自动发布，API 密钥通过 Obsidian SecretStorage 安全存储，设置中仅存引用。
*   **稳健的同步机制**：冲突时绝不覆盖现有文件，中断操作保留恢复日志；检测远程变更，避免盲目重试或删除重建文档。
*   **智能归档**：可选自动归档已完成的摄入文件，同时支持从兼容端点导入目录和图谱，且保留手动编辑。

**4. 使用建议**
*   **服务器兼容性**：标准 WeKnora 仅支持初始上传和检索。若需原位更新或自动导入目录/图谱，服务器必须部署相应的扩展 API 端点。
*   **环境验证**：目前仅验证 Windows 桌面版，macOS/Linux 用户需谨慎。
*   **部署注意**：安装前务必验证 API 契约，切勿安装来自他人环境的私有部署脚本，以确保安全与功能正常。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


