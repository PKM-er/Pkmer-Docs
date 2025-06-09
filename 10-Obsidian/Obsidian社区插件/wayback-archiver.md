---
uid: 2025060517182093
title: 'Obsidian 插件：Wayback Archiver'
tags: ['文件管理', '自动化与AI', '备份与恢复', 'obsidian插件']
description: '通过互联网档案馆（Wayback Machine）自动存档网页链接，并在笔记中附上存档版本。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wayback Archiver

> [!Note] 插件名片
> - 插件名称：Wayback Archiver
> - 插件作者：ISHIZUE
> - 插件说明：通过互联网档案馆（Wayback Machine）自动存档网页链接，并在笔记中附上存档版本。
> - 插件分类：['文件管理', '自动化与AI', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/IshizuEitaro/obsidian-wayback-archiver)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wayback-archiver)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/IshizuEitaro/obsidian-wayback-archiver/main/README.md)



## 概述

Wayback Archiver 是一款 Obsidian 插件，能够通过 Wayback Machine 自动存档网页链接并在笔记中附加存档版本，主要功能包括自动扫描笔记中的 Markdown、HTML 和纯文本链接，调用 Archive.org 的 SPN API v2 进行存档，并支持自定义存档链接格式（如添加日期标记）。该插件提供多场景覆盖：可针对当前笔记、选中文本或整个库执行存档操作，支持通过过滤规则（路径、关键词、URL 正则）精准控制处理范围，并内置 URL 替换规则以修复链接问题。核心解决网页链接失效风险，通过创建永久存档副本保障知识库的长期可靠性，同时提供失败重试机制、多配置档案管理和 API 限流设置以应对存档失败和速率限制问题。适用于需要长期保存网页引用内容的研究者、笔记爱好者及知识管理者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



