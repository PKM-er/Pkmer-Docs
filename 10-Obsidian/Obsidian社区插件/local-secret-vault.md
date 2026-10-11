---
uid: 1791709368201000
title: 'Obsidian 插件：Local Secret Vault'
tags: ['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
description: 'Store API keys, tokens, SSH keys and credentials in an encrypted vault with tags, custom properties and secure note links. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Secret Vault

> [!Note] 插件名片
> - 插件名称：Local Secret Vault
> - 插件作者：HSU HAO CHUN
> - 插件说明：Store API keys, tokens, SSH keys and credentials in an encrypted vault with tags, custom properties and secure note links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yamantaka520/Local-Secret-Vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-secret-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yamantaka520/Local-Secret-Vault/master/README.md)



## 概述

**1. 主要功能**
在 Obsidian 内构建本地加密保险库，安全存储 API 密钥、Token、SSH 密钥及账号密码。支持通过标签、自定义属性及多维度搜索快速定位条目。提供 JSON/SSH 文件导入、加密 JSON 备份导出，以及将 SSH 密钥保存为权限受限（600）的本地文件功能。

**2. 适用场景**
适用于需要管理大量开发凭证、云服务密钥或敏感账号信息的开发者与知识工作者。特别适合希望将密钥管理与笔记系统整合，且对数据本地化有较高安全要求的用户。

**3. 核心特色**
*   **高安全性**：基于本地加密，支持主密码保护；5 分钟无操作或窗口失焦自动锁定；复制密钥后 30 秒自动尝试清空剪贴板。
*   **隐私链接**：生成仅含 ID 的 Markdown 链接，笔记中不直接暴露密钥明文。
*   **数据备份**：写入前自动保留 `data.previous.json`，支持定期下载加密备份。
*   **注意**：仅限桌面端使用，界面为繁体中文。

**4. 使用建议**
*   **主密码管理**：主密码丢失无法恢复，务必牢记或存入其他安全介质。
*   **定期备份**：养成定期下载加密备份的习惯，并妥善保存备份文件。
*   **环境确认**：确认使用桌面版 Obsidian，并熟悉繁体中文界面操作。
*   **权限检查**：在 Unix 系统上保存 SSH 密钥时，确保文件系统权限设置正确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


