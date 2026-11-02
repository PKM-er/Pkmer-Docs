---
uid: 1793625621015000
title: "Obsidian 插件：Sealed Sync"
tags: ["安全与隐私", "备份与恢复", "效率工具", "obsidian插件"]
description: "Sync notes between devices in realtime. Each note is encrypted on the device before it is sent. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sealed Sync

> [!Note] 插件名片
> - 插件名称：Sealed Sync
> - 插件作者：Vedant Mahajan
> - 插件说明：Sync notes between devices in realtime. Each note is encrypted on the device before it is sent. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vedant817/obsisync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsisync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vedant817/obsisync/master/README.md)



## 概述

Sealed Sync 是一款专注于在电脑和手机之间实时同步 Obsidian 笔记的插件。其核心机制是在数据离开设备前，先在本地进行 AES-256-GCM 加密，确保服务器仅存储密文。同步过程完全自动化，无需手动点击按钮，桌面端约每秒、移动端约每五秒检查一次更新，让多设备间的笔记修改几乎即时可见。

典型的使用场景是当你需要在办公室电脑和通勤路上的手机间无缝切换工作流时。例如，你在电脑上编辑完一篇长文，手机打开 Obsidian 时能立即看到最新内容；或者在手机上快速记录灵感，回到电脑前发现笔记已自动同步到位。新设备接入也很简单，只需扫描配对二维码或输入三个代码值即可加入，无需复杂的网络配置。

相比官方付费的 Obsidian Sync 或需要自建服务器的 LiveSync，Sealed Sync 的最大特色是免费且免运维。它利用托管 API 服务，用户无需配置 Tailscale 或管理数据库，也无需担心不同 Wi-Fi 环境下的连接问题。此外，它提供了端到端加密，密钥仅保留在用户设备上，通过恢复短语管理，隐私安全性优于部分依赖云端明文的同步方案。

使用前需注意，单次同步请求大小限制约为 4.5 MB，超大附件可能同步失败。同时，该插件与官方 Obsidian Sync 不能同时启用，否则会导致数据覆盖冲突，需二选一。如果你需要官方版本历史查看器、企业级支持，或希望将数据完全存储在自有的 Dropbox/S3 账户中，那么 Sealed Sync 可能不是最佳选择，建议考虑其他同步方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


