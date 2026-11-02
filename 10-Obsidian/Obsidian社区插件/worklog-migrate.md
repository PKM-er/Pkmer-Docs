---
uid: 1793625624781000
title: "Obsidian 插件：Worklog Migrate"
tags: ["任务管理", "日历与时间", "文件管理", "效率工具", "obsidian插件"]
description: "Move unfinished tasks to today's monthly work log while retaining historical notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Worklog Migrate

> [!Note] 插件名片
> - 插件名称：Worklog Migrate
> - 插件作者：alvinli1991
> - 插件说明：Move unfinished tasks to today's monthly work log while retaining historical notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alvinli1991/obsidian-worklog-migrate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?worklog-migrate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alvinli1991/obsidian-worklog-migrate/master/README.md)



## 概述

Worklog Migrate 旨在解决月度工作日志中未完成任务的整理难题。它会自动扫描当前月份日志文件，将之前日期下未勾选的待办事项迁移至今日条目，同时完整保留已完成任务及普通笔记在原始日期下的记录。该插件直接操作 Markdown 文件，不依赖数据库或外部服务，确保你的笔记文件始终是唯一的真实数据源，无需担心数据同步或格式转换问题。

典型场景适用于按月记录工作进度的用户。例如，你在 10 月 5 日记录了几个未完成的开发任务，到了 10 月 9 日，只需运行一次命令，这些任务就会自动出现在 10 月 9 日的标题下，而 10 月 5 日的已完成任务则原封不动。这种机制让你能清晰追踪任务流转，同时保持历史记录的完整性，无需手动复制粘贴或修改旧条目。

相比同类插件，Worklog Migrate 具备精细的任务树处理能力。它能正确识别嵌套任务，若父任务未迁移，其下未完成的子任务会被提升至最近的可行层级，且保留原有的缩进格式。此外，插件支持预览模式，允许你在写入前检查迁移结果，并具备文件变更冲突检测机制，若文件在迁移期间被其他操作修改，会自动中止并提示重试，极大提升了数据安全性。

使用前请注意，该插件仅处理当前月份的日志文件，不会触碰历史月份数据。它要求日志目录结构规范，且文件名需符合 YYYYMM.md 格式。如果你需要跨月迁移任务，或希望自动归档已完成任务，此插件并不适合。建议首次使用时开启预览功能，并定期备份库文件，以应对极少数因手动编辑导致的重复内容复制情况。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


