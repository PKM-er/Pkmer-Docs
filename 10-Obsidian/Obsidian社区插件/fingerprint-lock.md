---
uid: 1791709367063000
title: 'Obsidian 插件：Fingerprint Lock'
tags: ['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
description: 'Lock your vaults and pages behind a full-screen lock screen, unlock it with your fingerprint on both Windows and MacOS. Even use a hardware security key if you want, a fallback password is optional.. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fingerprint Lock

> [!Note] 插件名片
> - 插件名称：Fingerprint Lock
> - 插件作者：Pazzy
> - 插件说明：Lock your vaults and pages behind a full-screen lock screen, unlock it with your fingerprint on both Windows and MacOS. Even use a hardware security key if you want, a fallback password is optional.. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alexpazzy/obsidian-fingerprint)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fingerprint-lock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alexpazzy/obsidian-fingerprint/master/README.md)



## 概述

**1. 主要功能**
为 Obsidian 提供全屏锁屏保护，支持通过生物识别（macOS Touch ID、Windows Hello 指纹/人脸/PIN）或硬件安全密钥（YubiKey）快速解锁，并可选设置密码作为备用方案。

**2. 适用场景**
适用于多用户共享电脑、公共办公环境或笔记本合盖未锁屏时，防止他人直接查看笔记内容。注意：此插件仅隐藏界面，**不提供磁盘文件加密**，若需数据静态加密请配合 FileVault/BitLocker 使用。

**3. 核心特色**
*   **零配置生物识别**：利用系统原生 API，首次加载自动编译/调用辅助程序，无需手动构建或安装额外依赖。
*   **隐私安全**：指纹/人脸数据由操作系统处理，插件仅接收“通过/拒绝”信号，不接触生物特征数据。
*   **跨平台兼容**：完美支持 macOS 和 Windows 10/11。

**4. 使用建议**
*   从社区插件目录直接安装即可，无需终端操作。
*   建议在设置中启用“密码备用”，以防生物识别失效。
*   若对数据安全性要求极高，务必结合系统级磁盘加密工具使用，切勿仅依赖此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


