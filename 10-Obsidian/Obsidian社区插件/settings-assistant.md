---
uid: 1791709369893000
title: 'Obsidian 插件：Settings Assistant'
tags: ['自动化与AI', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Change app and plugin settings through reviewed profiles or a local-LLM chat — with secrets left out, a diff before every write, and snapshots to roll back. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Settings Assistant

> [!Note] 插件名片
> - 插件名称：Settings Assistant
> - 插件作者：Johannes Kaindl
> - 插件说明：Change app and plugin settings through reviewed profiles or a local-LLM chat — with secrets left out, a diff before every write, and snapshots to roll back. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '安全与隐私', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/settings-assistant)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?settings-assistant)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/settings-assistant/master/README.md)



## 概述

**插件名称：Settings Assistant**

**主要功能**
该插件允许用户通过“配置文件”或本地LLM聊天来修改Obsidian及应用插件的设置。它引入了审查机制，在写入前展示差异对比，并自动排除敏感信息（密钥），同时生成快照以支持回滚。

**适用场景**
适用于需要批量调整多个Vault设置、同步不同设备配置，或希望安全、可追溯地修改复杂插件参数的场景。特别适合对JSON配置文件直接编辑感到困难或担心出错的用户。

**核心特色**
1. **笔记即配置**：将设置定义为笔记中的代码块，在阅读视图下可实时预览当前状态与目标状态的差异。
2. **安全审查**：每次写入前显示详细Diff，明确标注“将变更”、“已设置”或“未找到”等状态，仅应用用户勾选的项目。
3. **隐私保护**：自动过滤敏感密钥，确保聊天或分享配置时不泄露隐私。
4. **可回滚性**：每次应用前自动保存快照，方便随时恢复至之前状态。

**使用建议**
建议先在小范围测试配置文件，确认Diff无误后再应用。利用本地LLM功能可快速生成复杂配置，但务必仔细检查生成的Diff。对于多Vault用户，可将常用配置保存为模板笔记，实现跨库同步。注意该插件需Obsidian 1.11.4及以上版本，且支持桌面端和移动端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


