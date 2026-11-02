---
uid: 1793625620563000
title: "Obsidian 插件：Rclone Incremental Backup"
tags: ["备份与恢复", "文件管理", "第三方工具集成", "obsidian插件"]
description: "Incremental vault backup with rclone: a 1:1 mirror plus timestamped folders holding every changed or deleted file. Requires rclone. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rclone Incremental Backup

> [!Note] 插件名片
> - 插件名称：Rclone Incremental Backup
> - 插件作者：Laszlo Repassy
> - 插件说明：Incremental vault backup with rclone: a 1:1 mirror plus timestamped folders holding every changed or deleted file. Requires rclone. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/laszlorepassy/obsidian-rclone-incremental-backup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rclone-incremental-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/laszlorepassy/obsidian-rclone-incremental-backup/master/README.md)



## 概述

Rclone Incremental Backup 专为大型 Obsidian 库（10-100+ GB）设计，利用 rclone 实现增量备份。它维护一个与当前库完全一致的镜像副本，同时为每次运行创建带时间戳的文件夹，专门存储被修改或删除的文件。这种机制确保未变更的文件不会被重复读取或写入，既节省存储空间，又避免了因全量备份导致的大文件重复传输，特别适合数据量庞大的笔记库。

典型场景包括日常自动备份和误操作恢复。例如，你可以设置每日定时备份，当意外删除某篇重要笔记或修改了错误内容时，无需恢复整个库，只需进入对应时间戳的增量文件夹，将特定文件复制回原处即可。若需恢复整个库到最新状态，直接打开镜像副本作为新库即可；若需回溯到更早的历史版本，也可通过 rclone 命令按时间顺序叠加恢复。

相比同类插件，该插件的核心优势在于利用 rclone 作为独立进程执行同步，确保 Obsidian 界面在备份期间保持流畅，不会因处理大型媒体文件而冻结。它提供了实时的进度通知，显示文件和字节传输统计，并在备份期间保持电脑唤醒状态。此外，插件具备智能的错误重试机制，若每日定时备份失败，会在 30 分钟内自动重试最多三次，提高了备份的可靠性。

使用前必须确保系统中已安装 rclone，插件会在启动时检测并引导安装。需要注意的是，该插件仅支持桌面端，无法在移动端使用。它不适合需要云端同步或远程备份的用户，因为插件本身不处理网络传输，仅负责本地文件复制。若你的库较小或不需要精细的历史版本管理，更简单的全量备份插件可能更合适。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


