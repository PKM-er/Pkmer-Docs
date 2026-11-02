---
uid: 1793625611413000
title: "Obsidian 插件：Crypt Drive Sync"
tags: ["安全与隐私", "备份与恢复", "第三方工具集成", "文件管理", "obsidian插件"]
description: "Sync your vault across devices through your own Google Drive, end-to-end encrypted and compatible with rclone crypt. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Crypt Drive Sync

> [!Note] 插件名片
> - 插件名称：Crypt Drive Sync
> - 插件作者：mooncodee
> - 插件说明：Sync your vault across devices through your own Google Drive, end-to-end encrypted and compatible with rclone crypt. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mooncodee/crypt-drive-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?crypt-drive-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mooncodee/crypt-drive-sync/master/README.md)



## 概述

Crypt Drive Sync 旨在解决 Obsidian 笔记库在多设备间同步的隐私与兼容性问题。它利用用户自有的 Google Drive 作为存储后端，在数据上传前于本地完成端到端加密，确保云端仅存储密文，无法窥探笔记名称或内容。该插件完全兼容 rclone crypt 标准，意味着你的数据不仅能在 Obsidian 中无缝流转，还能通过命令行工具直接读取、校验或恢复，避免了被单一软件生态锁定的风险。

典型使用场景包括跨平台工作流与数据备份。例如，你可以在 Mac 上撰写长文，随后在 iPhone 或 Android 手机上通过同一账号登录并自动同步，实现随时查阅；或者在 Windows 电脑上修改配置后，Linux 服务器端能即时获取更新。此外，若你习惯使用 rclone 管理云端文件，该插件允许你直接复用现有的加密远程配置，无需重新建立加密体系，极大简化了多工具协作的复杂度。

相比其他同步方案，其核心特色在于“无锁定”与“高安全性”。它不依赖第三方服务器，所有加密密钥仅保存在本地设备，密码一旦丢失无法找回，但这也确保了极高的隐私等级。插件内置了多重安全机制，如冲突时保留双版本、删除文件进入云端回收站而非永久消失、以及同步前对大量删除操作的二次确认。此外，它支持移动端运行，且界面语言跟随 Obsidian 设置，目前提供英文和俄文支持。

使用前需注意，该插件并非实时同步，而是基于启动、定时（每10分钟）或编辑后延迟触发，移动端后台挂起时可能延迟同步。超过 50MB 的大文件默认会被跳过，且重命名操作会被视为“删除+新建”。它不适合对同步延迟有毫秒级要求的场景，也不适合希望完全离线、不使用 Google 生态的用户。若你依赖 Google Drive 作为主要存储且重视数据主权，这是一个稳健的选择；若你偏好 Syncthing 等 P2P 方案，则此插件可能不适用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


