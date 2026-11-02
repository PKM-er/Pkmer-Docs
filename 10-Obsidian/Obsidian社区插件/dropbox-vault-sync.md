---
uid: 1793625612333001
title: "Obsidian 插件：Dropbox Vault Sync"
tags: ["文件管理", "第三方工具集成", "备份与恢复", "移动端优化", "obsidian插件"]
description: "Sync vault notes and attachments with Dropbox across desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dropbox Vault Sync

> [!Note] 插件名片
> - 插件名称：Dropbox Vault Sync
> - 插件作者：laur
> - 插件说明：Sync vault notes and attachments with Dropbox across desktop and mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lau32/dropbox-obsidian-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dropbox-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lau32/dropbox-obsidian-sync/master/README.md)



## 概述

Dropbox Vault Sync 是一款注重隐私的双向同步插件，旨在解决 Obsidian 笔记在桌面端与移动端之间数据不一致的痛点。它通过直接连接你的 Dropbox 账户，实现笔记及附件的实时同步，无需依赖第三方服务器。核心机制采用基于状态的三方对账，能够自动合并不同设备上的非重叠编辑，确保 Markdown 文本在多处修改后仍能保持完整，避免产生重复文件。

想象一下，你在办公室用电脑撰写长篇文档，回家后在手机上补充了部分细节。该插件能智能识别这些分散的修改并自动合并，无需手动复制粘贴。若遇到同一行内容的冲突编辑，插件会保留本地版本，并将远程版本保存为带有时间戳和设备名的冲突副本，你可以通过命令面板快速定位并处理这些文件，确保数据不丢失。

相比其他同步方案，其最大特色在于“零中介”的隐私保护。插件不内置任何密钥，需用户自行创建 Dropbox 应用并填入 App Key，所有通信均通过官方 HTTPS 端点直接进行，杜绝了数据经过第三方代理或遥测的风险。此外，它具备强大的删除防护机制，当检测到大规模误删或空库连接时，会暂停同步并弹出审查窗口，让你选择恢复文件或取消操作，有效防止灾难性数据丢失。

使用前需注意，同步仅在 Obsidian 应用运行时进行，不支持完全后台静默同步。文件存储于 Dropbox 标准格式中，虽由 Dropbox 加密，但并非端到端零知识加密。该插件不适合对文件实时性要求极高、需要离线自动同步，或希望完全避免手动配置 Dropbox 应用密钥的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


