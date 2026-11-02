---
uid: 1793625620562001
title: "Obsidian 插件：Rclone Bisync"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "Sync your vault both ways with Google Drive, Dropbox, OneDrive or any other rclone remote. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Rclone Bisync

> [!Note] 插件名片
> - 插件名称：Rclone Bisync
> - 插件作者：Garrett Riefenstahl
> - 插件说明：Sync your vault both ways with Google Drive, Dropbox, OneDrive or any other rclone remote. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/garrett2918/obsidian-rclone-bisync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rclone-bisync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/garrett2918/obsidian-rclone-bisync/master/README.md)



## 概述

Rclone Bisync 是一款桌面端双向同步插件，旨在解决 Obsidian 笔记库与云端存储之间数据不一致的问题。它通过调用本地安装的 rclone 工具，实现笔记编辑、新建及删除操作在本地与远程存储间的实时互通。默认配置下，你的笔记库会同步至 Google Drive 的指定目录，但同样支持 Dropbox、OneDrive 等任何 rclone 兼容的存储服务，无需额外付费即可实现跨设备的数据备份与访问。

典型的使用场景包括多设备间的无缝切换与异地备份。例如，你可以在办公室的电脑上撰写笔记，回家后在个人电脑上继续编辑，插件会在停止编辑 30 秒后自动将更改同步至云端；反之，若你在另一台设备上修改了笔记，开启“检查云端变更”功能后，当前设备也能定时拉取最新内容。此外，对于担心本地硬盘故障的用户，该插件能确保所有笔记实时备份至云端，有效防止数据丢失。

相比其他同步方案，该插件的核心优势在于其高度的灵活性与安全性。它不依赖特定的云服务商 API，而是基于成熟的 rclone 生态，支持从主流网盘到自建 Nextcloud 等多种后端。在冲突处理上，它采用“新文件优先”策略，并将旧版本保存为 `.conflict` 文件供用户手动合并，避免了数据覆盖风险。此外，插件具备智能跳过机制，自动排除工作区布局、插件配置等易产生冲突的文件，同时设有安全阈值，防止误操作导致大量文件被删除。

使用前需注意，该插件仅支持 Windows、macOS 和 Linux 桌面端，移动端无法运行。它本身不包含 rclone，需用户自行安装并配置好远程存储连接。若使用 Google Drive，建议申请专属 Client ID 以避免共享速率限制。此外，关闭 Obsidian 时不会触发最终同步，建议养成定期手动同步的习惯。如果你需要实时协作编辑或移动端同步，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


