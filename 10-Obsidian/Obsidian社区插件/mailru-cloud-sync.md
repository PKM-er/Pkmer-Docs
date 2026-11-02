---
uid: 1793625615168000
title: "Obsidian 插件：Mail.ru Cloud Sync"
tags: ["备份与恢复", "第三方工具集成", "安全与隐私", "obsidian插件"]
description: "Sync your Obsidian vault with Mail.ru Cloud via WebDAV with End-to-End Encryption (E2E) and settings transfer - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mail.ru Cloud Sync

> [!Note] 插件名片
> - 插件名称：Mail.ru Cloud Sync
> - 插件作者：centhron
> - 插件说明：Sync your Obsidian vault with Mail.ru Cloud via WebDAV with End-to-End Encryption (E2E) and settings transfer - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '第三方工具集成', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/scenthron/obsidian-mailru-cloud-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mailru-cloud-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/scenthron/obsidian-mailru-cloud-sync/master/README.md)



## 概述

Mail.ru Cloud Sync 专为依赖 Mail.ru 云服务的用户设计，核心功能是通过 WebDAV 协议直接连接官方服务器，实现 Obsidian 库的双向同步。它最大的亮点在于内置了 AES-256-GCM 端到端加密，确保笔记和附件在上传前即被加密，云端无法读取明文内容。此外，插件支持通过加密链接一键迁移设置，让你能迅速在新设备上恢复同步状态，无需手动重新配置复杂的参数。

想象一下，你在办公室用电脑撰写重要文档，回家后只需在手机上打开 Obsidian，即可无缝继续编辑。或者，当你更换新电脑时，只需点击一次“通过链接传输设置”，输入临时密码，所有同步配置和加密密钥便会自动导入，省去了繁琐的手动设置过程。这种即时同步和便捷迁移能力，特别适合需要在多设备间频繁切换工作场景的用户。

与同类同步插件相比，该插件在隐私保护上更为彻底，不仅加密文件内容，还通过 PBKDF2 密钥派生增强安全性。它具备“快速失败”机制，若检测到云端存在加密文件但本地未设置密码，会立即停止同步以防止数据损坏。同时，智能数据丢失保护功能会在单次同步删除文件超过阈值时自动暂停并请求确认，有效防止因误操作导致的大规模笔记丢失。

使用前请务必为整个 Obsidian 库创建完整备份，这是应对版本冲突或配置错误的标准安全措施。该插件仅适用于拥有 Mail.ru 云账户的用户，且需要生成专用的 WebDAV 应用密码。如果你使用的是其他云服务商（如 Google Drive 或 Dropbox），或者对端到端加密没有强烈需求，此插件可能不是最佳选择。此外，由于涉及加密密钥管理，请确保妥善保管你的秘密口令，丢失口令将导致无法解密云端数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


