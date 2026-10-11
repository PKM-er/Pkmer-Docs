---
uid: 1791709366400000
title: 'Obsidian 插件：Daily Note Snapshot'
tags: ['文件管理', '日历与时间', '备份与恢复', '自动化与AI', 'obsidian插件']
description: 'Copies a daily note into a snapshot folder at a scheduled time, named after the snapshot date. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Note Snapshot

> [!Note] 插件名片
> - 插件名称：Daily Note Snapshot
> - 插件作者：Seiichi Arai
> - 插件说明：Copies a daily note into a snapshot folder at a scheduled time, named after the snapshot date. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '日历与时间', '备份与恢复', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/seiichi1101/obsidian-daily-note-snapshot)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-note-snapshot)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seiichi1101/obsidian-daily-note-snapshot/master/README.md)



## 概述

**1. 主要功能**
该插件在指定时间（默认每日午夜）自动将指定的每日笔记复制为快照，存入独立文件夹。文件名基于快照日期命名（如 `26-08-08.md`），形成按日期累积的历史记录。若同名文件已存在则覆盖，支持自定义日期格式（如仅保留月份或精确到秒）。

**2. 适用场景**
适用于需要定期备份每日笔记、追踪笔记演变历史，或希望保留每日结束时笔记状态的用户。特别适合依赖 Obsidian 进行日记记录或项目日志管理的场景。

**3. 核心特色**
- **自动定时**：默认每日 0 点自动执行，Obsidian 需处于运行状态；若应用关闭错过时间，启动后会自动补拍当日快照。
- **灵活命名**：支持 Moment.js 格式自定义文件名，可控制快照粒度（日/月/秒）。
- **手动触发**：可通过命令面板、左侧 Ribbon 图标或设置页按钮随时手动创建快照。
- **内容完整**：完整复制笔记内容，包括 Frontmatter。

**4. 使用建议**
- 确保在设置中正确配置源笔记路径和快照文件夹。
- 若需更细粒度的历史版本，可将命名格式调整为包含时分秒（如 `YYYY-MM-DD_HH-mm-ss`）。
- 注意：Obsidian 必须保持开启才能触发定时任务，建议保持应用常驻后台。
- 若源笔记不存在，插件不会写入任何内容，避免空文件干扰。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


