---
uid: 1793625612369000
title: "Obsidian 插件：E2EE Vault Sync"
tags: ["安全与隐私", "备份与恢复", "文件管理", "移动端优化", "obsidian插件"]
description: "File-by-file end-to-end encrypted sync (AES-GCM + PBKDF2) to your own server. Desktop & mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：E2EE Vault Sync

> [!Note] 插件名片
> - 插件名称：E2EE Vault Sync
> - 插件作者：onixtheoni
> - 插件说明：File-by-file end-to-end encrypted sync (AES-GCM + PBKDF2) to your own server. Desktop & mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '备份与恢复', '文件管理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theonix-dev/obsidian-e2ee-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?end-to-end-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theonix-dev/obsidian-e2ee-sync/master/README.md)



## 概述

E2EE Vault Sync 为 Obsidian 笔记库提供基于自托管服务器的端到端加密同步功能。它采用 AES-256-GCM 算法对每个文件进行独立加密，密钥由用户密码通过 PBKDF2 派生生成。服务器仅作为不可信的密文存储节点，无法获取任何明文内容或解密密钥，确保数据在传输和存储过程中均处于加密状态，从根本上防止服务器端泄露笔记内容。

典型场景包括在个人电脑与手机间同步私密日记或工作文档。例如，当你需要在外出时通过手机查看敏感项目笔记，插件会在本地完成加密后上传，服务器只接收加密数据包；另一台设备下载时再本地解密。这种机制适合对隐私要求极高、不愿依赖第三方云服务商存储明文数据的用户，实现跨平台（Windows、macOS、Linux、Android、iOS）的安全备份。

相比常规同步插件，该工具具备更强的恶意服务器防御能力。它通过绑定文件路径至密文防止内容替换，并在下载前进行 SHA-256 完整性校验。此外，它引入了“验证器”机制，确保新设备在首次推送前证明拥有正确密钥，避免误操作覆盖数据；对于异常的大规模删除请求，系统会要求用户明确确认，防止数据被恶意清空。这些设计使其在安全性上优于仅依赖 HTTPS 传输加密的方案。

使用前需注意，服务器能获取文件路径、大小和时间戳等元数据，若需隐藏元数据则不适用。客户端本地存储的同步密码默认保存在配置文件中，建议开启“仅内存保留”选项并启用设备全盘加密。该插件不适合需要完全匿名化元数据、或希望由第三方托管且无需自行维护服务器基础设施的用户，因为部署和维护自托管服务器需要一定的技术基础。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


