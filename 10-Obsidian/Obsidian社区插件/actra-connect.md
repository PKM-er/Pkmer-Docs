---
uid: 1793625604888000
title: "Obsidian 插件：Actra"
tags: ["第三方工具集成", "文件管理", "效率工具", "obsidian插件"]
description: "Sync ACTRA daily logs, notes and recordings into Obsidian, and upload explicitly authorized Markdown folders. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Actra

> [!Note] 插件名片
> - 插件名称：Actra
> - 插件作者：Stavecho
> - 插件说明：Sync ACTRA daily logs, notes and recordings into Obsidian, and upload explicitly authorized Markdown folders. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/stavecho/actra-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?actra-connect)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/stavecho/actra-obsidian/master/README.md)



## 概述

Actra 旨在打通 ACTRA 账户与本地 Obsidian 库，核心功能是将 ACTRA 中的每日日志、笔记及录音摘要同步为 Markdown 文件。同时，它支持将用户明确授权的本地 Markdown 文件夹上传至 ACTRA，实现双向数据流转。该插件通过 OAuth 机制连接服务，确保数据在指定范围内安全交换，无需手动复制粘贴即可保持两端内容一致。

典型场景包括：当你使用 ACTRA 记录日常灵感或运动数据后，打开 Obsidian 即可自动获取这些内容，方便在本地进行深度整理或关联其他笔记；反之，若你在 Obsidian 中撰写了特定项目文档，可将该目录授权给 Actra，插件会定期将更新同步至 ACTRA，形成个人知识索引。这种模式适合希望将云端记录工具与本地知识库无缝衔接的用户。

相比同类同步插件，Actra 的特色在于严格的权限隔离与数据安全设计。它默认不读取任何现有笔记，仅处理用户逐个确认的目录，且通过 `actra-synced` 标签防止数据回流。插件不包含广告或遥测 SDK，Token 仅存储在 Obsidian 安全存储中。此外，它具备冲突保护机制，当本地文件被修改或目标位置被占用时，会生成冲突副本而非直接覆盖，确保数据不丢失。

使用前需注意，该插件依赖网络连接及有效的 ACTRA 账户，且自动上传仅在 Obsidian 运行时触发，移动端后台暂停可能导致延迟。它不适合需要实时双向同步或希望自动删除远端副本的用户，因为当前接口不支持远端删除功能。若你主要依赖本地离线工作，或对数据上传至第三方服务有严格顾虑，则可能不适合安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


