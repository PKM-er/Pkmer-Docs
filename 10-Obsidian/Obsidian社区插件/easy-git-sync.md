---
uid: 1793625612377000
title: "Obsidian 插件：Easy Git Sync"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "移动端优化", "obsidian插件"]
description: "Easy, uncompromising Git sync for your vault, on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Easy Git Sync

> [!Note] 插件名片
> - 插件名称：Easy Git Sync
> - 插件作者：69jesse
> - 插件说明：Easy, uncompromising Git sync for your vault, on desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/69jesse/obsidian-easy-git-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-git-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/69jesse/obsidian-easy-git-sync/master/README.md)



## 概述

Easy Git Sync 让 Obsidian 库直接同步到 GitHub 仓库，无需在电脑或手机上安装 Git 或其他第三方应用。它完全运行在 Obsidian 内部，通过简单的令牌配置即可实现跨设备数据同步。核心机制是每次同步生成一个以设备名和变更内容命名的提交，确保所有编辑都保留在历史记录中，且编辑操作优先于删除操作，避免数据丢失。

典型场景包括在办公室用电脑撰写笔记，回家后用手机继续编辑。当两台设备修改了同一行内容时，插件会保留两个版本，用户只需轻点选择保留哪一方即可。例如，你在 iPhone 上修改了某段文字，MacBook 上也修改了同一行，同步后笔记中会同时显示两个版本，并提供“保留 MacBook”、“保留 iPhone”或“保留两者”的按钮，操作直观且无数据风险。

相比其他 Git 同步插件，Easy Git Sync 的最大特色是零依赖和移动端友好。它不需要用户理解 Git 命令，冲突标记采用标准格式，任何编辑器都能读取。此外，它支持“用较新版本解决所有冲突”的一键操作，大幅简化了多设备协作中的冲突处理流程。隐私方面，数据仅发送到你指定的 GitHub 仓库，无遥测功能，令牌存储在设备钥匙串中，不会跨设备同步。

使用前需注意，该插件目前仅支持 GitHub，不支持其他代码托管平台。超过 100 MB 的文件无法同步，且文件名仅大小写不同的文件在大多数设备上无法共存。如果你需要频繁同步超大文件，或依赖非 GitHub 平台（如 GitLab、Bitbucket），此插件可能不适合。此外，若库文件夹本身已是该仓库的克隆，插件会在桌面端调用本地 Git 更新克隆，需确保环境兼容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


