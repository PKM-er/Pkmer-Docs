---
uid: 1791709365409000
title: 'Obsidian 插件：Attachment Link Rules'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Choose link or embed syntax for dropped attachments by file extension. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Link Rules

> [!Note] 插件名片
> - 插件名称：Attachment Link Rules
> - 插件作者：Viggo Meesters
> - 插件说明：Choose link or embed syntax for dropped attachments by file extension. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/viggomeesters/obsidian-attachment-link-rules)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-link-rules)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/viggomeesters/obsidian-attachment-link-rules/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户根据文件扩展名，自动决定拖拽附件时生成普通链接（如 `[[report.pdf]]`）还是嵌入语法（如 `![[diagram.png]]`）。它仅调整链接前缀，不改变原生存储路径、文件名或用户现有的链接格式偏好。

**2. 适用场景**
适用于希望统一笔记中附件呈现形式的用户，特别是需要区分文档类文件（PDF、Office文档）与媒体文件（图片、音视频）显示方式的知识管理工作流。

**3. 核心特色**
- **智能默认规则**：PDF及办公文档默认为普通链接，图片、音频和视频默认为嵌入显示。
- **高度可定制**：可在设置中自定义扩展名列表，未列出的扩展名保持应用默认行为。
- **安全无侵入**：仅使用公共API，不修改现有笔记或附件，兼容外部及内部文件拖拽。
- **冲突处理**：若扩展名同时出现在两个列表中，优先采用普通链接规则。

**4. 使用建议**
建议用户在设置中检查并微调默认规则，确保常用文件类型符合个人习惯。由于插件不修改已有内容，可放心启用。安装后无需额外配置即可生效，适合追求笔记整洁与一致性的高频用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


