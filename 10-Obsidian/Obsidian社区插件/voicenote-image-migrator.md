---
uid: 1786577083679006
title: 'Obsidian 插件：Voicenote Image Migrator'
tags: ['文件管理', '图片与PDF', '数据处理', '效率工具', 'obsidian插件']
description: '把语音笔记里的图片附件迁移到现有的日记笔记中。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Voicenote Image Migrator

> [!Note] 插件名片
> - 插件名称：Voicenote Image Migrator
> - 插件作者：kageetai
> - 插件说明：把语音笔记里的图片附件迁移到现有的日记笔记中。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['文件管理', '图片与PDF', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kageetai/obsidian-voicenote-image-migrator-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?voicenote-image-migrator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kageetai/obsidian-voicenote-image-migrator-plugin/master/README.md)



## 概述

### 主要功能
Voicenote Image Migrator 可将 Voicenotes 笔记中的图片嵌入内容迁移到现有的 Obsidian 每日笔记中。扫描指定的 Voicenotes 文件夹，从笔记的 `## Attachments` 部分读取图片嵌入信息，复制图片到每日笔记同级的 `attachments/` 文件夹，在每日笔记前言后插入原始嵌入内容，迁移成功后移除源 `## Attachments` 部分。

### 适用场景
适用于有将 Voicenotes 图片嵌入内容整合到每日笔记需求的 Obsidian 用户。

### 核心特色
- 手动运行，无文件监控器和 ribbon 图标。
- 利用 Obsidian 每日笔记配置。
- 不创建每日笔记，仅迁移到已存在的笔记。
- 保留图片嵌入格式和标记。
- 按文件名去重，避免重复链接。
- 迁移前检查文件和字节。
- 可创建备份文件，生成迁移报告。
- 本地运行，无遥测、账号和外部服务。

### 使用建议
可先使用“Dry run voicenote image migration”查看迁移计划，再用“Run voicenote image migration”执行迁移，根据需求在设置中调整文件夹路径、备份和报告相关选项。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


