---
uid: 1791709366963000
title: 'Obsidian 插件：External Namespaces'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Link to files and folders outside your vault. Register folder roots with short prefixes; paste any Windows path and it becomes a clickable link. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：External Namespaces

> [!Note] 插件名片
> - 插件名称：External Namespaces
> - 插件作者：jncohen
> - 插件说明：Link to files and folders outside your vault. Register folder roots with short prefixes; paste any Windows path and it becomes a clickable link. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jncohen/obsidian-external-namespaces)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?external-namespaces)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jncohen/obsidian-external-namespaces/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户将 Vault 外部的文件和文件夹链接到 Obsidian 笔记中。通过注册短前缀（如 `dropbox:`）映射本地路径，粘贴 Windows 路径即可自动转换为可点击链接，点击后通过默认应用打开文件或在资源管理器中打开文件夹。

**2. 适用场景**
适用于需要频繁引用 Dropbox、OneDrive、Google Drive 或网络驱动器中共享工作文件的场景。特别解决同一同步文件夹在不同电脑上本地路径不一致（如 `D:\Dropbox` vs `C:\Users\Joe\Dropbox`）导致的链接失效问题。

**3. 核心特色**
*   **跨设备一致性**：前缀随 Vault 同步，本地路径仅存储于当前设备，确保链接在不同电脑间通用。
*   **自动转换**：粘贴路径即自动生成内部 `obsidian://ens` 链接，无需手动注册 Windows 协议。
*   **简洁展示**：阅读模式下仅显示文件名标签，界面整洁。

**4. 使用建议**
*   仅限桌面端使用，需 Obsidian 1.5.0+ 版本。
*   安装后需在设置中为每个前缀配置当前设备的本地文件夹路径。
*   建议在团队共享文档中统一使用短前缀，以便成员各自配置本地路径后无缝访问。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


