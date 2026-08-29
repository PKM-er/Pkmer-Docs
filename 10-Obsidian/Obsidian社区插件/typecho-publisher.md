---
uid: 1786577083458001
title: 'Obsidian 插件：Typecho Publisher'
tags: ['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
description: '通过XML - RPC把Obsidian笔记发布到Typecho博客，还能使用Cloudflare R2进行图片托管。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Typecho Publisher

> [!Note] 插件名片
> - 插件名称：Typecho Publisher
> - 插件作者：SKYue
> - 插件说明：通过XML - RPC把Obsidian笔记发布到Typecho博客，还能使用Cloudflare R2进行图片托管。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/skyue/obsidian-typecho-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?typecho-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/skyue/obsidian-typecho-publisher/master/README.md)



## 概述

### Typecho Publisher插件总结
1. **主要功能**：通过XML - RPC将Obsidian笔记发布到Typecho博客，支持配置图片存储方式，可一键发布新文章或更新已有文章，还能进行图片上传、缓存、链接转换、内容截断等操作。
2. **适用场景**：适用于使用Obsidian记录笔记，且希望将笔记快速、便捷地发布到Typecho博客的用户。
3. **核心特色**：支持将图片上传至Cloudflare R2或Typecho内置媒体库并设置缓存；可自定义前元数据字段映射；严格验证前元数据属性类型；能将Wiki链接转换为博客URL；可按章节标题截断内容；有进度弹窗反馈结果并提供文章链接；自动检测Obsidian语言，支持中英文。
4. **使用建议**：先在配置中填好Typecho站点的XML - RPC URL、用户名和密码；设置前元数据字段映射，注意`dateCreated`字段必填且为“日期与时间”类型；可配置slug自动生成格式；开启Wiki链接转换并设置URL模板；指定截断内容的章节标题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


