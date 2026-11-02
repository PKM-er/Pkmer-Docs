---
uid: 1793625619720001
title: "Obsidian 插件：oVaultd Sync"
tags: ["备份与恢复", "安全与隐私", "文件管理", "obsidian插件"]
description: "Sync your vault through your own ovaultd server: end-to-end encrypted, revision-based, no third parties. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：oVaultd Sync

> [!Note] 插件名片
> - 插件名称：oVaultd Sync
> - 插件作者：kastor
> - 插件说明：Sync your vault through your own ovaultd server: end-to-end encrypted, revision-based, no third parties. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kastormdz/ovaultd-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ovaultd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kastormdz/ovaultd-plugin/master/README.md)



## 概述

oVaultd Sync 允许你将 Obsidian 笔记库同步到自建的 ovaultd 服务器，实现端到端加密的离线备份与多设备同步。该插件并非简单的 HTTP 客户端，而是内嵌了与命令行工具相同的持久化核心引擎，确保插件与 CLI 共享同一套同步逻辑。它采用事件驱动机制，仅在笔记发生变动时触发同步，避免了传统轮询带来的资源浪费，同时通过状态栏实时反馈同步进度、冲突或错误状态，让你对数据状态一目了然。

典型场景包括多设备间的笔记无缝流转与数据安全备份。例如，你可以在家中电脑编辑笔记，出门后在手机上自动获取最新内容，且所有传输数据均经过加密，服务器仅存储密文，无法读取你的笔记内容。若两台设备同时修改了同一文件，插件会明确提示冲突，让你选择保留本地版本或远程版本，甚至支持批量处理多个冲突文件，确保没有任何一方的编辑被意外覆盖或丢失。

相比依赖第三方云服务的同步插件，oVaultd Sync 的最大特色在于完全由用户掌控基础设施，无遥测、无广告、无第三方数据泄露风险。它采用基于修订版本的同步机制，通过签名记录链确保数据完整性，即使服务器被攻破，攻击者也无法解密你的笔记。此外，插件与服务器版本严格配对，若版本不兼容会拒绝连接，从机制上避免了因版本差异导致的数据损坏或同步失败问题。

使用前需注意，你必须先部署并运行一个 ovaultd 服务器实例，并在其中创建账户，插件仅与你配置的服务器通信。它不适合希望开箱即用、无需自行维护服务器基础设施的用户，也不适合对同步实时性有极高要求、无法接受事件驱动延迟的场景。若你丢失了库密码，需使用创建时生成的恢复密钥找回访问权限，因此务必妥善保管该密钥。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


