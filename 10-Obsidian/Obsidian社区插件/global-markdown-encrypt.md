---
uid: 2024052909030830
title: Obsidian 插件：Global Markdown Encryption
tags: ['安全', '编辑工具', '数据处理', 'obsidian插件']
description: 内存中的AES256-GCM Markdown加密
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Global Markdown Encryption

> [!Note] 插件名片
> - 插件名称：Global Markdown Encryption
> - 插件作者：shlemiel
> - 插件说明：内存中的 AES256-GCM Markdown 加密
> - 插件分类：[' 安全 ', ' 编辑工具 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/shlemiel/globaloe)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?global-markdown-encrypt)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/shlemiel/globaloe/master/README.md)

## 概述

这是一个 Obsidian 插件，用于在内存中进行 AES256-GCM Markdown 加密。插件提供了单密码加密的功能，使用简单。只需将编辑视图设置为默认视图，打开插件并输入密码，然后点击“note with lock”图标，插件会自动将带有“.aes256”扩展名的 Markdown 文件进行无缝加密。加密过程采用了保守的加密算法，包括 pbkdf2-sha512 密钥派生和 aes256-gcm 认证加密模式。由于技术原因，插件只支持编辑视图下的 Markdown 文件加密。使用该插件可以有效保护敏感信息的安全，解决 Obsidian 中 Markdown 文件的加密需求。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



