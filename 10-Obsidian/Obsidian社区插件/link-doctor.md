---
uid: 1793625614812000
title: "Obsidian 插件：Link Doctor"
tags: ["模板与链接处理", "文件管理", "效率工具", "obsidian插件"]
description: "Find broken links, headings, blocks and embeds, and spot empty notes, in a side panel and a dashboard. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Doctor

> [!Note] 插件名片
> - 插件名称：Link Doctor
> - 插件作者：Anthirayas
> - 插件说明：Find broken links, headings, blocks and embeds, and spot empty notes, in a side panel and a dashboard. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jrayas/link-doctor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-doctor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrayas/link-doctor/master/README.md)



## 概述

Link Doctor 是一款专注于库内链接健康检查的工具，旨在快速定位失效的笔记链接、缺失的标题或块引用，以及嵌入不存在的文件。它通过侧边栏和仪表盘两种视图，清晰展示当前笔记或整个库中的断链情况，并额外列出仅包含前置元数据而无正文内容的空笔记。该插件严格遵循 Obsidian 的链接解析规则，能准确识别大小写、重音符号差异及相对路径，确保检测结果与软件实际行为一致。

在日常写作或整理笔记时，你可以打开侧边栏查看当前正在编辑的笔记中是否存在指向不存在笔记的链接，点击即可直接跳转至问题所在。若需全面体检，可切换至仪表盘视图，利用搜索和文件夹过滤功能，快速筛选出特定类型或特定目录下的所有断链。这种即时反馈机制让你能在写作过程中或定期维护时，迅速发现并处理那些因重命名或误删导致的链接失效问题。

与同类插件相比，Link Doctor 的核心特色在于其“只读”设计原则。它仅读取 Obsidian 自身的索引数据，绝不修改任何笔记内容，也不发起任何网络请求，从而彻底消除了误操作风险。此外，它支持桌面端和移动端，并允许用户自定义忽略特定文件夹（如模板或归档目录），以及调整结果刷新的频率。这种轻量级且无侵入性的设计，使其成为维护大型知识库时安全可靠的辅助工具。

需要注意的是，该插件仅负责发现问题，不提供自动修复功能，用户需手动处理断链。由于它依赖 Obsidian 的索引，新建笔记可能需要短暂时间才能被识别，若发现结果滞后，可手动触发重新扫描。它不检查外部网页链接，也不适合那些期望一键批量修复所有链接错误的用户。如果你希望保持笔记内容的完全控制权，并偏好手动确认每一个链接的有效性，这款插件是理想的选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


