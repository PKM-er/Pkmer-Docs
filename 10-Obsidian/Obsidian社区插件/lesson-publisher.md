---
uid: 1791709367998000
title: 'Obsidian 插件：Lesson Publisher'
tags: ['发布工具', '文件管理', '效率工具', 'obsidian插件']
description: 'Publish a finished note and every file it embeds into a second vault, mirroring the folder structure. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lesson Publisher

> [!Note] 插件名片
> - 插件名称：Lesson Publisher
> - 插件作者：tommyhedgerow
> - 插件说明：Publish a finished note and every file it embeds into a second vault, mirroring the folder structure. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['发布工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tommyhedgerow/obsidian-lesson-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lesson-publisher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tommyhedgerow/obsidian-lesson-publisher/master/README.md)



## 概述

**Lesson Publisher** 是一款仅限桌面端使用的 Obsidian 插件，旨在将当前笔记及其嵌入资源同步至第二个“库”Vault。

1. **主要功能**：自动将工作 Vault 中的笔记及所有嵌入文件（图片、SVG等）发布至指定库 Vault，并严格镜像文件夹结构，确保资源引用有效。
2. **适用场景**：适用于课程制作、文档归档或内容发布流程，特别是需要保持相对路径一致性以独立展示笔记的场景。
3. **核心特色**：
   - **结构镜像**：保持相对路径，确保嵌入文件在目标库中可被正确解析。
   - **灵活配置**：支持自定义镜像根目录、回退文件夹（Inbox/Attachments）及文件夹重定向映射。
   - **智能筛选**：可配置仅发布特定 `status` 状态的关联笔记，忽略远程或 Data URL。
   - **安全机制**：写入前显示覆盖确认对话框，防止误操作，且通过 Node.js 直接文件系统写入。
4. **使用建议**：需在设置中配置目标库路径；注意仅支持 `![[...]]` 和 `![](...)` 格式的本地嵌入；发布关联笔记前，请确保其 Frontmatter 中设置了正确的 `status` 字段，否则将被跳过。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


