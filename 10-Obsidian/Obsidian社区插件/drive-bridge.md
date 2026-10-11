---
uid: 1791709366635000
title: 'Obsidian 插件：Drive Bridge'
tags: ['文件管理', '第三方工具集成', '移动端优化', '备份与恢复', 'obsidian插件']
description: 'Two-way Google Drive sync for your Obsidian vault on desktop and mobile. Picks up files other apps put in the folder, keeps both versions on conflict and confirms deletions. No telemetry. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drive Bridge

> [!Note] 插件名片
> - 插件名称：Drive Bridge
> - 插件作者：Murat Mayadağ
> - 插件说明：Two-way Google Drive sync for your Obsidian vault on desktop and mobile. Picks up files other apps put in the folder, keeps both versions on conflict and confirms deletions. No telemetry. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '移动端优化', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mmayadag/drive-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drive-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mmayadag/drive-bridge/master/README.md)



## 概述

**Drive Bridge** 是一款专为 Obsidian 设计的 Google Drive 双向同步插件，支持桌面端与移动端无缝协作。

1.  **主要功能**：实现 Obsidian 库与 Google Drive 文件夹之间的实时双向同步。它能自动检测并同步由其他应用程序放入文件夹的文件，确保笔记数据在多设备间保持一致。
2.  **适用场景**：适合依赖 Google Drive 作为主要云存储，且需要在手机和电脑之间频繁切换使用 Obsidian 的用户。特别适用于那些习惯通过第三方应用（如邮件客户端、下载工具）直接向云端文件夹添加文件的场景。
3.  **核心特色**：
    *   **智能冲突处理**：当检测到文件冲突时，不会直接覆盖，而是保留两个版本供用户选择，防止数据丢失。
    *   **安全删除机制**：执行删除操作前需用户确认，避免误删重要笔记。
    *   **隐私至上**：完全无遥测数据收集，保障用户隐私。
    *   **高质量代码**：采用 TypeScript 严格模式开发，拥有 99% 以上的测试覆盖率，稳定性极高。
4.  **使用建议**：建议将 Obsidian 库文件夹直接映射到 Google Drive 的同步目录中。由于该插件未经过 Obsidian 官方人工审核，建议首次使用时备份重要数据，并定期检查同步状态，以确保最佳体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


