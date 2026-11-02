---
uid: 1793625605767000
title: "Obsidian 插件：Ajimo Sync"
tags: ["文件管理", "安全与隐私", "备份与恢复", "obsidian插件"]
description: "Sync notes and attachments through your own server with end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ajimo Sync

> [!Note] 插件名片
> - 插件名称：Ajimo Sync
> - 插件作者：ajimo
> - 插件说明：Sync notes and attachments through your own server with end-to-end encryption. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '安全与隐私', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/floryajimo/ajimo-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?floryajimo-private-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/floryajimo/ajimo-sync/master/README.md)



## 概述

Ajimo Sync 旨在解决多设备间笔记与附件的同步难题，其核心在于通过用户自建的服务器实现端到端加密传输。该插件不依赖第三方云服务，而是要求用户部署兼容的私有同步服务器，利用 AES-256-GCM 算法在本地对文件内容和路径进行加密，确保只有持有密钥的设备才能解密数据，从而在保持数据私密性的同时实现跨平台同步。

典型使用场景适用于拥有多台设备且注重隐私的用户。例如，你可以在办公室的 Windows 电脑和家中的 Android 手机上安装该插件，配置相同的服务器地址、API 令牌、Vault ID 和加密密钥，即可实现笔记的实时互通。当你在手机上修改笔记后，电脑端会在默认 5 秒延迟后自动拉取更新，无需手动操作，适合需要频繁切换设备且对数据安全性有较高要求的知识工作者。

相比常见的 WebDAV 同步方案，Ajimo Sync 的最大特色是强制端到端加密，服务器仅存储密文，无法查看文件内容或路径，且插件不向作者发送任何遥测数据。它支持冲突副本保留机制，能妥善处理多端同时编辑的情况，并允许用户自定义同步频率，如将周期性检查设为 10 分钟或完全禁用，以平衡同步及时性与资源消耗。

需要注意的是，该插件目前处于实验阶段，且服务器端代码未公开，普通用户难以自行部署，仅适合已拥有兼容服务器访问权限的用户。此外，同步功能不等同于备份，若丢失加密密钥，服务器无法恢复数据，因此必须独立维护 Vault 备份。它也不同步插件设置或配置目录，且移动端在后台运行时可能因系统限制而暂停同步，不适合对实时性要求极高或无法自建服务器的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


