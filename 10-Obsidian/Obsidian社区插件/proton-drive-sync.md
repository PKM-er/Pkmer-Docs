---
uid: 1791709369349000
title: 'Obsidian 插件：Proton Drive Sync'
tags: ['第三方工具集成', '备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
description: 'End-to-end encrypted bidirectional sync of your vault with Proton Drive, with three-way conflict remediation for offline edits. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Proton Drive Sync

> [!Note] 插件名片
> - 插件名称：Proton Drive Sync
> - 插件作者：Marcos
> - 插件说明：End-to-end encrypted bidirectional sync of your vault with Proton Drive, with three-way conflict remediation for offline edits. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '备份与恢复', '安全与隐私', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/marckfp/obsidian-proton-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?proton-drive-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/marckfp/obsidian-proton-sync/master/README.md)



## 概述

**Proton Drive Sync** 是一款基于 Proton 官方 SDK 的 Obsidian 插件，实现 Vault 与 Proton Drive 文件夹间的端到端加密双向同步。

**适用场景**：适合注重隐私、希望将笔记数据存储在 Proton Drive 且需要多设备间安全同步的用户。

**核心特色**：
1. **全量同步**：支持笔记、附件及配置文件的完整同步，数据在离开设备前即完成加密。
2. **智能重命名**：能识别文件内容，确保重命名或移动操作在另一端同步为“移动”而非“删除+上传”，保留 Drive 版本历史。
3. **三方冲突处理**：通过记录双方最后共识版本，精准检测离线期间的真实冲突。支持保留双副本（默认）或行级三方合并，避免静默覆盖。

**使用建议**：
该插件目前处于 **Alpha 阶段**，且依赖预发布版 SDK。由于主要借助 AI 辅助编写，未经过严格安全审计和长期实测，存在潜在 Bug 风险。
**强烈建议**：
1. 务必先备份数据，并在副本 Vault 上试用。
2. 谨慎处理冲突，避免数据丢失。
3. 关注插件更新，待其稳定后再用于生产环境。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


