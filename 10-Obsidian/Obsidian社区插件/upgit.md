---
uid: 1791709370681000
title: 'Obsidian 插件：Upgit'
tags: ['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Upload images from the file explorer or editor context menu using the Upgit CLI. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Upgit

> [!Note] 插件名片
> - 插件名称：Upgit
> - 插件作者：ewigmidori
> - 插件说明：Upload images from the file explorer or editor context menu using the Upgit CLI. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ewigmidori/upgit-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?upgit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ewigmidori/upgit-obsidian/master/README.md)



## 概述

**1. 主要功能**
Upgit 是一款 Obsidian 桌面端插件，允许用户通过右键菜单（文件资源管理器或编辑器内）调用本地 Upgit CLI 工具，将图片上传至远程图床，并自动获取 URL。

**2. 适用场景**
适用于需要频繁将笔记中的本地图片同步到 GitHub、S3 等远程存储的场景，特别是希望保持笔记链接为永久 URL 而非本地路径的用户。

**3. 核心特色**
*   **本地集成**：直接调用本地 `upgit` 二进制文件，不内置凭证，安全性高。
*   **灵活配置**：支持自定义执行路径、额外参数（如指定上传器），配置独立于 Obsidian 存储。
*   **自动化替换**：可选自动将笔记中的本地图片引用（如 `![[img.png]]`）替换为远程 URL。
*   **便捷操作**：上传后可自动复制 URL 到剪贴板，并支持可选删除本地源文件以节省空间。

**4. 使用建议**
*   **前置准备**：务必先在终端安装并配置好 Upgit CLI，确保 `config.toml` 位置正确且能成功测试上传。
*   **路径设置**：在插件设置中准确填写 `upgit` 可执行文件的绝对路径，或确保其在系统 PATH 中。
*   **谨慎操作**：若开启“删除本地文件”选项，请确认图片已安全上传至远程，避免数据丢失。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


