---
uid: 1793625624817001
title: "Obsidian 插件：Wujie Hub"
tags: ["效率工具", "社交与社区", "文件管理", "obsidian插件"]
description: "Search, install, and update community plugins through download mirrors for users in China, and manage Wujie Sync releases. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wujie Hub

> [!Note] 插件名片
> - 插件名称：Wujie Hub
> - 插件作者：adventurer
> - 插件说明：Search, install, and update community plugins through download mirrors for users in China, and manage Wujie Sync releases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '社交与社区', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adventurer2008/wujie-hub)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wujie-hub)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adventurer2008/wujie-hub/master/README.md)



## 概述

Wujie Hub 是一款专为国内网络环境设计的 Obsidian 插件安装中心，旨在解决社区插件下载缓慢或失败的问题。它通过内置的多个 GitHub 加速镜像源，让用户能够便捷地搜索、安装和升级官方社区插件。此外，该插件还集成了“无界同步”管理功能，允许用户查看版本清单、校验 SHA-256 摘要，并支持在确认当前版本正常后，将代码回退至已标记的稳定版本，从而在更新失败时提供本地恢复能力。

典型使用场景包括：当你在 Obsidian 中想要安装某个热门插件，但直接下载超时或报错时，可以通过 Wujie Hub 的搜索栏输入插件名称，选择“安装”即可通过加速通道快速完成下载。另一个场景是当你升级了多个插件后，发现某个插件出现兼容性问题，你可以使用“检查更新”功能查看可用版本，或者利用无界同步区的“回退”功能，将代码恢复到之前手动标记为“正常”的版本，且该过程会保留你当前的配置文件。

相比其他插件管理器，Wujie Hub 的特色在于其针对国内网络的优化策略，它内置了六个候选加速源，并在请求失败时自动切换，最后尝试直连，提高了下载成功率。同时，它对“无界同步”提供了更细致的版本管理，包括 Alpha 和稳定版的独立展示、SHA-256 完整性校验以及基于本地快照的回滚机制。需要注意的是，普通社区插件目前尚未接入可信发布哈希，安装前需用户自行确认来源信任度，而 Wujie Hub 仅对无界同步文件进行摘要一致性检查。

使用前请注意，该插件仅修改目标插件的发行文件，并在本地保留备份，但备份并非断电事务，极端崩溃下可能需要手动恢复。它不适合需要完全离线安装插件的用户，因为搜索和下载依赖远程加速源；也不适合对插件来源有极高安全审计要求、必须验证作者签名的场景，因为普通插件下载缺乏独立的来源认证。此外，移动端及最低版本运行时验收仍在进行中，建议桌面端用户优先使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


