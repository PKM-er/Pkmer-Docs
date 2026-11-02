---
uid: 1793625620926000
title: "Obsidian 插件：Ryphos"
tags: ["第三方工具集成", "文件管理", "备份与恢复", "obsidian插件"]
description: "Sync a Ryphos memory with a folder in your vault: Markdown both ways, with conflict copies instead of overwrites. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ryphos

> [!Note] 插件名片
> - 插件名称：Ryphos
> - 插件作者：Ryphos
> - 插件说明：Sync a Ryphos memory with a folder in your vault: Markdown both ways, with conflict copies instead of overwrites. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ryphos/ryphos-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ryphos)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryphos/ryphos-obsidian/master/README.md)



## 概述

Ryphos 插件实现了 Obsidian 笔记库与 Ryphos 记忆服务的双向实时同步。它允许你在 Obsidian 中编辑的 Markdown 内容即时同步至 Ryphos，供 AI 助手调用；反之，AI 生成或你在网页端修改的内容也会自动回传至本地库。该插件支持桌面端与移动端，通过定期轮询和编辑触发机制，确保两端数据的一致性，让笔记成为 AI 交互的核心载体。

典型场景包括利用 AI 辅助写作与知识管理。例如，你在 Obsidian 中撰写一篇技术文档，AI 助手可基于同步后的内容提供摘要或建议；或者你在移动端通过 Ryphos 网页端快速记录灵感，稍后在电脑端 Obsidian 中打开时，这些笔记已自动出现在指定文件夹中，无需手动复制粘贴，实现了跨设备、跨平台的无缝工作流。

相比其他同步工具，Ryphos 的核心特色在于其安全的冲突处理机制。当同一笔记在两端同时被修改时，插件不会覆盖任何一方的内容，而是将另一版本保存为带有设备标识的冲突副本（如 `note.conflict-device.md`），确保数据零丢失。此外，插件严格限制读写范围仅限于用户指定的文件夹，且仅同步 Markdown 文件，不触碰附件或隐藏文件，保障了笔记库的整体结构安全。

使用前需注意，该插件必须配合 Ryphos 账户使用，免费版仅支持一个记忆空间和 200 页容量。它仅同步 `.md` 文件，不支持图片、PDF 等附件的同步，因此不适合需要完整备份多媒体资源的用户。连接代码需妥善保管，旧版 Obsidian 中代码存储于本地文件，若同步 `.obsidian` 文件夹需排除该文件以防泄露。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


