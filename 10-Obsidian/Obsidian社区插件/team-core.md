---
uid: 1791709368946000
title: 'Obsidian 插件：Oldeng Team Core'
tags: ['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 'Synchronize shared Markdown knowledge bases with Git history and S3 attachments. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Oldeng Team Core

> [!Note] 插件名片
> - 插件名称：Oldeng Team Core
> - 插件作者：ZheWana
> - 插件说明：Synchronize shared Markdown knowledge bases with Git history and S3 attachments. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhewana/OldengTeamCore)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?team-core)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhewana/OldengTeamCore/master/README.md)



## 概述

**Oldeng Team Core** 是一款专为小型团队设计的 Obsidian 知识库同步插件，旨在实现 Markdown 笔记与附件的高效协作。

**主要功能**：利用 Git 同步 Markdown 笔记及团队配置，通过兼容 S3 的对象存储同步附件，并在桌面与移动端提供一致的历史记录、冲突处理及恢复体验。

**适用场景**：适合需要多人协作、跨设备同步且对数据安全有要求的小型团队，特别是依赖 Obsidian 进行知识管理的场景。

**核心特色**：
1. **混合同步架构**：Git 管理文本，S3 管理大附件（自动分片下载与 SHA-256 校验），确保大文件传输稳定。
2. **安全机制**：绝不自动强制推送，遇到冲突时执行有限次合并，防止数据覆盖。
3. **一致体验**：双端同步状态可视化，支持快速导入/导出配置，降低上手门槛。

**使用建议**：
- 安装后需通过“快速导入”配置管理员提供的字符串，并填写全小写拼音用户名。
- **警惕双向同步风险**：本地删除会推送至远端。若误删文件且未同步，切勿点击“立即同步”，应使用“重置本地并重新同步”从远端恢复。
- 建议开启自动同步以提升效率，但日常操作前请确认本地修改无误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


