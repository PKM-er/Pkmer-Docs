---
uid: 1793625619684000
title: "Obsidian 插件：Oriva"
tags: ["第三方工具集成", "自动化与AI", "效率工具", "obsidian插件"]
description: "Keep your vault in step with your Oriva notes, and ask AI about a note on your own key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Oriva

> [!Note] 插件名片
> - 插件名称：Oriva
> - 插件作者：Gavriel Shaw
> - 插件说明：Keep your vault in step with your Oriva notes, and ask AI about a note on your own key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/0riva/oriva-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oriva)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/0riva/oriva-obsidian/master/README.md)



## 概述

Oriva 插件旨在解决 Obsidian 本地笔记与 Oriva 在线服务之间的数据同步问题，同时提供基于用户自有密钥的 AI 问答功能。其核心机制是选择性同步：只有属性中标记为 `oriva: true` 的笔记才会被上传至 Oriva，其余内容完全保留在本地，确保隐私安全。同步支持手动触发或自动定时执行，且采用“新者胜”策略处理冲突，删除操作仅解除链接而非物理删除，最大程度保障数据完整性。

典型使用场景包括团队协作与个人知识管理。例如，你可以将项目文档中的特定章节标记为同步，当你在 Oriva 端收到同事对某一段落的回复时，这些反馈会精准地写回 Obsidian 中对应的章节，而不会干扰其他内容。另一个场景是当你需要快速查询当前打开笔记的背景信息时，可直接调用 AI 功能，利用 Anthropic 或 OpenAI 的接口获取答案，无需离开 Obsidian 界面。

相比同类同步插件，Oriva 的特色在于其精细的“章节级”同步能力。若笔记包含多个二级标题，插件会将每个章节作为独立条目同步，允许针对特定部分进行独立编辑和回复，且支持在 Oriva 端重新定义章节边界。此外，该插件强调数据主权，AI 问答直接连接用户指定的 API 提供商，Oriva 平台无法窥探提问内容，且插件不收集任何遥测数据，仅传输必要的同步数据。

使用前需注意，同步功能必须注册 Oriva 账号并配置个人访问令牌，而 AI 功能则需自行配置 Anthropic 或 OpenAI 密钥，费用由对应服务商直接收取。该插件不适合需要全库自动同步或依赖 Oriva 官方 AI 服务的用户。若你的需求是简单的双向文件同步，或希望由平台方承担 AI 调用成本，Oriva 可能并非最佳选择，因为它要求用户具备较高的自主配置能力。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


