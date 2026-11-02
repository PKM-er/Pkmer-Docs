---
uid: 1793625611111000
title: "Obsidian 插件：ColorNote Backup Import"
tags: ["备份与恢复", "第三方工具集成", "文件管理", "任务管理", "obsidian插件"]
description: "Import ColorNote version 7.1 backups as dated notes and checklists. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ColorNote Backup Import

> [!Note] 插件名片
> - 插件名称：ColorNote Backup Import
> - 插件作者：theluckystrike
> - 插件说明：Import ColorNote version 7.1 backups as dated notes and checklists. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '文件管理', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/colornote-backup-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colornote-backup-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/colornote-backup-import/master/README.md)



## 概述

ColorNote Backup Import 专为解决 ColorNote 7.1 版本备份数据迁移至 Obsidian 的需求而设计。它允许用户直接选择本地备份文件，输入密码后在浏览器端完成解密与校验，将笔记转换为带有完整元数据的 Markdown 文件。核心功能包括将普通记录转为笔记，将待办事项转为 Obsidian 任务列表，并生成详细的导入报告，确保数据迁移的透明性与可追溯性。

典型场景适用于希望将旧手机笔记无缝整合进 Obsidian 工作流的用户。例如，你可以将旅行期间的 ColorNote 记录导入到“旅行笔记”文件夹，保留原有的创建与修改时间；或者将工作待办事项导入，利用 Obsidian 的任务插件进行后续管理。插件支持在导入前预览记录数量，让你确认数据完整性后再执行写入，避免误操作。

相比其他迁移工具，该插件的特色在于其严谨的数据校验机制与 Pro 版的高级功能。它不仅检查文件头与加密块，还验证 JSON 结构，确保只有合法数据被导入。Pro 版支持保存映射配置，可自定义颜色标签与目标文件夹，实现批量自动化导入；此外，独有的“备份对比”功能允许用户选择两个不同时间的备份，直观查看笔记内容的增删改差异，无需手动比对。

使用前需注意，该插件仅支持 ColorNote 7.1 版本，其他版本会被拒绝。输入文件大小限制为 32 MiB，且解码数据在预览期间驻留内存，关闭弹窗即丢弃预览。若写入过程中断，可能留下部分文件，需手动检查。该插件不适合需要导入提醒、日历特定标题或修复内部链接的用户，这些功能不在当前版本支持范围内。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


