---
uid: 1791709369257000
title: 'Obsidian 插件：PNG WebP Companion'
tags: ['图片与PDF', '文件管理', '第三方工具集成', 'obsidian插件']
description: 'Preserves PNG originals, creates and links same-name WebP companions, follows renames, and normalizes PNG filenames. Requires ImageMagick. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PNG WebP Companion

> [!Note] 插件名片
> - 插件名称：PNG WebP Companion
> - 插件作者：Irisable
> - 插件说明：Preserves PNG originals, creates and links same-name WebP companions, follows renames, and normalizes PNG filenames. Requires ImageMagick. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/irisable/png-webp-companion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?png-webp-companion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/irisable/png-webp-companion/master/README.md)



## 概述

**1. 主要功能**
该插件自动将Vault中的PNG图片转换为同名WebP文件，并智能更新笔记中的图片链接以指向WebP版本，同时保留原始PNG文件。它支持文件名规范化（如去除空格、转小写），并在重命名或移动文件时自动同步WebP副本。

**2. 适用场景**
适用于桌面端Obsidian用户，特别是那些希望优化笔记加载速度、减少存储占用，同时需要保留原始高清PNG作为备份的场景。适合频繁插入图片且对链接维护有较高要求的知识管理流程。

**3. 核心特色**
*   **无损转换**：保留原始PNG，仅替换链接指向，确保数据安全性。
*   **智能同步**：通过SHA-256校验追踪文件重命名，防止误判，确保WebP副本始终与PNG同步。
*   **格式规范**：自动将文件名标准化为保守的Slug格式（保留中文等Unicode字符），提升文件管理整洁度。
*   **依赖ImageMagick**：需本地安装ImageMagick 7以执行高质量（Quality 82）的WebP编码。

**4. 使用建议**
*   确保已安装ImageMagick 7并配置好环境变量。
*   仅支持桌面端及本地文件系统Vault。
*   建议在插件设置中检查`magick`可执行文件路径。
*   注意：插件不会批量转换已有图片，仅处理新添加或修改后的PNG；若需禁用文件名规范化，请在设置中关闭。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


