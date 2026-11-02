---
uid: 1793625619930000
title: "Obsidian 插件：Passovik"
tags: ["安全与隐私", "效率工具", "搜索与排序", "obsidian插件"]
description: "Store passwords in an encrypted vault with groups, search, a password generator, and sync across devices. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Passovik

> [!Note] 插件名片
> - 插件名称：Passovik
> - 插件作者：zloyso
> - 插件说明：Store passwords in an encrypted vault with groups, search, a password generator, and sync across devices. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '效率工具', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zloyso/passovik)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?passovik)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zloyso/passovik/master/README.md)



## 概述

Passovik 是一个专为 Obsidian 设计的加密密码管理工具，核心功能是在本地存储中安全地保存账号密码。它采用 AES-256-GCM 算法对数据进行强制加密，确保没有主密码就无法读取磁盘上的任何信息。插件提供了完整的密码管理套件，包括分组、收藏、全局搜索以及带有强度指示器的密码生成器，让你能在笔记软件内直接管理敏感凭证，无需依赖外部应用。

典型的使用场景包括日常账号维护和跨设备同步。例如，当你需要在电脑和手机之间切换时，通过 Obsidian 自带的同步机制，Passovik 能自动合并不同设备上的修改，确保密码库始终最新。另一个场景是迁移旧数据，你可以将浏览器或旧密码管理器导出的 CSV 文件直接导入，插件能自动识别中英文列名，快速完成批量迁移，并建议删除明文源文件以保障安全。

相比其他同类插件，Passovik 的特色在于其深度集成与安全性设计。它不依赖网络服务，所有数据仅存储在 Obsidian 库内的特定文件夹中，且支持自动清理剪贴板以防泄露。此外，它具备智能的路径追踪能力，即使你移动或重命名了存储文件夹，插件也能自动识别并更新路径。其同步机制采用逐条记录合并策略，有效解决了多设备编辑时的冲突问题，同时提供了加密备份和回收站功能，防止误删数据。

使用前需注意，主密码一旦遗忘将无法恢复，请务必妥善备份。该插件不适合需要云端实时协作或复杂权限管理的团队场景，它主要服务于个人用户。另外，虽然数据加密存储，但导出 CSV 时会产生明文文件，使用后需立即删除。如果你希望密码管理完全独立于笔记库，或需要更复杂的生物识别登录选项，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


