---
uid: 1786577077276000
title: 'Obsidian 插件：Daily Note Template'
tags: ['模板与链接处理', '日历与时间', '效率工具', '编辑工具', 'obsidian插件']
description: '基于笔记日期扩展同步安全的每日笔记模板表达式。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Note Template

> [!Note] 插件名片
> - 插件名称：Daily Note Template
> - 插件作者：kdnk
> - 插件说明：基于笔记日期扩展同步安全的每日笔记模板表达式。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['模板与链接处理', '日历与时间', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kdnk/obsidian-daily-note-template)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-note-template)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kdnk/obsidian-daily-note-template/master/README.md)



## 概述

### 《Daily Note Template插件总结》
1. **主要功能**：在Obsidian每日笔记中展开DNT表达式，能对`<% dnt... %>`这类表达式进行展开处理。
2. **适用场景**：适用于使用Obsidian每日笔记功能，且希望在笔记中根据日期动态生成内容的用户。
3. **核心特色**：
    - 基于笔记日期展开同步安全的每日笔记模板表达式。
    - 利用Obsidian的每日笔记设置识别笔记路径，不过不负责创建缺失的每日笔记，也不会对空笔记应用完整模板。
    - 展开可见DNT表达式时无需等待Obsidian Sync。
4. **使用建议**：
    - 先在Obsidian中设置好每日笔记的相关参数。
    - 在每日笔记中合理使用如`<% dnt.today() %>`等表达式来动态展示日期相关内容。
    - 若要进行插件开发，可按`npm install`、`npm test`、`npm run lint`、`npm run build`的步骤操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


