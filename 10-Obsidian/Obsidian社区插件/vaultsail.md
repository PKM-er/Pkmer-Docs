---
uid: 1793625624226000
title: "Obsidian 插件：VaultSail"
tags: ["文件管理", "第三方工具集成", "安全与隐私", "备份与恢复", "obsidian插件"]
description: "Sync notes and attachments through Baidu Netdisk with version preservation and encrypted device pairing. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：VaultSail

> [!Note] 插件名片
> - 插件名称：VaultSail
> - 插件作者：Eboo
> - 插件说明：Sync notes and attachments through Baidu Netdisk with version preservation and encrypted device pairing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/gongteng0215/obsidian-vaultsail)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vaultsail)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gongteng0215/obsidian-vaultsail/master/README.md)



## 概述

VaultSail 旨在解决 Obsidian 笔记与附件在本地设备间的同步难题，核心功能是通过用户自有的百度网盘账号实现数据互通。它支持 Markdown 文档及图片、PDF 等附件的自动或手动同步，并具备版本保留、冲突自动合并及加密设备配对能力。该插件直接连接百度服务器，无需依赖第三方中转服务，确保数据始终掌握在用户手中，同时提供详细的同步进度与性能监控，让传输过程透明可控。

典型使用场景包括多设备间的无缝协作与个人数据备份。例如，你可以在电脑上编辑长篇笔记，插件会自动将变更同步至云端，随后在 iPad 上打开 Obsidian 即可看到最新内容，无需手动传输文件。另一个场景是当你在不同设备上对同一笔记进行编辑时，插件能识别差异并尝试自动合并兼容的修改；若存在冲突，则会提供专门的编辑器让你选择保留哪个版本或合并两者，避免数据丢失。

相比同类插件，VaultSail 的最大特色在于其“去中心化”架构与精细的版本控制。它不依赖开发者运营的服务器，而是利用用户自己的百度网盘空间，隐私性更强。此外，它采用内容哈希与父版本机制来识别变更，而非简单比较时间戳，从而更准确地处理并发编辑。插件还支持通过加密代码或文件进行设备配对，新设备接入时无需重复浏览器登录，且具备断点续传与错误恢复机制，提升了同步的稳定性。

使用前需注意，该插件目前主要支持中文界面，且对大文件传输有特定限制：桌面端支持最大 512 MiB 的文件，但移动端仅支持 20 MiB 以下。若你的工作流涉及频繁传输超大视频或高清素材，或依赖非百度系的云存储服务，此插件可能不适用。此外，虽然插件具备冲突解决能力，但建议定期手动检查同步状态，以确保关键数据的安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


