---
uid: 1793625612328001
title: "Obsidian 插件：Drive Vault Keeper"
tags: ["备份与恢复", "文件管理", "第三方工具集成", "移动端优化", "obsidian插件"]
description: "Mirror and back up your entire vault untouched (1:1 binary preservation) to Google Drive once a day, and restore or sync on demand across macOS, Windows, and Android. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drive Vault Keeper

> [!Note] 插件名片
> - 插件名称：Drive Vault Keeper
> - 插件作者：Kim Kanghyeon
> - 插件说明：Mirror and back up your entire vault untouched (1:1 binary preservation) to Google Drive once a day, and restore or sync on demand across macOS, Windows, and Android. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '第三方工具集成', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kkh041014/drive-vault-keeper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drive-vault-keeper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kkh041014/drive-vault-keeper/master/README.md)



## 概述

Drive Vault Keeper 旨在解决 Obsidian 笔记库在跨设备同步时的数据完整性问题，核心功能是将整个 Vault 以 1:1 二进制原样镜像备份至 Google Drive。它不依赖文本解析，而是将 Markdown 笔记、PDF、图片、音频及所有附件作为原始数据流传输，确保每一个字节都保持原样，实现真正的无损备份。

典型使用场景包括日常自动备份与多设备恢复。例如，你可以设置插件每天自动将当前电脑上的笔记库推送到 Google Drive 的指定文件夹；当更换新电脑或手机时，只需在 macOS、Windows 或 Android 设备上执行“从 Google Drive 拉取”操作，即可将云端备份完整镜像到本地，快速恢复工作环境。

相比常见的同步插件，Drive Vault Keeper 的特色在于其高效的增量同步机制。它通过对比本地文件的 MD5 校验值与 Google Drive 的元数据，仅上传或下载新增及修改过的文件，大幅节省流量和时间。此外，它支持 macOS、Windows 和 Android 三大平台，填补了移动端与桌面端之间直接通过 Google Drive 进行二进制级同步的空白。

使用前需注意，该插件需要用户自行配置 Google OAuth 2.0 的 Client ID、Secret 及 Refresh Token，具有一定的技术门槛。它主要服务于“备份与恢复”需求，而非实时双向同步，因此不适合需要多设备间即时、频繁双向编辑同步的场景。若你追求的是类似 iCloud 或 Syncthing 的实时协作体验，此插件可能并非最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


