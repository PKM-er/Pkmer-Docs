---
uid: "1791709368925000"
title: "Obsidian 插件：OAuth Token Fetcher"
tags: ['第三方工具集成', '安全与隐私', '自动化与AI', 'obsidian插件']
description: "Periodically fetches an OAuth2 client-credentials token and stores it in Obsidian's SecretStorage so other plugins can use it. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：OAuth Token Fetcher

> [!Note] 插件名片
> - 插件名称：OAuth Token Fetcher
> - 插件作者：abovetheborg
> - 插件说明：Periodically fetches an OAuth2 client-credentials token and stores it in Obsidian's SecretStorage so other plugins can use it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '安全与隐私', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/abovetheborg/obsidian-oauth-token-fetcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?oauth-token-fetcher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/abovetheborg/obsidian-oauth-token-fetcher/master/README.md)



## 概述

**主要功能**
该插件定期从配置的 OAuth2 端点获取 `client_credentials` 访问令牌，并将其安全存储于 Obsidian 的 SecretStorage 中，供其他插件通过密钥名称读取使用。

**适用场景**
适用于需要调用外部 API 且依赖 OAuth2 认证的工作流。特别适合那些自身不具备令牌管理功能、但需要定期刷新身份验证信息的第三方 Obsidian 插件。

**核心特色**
1. **多连接管理**：支持配置多个独立的令牌端点，可分别设置客户端 ID、Secret 引用及作用域。
2. **智能刷新策略**：既支持固定时间间隔刷新，也支持基于令牌 `expires_in` 过期时间的自动刷新，确保令牌始终有效。
3. **联动重载**：成功获取新令牌后，可自动重载指定的依赖插件，使其立即应用新凭证，无需手动重启。
4. **安全与兼容**：敏感信息（如 Client Secret）通过 SecretStorage 引用，不直接明文存储；自动迁移旧版配置。

**使用建议**
1. 在 Obsidian 设置中预先创建好存放 Client Secret 和 Target Token 的 SecretStorage 条目。
2. 根据 API 的令牌有效期，选择“固定间隔”或“过期刷新”模式；若 API 未返回过期时间，建议保留固定间隔作为兜底。
3. 若目标插件对令牌敏感，务必启用“重载插件”选项，并建议开启“重载前确认”以防意外中断。
4. 调试阶段可开启 Debug 模式查看请求日志，定位连接或认证错误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

