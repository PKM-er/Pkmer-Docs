---
uid: 1793625618620001
title: "Obsidian 插件：NoteHarbor Sync"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "obsidian插件"]
description: "An unofficial Obsidian plugin for synchronizing notes across devices using cloud storage. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：NoteHarbor Sync

> [!Note] 插件名片
> - 插件名称：NoteHarbor Sync
> - 插件作者：zenyyxz
> - 插件说明：An unofficial Obsidian plugin for synchronizing notes across devices using cloud storage. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zenyyxz/remotely-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remotely-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zenyyxz/remotely-sync/master/README.md)



## 概述

NoteHarbor Sync 是一款基于云存储实现 Obsidian 笔记库跨设备同步的社区插件。它不依赖官方付费同步服务，而是通过连接你已有的云存储账号，在多台设备间自动创建、更新或删除文件，保持笔记内容一致。所有核心功能均免费开放，无需注册 NoteHarbor 账号或订阅，用户只需授权自己选择的存储服务商即可开始使用。

典型场景包括：在办公室电脑和家中笔记本之间同步工作笔记，或让手机与电脑共享同一份知识库。例如，你可以将笔记库同步到 Dropbox 或 Google Drive，出门时用平板查看最新内容；若使用 S3 兼容存储如 Cloudflare R2，则能利用其低成本优势长期保存大量笔记。只要各设备配置相同的远程目录和加密设置，数据即可无缝流转。

相比官方同步，该插件支持更广泛的存储后端，包括 S3 兼容服务、Dropbox、OneDrive、WebDAV 等，灵活性更高。它提供可选的端到端加密，确保数据在传输和存储过程中不被第三方读取，并具备智能冲突解决机制，能自动合并较小的 Markdown 文件差异。此外，用户可自定义同步规则，如跳过大文件或隐藏路径，以优化同步效率。

使用前务必完整备份本地笔记库，因为同步过程可能修改或删除文件。注意云服务商可能收取存储或流量费用，且移动端处理超大文件（约 50MB 以上）时性能受限，建议启用跳过大文件选项。该插件不适合对数据隐私有极高要求且无法自行管理加密密钥的用户，也不推荐用于需要实时低延迟协作的场景，因为自动同步仅在 Obsidian 打开时运行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


