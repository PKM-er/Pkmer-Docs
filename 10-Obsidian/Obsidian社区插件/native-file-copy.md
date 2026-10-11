---
uid: 1791709368766000
title: 'Obsidian 插件：Native File Copy'
tags: ['文件管理', '效率工具', '自定义命令', 'obsidian插件']
description: 'Copies selected files and folders from the File Explorer as Windows file objects. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Native File Copy

> [!Note] 插件名片
> - 插件名称：Native File Copy
> - 插件作者：wz
> - 插件说明：Copies selected files and folders from the File Explorer as Windows file objects. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/javatoai/obsidian-native-file-copy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?native-file-copy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/javatoai/obsidian-native-file-copy/master/README.md)



## 概述

**1. 主要功能**
该插件专为 Windows 桌面版 Obsidian 设计，将文件管理器中的 `Ctrl+C` 快捷键行为改为原生 Windows 文件复制。它会将选中的文件/文件夹作为 `FileDrop` 对象复制到剪贴板，而非文本路径。

**2. 适用场景**
适用于需要直接将 Vault 中的笔记或附件拖拽/粘贴到支持文件接收的应用程序（如邮件客户端、聊天软件、文件管理器）的场景，避免手动复制路径或重新选择文件。

**3. 核心特色**
*   **智能焦点切换**：仅在文件管理器聚焦时生效，切换至编辑器后自动恢复普通文本复制功能，互不干扰。
*   **智能选择逻辑**：支持多选；若选中父文件夹，则自动忽略其内部已选中的子项，避免重复。
*   **隐私安全**：无网络请求或遥测，仅通过本地 PowerShell 进程操作剪贴板。
*   **非归档复制**：直接传递文件引用，由接收应用决定如何处理文件夹。

**4. 使用建议**
*   仅适用于 Windows 本地文件系统 Vault，不支持远程或只读适配器。
*   安装后无需额外配置，点击文件管理器即可激活。
*   注意：该插件依赖读取内部状态，未来 Obsidian API 更新可能导致兼容性变化，建议关注插件更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


