---
uid: 1793625624232000
title: "Obsidian 插件：vDocs"
tags: ["安全与隐私", "文件管理", "效率工具", "obsidian插件"]
description: "Open your encrypted vDocs vault inside your vault: private documents that stay encrypted on disk, unlocked with a PIN on each device. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：vDocs

> [!Note] 插件名片
> - 插件名称：vDocs
> - 插件作者：Ash Otis
> - 插件说明：Open your encrypted vDocs vault inside your vault: private documents that stay encrypted on disk, unlocked with a PIN on each device. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ashotis/vDocs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vdocs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ashotis/vDocs/master/README.md)



## 概述

vDocs 允许你在 Obsidian 中直接打开并编辑加密的 vDocs 文档库。它解决了私密笔记与日常笔记分离管理的痛点，核心功能是在保持磁盘数据始终加密的前提下，通过 PIN 码快速解锁，让你像操作普通笔记一样阅读、撰写和组织文本内容。支持标题、列表、引用等基础格式，并能在侧边栏查看 vDocs 原有的文件夹结构，实现私密文档的无缝集成。

典型场景包括处理敏感的个人记录或工作机密。例如，你可以将一份包含隐私信息的日记存入 vDocs 库，在 Obsidian 中通过 PIN 快速查看和补充内容，无需每次输入长密码；或者在整理资料时，将分散的私密笔记统一归档到 vDocs 的特定文件夹中，利用 Obsidian 强大的检索和编辑体验提升效率，同时确保这些文件在硬盘上依然是不可读的密文。

相比其他加密插件，vDocs 的最大特色是兼容独立的 vDocs 应用生态。它支持将单篇文档导出为独立的 .vdoc 加密文件，方便安全地分享给他人，对方可用 vDocs 应用或本插件打开。此外，它提供了独特的视觉体验，支持跟随主题动态变化的极光背景或自定义图片背景。安全机制上，它采用 AES-256-GCM 加密，并在本地使用 PIN 和设备密钥二次锁定，连续五次输错 PIN 会自动遗忘密钥，强制重新使用主密码或恢复密钥，且全程无网络追踪。

使用前需注意，该插件主要支持文本编辑，图片、声音及专注工具等高级功能仍需回到 vDocs 原生应用操作。若你使用 Obsidian Sync，需手动开启“同步其他所有类型”以确保 .vdocs 文件同步。此外，在 Windows 上若 vDocs 应用同时打开库文件，插件会暂时将更改保存在本地，待应用关闭后才会写入主文件。如果你需要完全离线且不与任何外部应用共享格式，或主要需求是处理大量多媒体内容而非纯文本，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


