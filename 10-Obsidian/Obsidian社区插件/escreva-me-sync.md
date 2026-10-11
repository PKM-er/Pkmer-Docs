---
uid: 1791709366793000
title: 'Obsidian 插件：Escreva-me sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Sends vault notes to Escreva-me and writes exported reflections back into the vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Escreva-me sync

> [!Note] 插件名片
> - 插件名称：Escreva-me sync
> - 插件作者：felipe-mingoti
> - 插件说明：Sends vault notes to Escreva-me and writes exported reflections back into the vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/felipe-mingoti/escreva-me-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?escreva-me-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/felipe-mingoti/escreva-me-obsidian-plugin/master/README.md)



## 概述

**主要功能**
该插件实现 Obsidian 与在线写作平台 Escreva-me 的双向同步。它将 Vault 中的 Markdown 笔记（路径及内容）发送至 Escreva-me 服务器存储；同时，定期从平台拉取用户选择导出的“每日反思”，并自动写回 Vault 中指定的 `Escreva-me/Reflections/` 文件夹。

**适用场景**
适合希望将本地笔记备份至云端、利用 Escreva-me 进行日常反思记录，并需将云端生成的洞察无缝整合回本地知识库的用户。

**核心特色**
1. **双向同步**：支持笔记的创建、编辑、重命名和删除同步，以及云端反思的自动回写。
2. **智能排除**：自动忽略 `Escreva-me/Reflections/` 文件夹，避免数据循环覆盖。
3. **安全机制**：使用一次性 Token 认证，平台仅存储 Token 哈希值，支持随时吊销旧 Token。
4. **自动轮询**：保存 Token 后全量同步现有笔记，随后实时同步变更，并每分钟检查一次新反思。

**使用建议**
1. 在 Escreva-me 账户中生成 Obsidian 专用 Token，并立即在 Obsidian 设置中粘贴保存（Token 仅显示一次）。
2. 确保 Vault 中已创建 `Escreva-me/Reflections/` 文件夹以接收导出内容。
3. 注意隐私：所有同步的 `.md` 文件内容将上传至 Escreva-me 服务器，请谨慎处理敏感信息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


