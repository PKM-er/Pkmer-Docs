---
uid: 1786577083852000
title: 'Obsidian 插件：X Bookmarks'
tags: ['第三方工具集成', '社交与社区', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
description: '把你的Twitter/X书签同步到仓库里，保存为Markdown笔记，还能选择用本地AI生成月度总结。这是非官方的，基于Cookie，供个人使用。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：X Bookmarks

> [!Note] 插件名片
> - 插件名称：X Bookmarks
> - 插件作者：Ken
> - 插件说明：把你的Twitter/X书签同步到仓库里，保存为Markdown笔记，还能选择用本地AI生成月度总结。这是非官方的，基于Cookie，供个人使用。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['第三方工具集成', '社交与社区', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/18621063286/xBookmarksObsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?x-bookmarks-to-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/18621063286/xBookmarksObsidian/master/README.md)



## 概述

### X Bookmarks插件总结
1. **主要功能**：将Twitter/X书签同步到Obsidian库中，以Markdown笔记形式保存，每个书签对应一个笔记，支持本地AI月度总结（可选）。
2. **适用场景**：适用于个人整理和保存Twitter/X上的书签内容，方便后续搜索、查阅和使用其他工具处理。
3. **核心特色**：
    - 一键嵌入式登录（桌面端），自动获取认证信息，支持2FA；移动端可手动粘贴cookie。
    - 完整捕获书签信息，包括文本、作者、时间、媒体等，不重构推文线程。
    - 不覆盖用户编辑内容，通过`tweet_id`去重。
    - 能自动发现并缓存X的`queryId`，应对其定期轮换，失败提示清晰。
    - 分页安全，有硬页面限制。
4. **使用建议**：此插件为非官方，仅用于个人，使用有风险。X可能随时更改内部API，勿用于批量或商业抓取。Cookie仅存储在插件本地`data.json`中，仅发送到x.com。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


