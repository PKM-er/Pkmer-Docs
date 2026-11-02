---
uid: 1793625608663000
title: "Obsidian 插件：Bookmarks Sync"
tags: ["第三方工具集成", "文件管理", "模板与链接处理", "obsidian插件"]
description: "Import Safari, Chrome, Firefox or Chromium Browsers bookmarks as individual Markdown notes, using predefined or your own template. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bookmarks Sync

> [!Note] 插件名片
> - 插件名称：Bookmarks Sync
> - 插件作者：chadidi
> - 插件说明：Import Safari, Chrome, Firefox or Chromium Browsers bookmarks as individual Markdown notes, using predefined or your own template. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chadidi/obsidian-bookmarks-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bookmarks-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chadidi/obsidian-bookmarks-sync/master/README.md)



## 概述

Bookmarks Sync 将 Safari、Chrome、Firefox 等主流浏览器的书签导入 Obsidian，每条书签生成独立的 Markdown 笔记。插件支持自定义模板，通过 `{{title}}`、`{{url}}` 等占位符灵活控制笔记内容，并保留浏览器原有的文件夹层级结构，让数字收藏在知识库中井然有序。

典型场景如：将“工作”文件夹下的技术文档链接同步为笔记，利用 `{{folder_tags}}` 自动添加标签以便检索；或定期同步 Safari 阅读列表，用 `{{date}}` 记录收藏时间，方便回顾历史积累。

相比同类插件，其特色在于支持多浏览器自动发现、基于 URL 的去重机制，以及原子化更新避免冲突。模板系统提供 `|yaml` 过滤器确保 Frontmatter 格式安全，且支持手动、启动时或定时多种同步模式，兼顾灵活性与自动化。

需注意该插件仅限桌面端使用，需读取本地浏览器文件，Safari 用户可能需授予特定文件访问权限。它仅同步书签元数据，不抓取网页正文，也不支持移动端。若需实时网页快照或复杂爬虫功能，此插件无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


