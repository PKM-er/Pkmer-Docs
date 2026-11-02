---
uid: 1793625613378000
title: "Obsidian 插件：Gitvault Sync"
tags: ["第三方工具集成", "安全与隐私", "备份与恢复", "obsidian插件"]
description: "Sync your vault across devices through your own private GitHub repository, end-to-end encrypted with your password. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gitvault Sync

> [!Note] 插件名片
> - 插件名称：Gitvault Sync
> - 插件作者：Denis S
> - 插件说明：Sync your vault across devices through your own private GitHub repository, end-to-end encrypted with your password. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/solidens/gitvault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitvault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/solidens/gitvault-sync/master/README.md)



## 概述

Gitvault Sync 利用你个人的私有 GitHub 仓库作为同步中枢，实现 Obsidian 库在桌面与移动设备间的无缝同步。其核心在于端到端加密机制，文件内容与文件名均通过 AES-256-GCM 算法在本地加密，GitHub 仅存储密文，无需依赖第三方服务器或订阅服务。所有写入操作均为条件式，确保多设备间不会发生静默覆盖，不同部分的编辑可自动合并，冲突时则保留双方版本并生成带时间戳的副本，保障数据完整性。

典型场景如通勤途中用手机记录灵感，回家后电脑自动同步最新内容；或在多台设备间切换工作，只需保持 Obsidian 开启，变更即可在数秒内同步至其他在线设备。插件支持“立即同步”、“暂停/恢复”及“查看状态”等命令，界面语言跟随 Obsidian 设置（目前支持英语和俄语），且同步过程全自动，无需手动干预。

相比同类插件，Gitvault Sync 的最大特色是“无中间人”与“完整历史”。它仅连接 api.github.com 和 github.com，无遥测数据，且因底层为 Git 仓库，天然具备版本回溯能力。此外，它具备多重安全网：删除大量文件前会询问确认，空仓库不会被误判为“清空所有”，正在编辑的笔记也不会被远程覆盖。仅传输变更文件，同步速度快，且对大文件（超过 50 MB）有跳过机制，避免 GitHub 仓库过大导致性能下降。

使用前需注意，该插件目前处于 Beta 阶段，建议首次同步前备份库。密码是解密唯一钥匙，若丢失，GitHub 上的数据将无法恢复，但本地文件不受影响。移动端无法在后台同步，必须保持 Obsidian 应用在前台运行。此外，同步 `.obsidian` 设置和插件默认关闭，需手动开启。若你的库包含大量超大文件或总容量接近 1 GB，可能不适合使用此插件，因为 GitHub 对仓库大小有限制，插件会在 700 MB 时发出警告。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


