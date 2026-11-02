---
uid: 1793625624193000
title: "Obsidian 插件：Vault Sync for Google Drive"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "Two-way sync between your vault and Google Drive using your own Google credentials. Works on desktop and iOS. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Sync for Google Drive

> [!Note] 插件名片
> - 插件名称：Vault Sync for Google Drive
> - 插件作者：Hyunho Kim
> - 插件说明：Two-way sync between your vault and Google Drive using your own Google credentials. Works on desktop and iOS. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hyunho058/obsidian-google-drive-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-sync-for-google-drive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hyunho058/obsidian-google-drive-sync/master/README.md)



## 概述

Vault Sync for Google Drive 旨在解决 Obsidian 笔记在多设备间同步的痛点，核心功能是利用你个人的 Google 账号实现 Vault 与 Google Drive 之间的双向同步。它不依赖任何第三方服务器，数据直接从你的设备传输至 Google Drive，确保隐私安全。你只需在 Google Cloud 控制台创建一次免费的 API 密钥，即可让电脑和手机上的笔记实时互通，无需额外付费或注册其他服务。

典型场景包括在办公室电脑上编辑笔记，回家后通过手机查看最新内容；或者在手机上记录灵感，回到电脑前发现笔记已自动同步。此外，你还可以在 drive.google.com 上像浏览普通文件夹一样直接访问和浏览这些同步的笔记，方便进行归档或分享给他人。对于需要跨平台协作的用户，该插件还支持同步 Google Drive 中他人共享的文件夹，只要拥有编辑权限即可将团队项目笔记纳入个人 Vault。

相比其他同步方案，该插件的最大特色是“去中心化”和“透明性”。它仅连接 Google 官方接口，无追踪、无广告、无数据收集，且登录凭证存储在 Obsidian 的安全存储中，不会上传至云端。此外，它具备智能冲突处理机制：当同一笔记在两台设备上同时被修改时，插件不会覆盖任何版本，而是保留 Drive 中的原版，并将本地版本另存为带有设备名和时间戳的文件，供用户手动比对合并，极大降低了数据丢失风险。

使用前需注意，首次设置需在 Google Cloud 控制台完成，耗时约 15 分钟，且必须将发布状态设为“生产环境”，否则 7 天后会失效。该插件不适合需要自动合并冲突的用户，因为冲突需手动处理；也不支持同步 Google Docs、Sheets 等专有格式文件，仅处理 Markdown 等普通文件。若你希望完全离线同步或不想依赖 Google 生态，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


