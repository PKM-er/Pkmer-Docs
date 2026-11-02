---
uid: 1793625612864001
title: "Obsidian 插件：File Master"
tags: ["文件管理", "备份与恢复", "效率工具", "自动化与AI", "obsidian插件"]
description: "Manage vault assets with self-hosted cloud storage, clipboard auto-upload, SHA-256 deduplication, zero-broken-link batch migration, and orphan cleanup. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：File Master

> [!Note] 插件名片
> - 插件名称：File Master
> - 插件作者：weichen-ink
> - 插件说明：Manage vault assets with self-hosted cloud storage, clipboard auto-upload, SHA-256 deduplication, zero-broken-link batch migration, and orphan cleanup. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/weichen-ink/file-master)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-master)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/weichen-ink/file-master/master/README.md)



## 概述

FileMaster 是一款面向 Obsidian 的资产治理插件，核心在于连接本地库与自建媒体服务器。它通过 SHA-256 哈希实现毫秒级“秒传”，在粘贴截图或拖入附件时自动去重，若云端已有相同文件则零流量复用。同时，它提供批量迁移、孤儿文件清理及断链检测功能，旨在保持笔记库轻量整洁，并解决附件冗余与链接失效问题。

典型场景包括日常写作与博客发布。例如，当你频繁粘贴截图时，插件自动拦截并上传，避免本地存储膨胀；若需将笔记发布到 Astro 等静态博客，它支持“双轨分发”，本地保留无损原图，而对外提供带水印的优化 WebP 链接。此外，对于长期积累的笔记库，你可以运行清理向导，安全移除未被引用的游离素材，释放存储空间。

相比同类插件，FileMaster 的最大特色是“零断链保证”。其迁移与去重操作采用严格的两阶段安全流程：先重写全库引用，再经过快照校验确认无残留引用后才允许删除文件，彻底杜绝 404 错误。此外，它具备跨本地与云端的精准查重能力，能自动合并冗余副本并重写双链，且支持 HEIC 等格式的缩略图预览，细节处理更为完善。

使用前需注意，该插件必须配合自建的 FileMaster Server 运行，需自行部署服务器并配置 API Token，不适合希望完全依赖第三方云服务的用户。若你仅需要简单的图片压缩或无需自建后端的基础图床功能，此插件可能过于复杂。它更适合有技术背景、追求数据自主可控且笔记库资产较多的重度用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


