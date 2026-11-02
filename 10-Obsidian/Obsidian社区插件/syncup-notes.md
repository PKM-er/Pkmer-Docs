---
uid: 1793625621966000
title: "Obsidian 插件：SyncUp Notes"
tags: ["第三方工具集成", "备份与恢复", "文件管理", "obsidian插件"]
description: "Sync an Obsidian vault with SyncUp Notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SyncUp Notes

> [!Note] 插件名片
> - 插件名称：SyncUp Notes
> - 插件作者：LEXYCORE
> - 插件说明：Sync an Obsidian vault with SyncUp Notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lexycore/syncup-notes-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?syncup-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lexycore/syncup-notes-obsidian/master/README.md)



## 概述

SyncUp Notes 将 Obsidian 库与 SyncUp 服务通过 WebDAV 协议连接，实现笔记的云端同步。它会自动处理文件上传，若文件超出当前套餐的大小限制，插件会保留本地文件并提示具体超限情况，避免同步中断。在桌面端，大文件直接从磁盘流式传输，无需占用大量内存，确保同步过程高效且稳定。

典型场景包括日常多设备协作与网页端快速访问。例如，你在电脑上保存笔记后，约两秒内文件即同步至云端，此时打开 SyncUp Notes 网页版，几秒内即可看到最新内容。反之，在网页端修改的笔记，会在 Obsidian 下一次同步时自动更新到本地，实现双向实时联动。

该插件具备智能视图同步能力，会将当前打开的笔记和展开的文件夹状态保存至隐藏文件，并共享给网页端，使 Web 界面能还原桌面端的浏览状态。此外，它自动排除 `.obsidian`、`.git` 等系统目录，仅同步用户笔记，且同步频率固定为启动时、保存后两秒及每分钟一次，无需手动干预。

需注意，移动端（iPhone/iPad/Android）需额外安装 BRAT 插件并配置为测试版，且手机在退出 Obsidian 应用后不会继续后台同步。若你依赖完全离线环境、需要复杂的双向冲突合并策略，或希望同步包含插件配置在内的整个库结构，此插件可能不完全适合。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


