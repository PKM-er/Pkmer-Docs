---
uid: 1793625624381000
title: "Obsidian 插件：WeChat Official Account Archive"
tags: ["第三方工具集成", "文件管理", "图片与PDF", "obsidian插件"]
description: "Archive selected WeChat public-account history or album articles as Markdown with local images on Windows. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：WeChat Official Account Archive

> [!Note] 插件名片
> - 插件名称：WeChat Official Account Archive
> - 插件作者：Bowen Zhang
> - 插件说明：Archive selected WeChat public-account history or album articles as Markdown with local images on Windows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dtta520-cpu/obsidian-wechat-history)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wechat-history-archive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dtta520-cpu/obsidian-wechat-history/master/README.md)



## 概述

WeChat Official Account Archive 旨在解决微信公众号文章难以在 Obsidian 中离线阅读和归档的问题。它允许用户将选定的公众号历史文章或合集内容转换为 Markdown 笔记，并自动下载图片至本地。该插件独立运行，无需依赖 Python、Node.js、Docker 或任何 AI 服务，极大降低了使用门槛，让知识管理更加纯粹和本地化。

典型使用场景包括快速保存单篇感兴趣的文章，只需粘贴链接即可生成笔记；或者系统性地整理某个公众号的过往内容。例如，你可以先获取公众号的历史目录，通过标题搜索筛选出特定主题的文章，勾选后批量保存。对于微信原生合集，插件也能识别链接并保留原有的阅读顺序，方便你构建结构化的知识库。

相比其他同类工具，该插件的特色在于对已有笔记的保护机制：重复归档时不会覆盖你手动修改过的内容，而是保留原有记录并更新索引。此外，它支持断点续传，若保存过程中断，重启后可继续未完成的任务。插件还具备严格的隐私保护，仅在主动操作时联网，且不读取聊天数据库或上传任何数据，确保你的笔记库安全可控。

需要注意的是，该插件仅支持 Windows 桌面版 Obsidian，macOS、Linux 及移动端用户无法使用。获取整个公众号的历史目录时，必须登录 Windows 微信并在客户端内打开目标主页以读取缓存，而单篇保存和公开合集通常无需此步骤。此外，已删除、付费或受限文章无法获取，音视频本体也不会被下载，仅保留文字介绍。如果你需要跨平台同步或自动抓取全量历史数据，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


