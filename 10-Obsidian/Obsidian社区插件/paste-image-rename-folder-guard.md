---
uid: 1791709369147000
title: 'Obsidian 插件：Paste Image Rename Folder Guard'
tags: ['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
description: 'Exclude vault folders from automatic attachment renaming by Paste image rename. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paste Image Rename Folder Guard

> [!Note] 插件名片
> - 插件名称：Paste Image Rename Folder Guard
> - 插件作者：haperone
> - 插件说明：Exclude vault folders from automatic attachment renaming by Paste image rename. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haperone/paste-image-rename-folder-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paste-image-rename-folder-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haperone/paste-image-rename-folder-guard/master/README.md)



## 概述

**1. 主要功能**
该插件是“Paste Image Rename”的增强组件，允许用户指定特定文件夹，使其免受自动重命名规则的影响。在这些被排除的文件夹中，附件将保留原始文件名，且不触发重命名提示；其他文件夹则照常执行自动重命名。

**2. 适用场景**
适用于希望保留特定来源（如 Telegram、微信等同步工具）附件原始名称，同时希望其他笔记中的图片自动重命名的用户。例如，排除 `Telegram` 文件夹，即可防止同步进来的图片被重命名，而手动插入的图片仍会被规范命名。

**3. 核心特色**
*   **精准排除**：支持按文件夹路径排除，规则包含所有子文件夹，且区分大小写。
*   **即时生效**：设置更改自动保存并立即应用，无需重启。
*   **移动端优化**：针对移动端键盘交互进行了优化，添加或移除排除项时不会意外弹出键盘。
*   **可视化配置**：通过“芯片”（Chips）形式展示排除项，点击即可移除，操作直观。

**4. 使用建议**
*   **前置依赖**：必须单独安装并启用“Paste Image Rename”插件，本插件才能工作。
*   **路径规范**：配置时需使用相对于 Vault 根目录的路径，注意区分大小写，并确保路径指向附件实际存放位置而非笔记位置。
*   **状态检查**：在开始导入或粘贴前，请在设置界面确认“Connection status”显示为已连接，以确保排除规则生效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


