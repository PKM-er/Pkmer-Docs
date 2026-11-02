---
uid: 1793625612597000
title: "Obsidian 插件：Envoy"
tags: ["备份与恢复", "安全与隐私", "第三方工具集成", "obsidian插件"]
description: "Sync your vault across iPhone, Android, Mac, Windows and Linux through your own private GitLab project. No Git needed. Merges changes from two devices, and with Enclave uploads notes only locked. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Envoy

> [!Note] 插件名片
> - 插件名称：Envoy
> - 插件作者：flo-wolf
> - 插件说明：Sync your vault across iPhone, Android, Mac, Windows and Linux through your own private GitLab project. No Git needed. Merges changes from two devices, and with Enclave uploads notes only locked. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '安全与隐私', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/flo-wolf/obsidian-envoy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?envoy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/flo-wolf/obsidian-envoy/master/README.md)



## 概述

Envoy 是一款基于私有 GitLab 项目的 Obsidian 同步插件，旨在解决多设备间笔记同步的隐私与兼容性问题。它无需用户掌握 Git 命令或安装额外软件，只需在 GitLab 创建私有项目并配置访问令牌，即可实现 iPhone、Android、Mac、Windows 及 Linux 全平台的数据互通。所有笔记数据均存储在你自己的 GitLab 空间中，不经过任何第三方同步服务器，确保了数据的完全私有化与安全性。

典型使用场景包括跨平台无缝协作与历史版本管理。例如，你可以在电脑上编辑长文，随后在手机上通过自动同步功能即时查看最新内容；若某篇笔记在两台设备上同时被修改，Envoy 会自动合并变更，若出现冲突则提供并排对比视图供你手动选择保留内容。此外，由于每次同步都会生成 GitLab 提交记录，你可以随时回溯并恢复笔记的任意历史版本，有效防止误删或错误编辑带来的数据丢失。

相比其他同步方案，Envoy 的核心特色在于其“无 Git 依赖”的易用性与对 Enclave 插件的深度集成。它不仅能同步笔记，还能同步主题、插件及设置，且支持为不同设备保留独立的个性化配置。若搭配 Enclave 使用，私密笔记在上传前会被强制加密，确保敏感信息以密文形式存储于 GitLab，即使服务器被入侵也无法泄露明文内容，极大提升了数据安全性。

使用前需注意，若已启用 Obsidian 官方 Sync 功能，必须将其关闭以避免冲突。该插件不适合需要完全离线同步或不愿注册 GitLab 账号的用户。此外，虽然它支持自动同步，但首次连接已有笔记的库时，建议先备份，因为设置文件会以 GitLab 版本为准进行覆盖。对于追求极致隐私且希望掌控数据主权的用户而言，Envoy 是一个免费且可靠的替代方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


