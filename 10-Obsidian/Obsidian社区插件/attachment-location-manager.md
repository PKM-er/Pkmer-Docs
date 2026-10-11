---
uid: 1791709365410000
title: 'Obsidian 插件：Attachment Location Manager'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Set attachment location per note or folder: global, folder and file settings resolve by nearest match, each with its own per-extension exceptions; supports variables, auto-rename and re-arranging existing links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Location Manager

> [!Note] 插件名片
> - 插件名称：Attachment Location Manager
> - 插件作者：lishuai1993
> - 插件说明：Set attachment location per note or folder: global, folder and file settings resolve by nearest match, each with its own per-extension exceptions; supports variables, auto-rename and re-arranging existing links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lishuai1993/attachment-location-manager)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-location-manager)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lishuai1993/attachment-location-manager/master/README.md)



## 概述

**1. 主要功能**
该插件用于精细化控制 Obsidian 中附件的存储位置。支持按全局、文件夹或单篇笔记层级设置保存路径，并允许针对特定文件扩展名设置例外规则。同时提供变量支持（如 `${notepath}`、`${date}` 等）、自动重命名功能，以及将现有链接附件重新整理至指定位置的能力。

**2. 适用场景**
适用于希望保持 Vault 结构整洁、避免附件杂乱无章的用户。特别适合需要按项目、日期或笔记名称归档图片、PDF 等资源的场景，也适合从其他插件迁移或需要批量整理历史附件库的用户。

**3. 核心特色**
*   **层级化配置**：支持“全局-文件夹-笔记”三级覆盖机制，就近匹配，灵活度高。
*   **变量动态路径**：通过变量动态生成路径，实现自动化归档逻辑。
*   **智能重排**：提供命令批量重命名并移动已存在的链接附件，解决历史文件位置不一致问题。
*   **扩展名例外**：可为特定文件类型（如仅图片）单独指定存储规则。

**4. 使用建议**
建议先配置全局默认路径，再根据常用文件夹细化规则。使用前请阅读关于 `${originalname}` 变量的说明，以避免命名冲突。若需整理旧文件，请谨慎使用“重新排列”命令，建议先备份 Vault。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


