---
uid: 1791709371243000
title: 'Obsidian 插件：Zhihu Favorites Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zhihu Favorites Sync

> [!Note] 插件名片
> - 插件名称：Zhihu Favorites Sync
> - 插件作者：gaofeng
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gao-feng/Collections)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zhihu-favorites-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gao-feng/Collections/master/README.md)



## 概述

**主要功能**：将知乎收藏夹中的回答和文章同步为 Obsidian Markdown 笔记，支持分页、图片本地化及 YAML 元数据保存。

**适用场景**：适合知识管理用户，需长期保存知乎优质内容，或希望利用 AI 对收藏内容进行自动分类整理的场景。

**核心特色**：
1. **安全登录**：支持知乎 App 扫码登录，Cookie 仅存本地，保障隐私。
2. **AI 自动分类**：集成 DeepSeek、OpenAI 等模型，自动根据内容生成标签、摘要并归档至指定文件夹。
3. **稳健同步**：采用大整数解析避免 ID 错误，文件名包含稳定 ID 防止重复，且重命名不破坏内部链接。

**使用建议**：
1. 仅支持 Obsidian 桌面端，移动端无法使用。
2. 首次使用需通过扫码或手动复制 Cookie 登录，注意 Cookie 会过期，遇 401/403 错误需重新登录。
3. 切勿将包含敏感信息的 `data.json` 提交至代码仓库或分享给他人。
4. 知乎无公开 API，网页接口变动可能导致插件失效，需关注插件更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


