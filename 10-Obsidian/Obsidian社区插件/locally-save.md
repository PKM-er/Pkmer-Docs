---
uid: 1791709368209000
title: 'Obsidian 插件：Locally Save'
tags: ['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Syncs your vault to a local folder copy in seconds, and exports changes as a single transferable file you can carry on a USB drive. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Locally Save

> [!Note] 插件名片
> - 插件名称：Locally Save
> - 插件作者：Kflho
> - 插件说明：Syncs your vault to a local folder copy in seconds, and exports changes as a single transferable file you can carry on a USB drive. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kflho/obsidian-locally-save)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?locally-save)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kflho/obsidian-locally-save/master/README.md)



## 概述

**主要功能**：将Obsidian仓库打包为单个`.lsave`文件，支持“完整快照”与“增量变更”两种模式，实现离线单文件搬运与还原。

**适用场景**：换电脑或重装系统时迁移数据；两台电脑轮流使用，仅传输自上次完整副本以来的改动；需要建立本地还原点以防误改。

**核心特色**：完全离线，无需联网、账号或服务器；支持增量同步，日常传输体积小（几十KB至几MB）；具备校验与对账机制，确保应用后文件一致；完整副本应用时采用镜像模式，自动清理多余文件至回收站。

**使用建议**：本插件专注于离线搬运，不适用于通过网盘/NAS进行连续自动同步（此类需求建议选用Remotely Save等云方案）。日常使用建议定期导出“完整快照”作为新基线，避免增量包过大；接收增量包时，需确保目标机器处于对应的基线状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


