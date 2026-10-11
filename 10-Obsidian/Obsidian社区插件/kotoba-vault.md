---
uid: 1791709367950000
title: 'Obsidian 插件：Kotoba Vault'
tags: ['文件管理', '学习与教育', '效率工具', 'obsidian插件']
description: 'Organize Japanese vocabulary notes into gojuon folders from a reading property. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kotoba Vault

> [!Note] 插件名片
> - 插件名称：Kotoba Vault
> - 插件作者：lain
> - 插件说明：Organize Japanese vocabulary notes into gojuon folders from a reading property. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/saegusa1996/kotoba-vault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kotoba-vault)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/saegusa1996/kotoba-vault/master/README.md)



## 概述

**1. 主要功能**
Kotoba Vault 是一款专为日语学习者设计的 Obsidian 插件。它通过读取笔记属性中的 `reading`（读音）字段，自动将词汇笔记归类到对应的五十音图文件夹中。插件利用 Obsidian 原生文件管理器移动文件，确保内部链接在笔记迁移后依然保持有效。

**2. 适用场景**
适用于拥有大量日语词汇笔记、且希望摆脱单一文件夹浏览缓慢问题的用户。特别适合那些通过汉字文件名无法直接按发音分类，需要依赖读音元数据进行结构化管理的语言学习库。

**3. 核心特色**
*   **读音驱动分类**：以 `reading` 属性为唯一真理，自动处理浊音、半浊音、小写假名及片假名，将其标准化映射至基础五十音文件夹。
*   **链接完整性**：移动笔记时自动更新内部链接，避免断链。
*   **安全迁移**：提供“试运行”（dry-run）预览功能，显示可移动、未解析及冲突文件数量，确保操作可控。
*   **性能优化**：仅监控指定词汇根目录和收件箱，启动时仅扫描收件箱，并具备防抖机制，避免大库卡顿。

**4. 使用建议**
建议在笔记 YAML 属性中准确填写 `reading` 字段（如 `reading: あたためる`）。初次使用时，可先利用“收件箱预览”功能检查分类结果，确认无误后再执行移动操作，以维护库结构的整洁与链接的完整性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


