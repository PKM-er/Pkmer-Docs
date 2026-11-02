---
uid: 1793625624844000
title: "Obsidian 插件：xSync"
tags: ["备份与恢复", "安全与隐私", "第三方工具集成", "obsidian插件"]
description: "Sync your vault across devices with end-to-end encryption and a self-hosted server you can share with friends. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：xSync

> [!Note] 插件名片
> - 插件名称：xSync
> - 插件作者：y
> - 插件说明：Sync your vault across devices with end-to-end encryption and a self-hosted server you can share with friends. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deku0818/xSync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?xsync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deku0818/xSync/master/README.md)



## 概述

xSync 是一款基于自托管服务器和端到端加密技术的 Obsidian 库同步插件。它允许用户将笔记、附件及共享配置在多台设备间安全同步，同时确保服务器无法解密库内容。该插件支持多用户管理，每位用户拥有独立的访问密钥和库空间，适合需要严格隐私保护的个人或小团队使用。

典型场景包括跨设备工作流与好友协作。例如，你可以在办公室电脑和家中笔记本间无缝同步项目笔记，确保数据实时一致；或者与朋友共享同一台服务器，各自维护独立的加密库，互不干扰。当遇到文件冲突时，你可以选择保留特定版本、合并文本或稍后处理，而其他文件继续正常同步，避免阻塞整体流程。

相比依赖第三方云服务的同步方案，xSync 的核心优势在于数据主权与隐私控制。服务器仅存储加密后的数据，无法获取明文内容，且支持按设备独立设置文件大小、文件夹、扩展名及正则表达式排除规则。此外，插件具备持久化队列机制，能在应用恢复前台时自动补全中断的同步任务，并支持暂停与恢复操作，增强了同步过程的稳定性与可控性。

使用前需注意，同步主要在应用前台运行时进行，后台或锁屏状态下的持续同步不作保证。当前版本不提供版本历史或回收站功能，建议首次使用前手动备份库文件。此外，服务器端可见用户标签、库显示名、设备名及文件元数据，若需极致隐私，需自行评估这些元数据的影响。该插件不适合需要自动后台同步或依赖云端版本回溯的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


