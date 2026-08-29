---
uid: 1786577078474001
title: 'Obsidian 插件：Hermes R2 Vault'
tags: ['安全与隐私', '备份与恢复', '第三方工具集成', '发布工具', 'obsidian插件']
description: '能在本地加密Obsidian笔记，还能把它们发布到适用于Hermes的Cloudflare R2上。——这个插件还没经过Obsidian官方人员的手动审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hermes R2 Vault

> [!Note] 插件名片
> - 插件名称：Hermes R2 Vault
> - 插件作者：Ivan
> - 插件说明：能在本地加密Obsidian笔记，还能把它们发布到适用于Hermes的Cloudflare R2上。——这个插件还没经过Obsidian官方人员的手动审核哦。
> - 插件分类：['安全与隐私', '备份与恢复', '第三方工具集成', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ivana331100/VPS-R2-Obsidian-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hermes-rvault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivana331100/VPS-R2-Obsidian-sync/master/README.md)



## 概述

### Hermes R2 Vault 插件总结
1. **主要功能**：对 Obsidian 笔记进行本地加密，并通过控制 API（Hermes VPS）将其发布到 Cloudflare R2 进行存储。支持双向同步、文件版本历史记录、单文件恢复、时间点金库恢复等功能。
2. **适用场景**：适用于需要安全存储和同步 Obsidian 笔记的用户，尤其是注重数据隐私和多设备同步的场景。
3. **核心特色**：采用客户端加密（XChaCha20 - Poly1305 + Argon2id），控制 API 不接收明文 Markdown 内容，仅 Cloudflare R2 为持久存储，保障数据安全。具备双向同步和 LWW 冲突解决机制，还有丰富功能如多设备注册、历史完整性扫描等，支持俄英双语。
4. **使用建议**：鉴于插件未经过 Obsidian 官方人工审核，使用前需充分了解其安全性。配置时可利用设置 URI 进行设备配对，日常使用中可借助冲突中心 UI 处理同步冲突，定期使用历史完整性扫描功能确保数据安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


